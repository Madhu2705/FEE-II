
const profileName = document.querySelector("#profile-name");
const profileBio = document.querySelector("#profile-bio");
const profilePic = document.querySelector("#profile-pic");

const nameInput = document.querySelector("#name-input");
const bioInput = document.querySelector("#bio-input");
const picInput = document.querySelector("#pic-input");
const updateButton = document.querySelector("#update-button");
updateButton.addEventListener("click", () => {
 
  if (nameInput.value !== "") {
    profileName.innerText = nameInput.value;
  }

  
  if (bioInput.value !== "") {
    profileBio.textContent = bioInput.value;
  }

  
  if (picInput.value !== "") {
    profilePic.setAttribute("src", picInput.value);
  }

 
  nameInput.value = "";
  bioInput.value = "";
  picInput.value = "";
});