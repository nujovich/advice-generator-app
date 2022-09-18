const OPTIONS = {
    method: 'GET'
};

export function fetchAdvice () {
    
    return fetch('https://api.adviceslip.com/advice', OPTIONS)
	.then(response => response.json())
	.catch(err => console.error(err));
}