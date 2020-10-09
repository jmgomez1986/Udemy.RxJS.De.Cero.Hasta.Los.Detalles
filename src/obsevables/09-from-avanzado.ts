import { of, from } from 'rxjs';

/**
 * of: genera un observable tomando argumentos y genera una secuencia
 * from: genera un observable en base a array, objeto, promise, iterable, observable
 */

const observer = {
	next: value => console.log('next: ', value),
	complete: () => console.log('complete')
}

const miGenerador = function*() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
}

const miIterable = miGenerador();

// for( let id of miIterable ){
//     console.log(id);
// }
from( miIterable ).subscribe( observer );

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = of(1, 2, 3, 4, 5);

// const source$ = from('Matias');
// const source$ = of('Matias');

const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe( observer );

source$.subscribe( async resp => {
	console.log(resp);

	const dataResp = await resp.json();
	console.log(dataResp);
} );