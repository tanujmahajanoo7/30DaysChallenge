var book=
{
    title:"Sham chi aai",
    author:"Sane Guruji",
    year:2018,

    updateyear:function(newyear)
    {
        this.year=newyear;
    }
};


book.updateyear(2020);
console.log(book.title);
console.log(book.author);
console.log(book.year);