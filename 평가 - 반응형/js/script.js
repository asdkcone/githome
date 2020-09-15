$(".menu").click(
    function(){
        $(".t_menu").stop().slideDown(400);
    }
);
$(".close","#wrap",".menu").click(
    function(){
        $(".t_menu").stop().slideUp(400);
    }
);


var slideWidth = document.querySelector("#slide").width; /* undefined변수(null,0로 인식?) */


var wrap = document.querySelector("#wrap");
var slide = document.querySelector("#slide");
var tabli = document.querySelectorAll(".tab li");
var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var s1li = document.querySelectorAll(".s1 li"); /* 10개 */
var s2li = document.querySelectorAll(".s2 li"); /* 6개 */
var move = document.querySelector(".move");
var moveli = document.querySelectorAll(".move li");

var s1count=0;
var s1spoint;
var s1epoint;

wrap.addEventListener('click',moveslide);
console.log(".wwhere");


function moveslide(e){
    console.log("good");
    s1count=s1count%4;
    

    if(e.target==moveli[0]){    /* left */
        setTimeout(function(){
            // moveli[1].classList.remove("on");
            // moveli[0].classList.remove("on");
            // moveli[1].classList.add("on");
            moveli[0].style.opacity="0";
            moveli[1].style.opacity="1";
        },100);
        s1.style.transform="translateX(0)";
        
    }if(e.target==moveli[1]){   /* right */
        setTimeout(function(){
            // moveli[0].classList.remove("on");
            // moveli[1].classList.remove("on");
            // moveli[0].classList.add("on");
            moveli[1].style.opacity="0";
            moveli[0].style.opacity="1";
        },100);
        s1.style.transform="translateX(-540px)";
    }
}






