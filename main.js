let formExercise = document.getElementById('form-exercise')
let numberA = document.getElementById('number-one');
let numberB = document.getElementById('number-two');

formExercise.addEventListener('submit', function(e){
    let formValidation = false
    e.preventDefault();

    formValidation = validarCampos(numberA.value, numberB.value);

    let mensageSucess = `O número digitado ${numberA.value} está correto e é maior que ${numberB.value}`;
    let mensageUnsuccess = `O número digitado ${numberA.value} é menor ou igual a ${numberB.value}`

    if (formValidation){
        let mensagemSucessHTML = document.querySelector('.sucess-mensage');
        mensagemSucessHTML.innerHTML = mensageSucess;
        mensagemSucessHTML.style.backgroundColor = "#3F78BD";
        mensagemSucessHTML.style.display = 'block';
        
        numberA.value = '';

        numberB.value = '';

    } else {
        let mensageUnsuccessHTML = document.querySelector('.sucess-mensage');
        mensageUnsuccessHTML.innerHTML = mensageUnsuccess;
        mensageUnsuccessHTML.style.display = 'block';
        mensageUnsuccessHTML.style.backgroundColor = "red";
    }

})

function validarCampos(numA, numB){
    return numA > numB
}