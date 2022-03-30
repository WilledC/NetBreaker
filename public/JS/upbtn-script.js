



document.getElementById("btn-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp)
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}




var btnUp = document.getElementById("btn-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if(scroll > 225){
        btnUp.style.transform = "scale(1)";
    }else if(scroll < 225){
        btnUp.style.transform = "scale(0)";
    }

}


