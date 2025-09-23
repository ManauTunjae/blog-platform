const sendBtn = document.getElementById('submitBtn');
const saveBloggPost = document.getElementById('bloggList');


function sendBtn(event) {
    const titleInput = document.getElementById('title').value;
    const nameInput = document.getElementById('writerName').value;
    const emailInput = document.getElementById('yourEmail').value;
    const opinionInput = document.getElementById('yourOpinion').value;

    const saveBlogg = {
        name: nameInput,
        email: emailInput,
        title: titleInput,
        opinion: opinionInput
    }
}
saveBloggPost.addEventListener('click', sendBtn);

