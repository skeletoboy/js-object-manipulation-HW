const sculptureList = require('./data.js'); // import data.js

// console.log(sculptureList) // <---- comment out this line in your solution!

let counter = 0;
const sculptureListLengths = [];


for(const item of sculptureList){
    const list = {
        name: item.name.length,
        artist: item.artist.length,
        description: item.description.length,
        url: item.url.length,
        alt: item.alt.length
    };
    sculptureListLengths[counter] = (Object.assign({}, list));
    counter += 1;
    
}
// console.log(sculptureListLengths); 
// I don't understand how to make the sculptureListLengths print in a new line (the name,artist,ect would print in same line)
//This was the only other way I could think of to print them how the github has it formatted
for(const i of sculptureListLengths) {
    console.log("{")
    console.log("  name: " + i.name);
    console.log("  artist: " + i.artist);
    console.log("  description: " + i.description);
    console.log("  url: "+ i.url);
    console.log("  alt: " + i.alt);
    console.log( "}")

}
