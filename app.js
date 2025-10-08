// Hämta referenser från index.html till DOM.
const saveBloggPost = document.getElementById('blogg-list');
const titleInput = document.getElementById('title');
const nameInput = document.getElementById('writer-name');
const emailInput = document.getElementById('your-email');
const opinionInput = document.getElementById('your-opinion');
const sendBtn = document.getElementById('submit-btn');
const today = new Date();

// Funktion som hanterar POST-knapp.
function postBtn(event) {
    // Förhindra att sidan laddas om. 
    event.preventDefault();

    // Hämta värden från inputfälten.
    let title = titleInput.value;
    let name = nameInput.value;
    let email = emailInput.value;
    let opinion = opinionInput.value;

    // Formaterar datum.
    let date = today.toLocaleDateString();

    // Skapar en contianer för ett nytt skapande inlägg.
    let postItem = document.createElement('div')
    
    // Skapa de olika element som ska visas i inlägget.
    let titleElement = document.createElement('h5');
    let opinionElement = document.createElement('p');
    let buttonContainer = document.createElement('div');
    let likeContainer = document.createElement('div');
    let likeButton = document.createElement('button');
    let countLike = document.createElement('p');
    let dislikeContainer = document.createElement('div');
    let dislikeButton = document.createElement('button');
    let countDislike = document.createElement('p');
    let deleteBtn = document.createElement('button');
    let nameElement = document.createElement('h6');
    let emailElement = document.createElement('h6');
    let todayElement = document.createElement('h6');
    // Skapa räknare för likes och dislikes (startar på 0)
    let likeCount = 0;
    let dislikeCount = 0;
    
    // Döpa till klasser för att styla i CSS sen.
    postItem.classList.add('post-item');
    titleElement.classList.add('postTitle');
    buttonContainer.classList.add('buttonContainer');
    likeContainer.classList.add('likeContainer');
    likeButton.classList.add('likeButton');
    countLike.classList.add('countLike');
    dislikeContainer.classList.add('dislikeContainer');
    dislikeButton.classList.add('dislikeButton')
    countDislike.classList.add('countDislike')
    deleteBtn.classList.add('deleteBtn');

    // Tilldelar textinnehåll till element.
    titleElement.innerText = `Title: ${title}`;
    opinionElement.innerText = opinion;
    likeButton.innerText = '❤️'; // Like knapp.
    countLike.innerText = likeCount;
    dislikeButton.innerText = '👎🏼'; // Dislike knapp.
    countDislike.innerText = dislikeCount;
    deleteBtn.innerText = 'Delete your post';
    nameElement.innerText = `By: ${name}`;
    todayElement.innerText = `Date: ${date}`;
    emailElement.innerText = `Email: ${email}`;

    // Event listener för like-knappen
    likeButton.addEventListener('click', () => {
        likeCount++;
        countLike.innerText = likeCount;
    });
    
    // Event listener för dislike-knappen
    dislikeButton.addEventListener('click', () => {
        dislikeCount++;
        countDislike.innerText = dislikeCount;
    });
    // Event funktion till delete-knapp för att ta bort skapande inlägg. 
    deleteBtn.addEventListener('click', () => {
        saveBloggPost.removeChild(postItem);
    });
    
    // Lägg till inlägg i DOM
    postItem.appendChild(titleElement);
    postItem.appendChild(opinionElement);
    postItem.appendChild(buttonContainer);
    buttonContainer.appendChild(likeContainer);
    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(countLike);
    buttonContainer.appendChild(dislikeContainer)
    dislikeContainer.appendChild(dislikeButton);
    dislikeContainer.appendChild(countDislike);
    postItem.appendChild(deleteBtn);
    postItem.appendChild(nameElement);
    postItem.appendChild(todayElement);
    postItem.appendChild(emailElement);
    // Lägger till postItem i blogglistan.
    saveBloggPost.appendChild(postItem);

    // Rensa inputfälten efter ett skapande inlägg skapats.
    titleInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    opinionInput.value = '';

}
// Lägger till event funktion på POST-knappen.
sendBtn.addEventListener('click', postBtn);



