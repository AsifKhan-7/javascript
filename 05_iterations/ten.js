// Error


let error = new Error("Something went wrong"); // Creates an Error object's instance
console.log(error.message); 

// name, message, stack are the common properties of Error constructor




// async function fetchUserData(userId) {
//   try {
//     // API call to fetch user data
//     const response = await fetch(`https://api.example.com/users/${userId}`);
    
//     // Check if the response status is not OK
//     if (!response.ok) {
//       // Throw an error if the response status is not in the 200-299 range
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     // Parse the JSON response
//     const data = await response.json();
    
//     // Use the fetched data (e.g., update UI)
//     console.log('User data:', data);
    
//   } catch (error) {
//     // Handle the error (e.g., display error message to user)
//     console.error('Failed to fetch user data:', error.message);
    
//     // Optionally, display an error message to the user
//     document.getElementById('error-message').textContent = 'Sorry, we could not fetch user data at this time. Please try again later.';
//   }
// }

// // Usage
// fetchUserData(123);

// A real life example of error handling