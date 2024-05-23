let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let currentString = '';

buttonsArray.forEach(btn => {
   btn.addEventListener('click', function(event) {
     let buttonValue = event.target.innerHTML;

     if (buttonValue === 'DEL') {
       currentString = currentString.slice(0, -1);
     } else if (buttonValue === 'AC') {
       currentString = '';
     } else if (buttonValue === '=') {
       try {
         currentString = eval(currentString).toString();
       } catch (e) {
         currentString = 'Error';
       }
     } else {
       currentString += buttonValue;
     }
     display.value = currentString;
   });
});
