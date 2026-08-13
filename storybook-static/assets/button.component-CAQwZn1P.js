import{i as e}from"./preload-helper-CWn0lyrb.js";import{J as t,O as n,Ot as r,Qn as i,Z as a,Zn as o,f as s,p as c,z as l}from"./angular-platform-BAlEzuMa.js";var u,d=e((()=>{u=`.storybook-button{cursor:pointer;border:0;border-radius:3em;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;line-height:1;display:inline-block}.storybook-button--primary{color:#fff;background-color:#555ab9}.storybook-button--secondary{color:#333;background-color:#0000;box-shadow:inset 0 0 0 1px #00000026}.storybook-button--small{padding:10px 16px;font-size:12px}.storybook-button--medium{padding:11px 20px;font-size:14px}.storybook-button--large{padding:12px 24px;font-size:16px}`})),f,p=e((()=>{i(),d(),s(),n(),f=class ButtonComponent{primary=!1;backgroundColor;size=`medium`;label=`Button`;onClick=new r;get classes(){let e=this.primary?`storybook-button--primary`:`storybook-button--secondary`;return[`storybook-button`,`storybook-button--${this.size}`,e]}static propDecorators={primary:[{type:t}],backgroundColor:[{type:t}],size:[{type:t}],label:[{type:t}],onClick:[{type:a}]}},f=o([l({selector:`storybook-button`,standalone:!0,imports:[c],template:`
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >
      {{ label }}
    </button>
  `,styles:[u]})],f)}));export{p as n,f as t};