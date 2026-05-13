function showAlert() {
    alert("Button Clicked!");
};
 function ShowTime() {
    let currentTime = new Date();
    document.getElementById("time").innerHTML = currentTime.toLocaleTimeString();
 }
function changeColor(color){
    document.body.style.backgroundColor = lightgrewn;
}