var navbar = document.querySelector('.navbar');
var navbarButton = document.querySelector('.navbar-button');
var collapse = document.querySelector('.navbar-collapse');
var navbarLink = document.querySelector('.navbar-link');
window.onscroll = function() {
    // Affix dla naglowka
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('scroll-up');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('scroll-up');
    }
}

//obsluga nav button
navbarButton.addEventListener('click', function () {
    this.classList.toggle('is-active');
    collapse.classList.toggle('collapsed');
    if(collapse.classList.contains('collapsed')){
        navbar.style.backgroundColor = "#ED4C5C";
    }else{
        navbar.style.backgroundColor = "transparent";
    }
})

//usuwanie znakow oprocz cyfr
let form = document.getElementById('form');
let firstName = document.getElementById('fName');
let lastName = document.getElementById('lName');
let phone = document.getElementById('phone');
let select = document.getElementById('oService');
let formMessage = document.querySelector('.form-message');

phone.addEventListener('keyup', function () {
    let exp = /[^\d+]/g;
    this.value = this.value.replace(exp,'');
})

//dodanie error
const makeError = function(field, show) {
    if (show) {
        field.classList.add("form-error");
    } else {
        field.classList.remove("form-error");
    }
};

//validacja
form.addEventListener("submit", e => {
    e.preventDefault();
    let formError = [];
    let formData = [];
    if(firstName.value == ""){
        makeError(firstName, true);
        formError.push("Complete the first name");
    }else{
        makeError(firstName, false);
        formData.push(firstName.value);
    }

    if(lastName.value == ""){
        makeError(lastName, true);
        formError.push("Complete the last name");
    }else{
        makeError(lastName, false);
        formData.push(lastName.value);
    }

    if(phone.value == ""){
        makeError(phone, true);
        formError.push("Complete the phone");
    }else{
        makeError(phone, false);
        formData.push(phone.value);
    }

    if(select.value == ""){
        makeError(select, true);
        formError.push("Complete the Service");
    }else{
        makeError(select, false);
        formData.push(select.value);
    }

    if(!formError.length){
        //form.submit();
        formMessage.classList.add("success");
        formMessage.classList.remove("error");
        formMessage.innerHTML = `
            <h3>This is your data</h3>
            <ul>
                ${formData.map(el => `<li>${el}</li>`).join("")}
            </ul>
        `;
    }else {
        formMessage.classList.add("error");
        formMessage.classList.remove("success");
        formMessage.innerHTML = `
            <h3>Complete the empty fields</h3>
            <ul>
                ${formError.map(el => `<li>${el}</li>`).join("")}
            </ul>
        `;
    }
})