const pointsSelected = document.querySelector('.points-selected');
const containerRating = document.querySelector('.container-rating');
const containerThankYou = document.querySelector('.container-thank-you');
let selectedRating = 1;
const ratingPoints = document.querySelectorAll('.point');

ratingPoints.forEach((el, idx) => {
    el.addEventListener('click', () => {

        ratingPoints.forEach((point, i) => {
            point.classList.remove('selected');
        });

        el.classList.add('selected');
        selectedRating = idx + 1;

    });
});

const handleSubmit = () => {
    containerRating.classList.add('hide');
    pointsSelected.innerHTML = `You selected ${selectedRating} out of 5`;
    containerThankYou.classList.remove('hide');

}