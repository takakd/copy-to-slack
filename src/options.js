import CursoredToSlack from "./cursoredtoslack";

const cts = new CursoredToSlack(chrome);

cts.getOptions().then(got => {
    // previous
    console.log('old', got);
    // set new one.
    cts.setOptions({test: "is ok?"}).then(options => {
        console.log('new one', options);
        cts.getOptions().then(got => {
            // check
            console.log('check', got);
        });
    });
});


// sample:
// let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
//
// function constructOptions(kButtonColors) {
//     for (let item of kButtonColors) {
//         let button = document.createElement('button');
//         button.style.backgroundColor = item;
//         button.addEventListener('click', function () {
//             chrome.storage.sync.set({color: item}, function () {
//                 console.log('color is ' + item);
//             })
//         });
//         page.appendChild(button);
//     }
// }
//
// constructOptions(kButtonColors);


