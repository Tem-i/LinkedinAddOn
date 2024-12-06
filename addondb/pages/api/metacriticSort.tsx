import { WithId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
import { json } from "node:stream/consumers";

//Function to strip away "The " for alphebetical sorting
const stripThe = (title: string) => {
    return title.startsWith("The ") ? title.slice(4) : title;
};


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        //Contact client for data
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("movies")
            .find({})
            .sort({metacritic: -1, title: -1})
            .limit(10)
            .toArray();
        //Sort movies alphebtically without "The"
        movies.sort((a, b) => {
            const titleA = stripThe(a.title || ""); // Fallback to empty string if title is undefined
            const titleB = stripThe(b.title || "");
            return titleA.localeCompare(titleB);
        });
        //Print out movie titles for quick check
        const movieTitles = movies.map(movie => movie.title); // Gets an array of titles
        console.log(movieTitles);
        //Send out json of data
        res.json(movies);
    } catch (e) {
        console.error(e);
    }
}