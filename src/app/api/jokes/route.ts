// import client from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//     try {
//         const db = client.db("punpal");
//         const jokesCollection = db.collection("jokes");

//         // Aggregation pipeline using $rand to select 4 random jokes
//         const randomJokes = await jokesCollection
//             .aggregate([
//                 {
//                     $match: {},
//                 },
//                 {
//                     $addFields: {
//                         random: { $rand: {} },
//                     },
//                 },
//                 {
//                     $sort: { random: 1 },
//                 },
//                 {
//                     $limit: 4,
//                 },
//                 {
//                     $project: {
//                         jokeId: "$_id",
//                         jokeText: "$text",
//                     },
//                 },
//             ])
//             .toArray();

//         // Return the random jokes as JSON
//         return NextResponse.json(
//             randomJokes.map((joke) => ({
//                 jokeId: joke.jokeId.toString(), // Converting _id to string
//                 jokeText: joke.jokeText, // Joke text
//             }))
//         );
//     } catch (error) {
//         console.error("Error fetching jokes:", error);
//         return NextResponse.json({ error: "Failed to fetch jokes" }, { status: 500 });
//     }
// }

import client from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = client.db("punpal");
        const jokesCollection = db.collection("jokes");
        const randomJokes = await jokesCollection.aggregate([{ $sample: { size: 4 } }]).toArray();
        return NextResponse.json(
            randomJokes.map((joke) => ({
                jokeId: joke._id.toString(),
                jokeText: joke.text,
            }))
        );
    } catch (error) {
        console.error("Error fetching jokes:", error);
        return NextResponse.json({ error: "Failed to fetch jokes" }, { status: 500 });
    }
}
