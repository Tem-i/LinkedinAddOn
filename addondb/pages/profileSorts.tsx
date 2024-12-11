import { WithId, Document } from "mongodb";

//Do search sort
const phraseRelevancy = (file: WithId<Document>, phrase: string): number => {
    if (!phrase) return 0; // If no phrase is provided, return 0

    let count = 0;
    const lowerCasePhrase = phrase.toLowerCase();

    // Helper function to search strings and count occurrences
    const countInString = (str: string): number => {
        const lowerStr = str.toLowerCase();
        let index = lowerStr.indexOf(lowerCasePhrase);
        let occurrences = 0;
        while (index !== -1) {
            occurrences++;
            index = lowerStr.indexOf(lowerCasePhrase, index + lowerCasePhrase.length);
        }
        return occurrences;
    };

    // Iterate through all fields in the document
    const searchObject = (obj: any) => {
        for (const key in obj) {
            if (typeof obj[key] === "string") {
                // Count occurrences in string fields
                count += countInString(obj[key]);
            } else if (typeof obj[key] === "object" && obj[key] !== null) {
                // Recursively search nested objects
                searchObject(obj[key]);
            }
        }
    };
    searchObject(file); // Start searching the movie document

    return count; // Return total occurrences
};
//Partition phrase for multi search
export const partitionPhrase = (phrase: string): string[] => {
    const regex = /"([^"]+)"|(\S+)/g; // Matches quoted substrings or non-whitespace sequences
    const result: string[] = [];
    let match;

    while ((match = regex.exec(phrase)) !== null) {
        // Add quoted substrings or plain words to the result
        if (match[1]) {
            result.push(match[1]); // Quoted part
        } else if (match[2]) {
            result.push(match[2]); // Unquoted word
        }
    }

    return result;
};
export const testHelperPrint = (file: WithId<Document>, phrase: string): number => {
    const phraseList = partitionPhrase(phrase);
    console.log(file.full_name);
    //Compare
    let phraseScore = 0;
    for(const phra of phraseList){
        phraseScore += phraseRelevancy(file, phra);
        console.log(phra + ": " + phraseRelevancy(file, phra))
    }
    return phraseScore;
}
export const sortProfilesByPhraseCount = (profiles: WithId<Document>[], phrase: string, isGraduate: boolean, isPhD: boolean) => {
    const filteredProfiles = profiles.filter((profile) => {
        const hasGraduate = profile.education !== null && profile.education !== undefined;
        const hasPhD = profile.education?.some((edu: any) => edu.degree_name === "PhD");
        return (
            (!isGraduate || hasGraduate) && // If isGraduate is true, include profiles with Graduate degrees
            (!isPhD || hasPhD) // If isPhD is true, include profiles with PhDs
        );
    });
    return profiles.sort((a, b) => {
        //Turn inputted phrase into multiple phrases
        const phraseList = partitionPhrase(phrase);
        //Compare
        let phraseScoreA = 0;
        let phraseScoreB = 0;
        for(const phra of phraseList){
            phraseScoreA += phraseRelevancy(a, phra);
            phraseScoreB += phraseRelevancy(b, phra);
        }
        return phraseScoreB - phraseScoreA;
    });
};