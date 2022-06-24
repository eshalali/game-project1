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

const onGetSearchFailure = () => {
    console.log('failed')
}
// creating title and picture bank
const onGetSearchSuccess = (searchResult) => {
    console.log(searchResult)
    let cateTitles = []
    let catePhotos = []
    searchResult.data.forEach((result) => {
        cateTitles.push(result.title)
        catePhotos.push(`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`)
    })
    let questionIndex = Math.floor(Math.random() * (catePhotos.length-1))
    questionPic.src = catePhotos[questionIndex]
    catePhotos.splice(questionIndex)
    let rightAnswer = Math.floor(Math.random() * 3)
    console.log(rightAnswer)
    answers[rightAnswer].innerText = cateTitles[questionIndex]
    cateTitles.splice(questionIndex)
    answers.splice(rightAnswer)
    for (let i = 0; i < 3; i++) {
        answers[i].innerText = cateTitles[Math.floor(Math.random() * (cateTitles.length-1))]
    }
}


button.addEventListener('click', function() {
    chosenCategory = questionCategories[Math.floor(Math.random() * 4)]
    card.style.display = "block"
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
})

span.onclick = function() {
    card.style.display = "none"
  }
  