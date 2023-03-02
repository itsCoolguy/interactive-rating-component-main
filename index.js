// Variables
let currentlySelected = null;
let submitCooldown = false;

// Click functions
function ratingPressed() {
    if (currentlySelected) {
        const button = currentlySelected.querySelector('button');
        button.style.backgroundColor = '#252d37';
        button.style.color = 'rgba(255, 255, 255, 0.5)';
        button.style.removeProperty('background-color');
        button.style.removeProperty('color');
    }

    currentlySelected = this;
    const button = currentlySelected.querySelector('button');
    button.style.backgroundColor = '#fb7413';
    button.style.color = 'rgba(255,255,255,1)';
}

function submitPressed() {
    if (currentlySelected === null && submitCooldown === false) {
        submitCooldown = true;
        const button = document.querySelector('#submit-button');
        button.innerHTML = "Please select a rating"
        setTimeout(() => {
            button.innerHTML = "SUBMIT"
            submitCooldown = false;
        }, 2000)
        return false;
    }

    const rating = Number((currentlySelected.id).split('-')[0])
    document.querySelector('#selected-rating').querySelector('span').textContent = "You selected " + rating + " out of 5"

    document.querySelector('#rate-screen').setAttribute('hidden', true);
    document.querySelector('#thank-you-screen').removeAttribute('hidden');
}


// Event listners
document.querySelectorAll('.rating-button').forEach((element, index) => {
    element.addEventListener('click', ratingPressed)
})