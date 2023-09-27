window.onload = function () {
    const btnAdd = document.getElementById('add');
    const btnSub = document.getElementById('sub');

    btnAdd.addEventListener('click', () => {
        const counter = document.getElementById('count');
        counter.innerText = parseInt(counter.innerText) + 1;
    });

    btnSub.addEventListener('click', () => {
        const counter = document.getElementById('count');
        counter.innerText = parseInt(counter.innerText) - 1;
    });
}
