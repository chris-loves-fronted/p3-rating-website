export const API = {
    fetchReviews: async () => {
        const RESPONSE = await fetch('data.js');

        if (!RESPONSE.ok) {
            const fetchErrorEvent = new Event('fetchError', { bubbles: true });
            document.dispatchEvent(fetchErrorEvent);
            return;
        }

        const reviews = RESPONSE.json();
        return reviews;
    },
};
