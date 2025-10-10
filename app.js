// Hämta referenser från index.html till DOM.
const saveBlogPost = document.getElementById('blogg-list');
const titleInput = document.getElementById('title');
const nameInput = document.getElementById('writer-name');
const emailInput = document.getElementById('your-email');
const opinionInput = document.getElementById('your-opinion');
const sendBtn = document.getElementById('submit-btn');
const today = new Date();

// Skapa hjälp funktion som skapar ett HTML-element med klass och innehåll. 
function createElement(tag, className, content = '') {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (content) element.textContent = content;
    return element;
}

// Skapa funktion för like och dislike knapp samt add event till knappen och räknare.
function createLikeDislikeButtons() {
    let likeCount = 0;
    let dislikeCount = 0;

    const likeButton = createElement('button', 'likeButton');
    likeButton.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
    const countLike = createElement('p', 'countLike', '0');

    const dislikeButton = createElement('button', 'dislikeButton');
    dislikeButton.innerHTML = '<i class="fa-solid fa-thumbs-down"></i>'; 
    const countDislike = createElement('p', 'countDislike', '0');
    
    likeButton.addEventListener('click', () => {
        countLike.textContent = ++likeCount;
    });

    dislikeButton.addEventListener('click', () => {
        countDislike.textContent = ++dislikeCount;
    })

    return { likeButton, countLike, dislikeButton, countDislike };

}

// Funktion som hanterar POST-knapp.
function postBtn(event) {
    // Förhindra att sidan laddas om. 
    event.preventDefault();

    // Hämta värden från inputfälten.
    let title = titleInput.value;
    let name = nameInput.value;
    let email = emailInput.value;
    let opinion = opinionInput.value;

    // Validera att inputfältet är ifyllda.
    if ( !title || !name || !email || !opinion ) {
        alert('Please write your blog!');
        return;
    } else if ( !email.includes('@') ) {
        alert('Please enter a valid email address!');
        // Rensa email fältet så kan man skriva om giltigt mejl.
        emailInput.value = '';
        return;
    }

    // Formaterar datum.
    let date = today.toLocaleDateString();
    // Skapa HTML-element, klass och innehåll med hjälp av createElement funktion.
    let postItem = createElement('div', 'post-item')
    let titleElement = createElement('h5', 'postTitle', `Title: ${title}`);
    let opinionElement = createElement('p', 'post-content', opinion);
    let buttonContainer = createElement('div', 'buttonContainer'); 
    let likeContainer = createElement('div', 'likeContainer');
    let dislikeContainer = createElement('div', 'dislikeContainer');
    // Hämta like, dislike-element från funktionen createLikeDislikeButtons. 
    let { likeButton, countLike, dislikeButton, countDislike } = createLikeDislikeButtons();
    let deleteBtn = createElement('button', 'deleteBtn', 'Delete your post');
    let nameElement = createElement('h6', null, `By: ${name}`);
    let emailElement = createElement('h6', null,  `Email: ${email}`);
    let todayElement = createElement('h6', null, `Date: ${date}`);
    
    // Event funktion till delete-knapp för att ta bort skapande inlägg. 
    deleteBtn.addEventListener('click', () => {
        // Alert meddelande när man ska ta bort inlägg.
        if (confirm('Do you really want to delete your post?')) {
            saveBlogPost.removeChild(postItem);
        }
    });
    
    // Lägg till inlägg i DOM
    // append med fler element och appendChild med enkel element.
    postItem.append(titleElement, opinionElement, buttonContainer, deleteBtn, nameElement, todayElement, emailElement);
    buttonContainer.append(likeContainer, dislikeContainer);
    likeContainer.append(likeButton, countLike);
    dislikeContainer.append(dislikeButton, countDislike);
    // Lägger till postItem i blogglistan.
    saveBlogPost.appendChild(postItem);

    // Rensa inputfälten efter ett skapande inlägg skapats.
    titleInput.value = nameInput.value = emailInput.value = opinionInput.value = '';

}
// Lägger till event funktion på POST-knappen.
sendBtn.addEventListener('click', postBtn);