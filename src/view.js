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
			const context = getContext();
			//console.log("yo- random man!"); 
			function getRandomNumber(min, max){
				return Math.floor(Math.random() * (max - min + 1)) + min; 
			}
			const randomNumber = getRandomNumber(1, 140);
			context.decibelValue = randomNumber;  
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
