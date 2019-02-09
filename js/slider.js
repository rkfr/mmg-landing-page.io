'use strict'

const data = {
	
	firstSlide: {
		slider: {
			tagName: 'div',
			classes: 'slider slider__first-slide max-layout-width flex',
			attributes: false,
			text: false
		},
		image: {
			tagName: 'div',
			classes: 'slider__image first-slide__image',
			attributes: false,
			text: false
		},
		content: {
			tagName: 'div',
			classes: 'slide__content first-slide__content',
			attributes: false,
			text: false
		},
		underTitle: {
			tagName: 'div',
			classes: 'slide__content__overhead first-slide__content__overhead',
			attributes: false,
			text: 'Our first product of the <span>IoT</span> is'
		},
		title: {
			tagName: 'h2',
			classes: 'slide__content__title first-slide__content__title',
			attributes: false,
			text: 'Bot-checking'
		},
		text: {
			tagName: 'p',
			classes: 'slide__content__text first-slide__content__text',
			attributes: false,
			text: `An efficient device for human resource manager The best replacement for the traditional time attendance 
									checking methods such as Finger print scanner, Face recognition machine...`
		},
		button: {
			tagName: 'a',
			classes: 'button first-slide__slider__button',
			attributes: [{href: '#'}],
			text: 'View bot-checking'
		}
	},

	secondSlide: {
		slider: {
			tagName: 'div',
			classes: 'slider slider__second-slide max-layout-width flex',
			attributes: false,
			text: false
		},
		image: {
			tagName: 'div',
			classes: 'slider__image second-slide__image',
			attributes: false,
			text: false
		},
		content: {
			tagName: 'div',
			classes: 'slide__content second-slide__content',
			attributes: false,
			text: false
		},
		underTitle: {
			tagName: 'div',
			classes: 'slide__content__overhead second-slide__content__overhead',
			attributes: false,
			text: 'Our SECOND product of the <span>IoT</span> is'
		},
		title: {
			tagName: 'h2',
			classes: 'slide__content__title second-slide__content__title',
			attributes: false,
			text: 'Smart home'
		},
		text: {
			tagName: 'p',
			classes: 'slide__content__text second-slide__content__text',
			attributes: false,
			text: `Instead of fingerprint machine and real time check... 
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			  		Vivamus massa risus, eleifend nec lorem id, dignissim maximus enim.`
		},
		button: {
			tagName: 'a',
			classes: 'button second-slide__slider__button',
			attributes: [{href: '#'}],
			text: 'View smart home'
		}
	}
};

class Slider {

	constructor(container, data) {
		const slides = Object.values(data);
		container.append(this.render(slides[0]));
		
		let i = 0;
		const update = () => {
			container.innerText = '';
			if (i === slides.length)
				i = 0;

			container.append(this.render(slides[i]));
			i++;	
		}
		
		setInterval( update, 4000);
	}

	render(slide) {

		const slider = this.createNodes( slide.slider ),
			image = this.createNodes( slide.image ),
			content = this.createNodes( slide.content ),
			textOnTop = this.createNodes( slide.underTitle ),
			title = this.createNodes( slide.title ),
			text = this.createNodes( slide.text ),
			button = this.createNodes( slide.button );

		slider.append(image, content);
		content.append(textOnTop, title, text, button);
		
		return slider;
	}

	createNodes(props) {
		const {tagName, classes, text, attributes} = props;

		if (!tagName)
			return;
		let node = document.createElement( tagName );

		if (classes)
			classes.split(' ').map( el => node.classList.add(el) );

		if (attributes)
			attributes.map( el => {
				node.setAttribute( Object.keys(el), Object.values(el) );
			} );

		if (text) 
			node.innerHTML = text;

		return node;
	}
}

const wrapper = document.getElementById('slider-wrapper');
const slider = new Slider(wrapper, data);