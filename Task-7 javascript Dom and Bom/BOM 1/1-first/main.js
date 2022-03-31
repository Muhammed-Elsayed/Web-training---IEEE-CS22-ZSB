let myprompt = prompt("enter: ");
mylist = myprompt.split("-");
console.log(mylist);

for (i = mylist[0]; i <= mylist[1]; i++) {
  console.log(i);
}
