
import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
	next: value => console.log('Siguiente [next]: ', value),
	error: 	error => console.warn('Error [obs]: ', error),
	complete: () => console.log('Completado [obs]')
};