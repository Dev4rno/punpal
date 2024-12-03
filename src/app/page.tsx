"use client";

import { fetchMostVotedJokes, fetchRandomJokes, fetchTodayVoteCount } from "@/actions";
import Banner from "@/components/Banner";
import { Footer } from "@/components/Footer";
import JokeVoter from "@/components/JokeVoter";
import MostPopular from "@/components/MostPopular";
import { getRandomLoadingMessage } from "@/utils/str";
import { useEffect, useState } from "react";

export default function Home() {
    const [loadingMessage, setLoadingMessage] = useState<string>("");
    const [voteCount, setVoteCount] = useState<number>(0);
    const [mostVotedJokes, setMostVotedJokes] = useState<Joke[]>([]);
    const [randomJokes, setRandomJokes] = useState<Joke[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoadingMessage(getRandomLoadingMessage());
        async function fetchDefaultData() {
            try {
                setLoading(true);
                const todayVoteCount = await fetchTodayVoteCount();
                const mostVotedJokesData = await fetchMostVotedJokes();
                const randomJokesData = await fetchRandomJokes();
                setVoteCount(todayVoteCount?.count ?? 0);
                setMostVotedJokes(mostVotedJokesData ?? []);
                setRandomJokes(randomJokesData ?? []);
            } catch (error) {
                console.error("Error loading data", error);
            } finally {
                setLoading(false);
            }
        }
        fetchDefaultData();
    }, []);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-1 sm:p-20">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Banner />
                <JokeVoter
                    randomJokes={randomJokes}
                    loading={loading}
                    loadingMessage={loadingMessage}
                    todayVoteCount={voteCount}
                />
                <MostPopular mostVotedJokes={mostVotedJokes} loading={loading} />
                <Footer />
            </main>
        </div>
    );
}
