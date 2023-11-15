// 스크롤 되었을 때 헤더의 높이보다 내려오면 헤더를 검은색으로 강조해주기
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => { //setEventListener가 아니라 괜찮
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});


// 스크롤 되었을 때 메인 화면이 불투명해짐(opacity = 0)
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    console.log(1- (window.scrollY / homeHeight));
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});