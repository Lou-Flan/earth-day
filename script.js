let container = document.querySelector(".container");

// create random numbers for coordinates and shadow spread
let randomValue = (value) => {
	return Math.random() * value;
};

let createDivs = () => {
	for (let i = 0; i < randomValue(200); i++) {
		let div = document.createElement("div");
		div.setAttribute("class", "star");
		container.appendChild(div);
	}
};
createDivs();

let star = document.querySelectorAll(".star");

let createShadow = () => {
	for (item of star) {
		item.style.boxShadow = `${randomValue(window.innerWidth)}px ${randomValue(
			window.innerHeight
		)}px ${randomValue(2)}em white`;
	}
};

createShadow();

window.addEventListener("resize", createShadow);
