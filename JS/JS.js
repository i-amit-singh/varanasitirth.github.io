//function to change cover image in index page after 5 sec. in loop
function changeCover() {
    var image = ["img/main.jpg", "img/main2.jpg", "img/main3.jpg"];
    var count = 0;
    setInterval(function () {
        document.getElementById('cover').style.background = "linear-gradient(rgba(255, 255, 255, 0.308),rgba(0, 0, 0, 0.281),#b3caf5b6) ,url(" + image[count++] + ")";
        document.getElementById('cover').style.backgroundSize = "cover";
        if (count == 3) {
            count = 0;
        }
    }, 5000);
}
changeCover();

//setting background images for place cards
//places array
var places = ["img/place1.jpg", "img/place2.jpg", "img/place3.jpg", "img/place4.jpg", "img/place5.jpg", "img/place6.jpg"];
var place = document.getElementsByClassName("place");
for (let i = 0; i < place.length; i++) {
    //setting background image
    place[i].style.background = "url(" + places[i] + ")";
    place[i].style.backgroundSize = "cover";
}

//setting background images for food cards
//foodImg array
var foodImg = ["img/food1.jpg", "img/food2.jpg", "img/food3.webp", "img/food4.webp", "img/food5.webp", "img/food6.webp"];
var food = document.getElementsByClassName("food");
for (let i = 0; i < food.length; i++) {
    //setting background image
    food[i].style.background = "url(" + foodImg[i] + ")";
    food[i].style.backgroundSize = "cover";
}

//setting background images for fact cards
//factImg array
var factImg = ["img/fact1.jpg", "img/fact2.webp", "img/fact3.jpg", "img/fact4.webp", "img/fact5.webp", "img/fact6.webp", "img/fact7.webp", "img/fact8.jpg", "img/fact9.jpg", "img/fact10.jpg"];
var vboxImg = document.getElementsByClassName("vboxImg");
for (let i = 0; i < vboxImg.length; i++) {
    //setting background image
    vboxImg[i].style.background = "url(" + factImg[i] + ")";
    vboxImg[i].style.backgroundSize = "cover";
}

//getting go to top button 
var goTop = document.getElementById('goTop');
//getting nav1
var navBar = document.getElementById('nav1');
//getting toggle links in nav1 
var toggler = document.getElementById('Toggler');
//getting position of scrolling
window.onscroll = function () {
    scrollFunction()
};
//checking for position of scrolling
function scrollFunction() {
    if (document.body > 700 || document.documentElement.scrollTop > 700) {
        //making navbar sticky
        navBar.style.position= "sticky";
        // navBar.style.transform = "scaleY(1)";
        navBar.style.top="0%";
        // navBar.style.transformOrigin="top";
        navBar.style.transitionDuration="0.5s";
        navBar.style.animation = "ease-in-out";
        // making toggle links visible
        toggler.style.visibility = "visible";
    }
    else if (document.body > 550 || document.documentElement.scrollTop > 550){
        //making go to top button visible by scalling
        goTop.style.transform = "scale(1)";
        goTop.style.transitionDuration="0.5s";
        goTop.style.animation = "ease-in-out";
        goTop.style.top="80%";
        //msetting initial stage of nav1 bar
        // navBar.style.transform = "scaleY(0)";
        navBar.style.top="-20%";
    }
     else {
         //dissapearing go to top btton by scalling sown
        goTop.style.transform = "scale(0)";
        goTop.style.top="100%";
        //making navBar static
        navBar.style.position= "static";
        // navBar.style.transform = "scaleY(1)";
        //dissapearing toggle links
        toggler.style.visibility = "hidden";
    }
}