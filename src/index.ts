const url = 'https://api.github.com/usersx?per_page=5';

const manejaErrores = (response: Response) => {

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response;
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error en usuarios', err ) )

fetchPromesa
    .then(manejaErrores)
    .then(resp => resp.json())
    .then(data => console.log('data:', data))
    .catch(err => console.warn('error en usuarios', err))