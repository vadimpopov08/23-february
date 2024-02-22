let congratulateButton = document.getElementById('congratulateButton')
let container = document.querySelector('.container')
congratulateButton.addEventListener('click', ()=> {
    let letter = document.createElement('div')
    letter.classList = ('letter')
    container.appendChild(letter)
    let address = document.createElement('p')
    address.classList = ('congratulation')
    letter.appendChild(address)
    address.textContent = `Уважаемые солдаты!`
    let congratulation = document.createElement('p')
    congratulation.classList = ('congratulation')
    letter.appendChild(congratulation)
    congratulation.textContent = `С наступающим вас Днем защитника Отечества! Хочу передать вам самые теплые слова благодарности за вашу службу и самоотверженность. Желаю вам крепкого здоровья, невероятных боевых успехов и, конечно же, скорейшего возвращения домой, в объятья родных и близких и новой Победы. Помните, что мы все гордимся вами и ждем вас с нетерпением.`
    congratulateButton.style.display = `none`
    congratulateButton.style.transition = `5s`
})