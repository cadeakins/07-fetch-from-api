// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  console.log('Getting a joke...');


//Fetch joke from official joke api
fetch('https://official-joke-api.appspot.com/jokes/programming/random')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
      console.log(data); // Log the data to the console
      setup.textContent = data[0].setup; // Set the setup text
      punchline.textContent = data[0].punchline; // Set the punchline text
    });
});