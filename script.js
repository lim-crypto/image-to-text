const menu = document.querySelector('.menu');
const nav = document.querySelector('.navbar'); 
var picture_lyrics = document.getElementById('picture-lyrics');
var tempvalue = picture_lyrics.innerText;
var lyrics = document.getElementById('lyrics')
var repitition = document.getElementById('repitition'); 
var n = 170;
const save = document.querySelector('#save'); 
var file = document.getElementById("picture");
var gray= document.getElementById('gray');
var font=document.getElementById('font');
function change() {
    nav.classList.toggle("change");
}
function readURL() {
    var file = document.getElementById("picture").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        picture_lyrics.style.backgroundImage = "url(" + reader.result + ")";
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }
} 

function repeatLyrics(n) {
    for (var i = 0; i < n; i++) {
        picture_lyrics.innerText += tempvalue;
    }
}
function change_lyrics() {
    tempvalue=lyrics.value;
    picture_lyrics.innerText = lyrics.value;
    repeatLyrics(n);
}
function removeRepitition() {
    picture_lyrics.innerText = tempvalue;
}
function change_n() {
    n = repitition.value;
    removeRepitition();
    repeatLyrics(n);
}

repeatLyrics(n);

menu.addEventListener('click', change);
// save.addEventListener('click', change);
// file.addEventListener('change', readURL, true);
// lyrics.addEventListener('change', change_lyrics);
// repitition.addEventListener('change', change_n);



function isGray(){
    if(gray.checked == 1){
        grayScale();
    }else{
        removeGrayScale();
    }
}
function grayScale(){
    picture_lyrics.style.filter="grayscale(100%)";
}

function removeGrayScale(){
    picture_lyrics.style.filter="";
}

function changeFontSize(){
    
    console.log(1);
  
    picture_lyrics.style.fontSize=font.value+'px';
}




document.querySelector('.form').addEventListener('submit',
    function validateMyForm(e) { 
        readURL();
        change_lyrics();
        change_n(); 
        change();

        isGray();
        changeFontSize();

        console.log(1);
        e.preventDefault();
        return false 
    }

);

