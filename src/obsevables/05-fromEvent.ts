import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent >(document, 'keyup');


const observer = {
	next: value => console.log('next: ', value)
};

// src1$.subscribe( observer );
src1$.subscribe( ({x, y}) => {
	console.log(x, y);
} );
src2$.subscribe( event => {
	console.log('Se presiono la letra ', event.key);
} );