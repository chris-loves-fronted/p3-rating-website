export const UI = {
    renderReviews: (reviews, gridNode) => {
        if (Array.isArray(reviews)) {
            for (const review of reviews) {
                UI.renderSingleReview(review, gridNode);
            }
        } else {
            UI.renderSingleReview(reviews, gridNode);
        }
    },
    renderSingleReview: (review, gridNode) => {
        const reviewCard = document.createElement('review-card');
        const leftSide = document.createElement('left-side');
        const rightSide = document.createElement('right-side');
        const userImage = document.createElement('img');
        const userName = document.createElement('h3');
        const userReview = document.createElement('p');
        const reviewStarContainer = document.createElement('div');
        const ratingContainer = document.createElement('rating-container');

        reviewCard.setAttribute('data-id', String(review.id));

        for (let i = Number(review.rating); i >= 1; i--) {
            const reviewStars = document.createElement('span');
            reviewStars.textContent = '⭐';
            reviewStarContainer.appendChild(reviewStars);
        }

        userImage.src = review.img;
        userImage.alt = '';

        userName.textContent = review.name;
        userReview.textContent = review.review;

        ratingContainer.append(userName, reviewStarContainer);

        leftSide.appendChild(userImage);
        rightSide.append(ratingContainer, userReview);

        reviewCard.append(leftSide, rightSide);
        gridNode.prepend(reviewCard);
    },
};
