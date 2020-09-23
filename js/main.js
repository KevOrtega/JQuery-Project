window.addEventListener('load', ()=>{
	// Variables
	var img_src = ["https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://www.hdwallpapershut.com/wp-content/uploads/2020/03/outrun-vaporwave-hd-wallpaper-thumb.jpg", "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];
	var gallery = document.getElementsByClassName('gallery-img');
	var gallery_btn_conteiner = document.getElementsByClassName('gallery-button-conteiner');
	var gallery_circles_conteiner = document.getElementsByClassName('gallery__circles-container');
	var circles = document.getElementsByClassName('gallery-circles');
	var previous_img = document.getElementById('previous-button');
	var next_img = document.getElementById('next-button');
	var responsive_btn = document.getElementsByClassName('responsive_button');
	var responsive_menu = document.getElementsByClassName('responsive_menu');
	var responsive_menu_ul = document.getElementsByClassName('responsive_menu-ul');
	var responsive_value = 0;
	
	//---------------------------Responsive Menu----------------------------
	// Function
	function menuOnClick(value){
		if (value == 0) {
			let height = 90;
			var wait_close = setInterval(()=>{
				responsive_menu[0].style.height = ""+height+"%";
				if (height == 50) {
					responsive_menu_ul[0].style.display = "none";
				}
				if (height == 0) {
					responsive_menu[0].style.display = "none";
					clearInterval(wait_close);
				}
				height -= 10;
			}, 10);
			return wait_close;
		}else{
			responsive_menu[0].style.display = "flex";
			let height = 0;
			var wait_open = setInterval(()=>{
				responsive_menu[0].style.height = ""+height+"%";
				if (height == 50) {
					responsive_menu_ul[0].style.display = "block";
				}
				if (height == 90) {
					clearInterval(wait_open);
				}
				height += 10;
			}, 10);
			return wait_open;
		}
	}

	menuOnClick(responsive_value);

	// Eventos
	responsive_btn[0].addEventListener('click', (e)=>{
		if (responsive_value == 0) {
			responsive_value++;
			menuOnClick(responsive_value);
			responsive_btn[0].style.transform = "rotate(90deg)";
		}else{
			responsive_value--;
			menuOnClick(responsive_value);
			responsive_btn[0].style.transform = "rotate(0deg)";
		}
	});

	//---------------------------Gallery------------------------------------
	// Funciones
	function setGallery(value){
		let val = value;
		gallery[0].src = img_src[val];
		for (index in circles) {
			circles[index].style = "background: '#ccc'";
		}
		circles[val].style = "background: #000";
	}

	setGallery(0);

	function galleryOnClick(value){
		if (value == 0) {
			gallery[0].style.opacity = 1;
			gallery_btn_conteiner[0].style.display = 'none';
			gallery_circles_conteiner[0].style.display = 'none';
		}else{
			gallery[0].style.opacity = .8;
			gallery_btn_conteiner[0].style.display= 'flex';
			gallery_circles_conteiner[0].style.display = 'flex';
		}
	}
	galleryOnClick(0)

	// Eventos
	gallery[0].addEventListener('mouseover', ()=>{
		galleryOnClick(1);
	});

	gallery_btn_conteiner[0].addEventListener('mouseover', ()=>{
		galleryOnClick(1);
	});

	gallery_btn_conteiner[0].addEventListener('mouseout', ()=>{
		galleryOnClick(0)
	});

	next_img.addEventListener('click', ()=>{
		if (gallery[0].src == img_src[0]) {
			setGallery(1);
		} else if (gallery[0].src == img_src[1]) {
			setGallery(2);
		} else{
			setGallery(0);
		}
	});

	previous_img.addEventListener('click', ()=>{
		if (gallery[0].src == img_src[0]) {
			setGallery(2);
		} else if (gallery[0].src == img_src[1]) {
			setGallery(0);
		} else{
			setGallery(1);
		}
	});

});