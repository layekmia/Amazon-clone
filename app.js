
// Search input focus Overlay function
const searchFocus = document.querySelector('.search-focus');
const overlayOnFocus = document.querySelector('.overlay');

searchFocus.addEventListener('focus', function(){
   overlayOnFocus.classList.add('focusOverlay');
   overlayOnFocus.style.background = 'rgba(0, 0, 0, .6)'
})

overlayOnFocus.addEventListener('click', function(){
   overlayOnFocus.classList.remove('focusOverlay')
})

document.addEventListener('click', function(e){
   if (!searchFocus.contains(e.target) && overlayOnFocus.classList.contains('focusOverlay')) {
      overlayOnFocus.classList.remove('focusOverlay')
    }
})

// Sidebar showing function=============;
const sideMenuShowBtn = document.getElementById('side-menu');
const sidebarNavEl = document.querySelector('.sidebar-container');

sideMenuShowBtn.addEventListener('click', ()=>{
   sidebarNavEl.classList.add('slide-show')
   sidebarNavEl.style.background = 'rgba(0, 0, 0, .6)'
})

// slide bar close function==============;
const sideCloseBtn = document.querySelector('#slide-closer');
const closeBtnBorder = document.querySelector('.adding-border');

const userProfile = document.querySelector('.user-profile');
const sidebarLeft =  document.querySelector('.left-side');

const sidebarCloseFunction = function(){
   sidebarNavEl.classList.remove('slide-show');
   sidebarNavEl.style.background = 'none';
   closeBtnBorder.classList.add('close-border')
}
sideCloseBtn.addEventListener('click', sidebarCloseFunction)

document.addEventListener('click', function(e){
   if(!userProfile.contains(e.target) && !sidebarLeft.contains(e.target) && !sideMenuShowBtn.contains(e.target) && sidebarNavEl.classList.contains('slide-show')){
      sidebarCloseFunction();
   }
})

// Header image slider ===================;
const imgs = document.querySelectorAll('.header-slider ul img');
const prevBtn = document.querySelector('.control_prev');
const nextBtn = document.querySelector('.control_next');

let init = 0;

const changeImage = function(){
   for(let i =0; i< imgs.length; i++){
      imgs[i].style.display = 'none'
   }
   imgs[init].style.display = 'block'
}


prevBtn.addEventListener('click', function(){
   if(init > 0){
      init--;
   }else{
      init = imgs.length - 1;
   }
   changeImage();
})

nextBtn.addEventListener('click', function(){
   if(init < imgs.length - 1){
      init++;
   }else{
      init =0;
   }
   changeImage();
})




