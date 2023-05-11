const grArray = document.querySelectorAll('.gr')

grArray.forEach(item => {
    item.addEventListener('click', (e) => {
        grArray.forEach(i => {
            i.classList.remove('selected-gr')
        })

        item.classList.add('selected-gr')
    })
})