document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick =() => {
        document.getElementById('menu').classList.remove('open');
    }
})

let productInput = document.getElementById('product-input');

document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('product')[0].scrollIntoView({behavior: "smooth"})
}

let addToCartButtons = document.getElementsByClassName('btn-add-to-cart');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function (e) {
        productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        productInput.scrollIntoView({behavior: "smooth"});
        console.log(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);
    }
}

document.getElementById('create-order').onclick = function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');
    if (!productInput.value) {
        alert('Заполните пиццу');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните адрес');
        return;
    }
    if (!phoneInput.value) {
        alert('Заполните телефон');
        return;
    }
    alert('Спасибо за заказ!');
    productInput.value = "";
    addressInput.value = "";
    phoneInput.value = "";
}