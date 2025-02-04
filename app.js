let input = document.querySelector(".entered-list");
let addbtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addbtn.classList.add('active');
    } else{
        addbtn.classList.remove('active')
    }
})

addbtn.addEventListener('click', () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else{
        alert('Por favor, insira uma tarefa')
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-check')
    ) {
        e.target.parentElement.parentElement.classList.
        toggle('completed');
    }
})