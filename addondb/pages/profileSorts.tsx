import { WithId, Document } from "mongodb";

//Do search sort
export const phraseRelevancy = (file: WithId<Document>, phrase: string): number => {
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
}

export const sortProfilesByPhraseCount = (profiles: WithId<Document>[], phrase: string) => {
    return profiles.sort((a, b) => {
        return phraseRelevancy(b, phrase) - phraseRelevancy(a, phrase);
    });
};