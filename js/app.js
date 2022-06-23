const button = document.querySelector('button')
const questionCategories = ['Renaissance', 'Classicism', 'Impressionism', 'Modernism', 'Realism']
const modal = document.querySelector(".modal")
const span = document.getElementsByClassName("close")[0]

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
        renPhotos.push(`https://www.artic.edu/iiif/2/${result.id}/full/200,/0/default.jpg`)
    })
    console.log(renPhotos[0])
}

fetch("https://api.artic.edu/api/v1/artworks/search?q=renaissance&limit=100")
    .then(res => res.json())
    .then(onGetRenSuccess)
    .catch(onGetSearchFailure)

// creating classicism bank
const onGetClassicSuccess = (searchResult) => {
    console.log(searchResult)
    const classicTitles = []
    const classicPhotos = []
    searchResult.data.forEach((result) => {
        classicTitles.push(result.title)
        classicPhotos.push(`https://www.artic.edu/iiif/2/${result.id}/full/200,/0/default.jpg`)
    })
    console.log(classicTitles)
}

fetch("https://api.artic.edu/api/v1/artworks/search?q=classicism&limit=100")
    .then(res => res.json())
    .then(onGetClassicSuccess)
    .catch(onGetSearchFailure)

// creating impressionism bank
const onGetImpressionSuccess = (searchResult) => {
    console.log(searchResult)
    const impressionTitles = []
    const impressionPhotos = []
    searchResult.data.forEach((result) => {
        impressionTitles.push(result.title)
        impressionPhotos.push(`https://www.artic.edu/iiif/2/${result.id}/full/200,/0/default.jpg`)
    })
    console.log(impressionTitles)
}

fetch("https://api.artic.edu/api/v1/artworks/search?q=impressionism&limit=100")
    .then(res => res.json())
    .then(onGetImpressionSuccess)
    .catch(onGetSearchFailure)

// creating modernism bank
const onGetModernSuccess = (searchResult) => {
    console.log(searchResult)
    const modernTitles = []
    const modernPhotos = []
    searchResult.data.forEach((result) => {
        modernTitles.push(result.title)
        modernPhotos.push(`https://www.artic.edu/iiif/2/${result.id}/full/200,/0/default.jpg`)
    })
    console.log(modernTitles)
}

fetch("https://api.artic.edu/api/v1/artworks/search?q=modernism&limit=100")
    .then(res => res.json())
    .then(onGetModernSuccess)
    .catch(onGetSearchFailure)

// creating realism bank
const onGetRealismSuccess = (searchResult) => {
    console.log(searchResult)
    const realTitles = []
    const realPhotos = []
    searchResult.data.forEach((result) => {
        realTitles.push(result.title)
        realPhotos.push(`https://www.artic.edu/iiif/2/${result.id}/full/200,/0/default.jpg`)
    })
    console.log(realTitles)
}

fetch("https://api.artic.edu/api/v1/artworks/search?q=realism&limit=100")
    .then(res => res.json())
    .then(onGetRealismSuccess)
    .catch(onGetSearchFailure)


button.addEventListener('click', function() {
    chosenCategory = questionCategories[Math.floor(Math.random() * 4)]
    console.log(chosenCategory)
    modal.style.display = "block"
})

span.onclick = function() {
    modal.style.display = "none"
  }
  