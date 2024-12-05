// document.querySelector('#form2').addEventListener('submit', function(event){
//     event.preventDefault();
//     var review = document.getElementById('review').value;
//     var para = document.createElement("p");
//     para.innerText = review;
//     var element = document.getElementById("form2");
//     element.append(para);
// })



// fourth page loading responsibility 
$(".slider__tab").click(function () {
    $(".slider__tab, .slider__img, .slider__content").removeClass("active");

    $(this).addClass("active");
    $(`#${this.id}__img, #${this.id}__content`).addClass("active");
});

$(".slider__tab:first-child").click();



// number of booking increment decrement counter
var peopleCount = 4;
document.getElementById('people').value = peopleCount;
document.getElementById('people-count').innerText = peopleCount + ' people';

document.getElementById('decrement').addEventListener('click', function() {
    if (peopleCount > 1) {
        peopleCount--;
        document.getElementById('people').value = peopleCount;
    }

    document.getElementById('people-count').innerText = peopleCount + (peopleCount > 1 ? ' people' : ' person');
});

document.getElementById('increment').addEventListener('click', function() {
    peopleCount++;
    document.getElementById('people').value = peopleCount;
    document.getElementById('people-count').innerText = peopleCount + ' people';
});



// form submission and sucess msg vala section
document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    event.target.reset();
    document.querySelector('.success').classList.add('active');

    document.querySelector('.success__close').addEventListener('click', function() {
    document.querySelector('.success').classList.remove('active');
});  
});
   


// checking the required field for Contact us form
document.getElementById("send1").addEventListener("click", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name1").value.trim();
    var email = document.getElementById("email1").value.trim();
    var message = document.getElementById("message1").value.trim();

    if (name === '' || email === '' || message === '') {
        alert("All fields are required");
    } else if (!isValidEmail(email)) {  
        alert("Invalid Email");
    } else {
        alert("Form submitted!");
    }
});

// Email verification
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



// let hourInput = document.getElementById('hour');
// let display = document.getElementById('display');

// hourInput.addEventListener('input', function() {
//     let value_hour = parseInt(hourInput.value);

//     if (!isNaN(value_hour) && value_hour >= 1 && value_hour <= 24) {
//         if (value_hour > 12) {
//             display.innerText = value_hour - 12;
//         } else {
//             display.innerText = value_hour;
//         }
//     } else {
//         display.innerText = "Invalid hour";
//     }
// });







