const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export async function fetchMostVotedJokes() {
    try {
        const response = await fetch(`${API_URL}/most-voted`);
        if (!response.ok) throw new Error("Failed to fetch most-voted jokes");
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unknown error occurred");
    }
}

export async function handleVote({ jokeId }: { jokeId: string }) {
    try {
        const params = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ jokeId }),
        };
        const response = await fetch(`${API_URL}/vote`, params);
        if (!response.ok) throw new Error("Failed to vote");
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unknown error occurred");
    }
}

export async function fetchRandomJokes() {
    try {
        const response = await fetch(`${API_URL}/jokes`);
        if (!response.ok) throw new Error("Failed to fetch jokes");
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unknown error occurred");
    }
}

export async function fetchTodayVoteCount() {
    try {
        const response = await fetch(`${API_URL}/count-today`);
        if (!response.ok) throw new Error("Failed to fetch total vote count for today");
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unknown error occurred");
    }
}
