/** @jsx shakaJsx */

const shakaJsx = (type, props, ...children) => {
  let elem=document.createElement(type);
  return elem
}

const addChild = (parent:HTMLElement, child:HTMLElement) => {
  parent.appendChild(child);
  console.log(`+append child ${child} inside parent ${parent}`);
}

const mireba = document.getElementById('mireba');
const elem=<h1>Hello, World!</h1>
if (mireba){
  addChild(mireba, elem);
}