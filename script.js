function checkAnswer() {
    const answer = document.getElementById("userAnswer").value;
    const feedback = document.getElementById("feedback");
    
    if (parseInt(answer) === 22) {
        feedback.innerHTML = "✅ Hebat! Jawabanmu benar.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Coba lagi ya, kamu pasti bisa!";
        feedback.style.color = "red";
    }
}
