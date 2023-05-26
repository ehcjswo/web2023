
// 메뉴
const menu = document.querySelectorAll(".menu > ul > li");
const submenu = document.querySelectorAll(".submenu");

menu.forEach((e,i) => {
    e.addEventListener("mouseover", () => {
        submenu[i].style.display = "block";
    });
    e.addEventListener("mouseout", () => {
        submenu[i].style.display = "none";
    });
})



// 슬라이더
const sliderWrap = document.querySelector(".slider__wrap");
const slider = document.querySelectorAll(".slider");

let sliderClone = sliderWrap.firstElementChild.cloneNode(true);
sliderWrap.appendChild(sliderClone);
let sliderindex = 0;
let sliderLnegth = slider.length;


setInterval(()=>{
    sliderWrap.style.transition = "0.3s";
    sliderindex = (sliderindex +1) % sliderLnegth;

    sliderWrap.style.transform = 'translateY(-'+sliderindex * 400 + 'px)';
    if(sliderindex == sliderLnegth-1){
        setTimeout(() => {
            sliderWrap.style.transition = "0s";
            sliderWrap.style.transform = "translateY(0px)";
        }, 700);
        sliderindex = 0;
    }
},3000)