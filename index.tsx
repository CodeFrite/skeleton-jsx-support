/** @jsx transpileJSX */
const add = (parent, child) => {
  parent.appendChild(child?.nodeType ? child : document.createTextNode(child));
};

const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else {
    add(parent, child);
  }
};

const transpileJSX = (type:string,props,...children:Array<HTMLElement>) => {
  console.log(type,props,children);
  
  let elem = document.createElement(type);
  // add props
  if (props){
    for (let key in props){
      elem.setAttribute(key,props[key]);
    }
  }

  // add children
  appendChild(elem,children);
  return elem;
}
let article=<div id="Article">
  <h1 id="title">Hello, World!</h1>
  <h2 id="author">codefrite</h2>
  <div id="text">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores est mollitia ad praesentium vero. Quidem quos eligendi officiis numquam dicta! Natus tenetur, possimus quia doloribus consequuntur cum ullam facilis?
  </div>
  <a href="https://www.google.com"></a>
</div>
document.body.appendChild(article);