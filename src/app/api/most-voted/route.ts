import client from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = client.db("punpal");
        const mostVoted = await db
            .collection("votes")
            .aggregate([
                {
                    $group: {
                        _id: "$jokeId",
                        voteCount: { $sum: 1 }, // Count votes per joke
                        lastVotedAt: { $max: "$createdAt" }, // Track most recent
                    },
                },
                {
                    $sort: { voteCount: -1 }, // Sort by most popular
                },
                {
                    $limit: 10, // Limit to top 10
                },
                {
                    $lookup: {
                        from: "jokes",
                        localField: "_id",
                        foreignField: "_id",
                        as: "jokeDetails",
                    },
                },
                {
                    $unwind: "$jokeDetails",
                },
                {
                    $project: {
                        jokeId: "$_id",
                        jokeText: "$jokeDetails.text",
                        voteCount: 1,
                        lastVotedAt: 1,
                    },
                },
            ])
            .toArray();

        return NextResponse.json(mostVoted);
    } catch (error) {
        console.error({ error });
        return NextResponse.json({ error: "Failed to fetch most voted jokes" }, { status: 500 });
    }
}
