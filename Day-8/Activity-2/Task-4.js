var obj={
    title:"Hmlo",
    author:"semin martis"
}

const {title,author} = obj;

console.log(title);
console.log(author);

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};

const { enemies = ['Joker'] } = hero;

console.log(enemies);     // => ['Joker']


// hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
// };

// const { realName: secretName } = hero;

// console.log(secretName); // => 'Bruce Wayne'