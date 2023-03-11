const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");
const orangeBtn = document.getElementById("orange");
const allBtn = document.getElementById("all");

function hidShow(className) {
  const cardList = document.getElementsByClassName("card");
  if (className == "all") {
    for (let i = 0; i < cardList.length; i++) {
      cardList[i].classList.remove("hide");
      cardList[i].classList.add("show");
    }
  } else {
    for (let i = 0; i < cardList.length; i++) {
      if (cardList[i].classList.contains(className)) {
        cardList[i].classList.remove("hide");
        cardList[i].classList.add("show");
      } else {
        cardList[i].classList.remove("show");
        cardList[i].classList.add("hide");
      }
    }
  }
}

redBtn.addEventListener("click", (e) => {
  const allBtn = document.getElementsByClassName("item");
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove("active");
  }
  e.target.classList.add("active");
  hidShow("red");
});
greenBtn.addEventListener("click", (e) => {
  const allBtn = document.getElementsByClassName("item");
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove("active");
  }
  e.target.classList.add("active");
  hidShow("green");
});
blueBtn.addEventListener("click", (e) => {
  const allBtn = document.getElementsByClassName("item");
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove("active");
  }
  e.target.classList.add("active");
  hidShow("blue");
});
orangeBtn.addEventListener("click", (e) => {
  const allBtn = document.getElementsByClassName("item");
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove("active");
  }
  e.target.classList.add("active");
  hidShow("orange");
});
allBtn.addEventListener("click", (e) => {
  const allBtn = document.getElementsByClassName("item");
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].classList.remove("active");
  }
  e.target.classList.add("active");
  hidShow("all");
});

