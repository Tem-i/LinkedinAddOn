import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from '../../lib/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    try {
        const client = await clientPromise
        const db = client.db('ExampleLinkedInDataset')

        const { query } = req.query //get the search query from the request

        if(!query) {
            const allprofiles = await db
            .collection("Profiles")
            .find()
            .toArray()

            res.status(200).json(allprofiles)
            return

        }
        const profiles = await db
        .collection('Profiles')
        .find({
            full_name: {$regex: query, $options: 'i'}
        })
        .toArray()

        res.status(200).json(profiles)
    } catch (error) {
        console.error('Error fetching profiles:', error)
        res.status(500).json({error: 'Internal Server Error'})
    }
}