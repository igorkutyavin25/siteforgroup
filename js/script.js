// Задаем пременную с атрибутом и говорим ему,чтобы подключил селектор(класс)
let loginButton = document.querySelector('.button-enter');
let loginPopUp = document.querySelector('.login-popup');
let closePopup = document.querySelector('.closePopUp');
// Добавляем элемту событие по клику
loginButton.addEventListener('click', showPopUp)
closePopup.addEventListener('click',close);
function showPopUp(evt) {
    evt.preventDefault()
    loginPopUp.classList.toggle('show-popup')

};

function close(evt) {
    evt.preventDefault()
    loginPopUp.classList.toggle('show-popup')
};



