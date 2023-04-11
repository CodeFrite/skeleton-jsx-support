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

export const transpileJSX = (type,props,...children:Array<HTMLElement>) => {
  console.log(type,props,children);
  console.log(typeof(type)); 
  let elem:any;
  if (typeof type === 'function'){
    elem = new type(props,children);
    return elem.render();
  } else if (typeof type === 'string'){
    elem = document.createElement(type);
  }

  // add props
  if (props){
    for (let key in props){
      if (key.substring(0,2) !== "on"){
        elem.setAttribute(key,props[key]);
      } else {  
        elem.addEventListener(key.substring(2).toLowerCase(),props[key]);
      }
    }
  }

  // add children
  appendChild(elem,children);
  return elem;
}

export const jsx = transpileJSX;