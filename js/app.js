let poemStanza = ["Apples are Red,", "The sky is Blue,", "On this day of coding,", "A poem for you!"];

console.log("A Poem Through Coding:");

for (poem of poemStanza) {   
    console.log(poem);

    if (poem === "A poem for you!"){
        console.log("Well well well, I'm a poet and I didn't even know it! \(Ok ok, I'll just stick to the coding haha!\)")
        break;
        
    } else {
        console.log("(Not at the end just yet!)")
        }
}


