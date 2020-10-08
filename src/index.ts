
import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
	next: value => console.log('next: ', value),
	error: 	error => console.warn('Errorobs: ', error),
	complete: () => console.log('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {
	// Crear contador
	let count = 0;

	const interval = setInterval( () => {
		count ++;
		subscriber.next(count);
		console.log(count);
	}, 1000);

	return () => {
		clearInterval(interval);
		console.log('Intervalo destruido');
	}
});

const subscription1 = intervalo$.subscribe( );
const subscription2 = intervalo$.subscribe( );
const subscription3 = intervalo$.subscribe( );

setTimeout(() => {
	subscription1.unsubscribe();
	subscription2.unsubscribe();
	subscription3.unsubscribe();
	console.log('Completado timeout')
}, 3000);