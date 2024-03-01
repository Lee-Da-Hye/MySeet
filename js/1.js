let menuBtn = document.querySelector('.menu-btn')
const quickMenu = document.querySelector('.quick-menu')
let sidebar = document.querySelector('.sidebar')


menuBtn.addEventListener('click', function(){
  if(sidebar.style.right ==='-120px'){
    //사이드바가 닫혀 있는 경우
    sidebar.style.right = '0'
    quickMenu.classList.add('active');
  }else{
    //사이드바가 열려 있는 경우
    sidebar.style.right = '-120px';
    quickMenu.classList.remove('active');
  } 
  })
