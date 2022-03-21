"use strict";
const adviceIdText = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const adviceButton = document.getElementById("adviceButton");

const adviceApi = "https://api.adviceslip.com";

const Advice = function () {
  this.id = "";
  this.advice = "";

  this.setId = (id) => {
    this.id = id;
  };

  this.setAdvice = (advice) => {
    this.advice = advice;
  };

  this.show = () => {
    const leftQuote = "\u201C";
    const rightQuote = "\u201d";
    adviceIdText.innerText = this.id;
    adviceText.innerText = `${leftQuote}${this.advice}${rightQuote}`;
  };

  this.showLoading = () => {
    adviceIdText.innerText = "Loading...";
    adviceText.innerText = "Getting an awesome advice...";
  };

  this.resetAnimation = () => {
    adviceButton.style.animation = "none";
    adviceButton.offsetHeight;
    adviceButton.style.animation = null;
  };
};

const getRandomAdvice = async () => {
  const response = await fetch(`${adviceApi}/advice`);
  const data = await response.json();
  return data.slip;
};

const showAdvice = (newAdvice) => async () => {
  if (!newAdvice instanceof Advice) {
    throw new Error("newAdvice is not an instance of Advice");
  }

  newAdvice.showLoading();
  newAdvice.resetAnimation();

  const advice = await getRandomAdvice();
  newAdvice.setId(advice.id);
  newAdvice.setAdvice(advice.advice);
  newAdvice.show();
};

const newAdvice = new Advice();

window.onload = showAdvice(newAdvice);
adviceButton.onclick = showAdvice(newAdvice);
