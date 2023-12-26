// const displayCountdownAndMessage = (count, message, elementId) => {
//   if (count > 0) {
//     document.getElementById(elementId).innerHTML = count;
//     setTimeout(function () {
//       displayCountdownAndMessage(count - 1, message, elementId);
//     }, 1000);
//   } else {
//     document.getElementById(elementId).innerHTML = message;
//   }
// }

// displayCountdownAndMessage(10, "Happy Independence Day", "container");


const countdown = (start, callback) => {
    const startCountdown = (count) => {
      if (count >= 1) {
        let countDown = document.getElementById('container').textContent = count;
        setTimeout(() => startCountdown(count - 1), 1000);
      } else {
        callback();
      }
    }
  
    startCountdown(start);
  }
  
  countdown(10, () => {
    document.getElementById('container').textContent = 'Happy Independence Day';
  });
  
  // let changeColor = document.getElementById('container').style.border = "1px solid black"