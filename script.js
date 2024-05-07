const reviewGrid = document.querySelector('main');

const reviews = [
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
    console.log('loaded');
    console.log(reviewGrid);

    for (const review of reviews) {
        const reviewCard = document.createElement('review-card');
        const leftSide = document.createElement('left-side');
        const rightSide = document.createElement('right-side');
        const userImage = document.createElement('img');
        const userName = document.createElement('h2');
        const userReview = document.createElement('p');

        reviewCard.setAttribute('data-id', String(review.id));

        userImage.src = review.img;
        userImage.alt = '';

        userName.textContent = review.name;
        userReview.textContent = review.review;

        leftSide.appendChild(userImage);
        rightSide.append(userName, userReview);

        reviewCard.append(leftSide, rightSide);
        reviewGrid?.append(reviewCard);
    }
});
