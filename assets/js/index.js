let sectionInformation, sectionProjects

function toggleSectionVisibility(on, off) {
    on.style.display = 'block'
    off.style.display = 'none'
}

function toggleSection(section) {
    if (section === 'projects') {
        toggleSectionVisibility(sectionProjects, sectionInformation)
    } else {
        toggleSectionVisibility(sectionInformation, sectionProjects)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    URLParams = new URLSearchParams(window.location.search)
    sectionInformation = document.querySelector('#information')
    sectionProjects = document.querySelector('#projects')
    document.querySelector('#navigation-menu').addEventListener('change', (event) => {
        toggleSection(event.target.value)
    })
})