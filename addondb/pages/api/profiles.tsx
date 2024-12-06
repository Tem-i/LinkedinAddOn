import { WithId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { sortProfilesByPhraseCount } from "../profileSorts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req.query;
    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Query parameter is required" });
    }

    const client = await clientPromise;
    const db = client.db("ExampleLinkedInDataset");
    const profiles = await db.collection("Profiles").find().limit(100).toArray();
    const sortedProfiles = sortProfilesByPhraseCount(profiles, query);
    res.json(sortedProfiles);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
};