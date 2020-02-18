// Your code goes here


document.addEventListener("DOMContentLoaded", function() {
  function textChange() {
    let text = document.querySelector('#text');
    text.innerHTML = "This is really cool!";
  };
  textChange();
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
