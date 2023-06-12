//img/svg/logo.svg - main image
//
$(document).ready(function () {
	var link = $('.burger-link');
	var link_active = $('.burger-link_active');
	var navigation = $('.mobile-nav');


	link.click(function(){
		link.toggleClass('burger-link_active');
		navigation.toggleClass('nav_active');
	});

	link_active.click(function(){
		navigation.removeClass('nav_active');
	});
});

let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8,
	});
}


function Copy(containerid) {
	  let textarea = document.createElement('textarea');
	  textarea.id = 'temp';
	  textarea.style.height = 0;
	  document.body.appendChild(textarea);
	  textarea.value = document.getElementById(containerid).innerText;
	  let selector = document.querySelector('#temp');
	  selector.select();
	  document.execCommand('copy');
	  document.body.removeChild(textarea);
}