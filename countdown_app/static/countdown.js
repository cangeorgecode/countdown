function startCountdown() {
    const hoursInput = parseInt(document.getElementById("hours").value);
    const minutesInput = parseInt(document.getElementById("minutes").value);
    const secondsInput = parseInt(document.getElementById("seconds").value);
  
    if (
      isNaN(hoursInput) ||
      isNaN(minutesInput) ||
      isNaN(secondsInput) ||
      hoursInput < 0 ||
      minutesInput < 0 ||
      secondsInput < 0
    ) {
      alert(
        "Invalid input. Please enter positive numbers for hours, minutes, and seconds."
      );
      return;
    }
  
    const totalDuration = hoursInput * 3600 + minutesInput * 60 + secondsInput;
    updateCountdown(totalDuration);
  }
  
  function updateCountdown(duration) {
    const countdownElement = document.getElementById("countdown");
  
    function displayTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    }
  
    const targetTime = Date.now() + duration * 1000; // Convert seconds to milliseconds
    const interval = 1000; // Update every second
  
    const countdownInterval = setInterval(() => {
      const remainingTime = Math.max(0, targetTime - Date.now());
      const seconds = Math.floor(remainingTime / 1000);
  
      if (seconds === 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Countdown complete!";
      } else {
        countdownElement.textContent = displayTime(seconds);
      }
    }, interval);
  }
  