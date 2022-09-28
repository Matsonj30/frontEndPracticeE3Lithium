navBar = document.getElementsByClassName("menu")

console.log(navBar[0])

window.onscroll = function (setSticky){
    if(window.scrollY == 0){ //top of page:
        navBar[0].className = "menu"
        navBar = document.getElementsByClassName("menu")
    } 
    else{
        navBar[0].className = "scrolled"
        navBar = document.getElementsByClassName("scrolled")
    }

}