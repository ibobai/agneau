let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

/*
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
*/

//Dark mode


var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
      icon.src = "/images/sunIcon.png"
   }else{
      icon.src = "/images/moon.png"
   } 
}


/*
let theme = localStorage.getItem('data-theme');

const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
}



icon.onclick = () => {
   let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
      changeThemeToLight();
      icon.src = "/images/moon.png";
    }else{
        changeThemeToDark();
        icon.src = "/images/sunIcon.png";
    }  

    console.log("The actual mode is : "+localStorage.getItem("data-theme"))
}

*/

/*
// Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived them to the website
img.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});
*/


/* ColorPiker */

let colorpicker = document.getElementById('colorpicker');
console.log("the main color is outside: " + colorpicker.value);

setInterval(()=>{
   let color = colorpicker.value;
   document.documentElement.style.setProperty('--main-color', color);
   console.log("the main color is : " + color);
}, 200); 

/*  setInterval(()=>{
   let color = colorpicker.value;
   document.body.style.backgroundColor = color;
}, 200);
  */
