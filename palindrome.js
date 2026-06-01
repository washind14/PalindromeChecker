const input = document.getElementById("input")

function check() {
  const value = input.value;
  // alert(value)

  if (value.split('').reverse().join("") === value) {
    alert("This is a palindrome");
  } else {
    alert("Not a palindrome!")
  }
 
}