var portfolioTop = document.getElementById('portfolio').offsetTop - 80;
var aboutTop = document.getElementById('about').offsetTop - 50;
var contactTop = document.getElementById('contactme').offsetTop -50;

var navPortfolio = document.getElementById('navPortfolio');
var navAbout = document.getElementById('navAbout');
var navContact = document.getElementById('navContact');

var tops = [portfolioTop, aboutTop, contactTop];
var navs = [navPortfolio, navAbout, navContact];

navs.forEach((nav, i) => {
    nav.onclick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        scrollTo(tops[i]);
    }
});

var name = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var message = document.getElementById('message');
var form = document.getElementById('form');


window.onscroll = function(event) {
    var x = event.target.scrollingElement.scrollTop;
    
    for (var i = tops.length - 1; i >= 0; i--){
        if (tops[i] <= x) {
            console.log(i);
            navs.forEach((nav) => {nav.classList.remove('selected')});
            navs[i].classList.add('selected');
            return;
        } else if (i == 0) {
            navs.forEach((nav) => {nav.classList.remove('selected')});
        }
    }

    if (x > 80) {
        document.getElementById('nav').classList.add('collapse');
    } else {
        document.getElementById('nav').classList.remove('collapse');
    }
};
	
function scrollTo(to=0, duration=600, element=document.body) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 30;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(to, duration - 10, element);
    }, 10);
}

function send() {

    if (!form.checkValidity()) {
        alert('Todos los campos son requeridos');
    }   
    
}