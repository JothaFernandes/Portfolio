function updateProfileInfo(profileData) {
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const language = document.getElementById('profile.language')
    language.innerText = profileData.languages

}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li class="technologies_item">
                <img class="technologies_logo" src="${skill.logo}" alt="Logo ${skill.name}">
            </li>` ).join('')
}

function updateProjects(profileData) {
    const projects = document.getElementById('profile.projects')
    projects.innerHTML = profileData.projects.map(project => {
        return `
            <div class="projects_card">
                <img class="card_cover" src="${project.img}" alt="">
                <div class="card_body">
                    <h3 class="card_title">${project.name}</h3>
                    <p class="card_description">${project.description}</p>
                    <ul class="card_list">
                        <li class="card_item">Listagem de Favoritos</li>
                        <li class="card_item">Carrinho de compras</li>
                        <li class="card_item">Filtragem categoria</li>
                    </ul>
                    <ul class="technologies_list">
                        <li class="technologies_item">
                            <img class="technologies_logo" src="./assets/images/tecnologies/javascript-fill.svg"
                                alt="Logo Javascript">
                        </li>
                        <li class="technologies_item">
                            <img class="technologies_logo" src="./assets/images/tecnologies/html5.svg"
                                alt="Logo Html">
                        </li>
                        <li class="technologies_item">
                            <img class="technologies_logo" src="./assets/images/tecnologies/css3.svg" alt="Logo css">
                        </li>
                        <li class="technologies_item">
                            <img class="technologies_logo" src="./assets/images/tecnologies/git.svg" alt="Logo Git">
                        </li>
                    </ul>
                    <div class="card_buttons">
                        <button class="btn btn--primary">
                            <span>Prévia</span>
                            <i class="bi bi-arrow-up-right"></i>
                        </button>
                        <a href="${project.github}"><button class="btn">
                            <span>Repositório</span>
                        </button></a>
                    </div>
                </div>
            </div>`
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHardSkills(profileData)
    updateProjects(profileData)

})()