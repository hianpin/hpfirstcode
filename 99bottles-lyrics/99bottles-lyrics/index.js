console.log('Hello World !');

for(var i=99;i>1;i--){
    console.log(i+ " bottles of beer on the wall," +i+" bottles of beer.")
    console.log("Take one down and pass it around," +(i-1)+" bottles of beer on the wall.<br>")
};

console.log("1 bottle of beer on the wall, 1 bottle of beer.");
console.log("Take one down and pass it around, no more bottles of beer on the wall.");
console.log('No more bottles of beer on the wall, no more bottles of beer.');
console.log('Go to the store and buy some more, 99 bottles of beer on the wall.')

document.getElementById('mylyrics').innerHTML = result;