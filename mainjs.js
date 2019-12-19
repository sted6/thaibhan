//onscroll event to trigger functions for award images
window.onscroll = function() {
  appear1();
  appear(x);
  appear2();
  appear3();
  appear4();
  appear5();
  appear6();
  appear7();
  appear8();
  appear9();
  appear10();
  appear11();
  appear12();
  appear13();
  
};

//setting match media variable to be use for mobile only javascript, and setting the listeners
var x = window.matchMedia("(max-width: 700px)");
x.addListener(appear);

//function used to animate award image on appropriate scroll, if else used to set scroll amount depending on screen size
function appear(x) {
  if (x.matches) {
  if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300){
    document.getElementById("award").className = "img-responsive-slideUp"; }
  } else {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
    document.getElementById("award").className = "img-responsive-slideUp";    
    }
  }
}

//functions used to make images and text appear after approriate scroll amount
function appear1() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("award1").className = "img-responsive-slideUp";
  }
}

function appear2() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
document.getElementById("about-us-h").className = "slideUp";
  }
}

function appear3() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
document.getElementById("about-usp").className = "slideUp";
  }
}

function appear3() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
document.getElementById("about-usp").className = "slideUp";
  }
}

function appear4() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 400) {
document.getElementById("logo").className = "img-responsive-slideUp";
  }
}

function appear5() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 800) {
document.getElementById("menuh").className = "slideUp";
  }
}

function appear6() {
  if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1200) {
document.getElementById("menurow").className = "row slideUp";
  }
}

function appear7() {
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 1400) {
document.getElementById("menugalrow1").className = "row slideUp";
  }
}

function appear8() {
  if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 1600) {
document.getElementById("menugalrow2").className = "row slideUp";
  }
}

function appear9() {
  if (document.body.scrollTop > 3100 || document.documentElement.scrollTop > 1800) {
document.getElementById("menugalrow3").className = "row slideUp";
  }
}

function appear10() {
  if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 2000) {
document.getElementById("menugalrow4").className = "row slideUp";
  }
}

function appear11() {
  if (document.body.scrollTop > 4200 || document.documentElement.scrollTop > 2400) {
document.getElementById("findusrow").className = "row slideUp";
  }
}

function appear12() {
  if (document.body.scrollTop > 5200 || document.documentElement.scrollTop > 2600) {
document.getElementById("resh").className = "row slideUp";
  }
}

function appear13() {
  if (document.body.scrollTop > 5200 || document.documentElement.scrollTop > 2800) {
document.getElementById("resrow").className = "row slideUp";
  }
}
//function used to toggle menu item description on click
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display === 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

//jquery function for date/time picker
$(function () {
  $('.datetimepicker').datetimepicker();
});

//Function to show reservation confirmed alert when button clicked
function resAlert(){
  alert('Reservation Confirmed');
}
