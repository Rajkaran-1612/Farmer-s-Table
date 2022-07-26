//Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1500,
        autoplayHoverPause: true
    });
});

//Responsive navbar
$(document).ready(function(){
    $('#icon').click(function() {
        $('ul').toggleClass('show');
    });
});

window.onscroll = () => {
    $('ul').removeClass('show');
}

//Form

$("form").on("submit", function (e) {
    var dataString = $(this).serialize();

    $('#form_container').removeClass('view');
    $('#form_container').addClass('noview');
     
    //Needed for data processing
    /*$.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function () {
        print("Submitted");
      }
    });*/
 
    e.preventDefault();
});


//popup modals
const openn1 = document.getElementById("open1");
const modal_container1 = document.getElementById("modal_container1");
const closee1 = document.getElementById("Close1");

openn1.addEventListener('click', () => {
    modal_container1.classList.add('displayy');
});


closee1.addEventListener('click', () => {
    modal_container1.classList.remove('displayy');
});

const openn2 = document.getElementById("open2");
const modal_container2 = document.getElementById("modal_container2");
const closee2 = document.getElementById("Close2");

openn2.addEventListener('click', () => {
    modal_container2.classList.add('displayy');
});


closee2.addEventListener('click', () => {
    modal_container2.classList.remove('displayy');
});

const openn3 = document.getElementById("open3");
const modal_container3 = document.getElementById("modal_container3");
const closee3 = document.getElementById("Close3");

openn3.addEventListener('click', () => {
    modal_container3.classList.add('displayy');
});


closee3.addEventListener('click', () => {
    modal_container3.classList.remove('displayy');
});

const openn4 = document.getElementById("open4");
const modal_container4 = document.getElementById("modal_container4");
const closee4 = document.getElementById("Close4");

openn4.addEventListener('click', () => {
    modal_container4.classList.add('displayy');
});


closee4.addEventListener('click', () => {
    modal_container4.classList.remove('displayy');
});

const openn5 = document.getElementById("open5");
const modal_container5 = document.getElementById("modal_container5");
const closee5 = document.getElementById("Close5");

openn5.addEventListener('click', () => {
    modal_container5.classList.add('displayy');
});


closee5.addEventListener('click', () => {
    modal_container5.classList.remove('displayy');
});

const openn6 = document.getElementById("open6");
const modal_container6 = document.getElementById("modal_container6");
const closee6 = document.getElementById("Close6");

openn6.addEventListener('click', () => {
    modal_container6.classList.add('displayy');
});


closee6.addEventListener('click', () => {
    modal_container6.classList.remove('displayy');
});

const openn7 = document.getElementById("open7");
const modal_container7 = document.getElementById("modal_container7");
const closee7 = document.getElementById("Close7");

openn7.addEventListener('click', () => {
    modal_container7.classList.add('displayy');
});


closee7.addEventListener('click', () => {
    modal_container7.classList.remove('displayy');
});

const openn8 = document.getElementById("open8");
const modal_container8 = document.getElementById("modal_container8");
const closee8 = document.getElementById("Close8");

openn8.addEventListener('click', () => {
    modal_container8.classList.add('displayy');
});


closee8.addEventListener('click', () => {
    modal_container8.classList.remove('displayy');
});

const openn9 = document.getElementById("open9");
const modal_container9 = document.getElementById("modal_container9");
const closee9 = document.getElementById("Close9");

openn9.addEventListener('click', () => {
    modal_container9.classList.add('displayy');
});


closee9.addEventListener('click', () => {
    modal_container9.classList.remove('displayy');
});

const openn10 = document.getElementById("open10");
const modal_container10 = document.getElementById("modal_container10");
const closee10 = document.getElementById("Close10");

openn10.addEventListener('click', () => {
    modal_container10.classList.add('displayy');
});


closee10.addEventListener('click', () => {
    modal_container10.classList.remove('displayy');
});

const openn11 = document.getElementById("open11");
const modal_container11 = document.getElementById("modal_container11");
const closee11 = document.getElementById("Close11");

openn11.addEventListener('click', () => {
    modal_container11.classList.add('displayy');
});


closee11.addEventListener('click', () => {
    modal_container11.classList.remove('displayy');
});

const openn12 = document.getElementById("open12");
const modal_container12 = document.getElementById("modal_container12");
const closee12 = document.getElementById("Close12");

openn12.addEventListener('click', () => {
    modal_container12.classList.add('displayy');
});


closee12.addEventListener('click', () => {
    modal_container12.classList.remove('displayy');
});

const openn13 = document.getElementById("open13");
const modal_container13 = document.getElementById("modal_container13");
const closee13 = document.getElementById("Close13");

openn13.addEventListener('click', () => {
    modal_container13.classList.add('displayy');
});


closee13.addEventListener('click', () => {
    modal_container13.classList.remove('displayy');
});

const openn14 = document.getElementById("open14");
const modal_container14 = document.getElementById("modal_container14");
const closee14 = document.getElementById("Close14");

openn14.addEventListener('click', () => {
    modal_container14.classList.add('displayy');
});


closee14.addEventListener('click', () => {
    modal_container14.classList.remove('displayy');
});

const openn15 = document.getElementById("open15");
const modal_container15 = document.getElementById("modal_container15");
const closee15 = document.getElementById("Close15");

openn15.addEventListener('click', () => {
    modal_container15.classList.add('displayy');
});


closee15.addEventListener('click', () => {
    modal_container15.classList.remove('displayy');
});

const openn16 = document.getElementById("open16");
const modal_container16 = document.getElementById("modal_container16");
const closee16 = document.getElementById("Close16");

openn16.addEventListener('click', () => {
    modal_container16.classList.add('displayy');
});


closee16.addEventListener('click', () => {
    modal_container16.classList.remove('displayy');
});

const openn17 = document.getElementById("open17");
const modal_container17 = document.getElementById("modal_container17");
const closee17 = document.getElementById("Close17");

openn17.addEventListener('click', () => {
    modal_container17.classList.add('displayy');
});


closee17.addEventListener('click', () => {
    modal_container17.classList.remove('displayy');
});

const openn18 = document.getElementById("open18");
const modal_container18 = document.getElementById("modal_container18");
const closee18 = document.getElementById("Close18");

openn18.addEventListener('click', () => {
    modal_container18.classList.add('displayy');
});


closee18.addEventListener('click', () => {
    modal_container18.classList.remove('displayy');
});

const openn19 = document.getElementById("open19");
const modal_container19 = document.getElementById("modal_container19");
const closee19 = document.getElementById("Close19");

openn19.addEventListener('click', () => {
    modal_container19.classList.add('displayy');
});


closee19.addEventListener('click', () => {
    modal_container19.classList.remove('displayy');
});

const openn20 = document.getElementById("open20");
const modal_container20 = document.getElementById("modal_container20");
const closee20 = document.getElementById("Close20");

openn20.addEventListener('click', () => {
    modal_container20.classList.add('displayy');
});


closee20.addEventListener('click', () => {
    modal_container20.classList.remove('displayy');
});