export function splitJoke(jokeText: string): string[] {
    // Split the joke at the first punctuation that seems like a logical break (e.g., question mark, period)
    const regex = /([.!?])\s+/;
    const parts = jokeText.split(regex).filter(Boolean);

    // Combine the first two parts if there are at least two parts
    if (parts.length > 1) {
        // Combine the first sentence/part
        const firstPart = parts[0] + parts[1];
        const secondPart = parts.slice(2).join(" ");
        return [firstPart, secondPart];
    }

    // If there's only one part, return it as the only element
    return [jokeText];
}

const loadingMessages = [
    "Pun-der construction... please wait!",
    "Loading... we're working hard to make you LOL!",
    "Just a few more seconds... don't leaf yet!",
    "Hold tight! We’re cooking up some puns!",
    "Be patient... we’re punning as fast as we can!",
    "One moment... pun intended!",
    "Still loading... we’re punning at full speed!",
    "Getting ready to pun-ch you with laughter!",
    "Hold up... we’re putting the ‘pun’ in ‘fun’!",
    "Just a moment... these puns take time to perfect!",
    "Don't go yet! The puns are almost here!",
    "Sit tight... it's a pun-derful ride!",
];

export function getRandomLoadingMessage() {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    return loadingMessages[randomIndex];
}
