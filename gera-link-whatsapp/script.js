const button = document.getElementById('button')
const linkResult = document.getElementById('link')
const phoneNumber = document.getElementById('phoneNumber')
const resultCard = document.getElementById('result')

button.addEventListener('click', () => generateLink())

const generateLink = () => {
    if (phoneNumber.value) {
        let linkCompleted = 'https://wa.me/' + phoneNumber.value

        linkResult.innerHTML = 
        `Seu link de Whatsapp: <a href="${linkCompleted}"
        target="_blank"> ${linkCompleted}</a>`

        resultCard.style.display = 'block'
    }

    else {
        linkResult.innerHTML = 'Por favor. insira um número válido'
    }
}