"use strict";

// Button mechanics and animations
var articleBtn = document.querySelector(".articleBtn");
var articleDiv = document.querySelector(".articleDiv");
var mainContent = document.querySelector(".mainContent");
var closeBtn = document.querySelector(".closeBtn");
var articleHead = document.querySelector(".articleHead");
var barArticle = document.querySelector(".bar_article");
var article = document.querySelector(".article_content");
articleBtn.addEventListener("click", function (btn) {
  btn.preventDefault(); //     if(articleBtn.id == "inactive"){
  //         var open = new TimelineMax({onStart:openArticle});
  //         open
  //         .to('.mainHead', {duration: 1.3, y:-200, ease: "linear"})
  //         // .to('.mainHead', {duration: 2.6, ease: "linear"})
  //         .to('.mainHead', {duration: 0, y:0, ease: "linear"})
  //     } else if (articleBtn.id == "active"){
  //     }
  // });
  // function openArticle(){
  //     setTimeout(() => {
  //         articleDiv.setAttribute("id", "opened")
  //         mainContent.setAttribute("id", "high")
  //         articleBtn.setAttribute("id", "active")
  //         var open2 = new TimelineMax()
  //         open2
  //         .from(".articleDiv", {duration: 1.3, scaleX: 0, scaleY:0, ease: "linear"})
  //     }, 130);
  // }
  // function closeArticle(){
  //     articleBtn.setAttribute("id", "inactive")
  //     articleDiv.setAttribute("id", "closed")
  //     mainContent.setAttribute("id", "low")
  // }

  if (articleBtn.id == "active") {
    articleBtn.setAttribute("id", "inactive");
    articleDiv.setAttribute("id", "closed");
    mainContent.setAttribute("id", "low");
  } else if (articleBtn.id != "active") {
    articleBtn.setAttribute("id", "active");
    articleDiv.setAttribute("id", "opened");
    mainContent.setAttribute("id", "high");
    TweenMax.to('.articleHead', {
      duration: 1.3,
      delay: 1.3,
      opacity: 1,
      ease: "linear"
    });
    TweenMax.to('.bar_article', {
      duration: 1.3,
      delay: 1.3,
      opacity: 1,
      ease: "linear"
    });
    TweenMax.to('.article_content', {
      duration: 1.3,
      delay: 1.3,
      opacity: 1,
      ease: "linear"
    });
    TweenMax.to('.ctaLink', {
      duration: 1.3,
      delay: 1.3,
      opacity: 1,
      ease: "linear"
    }); // articleHead.style.opacity = "100%"
    // barArticle.style.opacity = "100%"
    // article.style.opacity = "100%"
  }
});
closeBtn.addEventListener("click", function (btn) {
  btn.preventDefault();
  TweenMax.to('.articleHead', {
    duration: 0,
    opacity: 0,
    ease: "linear"
  });
  TweenMax.to('.bar_article', {
    duration: 0,
    opacity: 0,
    ease: "linear"
  });
  TweenMax.to('.article_content', {
    duration: 0,
    opacity: 0,
    ease: "linear"
  });
  TweenMax.to('.ctaLink', {
    duration: 0,
    opacity: 0,
    ease: "linear"
  });

  if (articleBtn.id == "active") {
    // articleHead.style.opacity = "0%"
    // barArticle.style.opacity = "0%"
    // article.style.opacity = "0%"
    articleBtn.setAttribute("id", "inactive");
    articleDiv.setAttribute("id", "closed");
    mainContent.setAttribute("id", "low");
  }
});

function closeArticle() {
  articleBtn.setAttribute("id", "inactive");
  articleDiv.setAttribute("id", "closed");
  mainContent.setAttribute("id", "low");
}
//# sourceMappingURL=main.js.map
