function calcular(){
    let nota1 = [
        Number(document.getElementById("nota1-est1").value),
        Number(document.getElementById("nota1-est2").value),
        Number(document.getElementById("nota1-est3").value),
        Number(document.getElementById("nota1-est4").value)
    ];

    let nota2 = [
        Number(document.getElementById("nota2-est1").value),
        Number(document.getElementById("nota2-est2").value),
        Number(document.getElementById("nota2-est3").value),
        Number(document.getElementById("nota2-est4").value)
    ];

    let nota3 = [
        Number(document.getElementById("nota3-est1").value),
        Number(document.getElementById("nota3-est2").value),
        Number(document.getElementById("nota3-est3").value),
        Number(document.getElementById("nota3-est4").value)
    ];

    let definitivas = [];
    for(let i = 0; i<4; i++){
        definitivas[i]= nota1[i]*0.3 + nota2[i]*0.3 + nota3[i]*0.4;
        document.getElementById("def-est" + (i+1)).innerText=definitivas[i].toFixed(2);
        document.getElementById("defi-est" + (i+1)).innerText=definitivas[i].toFixed(2);
    }

    let suma = definitivas.reduce((a,b) => a + b, 0);
    let definitiva = suma / 4;

    document.getElementById("definitiva").innerText = definitiva.toFixed(2);

}