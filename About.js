// Code to Animate the Slides
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Clone the first slide and add to the end
const firstClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstClone);

let totalSlides = document.querySelectorAll('.slide').length;

function goToSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

// Start the transition
function startSlide() {
  currentIndex++;
  goToSlide(currentIndex);

  if (currentIndex === totalSlides - 1) {
    // Wait for the transition to finish
    setTimeout(() => {
      // Remove transition temporarily
      slidesContainer.style.transition = 'none';

      // Instantly go back to real first slide
      goToSlide(0);
      currentIndex = 0;

      // Let the browser process the instant jump before restoring transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        });
      });
    }, 500); // Must match transition duration
  }
}

setInterval(startSlide, 3000);

// Code for Drop-Down Menu
const faqBox = document.querySelectorAll(".faq-box");

faqBox.forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("open");
  });
});


// Adding, Deleting & Editing Tasks
let input = document.querySelector("input");
let addTask = document.querySelector(".add-task");
let taskList = document.querySelector(".task-list");

// Clicking on the Add Task Button
addTask.addEventListener("click", (event) => {
  event.preventDefault();

  // Creating Element to Store the New Task
  let newItem = document.createElement("li");

  // Creating a span to hold task text
  let taskText = document.createElement("span");
  let newTask = input.value;
  taskText.textContent = newTask;

  // Creating a Delete Button beside each Element
  let deleteTask = document.createElement("button");
  deleteTask.textContent = "Delete";

  // Creating an Edit Button beside each Element
  let editTask = document.createElement("button");
  editTask.textContent = "Edit";

  // Appending buttons and task text to the list item
  newItem.appendChild(taskText);
  newItem.appendChild(editTask);
  newItem.appendChild(deleteTask);
  taskList.appendChild(newItem);

  // Clearing input field
  input.value = "";

  // Clicking on the Delete Button
  deleteTask.addEventListener("click", () => {
    newItem.remove();
  });

  // Clicking on the Edit Button
  editTask.addEventListener("click", () => {
    if (editTask.textContent === "Edit") {
      // Replace span with input field
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = taskText.textContent;

      newItem.replaceChild(editInput, taskText);
      editTask.textContent = "Save";
    } else {
      // Save edited text and replace input with span
      let editedValue = newItem.querySelector("input").value;
      taskText.textContent = editedValue;

      newItem.replaceChild(taskText, newItem.querySelector("input"));
      editTask.textContent = "Edit";
    }
  });
});

// Hide/Reveal Message Box Pseudocode:
// 1. The user sees the box with the button "Click to see what's inside"
const msgBtn = document.querySelector(".msg-btn");
const msgBox = document.querySelector(".msg-box");
// 2. At this point, whatever message in the box is not visible.
// 3. The user clicks on the button to see the content.
msgBtn.addEventListener("click", () => {
  // 4. When the user clicks this button, the box drops down to reveal it's content with the button remaining visible.
  msgBox.classList.toggle("open");
  // 5. This time, the button's text changes to "Hide the content".
  if (msgBox.classList.contains("open")) {
    msgBtn.textContent = "Hide Text"
  } else {
    msgBtn.textContent = "Click to See What's Inside"
  }
});
// 6. I wanted to improve interactivity by ensuring that this same thing I mentioned can be triggered by just clicking on the box alone.
// Do you agree?

// Add/Remove Task
// 1. User sees an input space to type in whatever task he or she has.
// 2. An Add Task button is also visible beside the input space.
let myInput = document.querySelector(".my-input");
let addMyTask = document.querySelector(".task-btn");
let myTaskList = document.querySelector(".mytask-list");
// 3. When the user clicks, the add task button, the task is added in a box visible to the user.
addMyTask.addEventListener("click", () => {
  // 3.1. An element is created to store the value
  let myNewTask = document.createElement("li");
  // 3.2. A variable to store the value of the input
  let newInput = myInput.value;
  // The element to collect and store the variable
  // First store text in a span container
  let currentTaskText = document.createElement("span");
  // Set the content of this element to store the variable
  currentTaskText.textContent = newInput;
  // Append to the list container
  myNewTask.appendChild(currentTaskText);
  
  myTaskList.appendChild(myNewTask);
  // 4. The user can edit and delete each task as they want as there are edit and delete buttons attached to each task.
  // Declaring and Creating the Delete Task Button
  let deleteMyTask = document.createElement("button");
  deleteMyTask.textContent = "Delete";
  // Clicking the Delete Button
  deleteMyTask.addEventListener("click", () => {
    myNewTask.remove();
  });
  // Declaring and Creating the Edit Task Button
  let editMyTask = document.createElement("button");
  editMyTask.textContent = "Edit";
  // Clicking the Edit Button
  editMyTask.addEventListener("click", () => {
    // Store current task
    let currentTask = currentTaskText.textContent;
    // Delete the task item display
    currentTaskText.innerHTML = "";
    // Create an input and set it's value to the Current task
    myEditInput = document.createElement("input");
    myEditInput.type = "text";
    myEditInput.value = currentTask;
    // Creating Save Button
    let saveMyInput = document.createElement("button");
    saveMyInput.textContent = "Save";
    // Creating Cancel Button
    let cancelMyInput = document.createElement("button");
    cancelMyInput.textContent = "Cancel";
    // Clicking the Save Button
    saveMyInput.addEventListener("click", () => {
      currentTaskText.textContent = myEditInput.value
      // Making the Delete and Edit Buttons visible again
      deleteMyTask.style.display = "inline";
      editMyTask.style.display = "inline";
    });
    // Clicking the Cancel Button
    cancelMyInput.addEventListener("click", () => {
      // Restore the Original State
      currentTaskText.textContent = currentTask;
      currentTaskText.appendChild(deleteMyTask);
      currentTaskText.appendChild(editMyTask);
      // Make the Buttons visible again
      editMyTask.style.display = "inline";
      deleteMyTask.style.display = "inline";
    });
    // Appending All Elements Created which are Input, Save & Cancel Buttons
    currentTaskText.appendChild(myEditInput);
    currentTaskText.appendChild(saveMyInput);
    currentTaskText.appendChild(cancelMyInput);
    // Removing the Delete and Edit Buttons at the Point of Editing
    deleteMyTask.style.display = "none";
    editMyTask.style.display = "none";
  });
  // Attaching the Delete and Edit buttons to each task
  myNewTask.appendChild(deleteMyTask);
  myNewTask.appendChild(editMyTask);
  // 5. In the task box, there is a search bar that enables a user to serach for their task.
  myInput.value = "";
});



// Once a task is searched for and selected, it can be edited or deleted.



