"use client";

import { handleVote } from "@/actions";
import { splitJoke } from "@/utils/str";
import { useState } from "react";

interface Joke {
    jokeId: string;
    jokeText: string;
}

export default function JokeVoter({
    todayVoteCount,
    loadingMessage,
    randomJokes,
    loading,
}: {
    todayVoteCount: number;
    loadingMessage: string;
    randomJokes: Joke[];
    loading: boolean;
}) {
    const [voting, setVoting] = useState(false);
    const [voted, setVoted] = useState(false);
    if (loading) {
        return <p className="text-xl text-center text-gray-700 dark:text-gray-300">{loadingMessage}</p>;
    }
    return (
        <div className="w-full">
            {!voted ? (
                <>
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Pick Your <span className="blue1-text">Favourite</span> Pun
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {randomJokes?.map((joke) => {
                            const jokeParts = splitJoke(joke.jokeText);
                            const isOneLiner = jokeParts.length === 1;
                            const jokeElement = isOneLiner ? (
                                <h6 className="text-lg text-center dark:text-white">{jokeParts[0]}</h6>
                            ) : (
                                <>
                                    <h6 className="text-lg text-center dark:text-white">{jokeParts[0]}</h6>
                                    <p className="text-lg text-center punchline blue2-text">{jokeParts[1]}</p>
                                </>
                            );

                            return (
                                <button
                                    key={joke.jokeId}
                                    className={`bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-left card-voter ${
                                        voting ? "opacity-50 pointer-events-none" : ""
                                    }`}
                                    onClick={async () => {
                                        setVoting(true); // Show loading state
                                        try {
                                            const response = await handleVote({ jokeId: joke.jokeId });
                                            if (response && response.message) {
                                                setVoted(true);
                                            }
                                        } catch (error) {
                                            console.error(error);
                                        } finally {
                                            setVoting(false); // Remove loading state
                                        }
                                    }}
                                >
                                    {jokeElement}
                                </button>
                            );
                        })}
                    </div>
                    {voting && (
                        <p className="text-center mt-4 text-lg text-gray-700 dark:text-gray-300">
                            Casting your vote, please wait...
                        </p>
                    )}
                </>
            ) : (
                <div className="text-center mt-8">
                    <p className="text-xl font-bold text-gray-700 dark:text-gray-200">Thank you for voting!</p>
                    <p className="text-lg text-gray-700 dark:text-gray-200 mt-2">
                        {typeof todayVoteCount === "undefined"
                            ? ""
                            : todayVoteCount === 0
                            ? "You're the first voter of the day"
                            : `You've helped us reach ${todayVoteCount + 1} votes today`}
                        {" 🎉"}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition text-lg reload-btn"
                    >
                        Give Me More
                    </button>
                </div>
            )}
        </div>
    );
}
