/*function calculate(){
    const priceLbl=document.getElementById("pro");
    const qtyInput=document.getElementById("qty");

    const price=Number(priceLbl.getAttribute("data-price"));
    const qty=Number(qtyInput.value);
    const amountSpan=document.getElementById("amount");
    amountSpan.innerText=price*qty + " VNĐ";
}*/
function calculate(){
    const priceLbl=document.getElementById("pro");
    const qtyInput=document.getElementById("qty");

    const price=Number(priceLbl.getAttribute("data-price"));
    const qty=Number(qtyInput.value);
    const amountSpan=document.getElementById("amount");
    amountSpan.innerText=price*qty + " VNĐ";
};
             
function calculate() {
    // Get dữ liệu
    let price = document.getElementById('pro').getAttribute('data-price');
    let price1 = document.getElementById('pro').getAttribute('data-price');
    let price2 = document.getElementById('pro').getAttribute('data-price');

    console.log(price);
    console.log(price1);
    console.log(price2);

    let count = document.getElementById('qty').value;

    let total = document.getElementById('amount');
    let bill = document.getElementById('amount');
    let bill2 = document.getElementById('amount');

    let billSpan = document.getElementById('bill');
    let allMoney = document.getElementById('total');
    let bill2Span = document.getElementById('bill2');
    // Xử lí
    console.log(count);
    
    let money = count*price;
    console.log(money);

    let money1 = count*price1;
    console.log(money1);

    let money2 = count*price2;
    console.log(money2);
    // Render
    total.innerHTML = `<span>${money} VND</span>`; 
    allMoney.innerHTML = `<span>${money} VND</span>`;

    bill.innerHTML = `<span>${money1} VND</span>`; 
    billSpan.innerHTML = `<span>${money1} VND</span>`;
    
    bill2.innerHTML = `<span>${money2} VND</span>`; 
    bill2Span.innerHTML = `<span>${money2} VND</span>`; 


};


    const buyBtn=document.querySelector('.js-buy-ticket')
    const modal=document.querySelector('.js-modal')
    const modalContainer=document.querySelector('.js-modal-container')
    const modalClose=document.querySelector('.js-modal-close')
    const animate=document.querySelector('.animate__animated')
    //hiển thị modal
    function showBuyTickets(){
        modal.classList.add('open')
    } 
    //gỡ bỏ modal
    function hideBuyTickets(){
        modal.classList.remove('open')
    }
    //nghe hành vi click
    buyBtn.addEventListener('click', showBuyTickets)
    //nghe sự kiện click vào button close
    modalClose.addEventListener('click', hideBuyTickets)

    modal.addEventListener('click', hideBuyTickets)

    modalContainer.addEventListener('click', function(event){
        event.stopPropagation()
    })

function send(){
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var mail = document.getElementById('mail').value;
    var from = document.getElementById('from').value;

    orderName.innerHTML = 
        '<p>Tên khách hàng: ' + name +'<\p>'
    + '<p>Số điện thoại: ' + phone +'<\p>'
    + '<p>Địa chỉ email: ' + mail +'<\p>'
    + '<p>Nơi ở: ' + from +'<\p>';
    
    /* Xuất thời gian hiện tại_ ngày/tháng/năm giờ:phút:giây */
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); //Giờ hiện tại
    
    var curDate = new Date();
    // Ngày hiện tại
    var curDay = curDate.getDate();
    // Tháng hiện tại
    var curMonth = curDate.getMonth() + 1;
    // Năm hiện tại
    var curYear = curDate.getFullYear();
    // Gán vào thẻ HTML
    document.getElementById('current-time').innerHTML = "Ngày đặt vé: " + curDay + "/" + curMonth + "/" + curYear + " " + time;
};

//login
var CORRECT_USER = 'saigoncinema';
var CORRECT_PASS = 'saigoncinema';

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var loginButton = document.getElementById('submit')


loginButton.addEventListener('click', onFormSubmit)

function onFormSubmit(){
    var username = inputUsername.value;
    var password = inputPassword.value;

    if(username == CORRECT_USER && password == CORRECT_PASS){
        alert('Đăng nhập thành công.')
    }else{
        alert('Tài khoản hoặc mật khẩu của bạn không chính xác. Vui lòng đăng nhập lại.')
    }
}