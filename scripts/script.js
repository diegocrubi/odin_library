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

    //body styling
    bodyElement.style.margin = "0";
    bodyElement.style.padding = "0";
    bodyElement.style.display = "flex";
    bodyElement.style.flexDirection = "column";
    bodyElement.style.alignItems = "center";

    
    bodyElement.appendChild(displayHeader());
    bodyElement.appendChild(displayLibrary(myLibrary)); 



}

function displayHeader(){
    //div and styling;
    // creating the form
    let x = document.createElement("div");
    x.textContent = "Diego's Library";
    x.style.backgroundColor = "lightgrey";

    return(x);

}

function displayLibrary(myLibrary){
    //div and styling

    let container = document.createElement('div');
    container.style.backgroundColor = "#b5a372"
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "20px";
    container.style.padding = "20px";

    myLibrary.forEach(book => {
        container.appendChild(displayBookItem(book)); 
    }); 

    return(container);
}

function displayBookItem(book){

    let card = document.createElement('div');
    //properties
    card.dataset.identifier = book.id;
    //styling
    card.style.backgroundColor = "grey";
    card.style.color = 'white';
    card.style.border = "2px solid black";
    card.style.borderRadius = "10px";
    // card dimensions
    card.style.width = '200px';
    card.style.minHeight = '150px';

    // text content
    let textDiv = document.createElement("div");
    textDiv.textContent = `Title: ${book.title}\nAuthor: ${book.author}`;
    textDiv.style.whiteSpace = "pre-wrap";

    card.appendChild(textDiv);

    //add button
    let btn = document.createElement("button");
    btn.textContent = "Remove Book"
    btn.style.marginTop = "10px";
    card.appendChild(btn);

    return(card);

}

addToLibrary("Harry Potter", "JK Rowling");
addToLibrary("The Hobbit", "JK Rowling");
addToLibrary("The Lion, The Witch and the Wardrobe", 
    author = "CS Lewis"
);

createDisplay(myLibrary);