import client from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = client.db("punpal");
        const jokesCollection = db.collection("jokes");

        const randomJokes = await jokesCollection
            .aggregate([
                { $sample: { size: 4 } }, // Ensures random sampling from the collection
            ])
            .toArray();

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
