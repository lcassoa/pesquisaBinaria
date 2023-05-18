let wArray = [];
for (let wIdx = 0; wIdx < 999; wIdx++) {
    wArray[wIdx] = Math.floor(Math.random() * 1000);
}
wArray.push(7)
wArray.sort((a, b) => a - b);
const wNumero = 7
for (let Index = 0; Index < wArray.length; Index++) {
    wNumero == wArray[Index] ? console.log("IDX = " + Index) : false
}

let wMin = 0, wMax = wArray.length, wMedia = (wMin + wMax) / 2;

let wTeste = true;
let wNewArray = wArray;
let pos = wArray[wArray.length / 2];

do {
    debugger
    wMedia = parseInt((wMin + wMax) / 2);
    parseInt(wMedia)
    if (wNumero == wArray[wMedia]) {
        console.log("index of"+ wNumero + ":" + wMedia)
        break;
    } else if (wNumero > wArray[wMedia]) {
        wMin = parseInt(wMedia) + 1
    } else{
        wMax = parseInt(wMedia) - 1;
    } 
    
} while (wNumero !== wArray[wMedia])