document.getElementById('raceForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const registeredEarly = document.getElementById('registeredEarly').value === 'true'; 

  if (isNaN(age) || age <= 0) {
    alert("Please enter a valid age.");
    return;
  }

  let raceNumber = generateRaceNumber(age, registeredEarly);

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<h2>Your Race Number: ${raceNumber}</h2>`;
});

function generateRaceNumber(age, registeredEarly) {
  let raceNumber;

  if (registeredEarly && age >= 18) {
    raceNumber = 1000 + Math.floor(Math.random() * 1000); 
  }
  else if (age < 18) {
    raceNumber = 2000 + Math.floor(Math.random() * 1000); 
  }
  else {
    raceNumber = 3000 + Math.floor(Math.random() * 1000); 
  }

  return raceNumber;
}
