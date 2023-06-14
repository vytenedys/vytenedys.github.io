const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
let toggles = document.getElementsByClassName
('toggle');
let contentDiv = document.getElementsByClassName
('content');
let icons = document.getElementsByClassName
('icon')
;
	for(let i=0; i<toggles.length; i++){
		toggles[i].addEventListener('click',()=>{
			if(parseInt(contentDiv[i].style.height )
			!=contentDiv[i].scrollHeight){
			contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
			toggles[i].style.color ="crimson";
			icons[i].classList.remove('fa-plus');
			icons[i].classList.add('fa-minus');
}
else{
	contentDiv[i].style.height= "0px";
	toggles[i].style.color ="#111130";
	icons[i].classList.remove('fa-minus');
	icons[i].classList.add('fa-plus');
}
for(let j=0;j<contentDiv.length;j++){
	if(j!==i){
		contentDiv[j].style.height= "0px";
		toggles[j].style.color ="#111130";
		icons[j].classList.remove('fa-minus');
		icons[j].classList.add('fa-plus');
	}
}
});
}
