let searchBtn = document.querySelector("#search-btn")
let searchBar = document.querySelector(".search-bar-container")
let formBtn = document.querySelector("#login-btn")
let loginForm = document.querySelector(".login-form-container")
let formClose= document.querySelector("#form-close")
let hamburger = document.querySelector("#hamburger")
let navbar = document.querySelector(".navbar")
let videoBtn = document.querySelectorAll(".vid-btn")




const swipe = new Swiper('.swiper', {
    loop: true,

    autoplay: {
        delay:15000,
        disablOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });







  hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})



window.onscroll = function(){
    searchBtn.classList.remove("fa-times")
    searchBar.classList.remove("active")
    hamburger.classList.remove("fa-times")
    navbar.classList.remove("active")
    loginForm.classList.remove("active")

    
}

searchBtn.addEventListener("click",function(){
    searchBtn.classList.toggle("fa-times")
    searchBar.classList.toggle("active")
})


formBtn.addEventListener("click",function(){
    loginForm.classList.add("active")
})

formClose.addEventListener("click",function(){
    loginForm.classList.remove("active")
})



videoBtn.forEach(btn =>{
    btn.addEventListener("click",function(){
        document.querySelector(".controls .active").classList.remove("active")
        btn.classList.add("active")
        let src = btn.getAttribute("data-src")
        document.querySelector("#video-slider").src =src
    })
})


var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true, 

    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesrPerView:1,
        },
        768:{
            slidesPerView:2,
        },

        1024:{
            slidesPerView:3.
        },
    },
});



// var swiper = new Swiper(".brand-slider", {
//     spaceBetween:20,
//     loop:true, 

//     autoplay:{
//         delay:2500,
//         disableOnInteraction:false,
//     },
//     breakpoints:{
//         450:{
//             slidesrPerView:2,
//         },
//         768:{
//             slidesPerView:3,
//         },

//         991:{
//             slidesPerView:4.
//         },
//         1200:{
//             slidesPerView:5.
//         },
//     },
// });



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true, 

    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesrPerView:1,
        },
        768:{
            slidesPerView:2,
        },

        1024:{
            slidesPerView:3.
        },
    },
});



