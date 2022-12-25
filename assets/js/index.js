const faviconImages = [
    './assets/img/favicon/A.png',
    './assets/img/favicon/L.png',
    './assets/img/favicon/E.png',
    './assets/img/favicon/J.png',
    './assets/img/favicon/A.png',
    './assets/img/favicon/N.png',
    './assets/img/favicon/D.png',
    './assets/img/favicon/R.png',
    './assets/img/favicon/O.png'
]

function favicon(images) {
    let count = 0
    const link = document.createElement('link')
    link.setAttribute('rel', 'icon')
    link.setAttribute('type', 'image/png')
    link.setAttribute('href', images[0])
    document.querySelector('head').appendChild(link)
    const interval = setInterval(() => {
        if (count < images.length) {
            link.setAttribute('href', images[count])
        } else {
            count = 0
            link.setAttribute('href', images[count])
        }
        count++
    }, 1000)
}

document.addEventListener('DOMContentLoaded', () => {
    favicon(faviconImages)
})