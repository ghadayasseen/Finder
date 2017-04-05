// JavaScript File

var text = document.getElementById("text");
var display = document.getElementById("display");
var text1 = document.getElementsByClassName("text1");
var text2 = document.getElementsByClassName("text2");
var text3 = document.getElementsByClassName("text3");
var text4 = document.getElementsByClassName("text4");
var text5 = document.getElementsByClassName("text5");
var text6 = document.getElementsByClassName("text6");
var text7 = document.getElementsByClassName("text7");
var text8 = document.getElementsByClassName("text8");
var text9 = document.getElementsByClassName("text9");
var text10 = document.getElementsByClassName("text10");
var text11 = document.getElementsByClassName("text11");
var text12 = document.getElementsByClassName("text12");
var text13 = document.getElementsByClassName("text13");

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b10 = document.getElementById("b10");
var b11 = document.getElementById("b11");
var b12 = document.getElementById("b12");
var b13 = document.getElementById("b13");
var b14 = document.getElementById("b14");
var b15 = document.getElementById("b15");





b1.addEventListener("click", function(){
   text2[0].style.display="block"; 
   text2[1].style.display="block";
   text1[0].style.display="none";
   text1[1].style.display="none";
   
});

b2.addEventListener("click", function(){
      text3[0].style.display="block";
      text3[1]. style.display="block";
      text1[0].style.display="none";
      text1[1].style.display="none";
      
});

b3.addEventListener("click", function() {
      text2[0].style.display="none";
      text2[1].style.display="none";
      text4[0].style.display="block";
      text4[1].style.display="block";
});

b4.addEventListener("click", function(){
   text3[0].style.display="none";
   text3[1].style.display="none";
   text5[0].style.display="block";
   text5[1].style.display="block";
});

b6.addEventListener("click", function() {
   text5[0].style.display="none";
   text5[1].style.display="none";
   text6[0].style.display="block";
   text6[1].style.display="block";
});

b5.addEventListener("click", function(){
   text4[0].style.display="none";
   text4[1].style.display="none";
   text6[0].style.display="block";
   text6[1].style.display="block";
}); 

b7.addEventListener("click", function() {
   text7[0].style.display="block";
   text6[1].style.display="none"; 
});

b8.addEventListener("click", function() {
   text7[0].style.display="block";
   text6[1].style.display="none"; 
});

b9.addEventListener("click", function() {
   text8[0].style.display="block";
   text7[0].style.display="none"; 
});

b10.addEventListener("click", function() {
   text9[0].style.display="block";
   text8[0].style.display="none"; 
});

b11.addEventListener("click", function() {
   text10[0].style.display="block";
   text9[0].style.display="none"; 
});

b12.addEventListener("click", function() {
   text11[0].style.display="block";
   text10[0].style.display="none"; 
});

b13.addEventListener("click", function() {
   text6[0].style.display="none"; 
   text11[0].style.display="none";
   text12[0].style.display="block";
   text12[1].style.display="block";
});

b14.addEventListener("click", function() {
   text12[1].style.display="block";
   text13[0].style.display="none"; 
});




