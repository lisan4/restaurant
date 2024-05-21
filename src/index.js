import './scss/style.scss';

const allInputs = document.querySelectorAll(".input-checkbox");
let cost = document.querySelector("#cost");
let result = 0;

const form = document.querySelector('.reserve');
const error = document.querySelector('.modal-error');
const okay = document.querySelector('.modal-okay');
const inputName = form.querySelector('input[name="name"]');
const inputSurname = form.querySelector('input[name="surname"]');
const inputNumber = form.querySelector('input[name="number"]');
const inputPeople = form.querySelector('input[name="people"]');
const inputDate = form.querySelector('input[name="date"]');
const inputTime = form.querySelector('input[name="time"]');
const buttonReserve = form.querySelector('.button-cost');
const buttonModal = document.querySelector('.button-modal');
const buttonModal2 = document.querySelector('.button-modal2');
const inputAll = form.querySelectorAll('.input-name');

inputAll.forEach(input => {
    input.addEventListener("click", function() {
        if (input.classList.contains('input-error')) {
            input.classList.remove('input-error')
        }
    })
})

function formSent() {
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    console.log(json);
    form.reset();
}

function modalWindow() {
    if (inputName.value == "" || inputSurname.value == "" || 
        inputNumber.value == "" || inputPeople.value == "" || inputDate.value == "" || inputTime.value == "") {
        error.classList.add('modal-active');

        if (inputName.value == "") {
            inputName.classList.add('input-error');
        }
        if (inputSurname.value == "") {
            inputSurname.classList.add('input-error');
        }
        if (inputNumber.value == "") {
            inputNumber.classList.add('input-error');
        }
        if (inputPeople.value == "") {
            inputPeople.classList.add('input-error');
        }
        if (inputDate.value == "") {
            inputDate.classList.add('input-error');
        }
        if (inputTime.value == "") {
            inputTime.classList.add('input-error');
        }

    } else {
        okay.classList.add('modal-active__okay');
        formSent();
    }
}

buttonReserve.addEventListener("click", function(e) {
    e.preventDefault();
    modalWindow()
})

buttonModal.addEventListener("click", function() {
    error.classList.remove('modal-active');

})

buttonModal2.addEventListener("click", function() {
    okay.classList.remove("modal-active__okay");
})

allInputs.forEach(input => {
    input.onclick = function getRusultCost () {

        let burger, pizza, soup;
        const inputPizzaYes = document.querySelector("#pizza-yes");
        const inputPizzaNo = document.querySelector("#pizza-no");
        const inputBurgerYes = document.querySelector("#burger-yes");
        const inputBurgerNo = document.querySelector("#burger-no");
        const inputSoupYes = document.querySelector("#soup-yes");
        const inputSoupNo = document.querySelector("#soup-no");
        
        if (inputPizzaYes.checked) {
            pizza = inputPizzaYes.value
        } else {
            pizza = inputPizzaNo.value
        }
        if (inputBurgerYes.checked) {
            burger = inputBurgerYes.value
        } else {
            burger = inputBurgerNo.value
        }
        if (inputSoupYes.checked) {
            soup = inputSoupYes.value
        } else {
            soup = inputSoupNo.value
        }
        result = parseFloat(burger) + parseFloat(pizza) + parseFloat(soup);
        cost.innerHTML = result;
    }
})
