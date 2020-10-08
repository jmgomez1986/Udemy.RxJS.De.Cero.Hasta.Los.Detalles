
import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
	next: value => console.log('Siguiente [next]: ', value),
	error: 	error => console.warn('Error [obs]: ', error),
	complete: () => console.log('Completado [obs]')
};

const obs$ = new Observable<string>( subs => {
	subs.next('Hola');
	subs.next('Mundo');

	// Forzar error
	// const a = undefined;
	// a.nombre = 'Matias';

	subs.complete();

	subs.next('Hola');
	subs.next('Mundo');
});

// obs$.subscribe( 
// 	value => console.log('next: ', value),
// 	error => console.warn(error),
// 	() => console.log('Completado')
//  );

obs$.subscribe( observer );