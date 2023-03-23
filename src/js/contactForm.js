const firstName = document.querySelector('#name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.contact__form-btn');
const phoneNumber = document.querySelector('#phone-number');
const textareaMsg = document.querySelector('#msg');
const allInputs = document.querySelectorAll('input');
const formBtn = document.querySelector('.contact__form-btn');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.contact__form-error');
	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = (input, textarea) => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});

	if (textarea.value === '') {
		showError(textarea, textarea.placeholder);
	} else {
		clearError(textarea);
	}
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText} powinno składać się z min. ${min} znaków`);
	}
};

const checkPhone = (input, min, max) => {
	if (input.value.length < min || input.value.length > max) {
		showError(
			input,
			`${input.previousElementSibling.innerText} powinien składać się z min. ${min} znaków (max. z ${max})`
		);
	}
};

const checkTextarea = (textarea, min) => {
	if (textareaMsg.value.length < min) {
		showError(textarea, `${textarea.previousElementSibling.innerText} powinna składać się z min. ${min} znaków`);
	}
};

const checkMail = email => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

	if (reg.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'E-mail jest niepoprawny');
	}
};

const checkErrors = () => {
	const formBoxes = document.querySelectorAll('.contact__form-box');
	let errorCount = 0;

	formBoxes.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		allInputs.forEach(el => {
			el.value = '';
		});
		textareaMsg.value = '';
	}
};

formBtn.addEventListener('click', e => {
	e.preventDefault();
	checkForm(allInputs, textareaMsg);
	checkLength(firstName, 3);
	checkLength(lastName, 3);
	checkPhone(phoneNumber, 9, 12);
	checkTextarea(textareaMsg, 20);
	checkMail(email);
	checkErrors();
});
