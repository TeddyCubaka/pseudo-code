let div = document.querySelector('.div-1');
let div2 = document.querySelector('.div-2');
let div3 = document.querySelector('.div-3');
let div4 = document.querySelector('.div-4');
let div5 = document.querySelector('.div-5');
let div6 = document.querySelector('.div-6');

let grandeBarre = document.querySelector(".grande-barre");
let petiteBarre = document.querySelector(".petite-barre");
let divHacker = document.querySelector("#divHacker")

let divFinale = document.querySelector(".traitement");
let counter = divFinale.children[1];
let progressBarre = divFinale.children[0];

function final(){
    document.querySelector(".progression").classList.add('hide');
    divFinale.classList.remove('hide');
    progressBarre.style = "background-color: none";
    counter.style = "background-color: none";
    progressBarre.innerHTML = "Craking completed"
    counter.innerHTML = "Thank you";
}

function changer() {
    document.querySelector(".traitement").classList.add('hide');
    for (let i = 0; i < 36; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.color = "green";
        let inter = setInterval(() => {newDiv.innerHTML = arr[Math.floor(Math.random() * arr.length)];}, 200)
        divHacker.appendChild(newDiv);
        setTimeout(()=>{
            clearInterval(inter);
            setTimeout(()=>{newDiv.classList.add('hide')},1000)
        },3000)
    }
    setTimeout(()=>{
        document.querySelector(".progression").classList.remove('hide');
        let a = Math.round(Math.random()*100);
        let i = 0;
        let progress = setInterval(()=>{
            i+=1; 
            grandeBarre.style.width = i + "%";
            petiteBarre.style.width = Math.random()*100 + "%";
            if(i==100)clearInterval(progress);
            if (i==100) final();
        },a)
    },4000)
} 

let numGenerates = [];
for (let i = 0; i < 80; i++) {numGenerates.push(Math.random() * 35.6837585753757)}
function numSelector(param) {
    for (let i = 0; i < 50; i++) {
        let newSpan = document.createElement('span');
        let trait = setInterval(() => {
            let a = Math.round(Math.random() * numGenerates.length);
            newSpan.innerHTML = numGenerates[a];
        }, 50);
        setTimeout(()=>{
            if (i < 49) clearInterval(trait);
        },4900)
        setTimeout(() => {
            param.appendChild(newSpan);
        }, (i+20) * 100)
    }
    return param;
}

function progession() {
    document.querySelector("#text").value = " ";
    document.querySelector('form').classList.add('hide');
    div.parentNode.classList.remove('hide');
    numSelector(div);
    numSelector(div2);
    numSelector(div3);
    numSelector(div4);
    numSelector(div5);
    numSelector(div6);
    setTimeout(()=>{div.parentNode.remove(div.parentElement);},4900)
    setTimeout(()=>{
        divFinale.classList.remove('hide');
        let i = 2;
        let yet = setInterval(()=>{
            i = i + 1;
            progressBarre.style.width = i + "%";
            if (i == 101) clearInterval(yet);
            if (i == 101) changer();
            counter.innerHTML = progressBarre.style.width;
        },100)
    },5500)
}

function codeTyping(){
    document.querySelector("#text").value += fakeCodes[Math.round(Math.random()*fakeCodes.length)];
}
