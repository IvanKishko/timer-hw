//* TASK 1
function hourTimer() {
  let timeRemaining = 31 * 60; // В завданны маэ бути 50 або 60 але я поставив 31 щоб швидше показали що працює

  const timer = document.getElementById("hourTimer");

  const timerInterval = setInterval(() => {
    timeRemaining -= 1;

    if (timeRemaining === 30 * 60) {
      alert("Залишилось 30 хвилин");
    }
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timer.textContent = `${minutes} хвилин ${seconds} секунд залишилось`;
    console.log(`${minutes} хвилин ${seconds} секунд залишилось`);
  }, 1000);
}

hourTimer();

//* TASK 2

function millisecondTimer() {
  let timeRemaining = 30 * 1000;

  const timerElement = document.getElementById("millisecondTimer");

  const timerInterval = setInterval(() => {
    timeRemaining -= 1;

    if (timeRemaining === 10 * 1000) {
      alert("Час закінчився");
    }

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      document.querySelector("#startButton").disabled = false;
    } else {
      const seconds = Math.floor(timeRemaining / 1000);
      const milliseconds = timeRemaining % 1000;
      timerElement.textContent = `${seconds}.${milliseconds} секунд залишилось`;
      console.log(`${seconds}.${milliseconds} секунд залишилось`);
    }
  }, 1);
}

document.querySelector("#startButton").disabled = true;
millisecondTimer();
