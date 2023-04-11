import { transpileJSX } from "./jsx-pragma";
/** @jsx transpileJSX */

import { v4 as uuidv4 } from 'uuid';

interface Drawable {
  render: () => HTMLElement;
}

interface IMouseInteractive {
  onClick?: (e: MouseEvent) => void;
  onMouseDown?: (e: MouseEvent) => void;
  onMouseUp?: (e: MouseEvent) => void;
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
  onMouseMove?: (e: MouseEvent) => void;
}

export interface IComponent {
  id: string;
}

export interface ILabeledButton extends IComponent, IMouseInteractive {
  label:string;
}

export class LabeledButton implements ILabeledButton {
  label:string;
  // inherits from IComponent
  id:string;
  // inherits from IMouseInteractive
  onClick?: (e: MouseEvent) => void;
  onMouseDown?: (e: MouseEvent) => void;
  onMouseUp?: (e: MouseEvent) => void;
  onMouseEnter?: (e: MouseEvent) => void;
  onMouseLeave?: (e: MouseEvent) => void;
  onMouseMove?: (e: MouseEvent) => void;

  constructor(props:ILabeledButton){
    this.id = uuidv4();
    this.label = props.label;
    if (props.onClick) this.onClick = props.onClick;
    if (props.onMouseDown) this.onMouseDown = props.onMouseDown;
    if (props.onMouseUp) this.onMouseUp = props.onMouseUp;
    if (props.onMouseEnter) this.onMouseEnter = props.onMouseEnter;
    if (props.onMouseLeave) this.onMouseLeave = props.onMouseLeave;
    if (props.onMouseMove) this.onMouseMove = props.onMouseMove;
  }

  render():HTMLElement {
    let button = document.createElement("button");
    button.setAttribute("id",this.id);
    button.appendChild(document.createTextNode(this.label));
    if (this.onClick) button.addEventListener("click",this.onClick);
    if (this.onMouseDown) button.addEventListener("mousedown",this.onMouseDown);
    if (this.onMouseUp) button.addEventListener("mouseup",this.onMouseUp);
    if (this.onMouseEnter) button.addEventListener("mouseenter",this.onMouseEnter);
    if (this.onMouseLeave) button.addEventListener("mouseleave",this.onMouseLeave);
    if (this.onMouseMove) button.addEventListener("mousemove",this.onMouseMove);
    return button;
  }
}

export interface IDialogBox extends IComponent {
  title:string;
  prompt:string;
  onYes: (e: MouseEvent) => void;
  onNo: (e: MouseEvent) => void;
}

export class DialogBox implements IDialogBox {
  id:string;
  title:string;
  prompt:string;
  
  onYes: (e: MouseEvent) => void;
  onNo: (e: MouseEvent) => void;

  constructor(props:IDialogBox) {
    this.id = uuidv4();
    this.title = props.title;
    this.prompt = props.prompt;
    this.onYes = props.onYes;
    this.onNo = props.onNo;
  }

  handleOnYes = (e:MouseEvent) => {
    this.onYes(e);
  }

  handleOnNo = (e:MouseEvent) => {
    this.onNo(e);
  }

  render():HTMLElement {
    let elem = <div id={this.id}>
      <h1>{this.title}</h1>
      <div id='prompt'>{this.prompt}</div>
      <div id='buttons'>
        <button id='yes' onClick={this.handleOnYes}>Yes</button>
        <button id='no' onClick={this.handleOnNo}>No</button>
      </div>
    </div>
    return elem;
  }
}