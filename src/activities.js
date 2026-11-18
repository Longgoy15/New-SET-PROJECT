// Ported activities from original script.js
export const activities = {
  2: {
    1: (container) => {
      container.innerHTML = `<h1>Exercise 2 - Activity 1: Your First JavaScript Output</h1>
        <p><strong>Objective:</strong> Learn how JavaScript displays output.</p>
        <p><strong>Tasks:</strong> Show an alert and write to the console.</p>`;
      alert('Welcome to JavaScript!');
      console.log('This is my first JS program.');
    },
    2: (container) => {
      container.innerHTML = `<h1>Exercise 2 - Activity 2: Variables and Data Types</h1>
        <p><strong>Objective:</strong> Understand variables and basic data types.</p>`;
      const name = 'Andrew';
      const age = 20;
      const para = document.createElement('p');
      para.textContent = 'My name is ' + name + ', I am ' + age + ' years old.';
      container.appendChild(para);
    },
    3: (container) => {
      container.innerHTML = `<h1>Exercise 2 - Activity 3: Simple Calculator</h1>
        <p><strong>Objective:</strong> Practice arithmetic operations.</p>`;
      function calculate(a, b) {
        console.log('Sum:', a + b);
        console.log('Difference:', a - b);
        console.log('Product:', a * b);
        console.log('Quotient:', a / b);
      }
      calculate(67, 4);
    },
    4: (container) => {
      container.innerHTML = `<h1>Exercise 2 - Activity 4: User Input using prompt()</h1>`;
      const userName = prompt('Enter your name:');
      const favNum = prompt('Enter your favorite number:');
      alert('Hello ' + userName + '! Your favorite number is ' + favNum + '.');
    },
    5: (container) => {
      container.innerHTML = `<h1>Exercise 2 - Activity 5: Conditional Statements</h1>`;
      const ageInput = parseInt(prompt('Enter your age:'), 10) || 0;
      if (ageInput >= 18) alert('You are eligible.'); else alert('You are not eligible.');
    },
    6: (container) => {
      container.innerHTML = `<h1>Exercise 2 - Activity 6: Loops (Basic)</h1>
        <div id="loopOutput" style="background:#f0f0f0;padding:10px;border-radius:4px;min-height:50px;"></div>`;
      const out = container.querySelector('#loopOutput');
      out.innerHTML += '<strong>For loop 1 to 10:</strong><br>';
      for (let i = 1; i <= 10; i++) out.innerHTML += i + ' ';
      out.innerHTML += '<br><strong>While loop 10 to 1:</strong><br>';
      let j = 10; while (j >= 1) { out.innerHTML += j + ' '; j--; }
    },
    7: (container) => {
      container.innerHTML = `<h1>Exercise 2 - Activity 7: JavaScript and HTML Interaction</h1>
        <button id="btnClickMe" style="padding:10px 16px; font-size:16px;">Click Me</button>`;
      container.querySelector('#btnClickMe').addEventListener('click', () => alert('Button Clicked!'));
    }
  },
  3: {
    1: (container) => {
      container.innerHTML = `<h1>Exercise 3 - Activity 1: Change Background Color</h1>
        <button id="colorBtn" class="btn btn-primary">Change Background Color</button>
        <div id="colorOutput">Current color: <span id="colorValue">#ffffff</span></div>`;
      const colorBtn = container.querySelector('#colorBtn');
      const colorValueSpan = container.querySelector('#colorValue');
      colorBtn.addEventListener('click', () => {
        const colors = ['#FFB6C1', '#FFD700', '#87CEEB', '#90EE90', '#FFB347', '#DDA0DD', '#F0E68C'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        container.style.backgroundColor = randomColor;
        if (colorValueSpan) colorValueSpan.textContent = randomColor;
      });
    },
    2: (container) => {
      container.innerHTML = `<h1>Exercise 3 - Activity 2: Dark Mode Toggle</h1>
        <button id="darkModeBtn" class="btn btn-dark">Dark Mode</button>`;
      let isDarkMode = false;
      const btn = container.querySelector('#darkModeBtn');
      btn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) { container.style.backgroundColor = '#333'; container.style.color = '#fff'; btn.textContent = 'Light Mode'; }
        else { container.style.backgroundColor = ''; container.style.color = ''; btn.textContent = 'Dark Mode'; }
      });
    },
    3: (container) => {
      container.innerHTML = `<h1>Exercise 3 - Activity 3: Add List Items</h1>
        <input type="text" id="itemInput" placeholder="Enter item name">
        <button id="addBtn">Add Item</button>
        <ul id="itemList"><li>Item 1</li><li>Item 2</li></ul>`;
      let itemCount = 3;
      container.querySelector('#addBtn').addEventListener('click', () => {
        const input = container.querySelector('#itemInput');
        const itemName = input.value.trim() || 'Item ' + itemCount;
        const li = document.createElement('li'); li.textContent = itemName;
        container.querySelector('#itemList').appendChild(li);
        input.value = '';
        itemCount++;
      });
    },
    4: (container) => {
      container.innerHTML = `<h1>Exercise 3 - Activity 4: Remove Paragraph</h1>
        <button id="removeBtn">Remove Paragraph</button>
        <div id="paraContainer"><p>Paragraph 1</p><p>Paragraph 2</p><p>Paragraph 3</p></div>`;
      container.querySelector('#removeBtn').addEventListener('click', () => {
        const paras = container.querySelectorAll('#paraContainer p'); if (paras.length > 0) paras[paras.length-1].remove();
      });
    },
    5: (container) => {
      container.innerHTML = `<h1>Exercise 3 - Activity 5: Character Counter</h1>
        <input id="charInput" placeholder="Type...">
        <p>Character Count: <span id="charCount">0</span></p>`;
      container.querySelector('#charInput').addEventListener('input', function() {
        container.querySelector('#charCount').textContent = this.value.length;
      });
    },
    6: (container) => {
      container.innerHTML = `<h1>Exercise 3 - Activity 6: Addition Calculator</h1>
        <input id="num1" type="number"><input id="num2" type="number"><button id="calcBtn">Calculate</button>
        <div id="result" style="display:none">Sum: <span id="sumValue">0</span></div>`;
      container.querySelector('#calcBtn').addEventListener('click', () => {
        const num1 = parseFloat(container.querySelector('#num1').value) || 0;
        const num2 = parseFloat(container.querySelector('#num2').value) || 0;
        container.querySelector('#sumValue').textContent = num1 + num2;
        container.querySelector('#result').style.display = 'block';
      });
    },
    7: (container) => {
      container.innerHTML = `<h1>Exercise 3 - Activity 7: Change Image</h1>
        <img id="dynamicImage" src="" style="max-width:300px;display:block"><button id="changeImgBtn">Change Image</button>`;
      const images = [];
      let idx = 0;
      container.querySelector('#changeImgBtn').addEventListener('click', () => {
        if (images.length === 0) return alert('No images configured');
        idx = (idx + 1) % images.length; container.querySelector('#dynamicImage').src = images[idx];
      });
    },
    8: (container) => {
      container.innerHTML = `<h1>Exercise 3 - Activity 8: Mini To-Do List</h1>
        <input id="todoInput"><button id="addTodoBtn">Add</button>
        <ul id="todoList"><li>Sample task <button class="deleteTodo">Delete</button></li></ul>`;
      container.querySelector('#addTodoBtn').addEventListener('click', () => {
        const input = container.querySelector('#todoInput'); const task = input.value.trim(); if (!task) return alert('Please enter a task!');
        const li = document.createElement('li'); li.style.display = 'flex'; li.style.justifyContent = 'space-between';
        const span = document.createElement('span'); span.textContent = task;
        const del = document.createElement('button'); del.textContent = 'Delete'; del.className = 'deleteTodo'; del.onclick = () => li.remove();
        li.appendChild(span); li.appendChild(del); container.querySelector('#todoList').appendChild(li); input.value = '';
      });
      container.querySelectorAll('.deleteTodo').forEach(b => b.addEventListener('click', function(){ this.parentElement.remove(); }));
    }
  },
  4: {
    1: (container) => {
      container.innerHTML = `<h1>Exercise 4 - Activity 1: Student Grade Calculator</h1>
        <div class="panel-card">
          <div class="form-group"><label>Number of Quizzes:</label><input id="quizCount" type="number" min="0"></div>
          <div id="quizContainer"></div>
          <div class="form-group"><label>Exam Score:</label><input id="examScore" type="number" min="0" max="100"></div>
          <div class="form-group"><label>MCO Score:</label><input id="mcoScore" type="number" min="0" max="100"></div>
          <div><button id="resetGradeBtn">Reset</button></div>
        </div>
        <div id="gradeResult" class="result-box" style="display:none">
          <p>Quiz Average: <span id="quizAverageValue">--</span></p>
          <p>Final Grade: <span id="finalGradeValue">--</span></p>
          <p>Grade Equivalent: <span id="gradeEquivalent">--</span></p>
        </div>`;

      const quizCountInput = container.querySelector('#quizCount');
      const quizContainer = container.querySelector('#quizContainer');
      const examScoreInput = container.querySelector('#examScore');
      const mcoScoreInput = container.querySelector('#mcoScore');
      const gradeResult = container.querySelector('#gradeResult');
      const quizAverageValue = container.querySelector('#quizAverageValue');
      const finalGradeValue = container.querySelector('#finalGradeValue');
      const gradeEquivalent = container.querySelector('#gradeEquivalent');

      function calculateQuizAverage() {
        const inputs = quizContainer.querySelectorAll('.quizScoreInput'); if (inputs.length === 0) return 0;
        let sum = 0; inputs.forEach(inp => sum += parseFloat(inp.value) || 0); return sum / inputs.length;
      }
      function getGradeEquivalent(score) {
        if (score >= 90) return 'A'; if (score >= 80) return 'B'; if (score >= 70) return 'C'; if (score >= 60) return 'D'; return 'F';
      }
      function updateGradeResult() {
        const quizAvg = calculateQuizAverage(); const exam = parseFloat(examScoreInput.value) || 0; const mco = parseFloat(mcoScoreInput.value) || 0;
        const hasAnyInput = quizContainer.querySelectorAll('.quizScoreInput').length > 0 || examScoreInput.value !== '' || mcoScoreInput.value !== '';
        if (!hasAnyInput) { gradeResult.style.display = 'none'; quizAverageValue.textContent = '--'; finalGradeValue.textContent = '--'; gradeEquivalent.textContent = '--'; return; }
        if (quizAvg < 0 || quizAvg > 100 || exam < 0 || exam > 100 || mco < 0 || mco > 100) { gradeResult.style.display = 'block'; finalGradeValue.textContent = 'Invalid'; gradeEquivalent.textContent = 'Check inputs'; return; }
        const finalGrade = (quizAvg * 0.20) + (exam * 0.30) + (mco * 0.50);
        gradeResult.style.display = 'block'; quizAverageValue.textContent = quizContainer.querySelectorAll('.quizScoreInput').length ? quizAvg.toFixed(2) : '--'; finalGradeValue.textContent = finalGrade.toFixed(2); gradeEquivalent.textContent = getGradeEquivalent(finalGrade);
      }
      function generateQuizInputs(count) { quizContainer.innerHTML = ''; for (let i=1;i<=count;i++){ const div = document.createElement('div'); div.className='form-group'; div.innerHTML=`<label>Quiz ${i} Score :</label><input type="number" class="quizScoreInput" min="0" max="100">`; quizContainer.appendChild(div);} quizContainer.querySelectorAll('.quizScoreInput').forEach(inp=>inp.addEventListener('input', updateGradeResult)); updateGradeResult(); }

      quizCountInput.addEventListener('input', () => { const count = Math.max(0, parseInt(quizCountInput.value,10) || 0); generateQuizInputs(count); });
      examScoreInput.addEventListener('input', updateGradeResult); mcoScoreInput.addEventListener('input', updateGradeResult);
      container.querySelector('#resetGradeBtn').addEventListener('click', () => { quizCountInput.value = ''; quizContainer.innerHTML = ''; examScoreInput.value = ''; mcoScoreInput.value = ''; gradeResult.style.display = 'none'; quizAverageValue.textContent='--'; finalGradeValue.textContent='--'; gradeEquivalent.textContent='--'; });
    }
  }
}
