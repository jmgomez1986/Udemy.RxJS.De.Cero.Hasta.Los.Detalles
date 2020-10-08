import { of } from 'rxjs';

// const obs$ = of<number>(1,2,3,4,5,6);
// const obs$ = of<any>(...[1, 2, 3, 4, 5, 6], [7, 8, 9], 10, 11, 12);
const obs$ = of<any>([1, 2], { a: 3, b: 4}, function() {}, Promise.resolve(true));

console.log('Inicio del obs$');

obs$.subscribe(
	next => console.log('next: ', next),
	null,
	() => console.log('Terminamos la secuencia')
);

console.log('Fin del obs$');
