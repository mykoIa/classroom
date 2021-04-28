var index = 0;
var amount = 0; //amount of images
var currTransl = []
var translationComplete = true;

var transitionCompleted = function() {
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event) {
    amount = document.getElementsByClassName('slide').length;
    for (var i = 0; i < amount; i++) {
        currTransl[i] = -408;
        document.getElementsByClassName('slide')[i].addEventListener("transitionend", transitionCompleted, true);
        document.getElementsByClassName('slide')[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName('slide')[i].addEventListener("oTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName('slide')[i].addEventListener("MSTransitionEnd", transitionCompleted, true);
    }
    console.log("DOM fully loaded and parsed");
});

window.onload = function() { right() };

function left() {
    if (translationComplete === true) {
        translationComplete = false;
        index--;
        if (index == -1) {
            index = amount - 1;
        }
        var outerIndex = (index) % amount;
        for (var i = 0; i < amount; i++) {
            var img = document.getElementsByClassName("slide")[i];
            img.style.opacity = '1';
            img.style.transform = 'translate(' + (currTransl[i] + 408) + 'px)';
            //img.className = 'img';
            //img.className.replace( /(?:^|\s)animate(?!\S)/g , '' );
            currTransl[i] = currTransl[i] + 408;
        }

        var outerImg = document.getElementsByClassName("slide")[outerIndex];
        outerImg.style.transform = 'translate(' + (currTransl[outerIndex] - 408 * (amount)) + 'px)';
        outerImg.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex] - 408 * (amount);
        plusSlides(-1);
    }
}

function right() {
    if (translationComplete === true) {
        translationComplete = false;
        index++;
        var outerIndex = (index - 1) % amount;
        for (var i = 0; i < amount; i++) {
            var img = document.getElementsByClassName("slide")[i];
            img.style.opacity = '1';
            img.style.transform = 'translate(' + (currTransl[i] - 408) + 'px)';
            currTransl[i] = currTransl[i] - 408;
        }
        var outerImg = document.getElementsByClassName("slide")[outerIndex];
        outerImg.style.transform = 'translate(' + (currTransl[outerIndex] + 408 * (amount)) + 'px)';
        outerImg.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex] + 408 * (amount);
        plusSlides(1);
    }
}

var slideIndex = 3;

function plusSlides(n) {
    activClass(slideIndex += n);
}

function activClass(n) {

    var slidesActiv = document.getElementsByClassName("slide");

    if (n > slidesActiv.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slidesActiv.length }

    for (i = 0; i < slidesActiv.length; i++) {
        // console.log("i="+i);
        // console.log("sl="+slidesActiv.length);
        slidesActiv[i].className = slidesActiv[i].className.replace(" active", "");
    }

    console.log("idex=" + slideIndex);
    slidesActiv[slideIndex - 1].className += " active";
}

//video

var video_player = document.getElementById("video_player"),
    links = video_player.getElementsByClassName('linkVideo');
for (var i = 0; i < links.length; i++) {
    links[i].onclick = handler;
}

function handler(e) {
    e.preventDefault();
    videotarget = this.getAttribute("href");
    filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
    video = document.querySelector("#video_player video");
    video.removeAttribute("poster");
    source = document.querySelectorAll("#video_player video source");
    source[0].src = filename + ".mp4";
    source[1].src = filename + ".webm";
    video.load();
    video.play();
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
    var dots = document.getElementsByClassName("dash");
    if (n > slides.length) { slideIndexReviews = 1 }
    if (n < 1) { slideIndexReviews = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDash", "");
    }
    slides[slideIndexReviews - 1].style.display = "block";
    dots[slideIndexReviews - 1].className += " activeDash";
}
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

//animate

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_activeAnim');
            } else {
                animItem.classList.remove('_activeAnim');
            }
        }
    }

    function offset(e1) {
        const rect = e1.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

    }
    animOnScroll();
}

//menu

menu.onclick = function adaprivMenu() {
    var x = document.getElementById("menuLinks");

    if (x.className == "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}