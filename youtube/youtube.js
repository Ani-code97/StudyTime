let cls8 = document.querySelector('#class8');
let cls9 = document.querySelector('#class9');
let cls10 = document.querySelector('#class10');
let cls11 = document.querySelector('#class11');
let cls12 = document.querySelector('#class12');

document.getElementById('cls8').addEventListener('click', () => {
	cls8.style.display = "block";
	cls9.style.display = "none";
	cls10.style.display = "none";
	cls11.style.display = "none";
	cls12.style.display = "none";
});
document.getElementById('cls9').addEventListener('click', () => {
	cls8.style.display = "none";
	cls9.style.display = "block";
	cls10.style.display = "none";
	cls11.style.display = "none";
	cls12.style.display = "none";
});
document.getElementById('cls10').addEventListener('click', () => {
	cls8.style.display = "none";
	cls9.style.display = "none";
	cls10.style.display = "block";
	cls11.style.display = "none";
	cls12.style.display = "none";
});
document.getElementById('cls11').addEventListener('click', () => {
	cls8.style.display = "none";
	cls9.style.display = "none";
	cls10.style.display = "none";
	cls11.style.display = "block";
	cls12.style.display = "none";
});
document.getElementById('cls12').addEventListener('click', () => {
	cls8.style.display = "none";
	cls9.style.display = "none";
	cls10.style.display = "none";
	cls11.style.display = "none";
	cls12.style.display = "block";
});
