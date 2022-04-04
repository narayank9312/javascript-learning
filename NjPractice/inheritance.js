let arr = ["navneet","himanshu"];

let object = {
    name: "Akshay",
    city: "Dehradun",
    getIntro: function(){
        console.log(this.name  + "from"+ this.city)
    }
}

let object2 = {
    name: "navneet"
}

// never do this 
 object2.__proto__ = object