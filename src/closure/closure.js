function greeting(){
    let username = 'Eduardo';
    function displayUserName(){
        return `Hello ${username}`;
    }
    return displayUserName;
}
const g = greeting();
console.log(typeof(g));
console.log(typeof(g()));
console.log(g);
console.log(g());