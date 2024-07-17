function greet(day) { 
    return `Today is the ${day} day of our challenge `; 
} 
  
function greet_name(greeting, message, day) { 
    console.log(`${greeting(day)}${message}`); 
} 
  
greet_name(greet, 'your Welcome in this challenge', 5);