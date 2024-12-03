const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

// interface Joke {
//     jokeId: string;
//     jokeText: string;
// }

// interface VoteResponse {
//     message?: string;
//     error?: string;
// }

// interface VoteCountResponse {
//     count: number;
// }

// function logError(action: string, error: unknown): void {
//     console.error(`[${action}] ${error instanceof Error ? error.message : "Unknown error occurred"}`);
// }

// function logResponse(action: string, url: string, response: Response): void {
//     console.log(`[${action}] URL: ${url} | Status: ${response.status}`);
// }

// export async function fetchMostVotedJokes(): Promise<Joke[] | undefined> {
//     const url = `${API_URL}/most-voted`;
//     try {
//         const response = await fetch(url);
//         logResponse("fetchMostVotedJokes", url, response);
//         if (!response.ok) throw new Error("Failed to fetch most-voted jokes");

//         const data: Joke[] = await response.json();
//         console.log("[fetchMostVotedJokes] Data:", data);
//         return data;
//     } catch (err) {
//         logError("fetchMostVotedJokes", err);
//     }
// }

// export async function handleVote({ jokeId }: { jokeId: string }): Promise<VoteResponse | undefined> {
//     const url = `${API_URL}/vote`;
//     try {
//         const params = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ jokeId }),
//         };
//         const response = await fetch(url, params);
//         if (!response.ok) {
//             throw new Error("Failed to vote");
//         }
//         const data: VoteResponse = await response.json();
//         return data;
//     } catch (err) {
//         console.error({ err });
//         return { error: String(err) };
//     }
// }

// export async function fetchRandomJokes(): Promise<Joke[] | undefined> {
//     const url = `${API_URL}/jokes`;
//     try {
//         const response = await fetch(url);
//         logResponse("fetchRandomJokes", url, response);
//         if (!response.ok) throw new Error("Failed to fetch jokes");
//         const data: Joke[] = await response.json();
//         console.log("[fetchRandomJokes] Data:", data);
//         return data;
//     } catch (err) {
//         logError("fetchRandomJokes", err);
//     }
// }

// export async function fetchTodayVoteCount(): Promise<VoteCountResponse | undefined> {
//     const url = `${API_URL}/count-today`;
//     try {
//         const response = await fetch(url);
//         logResponse("fetchTodayVoteCount", url, response);
//         if (!response.ok) throw new Error("Failed to fetch total vote count for today");

//         const data: VoteCountResponse = await response.json();
//         console.log("[fetchTodayVoteCount] Data:", data);
//         return data;
//     } catch (err) {
//         logError("fetchTodayVoteCount", err);
//     }
// }
function logError(action: string, error: unknown): void {
    console.error(`[${action}] Error: ${error instanceof Error ? error.message : "Unknown error occurred"}`);
}

function logResponse(action: string, url: string, response: Response): void {
    console.log(`[${action}] URL: ${url} | Status: ${response.status}`);
}

// Same for fetchMostVotedJokes, fetchRandomJokes, fetchTodayVoteCount
export async function fetchMostVotedJokes(): Promise<Joke[] | undefined> {
    const url = `${API_URL}/most-voted`;
    try {
        const response = await fetch(url);
        logResponse("fetchMostVotedJokes", url, response);
        if (!response.ok) throw new Error("Failed to fetch most-voted jokes");

        const data: Joke[] = await response.json();
        return data;
    } catch (err) {
        logError("fetchMostVotedJokes", err);
        return []; // Returning empty array in case of error instead of undefined
    }
}

export async function fetchRandomJokes(): Promise<Joke[] | undefined> {
    const url = `${API_URL}/jokes`;
    try {
        const response = await fetch(url);
        logResponse("fetchRandomJokes", url, response);
        if (!response.ok) throw new Error("Failed to fetch random jokes");

        const data: Joke[] = await response.json();
        return data;
    } catch (err) {
        logError("fetchRandomJokes", err);
        return []; // Returning empty array in case of error instead of undefined
    }
}

export async function fetchTodayVoteCount(): Promise<{ count: number } | undefined> {
    const url = `${API_URL}/count-today`;
    try {
        const response = await fetch(url);
        logResponse("fetchTodayVoteCount", url, response);
        if (!response.ok) throw new Error("Failed to fetch total vote count for today");

        const data: { count: number } = await response.json();
        return data;
    } catch (err) {
        logError("fetchTodayVoteCount", err);
        return { count: 0 }; // Returning default value in case of error
    }
}

export async function handleVote({ jokeId }: { jokeId: string }): Promise<{ message: string } | undefined> {
    const url = `${API_URL}/vote`;
    try {
        const params = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ jokeId }),
        };
        const response = await fetch(url, params);
        if (!response.ok) {
            throw new Error("Failed to vote");
        }
        const data: { message: string } = await response.json();
        return data;
    } catch (err) {
        logError("handleVote", err);
        return { message: "Failed to submit your vote, please try again." };
    }
}
