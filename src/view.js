/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'create-block', {
	state: {
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
	},
	actions: {
		randomizeNumber() {
			//randomizes number
			const context = getContext();
			function getRandomNumber(min, max){
				return Math.floor(Math.random() * (max - min + 1)) + min; 
			}
			const randomNumber = getRandomNumber(1, 140);
			context.decibelValue = randomNumber;  

			//updates color
			const colors = [
				{ max: 20, color: '#006400' },
				{ max: 40, color: '#3A5F0B' },
				{ max: 60, color: '#556B2F' },
				{ max: 80, color: '#B8860B' },
				{ max: 100, color: '#8B4513' },
				{ max: 120, color: '#A52A2A' },
			];
		
			for(const range of colors){
				if(context.decibelValue <= range.max){
					context.backgroundColor = range.color;
					break; 
				}
			}
		},
		
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
