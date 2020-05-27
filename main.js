var nextturn = document.getElementById("nextturn");
		function getBox() {
			var box1 = document.getElementById("box1");
			var box2 = document.getElementById("box2");
			var box3 = document.getElementById("box3");
			var box4 = document.getElementById("box4");
			var box5 = document.getElementById("box5");
			var box6 = document.getElementById("box6");
			var box7 = document.getElementById("box7");
			var box8 = document.getElementById("box8");
			var box9 = document.getElementById("box9");

			if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
				return winnner(box1, box2, box3);

			if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
				return winnner(box4, box5, box6);

			if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
				return winnner(box7, box8, box9);

			if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
				return winnner(box1, box4, box7);

			if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
				return winnner(box1, box5, box9);

			if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
				return winnner(box2, box5, box8);

			if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
				return winnner(box3, box5, box7);

			if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
				return winnner(box3, box6, box9);
		}

		var boxes = document.querySelectorAll('#main div'), X_or_O = 0;

		for (var i = 0; i < boxes.length; i++)
		{
			boxes[i].onclick = function (e) 
			{
				if (X_or_O < 8) 
				{
					if (this.innerHTML !== "X" && this.innerHTML !== "O") {
						if (X_or_O % 2 === 0)
						{
							if (!getBox()) 
							{
								this.innerHTML = "X";
								nextturn.innerHTML = "O TURN";
								getBox();
								X_or_O += 1;
							}
						}
						else {
							if (!getBox()) {
								this.innerHTML = "O";
								nextturn.innerHTML = "X TURN";
								getBox();
								X_or_O += 1;
							}
						}
					}
				}
				else if (X_or_O == 8 && getBox() != 1) 
				{
					if (this.innerHTML !== "X" && this.innerHTML !== "O") {
						if (X_or_O % 2 === 0) {
							if (!getBox()) {
								this.innerHTML = "X";
							}
						}
						else {
							if (!getBox()) {
								this.innerHTML = "O";
							}
						}
					}
					nextturn.innerHTML = "Match DRAW!";
				}
				else if (X_or_O > 8) 
				{
					e.preventDefault();
				}
			};
		}

		function winnner(b1, b2, b3) {
			b1.classList.add("win");
			b2.classList.add("win");
			b3.classList.add("win");
			nextturn.innerHTML = b1.innerHTML + " WON THE MATCH ";
			nextturn.style.fontSize = "25px";
			return 1;
		}

		function playAgain()
		{
			X_or_O = 0;
			for (var i = 0; i < boxes.length; i++) {
				boxes[i].classList.remove("win");
				boxes[i].innerHTML = "";
			}
			nextturn.innerHTML = "PLAY";
			nextturn.style.fontSize = "35px";
		}
