import { interval, timer } from 'rxjs';

const observer = {
	next: value => console.log('next: ', value),
	complete: () => console.log('complete')
}
const interval$ = interval(1000);
const timer$ = timer(2000);

console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');
