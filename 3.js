let func = () => {
    let digi = new Date();
    // console.log(digi);
    let name = digi.toLocaleTimeString();
    console.log(name);
    document.getElementById('time').innerHTML = `<h1>${name}</h1>`;
}
let clock = setInterval(func, 1000);