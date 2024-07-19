const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll('.goal-input');
const erroLabel = document.querySelector('.error-label');


let howManyCompleted = 0;

const handleReload = () => {
    window.location.reload();
}

 
checkBoxList.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
        let inputBoxFilled = 1;
        inputFields.forEach((input) => {
            if (input.value === '') {
                inputBoxFilled = 0;
            }
        })

        if (inputBoxFilled) {
            checkBox.parentElement.classList.toggle('completed');
            howManyCompleted++;
            const progressValue = document.querySelector('.progress-value');
            
            if (howManyCompleted == 1) {
                progressValue.style.width = '33%';
            } else if (howManyCompleted == 2) {
                progressValue.style.width = '66%';
            } else {
                progressValue.style.width = '100%';
            }
            progressValue.innerHTML = `${howManyCompleted}/3 completed`;
            erroLabel.style.display = 'none';
        } else {
            erroLabel.style.display = 'block';
        }
    })
})