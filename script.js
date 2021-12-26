const library = document.querySelector('.container');


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.info = function() {
    if(this.status === 1)
        console.log("You have read it!");
    else if(this.status === 0) 
        console.log("You have NOT read it");
}

function addBookToLibrary(title, author, pages, inputStatus) {
    let status = 0; // 0 represents NO
    if(inputStatus === null) {
        alert("input ERROR!");
        return Error;
    }
    if(inputStatus.toLowerCase() === 'yes' || inputStatus.toLowerCase() === 'y' || inputStatus.toLowerCase() === '1')
        status = 1;
    else if(inputStatus.toLowerCase() !== 'no' && inputStatus.toLowerCase() !== 'n' && inputStatus.toLowerCase() !== '0'){
        alert("input ERROR!");
        return Error;
    }
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}

function displayBook() {
    library.innerHTML = '';
    myLibrary.forEach(bookInLib => {
        const book = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const status = document.createElement('div');
        book.classList.add('card');
        title.textContent = bookInLib.title;
        title.classList.add('title');
        author.textContent = bookInLib.author;
        author.classList.add('author');
        pages.textContent = bookInLib.pages;
        pages.classList.add('pages');
        status.textContent = bookInLib.status;
        status.classList.add('status');
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(status);
        library.appendChild(book);
    })
}

let myLibrary = [];
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pageInput = document.querySelector('.page-input');
const statusInput = document.querySelector('.status-input');
const buttonAdd = document.querySelector('.sidebar button');
buttonAdd.addEventListener('click', ()=>{
    addBookToLibrary(titleInput.value, authorInput.value, pageInput.value, statusInput.value);
    displayBook();
})
