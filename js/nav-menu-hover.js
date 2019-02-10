'use strict'

class UnderscoreHover {

	constructor(container) {
		this.state = {
			hover: false,
			translateY: 0
		}
			
		container.addEventListener('mouseover', this.hover.bind(this));
	}

	hover(e) {
		
		let element = e.target,
			state = this.state,
			border = this.createBorder();

		if (element.tagName !== 'A' || state.hover === true) {
			return;
		}

		state.hover = true;
		element.append(border);
		element.classList.add('nav_element');
		this.transform(border, 30);

		element.onmouseout = () => {
			this.transform(border, 0);

			setTimeout( () => {
				border.remove();
				element.classList.remove('nav_element');
			}, 600);
		}

		setTimeout( () => {
			state.hover = false;
		}, 650);

	}

	createBorder() {

		let border = document.createElement('div');
		border.classList.add('nav_border');

		return border;
	}

	transform(el, val) {

		if (val > 0) {
			for (let i = 1; i <= val; i++) {
				
				setTimeout( () => {
					el.style.transform = `translateY(${i}px)`;
				}, 60);
				this.state.translateY = i;
			}
		}
		else {
			for (let i = this.state.translateY; i > 0; i--) {

				el.style.transform = `translateX(${i}px)`;
				this.state.translateY = i;
			}
		}
	}
}

const navMenu = document.getElementById('nav-menu'),
	makeHover = new UnderscoreHover(navMenu);