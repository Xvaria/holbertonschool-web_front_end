function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paraph = document.createElement('p');
    const btnspooky = document.createElement('button');
    const btndark = document.createElement('button');
    const btnscream = document.createElement('button');

    paraph.innerHTML = 'Welcome Holberton!';
    btnspooky.innerHTML = 'Spooky';
    btndark.innerHTML = 'Dark mode';
    btnscream.innerHTML = 'Scream mode';

    document.body.appendChild(paraph);
    document.body.appendChild(btnspooky);
    document.body.appendChild(btndark);
    document.body.appendChild(btnscream);

    btnspooky.onclick = spooky;
    btndark.onclick = darkMode;
    btnscream.onclick = screamMode;
}
main();