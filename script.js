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
    library.innerHTML = ''; //clear the existed book on the page
    myLibrary.forEach((bookInLib, index) => {
        const book = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const status = document.createElement('div');
        const buttonDel = document.createElement('input');
        book.classList.add('card');
        book.setAttribute('data-key', `${index}`);
        title.textContent = bookInLib.title;
        title.classList.add('title');
        author.textContent = 'author: ' + bookInLib.author;
        author.classList.add('author');
        pages.textContent = 'pages: ' + bookInLib.pages;
        pages.classList.add('pages');
        status.textContent = 'status: ' + bookInLib.status;
        status.classList.add('status');
        buttonDel.type = 'image';
        buttonDel.src = 'img/bin.png';
        buttonDel.classList.add('delete');
        book.appendChild(buttonDel);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(status);
        library.appendChild(book);
        buttonDel.addEventListener('click', () => {
            myLibrary.splice(book.getAttribute('data-key'), 1);
            displayBook();
        })        
    })
}
const book = new Book('a', 'a', 123, 'yes');
let myLibrary = [book];
displayBook();
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const pageInput = document.querySelector('.page-input');
const statusInput = document.querySelector('.status-input');
const buttonAdd = document.querySelector('.sidebar button');
const buttonDel = document.querySelector('.delete');
buttonAdd.addEventListener('click', ()=>{
    addBookToLibrary(titleInput.value, authorInput.value, pageInput.value, statusInput.value);
    displayBook();
})

