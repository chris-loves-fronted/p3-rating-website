import { API } from './api/API.js';
import { UI } from './ui/UI.js';

//Global Variables
const loadingSpinner = document.getElementById('loadingSpinner');
const addReviewH2 = document.getElementById('addReview');
const reviewGrid = document.querySelector('main');
const reviewModalBox = document.querySelector('modal-box');
const reviewModalCloseBtn = document.getElementById('closeButton');
const reviewForm = document.querySelector('form');
const ratingButtons = document.querySelectorAll('input[name="rating"]');
const reviewNameInput = document.getElementById('name');
const reviewInput = document.getElementById('review');

let newReview = {};
let reviews = [];

// Fetching Error
window.addEventListener('fetchError', () => {
    reviewGrid.innerHTML = `
      <h2>Error fetching Data, please try again later!</h2>
    `;
    loadingSpinner.hidden = true;
});

// Fetch & Render Reviews
document.addEventListener('DOMContentLoaded', async () => {
    reviews = [...(await API.fetchReviews())];
    loadingSpinner.hidden = true;
    
    UI.renderReviews(reviews, reviewGrid);
});

// Create a New Review
document.addEventListener('DOMContentLoaded', () => {
    addReviewH2.addEventListener('click', () => {
        reviewModalBox.style.display = 'flex';
    });

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
        reviews.unshift(newReview);

        clearFormFields();

        reviewModalBox.style.display = 'none';

        UI.renderReviews(newReview, reviewGrid);
        newReview = {};
    });
});

// Helpers
function clearFormFields() {
    ratingButtons.forEach((rating) => (rating.checked = false));
    reviewNameInput.value = '';
    reviewInput.value = '';
}
