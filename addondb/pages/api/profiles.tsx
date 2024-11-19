import { WithId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
import { phraseRelevancy, sortProfilesByPhraseCount } from "../profileSorts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("ExampleLinkedInDataset");
        const profiles = await db
            .collection("Profiles")
            .find()
            .limit(10)
            .toArray();
        //const profileTitles = profiles.map(profile => profile.full_name);
        //console.log(profileTitles);
        const sortedProfiles = sortProfilesByPhraseCount(profiles, "Aaron");
        
        for (const profile of sortedProfiles) {
            console.log(`${profile.full_name} : ${phraseRelevancy(profile, "Aaron")}\n`);
        }
        
        res.json(sortedProfiles);
    } catch (e) {
        console.error(e);
    }
}

//Look up via name include search in summary
//Look up via education
//Look up via occupation
//Loop up via location
//Lookup sort by relevancy
//Overall sort education level x years of expierence