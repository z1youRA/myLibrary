const library = document.querySelector('.container');


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addSlider(status) {
    const buttonStatus = document.createElement('label');
    const checkbox = document.createElement('input');
    const slider = document.createElement('span');
    buttonStatus.classList.add('switch');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('status-edit');
    checkbox.checked = status;
    slider.classList.add('slider', 'round');
    buttonStatus.appendChild(checkbox);
    buttonStatus.appendChild(slider);
    return buttonStatus;
}

Book.prototype.info = function() {
    if(this.status === 1)
        console.log("You have read it!");
    else if(this.status === 0) 
        console.log("You have NOT read it");
}

function addBookToLibrary(title, author, pages, inputStatus) {
    if(title === '' || author === '' || pages === '') {
        alert('MISSING INFO, try again.');
        return;
    }
    const newBook = new Book(title, author, pages, inputStatus);
    myLibrary.push(newBook);
}

function displayBook() {
    library.innerHTML = ''; //clear the existed book on the page
    myLibrary.forEach((bookInLib, index) => {
        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');
        const book = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const buttonDel = document.createElement('input');
        const buttonStatus = addSlider(bookInLib.status);
        book.classList.add('card');
        book.setAttribute('data-key', `${index}`);
        title.textContent = bookInLib.title;
        title.classList.add('title');
        author.textContent = 'author: ' + bookInLib.author;
        author.classList.add('author');
        pages.textContent = 'pages: ' + bookInLib.pages;
        pages.classList.add('pages');
        buttonDel.type = 'image';
        buttonDel.src = 'img/bin.png';
        buttonDel.classList.add('delete');
        book.appendChild(buttonDel);
        cardInfo.appendChild(title);
        cardInfo.appendChild(author);
        cardInfo.appendChild(pages);
        cardInfo.appendChild(buttonStatus);
        book.appendChild(cardInfo);
        library.appendChild(book);
        buttonDel.addEventListener('click', () => {
            myLibrary.splice(book.getAttribute('data-key'), 1);
            displayBook();
        });
        buttonStatus.addEventListener('click', (e) => {
            if(e.pointerId == -1) { // two events were triggered when only one click happended, so we need to get the one targeted to checkbox.
                myLibrary[book.getAttribute('data-key')].status = e.target.checked;
            }
        })
    })
}
const book = new Book('a', 'a', 123, true);
let myLibrary = [book];
displayBook();
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pageInput = document.querySelector('.page-input');
const statusInput = document.querySelector('.status-input');
const buttonAdd = document.querySelector('.sidebar button');
const buttonDel = document.querySelector('.delete');
buttonAdd.addEventListener('click', ()=>{
    addBookToLibrary(titleInput.value, authorInput.value, pageInput.value, statusInput.checked);
    displayBook();
})


