import 'regenerator-runtime/runtime';
import axios from 'axios';

export function sleep(ms = 200) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

async function baseRequest({ method = 'get', body = null, url = '' }) {
    console.log(method + " request to " + url);
    let props = {
        method: method,
        url: 'http://localhost:8080/main/list/' + url,
    }
    return axios(props);
}

export async function getRequest({country = "all", price = 0, ammount = 0 }) {
    let url = `${country}/${price}/${ammount}`;
    return baseRequest({ url: url });
}
