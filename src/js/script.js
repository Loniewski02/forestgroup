const navMobile = document.querySelector('.nav-mobile');
const navDesktop = document.querySelector('.nav-desktop');
const hamburgerBtn = document.querySelector('.hamburger');
const allSections = document.querySelectorAll('.section');

const handleNav = () => {
	const allNavItems = navMobile.querySelectorAll('.nav__item');
	hamburgerBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			setTimeout(() => {
				hamburgerBtn.classList.remove('is-active');
				navMobile.classList.remove('nav-mobile--active');
			}, 300);
		});
	});
};

const handleObserver = () => {
	if (window.innerWidth < 992) {
		const currentSection = window.scrollY;
		const hamburgerInner = hamburgerBtn.querySelector('.hamburger-inner');
		allSections.forEach(section => {
			if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 55) {
				hamburgerInner.classList.add('black-bars');
			} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 55) {
				hamburgerInner.classList.remove('black-bars');
			}
		});
	}
};

const handleScrollSpy = () => {
	const allNavItems = navDesktop.querySelectorAll('.nav__item');
	handleObserver();
	const navDesktopItems = navDesktop.querySelector('.nav__items');
	if (document.body.classList.contains('main-page') && window.innerWidth >= 992) {
		const sectionsArr = [];
		allSections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 88.6) {
				sectionsArr.push(section);
				const activeSection = navDesktopItems.querySelector(`[href*="${sectionsArr[0].id}"]`);

				allNavItems.forEach(item => item.classList.remove('nav__item--active'));
				console.log(allNavItems);

				if (!sectionsArr[0].classList.contains('no-id')) {
					activeSection.classList.add('nav__item--active');
				}
			}
		});
	}
};

window.addEventListener('scroll', handleScrollSpy);
hamburgerBtn.addEventListener('click', handleNav);
