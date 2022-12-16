const elTitle = document.querySelector(".main-product-title");
const elEx = document.querySelector(".main-exhibition-wrap");

onload = function () {
  const elFooLe = document.querySelector(".footer-top-left");

  window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 2700) {
      elFooLe.style = "opacity: 1;";
    } else if (window.pageYOffset > 2000) {
      elEx.style = "opacity: 1;";
    } else if (window.pageYOffset > 400) {
      elTitle.style = "opacity: 1;";
    }
  });
};

/* 사진 스크롤 애니메이션??? */
/* ::after{
  width:100%; height:100px;
  background-color: #555;
  position: absolute;
  left:0; top:0; 
  width:0;
  animation: 111 ;
}

@keyframes 111 {
  0%{
    left:0; width:0;
  }
  50%{width:100%}
  100%{
    left:auto;
    right:0;
    width:0;
  }
} */
