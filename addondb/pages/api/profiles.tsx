import { WithId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
import { testHelperPrint, sortProfilesByPhraseCount } from "../profileSorts";

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
        const sortedProfiles = sortProfilesByPhraseCount(profiles, "PhD university Aaron \"Aaron Thompson\"");
        
        // for (const profile of sortedProfiles) {
        //     testHelperPrint(profile, "PhD university Aaron \"Aaron Thompson\"");
        // }
        
        res.json(sortedProfiles);
    } catch (e) {
        console.error(e);
    }
}

//Look up via name include search in summary
//Look up via education
//Look up via occupation
//Loop up via location
//Overall sort education level x years of expierence