(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var lis = document.querySelectorAll(".filterUl>li");
var ps = document.querySelector(".popsort");
var pp = document.querySelector(".popprice");
var pc = document.querySelector(".popcat");
var arrPop = [ps, pp, pc];


console.log(lis);
console.log(ps);
console.log(pp);
console.log(pc);
console.log(arrPop);

// for (var i = 0; i < lis.length; i++) {

//     lis[i].onclick = function() {
//         var element = arrPop[i];
//         element.classList.add("on");
//         // for (var j = 0; j < arrPop.length; j++) {
//         //     arrPop[j].classList.remove("on");
//         // }

//         // arrPop[i].classList.add("on");
//     }

// }

var index = 1;

function xiala(index) {
    arrPop[index].classList.add("on");
};

xiala();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvcm9uZy9nZXRncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBsaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbHRlclVsPmxpXCIpO1xyXG52YXIgcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHNvcnRcIik7XHJcbnZhciBwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wcHJpY2VcIik7XHJcbnZhciBwYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wY2F0XCIpO1xyXG52YXIgYXJyUG9wID0gW3BzLCBwcCwgcGNdO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKGxpcyk7XHJcbmNvbnNvbGUubG9nKHBzKTtcclxuY29uc29sZS5sb2cocHApO1xyXG5jb25zb2xlLmxvZyhwYyk7XHJcbmNvbnNvbGUubG9nKGFyclBvcCk7XHJcblxyXG4vLyBmb3IgKHZhciBpID0gMDsgaSA8IGxpcy5sZW5ndGg7IGkrKykge1xyXG5cclxuLy8gICAgIGxpc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgdmFyIGVsZW1lbnQgPSBhcnJQb3BbaV07XHJcbi8vICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib25cIik7XHJcbi8vICAgICAgICAgLy8gZm9yICh2YXIgaiA9IDA7IGogPCBhcnJQb3AubGVuZ3RoOyBqKyspIHtcclxuLy8gICAgICAgICAvLyAgICAgYXJyUG9wW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcclxuLy8gICAgICAgICAvLyB9XHJcblxyXG4vLyAgICAgICAgIC8vIGFyclBvcFtpXS5jbGFzc0xpc3QuYWRkKFwib25cIik7XHJcbi8vICAgICB9XHJcblxyXG4vLyB9XHJcblxyXG52YXIgaW5kZXggPSAxO1xyXG5cclxuZnVuY3Rpb24geGlhbGEoaW5kZXgpIHtcclxuICAgIGFyclBvcFtpbmRleF0uY2xhc3NMaXN0LmFkZChcIm9uXCIpO1xyXG59O1xyXG5cclxueGlhbGEoKTsiXX0=
