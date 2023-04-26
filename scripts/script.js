$(document).ready(function () {
    $('#burger').on('click', function () {   //обрабатываем клик по бургеру меню
        $('.menu').addClass('open');
    })

    $('.menu-item').on('click', function () {  //закроем меню по клику на любой пункт меню
        $('.menu').removeClass('open');
    })

    $('.close').on('click', function () {  // закроем меню по клику на крестик
        $('.menu').removeClass('open');
    })


    $('#choose-pizza').on('click', function () {
        $('.product')[0].scrollIntoView({behavior: "smooth"})
    });

    $('.rights span').text(new Date().getFullYear());

    let addToCartButtons = $('.btn-add-to-cart');
    let productInput = $('#product-input');


// for (let i = 0; i < addToCartButtons.length; i++) {
//         addToCartButtons.eq(i).on('click', function (){
//         productInput[0].scrollIntoView({behavior: "smooth"});
//         let element = addToCartButtons.eq(i).parent().prev().prev().text();
//         productInput.val(element);
//         console.log(element);
//     })
// }

// ------ оптимизировал обработчик клика для jquery
    addToCartButtons.on('click', function () {
        let element = $(this).closest('.product').find('.product-title').text(); // взяли текст у класса product-title
        productInput.val(element); // и поместили его в поле инпута
        productInput[0].scrollIntoView({behavior: "smooth"}); // проскролили к этому инпуту
    });


    $('#create-order').on('click', function () {
        let addressInput = $('#address-input');
        let phoneInput = $('#phone-input');
        if (!productInput.val()) {
            alert('Заполните пиццу');
            return;
        }
        if (!addressInput.val()) {
            alert('Заполните адрес');
            return;
        }
        if (!phoneInput.val()) {
            alert('Заполните телефон');
            return;
        }
        $.ajax({
            method: 'GET',
            url: 'https://testologia.site/test-cookie?name=' + productInput.val(),
            xhrFields: {
                withCredentials: true
            }
        })
        productInput.val('');
        addressInput.val('');
        phoneInput.val('');
    })

    if (!localStorage.getItem('cookieAccepted')) {
        $('.cookie').show();

    }

    $('.cookie-accept').click(function () {
        $('.cookie').hide();
        localStorage.setItem('cookieAccepted', '1');
    })

    $('.product-action .btn').click(function (event) {
        let productTitle = $(event.target).parent().siblings('.product-title').text().trim();
        let cart = localStorage.getItem('cart');
        let cartArray=[];
        if (cart) {
            cartArray = JSON.parse(cart); //преобразовываем строку из localStorage в массив
        }

        cartArray.push(productTitle); // добавляем в наш массив название пиццы
        localStorage.setItem('cart', JSON.stringify(cartArray)) // преобразованную обратно из массива строку передали в хранилище LocalStorage

        console.log(localStorage);

    });


// ---- своя библиотека для работы с cookie из консоли  -----
// cookie.set(name, value, options) - записать cookie
// cookie.get(name) - вывести значение по ключу name
// cookie.delete(name) - удалить значение и ключ name
    let cookie = {
        set: (name, value, options) => {
            if (!name || !value) {
                return null;
            }
            let string = name + "=" + value;
            if (options) {
                string += ';' + options;
            }
            document.cookie = string;
            return cookie;
        },
        get: (name) => {
            const value = '; ' + document.cookie;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        },
        delete: (name) => {
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:001 GMT';
        }
    }

})