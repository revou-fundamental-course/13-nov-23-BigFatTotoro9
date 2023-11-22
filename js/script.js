const submitButton = document.getElementsByClassName("primary-button");
// jangan pake class ntar kudu kasih urutan array
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const nameOutput = document.getElementById("username");

submitButton[0].addEventListener("click", function (event) {
  if (nameInput.value.length === 0 || emailInput.value.length === 0) {
    alert("nama atau email tidak boleh kosong");
  } else {
    // ini buat ngasih peringatan dibawah form
    nameOutput.textContent = nameInput.value;
  }
});

// nameInput.addEventListener("input", function (event) {
//   console.log(event);
// });
