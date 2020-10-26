import { Observer, of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';
import { createLogicalAnd } from 'typescript';

const observer: Observer<string | number> = {
	next: value => console.log('Siguiente [next]: ', value),
	error: 	error => console.warn('Error [obs]: ', error),
	complete: () => console.log('Completado [obs]')
};

const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z'),
);

// numeros$.subscribe( console.log );

numeros$.subscribe( observer );
