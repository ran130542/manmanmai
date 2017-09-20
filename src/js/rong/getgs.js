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