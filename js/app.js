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

// creating renaissance title and image banks
const onGetRenSuccess = (searchResult) => {
    console.log(searchResult)
    const renTitles = []
    const renPhotos = []
    searchResult.data.forEach((result) => {
    renTitles.push(result.title)
    renPhotos.push(`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`)
    })
    let questionIndex = Math.floor(Math.random() * (renPhotos.length-1))
    questionPic.src = renPhotos[questionIndex]
    renPhotos.splice(renPhotos[questionIndex])
    let rightAnswer = Math.floor(Math.random() * 3)
    console.log(rightAnswer)
    answers[rightAnswer].innerText = renTitles[questionIndex]
    renTitles.splice(renTitles[questionIndex])
    answers.splice(answers[rightAnswer])
    for (let i = 0; i < 3; i++) {
        answers[i].innerText = renTitles[Math.floor(Math.random() * (renTitles.length-1))]
    }
}

// creating classicism bank
const onGetClassicSuccess = (searchResult) => {
    console.log(searchResult)
    const classicTitles = []
    const classicPhotos = []
    searchResult.data.forEach((result) => {
        classicTitles.push(result.title)
        classicPhotos.push(`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`)
    })
    let questionIndex = Math.floor(Math.random() * (classicPhotos.length-1))
    questionPic.src = classicPhotos[questionIndex]
    classicPhotos.splice(classicPhotos[questionIndex])
    let rightAnswer = Math.floor(Math.random() * 3)
    console.log(rightAnswer)
    answers[rightAnswer].innerText = classicTitles[questionIndex]
    classicTitles.splice(classicTitles[questionIndex])
    answers.splice(answers[rightAnswer])
    for (let i = 0; i < 3; i++) {
        answers[i].innerText = classicTitles[Math.floor(Math.random() * (classicTitles.length-1))]
    }
}

// creating impressionism bank
const onGetImpressionSuccess = (searchResult) => {
    console.log(searchResult)
    const impressionTitles = []
    const impressionPhotos = []
    searchResult.data.forEach((result) => {
        impressionTitles.push(result.title)
        impressionPhotos.push(`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`)
    })
    let questionIndex = Math.floor(Math.random() * (impressionPhotos.length-1))
    questionPic.src = impressionPhotos[questionIndex]
    impressionPhotos.splice(impressionPhotos[questionIndex])
    let rightAnswer = Math.floor(Math.random() * 3)
    console.log(rightAnswer)
    answers[rightAnswer].innerText = impressionTitles[questionIndex]
    impressionTitles.splice(impressionTitles[questionIndex])
    answers.splice(answers[rightAnswer])
    for (let i = 0; i < 3; i++) {
        answers[i].innerText = impressionTitles[Math.floor(Math.random() * (impressionTitles.length-1))]
    }
}

// creating modernism bank
const onGetModernSuccess = (searchResult) => {
    console.log(searchResult)
    const modernTitles = []
    const modernPhotos = []
    searchResult.data.forEach((result) => {
        modernTitles.push(result.title)
        modernPhotos.push(`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`)
    })
    let questionIndex = Math.floor(Math.random() * (modernPhotos.length-1))
    questionPic.src = modernPhotos[questionIndex]
    modernPhotos.splice(modernPhotos[questionIndex])
    let rightAnswer = Math.floor(Math.random() * 3)
    console.log(rightAnswer)
    answers[rightAnswer].innerText = modernTitles[questionIndex]
    modernTitles.splice(modernTitles[questionIndex])
    answers.splice(answers[rightAnswer])
    for (let i = 0; i < 3; i++) {
        answers[i].innerText = modernTitles[Math.floor(Math.random() * (modernTitles.length-1))]
    }
}

// creating realism bank
const onGetRealismSuccess = (searchResult) => {
    console.log(searchResult)
    const realTitles = []
    const realPhotos = []
    searchResult.data.forEach((result) => {
        realTitles.push(result.title)
        realPhotos.push(`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`)
    })
    let questionIndex = Math.floor(Math.random() * (realPhotos.length-1))
    questionPic.src = realPhotos[questionIndex]
    realPhotos.splice(realPhotos[questionIndex])
    let rightAnswer = Math.floor(Math.random() * 3)
    console.log(rightAnswer)
    answers[rightAnswer].innerText = realTitles[questionIndex]
    realTitles.splice(realTitles[questionIndex])
    answers.splice(answers[rightAnswer])
    for (let i = 0; i < 3; i++) {
        answers[i].innerText = realTitles[Math.floor(Math.random() * (realTitles.length-1))]
    }
}


button.addEventListener('click', function() {
    chosenCategory = questionCategories[Math.floor(Math.random() * 4)]
    card.style.display = "block"
    if (chosenCategory === 'Renaissance') {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=renaissance&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetRenSuccess)
            .catch(onGetSearchFailure)
    } else if (chosenCategory === 'Classicism') {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=classicism&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetClassicSuccess)
            .catch(onGetSearchFailure)
    } else if (chosenCategory === 'Impressionism') {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=impressionism&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetImpressionSuccess)
            .catch(onGetSearchFailure)
    } else if (chosenCategory === 'Modernism') {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=modernism&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetModernSuccess)
            .catch(onGetSearchFailure)
    } else {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=realism&limit=100&fields=title,image_id")
            .then(res => res.json())
            .then(onGetRealismSuccess)
            .catch(onGetSearchFailure)
    }
})

span.onclick = function() {
    card.style.display = "none"
  }
  