document.addEventListener('DOMContentLoaded', function () {
    var chair1=document.querySelector('.chair1');
    chair1.addEventListener('mouseover', function(event){
            chair1.style.visibility='hidden'
    });
    chair1.addEventListener('mouseout', function(event){
        chair1.style.visibility='visible'
    });

    var chair2=document.querySelector('.chair2');
    chair2.addEventListener('mousemove', function(event){
        chair2.style.visibility='hidden'
    });
    chair2.addEventListener('mouseout', function(event){
        chair2.style.visibility='visible'
    });

    var submenu=document.querySelector('li .submenu');
    var firm=document.querySelector('a');
    firm.addEventListener('mouseover', function(event){
        submenu.style.display='block';
    });
    firm.addEventListener('mouseout', function(event){
        submenu.style.display='none';
    });

    var prev=document.querySelector(".sign");
    var next=document.querySelector(".sign1");
    var allImg=document.querySelectorAll(".background img");
    var indexImg=0;
    allImg[indexImg].classList.add("visible");
    prev.addEventListener('click', function(event){
    allImg[indexImg].classList.remove("visible");
        indexImg--;
        if (indexImg<0){
            indexImg=allImg.length-1;
        }
        allImg[indexImg].classList.add("visible");
    });
    next.addEventListener('click', function(event){
        allImg[indexImg].classList.remove("visible");
        indexImg++;
        if(indexImg>=allImg.length){
            indexImg=0;
        }
        allImg[indexImg].classList.add("visible");

    });


});