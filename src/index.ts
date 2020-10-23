import { fromEvent } from 'rxjs';
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const inputElement = document.createElement('input');
const orderList = document.createElement('ol');

body.append(inputElement, orderList);

const input$ = fromEvent<KeyboardEvent>(inputElement, 'keyup');

input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    mergeAll(),
    pluck('items')
).subscribe(resp => {
    console.log(resp);
});