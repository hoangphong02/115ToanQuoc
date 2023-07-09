let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll(".list .splide__slide");

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}
loadItem();

function listPage() {
  let count = Math.ceil(list.length / limit);
  document.querySelector(".listPage").innerHTML = "";

  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "‹";
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
    document.querySelector(".listPage").appendChild(prev);
  }

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".listPage").appendChild(newPage);
  }
  if (thisPage != count) {
    let next = document.createElement("li");
    next.innerText = "»";
    next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
    document.querySelector(".listPage").appendChild(next);
  }
}

function changePage(i) {
  thisPage = i;
  loadItem();
}

// let thisPageNew = 1;
// let limitnew = 1;
// let listnews = document.querySelectorAll(".container .news .item");

// function loadNewItem() {
//   let begingetNew = limitnew * (thisPageNew - 1);
//   let endgetNew = limitnew * thisPageNew - 1;
//   listnews.forEach((item, key) => {
//     if (key >= begingetNew && key <= endgetNew) {
//       item.style.display = "block";
//     } else {
//       item.style.none = "none";
//     }
//   });
// }
// loadNewItem();
