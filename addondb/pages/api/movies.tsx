import { WithId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
    //Keyword and tag searches
    //Title searches
    //Etc
    //Find way to hold movies somewhere (alr done by mongodb)
    //Give different ways to ask for and comb movies via restrictions



export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        //Gets movie collection into an array format
        const movies = await db
            .collection("movies")
            .find({})
            .sort({})
            .limit(10)
            .toArray();
        const subtext = movies.at(0); 
        //WithId<Document> temp = subtext;
        //Need to figure out custom sort taking this const and re-ordering
        //Outputs to json for use
        res.json(movies);
    } catch (e) {
        console.error(e);
    }
}