document.addEventListener("DOMContentLoaded", () => {

const pages = document.querySelectorAll(".page");
const nextBtn = document.querySelector(".arrow-right");
const prevBtn = document.querySelector(".arrow-left");

let currentPage = 0;

/* ordenar hojas (IMPORTANTISIMO) */
pages.forEach((page, index)=>{
page.style.zIndex = pages.length - index;
});

nextBtn.addEventListener("click", ()=>{
if(currentPage >= pages.length) return;


pages[currentPage].classList.add("flipped");
currentPage++;


});

prevBtn.addEventListener("click", ()=>{
if(currentPage <= 0) return;


currentPage--;
pages[currentPage].classList.remove("flipped");


});

});
