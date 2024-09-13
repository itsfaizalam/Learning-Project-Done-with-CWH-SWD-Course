function createCard(title, cName, views, monthsOld, duration, thumbnail){
  // Finish this function
  let numOfView
  if (views < 1000) {
      numOfView = views;
  } else if (views === 1000) {
      numOfView = "1K";
  } else if (views > 1000 && views < 1000000) {
      numOfView = Math.floor(views / 1000) + "+K";
  } else if (views === 1000000) {
      numOfView = "1M";
  } else if (views > 1000000) {
      numOfView = Math.floor(views / 1000000) + "+M";
  }

  let html = `<div class="card">
                <div class="image">
                    <img src="${thumbnail}" alt="">
                    <div class="capsule">${duration}</div>
                </div>
                <div class="text">
                    <h2>${title}</h2>
                    <p>${cName} . ${numOfView} views . ${monthsOld} months ago</p>
                </div>
              </div>`
// document.querySelector(".container").innerHTML += html // it will also workd
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Web Development App | Idea Usher Video #1", "Idea Usher", 560000, 7, "31:22", "https://ideausher.com/wp-content/uploads/2023/09/home-sec-2.1.webp")