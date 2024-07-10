const countdown = () => {
   const countDate = new Date("Jul 11, 2024 00:00:00").getTime();
   const now = new Date().getTime();
   const gap = countDate - now;

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   if (gap <= 0) {
       clearInterval(interval);
       document.getElementById("days").innerText = 0;
       document.getElementById("hours").innerText = 0;
       document.getElementById("minutes").innerText = 0;
       document.getElementById("seconds").innerText = 0;
       return;
   }

   const textDay = Math.floor(gap / day);
   const textHour = Math.floor((gap % day) / hour);
   const textMinute = Math.floor((gap % hour) / minute);
   const textSecond = Math.floor((gap % minute) / second);

   document.getElementById("days").innerText = textDay;
   document.getElementById("hours").innerText = textHour;
   document.getElementById("minutes").innerText = textMinute;
   document.getElementById("seconds").innerText = textSecond;
};

const interval = setInterval(countdown, 1000);

let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () =>{
   searchBtn.classList.toggle('fa-times');
   searchForm.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
};

window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 650){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   };

   let value = window.scrollY / 10;
   document.querySelector('.home .mountain').style.bottom = `${-value}%`;
   document.querySelector('.home .content').style.bottom = `${value}%`;
   document.querySelector('.home .moon').style.marginTop = `${-value}%`;
   document.querySelector('.home .cloud-1').style.right = `${-value}%`;
   document.querySelector('.home .cloud-2').style.left = `${-value}%`;
};