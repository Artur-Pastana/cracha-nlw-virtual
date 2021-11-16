const links = {
  github: 'ArturPastana',
  facebook: 'ArturdaGloria',
  instagran: 'artur_da_gloria',
  twitter: 'ArturGloria'
}

function mostrar() {
  console.log(links.github)
}

function mudarLinks() {
  document.getElementById('userName').textContent = 'iris e Aslan'
  //usando o id podemos fazer essa alteração sem uso do get
  //userNome.textContent = 'meus Filhos'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${links[social]}`
    console.log(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubprofileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      //userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubprofileInfos()
