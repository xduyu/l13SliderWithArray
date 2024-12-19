const listData = document.getElementById('list-data');
const listInput = document.getElementById('list-input');
const resAdd = document.getElementById('res-add');
const res = document.getElementById('res');


const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const confrimDelete = document.getElementById('reset');
const canceledDelete = document.getElementById('canceledReset');


resAdd.addEventListener('click', () => {
    const inputData = listInput.value

    const liItem = document.createElement('li')
    liItem.textContent = inputData


    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'Удалить';
    btnDelete.className = 'btnDel'
    liItem.append(btnDelete)

    btnDelete.addEventListener('click', () => {
        modal.style.display = 'block'

        canceledDelete.addEventListener('click', () => {
            modal.style.display = 'none'
        })
        confrimDelete.addEventListener('click', (event) => {
            console.log(event.target)
            liItem.remove()
            modal.style.display = 'none'
        })
    })
    res.append(liItem)
})
