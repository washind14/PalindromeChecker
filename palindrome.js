const input = document.getElementById("input")

function reverseString(str) {

}

function check() {
  const value = input.value;

  if (!value) {
    alert("Please enter text!");
  } else if (value.split('').reverse().join("") === value){
    alert("This is a palindrome")
  } else {
    alert("Not a palindrome!")
  }
 
}