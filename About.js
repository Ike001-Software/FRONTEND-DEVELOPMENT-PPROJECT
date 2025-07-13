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



