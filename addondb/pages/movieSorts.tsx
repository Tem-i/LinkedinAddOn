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

// Sorting function to order movies descending by viewer rating
export const sortMoviesByViewerRating = (movies: WithId<Document>[]) => {
    return movies.sort((a, b) => {
        const ratingA = a.tomatoes.viewer.rating ?? 0; // Fallback to 0 if rating is undefined
        const ratingB = b.tomatoes.viewer.rating ?? 0;
        return ratingB - ratingA;
    });
};

// Sorting function to order movies descending by a combined weighted rating
export const sortMoviesByAllRatings = (movies: WithId<Document>[], weights = { viewer: 1.0, critic: 0.25, metacritic: 0.25 }) => {
    return movies.sort((a, b) => {
        const scoreA = (a.tomatoes.viewer.rating ?? 0) * weights.viewer + // Fallback to 0 if rating is undefined
                       (a.tomatoes.critic.rating ?? 0) * weights.critic + //Add together weights
                       (a.metacritic ?? 0) * 0.1 * weights.metacritic;
        const scoreB = (b.tomatoes.viewer.rating ?? 0) * weights.viewer +
                       (b.tomatoes.critic.rating ?? 0) * weights.critic +
                       (b.metacritic ?? 0) * 0.1 * weights.metacritic;
        return scoreA - scoreB;
    });
}