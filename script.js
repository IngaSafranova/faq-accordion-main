const buttons = document.querySelectorAll('.question-button');


buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        button.classList.toggle('active')
    })
   
})


