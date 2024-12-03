interface Joke {
    jokeId: string;
    jokeText: string;
    _id?: string; // Optional or required based on your actual data structure
    voteCount?: number; // If you have this field in your joke data
}
