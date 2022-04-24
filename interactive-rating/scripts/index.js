"use strict";
const ratingBtns = document.querySelectorAll(".rating-btn");
const ratingItems = document.querySelectorAll(".rating-item");
const submitBtn = document.getElementById("submit-btn");
const ratingText = document.getElementById("rating-text");

let defaultRating = 0;
let selectedRating = defaultRating;

const addAllActive = (items) => items.forEach((i) => i.classList.add("active"));
const removeAllActive = (items) =>
  items.forEach((i) => i.classList.remove("active"));

const handleRatingClick = (e) => {
  const btn = e.target;
  selectedRating = parseInt(btn.dataset.rating);

  removeAllActive(ratingBtns);
  btn.classList.add("active");
  submitBtn.disabled = false;
};

const handleSubmitClick = (e) => {
  e.preventDefault();

  if (
    selectedRating === defaultRating ||
    !selectedRating ||
    isNaN(selectedRating)
  )
    return (submitBtn.disabled = true);

  ratingText.innerText = selectedRating;
  addAllActive(ratingItems);
};

ratingBtns.forEach((b) => b.addEventListener("click", handleRatingClick));
submitBtn.addEventListener("click", handleSubmitClick);

window.addEventListener("load", () => {
  ratingText.innerText = selectedRating;
});
