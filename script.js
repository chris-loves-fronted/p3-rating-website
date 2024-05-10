// @ts-nocheck
const addReviewH2 = document.getElementById('addReview');
const reviewGrid = document.querySelector('main');

const reviewModalBox = document.querySelector('modal-box');
const reviewModalCloseBtn = document.getElementById('closeButton');
const reviewForm = document.querySelector('form');
const ratingButtons = document.querySelectorAll('input[name="rating"]');
const reviewNameInput = document.getElementById('name');
const reviewInput = document.getElementById('review');
const submitButton = document.getElementById('submitButton');

let newReview = {};

let reviews = [
    {
        id: 1,
        name: 'Max Mustermann',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id dolores dolorem rerum soluta natus dicta dignissimos iure provident cupiditate sit officia quam, eaque adipisci aperiam recusandae est, tempora animi!',
        rating: '1',
        img: 'https://i.pravatar.cc/50?img=2',
    },
    {
        id: 2,
        name: 'Max Mustermann',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        rating: '4',
        img: 'https://i.pravatar.cc/50?img=4',
    },
    {
        id: 3,
        name: 'Max Mustermann',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id dolores dolorem rerum soluta natus dicta dignissimos',
        rating: '3',
        img: 'https://i.pravatar.cc/50?img=23',
    },
    {
        id: 4,
        name: 'Max Mustermann',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id dolores dolorem rerum soluta natus dicta dignissimos iure provident cupiditate sit officia quam',
        rating: '4',
        img: 'https://i.pravatar.cc/50?img=15',
    },
    {
        id: 5,
        name: 'Max Mustermann',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing eaque adipisci aperiam recusandae est, tempora animi! Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id dolores dolorem rerum soluta natus dicta dignissimos iure provident cupiditate sit officia quam, eaque adipisci aperiam recusandae est, tempora animi! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        rating: '5',
        img: 'https://i.pravatar.cc/50?img=12',
    },
    {
        id: 6,
        name: 'Max Mustermann',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing eaque adipisci aperiam recusandae est, tempora animi!',
        rating: '5',
        img: 'https://i.pravatar.cc/50?img=11',
    },
];
window.addEventListener('DOMContentLoaded', () => {
    addReviewH2.addEventListener('click', () => {
        reviewModalBox.style.display = 'flex';
    });

    for (const review of reviews) {
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
        reviewGrid?.append(reviewCard);
    }
});

window.addEventListener('DOMContentLoaded', () => {
    window.onclick = ({ target }) => {
        if (target == reviewModalBox) {
            reviewModalBox.style.display = 'none';
        }
    };
    reviewModalCloseBtn.addEventListener('click', () => {
        reviewModalBox.style.display = 'none';
    });

    ratingButtons.forEach((rating) => {
        rating.addEventListener('click', ({ target: { value } }) => {
            newReview.rating = value;
        });
    });

    reviewNameInput.addEventListener('input', ({ target: { value } }) => {
        newReview.name = value;
    });

    reviewInput.addEventListener('input', ({ target: { value } }) => {
        newReview.review = value;
    });

    reviewForm.addEventListener('submit', (event) => {
        if (!reviewForm.checkValidity()) return;

        event.preventDefault();

        newReview.id = reviews.length + 1;
        newReview.img = 'https://i.pravatar.cc/50';
        reviews = [newReview, ...reviews];

        ratingButtons.forEach((rating) => (rating.checked = false));
        reviewNameInput.value = '';
        reviewInput.value = '';
        reviewGrid.innerHTML = '';
        reviewModalBox.style.display = 'none';
        newReview = {};

        for (const review of reviews) {
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
            reviewGrid?.append(reviewCard);
        }
    });
});
