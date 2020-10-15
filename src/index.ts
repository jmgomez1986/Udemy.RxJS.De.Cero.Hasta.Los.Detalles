import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

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

keyup$.subscribe(console.log);
keyCode$.subscribe(value => console.log('map: ', value));
keyPluck$.subscribe(value => console.log('pluck: ', value));
keyPluck2$.subscribe(value => console.log('pluck2: ', value));