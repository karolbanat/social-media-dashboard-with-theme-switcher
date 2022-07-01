const toggleBtn = document.querySelector('.theme-toggle__btn');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.body.dataset.theme = 'dark';
	toggleBtn.classList.add('theme-toggle__btn--dark');
}

toggleBtn.addEventListener('click', () => {
	if (document.body.dataset.theme === 'dark') {
		document.body.dataset.theme = 'light';
		toggleBtn.classList.remove('theme-toggle__btn--dark');
	} else {
		document.body.dataset.theme = 'dark';
		toggleBtn.classList.add('theme-toggle__btn--dark');
	}
});
