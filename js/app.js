const BASE_API = 'https://api.example.com';

const someFunction = () => {
    // Replace localhost URLs
    fetch(`${BASE_API}/endpoint`).then(response => response.json());
};