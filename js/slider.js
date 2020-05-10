
//SLIDER WATCHES
const mySwiper = new Swiper(".swiper-container", {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 100,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 100,
		},
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});

//SLIDER OPINIONS
const mySwiper2 = new Swiper(".swiper-2", {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		576: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});


//SLIDER FEATURED
const mySwiper3 = new Swiper(".swiper-3", {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	autoplay: {
		delay: 2000,
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		576: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});
