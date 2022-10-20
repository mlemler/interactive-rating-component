const urlParams = new URLSearchParams(window.location.search);
const rating = urlParams.get('rating');

if (rating) {
    document.getElementById("rating-result").innerText = rating;
}
