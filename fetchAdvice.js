export function fetchAdvice () {
    const options = {
        method: 'GET',
        headers: {

        }
    };
    fetch('https://api.adviceslip.com/advice', options)
	.then(response => response.json())
	.then(response => {
        return response;
    })
	.catch(err => console.error(err));
}