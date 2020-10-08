
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: value => console.log('next: ', value),
	error: error => console.warn('Errorobs: ', error),
	complete: () => console.log('Completado')
};

const intervalo$ = new Observable<number>(subscriber => {
	const interval = setInterval(() => {
		subscriber.next(Math.random());
	}, 1000);

	return () => {
		clearInterval(interval);
	}
});

/** SUBJECT
 * 1. Casteo multiple
 * 2.Tambien es un observer
 * 3. Next, error y complete
 */

 const subject$ = new Subject<any>();
 intervalo$.subscribe(subject$);

// const subscription1 = intervalo$.subscribe(rnd => console.log('sub1: ', rnd));
// const subscription2 = intervalo$.subscribe(rnd => console.log('sub2: ', rnd));

const subscription1 = subject$.subscribe(rnd => console.log('sub1: ', rnd));
const subscription2 = subject$.subscribe(rnd => console.log('sub2: ', rnd));