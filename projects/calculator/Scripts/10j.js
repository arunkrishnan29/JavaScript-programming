      // Get saved value from localStorage.
      // If nothing exists, use an empty string ''.

      let calculation = localStorage.getItem('cal') || '';

      console.log(calculation);
      displaycalculation(calculation);

      function updateCalculation(value) {

        // Add the clicked value to the calculation string
        calculation =calculation+ value;

        // Display in console
        console.log(calculation);
        displaycalculation(calculation);

        // Save updated calculation into localStorage
        localStorage.setItem('cal', calculation);
      }
      function displaycalculation(calculation){
                document.querySelector('.result').innerHTML=` ${calculation}`;
      }
        function displayreset(){
        document.querySelector('.result').innerHTML=` ${0}  `;
        }

