import { WithId, Document } from "mongodb";

// Utility function to remove "The" from the beginning of titles
const stripThe = (title: string) => {
    return title.toLowerCase().startsWith("the ") ? title.slice(4) : title;
};

// Sorting function to order movies alphabetically by title, ignoring "The"
export const sortMoviesByTitle = (movies: WithId<Document>[]) => {
    return movies.sort((a, b) => {
        const titleA = stripThe(a.title || ""); // Fallback to empty string if title is undefined
        const titleB = stripThe(b.title || "");
        return titleA.localeCompare(titleB);
    });
};

export const sortMoviesByRating = (movies: WithId<Document>[]) => {
    return movies.sort((a, b) => {
        const ratingA = a.tomatoes.viewer.rating ?? 0; // Fallback to empty string if title is undefined
        const ratingB = b.tomatoes.viewer.rating ?? 0;
        return ratingB - ratingA;
    });
};