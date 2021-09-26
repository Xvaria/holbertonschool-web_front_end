function createElement(data) {
    console.log(data);
    const paraph = document.createElement('p');
    paraph.innerHTML = data;
    document.body.appendChild(paraph);
}

function queryWikipedia(callback) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(request.response.query.pages[21721040].extract);
        }
    }
    request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    request.responseType = 'json';
    request.send(null);
}

queryWikipedia(createElement);