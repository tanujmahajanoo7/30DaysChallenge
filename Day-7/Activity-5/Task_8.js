var book = {
    title: "Santrosa",
    year: 1999,
    
    res: function() {
        return this.title;
    }
};

for (var prop in book) {
    if (book.hasOwnProperty(prop)) {
        console.log(`${prop}: ---- ${book[prop]}`);
    }
}
console.log(`${book.res()}`);
