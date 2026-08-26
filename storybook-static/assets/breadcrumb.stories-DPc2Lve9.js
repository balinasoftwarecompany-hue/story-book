import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{H as t,K as n,Lt as r,Q as i,Zn as a,j as o,qn as s,tt as c}from"./angular-platform-BtkHVU7X.js";var l;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5odG1s=e((()=>{l=`<nav
  class="balina-breadcrumb"
  [class.breadcrumb-clickable]="clickable"
  [class.breadcrumb-disabled]="disabled"
  aria-label="Breadcrumb"
>

  @for (item of items; track $index) {

    <div class="breadcrumb-item">

      <span
        class="breadcrumb-label"
        (click)="onClick(item, $event)"
      >
        {{ item.label }}
      </span>

      @if (!$last) {

        <span
          class="breadcrumb-arrow"
          aria-hidden="true"
        >
          ›
        </span>

      }

    </div>

  }

</nav>`})))()}var u;function init_breadcrumb(){return(init_breadcrumb=e((()=>{u=`:host{--breadcrumb-width:100%;--breadcrumb-min-height:40px;--breadcrumb-gap:12px;--breadcrumb-padding:0;--breadcrumb-color:#111;--breadcrumb-current-color:#111;--breadcrumb-hover-color:#3478f6;--breadcrumb-arrow-color:#777;--breadcrumb-font-size:26px;--breadcrumb-font-weight:600;--breadcrumb-current-font-weight:700;--breadcrumb-line-height:1.3;--breadcrumb-arrow-size:30px;--breadcrumb-arrow-weight:400;--breadcrumb-font-family:Arial, Helvetica, sans-serif;width:var(--breadcrumb-width);min-height:var(--breadcrumb-min-height);box-sizing:border-box;display:block}.balina-breadcrumb{width:100%;min-height:var(--breadcrumb-min-height);box-sizing:border-box;align-items:center;gap:var(--breadcrumb-gap);padding:var(--breadcrumb-padding);color:var(--breadcrumb-color);font-family:var(--breadcrumb-font-family);font-size:var(--breadcrumb-font-size);font-weight:var(--breadcrumb-font-weight);line-height:var(--breadcrumb-line-height);flex-wrap:wrap;display:flex}.breadcrumb-item{align-items:center;gap:var(--breadcrumb-gap);white-space:nowrap;flex:none;display:flex}.breadcrumb-label{color:var(--breadcrumb-color);font-size:var(--breadcrumb-font-size);font-weight:var(--breadcrumb-font-weight);line-height:var(--breadcrumb-line-height);cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;transition:color .2s,opacity .2s;display:inline-flex}.breadcrumb-current{color:var(--breadcrumb-current-color);font-weight:var(--breadcrumb-current-font-weight);cursor:default}:host(.breadcrumb-clickable) .breadcrumb-label:not(.breadcrumb-current):hover{color:var(--breadcrumb-hover-color);opacity:.8}.breadcrumb-arrow{color:var(--breadcrumb-arrow-color);font-size:var(--breadcrumb-arrow-size);font-weight:var(--breadcrumb-arrow-weight);-webkit-user-select:none;user-select:none;flex:none;justify-content:center;align-items:center;line-height:1;display:flex}:host(:not(.breadcrumb-clickable)) .breadcrumb-label{cursor:default}:host(.breadcrumb-disabled){opacity:.55;pointer-events:none;cursor:not-allowed}@media (width<=768px){:host{--breadcrumb-font-size:21px;--breadcrumb-arrow-size:27px;--breadcrumb-gap:9px;--breadcrumb-min-height:36px}}@media (width<=480px){:host{--breadcrumb-font-size:18px;--breadcrumb-arrow-size:24px;--breadcrumb-gap:7px;--breadcrumb-min-height:32px}.balina-breadcrumb{scrollbar-width:thin;flex-wrap:nowrap;overflow:auto hidden}.breadcrumb-item{flex-shrink:0}}@media (width<=360px){:host{--breadcrumb-font-size:16px;--breadcrumb-arrow-size:21px;--breadcrumb-gap:5px}}`})))()}var d;function init_breadcrumb$1(){return(init_breadcrumb$1=e((()=>{a(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5odG1s(),init_breadcrumb(),o(),d=class Breadcrumb{items=[];customClass=``;clickable=!0;disabled=!1;get hostClasses(){return[this.customClass,this.clickable?`breadcrumb-clickable`:``,this.disabled?`breadcrumb-disabled`:``].filter(Boolean).join(` `)}clicked=new r;onClick(e,t){!this.clickable||this.disabled||this.clicked.emit({item:e,event:t})}static propDecorators={items:[{type:i}],customClass:[{type:i}],clickable:[{type:i}],disabled:[{type:i}],hostClasses:[{type:n,args:[`class`]}],clicked:[{type:c}]}},d=s([t({selector:`brb-breadcrumb`,standalone:!0,imports:[],template:l,styles:[u]})],d)})))()}var f,p,m,h,g,_,v;function init_breadcrumb_stories(){return(init_breadcrumb_stories=e((()=>{init_breadcrumb$1(),f={title:`Components/Breadcrumb`,component:d,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{items:{control:`object`,description:`Breadcrumb items displayed in order`},clickable:{control:`boolean`,description:`Allows breadcrumb items to be clicked`},disabled:{control:`boolean`,description:`Disables breadcrumb interaction`},customClass:{control:`text`,description:`Custom CSS class for developer styling`},clicked:{action:`clicked`,description:`Emitted when a breadcrumb item is clicked`}}},p={args:{items:[{label:`Dashboard`,url:`/dashboard`}],clickable:!0,disabled:!1,customClass:``}},m={args:{items:[{label:`Dashboard`,url:`/dashboard`},{label:`Flight Leg`,url:`/flight-leg`},{label:`Flight Details`,url:`/flight-details`}],clickable:!0,disabled:!1,customClass:``}},h={args:{items:[{label:`Dashboard`,url:`/dashboard`},{label:`Flight Leg`,url:`/flight-leg`}],clickable:!0,disabled:!0,customClass:``}},g={args:{items:[{label:`Dashboard`},{label:`Flight Leg`}],clickable:!1,disabled:!1,customClass:``}},_={args:{items:[{label:`Dashboard`,url:`/dashboard`},{label:`Flight Leg`,url:`/flight-leg`}],clickable:!0,disabled:!1,customClass:`custom-breadcrumb`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      url: '/dashboard'
    }],
    clickable: true,
    disabled: false,
    customClass: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      url: '/dashboard'
    }, {
      label: 'Flight Leg',
      url: '/flight-leg'
    }, {
      label: 'Flight Details',
      url: '/flight-details'
    }],
    clickable: true,
    disabled: false,
    customClass: ''
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      url: '/dashboard'
    }, {
      label: 'Flight Leg',
      url: '/flight-leg'
    }],
    clickable: true,
    disabled: true,
    customClass: ''
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard'
    }, {
      label: 'Flight Leg'
    }],
    clickable: false,
    disabled: false,
    customClass: ''
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      url: '/dashboard'
    }, {
      label: 'Flight Leg',
      url: '/flight-leg'
    }],
    clickable: true,
    disabled: false,
    customClass: 'custom-breadcrumb'
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`MultipleLevels`,`Disabled`,`NotClickable`,`CustomStyle`]})))()}init_breadcrumb_stories();export{_ as CustomStyle,p as Default,h as Disabled,m as MultipleLevels,g as NotClickable,v as __namedExportsOrder,f as default};