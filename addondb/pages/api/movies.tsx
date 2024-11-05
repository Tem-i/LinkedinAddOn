import { WithId } from "mongodb";
import { sortMoviesByTitle, sortMoviesByRating } from '../movieSorts';
import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("movies")
            .find({})
            .sort({})
            .limit(10)
            .toArray();
        const sortedMovies = sortMoviesByRating(movies);
        res.json(sortedMovies);
    } catch (e) {
        console.error(e);
    }
}