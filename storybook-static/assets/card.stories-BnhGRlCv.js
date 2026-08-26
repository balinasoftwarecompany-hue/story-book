import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{H as t,K as n,Lt as r,Q as i,Zn as a,j as o,qn as s,tt as c}from"./angular-platform-BtkHVU7X.js";var l;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2NhcmQvY2FyZC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2NhcmQvY2FyZC5odG1s=e((()=>{l=`<div class="balina-card"
  (click)="onClick($event)">


  <h2 class="card-title">
    {{ title }}
  </h2>


  <div class="card-content">

    <div class="card-date">

      <div class="card-month">
        {{ month }}
      </div>

      <div class="card-line"></div>

      <div class="card-day">
        {{ day }}
      </div>

    </div>


    <div class="card-description">

      {{ description }}

    </div>

  </div>

</div>`})))()}var u;function init_card(){return(init_card=e((()=>{u=`:host{--card-width:100%;--card-height:280px;--card-padding:28px;--card-background:#fff;--card-border:3px solid #ddd;--card-radius:12px;--card-title-color:#000;--card-description-color:#222;--card-date-background:#eef5ff;--card-month-color:#2962ff;--card-day-color:#000;--card-line-color:#b7b7b7;--card-title-size:38px;--card-description-size:20px;--card-month-size:24px;--card-day-size:24px;--card-font-family:Arial, Helvetica, sans-serif;--card-font-weight:600;--card-hover-shadow:0 4px 12px #00000014;--card-hover-transform:translateY(-1px);--card-disabled-background:#f5f5f5;--card-disabled-border:#d0d0d0;--card-disabled-text:#999}:host .balina-card{width:var(--card-width);min-height:var(--card-height);box-sizing:border-box;padding:var(--card-padding);background:var(--card-background);border:var(--card-border);border-radius:var(--card-radius);font-family:var(--card-font-family);font-weight:var(--card-font-weight);transition:box-shadow .2s,transform .2s,background-color .2s,border-color .2s}:host(.card-clickable) .balina-card{cursor:pointer}:host(:not(.card-clickable)) .balina-card{cursor:default}:host(.card-clickable) .balina-card:hover{box-shadow:var(--card-hover-shadow);transform:var(--card-hover-transform)}:host(.card-clickable) .balina-card:active{transform:translateY(0)}:host .card-title{color:var(--card-title-color);font-size:var(--card-title-size);margin:0;font-weight:700;line-height:1.2}:host .card-content{align-items:center;gap:28px;margin-top:36px;display:flex}:host .card-date{box-sizing:border-box;background:var(--card-date-background);border-radius:10px;flex-direction:column;flex-shrink:0;justify-content:center;align-items:center;width:92px;height:96px;padding:8px;display:flex}:host .card-month{color:var(--card-month-color);font-size:var(--card-month-size);font-weight:700;line-height:1}:host .card-line{background:var(--card-line-color);width:80%;height:2px;margin:7px 0}:host .card-day{color:var(--card-day-color);font-size:var(--card-day-size);font-weight:600;line-height:1}:host .card-description{color:var(--card-description-color);font-size:var(--card-description-size);flex:1;font-weight:600;line-height:1.4}:host(.card-disabled) .balina-card{background:var(--card-disabled-background);border-color:var(--card-disabled-border);color:var(--card-disabled-text);cursor:not-allowed;box-shadow:none;transform:none}:host(.card-disabled) .balina-card:hover{box-shadow:none;transform:none}:host(.card-disabled) .balina-card .card-title,:host(.card-disabled) .balina-card .card-description{color:var(--card-disabled-text)}@media (width<=768px){:host .balina-card{--card-title-size:30px;--card-description-size:17px;--card-height:auto;padding:22px}:host .card-content{gap:18px;margin-top:28px}:host .card-date{width:80px;height:88px}}@media (width<=480px){:host .balina-card{--card-title-size:26px;--card-description-size:15px;padding:18px}:host .card-content{align-items:flex-start;gap:14px}:host .card-date{width:70px;height:80px}:host .card-month,:host .card-day{font-size:20px}}`})))()}var d;function init_card$1(){return(init_card$1=e((()=>{a(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2NhcmQvY2FyZC5odG1s(),init_card(),o(),d=class Card{title=``;month=``;day=``;description=``;customClass=``;clickable=!0;disabled=!1;get hostClasses(){return[this.customClass,this.clickable?`card-clickable`:``,this.disabled?`card-disabled`:``].filter(Boolean).join(` `)}cardClick=new r;clicked=new r;onClick(e){if(!this.clickable||this.disabled){e.preventDefault(),e.stopPropagation();return}this.clicked.emit(e),this.cardClick.emit()}static propDecorators={title:[{type:i}],month:[{type:i}],day:[{type:i}],description:[{type:i}],customClass:[{type:i}],clickable:[{type:i}],disabled:[{type:i}],hostClasses:[{type:n,args:[`class`]}],cardClick:[{type:c}],clicked:[{type:c}]}},d=s([t({selector:`brb-card`,standalone:!0,imports:[],template:l,styles:[u]})],d)})))()}var f,p,m,h;function init_card_stories(){return(init_card_stories=e((()=>{init_card$1(),f={title:`Components/Card`,component:d,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{title:{control:`text`},month:{control:`text`},day:{control:`text`},description:{control:`text`},cardClick:{action:`cardClick`}}},p={args:{title:`Last 24 hours`,month:`Jul`,day:9,description:`156 flights were monitored with 96.8% on-time performance. Minor delays occurred due to weather and air traffic.`,customClass:``,clickable:!0,disabled:!1}},m={args:{title:`Last 7 days`,month:`Aug`,day:18,description:`1,245 flights were monitored with 97.4% on-time performance. Minor delays occurred due to weather and air traffic.`,customClass:``,clickable:!0,disabled:!1}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Last 24 hours',
    month: 'Jul',
    day: 9,
    description: '156 flights were monitored with 96.8% on-time performance. Minor delays occurred due to weather and air traffic.',
    customClass: '',
    clickable: true,
    disabled: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Last 7 days',
    month: 'Aug',
    day: 18,
    description: '1,245 flights were monitored with 97.4% on-time performance. Minor delays occurred due to weather and air traffic.',
    customClass: '',
    clickable: true,
    disabled: false
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`CustomData`]})))()}init_card_stories();export{m as CustomData,p as Default,h as __namedExportsOrder,f as default};