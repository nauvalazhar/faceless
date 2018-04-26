var forms = document.querySelectorAll('.if-forms form'),
	form_wrapper = document.querySelector('.if-form'),
	forms_wrapper = document.querySelector('.if-forms'),
	form_go = document.querySelectorAll('.if-form-go'),
	active_form = document.querySelector('.if-form form.active'),
	forms_height = [],
	copyright_margin = 80,
	form_padding = 20;

forms.forEach((form, index) => {
	forms_height[index] = form.offsetHeight;
});

form_wrapper.style.height = (active_form.offsetHeight + copyright_margin) + 'px';
forms_wrapper.style.height = (active_form.offsetHeight + copyright_margin) + 'px';

form_go.forEach((item, index) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();

		var i = item.getAttribute('data-go');
		
		forms[i].style.display = 'block';
		forms[0].style.marginLeft = -((forms[i].offsetWidth + form_padding) * i) + 'px';
		forms[0].style.height = forms_height[i] + 'px';

		forms.forEach((form, index) => {
			form.classList.remove('active');
		});
		forms[i].classList += 'active';

		form_wrapper.style.height = (forms_height[i] + copyright_margin) + 'px';
		forms_wrapper.style.height = (forms_height[i] + copyright_margin) + 'px';

		form_go.forEach((item, index) => {
			item.parentNode.classList.remove('active');
		});
		
		e.target.parentNode.classList += 'active';
	});
});

forms.forEach((form, index) => {
	form.addEventListener('submit', (e) => {
		form_wrapper.classList += ' if-form-progress';
		// do something here
		
		e.preventDefault();
	});
});