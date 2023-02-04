
// function hideContent(){
//     const showContent = document.querySelectorAll('.card')
//     showContent.forEach( elem => {
//         elem.style.display = "none"
//     })
// }

document.querySelector('.btn1').addEventListener('click', () => {
    hideContent()
    document.getElementById('showHide1').style.display = 'block'
});
document.querySelector('.btn2').addEventListener('click', () => {
    hideContent()
    document.getElementById('showHide2').style.display = 'block'
});
document.querySelector('.btn3').addEventListener('click', () => {
    hideContent()
    document.getElementById('showHide3').style.display = 'block'
});
document.querySelector('.btn4').addEventListener('click', () => {
    hideContent()
    document.getElementById('showHide4').style.display = 'block'
});

let num = 10;
let str = 'Tachi';
let bol = true;
let und = undefined;
let nul = null;

let showN = document.getElementById('num'); showN.innerHTML = `${num}`;
let showS = document.getElementById('str'); showS.innerHTML = `${str}`;
let showB = document.getElementById('bol'); showB.innerHTML = `${bol}`;
let showU = document.getElementById('und'); showU.innerHTML = `${und}`;
let showL = document.getElementById('nul'); showL.innerHTML = `${nul}`;

console.log('Primitivos', num, str, bol, und, nul);

let obj = {
    textO: 'Axel',
    numO: 21,
    objChild:{
        text1: 'Mariel',
        num1: 12
    }
}

let showObj1 = document.getElementById('obj1'); showObj1.innerHTML = `Father ${ obj.numO} ${obj.textO }`;
let showObjC = document.getElementById('objC'); showObjC.innerHTML = `Chlid ${ obj.objChild.num1 } ${obj.objChild.text1 }`;

console.log('Objetos',obj)

let a = 10;
let b = a;

console.log('(Valor por referencia primitivos) a:', a);
console.log('(Valor por referencia primitivos) b:', b);

let showA1 = document.getElementById('a1'); showA1.textContent = `Valor original ${ a }`;
let showB1 = document.getElementById('b1'); showB1.textContent = `Valor por referencia ${ b }`;

a = 20;

console.log('(Valor por referencia primitivos) a:', a);
console.log('(Valor por referencia primitivos) b:', b);

let showA2 = document.getElementById('a2'); showA2.textContent = `Cambio de valor ${ a }`;
let showB2 = document.getElementById('b2'); showB2.textContent = `Valor por referencia ${ b }`;

let c = {
    name: 'Axel'
}
let d = c;

let showC1 = document.getElementById('c1'); showC1.textContent = `Valor original ${ c.name }`;
let showD1 = document.getElementById('d1'); showD1.textContent = `Valor por referencia ${ d.name }`;

console.log('(Valor por referencia objetos) c:', c);
console.log('(Valor por referencia objetos) d:', d);

c.name = 'Mariel';

let showC2 = document.getElementById('c2'); showC2.textContent = `Cambio de valor ${ c.name }`;
let showD2 = document.getElementById('d2'); showD2.textContent = `Valor por referencia ${ d.name }`;

console.log('(Valor por referencia objetos) c:', c);
console.log('(Valor por referencia objetos) d:', d);

d.name = 'Tachi';

let showC3 = document.getElementById('c3'); showC3.textContent = `Cambio de valor ${ c.name }`;
let showD3 = document.getElementById('d3'); showD3.textContent = `Valor por referencia ${ d.name }`;

console.log('(Valor por referencia objetos) c:', c);
console.log('(Valor por referencia objetos) d:', d);