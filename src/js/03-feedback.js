import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

const STORAGE_KEY = "feedback-form-state";
const formData = {};

refs.form.addEventListener('input', throttle(getFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateTextarea()

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('submit form');
    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}

function getFormData(evt) {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);

    const formDataJson = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJson);
} 

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        const parsMessage = JSON.parse(savedMessage);
        refs.textarea.value = parsMessage.message;
        refs.input.value = parsMessage.email;
    }
}

