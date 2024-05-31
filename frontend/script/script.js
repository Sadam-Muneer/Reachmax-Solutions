// const icon = document.querySelector('.icon');
// const clos = document.querySelector('.closebtn');
// const showMenu = () => {
//     document.querySelector('.mobile-menu').classList.add('show-mobile-menu');
//     document.querySelector('.mobile-menu').classList.remove('mobile-menu');
//   };
// const removeMenu = () => {
//     document.querySelector('.show-mobile-menu').classList.add('mobile-menu');
//     document.querySelector('.mobile-menu').classList.remove('show-mobile-menu');
// };
// icon.addEventListener('click',showMenu);
// clos.addEventListener('click',removeMenu);

const icon = document.querySelector('.icon');
const clos = document.querySelector('.closebtn');

const showMenu = () => {
    document.querySelector('.sidenav').style.width = '250px';
  };
const removeMenu = () => {
    document.querySelector('.sidenav').style.width = '0px';
};

icon.addEventListener('click',showMenu);
clos.addEventListener('click',removeMenu);