// Get Quote From API
async function getQuote() {
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(apUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('whoos, no quote', error);
    }
}

// On Load
getQuote();
console.log('hello')