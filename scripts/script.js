
$('#burger').on('click', function () {   //обрабатываем клик по бургеру меню
    $('.menu').addClass('open');
})

$('.menu-item').on('click' ,function (){  //закроем меню по клику на любой пункт меню
    $('.menu').removeClass('open');
})

$('.close').on('click' ,function (){  // закроем меню по клику на крестик
    $('.menu').removeClass('open');
})


$('#choose-pizza').on('click',  function () {
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
addToCartButtons.on('click', function() {
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
    alert('Спасибо за заказ!');
    productInput.val('') ;
    addressInput.val('');
    phoneInput.val('');
})