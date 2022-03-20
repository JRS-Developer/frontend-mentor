const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");
const ratingText = document.getElementById("rating-text");

let selectedRating = 1;

const removeAllActive = () =>
  ratingBtns.forEach((btn) => btn.classList.remove("active"));

const handleRatingClick = (e) => {
  const btn = e.target;
  selectedRating = btn.dataset.rating;
  removeAllActive();
  btn.classList.add("active");
};

const handleSubmitClick = (e) => {
  e.preventDefault();
  ratingText.innerText = selectedRating;
};

ratingBtns.forEach((b) => b.addEventListener("click", handleRatingClick));
submitBtn.addEventListener("click", handleSubmitClick);
