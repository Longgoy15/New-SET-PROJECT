// Kunin ang content box element from the DOM where content will be displayed
const contentBox = document.getElementById("contentBox");
// Variable to track the currently selected exercise
let currentExercise = null;
let exerciseOutputObserver = null;

// Kunin ang exercise menu container from the sidebar
const exerciseMenu = document.getElementById('exerciseMenu');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function closeSidebar() {
  sidebar?.classList.remove('open');
  sidebarOverlay?.classList.remove('active');
}

function toggleSidebar() {
  sidebar?.classList.toggle('open');
  sidebarOverlay?.classList.toggle('active');
}

function showWelcome(message = 'Select an activity.') {
  contentBox.innerHTML = `<h2>Welcome</h2><p>${message}</p>`;
}

// Function to show a section based on the section ID from header navigation
function showSection(sectionId) {
  // Kunin ang section element by its ID
  const section = document.getElementById(sectionId);
  // If section doesn't exist, return early
  if (!section) return;

  // Kunin ang inner HTML content of the section
  const sectionContent = section.innerHTML;
  // Set the content box to display the section content
  contentBox.innerHTML = sectionContent;

  // Reset the current exercise selection
  resetExerciseMenu();
  hideExercisePanel();
}

// Object na naglalaman ng activities for each exercise
const activities = {
  // Exercise 1 activities
  1: {
    // Activity 1 for Exercise 1
    1: function() {
      contentBox.innerHTML = `<h1>Exercise 1 - Activity 1</h1>
        <p>Welcome to JavaScript!</p>`;
      alert("Exercise1 Activity1");
      console.log("First JS program.");
    },
    // Activity 2 for Exercise 1
    2: function() {
      contentBox.innerHTML = `<h1>Exercise 1 - Activity 2</h1>
        <p>This is the second activity for exercise 1.</p>`;
    }
  },
  // Exercise 2 activities
  2: {
    // Activity 1 for Exercise 2: Introduction sa JavaScript output
    1: function() {
      contentBox.innerHTML = `<h1>Exercise 2 - Activity 1: Your First JavaScript Output</h1>
        <p><strong>Objective:</strong> Learn how JavaScript displays output.</p>
        <p><strong>Tasks:</strong> Show an alert and write to the console.</p>`;
      alert("Welcome to JavaScript!");
      console.log("This is my first JS program.");
    },

    // Activity 2 for Exercise 2: Variables at data types
    2: function() {
      contentBox.innerHTML = `<h1>Exercise 2 - Activity 2: Variables and Data Types</h1>
        <p><strong>Objective:</strong> Understand variables and basic data types.</p>`;
      const name = "Andrew"; // string
      const age = 20; // number
      const isStudent = true; // boolean
      console.log('name:', name);
      console.log('age:', age);
      console.log('isStudent:', isStudent);
      const para = document.createElement('p');
      para.textContent = 'My name is ' + name + ', I am ' + age + ' years old.';
      contentBox.appendChild(para);
    },

    // Activity 3 for Exercise 2: Simple calculator gamit ang arithmetic operations
    3: function() {
      contentBox.innerHTML = `<h1>Exercise 2 - Activity 3: Simple Calculator</h1>
        <p><strong>Objective:</strong> Practice arithmetic operations.</p>
        <p><strong>Tasks:</strong></p>
        <ol>
          <li>Declare two numbers.</li>
          <li>Compute and display:
            <ul>
              <li>Sum</li> 
              <li>Difference</li>
              <li>Product</li>
              <li>Quotient</li>
            </ul>
          </li>
          <li>Display results in the console.</li>
        </ol>`;
      function calculate(a, b) {
        console.log('Sum:', a + b);
        console.log('Difference:', a - b);
        console.log('Product:', a * b);
        console.log('Quotient:', a / b);
      }
      const a = 67;
      const b = 4;
      calculate(a, b);
    },

    // Activity 4 for Exercise 2: User input gamit ang prompt
    4: function() {
      contentBox.innerHTML = `<h1>Exercise 2 - Activity 4: User Input using prompt()</h1>
        <p><strong>Objective:</strong> Interact with the user via prompts.</p>`;
      const userName = prompt('Enter your name:');
      const favNum = prompt('Enter your favorite number:');
      alert('Hello ' + userName + '! Your favorite number is ' + favNum + '.');
      console.log('User:', userName, 'Favorite number:', favNum);
    },

    // Activity 5 for Exercise 2: Conditional statements gamit ang if/else
    5: function() {
      contentBox.innerHTML = `<h1>Exercise 2 - Activity 5: Conditional Statements</h1>
        <p><strong>Objective:</strong> Introduce if / else.</p>`;
      const ageInput = parseInt(prompt('Enter your age:'), 10) || 0;
      if (ageInput >= 18) {
        alert('You are eligible.');
        console.log('Eligible: age =', ageInput);
      } else {
        alert('You are not eligible.');
        console.log('Not eligible: age =', ageInput);
      }
    },

    // Activity 6 for Exercise 2: Loops (for and while)
    6: function() {
      contentBox.innerHTML = `<h1>Exercise 2 - Activity 6: Loops (Basic)</h1>
        <p><strong>Objective:</strong> Understand repetition with loops.</p>
        <p>Output:</p>
        <div id="loopOutput" style="background:#f0f0f0;padding:10px;border-radius:4px;min-height:50px;"></div>`;
      const out = document.getElementById('loopOutput');
      out.innerHTML += '<strong>For loop 1 to 10:</strong><br>';
      for (let i = 1; i <= 10; i++) {
        out.innerHTML += i + ' ';
      }
      out.innerHTML += '<br><strong>While loop 10 to 1:</strong><br>';
      let j = 10;
      while (j >= 1) {
        out.innerHTML += j + ' ';
        j--;
      }
      console.log('For loop 1 to 10:');
      for (let i = 1; i <= 10; i++) {
        console.log(i);
      }
      console.log('While loop 10 to 1:');
      let k = 10;
      while (k >= 1) {
        console.log(k);
        k--;
      }
    },

    // Activity 7 for Exercise 2: JavaScript and HTML interaction with event listeners
    7: function() {
      contentBox.innerHTML = `<h1>Exercise 2 - Activity 7: JavaScript and HTML Interaction</h1>
        <p><strong>Objective:</strong> Connect JavaScript with the webpage.</p>
        <button id="btnClickMe" style="padding:10px 16px; font-size:16px;">Click Me</button>`;
      document.getElementById('btnClickMe').addEventListener('click', function() {
        alert('Button Clicked!');
        console.log('Button was clicked');
      });
    },
  },
  // Exercise 3 activities
  3: {
    // Activity 1 for Exercise 3: Baguhin ang background color randomly
    1: function() {
      contentBox.innerHTML = `<h1>Exercise 3 - Activity 1: Change Background Color</h1>
        <p>Click the button to change the background color of the content box.</p>
        <button id="colorBtn" class="btn btn-primary">Change Background Color</button>
        <div id="colorOutput" class="text-muted">
          Current color: <span id="colorValue">#ffffff</span>
        </div>`;
      
      // Ensure the button exists in the DOM before attaching event listener
      const colorBtn = document.getElementById('colorBtn');
      const colorValueSpan = document.getElementById('colorValue');
      if (colorBtn) {
        colorBtn.addEventListener('click', function() {
          const colors = ['#FFB6C1', '#FFD700', '#87CEEB', '#90EE90', '#FFB347', '#DDA0DD', '#F0E68C'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          // change content box background instead of body
          contentBox.style.backgroundColor = randomColor;
          if (colorValueSpan) {
            colorValueSpan.textContent = randomColor;
          }
        });
      }
    },
    
    // Activity 2 for Exercise 3: Dark mode toggle
    2: function() {
      contentBox.innerHTML = `<h1>Exercise 3 - Activity 2: Dark Mode Toggle</h1>
        <p>Toggle between light and dark mode.  The entire content box will change.</p>
        <button id="darkModeBtn" class="btn btn-dark">Dark Mode</button>`;
      let isDarkMode = false;
      const btn = document.getElementById('darkModeBtn');
      btn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
          contentBox.style.backgroundColor = '#333';
          contentBox.style.color = '#fff';
          btn.textContent = 'Light Mode';
        } else {
          contentBox.style.backgroundColor = '';
          contentBox.style.color = '';
          btn.textContent = 'Dark Mode';
        }
      });
    },
    
    // Activity 3 for Exercise 3: Magdagdag ng list items dynamically
    3: function() {
      contentBox.innerHTML = `<h1>Exercise 3 - Activity 3: Add List Items</h1>
        <p>Click the button to add new items to the list.</p>
        <input type="text" id="itemInput" placeholder="Enter item name" class="form-input small">
        <button id="addBtn" class="btn btn-success">Add Item</button>
        <ul id="itemList" class="card-list">
          <li class="card-list-item">Item 1</li>
          <li class="card-list-item">Item 2</li>
        </ul>`;
      let itemCount = 3;
      document.getElementById('addBtn').addEventListener('click', function() {
        const input = document.getElementById('itemInput');
        const itemName = input.value.trim() || 'Item ' + itemCount;
        const li = document.createElement('li');
        li.textContent = itemName;
        li.className = 'card-list-item';
        document.getElementById('itemList').appendChild(li);
        input.value = '';
        itemCount++;
      });
    },
    
    // Activity 4 for Exercise 3: Tanggalin ang paragraphs one by one
    4: function() {
      contentBox.innerHTML = `<h1>Exercise 3 - Activity 4: Remove Paragraph</h1>
        <p>Click the button below to remove paragraphs one by one.</p>
        <button id="removeBtn" class="btn btn-danger">Remove Paragraph</button>
        <div id="paraContainer">
          <p class="card-list-item">Paragraph 1</p>
          <p class="card-list-item">Paragraph 2</p>
          <p class="card-list-item">Paragraph 3</p>
          <p class="card-list-item">Paragraph 4</p>
        </div>`;
      document.getElementById('removeBtn').addEventListener('click', function() {
        const paras = document.querySelectorAll('#paraContainer p');
        if (paras.length > 0) {
          paras[paras.length - 1].remove();
        }
      });
    },
    
    // Activity 5 for Exercise 3: Character counter for input field
    5: function() {
      contentBox.innerHTML = `<h1>Exercise 3 - Activity 5: Character Counter</h1>
        <p>Type in the input field below to see the character count.</p>
        <input type="text" id="charInput" placeholder="Type something..." class="form-input">
        <p class="form-label">Character Count: <span id="charCount">0</span> / 100</p>
        <div id="charDisplay" class="card-list-item">
          Characters: 0
        </div>`;
      document.getElementById('charInput').addEventListener('input', function() {
        const count = this.value.length;
        document.getElementById('charCount').textContent = count;
        document.getElementById('charDisplay').textContent = 'Characters: ' + count;
      });
    },
    
    // Activity 6 for Exercise 3: Addition calculator
    6: function() {
      contentBox.innerHTML = `<h1>Exercise 3 - Activity 6: Addition Calculator</h1>
        <p>Enter two numbers and click Calculate to get the sum.</p>
        <div class="panel-card">
          <input type="number" id="num1" placeholder="Enter first number" class="form-input small">
          <input type="number" id="num2" placeholder="Enter second number" class="form-input small">
          <button id="calcBtn" class="btn btn-primary">Calculate</button>
          <div id="result" class="result-box" style="display: none; font-size: 18px; font-weight: bold;">
            Sum: <span id="sumValue">0</span>
          </div>
        </div>`;
      document.getElementById('calcBtn').addEventListener('click', function() {
        const num1 = parseFloat(document.getElementById('num1').value) || 0;
        const num2 = parseFloat(document.getElementById('num2').value) || 0;
        const sum = num1 + num2;
        document.getElementById('sumValue').textContent = sum;
        document.getElementById('result').style.display = 'block';
      });
    },
    
    // Activity 7 for Exercise 3: Baguhin ang image on button click
    7: function() {
      contentBox.innerHTML = `<h1>Exercise 3 - Activity 7: Change Image</h1>
        <p>Click the button to change the image.</p>
        <img id="dynamicImage" src="file:///C:/Users/admin/OneDrive/Pictures/IMG_20240310_151830.jpg" class="card-list-item" style="max-width: 300px; display: block;">
        <button id="changeImgBtn" class="btn btn-primary">Change Image</button>`;
      const images = [
        "file:///C:/Users/admin/OneDrive/Pictures/IMG_20240310_151830.jpg",
        "file:///C:/Users/admin/OneDrive/Pictures/IMG_20240310_152006.jpg",
        "file:///C:/Users/admin/OneDrive/Pictures/IMG_20240310_152653.jpg"
      ];
      let currentImageIndex = 0;
      document.getElementById('changeImgBtn').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById('dynamicImage').src = images[currentImageIndex];
      });
    },
    
    // Activity 8 for Exercise 3: Mini to-do list
    8: function() {
      contentBox.innerHTML = `<h1>Exercise 3 - Activity 8: Mini To-Do List</h1>
        <p>Create and manage your to-do list.</p>
        <div class="panel-card">
          <input type="text" id="todoInput" placeholder="Enter a task..." class="form-input" style="max-width: 350px; width: calc(100% - 120px);">
          <button id="addTodoBtn" class="btn btn-success">Add</button>
          <ul id="todoList" class="card-list" style="margin-top: 15px; list-style: none; padding: 0;">
            <li class="card-list-item alt" style="display: flex; justify-content: space-between; align-items: center;">
              <span>Sample task</span>
              <button class="deleteTodo btn btn-danger" style="font-size: 12px;">Delete</button>
            </li>
          </ul>
        </div>`;
      document.getElementById('addTodoBtn').addEventListener('click', function() {
        const input = document.getElementById('todoInput');
        const taskText = input.value.trim();
        if (taskText === '') {
          alert('Please enter a task!');
          return;
        }
        const li = document.createElement('li');
        li.style.padding = '10px';
        li.style.background = '#fff3cd';
        li.style.margin = '5px 0';
        li.style.borderRadius = '4px';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        
        const span = document.createElement('span');
        span.textContent = taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteTodo btn btn-danger';
        deleteBtn.style.fontSize = '12px';
        deleteBtn.onclick = function() {
          li.remove();
        };
        
        li.appendChild(span);
        li.appendChild(deleteBtn);
        document.getElementById('todoList').appendChild(li);
        input.value = '';
      });
      
      document.querySelectorAll('.deleteTodo').forEach(btn => {
        btn.addEventListener('click', function() {
          this.parentElement.remove();
        });
      });
    },
  },
  // Exercise 4 activities
  4: {
    // Activity 1 for Exercise 4: Student grade calculator
    1: function() {
      contentBox.innerHTML = `<h1>Exercise 4 - Activity 1: Student Grade Calculator</h1>
        <p><strong>Objective:</strong> Create a Grade Calculator using Event Listeners with Arrow Functions.</p>
        <p><strong>Formula:</strong> Final Grade = Quiz (20%) + Exam (30%) + MCO (50%)</p>
        
        <div class="panel-card" style="max-width: 500px;">
          <div class="form-group">
            <label for="quizCount" class="form-label">Number of Quizzes:</label>
            <input type="number" id="quizCount" placeholder="How many quizzes?" min="0" class="form-input small">
          </div>

          <div id="quizContainer" class="form-group"></div>

          <div class="form-group">
            <label for="examScore" class="form-label">Exam Score:</label>
            <input type="number" id="examScore" placeholder="Enter exam score" min="0" max="100" class="form-input">
          </div>
          
          <div class="form-group">
            <label for="mcoScore" class="form-label">MCO Score:</label>
            <input type="number" id="mcoScore" placeholder="Enter MCO score" min="0" max="100" class="form-input">
          </div>
          
          <div class="inline-actions">
            <button id="resetGradeBtn" class="btn btn-secondary">Reset</button>
          </div>
        </div>
        
        <div id="gradeResult" class="result-box" style="display: none;">
          <h3>Results</h3>
          <p class="form-label"><strong>Quiz Average:</strong> <span id="quizAverageValue" style="font-size: 18px; color: #007bff;">--</span></p>
          <p class="form-label"><strong>Final Grade:</strong> <span id="finalGradeValue" style="font-size: 18px; color: #007bff;">--</span></p>
          <p class="form-label"><strong>Grade Equivalent:</strong> <span id="gradeEquivalent" style="font-size: 18px; color: #28a745; font-weight: bold;">--</span></p>
        </div>`;

      const quizCountInput = document.getElementById('quizCount');
      const quizContainer = document.getElementById('quizContainer');
      const examScoreInput = document.getElementById('examScore');
      const mcoScoreInput = document.getElementById('mcoScore');
      const gradeResult = document.getElementById('gradeResult');
      const quizAverageValue = document.getElementById('quizAverageValue');
      const finalGradeValue = document.getElementById('finalGradeValue');
      const gradeEquivalent = document.getElementById('gradeEquivalent');

      function calculateQuizAverage() {
        const inputs = document.querySelectorAll('.quizScoreInput');
        if (inputs.length === 0) return 0;
        let sum = 0;
        inputs.forEach(inp => {
          const val = parseFloat(inp.value) || 0;
          sum += val;
        });
        return sum / inputs.length;
      }

      function getGradeEquivalent(score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
      }

      function updateGradeResult() {
        const quizAvg = calculateQuizAverage();
        const exam = parseFloat(examScoreInput.value) || 0;
        const mco = parseFloat(mcoScoreInput.value) || 0;
        const hasAnyInput = quizContainer.querySelectorAll('.quizScoreInput').length > 0 || examScoreInput.value !== '' || mcoScoreInput.value !== '';

        if (!hasAnyInput) {
          gradeResult.style.display = 'none';
          quizAverageValue.textContent = '--';
          finalGradeValue.textContent = '--';
          gradeEquivalent.textContent = '--';
          return;
        }

        if (quizAvg < 0 || quizAvg > 100 || exam < 0 || exam > 100 || mco < 0 || mco > 100) {
          gradeResult.style.display = 'block';
          quizAverageValue.textContent = isNaN(quizAvg) || !quizContainer.querySelectorAll('.quizScoreInput').length ? '--' : quizAvg.toFixed(2);
          finalGradeValue.textContent = 'Invalid';
          gradeEquivalent.textContent = 'Check inputs';
          return;
        }

        const finalGrade = (quizAvg * 0.20) + (exam * 0.30) + (mco * 0.50);
        gradeResult.style.display = 'block';
        quizAverageValue.textContent = quizContainer.querySelectorAll('.quizScoreInput').length ? quizAvg.toFixed(2) : '--';
        finalGradeValue.textContent = finalGrade.toFixed(2);
        gradeEquivalent.textContent = getGradeEquivalent(finalGrade);
      }

      function attachQuizInputListeners() {
        document.querySelectorAll('.quizScoreInput').forEach(input => {
          input.addEventListener('input', updateGradeResult);
        });
      }

      function generateQuizInputs(count) {
        quizContainer.innerHTML = '';
        for (let i = 1; i <= count; i++) {
          const div = document.createElement('div');
          div.className = 'form-group';
          div.innerHTML = `<label class="form-label">Quiz ${i} Score :</label>
            <input type="number" class="quizScoreInput form-input" min="0" max="100">`;
          quizContainer.appendChild(div);
        }
        attachQuizInputListeners();
        updateGradeResult();
      }

      quizCountInput.addEventListener('input', () => {
        const count = Math.max(0, parseInt(quizCountInput.value, 10) || 0);
        generateQuizInputs(count);
      });

      examScoreInput.addEventListener('input', updateGradeResult);
      mcoScoreInput.addEventListener('input', updateGradeResult);

      document.getElementById('resetGradeBtn').addEventListener('click', () => {
        quizCountInput.value = '';
        quizContainer.innerHTML = '';
        examScoreInput.value = '';
        mcoScoreInput.value = '';
        gradeResult.style.display = 'none';
        quizAverageValue.textContent = '--';
        finalGradeValue.textContent = '--';
        gradeEquivalent.textContent = '--';
        console.log('Form reset.');
      });
    },
    // Activity 2 for Exercise 4: Electricity bill calculator
    2: function() {
      contentBox.innerHTML = `<h1>Exercise 4 - Activity 2: Electricity Bill Calculator</h1>
        <p>Enter the previous and current meter readings and the electricity rate to estimate your bill.</p>
        <form id="electricityBillForm" class="panel-card" style="max-width: 500px;">
          <div class="form-group">
            <label for="previousReading" class="form-label">Previous meter reading (kWh):</label>
            <input id="previousReading" type="number" min="0" step="any" required class="form-input">
          </div>
          <div class="form-group">
            <label for="currentReading" class="form-label">Current meter reading (kWh):</label>
            <input id="currentReading" type="number" min="0" step="any" required class="form-input">
          </div>
          <div class="form-group">
            <label for="electricityRate" class="form-label">Electricity rate per kWh (pesos):</label>
            <input id="electricityRate" type="number" min="0" step="any" required class="form-input">
          </div>
          <button type="submit" class="btn btn-primary">Calculate Bill</button>
        </form>
        <div id="electricityBillResult" class="result-box" style="display: none;" aria-live="polite"></div>`;

      const form = document.getElementById('electricityBillForm');
      const previousInput = document.getElementById('previousReading');
      const currentInput = document.getElementById('currentReading');
      const rateInput = document.getElementById('electricityRate');
      const result = document.getElementById('electricityBillResult');

      form.addEventListener('submit', event => {
        event.preventDefault();

        const inputs = [previousInput, currentInput, rateInput];
        if (inputs.some(input => input.value === '' || !Number.isFinite(input.valueAsNumber) || input.valueAsNumber < 0)) {
          result.innerHTML = '<p role="alert">Enter valid non-negative numbers for all fields.</p>';
          result.style.display = 'block';
          return;
        }

        const previousReading = previousInput.valueAsNumber;
        const currentReading = currentInput.valueAsNumber;
        const ratePerKwh = rateInput.valueAsNumber;
        if (currentReading < previousReading) {
          result.innerHTML = '<p role="alert">Current meter reading cannot be lower than previous meter reading.</p>';
          result.style.display = 'block';
          return;
        }

        const consumption = currentReading - previousReading;
        const totalBill = consumption * ratePerKwh;
        if (!Number.isFinite(totalBill)) {
          result.innerHTML = '<p role="alert">The calculated bill is too large to display.</p>';
          result.style.display = 'block';
          return;
        }

        const formatNumber = value => value.toLocaleString('en-US', { maximumFractionDigits: 12 });
        const formatPesos = value => `₱${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        result.innerHTML = `<h3>Electricity Bill Estimate</h3>
          <p>Previous meter reading: ${formatNumber(previousReading)} kWh</p>
          <p>Current meter reading: ${formatNumber(currentReading)} kWh</p>
          <p>Electricity consumption: ${formatNumber(consumption)} kWh</p>
          <p>Rate per kWh: ${formatPesos(ratePerKwh)}</p>
          <p><strong>Estimated total bill: ${formatPesos(totalBill)}</strong></p>`;
        result.style.display = 'block';
      });
    }
  }
};

// Function para kunin ang activity function base sa exercise at activity IDs
function getActivityContent(exId, actId) {
  // Suriin kung ang exercise at activity ay umiiral sa activities object
  if (activities[exId] && activities[exId][actId]) {
    // Ibalik ang activity function
    return activities[exId][actId];
  }
  // Ibalik null kung activity hindi nahanap
  return null;
}

// Function para pumili at ipakita ang activity
function selectActivity(actId) {
  // Kung walang exercise na napili, bumalik agad
  if (currentExercise === null) return;

  // I-highlight ang napiling activity item sa list
  document.querySelectorAll('.activity-item').forEach(item => {
    if (item.getAttribute('data-activity') === String(actId)) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });

  // Kunin ang activity function
  const activityFunc = getActivityContent(currentExercise, actId);
  if (activityFunc) {
    // Tawagin ang function para ipakita at patakbuhin ang activity
    activityFunc();
  } else {
    // Ipakita ang default message kung activity hindi nahanap
    contentBox.innerHTML = '<p>Activity not found.</p>';
  }
  // Magdagdag ng exercise toggle functionality
  addExerciseToggle(actId);
}

// Function para magdagdag ng output panel para activity (removed run button)
function addExerciseToggle(id) {
  // Tanggalin ang anumang existing exercise panel at observer
  const old = contentBox.querySelector('.exercise-panel');
  if (old) old.remove();
  if (exerciseOutputObserver) {
    exerciseOutputObserver.disconnect();
    exerciseOutputObserver = null;
  }

  // Gumawa ng bagong panel div
  const panel = document.createElement('div');
  panel.className = 'exercise-panel';
  panel.style.display = 'none';

  // Gumawa ng output div lamang
  const output = document.createElement('div');
  output.className = 'exercise-output';
  output.id = 'exerciseOutput';

  panel.appendChild(output);
  contentBox.appendChild(panel);

  exerciseOutputObserver = new MutationObserver(() => {
    const hasContent = output.textContent.trim().length > 0 || output.children.length > 0;
    panel.style.display = hasContent ? 'block' : 'none';
  });
  exerciseOutputObserver.observe(output, { childList: true, subtree: true, characterData: true });
}



function hideExercisePanel() {
  const panel = contentBox.querySelector('.exercise-panel');
  if (panel) panel.remove();
  if (exerciseOutputObserver) {
    exerciseOutputObserver.disconnect();
    exerciseOutputObserver = null;
  }
}

function resetExerciseMenu() {
  currentExercise = null;
  document.querySelectorAll('.exercise-link').forEach(link => link.classList.remove('active'));
  document.querySelectorAll('.activity-sublist').forEach(list => list.classList.remove('show'));
  document.querySelectorAll('.activity-item').forEach(item => item.classList.remove('selected'));
}

function buildExerciseMenu() {
  if (!exerciseMenu) return;
  exerciseMenu.innerHTML = '';

  [2, 3, 4].forEach(exerciseId => {
    if (!activities[exerciseId]) return;

    const exerciseItem = document.createElement('li');
    const exerciseButton = document.createElement('button');
    exerciseButton.type = 'button';
    exerciseButton.className = 'exercise-link';
    exerciseButton.textContent = `Exercise ${exerciseId}`;
    exerciseButton.dataset.exercise = exerciseId;
    exerciseButton.addEventListener('click', () => toggleExerciseMenu(exerciseId));

    const sublist = document.createElement('ul');
    sublist.className = 'activity-sublist';

    Object.keys(activities[exerciseId])
      .map(Number)
      .sort((a, b) => a - b)
      .forEach(activityId => {
        const activityItem = document.createElement('li');
        const activityButton = document.createElement('button');
        activityButton.type = 'button';
        activityButton.className = 'activity-item';
        activityButton.dataset.exercise = exerciseId;
        activityButton.dataset.activity = activityId;
        activityButton.textContent = `Activity ${activityId}`;
        activityButton.addEventListener('click', () => displayActivity(exerciseId, activityId));
        activityItem.appendChild(activityButton);
        sublist.appendChild(activityItem);
      });

    exerciseItem.appendChild(exerciseButton);
    exerciseItem.appendChild(sublist);
    exerciseMenu.appendChild(exerciseItem);
  });
}

function toggleExerciseMenu(exerciseId) {
  const clickedLink = document.querySelector(`.exercise-link[data-exercise="${exerciseId}"]`);
  const clickedSublist = clickedLink?.nextElementSibling;
  const isOpen = clickedSublist?.classList.contains('show');

  if (isOpen) {
    // Collapse if already open
    currentExercise = null;
    clickedLink?.classList.remove('active');
    clickedSublist?.classList.remove('show');
    showWelcome();
    return;
  }

  currentExercise = exerciseId;
  document.querySelectorAll('.exercise-link').forEach(link => {
    link.classList.toggle('active', link.dataset.exercise === String(exerciseId));
  });

  document.querySelectorAll('.activity-sublist').forEach(sublist => {
    const prevButton = sublist.previousElementSibling;
    const parentExercise = prevButton?.dataset?.exercise;
    sublist.classList.toggle('show', parentExercise === String(exerciseId));
  });

  document.querySelectorAll('.activity-item').forEach(item => item.classList.remove('selected'));
  contentBox.innerHTML = `<h2>Exercise ${exerciseId}</h2><p>Select an activity below.</p>`;
}

// Function para ipakita ang napiling activity
function displayActivity(exerciseId, activityId) {
  // reset content box color to its default before changing activity
  contentBox.style.backgroundColor = '';

  // Kung walang exercise o activity, ipakita ang welcome message
  if (!exerciseId || !activityId) {
    showWelcome('Select an exercise and activity.');
    return;
  }

  // Itakda ang current exercise
  currentExercise = exerciseId;
  // Pumili ng activity
  selectActivity(activityId);
}

// Initialize sa page load
document.addEventListener('DOMContentLoaded', () => {
  // Itakda ang initial content
  showWelcome();
  buildExerciseMenu();

  // I-attach ang click listeners sa navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1); // remove '#'
      showSection(targetId);
      closeSidebar();
      // I-update ang address bar hash
      window.location.hash = targetId;
    });
  });

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  const showActivityButton = document.getElementById('showActivity');
  if (showActivityButton) {
    showActivityButton.addEventListener('click', () => {
      if (!sidebar?.classList.contains('open')) {
        toggleSidebar();
      }
    });
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  // Kung page loaded with hash, ipakita ang section
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    if (document.getElementById(id)) {

      showSection(id);
    }
  }
});
