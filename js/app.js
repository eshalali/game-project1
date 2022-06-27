const button = document.querySelector('button')
const questionCategories = ['Renaissance', 'Classicism', 'Impressionism', 'Modernism', 'Realism']
const card = document.querySelector(".question-card")
const span = document.getElementsByClassName("close")[0]
const questionPic = document.querySelector('img')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const answers = [answer1, answer2, answer3, answer4]
const timer = document.getElementById('timer')
const question = document.getElementById('question')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const showturn = document.getElementById('show-turn')

let player1Score = 0
let player2Score = 0
let turn = 1

let cateTitles = []
let catePhotos = []

let rightAnswer = NaN

if (turn % 2 === 1) {
    showturn.innerText = "Player 1's turn"
} else {
    showturn.innerText = "Player 2's turn"
}

const onGetSearchFailure = () => {
    console.log('failed')
}

const rightChoice = () => {
    answers[rightAnswer].style.backgroundColor = 'lightgreen'
    question.innerText = 'Correct!'
    clearInterval(questionTimer)

    if (turn % 2 === 1) {
        player1Score += 20
        turn++
        if (player1Score === 100) {
            console.log('Player 1 wins!')
            card.style.display = 'block'
            timer.innerText = ''
            questionPic.style.display = 'none'
            answers.forEach(answer => 
            answer.style.display = 'none'
            )
            question.innerText = "Player 1 Wins!"
        }
    } else {
        player2Score += 20
        turn++
        if (player2Score === 100) {
            console.log('Player 2 wins!')
            card.style.display = 'block'
            timer.innerText = ''
            questionPic.style.display = 'none'
            answers.forEach(answer => 
            answer.style.display = 'none'
            )
            question.innerText = "Player 2 Wins!"
        }
    }
}
const wrongChoice = (event) => {
    event.target.style.backgroundColor = 'red'
    answers[rightAnswer].style.backgroundColor = 'lightgreen'
    question.innerText = 'Incorrect!'
    turn++
    clearInterval(questionTimer)
    }
    


const gamefunction = () => {
    let questionIndex = Math.floor(Math.random() * (catePhotos.length-1))
    questionPic.src = catePhotos[questionIndex]
    catePhotos.splice(questionIndex, 1)
    rightAnswer = Math.floor(Math.random() * 3)
    const answers = [answer1, answer2, answer3, answer4]
    answers[rightAnswer].innerText = cateTitles[questionIndex]
    cateTitles.splice(questionIndex, 1)
    answers[rightAnswer].addEventListener('click', rightChoice)
    for (let i = 0; i < answers.length; i++) {
        if (i !== rightAnswer) {
            answers[i].innerText = cateTitles[Math.floor(Math.random() * (cateTitles.length-1))]
            answers[i].addEventListener('click', wrongChoice)
        }
    }
}
const reset = () => {
    answers[rightAnswer].removeEventListener('click', rightChoice)
    for (let i = 0; i < answers.length; i++) {
        answers[i].removeEventListener('click', wrongChoice)
    rightAnswer = NaN
   
}
}

// creating title and picture bank
const onGetSearchSuccess = (searchResult) => {
    searchResult.data.forEach((result) => {
        cateTitles.push(result.title)
        catePhotos.push(`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`)
    })
    // answers.splice(rightAnswer, 1)
    gamefunction()
}

let questionTimer = ''


button.addEventListener('click', function() {
    chosenCategory = questionCategories[Math.floor(Math.random() * 4)]
    card.style.display = "block"
    answers.forEach(answer => 
        answer.style.textAlign = 'left'
    )
    if (chosenCategory === 'Renaissance') {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=renaissance&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetSearchSuccess)
            .catch(onGetSearchFailure)
    } else if (chosenCategory === 'Classicism') {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=classicism&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetSearchSuccess)
            .catch(onGetSearchFailure)
    } else if (chosenCategory === 'Impressionism') {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=impressionism&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetSearchSuccess)
            .catch(onGetSearchFailure)
    } else if (chosenCategory === 'Modernism') {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=modernism&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetSearchSuccess)
            .catch(onGetSearchFailure)
    } else {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=realism&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetSearchSuccess)
            .catch(onGetSearchFailure)
    }
    let time = 20
    const timers = () => {
    time--
    if (time >= 10) {
        timer.innerText = `00:${time}`
    } else if (time < 10){
        timer.innerText = `00:0${time}`
    }    
    if (time <= 0) {
        timer.innerText = '00:00'
        questionPic.style.display = 'none'
        answers.forEach(answer => 
            answer.style.display = 'none'
        )
        question.innerText = "Time's up"
        clearInterval(questionTimer)
    }
}
questionTimer = setInterval(timers, 1000)
})


span.onclick = function() {
    reset()
    card.style.display = "none"
    for (i = 0; i < answers.length; i++) {
        answers[i].style.backgroundColor = 'rgb(249, 238, 224)'
    }
    player1.innerText = `Player 1 Score: ${player1Score}`
    player2.innerText = `Player 2 Score: ${player2Score}`
    clearInterval(questionTimer)
    questionPic.style.display = 'flex'
    answers.forEach(answer => 
        answer.style.display = 'flex'
    )
        question.innerText = "What is the name of this artwork?"
    if (turn % 2 === 1) {
        showturn.innerText = "Player 1's turn"
    } else {
        showturn.innerText = "Player 2's turn"
    }
  }
