import { fetchMostVotedJokes, fetchRandomJokes, fetchTodayVoteCount } from "@/actions";
import Banner from "@/components/Banner";
import { Footer } from "@/components/Footer";
import JokeVoter from "@/components/JokeVoter";
import MostPopular from "@/components/MostPopular";
import { getRandomLoadingMessage } from "@/utils/str";

export default async function Home() {
    const randomLoadingMessage = getRandomLoadingMessage();
    const todayVoteCount = await fetchTodayVoteCount();
    const mostVotedJokes = await fetchMostVotedJokes();
    const randomJokes = await fetchRandomJokes();

    // Use an empty array as a default if fetch functions return undefined
    const voteCount = todayVoteCount?.count ?? 0;
    const validMostVotedJokes = mostVotedJokes ?? [];
    const validRandomJokes = randomJokes ?? [];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-1 sm:p-20">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Banner />
                <JokeVoter
                    randomJokes={validRandomJokes}
                    loadingMessage={randomLoadingMessage}
                    todayVoteCount={voteCount}
                />
                <MostPopular mostVotedJokes={validMostVotedJokes} />
                <Footer />
            </main>
        </div>
    );
}
