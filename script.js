const panelsEl =  document.querySelectorAll('.panel')

panelsEl.forEach( panel => {
    panel.addEventListener("click", () => {
        removeClass()
        panel.classList.add('active')
    })
})

function removeClass(){
    panelsEl.forEach( panel => {
        panel.classList.remove('active')
    })
}