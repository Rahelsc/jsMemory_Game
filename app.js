document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'autumn',
            img: 'images/autumn.jpg'
        },
        {
            name: 'bridge',
            img: 'images/bridge.jpg'
        },
        {
            name: 'cricket',
            img: 'images/cricket.jpg'
        },
        {
            name: 'elephant',
            img: 'images/elephant.jpg'
        },
        {
            name: 'flowers in cup',
            img: 'images/flowers-in-cup.jpg'
        },
        {
            name: 'lake and trees',
            img: 'images/lake-and-trees.jpg'
        },
        {
            name: 'autumn',
            img: 'images/autumn.jpg'
        },
        {
            name: 'bridge',
            img: 'images/bridge.jpg'
        },
        {
            name: 'cricket',
            img: 'images/cricket.jpg'
        },
        {
            name: 'elephant',
            img: 'images/elephant.jpg'
        },
        {
            name: 'flowers in cup',
            img: 'images/flowers-in-cup.jpg'
        },
        {
            name: 'lake and trees',
            img: 'images/lake-and-trees.jpg'
        },

    ]

    // cardsArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisply = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back_of_deck.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }        
    }

    // //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] == cardsChosen[1]) {
            alert('you found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/back_of_deck.jpg')
            cards[optionTwoId].setAttribute('src', 'images/back_of_deck.jpg')
            alert('wrong! try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisply.textContent = cardsWon.length
        if (cardsWon.length === cardsArray.length) {
            resultDisply.textContent = 'congrats, you have won!'
        }
    }

    // //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})