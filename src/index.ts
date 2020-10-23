import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const inputElement = document.createElement('input');
const orderList = document.createElement('ol');

body.append(inputElement, orderList);

const input$ = fromEvent<KeyboardEvent>(inputElement, 'keyup');

input$.pipe(
    debounceTime(500),
    map(event => {
        const texto = event.target['value'];
        return ajax.getJSON(
            `https://api.github.com/users/${texto}`
        )
    })
).subscribe(resp => {
    resp.pipe(
        pluck('url')
    ).subscribe(console.log)
});