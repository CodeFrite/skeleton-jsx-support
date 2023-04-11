import { LabeledButton, DialogBox } from "./src/components";
import { transpileJSX } from "./src/jsx-pragma";
/** @jsx transpileJSX */

const handleOnMouseMove = e => {
  console.log("mouse move");
};
let title=<h1 id="title">Hello, World!</h1>;
let article=<div id="Article">
  <h1 id="title">{title}</h1>
  <h2 id="author">codefrite</h2>
  <div id="text" onmousemove={handleOnMouseMove}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolores est mollitia ad praesentium vero. Quidem quos eligendi officiis numquam dicta! Natus tenetur, possimus quia doloribus consequuntur cum ullam facilis?
  </div>
  <a href="https://www.google.com"></a>
</div>
document.body.appendChild(article);

let lbutton=<LabeledButton id="button1" label="Click Me" onClick={e => console.log("clicked")}/>;
document.body.appendChild(lbutton);

let dialogBox = <DialogBox id="dialogBox1" title="Dialog Box" prompt="Are you sure?" onYes={console.log} onNo={console.log}/>;
document.body.appendChild(dialogBox);