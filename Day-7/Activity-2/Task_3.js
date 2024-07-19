var book=
{
    title:"Sham chi aai",
    author:"Sane Guruji",
    year:2018
}

book.fun=function (){
    return `${this.title} by ${this.author}`;
}

console.log(book.fun());