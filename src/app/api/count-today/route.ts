import client from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = client.db("punpal");
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        const count = await db.collection("votes").countDocuments({
            createdAt: { $gte: todayStart, $lte: todayEnd },
        });
        return NextResponse.json({ count });
    } catch (error) {
        console.error({ error });
        return NextResponse.json({ error: "Failed to count documents" }, { status: 500 });
    }
}
