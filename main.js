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

//  for internal use only for filtering
// function activeBtnClick(text) {
//   const allBtn = document.getElementsByClassName("item");
//   for (let i = 0; i < allBtn.length; i++) {
//     allBtn[i].style.backgroundColor = "white";
//     allBtn[i].style.color = "black";
//     allBtn[i].style.borderRadius = "4px";
//   }
//   const btn = document.getElementById(text);
//   //   btn.classList.add("active");
//   if (text === "all") {
//     btn.style.backgroundColor = "gray";
//     btn.style.color = "white";
//   } else {
//     btn.style.backgroundColor = text;
//     btn.style.color = 'white';
//   }
// }
// const colorList = ["all", "red", "green", "blue", "orange"];
// let count = 0;
// setInterval(() => {
//   if (count >= 5) {
//     count = 0;
//   }
//   activeBtnClick(colorList[count]);
//   hidShow(colorList[count]);
//   count += 1;
// }, 1000);
