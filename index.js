//legaturi intre elementele JS si html

const valoareScor = document.querySelector('#valoareScor')
const fereastraJoc = document.querySelector('#fereastraJoc')
const literaChallenge = document.querySelector('#literaChallenge')
const casetaIntrare = document.querySelector('#casetaIntrare')
const introdus = document.querySelector('#introdus')

//definire varaibile necesare
let alfabet=[]
let literaIntrare=''
let scorCurent = 0

//functie pentru schimbarea litere curente
function schimbareLitera(){
	alfabet = ['A','B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	literaChallenge.innerHTML =  alfabet[Math.floor(Math.random()*25)]
	casetaIntrare.value = null //de fiecare data cand se schimba litera, campul pentru introducere text se goleste
}
//functie citire de la tastatura
function citireTastatura(){
	casetaIntrare.addEventListener('input', () =>{
		literaIntrare = casetaIntrare.value.toUpperCase()
		console.log(literaIntrare)
		introdus.innerHTML = literaIntrare
		if(literaIntrare == literaChallenge.innerHTML)
		{
			console.log('bravo')
			scorCurent+=10
			valoareScor.innerHTML = scorCurent
			schimbareLitera()
		}
		else
			console.log('Mai incearca!')
	})
}

citireTastatura()