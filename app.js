//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".email");

// 1. Then

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((respone) => {
    return respone.json();
  })
  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email
  });
