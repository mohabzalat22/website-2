var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});
// dark mode button
let toggleMode = document.querySelector('.checkbox');
toggleMode.addEventListener('click',()=>{
  let data = document.querySelector('#main');
  console.log(data);
  console.log(data.getAttribute("data-bs-theme"));
  if(data.getAttribute("data-bs-theme") === null){
    data.setAttribute("data-bs-theme", "dark");
    document.querySelectorAll('.bg-fade-toggle').forEach((e)=>e.classList.remove('bg-fade'));
    document.querySelectorAll('.bg-burger-nav').forEach((e)=>{e.style.backgroundColor = 'white';});
  }
  else{
    data.removeAttribute("data-bs-theme");
    document.querySelectorAll('.bg-fade-toggle').forEach((e)=>e.classList.add('bg-fade'));
    document.querySelectorAll('.bg-burger-nav').forEach((e)=>{e.style.backgroundColor = '#212529';});
  }
})
// nav button click
let burgerButton = document.querySelector('.navbar-toggler');
  burgerButton.addEventListener('click',()=>{
  let data = document.querySelector('#middleBurgerIcon');
  if(data.style.width !== '30px'){data.style.width = '30px';}
  else{data.style.width = '15px';}
});