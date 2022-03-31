let myimages = document.getElementsByTagName("img");

for (i = 0; i < document.images.length; i++) {
  if (myimages[i].alt !== "") {
    myimages[i].alt = "Old";
  } else {
    myimages[i].alt = "Elzero New";
  }
}

console.log(document.body);
