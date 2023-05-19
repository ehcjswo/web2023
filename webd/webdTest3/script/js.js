const submenu = document.querySelectorAll(".submenu");

document.querySelectorAll(".menu ul li").forEach((e,i)=>{
    e.addEventListener("mouseover", ()=>{
        e.querySelector("ul").style.display = "block";
    });
    e.addEventListener("mouseout", ()=>{
        e.addEventListener("mouseout", ()=>{
            e.querySelector("ul").style.display = "none";
        });
    });
});



const sliderInner = document.querySelector(".slider__inner");
const slider = document.querySelectorAll(".slider");

let sliderIndex = 0;

setInterval(()=>{
    sliderIndex = (sliderIndex)%4;
    sliderInner.style.transform = "translateY(-"+ 550*sliderIndex +"px)";
    sliderIndex++
    console.log(sliderIndex);
},3000);
