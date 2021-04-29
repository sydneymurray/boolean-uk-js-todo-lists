/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

//alert("users: ", users);

// alert("todos: ", todos);

let userDetails = ""
for (const user of users) {
  userDetails += "User"+user.id + " is " + user.name + " from " + user.address.city +"\n"    
}
alert(userDetails)

inputId = prompt("What is your user ID?")
let toBeDone = ""
for (const activity of todos) {
  if (activity.userId===Number(inputId))
    toBeDone += activity.title + "\n"      
}
alert(`You have the following titles to read \n${toBeDone}`)

// alert(users[1]["name"])

