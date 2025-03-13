"use client";

import { handleVote } from "@/actions";
import { splitJoke } from "@/utils/str";
import { useState } from "react";

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
    if (loading || !randomJokes) {
        return (
            <div className="w-full flex items-center justify-center">
                <p className="text-xl text-center text-gray-700 dark:text-gray-300">{loadingMessage}</p>
            </div>
        );
    }
    return (
        <div className="w-full">
            {!voted ? (
                <>
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Pick Your <span className="blue1-text">Favourite</span> Pun
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {randomJokes.map((joke) => {
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
                                        setVoting(true);
                                        try {
                                            const response = await handleVote({ jokeId: joke.jokeId });
                                            if (response && response.message) {
                                                setVoted(true);
                                            }
                                        } catch (error) {
                                            console.error(error);
                                        } finally {
                                            setVoting(false);
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
                </div>
            )}
            <div className="w-full flex items-center justify-center">
                <button
                    onClick={() => window.location.reload()}
                    className="mt-8 rounded-md px-5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#1e90ff] text-[#1e90ff] text-white"
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1e90ff] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="text-lg relative text-[#1e90ff] transition duration-300 group-hover:text-white ease">
                        Give Me More
                    </span>
                </button>
            </div>
        </div>
    );
}
