import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{H as t,K as n,Lt as r,Q as i,Zn as a,j as o,qn as s,tt as c}from"./angular-platform-BtkHVU7X.js";var l;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2ZsaWdodC1jYXJkL2ZsaWdodC1jYXJkLmh0bWw(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2ZsaWdodC1jYXJkL2ZsaWdodC1jYXJkLmh0bWw=e((()=>{l=`<div class="flight-card" [class.card-clickable]="clickable" [class.card-disabled]="disabled"
    (click)="onClick($event)">

    <div class="flight-header">

        <div class="flight-icon">
            ✈
        </div>

        <h2 class="flight-title">
            Flight : {{ flightNumber }}
        </h2>

    </div>

    <div class="flight-info">

        <div class="flight-route">
            {{ route }}
        </div>

        <div class="flight-date">
            {{ date }}
        </div>

        <div class="flight-air-time">
            Air Time&nbsp; : &nbsp;{{ airTime }}
        </div>

    </div>


    <div class="flight-divider"></div>

    <div class="flight-description">
        {{ description }}
    </div>

</div>`})))()}var u;function init_flight_card(){return(init_flight_card=e((()=>{u=`:host{--flight-card-width:100%;--flight-card-min-height:420px;--flight-card-max-width:none;--flight-card-padding:35px 40px;--flight-header-gap:20px;--flight-info-gap:20px;--flight-description-gap:28px;--flight-title-info-gap:40px;--flight-card-background:#fff;--flight-card-border:2px solid #d9d9d9;--flight-card-text:#111;--flight-card-icon:#3478f6;--flight-card-divider:#eee;--flight-card-radius:12px;--flight-title-size:30px;--flight-title-weight:700;--flight-title-line-height:1.2;--flight-route-size:25px;--flight-route-weight:500;--flight-date-size:23px;--flight-date-weight:500;--flight-air-time-size:23px;--flight-air-time-weight:500;--flight-description-size:18px;--flight-description-weight:400;--flight-description-line-height:1.5;--flight-icon-size:40px;--flight-divider-height:4px;--flight-font-family:Arial, Helvetica, sans-serif;width:var(--flight-card-width);max-width:var(--flight-card-max-width);box-sizing:border-box;display:block}.flight-card{width:100%;min-height:var(--flight-card-min-height);box-sizing:border-box;height:auto;padding:var(--flight-card-padding);background:var(--flight-card-background);border:var(--flight-card-border);border-radius:var(--flight-card-radius);color:var(--flight-card-text);font-family:var(--flight-font-family);flex-direction:column;transition:transform .2s,box-shadow .2s,opacity .2s;display:flex;overflow:hidden}.flight-header{align-items:center;gap:var(--flight-header-gap);box-sizing:border-box;width:100%;display:flex}.flight-icon{width:var(--flight-icon-size);height:var(--flight-icon-size);color:var(--flight-card-icon);font-size:var(--flight-icon-size);flex:none;justify-content:center;align-items:center;line-height:1;display:flex;transform:rotate(-8deg)}.flight-title{min-width:0;color:var(--flight-card-text);font-size:var(--flight-title-size);font-weight:var(--flight-title-weight);line-height:var(--flight-title-line-height);word-break:break-word;flex:1;margin:0;padding:0}.flight-info{gap:var(--flight-info-gap);width:100%;margin-top:var(--flight-title-info-gap);box-sizing:border-box;flex-direction:column;display:flex}.flight-route{color:var(--flight-card-text);font-size:var(--flight-route-size);font-weight:var(--flight-route-weight);word-break:break-word;line-height:1.3}.flight-date{color:var(--flight-card-text);font-size:var(--flight-date-size);font-weight:var(--flight-date-weight);word-break:break-word;line-height:1.3}.flight-air-time{color:var(--flight-card-text);font-size:var(--flight-air-time-size);font-weight:var(--flight-air-time-weight);word-break:break-word;line-height:1.3}.flight-divider{width:100%;height:var(--flight-divider-height);background:var(--flight-card-divider);border-radius:999px;flex-shrink:0;margin-top:25px}.flight-description{width:100%;margin-top:var(--flight-description-gap);color:var(--flight-card-text);font-size:var(--flight-description-size);font-weight:var(--flight-description-weight);line-height:var(--flight-description-line-height);word-break:break-word;overflow-wrap:anywhere}:host(.flight-card-clickable),:host(.flight-card-clickable) .flight-card{cursor:pointer}:host(.flight-card-clickable) .flight-card:hover{transform:translateY(-2px);box-shadow:0 6px 18px #0000001f}:host(.flight-card-clickable) .flight-card:active{transform:translateY(0);box-shadow:0 2px 6px #0000001a}:host(.flight-card-disabled){opacity:.55;cursor:not-allowed;pointer-events:none}:host(.flight-card-disabled) .flight-card{box-shadow:none;transform:none}.flight-card img,.flight-card canvas{max-width:100%;height:auto;display:block}.flight-card svg{max-width:100%;height:auto}.flight-card>*{box-sizing:border-box;max-width:100%}@media (width<=768px){:host{--flight-card-min-height:350px;--flight-card-padding:28px;--flight-header-gap:16px;--flight-info-gap:18px;--flight-title-info-gap:32px;--flight-title-size:26px;--flight-route-size:21px;--flight-date-size:20px;--flight-air-time-size:20px;--flight-description-size:17px;--flight-icon-size:34px}}@media (width<=480px){:host{--flight-card-min-height:300px;--flight-card-padding:20px;--flight-header-gap:12px;--flight-info-gap:14px;--flight-title-info-gap:25px;--flight-title-size:22px;--flight-route-size:18px;--flight-date-size:17px;--flight-air-time-size:17px;--flight-description-size:15px;--flight-description-line-height:1.45;--flight-icon-size:28px;--flight-card-radius:10px}}@media (width<=360px){:host{--flight-card-padding:16px;--flight-header-gap:10px;--flight-title-size:20px;--flight-route-size:17px;--flight-date-size:16px;--flight-air-time-size:16px;--flight-description-size:14px;--flight-icon-size:25px}}`})))()}var d;function init_flight_card$1(){return(init_flight_card$1=e((()=>{a(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2ZsaWdodC1jYXJkL2ZsaWdodC1jYXJkLmh0bWw(),init_flight_card(),o(),d=class FlightCard{flightNumber=``;route=``;date=``;airTime=``;description=``;clickable=!1;disabled=!1;customClass=``;get hostClasses(){return[this.customClass,this.clickable?`flight-card-clickable`:``,this.disabled?`flight-card-disabled`:``].filter(Boolean).join(` `)}clicked=new r;onClick(e){!this.clickable||this.disabled||this.clicked.emit(e)}static propDecorators={flightNumber:[{type:i}],route:[{type:i}],date:[{type:i}],airTime:[{type:i}],description:[{type:i}],clickable:[{type:i}],disabled:[{type:i}],customClass:[{type:i}],hostClasses:[{type:n,args:[`class`]}],clicked:[{type:c}]}},d=s([t({selector:`brb-flight-card`,standalone:!0,imports:[],template:l,styles:[u]})],d)})))()}var f,p,m,h,g,_;function init_flight_card_stories(){return(init_flight_card_stories=e((()=>{init_flight_card$1(),f={title:`Components/Flight Card`,component:d,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{flightNumber:{control:`text`},route:{control:`text`},date:{control:`text`},airTime:{control:`text`},description:{control:`text`},clickable:{control:`boolean`},disabled:{control:`boolean`},customClass:{control:`text`},clicked:{action:`clicked`}}},p={args:{flightNumber:`ET-123`,route:`Addis Ababa (ADD) to Nairobi (NBO)`,date:`June 14, 2026`,airTime:`2h 10m`,description:`This Flight Data Monitoring (FDM) report summarizes the operational performance of Flight ET-123 during its journey from Addis Ababa (ADD) to Nairobi (NBO). The aircraft departed on 14 June 2026 at 08:15 UTC and arrived at its destination at 10:05 UTC.`,clickable:!1,disabled:!1,customClass:``}},m={args:{...p.args,clickable:!0}},h={args:{...p.args,disabled:!0}},g={args:{...p.args,customClass:`large-flight-card`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    flightNumber: 'ET-123',
    route: 'Addis Ababa (ADD) to Nairobi (NBO)',
    date: 'June 14, 2026',
    airTime: '2h 10m',
    description: 'This Flight Data Monitoring (FDM) report summarizes the operational performance of Flight ET-123 during its journey from Addis Ababa (ADD) to Nairobi (NBO). The aircraft departed on 14 June 2026 at 08:15 UTC and arrived at its destination at 10:05 UTC.',
    clickable: false,
    disabled: false,
    customClass: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    clickable: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    customClass: 'large-flight-card'
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Clickable`,`Disabled`,`CustomSize`]})))()}init_flight_card_stories();export{m as Clickable,g as CustomSize,p as Default,h as Disabled,_ as __namedExportsOrder,f as default};