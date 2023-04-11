const input1 = document.querySelector('#factor1');
const input2 = document.querySelector('#factor2');
const btnSum = document.querySelector('#btnSum');
const resultado = document.querySelector('#resultado');

btnSum.addEventListener('click', e => {
    e.preventDefault();
    const resultadoF = (+input1.value) + (+input2.value);
    resultado.textContent = `El resultado de la suma es: ${resultadoF}`;
});