import client from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { jokeId: string } }) {
    const { jokeId } = params;
    try {
        const db = client.db("punpal");
        const votes = await db.collection("Votes").find({ jokeId }).toArray(); // Fetch votes for the joke
        return NextResponse.json(votes);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch votes" }, { status: 500 });
    }
}
