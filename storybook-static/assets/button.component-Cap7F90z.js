import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{H as t,Lt as n,Q as r,Zn as i,g as a,h as o,j as s,qn as c,tt as l}from"./angular-platform-BtkHVU7X.js";var u;function init_button(){return(init_button=e((()=>{u=`.storybook-button{cursor:pointer;border:0;border-radius:3em;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;line-height:1;display:inline-block}.storybook-button--primary{color:#fff;background-color:#555ab9}.storybook-button--secondary{color:#333;background-color:#0000;box-shadow:inset 0 0 0 1px #00000026}.storybook-button--small{padding:10px 16px;font-size:12px}.storybook-button--medium{padding:11px 20px;font-size:14px}.storybook-button--large{padding:12px 24px;font-size:16px}`})))()}var d;function init_button_component(){return(init_button_component=e((()=>{i(),init_button(),o(),s(),d=class ButtonComponent{primary=!1;backgroundColor;size=`medium`;label=`Button`;onClick=new n;get classes(){let e=this.primary?`storybook-button--primary`:`storybook-button--secondary`;return[`storybook-button`,`storybook-button--${this.size}`,e]}static propDecorators={primary:[{type:r}],backgroundColor:[{type:r}],size:[{type:r}],label:[{type:r}],onClick:[{type:l}]}},d=c([t({selector:`storybook-button`,standalone:!0,imports:[a],template:`
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >
      {{ label }}
    </button>
  `,styles:[u]})],d)})))()}export{init_button_component as n,d as t};