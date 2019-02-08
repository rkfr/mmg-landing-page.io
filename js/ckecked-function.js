'use strict'

class SelectBlock {

	constructor(container, className) {
		this.state = {
			className: className,
			elements: document.getElementsByClassName('functions-item')
		}

		container.addEventListener('mouseover', this.changeClass(this.state));
	}

	changeClass(state) {
		const {elements, className} = state;

		return e => {
			const element = e.target;

			if (!element.classList.contains( 'functions-item' ))
				return;

			if (!element.classList.contains( className )) {
				for (let el of elements) {
					el.classList.remove( className );
				}

				element.classList.add( className );
			}
		}
	}
}

const container = document.getElementById('functions-wrapper');

const select = new SelectBlock(container, 'functions-item__checked');