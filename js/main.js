const submitBtn = document.querySelector('#submit');
const imcResult = document.querySelector('.imcResult');
const form = document.querySelector('#form');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let weight = form.weight.value;
    let height = form.height.value;
    showImcResult(imcCalculate(weight, height));

    form.weight.value = '';
    form.height.value = '';
    
})


function imcCalculate(weight, height){
    let convertedWeight = parseFloat(weight);
    let convertedHeight = parseFloat(height);

    const imc = convertedWeight / (convertedHeight * convertedHeight);
    return imc.toFixed(2)
}

function showImcResult(imc){
    const invalidImc = imc <= 0 || imc >= 60;
    const underWeight = imc > 0 && imc < 18.5;
    const regularWeight = imc >= 18.5 && imc <= 24.9;
    const overWeight = imc >= 25 && imc <= 29.9;
    const obesity = imc >= 30 && imc <= 34.9;
    const obesity2 = imc >= 35 && imc <= 39.9;
    const obesity3 = imc > 40;

    if(invalidImc){
        imcResult.innerText = `IMC inválido, tento novamente!
        Ex: peso: 80.5  altura: 1.91`;
    }
    else if(underWeight){
        imcResult.innerText = `O seu IMC é: ${imc}, e está dentro dos parâmetros indicados como abaixo do peso ideal.`;
    }else if(regularWeight){
        imcResult.innerText = `O seu IMC é: ${imc}, e está dentro dos parâmetros indicados como normal.`;
    }else if(overWeight){
        imcResult.innerText = `O seu IMC é: ${imc}, e está dentro dos parâmetros indicados como sobrepeso.`;
    }else if(obesity){
        imcResult.innerText = `O seu IMC é: ${imc}, e está dentro dos parâmetros indicados como obesidade grau I.`;
    }else if(obesity2){
        imcResult.innerText = `O seu IMC é: ${imc}, e está dentro dos parâmetros indicados como obesidade grau II.`;
    }else if(obesity3){
        imcResult.innerText = `O seu IMC é: ${imc}, e está dentro dos parâmetros indicados como obesidade grau III.`;
    }
    
}





