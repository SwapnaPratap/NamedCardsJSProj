var numberedArr = new Array();

function renderNumbers()
{
	document.getElementById('deck').innerHTML='';
	numberedArr.map(num =>
		{
			var card = document.createElement("div");
			var cardbody = document.createElement("span");
			card.key = num;
			card.className = "card";
			card.style.backgroundColor = pickColor();
			cardbody.className = "value";
			cardbody.innerHTML = num;
			card.appendChild(cardbody);
			document.getElementById("deck").appendChild(card);
		}
	)
}

function shuffleArr()
{
		for(let i = numberedArr.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[numberedArr[i], numberedArr[j]] = [numberedArr[j], numberedArr[i]];
		}
		renderNumbers();
}

function range(start, end)
{
		return Array.from({length:end - start + 1}, (_,i) => i + 1);
}

function sortArr()
{
	numberedArr.sort((a, b) => a - b);
	renderNumbers();
}

function pickColor()
{
		var colors = [
			'#6F98A8', '#BFBFBF', '#2B8EAD',
			'#2F454E'
		];
		var random_color = colors[Math.floor(
				Math.random() * colors.length)];
		return random_color;
}

function load()
{
		numberedArr = range(1, 9);
		shuffleArr();
}
window.onload = load;