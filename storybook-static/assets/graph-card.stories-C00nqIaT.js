import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{H as t,K as n,Lt as r,Q as i,Zn as a,j as o,qn as s,tt as c}from"./angular-platform-BtkHVU7X.js";var l;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2dyYXBoLWNhcmQvZ3JhcGgtY2FyZC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2dyYXBoLWNhcmQvZ3JhcGgtY2FyZC5odG1s=e((()=>{l=`<div
  class="balina-graph-card"
  [class.graph-card-clickable]="clickable"
  [class.graph-card-disabled]="disabled"
  (click)="onClick($event)"
>

  <!-- TITLE-->

  <h2 class="graph-card-title">
    {{ title }}
  </h2>


  <!--DEVELOPER CONTENT-->

  <div class="graph-card-content">

    <ng-content></ng-content>

  </div>

</div>`})))()}var u;function init_graph_card(){return(init_graph_card=e((()=>{u=`:host{--graph-card-width:100%;--graph-card-min-height:300px;--graph-card-max-width:none;--graph-card-padding:30px;--graph-card-content-gap:20px;--graph-card-title-content-gap:25px;--graph-card-background:#fff;--graph-card-border:2px solid #d9d9d9;--graph-card-title-color:#111;--graph-card-content-color:#333;--graph-card-radius:12px;--graph-card-title-size:32px;--graph-card-title-weight:700;--graph-card-title-line-height:1.2;--graph-card-font-family:Arial, Helvetica, sans-serif;width:var(--graph-card-width);max-width:var(--graph-card-max-width);box-sizing:border-box;display:block}.balina-graph-card{width:100%;min-height:var(--graph-card-min-height);box-sizing:border-box;height:auto;padding:var(--graph-card-padding);background:var(--graph-card-background);border:var(--graph-card-border);border-radius:var(--graph-card-radius);color:var(--graph-card-content-color);font-family:var(--graph-card-font-family);flex-direction:column;transition:transform .2s,box-shadow .2s,opacity .2s;display:flex;overflow:hidden}.graph-card-title{color:var(--graph-card-title-color);font-size:var(--graph-card-title-size);font-weight:var(--graph-card-title-weight);line-height:var(--graph-card-title-line-height);word-break:break-word;flex:none;margin:0;padding:0}.graph-card-content{gap:var(--graph-card-content-gap);width:100%;min-width:0;margin-top:var(--graph-card-title-content-gap);box-sizing:border-box;flex-direction:column;display:flex}.graph-card-content>*{box-sizing:border-box;max-width:100%}.graph-card-content img{object-fit:contain;border-radius:8px;width:auto;max-width:100%;height:auto;display:block}.graph-card-content canvas,.graph-card-content svg{max-width:100%;height:auto;display:block}.graph-card-content p{color:var(--graph-card-content-color);word-break:break-word;overflow-wrap:anywhere;margin:0;line-height:1.5}.graph-card-content button{box-sizing:border-box;cursor:pointer}:host(.graph-card-clickable){cursor:pointer}:host(.graph-card-clickable) .balina-graph-card:hover{transform:translateY(-2px);box-shadow:0 6px 18px #0000001f}:host(.graph-card-clickable) .balina-graph-card:active{transform:translateY(0);box-shadow:0 2px 6px #0000001a}:host(.graph-card-disabled){opacity:.55;pointer-events:none;cursor:not-allowed}:host(.graph-card-disabled) .balina-graph-card{box-shadow:none;transform:none}@media (width<=768px){:host{--graph-card-min-height:250px;--graph-card-padding:24px;--graph-card-title-size:28px;--graph-card-content-gap:16px;--graph-card-title-content-gap:20px}}@media (width<=480px){:host{--graph-card-min-height:220px;--graph-card-padding:18px;--graph-card-title-size:24px;--graph-card-content-gap:14px;--graph-card-title-content-gap:18px;--graph-card-radius:10px}}@media (width<=360px){:host{--graph-card-padding:14px;--graph-card-title-size:21px;--graph-card-content-gap:12px}}`})))()}var d;function init_graph_card$1(){return(init_graph_card$1=e((()=>{a(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2dyYXBoLWNhcmQvZ3JhcGgtY2FyZC5odG1s(),init_graph_card(),o(),d=class GraphCard{title=``;customClass=``;clickable=!1;disabled=!1;get hostClasses(){return[this.customClass,this.clickable?`graph-card-clickable`:``,this.disabled?`graph-card-disabled`:``].filter(Boolean).join(` `)}clicked=new r;onClick(e){!this.clickable||this.disabled||this.clicked.emit(e)}static propDecorators={title:[{type:i}],customClass:[{type:i}],clickable:[{type:i}],disabled:[{type:i}],hostClasses:[{type:n,args:[`class`]}],clicked:[{type:c}]}},d=s([t({selector:`brb-graph-card`,standalone:!0,imports:[],template:l,styles:[u]})],d)})))()}var f,p,m,h,g,_,v,y,b;function init_graph_card_stories(){return(init_graph_card_stories=e((()=>{init_graph_card$1(),f={title:`Components/GraphCard`,component:d,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{title:{control:`text`},clickable:{control:`boolean`},disabled:{control:`boolean`},customClass:{control:`text`},clicked:{action:`clicked`}}},p={args:{title:`GMT`,clickable:!1,disabled:!1,customClass:`auto-card`}},m={args:{title:`GMT`,clickable:!1,disabled:!1,customClass:`auto-card`},render:e=>({props:e,template:`
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <img
          class="card-image"
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
          alt="GMT"
        />

      </brb-card>
    `})},h={args:{title:`GMT`,clickable:!1,disabled:!1,customClass:`auto-card`},render:e=>({props:e,template:`
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <p class="card-text">
          This is developer content inside the
          reusable Balina Card component.
          The Card automatically grows according
          to the content.
        </p>

      </brb-card>
    `})},g={args:{title:`GMT`,clickable:!1,disabled:!1,customClass:`auto-card`},render:e=>({props:e,template:`
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <div class="button-content">

          <p>
            GMT information
          </p>

          <div class="buttons">

            <button>
              Refresh
            </button>

            <button>
              View Details
            </button>

          </div>

        </div>

      </brb-card>
    `})},_={args:{title:`GMT`,clickable:!0,disabled:!1,customClass:`auto-card`}},v={args:{title:`GMT`,clickable:!0,disabled:!0,customClass:`auto-card`}},y={args:{title:`GMT`,clickable:!1,disabled:!1,customClass:`large-card`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'auto-card'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'auto-card'
  },
  render: args => ({
    props: args,
    template: \`
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <img
          class="card-image"
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
          alt="GMT"
        />

      </brb-card>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'auto-card'
  },
  render: args => ({
    props: args,
    template: \`
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <p class="card-text">
          This is developer content inside the
          reusable Balina Card component.
          The Card automatically grows according
          to the content.
        </p>

      </brb-card>
    \`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'auto-card'
  },
  render: args => ({
    props: args,
    template: \`
      <brb-card
        [title]="title"
        [clickable]="clickable"
        [disabled]="disabled"
        [customClass]="customClass"
        (clicked)="clicked($event)"
      >

        <div class="button-content">

          <p>
            GMT information
          </p>

          <div class="buttons">

            <button>
              Refresh
            </button>

            <button>
              View Details
            </button>

          </div>

        </div>

      </brb-card>
    \`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'GMT',
    clickable: true,
    disabled: false,
    customClass: 'auto-card'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'GMT',
    clickable: true,
    disabled: true,
    customClass: 'auto-card'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'GMT',
    clickable: false,
    disabled: false,
    customClass: 'large-card'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithImage`,`WithText`,`WithButtons`,`Clickable`,`Disabled`,`CustomSize`]})))()}init_graph_card_stories();export{_ as Clickable,y as CustomSize,p as Default,v as Disabled,g as WithButtons,m as WithImage,h as WithText,b as __namedExportsOrder,f as default};