const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': 'c4eed1807emshad2dc0a28ca2957p1dc091jsn5e93a5410d21',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

const joke = document.querySelector("#joke");
const btn = document.querySelector('#jokeBtn');

btn.addEventListener('click',getJoke);

function getJoke(){
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => response.json())
	.then(response =>joke.innerHTML=response.value )
	.catch(err => console.error(err));
}



