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
            .limit(1)
            .toArray();
        //const sortedProfiles = sortProfilesByPhraseCount(profiles, "PhD university Aaron \"Aaron Thompson\"");
        res.json(profiles);
    } catch (e) {
        console.error(e);
    }
}