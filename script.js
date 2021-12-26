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

function addBookToLibrary() {
    const title = prompt(`What's the title of the book?`);
    const author = prompt(`What's the author of the book?`);
    const pages = prompt(`What's the pages of the book?`);
    const inputStatus = prompt(`Have you read it yet?`);
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
    const library = document.querySelector('.container');
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

const book1 = new Book('the odin', 'me', 100, 0);
const book2 = new Book('the odin', 'me', 100, 0);
const book3 = new Book('the odin', 'me', 100, 0);
const book4 = new Book('the odin', 'me', 100, 0);
const book5 = new Book('the odin', 'me', 100, 0);
const book6 = new Book('the odin', 'me', 100, 0);
let myLibrary = [book1, book2, book3, book4, book5, book6];
displayBook();