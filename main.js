const numbers = document.querySelectorAll('#data-inputs');
console.log(numbers);


function calc(e) {
    let a = (document.querySelector(".numb-one").value);
    let b = (document.querySelector(".numb-two").value);
    let arrayA = [];
    let arrayB = [];
    console.log(a, b)
    e.preventDefault()
    if (a != "" && b != "") {
        a = parseInt(a);
        b = parseInt(b);
        let sum = a + b;
        document.getElementById('soma').value = sum;
        let sub1 = a - b;
        let sub2 = b - a;
        document.getElementById('subtracao1').value = sub1;
        document.getElementById('subtracao2').value = sub2;
        let mult = a * b;
        document.getElementById('mult').value = mult;
        if (b === 0) {
            document.getElementById('div1').value = "Divisão por 0";
        } else {
            let div1 = a / b;
            document.getElementById('div1').value = div1;
        }
        if (a === 0) {
            document.getElementById('div2').value = "Divisão por 0"
        } else {
            let div2 = b / a;
            document.getElementById('div2').value = div2;
        }
        let raiz1 = a * a;
        let raiz2 = b * b
        document.getElementById('raizA').value = raiz1;
        document.getElementById('raizB').value = raiz2;
        for (let x = 0; x < a; x++) {
            if (a % x === 0)
                arrayA.push(x);
        }
        let arraylenght1 = " (" + arrayA.length + ")";
        arrayA.push(a);
        document.getElementById('divisoresA').value = arrayA + arraylenght1;
        for (let y = 0; y < a; y++) {
            if (b % y === 0)
                arrayB.push(y);
        }
        let arraylenght2 = " (" + arrayB.length + ")";
        arrayB.push(b);
        document.getElementById('divisoresB').value = arrayB + arraylenght2;
        var resultado = 1;
        var count = 1;

        while (count <= a) {
            resultado *= count;
            count++;
        }
        document.getElementById('fatorialA').value = resultado;
        while (count <= b) {
            resultado *= count;
            count++;
        }
        document.getElementById('fatorialB').value = resultado;
    }
}
    








numbers.forEach(number => number.addEventListener('change', calc));