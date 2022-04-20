var MainTodoContainer = document.getElementById('todos')
var input = document.querySelector('.todo_input');
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');
var completedButton = document.querySelector('.completed');
var removeButton = document.querySelector('.delete');

addingButton.addEventListener('click', function(e){
    e.preventDefault();
    
    if(input.value.trim()){
       
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
        
        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');
       
        var liTag = document.createElement('li');
        liTag.innerText = input.value;
        liTag.classList.add('todo-item');
        
        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');
        
        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        
        var editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="far fa-edit"></i>';
        editBtn.classList.add('edit');
        editBtn.onclick = function(){
            editWorking(liTag);
        }
        
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        
        
        
        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(deleteButton);
    
        MainTodoContainer.appendChild(ulTag);

           
        input.value = '';
        
        todoList.addEventListener('click', function(e){
            var items = e.target;
            if(items.classList[0] === 'completed'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('strike')
            }
            else if(items.classList[0] === 'delete'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                var todo3 = todo2.parentElement;
                todo3.remove();
    
            }
        });
    }else if(input.value === ''){
        alert('Add in the to-do box')
    }
});


function editWorking(e){
    var editValue = prompt('Edit the selected task', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

