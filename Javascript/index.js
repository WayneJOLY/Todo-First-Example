const todoInput=document.getElementById('todo-input')
const addTodoBtn=document.getElementById('add-todo-btn')
const todoList=document.getElementById('todo-list')



addTodoBtn.addEventListener("click" ,()=>{

    const todoText=todoInput.value.trim()
    if(todoText !='')
    {
        const li= document.createElement('li')
        li.className='todo-item'
        li.textContent=todoText


        const deleteBtn=document.createElement('button')
        deleteBtn.className='delete-btn'
        deleteBtn.textContent='X'

        li.appendChild(deleteBtn)

        
        deleteBtn.addEventListener('click',()=>{
                todoList.removeChild(li)
            })
        todoList.appendChild(li)
        todoInput.value=" "
    }
})

todoInput.document.addEventListener("keydown",(e)=>{
    
    if( e.keyCode===13)
    {
        const li= document.createElement('li')
        li.className='todo-item'
        li.textContent=todoText
    }
})