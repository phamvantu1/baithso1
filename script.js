// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission
//     var studentID = document.getElementById("studentID").value;
//     var fullName = document.getElementById("fullName").value;
//     // Here you can perform further actions like sending data to a server or validating inputs
//     console.log("Mã sinh viên:", studentID);
//     console.log("Họ và tên:", fullName);
//     // Clear input fields
//     document.getElementById("studentID").value = "";
//     document.getElementById("fullName").value = "";
//  });
//   //
  //
  const questions = [
    {
        question: "HTML là viết tắt của Hypertext Markup Language.",
        answer: true
    },
    {
        question: "CSS là ngôn ngữ lập trình.",
        answer: false
    },
    {
        question: "JavaScript có thể được sử dụng để tạo các trang web tĩnh.",
        answer: false
    }
];

let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const submitBtn = document.getElementById('submitBtn');

function loadQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = `
        <label>
            <input type="radio" name="option" value="true"> Đúng
        </label>
        <label>
            <input type="radio" name="option" value="false"> Sai
        </label>
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        resultElement.textContent = "Vui lòng chọn câu trả lời!";
        return;
    }

    const answer = selectedOption.value === 'true';
    if (answer === questions[currentQuestion].answer) {
        resultElement.textContent = "Câu trả lời đúng!";
    } else {
        resultElement.textContent = "Câu trả lời sai!";
    }
}

loadQuestion();

submitBtn.addEventListener('click', () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "";
        optionsElement.textContent = "";
        submitBtn.style.display = "none";
    }
});

//