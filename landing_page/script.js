// preloader

window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

//slideShow
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//show more
function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("showMoreOurStory");
    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btn.innerHTML = "LEARN MORE";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "LESS";
        more.style.display = "inline";
    }
}

//fixed header
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    let scrollPos = 100;
    let navbar = document.getElementById('navbar');

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        navbar.classList.add('activeFixedMenu');
    } else {
        navbar.classList.remove('activeFixedMenu');
    }
}

//menu

menu.onclick = function adaprivMenu() {
    var x = document.getElementById("menuLinks");

    if (x.className == "links") {
        x.className += " responsive";
    } else {
        x.className = "links";
    }
}

//get daat from the form
const { form } = document.forms;

function retrieveFormValue(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    console.log('data', values);
}

form.addEventListener('submit', retrieveFormValue);


//modal content

var btn = document.getElementsByClassName("openModalWindow");

var span = document.getElementsByClassName("close");

function buttonClick(event) {
    var id = this.getAttribute('data-modal');
    var modal = document.getElementById(id);
    modal.style.display = 'block';
}
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = buttonClick;
}

function spanClick() {
    var id = this.getAttribute('data-modal');
    var modal = document.getElementById(id);
    modal.style.display = 'none';
}

for (var i = 0; i < span.length; i++) {
    span[i].onclick = spanClick;
}
window.onclick = function(event) {
    var isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
    if (isModal) {
        event.target.style.display = "none";
    }
}

//button subscribe

var email = document.getElementsByClassName('subscribe').values;
document.getElementById("yourEmail").innerHTML = email;

//scroll
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

//tab
let tabNavItem = document.querySelectorAll('.tab-nav-item');
let tabContentItem = document.querySelectorAll('.tab__content');

tabNavItem.forEach(function(elem) {
    elem.addEventListener('click', activeTab);
})

function activeTab() {
    tabNavItem.forEach(function(elem) {
        elem.classList.remove('selected');
    })
    this.classList.add('selected');
    let tabName = this.getAttribute('data-tab');

    activeTabContent(tabName);
}

function activeTabContent(tabName) {
    tabContentItem.forEach(function(item) {
        item.classList.contains(tabName) ? item.classList.add('selected') : item.classList.remove('selected');
    })
}


//peope say

var slideIndexReviews = 1;
showSlidesReviews(slideIndexReviews);

function plusSlidesReviews(n) {
    showSlidesReviews(slideIndexReviews += n);
}

function currentSlideReviews(n) {
    showSlidesReviews(slideIndexReviews = n);
}

function showSlidesReviews(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesReviews");
    var dots = document.getElementsByClassName("person");
    if (n > slides.length) { slideIndexReviews = 1 }
    if (n < 1) { slideIndexReviews = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeReviews", "");
    }
    slides[slideIndexReviews - 1].style.display = "block";
    dots[slideIndexReviews - 1].className += " activeReviews";
}