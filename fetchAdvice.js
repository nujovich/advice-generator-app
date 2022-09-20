const OPTIONS = {
    method: 'GET'
};

export async function fetchAdvice() {
    
    try {
        const response = await fetch('https://api.adviceslip.com/advice', OPTIONS);
        return await response.json();
    } catch (err) {
        return console.error(err);
    }
}