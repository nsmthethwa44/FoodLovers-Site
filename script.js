// when nav link is clicked add active class
// remove current active class
let menu = document.querySelector(".menuBox");
let closeImg = document.querySelector(".closeMenu");
let goTop = document.querySelector(".goTop");
let navbar = document.querySelector(".navbar")
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
});

// if menu onclick view navbar 
menu.onclick = () =>{
  navbar.classList.toggle("active");
}
closeImg.onclick = () =>{
  navbar.classList.remove("active");
}

window.onscroll = () =>{
  if (window.scrollY > 150) {
    ;
  } else { 
    
    
  }
}

// faq 
let faqItem = document.querySelectorAll(".down .item");
faqItem.forEach(faq =>{
  faq.onclick = () =>{
    faqItem.forEach(subfaq => {subfaq.classList.remove("active")})
    faq.classList.add("active");
  }
})

//  Initialize Swiper 
// menu slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let header = document.querySelector(".header");
  window.onscroll = () =>{
    if (window.scrollY > 150){
        header.classList.add("active")
        goTop.classList.add("active");
        navbar.classList.remove("active")
    }else{
        header.classList.remove("active")
        goTop.classList.remove("active");
    }
  }

  
      // new featured menu slide 
      var swiper = new Swiper(".mySlide", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   
    200: {
      slidesPerView: 1,
    },
    
    567: {
      slidesPerView: 2,
    },
     992: {
      slidesPerView: 3,
    },
  
  },
      });

   