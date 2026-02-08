const BASE_API = 'https://api.example.com';

// Updated API endpoints
const API_ENDPOINT_1 = `${BASE_API}/endpoint1`;
const API_ENDPOINT_2 = `${BASE_API}/endpoint2`;

// Sample usage
fetch(API_ENDPOINT_1)
  .then(response => response.json())
  .then(data => console.log(data));
  
// Other code remains unchanged...