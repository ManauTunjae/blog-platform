const saveBloggPost = document.getElementById('bloggList');
const titleInput = document.getElementById('title');
const nameInput = document.getElementById('writerName');
const emailInput = document.getElementById('yourEmail');
const opinionInput = document.getElementById('yourOpinion');
const sendBtn = document.getElementById('submitBtn');
const today = new Date();

// Spara input värdet
function handleSend(event) {
    event.preventDefault();

    let title = titleInput.value;
    let name = nameInput.value;
    let email = emailInput.value;
    let opinion = opinionInput.value;
    let date = today.toLocaleDateString();

    let postItem = document.createElement('div')
    postItem.classList.add('postItem');

    // Skapa nytt element
    let titleElement = document.createElement('h2');
    let nameElement = document.createElement('h4');
    let emailElement = document.createElement('h6');
    let opinionElement = document.createElement('p');
    let todayElement = document.createElement('p');

    titleElement.innerText = `Title: ${title}`;
    nameElement.innerText = `By: ${name}`;
    todayElement.innerText = `Date: ${date}`;
    emailElement.innerText = `Email: ${email}`;
    opinionElement.innerText = opinion;

    postItem.appendChild(titleElement);
    postItem.appendChild(nameElement);
    postItem.appendChild(todayElement);
    postItem.appendChild(emailElement);
    postItem.appendChild(opinionElement);

    saveBloggPost.appendChild(postItem);

    // Rensa input fälten
    titleInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    opinionInput.value = '';
}
sendBtn.addEventListener('click', handleSend);



