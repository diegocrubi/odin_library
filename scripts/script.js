const myLibrary = [];

function Book(title, author){

    this.title = title;  
    this.author = author;  
    this.id = crypto.randomUUID();
    this.getBook = function(){
        return(
            `Title: ${title}
            Author: ${author}`
        ) 
    }

}

function addToLibrary(title, author){

    var book = new Book(title, author);

    myLibrary.push(book);


}

function createDisplay(myLibrary){

    const bodyElement = document.body;    
    bodyElement.appendChild(displayHeader());
    bodyElement.appendChild(displayLibrary(myLibrary)); 



}

function displayHeader(){
    
    // creating the form
    let container = document.createElement("div");
    container.classList.add("header");
    container.textContent = "Diego's Library";
    
    let btn = document.createElement("button");
    btn.textContent = "Add A Book";
    
    container.appendChild(btn);

    return(container);

}

function displayLibrary(myLibrary){
    //div and styling

    let container = document.createElement('div');
    container.classList.add("library-container");

    myLibrary.forEach(book => {
        container.appendChild(displayBookItem(book)); 
    }); 

    return(container);
}

function displayBookItem(book){

    let card = document.createElement('div');
    card.classList.add("book-card")
    card.dataset.identifier = book.id;
    // text content
    let title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;
    let author = document.createElement("p"); 
    author.textContent = `Author: ${book.title}`

    //add button
    let btn = document.createElement("button");
    btn.textContent = "Remove Book"
    btn.style.marginTop = "10px";
    
    card.appendChild(title);
    card.appendChild(author);

    card.appendChild(btn);
    return(card);

}


testLibrary = {
    books: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"], 
    authors: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"]
}

for(i = 0; i < testLibrary.books.length; i++){
    addToLibrary(
        testLibrary.books[i], 
        testLibrary.authors[i]
    )
}



createDisplay(myLibrary);