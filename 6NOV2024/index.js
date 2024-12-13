// creating our own html elements with help Javascript .

const headingTwo = document.createElement('h2'); // create our own Tag using by createELement function
console.log("created headingTwo element ",headingTwo);
headingTwo.innerHTML = "Created our own H2 Element by JS "; // provide some content should display on webpage for this element using by innerHTML 
const bodyELement = document.querySelector('body'); // selecting the element using queryselectorfunction and pass the element as argument
bodyELement.appendChild(headingTwo); // append the child with parent with help of appendchild function and pass child element as argument.
headingTwo.style.color = "orange";
headingTwo.style.fontFamily = "sans-serif";
const boldELement = document.createElement('b');
boldELement.innerHTML = "This is Bold Text";
const rootElement = document.getElementById('root');
rootElement.appendChild(boldELement);

const kids = bodyELement.children;

console.log("children", kids);

console.log("First child ", bodyELement.firstElementChild); // in order to get the first element child property we can use firstelementchild

console.log("last child ", bodyELement.lastElementChild); // in order to get the last element child property we can use lastelementchild

