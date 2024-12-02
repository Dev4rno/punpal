import client from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { jokeId } = await req.json();
        if (!jokeId) return NextResponse.json({ error: "Missing joke ID" }, { status: 400 });
        const db = client.db("punpal");
        const oid = new ObjectId(String(jokeId));
        const vote = { jokeId: oid, createdAt: new Date() };
        await db.collection("votes").insertOne(vote);
        return NextResponse.json({ message: "Vote recorded" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to record vote" }, { status: 500 });
    }
}
