const elTitle = document.querySelector('.main-product-title');
const elEx = document.querySelector('.main-exhibition-wrap');

onload = function(){
    const elFooLe = document.querySelector('.footer-top-left');

    window.addEventListener('scroll', function () {
        /* console.log(window.pageYOffset) */
        console.log(window.pageYOffset);
        if (window.pageYOffset > 2344) {
            elFooLe.style = "opacity: 1;"
        } else if (window.pageYOffset > 1700) {
            elEx.style = "opacity: 1;"
        } else if (window.pageYOffset > 400) {
            elTitle.style = "opacity: 1;"
        }
    })
}