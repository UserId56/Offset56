var video;
var display;
var control_int;
var menu_mobi;
var menu_mobi_show;
var menu_open;

window.onload = function () {
    video = document.getElementById("videoPlayer");
    control_int = document.querySelector('.control');

};

function play() {
    video.play();
    control_int.classList.add("hidden-control");
};

menu_mobi = document.querySelector('.mobi-menu');
menu_open = document.querySelector(".head-site-nav");
menu_mobi.addEventListener("click", function () {
    if (menu_mobi.classList != "mobi-menu mobi-menu-show") {
        menu_mobi.classList.add("mobi-menu-show");
        menu_open.classList.add("mobi-menu-visibility");

    } else {
        menu_mobi.classList.remove("mobi-menu-show");
        menu_open.classList.remove("mobi-menu-visibility");
    }
});