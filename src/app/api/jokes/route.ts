import client from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = client.db("punpal");
        const jokesCollection = db.collection("jokes");

        // Aggregation pipeline using $rand to select 4 random jokes
        const randomJokes = await jokesCollection
            .aggregate([
                {
                    $match: {}, // Match all jokes (can be modified if you want to filter)
                },
                {
                    $addFields: {
                        random: { $rand: {} }, // Adding a random field to each document
                    },
                },
                {
                    $sort: { random: 1 }, // Sorting by the random field to shuffle the documents
                },
                {
                    $limit: 4, // Limiting to 4 random jokes
                },
                {
                    $project: {
                        jokeId: "$_id", // Returning the joke ID
                        jokeText: "$text", // Returning the joke text
                    },
                },
            ])
            .toArray();

        // Return the random jokes as JSON
        return NextResponse.json(
            randomJokes.map((joke) => ({
                jokeId: joke.jokeId.toString(), // Converting _id to string
                jokeText: joke.jokeText, // Joke text
            }))
        );
    } catch (error) {
        console.error("Error fetching jokes:", error);
        return NextResponse.json({ error: "Failed to fetch jokes" }, { status: 500 });
    }
}
