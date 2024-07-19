var book = {
    title: "Santrosa",
    year: 1999,
    
    res: function() {
        return this.title;
    }
};

console.log("Keys:");
Object.keys(book).forEach(key => {
    console.log(key);
});

console.log("Values:");
Object.values(book).forEach(value => {
    console.log(value);
});
