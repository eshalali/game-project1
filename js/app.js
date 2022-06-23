const button = document.querySelector('button')
const questionCategories = ['Renaissance', 'Classicism', 'Impressionism', 'Modernism', 'Realism']

const onGetSearchFailure = () => {
    console.log('failed')
}

const addToRenAnswers = (objectinfo) => {
    const renAnswers = []
    renAnswers.push(objectinfo.title)
    console.log(renAnswers)
}

const onGetRenSuccess = (searchResult) => {
    console.log(searchResult)
    resultIds = []
    searchResult.objectIDs.forEach((result) => {
        resultIds.push(result)
    })
    console.log(resultIds)
    for (let i = 0; i < 10; i++) {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/[${resultIds[i]}]`)
            .then(res => res.json())
            .then(addToRenAnswers)
            .catch(onGetSearchFailure)
    }
}

fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=renaissance")
    .then(res => res.json())
    .then(onGetRenSuccess)
    .catch(onGetSearchFailure)
// const classicAnswers = []
// const impressionAnswers = []
// const modernAnswers = []
// const realismAnswers = []

button.addEventListener('click', function() {
    chosenCategory = questionCategories[Math.floor(Math.random() * 4)]
    console.log(chosenCategory)
})