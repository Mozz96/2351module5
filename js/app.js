let poemStanza = ["Apples are Red,", "The sky is Blue,", "On this day of coding,", "A poem for you!"];

console.log("A Poem Through Coding:");

let i = 106;
let text = ""


for (poem of poemStanza) {   
    console.log(poem);

    if (poem === "A poem for you!"){
        console.log("Well well well, I'm a poet and I didn't even know it! \(Ok ok, I'll just stick to the coding haha!\)")
        break;
        
    } else{
        console.log("Not at the end just yet! \(Not that you'd want it to be done of course, right?\)")
    }
}

console.log("Now, watch me go from 106 to 96!");

while (i > 96){
    i--;
    
    if(i = 96){
        console.log("The number is now 96, like 1996 my birth year!")
        break;
    }
}

