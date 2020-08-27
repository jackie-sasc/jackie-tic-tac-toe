var tdElements = document.getElementsByTagName ame('TD');


for(var tdElement of
 tdElements) {
  tdElement.
  addEventListner
  ('click', handleClick);
}

function handleClick() {
  alert('hello');
}