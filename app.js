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
            name: 'leaves',
            img: 'images/leaves.jpg'
        },
        {
            name: 'pirple tree',
            img: 'images/pirple-tree.jpg'
        },
        {
            name: 'swing',
            img: 'images/swing.jpg'
        },
        {
            name: 'horse',
            img: 'images/horse.jpg'
        },
        {
            name: 'ice cream',
            img: 'images/ice-cream.jpg'
        },
        {
            name: 'white flower',
            img: 'images/white-flower.jpg'
        },
    ]

    const grid = document.querySelector('.grid')

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back_of_deck.jpg')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }        
    }

    createBoard()

})