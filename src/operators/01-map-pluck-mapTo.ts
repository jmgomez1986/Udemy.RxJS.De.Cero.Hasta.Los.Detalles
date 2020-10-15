import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

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

const keyPluck$ = keyup$.pipe(
	pluck('key')
);

const keyPluck2$ = keyup$.pipe(
	pluck('target', 'baseURI')
);

const keyMapTo$ = keyup$.pipe(
	mapTo<KeyboardEvent, string>('Tecla presionada')
);

keyup$.subscribe(console.log);
keyCode$.subscribe(value => console.log('map: ', value));
keyPluck$.subscribe(value => console.log('pluck: ', value));
keyPluck2$.subscribe(value => console.log('pluck2: ', value));
keyMapTo$.subscribe(value => console.log('mapTo: ', value));