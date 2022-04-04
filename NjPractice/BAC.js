// event bubbling and capturing aka trickling

document.querySelector("#grandparent").addEventListener('click',()=>{
    console.log("Grandparent Clicked");
},false) //capturing


document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("Parent Clicked");
    e.stopPropagation(); // stop propogation
},false) // bubling

document.querySelector("#child").addEventListener('click',()=>{
    console.log("child Clicked");
},false) //capturing 


// first capturing happened then bubbling

// false bubbling
// true capturing