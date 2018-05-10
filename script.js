var menu = document.getElementById('menu');

menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');
    var y = document.getElementById('Block');
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " responsive";
    } else {
        x.className = "topnav";
        y.className = "block_one";
    }

};

var div_photo = document.querySelectorAll('.photo_bennet');
var about_bennet = document.getElementById('h3_about');

var func = function (e) {


    for (var i=0; i<div_photo.length; i++)
    {
        e.currentTarget.classList.add('bennet');
        if (div_photo[i] != e.currentTarget) {
            div_photo[i].classList.remove('bennet');
        }

    }
};

for (var i=0; i<div_photo.length; i++)
{
    div_photo[i].addEventListener("click",func,false);
    div_photo[0].onclick = function () {
        about_bennet.innerHTML = 'About Michael';
    };
    div_photo[1].onclick = function () {
        about_bennet.innerHTML = 'About Devid';
    };
    div_photo[2].onclick = function () {
        about_bennet.innerHTML = 'About Anna';
    };
    div_photo[3].onclick = function () {
        about_bennet.innerHTML = 'About Jason';
    };
}


