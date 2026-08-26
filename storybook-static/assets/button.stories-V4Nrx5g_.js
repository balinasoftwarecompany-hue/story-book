import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{H as t,K as n,Lt as r,Q as i,Zn as a,j as o,qn as s,tt as c}from"./angular-platform-BtkHVU7X.js";var l;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbi9idXR0b24uaHRtbA(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbi9idXR0b24uaHRtbA=e((()=>{l=`<button class="balina-button" [type]="type" [disabled]="
    disabled ||
    loading ||
    !clickable
  " [attr.aria-disabled]="
    disabled ||
    loading ||
    !clickable
  " [attr.aria-busy]="loading" (click)="onClick($event)">


  @if (loading) {

  <span class="button-spinner" aria-hidden="true"></span>

  <span class="button-loading-text">
    Loading...
  </span>

  }
  @else {

  <span class="button-label">
    {{ label }}
  </span>

  }

</button>`})))()}var u;function init_button(){return(init_button=e((()=>{u=`:host{--button-width:auto;--button-height:44px;--button-padding:0 22px;--button-background:#68479b;--button-background-hover:#593b84;--button-background-active:#4b326f;--button-text-color:#fff;--button-border:1px solid #68479b;--button-radius:6px;--button-font-family:Arial, Helvetica, sans-serif;--button-font-size:14px;--button-font-weight:600;--button-gap:8px;--button-shadow:0 2px 5px #00000014;--button-disabled-background:#ddd;--button-disabled-text:#999;--button-disabled-border:#ddd;--button-focus-ring:#68479b33;--button-spinner-size:16px;--button-spinner-border:2px;width:var(--button-width);box-sizing:border-box;font-family:var(--button-font-family);display:inline-block}.balina-button{width:100%;min-height:var(--button-height);padding:var(--button-padding);justify-content:center;align-items:center;gap:var(--button-gap);box-sizing:border-box;border:var(--button-border);border-radius:var(--button-radius);background:var(--button-background);color:var(--button-text-color);font-family:var(--button-font-family);font-size:var(--button-font-size);font-weight:var(--button-font-weight);box-shadow:var(--button-shadow);cursor:pointer;-webkit-user-select:none;user-select:none;white-space:nowrap;outline:none;line-height:1;transition:background-color .2s,border-color .2s,box-shadow .2s,transform .1s,color .2s;display:inline-flex}:host(.button-clickable) .balina-button{cursor:pointer}:host(:not(.button-clickable)) .balina-button{cursor:default}:host(.button-clickable) .balina-button:hover{background:var(--button-background-hover)}:host(.button-clickable) .balina-button:active{background:var(--button-background-active);transform:translateY(1px)}.balina-button:focus-visible{box-shadow:0 0 0 3px var(--button-focus-ring)}:host(.button-disabled) .balina-button{background:var(--button-disabled-background);color:var(--button-disabled-text);border-color:var(--button-disabled-border);cursor:not-allowed;box-shadow:none;transform:none}.balina-button[aria-busy=true]{cursor:wait}.button-label{text-overflow:ellipsis;white-space:nowrap;justify-content:center;align-items:center;display:inline-flex;overflow:hidden}.button-loading-text{white-space:nowrap;justify-content:center;align-items:center;display:inline-flex}.button-spinner{width:var(--button-spinner-size);height:var(--button-spinner-size);box-sizing:border-box;border:var(--button-spinner-border) solid #fff6;border-top-color:var(--button-text-color);border-radius:50%;flex:none;animation:.7s linear infinite button-spin}@keyframes button-spin{to{transform:rotate(360deg)}}@media (width<=768px){:host{width:var(--button-width)}.balina-button{min-height:var(--button-height);font-size:var(--button-font-size)}}`})))()}var d;function init_button$1(){return(init_button$1=e((()=>{a(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbi9idXR0b24uaHRtbA(),init_button(),o(),d=class Button{label=``;type=`button`;disabled=!1;loading=!1;clickable=!0;customClass=``;get buttonClickable(){return this.clickable&&!this.disabled&&!this.loading}get buttonDisabled(){return this.disabled||this.loading}clicked=new r;onClick(e){if(this.disabled||this.loading||!this.clickable){e.preventDefault(),e.stopPropagation();return}this.clicked.emit(e)}static propDecorators={label:[{type:i}],type:[{type:i}],disabled:[{type:i}],loading:[{type:i}],clickable:[{type:i}],customClass:[{type:i},{type:n,args:[`class`]}],buttonClickable:[{type:n,args:[`class.button-clickable`]}],buttonDisabled:[{type:n,args:[`class.button-disabled`]}],clicked:[{type:c}]}},d=s([t({selector:`brb-button`,standalone:!0,imports:[],template:l,styles:[u]})],d)})))()}var f,p,m,h,g,_,v,y;function init_button_stories(){return(init_button_stories=e((()=>{init_button$1(),f={title:`Balina UI/Button`,component:d,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`Text displayed inside the button.`},type:{control:`select`,options:[`button`,`submit`,`reset`]},disabled:{control:`boolean`},loading:{control:`boolean`},clickable:{control:`boolean`,description:`Controls whether the button can be clicked.`},customClass:{control:`text`,description:`Developer custom CSS class.`},clicked:{action:`clicked`,description:`Emitted when the button is clicked.`}}},p={args:{label:`Button`,type:`button`,disabled:!1,loading:!1,clickable:!0,customClass:``}},m={args:{label:`Submit`,type:`submit`,disabled:!1,loading:!1,clickable:!0,customClass:``}},h={args:{label:`Not Clickable`,type:`button`,disabled:!1,loading:!1,clickable:!1,customClass:``}},g={args:{label:`Submit`,type:`button`,disabled:!1,loading:!0,clickable:!0,customClass:``}},_={args:{label:`Disabled`,type:`button`,disabled:!0,loading:!1,clickable:!0,customClass:``}},v={args:{label:`Custom Button`,type:`button`,disabled:!1,loading:!1,clickable:!0,customClass:`custom-balina-button`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    type: 'button',
    disabled: false,
    loading: false,
    clickable: true,
    customClass: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Submit',
    type: 'submit',
    disabled: false,
    loading: false,
    clickable: true,
    customClass: ''
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Not Clickable',
    type: 'button',
    disabled: false,
    loading: false,
    clickable: false,
    customClass: ''
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Submit',
    type: 'button',
    disabled: false,
    loading: true,
    clickable: true,
    customClass: ''
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    type: 'button',
    disabled: true,
    loading: false,
    clickable: true,
    customClass: ''
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Button',
    type: 'button',
    disabled: false,
    loading: false,
    clickable: true,
    customClass: 'custom-balina-button'
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Primary`,`NotClickable`,`Loading`,`Disabled`,`CustomStyle`]})))()}init_button_stories();export{v as CustomStyle,p as Default,_ as Disabled,g as Loading,h as NotClickable,m as Primary,y as __namedExportsOrder,f as default};