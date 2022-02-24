//   Deliverables
// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

//Ensure HTML file has finished loading before executing
document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
  e.preventDefault();
  buildToDo(e.target.new_task_description.value);
  form.reset();

})
});

function buildToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector('#list').appendChild(p);
}

function handleDelete(e){
e.target.parentNode.remove();
}