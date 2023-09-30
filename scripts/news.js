"use strict";

//News are only shown when user is logged in
if (currentUser) {
  const newsContainer = document.getElementById("news-container");
  const btnPrev = document.getElementById("btn-prev");
  const pageNum = document.getElementById("page-num");
  const btnNext = document.getElementById("btn-next");

  //==============================================Criteria 06  SHOW NEWS==========================================================
  let totalResults = 0;
  getDataNews("us", 1);

  async function getDataNews(country, page) {
    try {
      //Connect to API and get Data
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${currentUser.category}&pageSize=${currentUser.pageSize}&page=${page}&apiKey=04e3ea701abe4f68a2eb34e501a5ee37`
      );
      const data = await res.json();

      if (data.status === "error" && data.code === "rateLimited") {
        throw new Error(data.message);
      }

      if (data.status === "error" && data.code === "corsNotAllowed") {
        throw new Error(data.message);
      }

      displayNewList(data);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }
  //==============================================Criteria 07  SWITCH NEWS PAGES ==========================================================
  //Show/hide "Previous" button
  //When user is on Page 1, the "Previous" button will be hidden.
  function checkBtnPrev() {
    if (pageNum.textContent == 1) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "block";
    }
  }
  //Show/hide "Next" button
  //If more articles cannot be retrieved, the "Next" button will be hidden.
  function checkBtnNext() {
    if (pageNum.textContent == Math.ceil(totalResults / currentUser.pageSize)) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "block";
    }
  }
  //Process when user clicks on "Previous" button
  btnPrev.addEventListener("click", function () {
    getDataNews("us", --pageNum.textContent);
  });
  //Process when user clicks on "Next" button
  btnNext.addEventListener("click", function () {
    getDataNews("us", ++pageNum.textContent);
  });

  //Function for changing the content
  function displayNewList(data) {
    totalResults = data.totalResults;
    checkBtnPrev();
    checkBtnNext();

    let html = "";
    data.articles.forEach(function (article) {
      html += `
      <div class="card flex-row flex-wrap">
      <div class="card mb-3" style="">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src=${
              article.urlToImage
                ? article.urlToImage
                : "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
            } class="card-img" alt="img" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <a href="${
                article.url
              }" target="blank" class="btn btn-primary">View</a>
             </div>
          </div>
        </div>
      </div>
    </div>`;
    });

    newsContainer.innerHTML = html;
  }
} else {
  alert("Please register/log in to see more");
  window.location.assign("../index.html");
}
