const input1 = document.getElementById('input1');
const res = document.getElementById('res');
const btn = document.getElementById('btn1')
const btns = document.querySelectorAll('.btn')
const wrapper = document.querySelector('.wrapper')


console.log(wrapper)

console.log(btns)

wrapper.addEventListener('click', (event) => {
    console.log(event.target)
    console.log(event.currentTarget)
})

btns.forEach(el => {
    el.addEventListener('click', () => {
        el.style.background = 'red';
    })
});


// input1.addEventListener('keydown', (event) => {
//     console.log(event.key)
//     console.log(event.type)
//     res.textContent = event.key;
// })


// btn.addEventListener('click', (event) => {
//     dataType(event)
// })

// btn.addEventListener('mouseover', (event) => {
//     dataType(event)
// })


// function dataType(event) {
//     console.log(event.type)
//     if (event.type == 'click') {
//         event.target.style.background = 'red';
//     }
//     else if (event.target = 'mouseover') {
//         event.target.style.background = "black";
//     }
// }