import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 2000);
// setInterval(() => {}, 2000);

const saludar1 = () => console.log('Hola Mundo');
const saludar2 = ({nombre, apellido}) => console.log(`Hola ${nombre} ${apellido}`);

// asyncScheduler.schedule( saludar1, 2000);
// asyncScheduler.schedule( saludar2, 4000, {nombre: 'Matias', apellido: 'Gomez'} );

const subs = asyncScheduler.schedule( function(state) {
	console.log('state: ', state);

	this.schedule(state + 1, 1000 );
}, 3000, 0);

// setTimeout(() => {
// 	subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => {subs.unsubscribe()}, 6000);