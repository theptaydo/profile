document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Select the elements
  var todoListItem = document.querySelector('.todo-list');
  var todoListInput = document.querySelector('.todo-list-input');
  var addButton = document.querySelector('.todo-list-add-btn');

  // Add click event listener to the "Add" button
  if (addButton) {
    addButton.addEventListener('click', function (event) {
      event.preventDefault();

      var item = todoListInput.value.trim();

      if (item) {
        // Create the new todo item
        var li = document.createElement('li');
        li.innerHTML = `
          <div class='form-check'>
            <label class='form-check-label'>
              <input class='checkbox' type='checkbox'/>
              ${item}
              <i class='input-helper'></i>
            </label>
          </div>
          <i class='remove mdi mdi-close-circle-outline'></i>
        `;

        // Append the new item to the list
        todoListItem.appendChild(li);

        // Clear the input
        todoListInput.value = '';
      }
    });
  }

  // Event delegation for checkbox change
  todoListItem.addEventListener('change', function (event) {
    if (event.target.classList.contains('checkbox')) {
      var checkbox = event.target;
      checkbox.checked = !checkbox.checked;
      checkbox.closest('li').classList.toggle('completed');
    }
  });

  // Event delegation for remove button click
  todoListItem.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove')) {
      var removeButton = event.target;
      var listItem = removeButton.parentElement;
      todoListItem.removeChild(listItem);
    }
  });
});
