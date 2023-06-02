// 메뉴
const menu = document.querySelector(".menu > ul");
const submenu = document.querySelectorAll(".submenu");

menu.addEventListener("mouseover", () => {
    submenu.forEach(sub => {
        sub.style.display = "flex";
    })
});
menu.addEventListener("mouseout", () => {
    submenu.forEach(sub => {
        sub.style.display = "none";
    })
})


// 슬라이드
const sliderInner = document.querySelector(".slider__inner");
const slider = document.querySelectorAll(".slider");
const bannerImg = document.querySelector(".banner_imgs");
let length = slider.length;
let index = 0;
let index2 = 0;

setInterval(()=>{
    index = (index + 1 ) % length;
    
    sliderInner.style.transform = "translateY("+ (-400) * index+"px)";
},5000)

setInterval(()=>{
    index2 = (index2 + 1 );
    
    bannerImg.style.backgroundPosition = 10 * index2+"%" + "20%";
    // background-position: 40% 20%;
},800);


// 갤러리
const no1 = document.querySelector(".no1");
const no2 = document.querySelector(".no2");
const gal1 = document.querySelector(".gal1");
const gal2 = document.querySelector(".gal2");


no1.addEventListener("click", (c)=>{
    gal1.style.display = "block";
    gal2.style.display = "none";
    no2.classList.remove("active");
    no1.classList.add("active");
})
no2.addEventListener("click", (c)=>{
    gal1.style.display = "none";
    gal2.style.display = "flex";
    no1.classList.remove("active");
    no2.classList.add("active");
})

