
/*
*****
---- 1. Preloader Script
-- 2. Naavbar Fixed Top Script
-- 3. Back To Top Button Script
-- 4. Hide Navbar Collapse When Click Close Button
-- 5. Hide NavMenu Onclick Outside
-- 6. Main Header Nav links Active Class Genaretor
-- 7. Service Card Slider Activaton Script
-- 8. Location Slider
-- 9. Counter Activation Script
-- 10. Custom Fluid Container Width Maintain
-- 11. Home Cleaning Service Page Testimonial Activation Script
-- 12. Collapse Button Text Change
****
*/ 


/*============================= Preloader Vanilla Java Script ========================*/ 
// document.onreadystatechange = function() {
//   if (document.readyState !== "complete") {
//       document.querySelector("body").style.visibility = "hidden";
//       document.querySelector("#preloader").style.visibility = "visible";
//   } else {
//       document.querySelector("#preloader").style.display = "none";
//       document.querySelector("body").style.visibility = "visible";
//   }
// };

/*============================= Nav Bar Fixed Top Vanilla Java Script ========================*/ 
window.addEventListener('scroll', function(){ 
    var menubar = document.querySelector("#mainNav"); 
    menubar.classList.toggle("fixed-top", window.scrollY > 500);
}); 

/*============================= Back To Top Button Script ========================*/
var mybutton = document.getElementById("backTop");  
window.onscroll = function() {scrollFunction()}; 
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}  
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*============================ Hide Navbar Collapse By Close Button =========================*/ 
function hideNavMenu() { 
  let nav = document.getElementById('navbarNav');
  if ( nav.classList.contains('show') ) { 
      nav.classList.remove('show'); 
  }
}
/*=========================== Hide NavMenu Onclick Outside ===================================*/



(function ($) { 
  document.onclick = function (e) {
    if (e.target.id !== 'navbarNav' && e.target.id !== 'toggler') {
        if (e.target.offsetParent && e.target.offsetParent.id !== 'navbarNav') {
            document.getElementById('navbarNav').classList.remove('show');
        }
    }
  }
     
    /*=========================== Main Header Nav links Active Class Genaretor ===================================*/ 
    $("#mainNav .navbar-nav li a").filter(function () {
        return this.href == location.href.replace(/#.*/, "");
    }).parents("li").addClass("active");
 
 
    // Service Card Slider Activaton Script (Homepage)
    $(".serviceSlider").owlCarousel({
        items: 3,
        autoplay:true, 
        autoplayHoverPause: true, 
        smartSpeed: 550,
        responsiveClass: true,
        autoplayTimeout: 7000, 
        autoplaySpeed: 3000, 
        loop: true,
        margin: 0, 
        items: 3, 
        nav: false,
        dots: true, 
        responsiveClass: true, 
        responsive: { 
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 3 }
        },
    });

    // Location Slider Activaton Script (Homepage)
    $(".locationSlider").owlCarousel({ 
        autoplay:false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true, 
        smartSpeed: 550,
        responsiveClass: true,
        autoplayTimeout: 10000, 
        autoplaySpeed: 3000, 
        loop: true,
        margin: 20, 
        items: 7, 
        nav: false,
        dots: false, 
        centered: true,
        responsiveClass: true, 
        responsive: { 
            0: { items: 3 },
            768: { items: 4 },
            992: { items: 5 },
            1200: { items: 7 }
        },
    });
    

    $(".custom-select").select2();
   
    // Counter Activation Script
    $('.count-num').rCounter({ duration:40 });
})(jQuery);



/*============================= Full width container set as container in one side script ========================*/
if(window.innerWidth > 1400) {
  let vwxxl = (window.innerWidth - 1280) / 2; 
  document.documentElement.style.setProperty('--vwxxl', `${vwxxl}px`);
}
if(window.innerWidth > 1200) {
  let vwxl = (window.innerWidth - 1140) / 2; 
  document.documentElement.style.setProperty('--vwxl', `${vwxl}px`);
}
if(window.innerWidth > 992) {
  let vwlg = (window.innerWidth - 960) / 2; 
  document.documentElement.style.setProperty('--vwlg', `${vwlg}px`);
}
 

/*--> 11. =========================== Home Cleaning Service Page Testimonial Activation Script ===================================*/   
(function ($) { 
  $(".testiSlider").owlCarousel({ 
      autoplay:false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true, 
      smartSpeed: 550,
      responsiveClass: true,
      autoplayTimeout: 10000, 
      autoplaySpeed: 3000, 
      loop: true,
      margin: 0, 
      items: 1, 
      nav: false,
      dots: true,  
  }); 
  
})(jQuery);

/*--> 12. =========================== Collapse Button Text Change Script ===================================*/   
(function ($) { 
  $(".toogleBtn").click(function () { 
    $('.toogleBtn span').text(function(i, v){
      return v === 'Read More' ? 'Show Less' : 'Read More'
   })
  });
  $(".toogleBtn2").click(function () { 
    $('.toogleBtn2 span').text(function(i, v){
      return v === 'Read More' ? 'Show Less' : 'Read More'
    })
  });
  $(".toogleText1").click(function () { 
    $('.toogleText1 span').text(function(i, v){
      return v === 'Read More' ? 'Show Less' : 'Read More'
    })
  });
  $(".toogleText2").click(function () { 
    $('.toogleText2 span').text(function(i, v){
      return v === 'Read More' ? 'Show Less' : 'Read More'
    })
  });
  $(".toogleText3").click(function () { 
    $('.toogleText3 span').text(function(i, v){
      return v === 'Read More' ? 'Show Less' : 'Read More'
    })
  });
  
})(jQuery);


 

/*--> 12. =========================== Collapse Button Text Change Script ===================================*/   
(function ($) { 
  $(".serviceList .btn-outline-primary").click(function(){
    $(".btn-outline-primary").removeClass('active');
    $(this).addClass('active');
  });
  
})(jQuery);


 