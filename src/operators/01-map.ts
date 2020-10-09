import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1, 5)
// 	.pipe(
// 		map(value => {
// 			return value * 10;
// 		})
// 	)
// 	.subscribe(console.log);

// range(1, 5)
// 	.pipe(
// 		map<number, string>(value => (value * 10).toString())
// 	)
// 	.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyCode$ = keyup$.pipe(
	map(value => value.code)
)

keyCode$.subscribe(value => console.log('map: ', value))