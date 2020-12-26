var video;
var display;
var control_int;

window.onload = function() {
    video = document.getElementById("videoPlayer");
    control_int = document.querySelector('.control');
};

function play() {
    video.play();
    control_int.classList.add("hidden-control");
}