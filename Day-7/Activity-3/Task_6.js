
let book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

let book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

let library = {
    name: "City Library",
    books: [book1, book2],

    logLibraryDetails: function() {
        console.log(`Library Name: ${this.name}`);
        console.log("Book Titles:");
        this.books.forEach(book => {
            console.log(book.title);
        });
    }
};

library.logLibraryDetails();
