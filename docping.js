const pingURL = 'https://docuseal-anyt.onrender.com/';

const result = document.getElementById("ping")

// Function to ping the URL
const pingService = () => {
  console.log(`Pinging ${pingURL} at ${new Date().toISOString()}`);
  result.innerText = "Pinging " + pingURL + " at " + new Date().toISOString() + "...";
  fetch(pingURL)
    .then(response => {
      if (response.ok) {
        console.log(`Ping successful at ${new Date().toISOString()}`);
        result.innerText = "Ping successful at " + new Date().toISOString() + "!";
      } else {
        console.log(`Ping failed with status: ${response.status}`);
        result.innerText = "Ping failed with status: " + response.status + "!";
      }
    })
    .catch(error => {
      console.error(`Ping failed with error: ${error.message}`);
      result.innerText = "Ping failed with error: " + error.message + "!";
    });
};

// Set the interval to 10 minutes (600000 milliseconds)
setInterval(pingService, 600000);

// Optionally, ping immediately when the script starts
pingService();

