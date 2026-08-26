import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{H as t,K as n,Lt as r,Q as i,Zn as a,j as o,qn as s,tt as c}from"./angular-platform-BtkHVU7X.js";var l;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL3RpbWUtZmlsdGVyL3RpbWUtZmlsdGVyLmh0bWw(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL3RpbWUtZmlsdGVyL3RpbWUtZmlsdGVyLmh0bWw=e((()=>{l=`<div class="time-filter" [class.time-filter-selected]="selected" (click)="onClick($event)"
  role="button" tabindex="0">


  <div class="radio-circle" [class.selected]="selected">

    <div class="radio-dot"></div>

  </div>


  <span class="label">
    {{ label }}
  </span>

</div>`})))()}var u;function init_time_filter(){return(init_time_filter=e((()=>{u=`:host{--time-filter-gap:16px;--time-filter-circle-size:24px;--time-filter-circle-border-width:2px;--time-filter-dot-size:12px;--time-filter-border-color:#a6a6a6;--time-filter-selected-color:#1976d2;--time-filter-text-color:#000;--time-filter-text-hover:#333;--time-filter-font-family:Arial, Helvetica, sans-serif;--time-filter-font-size:20px;--time-filter-font-weight:400;--time-filter-disabled-color:#aaa}:host .time-filter{align-items:center;gap:var(--time-filter-gap);box-sizing:border-box;width:fit-content;font-family:var(--time-filter-font-family);-webkit-user-select:none;user-select:none;transition:opacity .2s;display:flex}:host(.time-filter-clickable) .time-filter{cursor:pointer}:host .radio-circle{width:var(--time-filter-circle-size);height:var(--time-filter-circle-size);box-sizing:border-box;border:var(--time-filter-circle-border-width) solid var(--time-filter-border-color);border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;transition:border-color .2s,background-color .2s;display:flex}:host .radio-dot{width:var(--time-filter-dot-size);height:var(--time-filter-dot-size);background:0 0;border-radius:50%;transition:background-color .2s,transform .2s}:host .radio-circle.selected{border-color:var(--time-filter-selected-color)}:host .radio-circle.selected .radio-dot{background:var(--time-filter-selected-color);transform:scale(1)}:host .label{color:var(--time-filter-text-color);font-size:var(--time-filter-font-size);font-weight:var(--time-filter-font-weight);line-height:1;transition:color .2s}:host(.time-filter-clickable) .time-filter:hover .label{color:var(--time-filter-text-hover)}:host(.time-filter-clickable) .time-filter:hover .radio-circle{border-color:var(--time-filter-selected-color)}:host(.time-filter-disabled) .time-filter{opacity:.6;cursor:not-allowed}:host(.time-filter-disabled) .time-filter .radio-circle{border-color:var(--time-filter-disabled-color)}:host(.time-filter-disabled) .time-filter .label{color:var(--time-filter-disabled-color)}:host(.time-filter-disabled) .time-filter .radio-circle.selected{border-color:var(--time-filter-disabled-color)}:host(.time-filter-disabled) .time-filter .radio-circle.selected .radio-dot{background:var(--time-filter-disabled-color)}@media (width<=768px){:host .time-filter{--time-filter-font-size:18px;--time-filter-circle-size:22px;--time-filter-dot-size:10px;--time-filter-gap:12px}}@media (width<=480px){:host .time-filter{--time-filter-font-size:16px;--time-filter-circle-size:20px;--time-filter-dot-size:9px;--time-filter-gap:10px}}`})))()}var d;function init_time_filter$1(){return(init_time_filter$1=e((()=>{a(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL3RpbWUtZmlsdGVyL3RpbWUtZmlsdGVyLmh0bWw(),init_time_filter(),o(),d=class TimeFilter{label=``;value=``;selectedValue=null;customClass=``;clickable=!0;disabled=!1;get hostClasses(){return[this.customClass,this.clickable?`time-filter-clickable`:``,this.disabled?`time-filter-disabled`:``].filter(Boolean).join(` `)}selectedValueChange=new r;clicked=new r;internalSelected=!1;get selected(){return this.selectedValue!==null&&this.selectedValue!==void 0?this.value===this.selectedValue:this.internalSelected}onClick(e){if(!(this.disabled||!this.clickable)){if(this.selectedValue===null||this.selectedValue===void 0){this.internalSelected=!this.internalSelected,this.clicked.emit(e);return}this.selected?this.selectedValueChange.emit(``):this.selectedValueChange.emit(this.value),this.clicked.emit(e)}}static propDecorators={label:[{type:i}],value:[{type:i}],selectedValue:[{type:i}],customClass:[{type:i}],clickable:[{type:i}],disabled:[{type:i}],hostClasses:[{type:n,args:[`class`]}],selectedValueChange:[{type:c}],clicked:[{type:c}]}},d=s([t({selector:`brb-time-filter`,standalone:!0,imports:[],template:l,styles:[u]})],d)})))()}var f,p,m,h,g,_,v;function init_time_filter_stories(){return(init_time_filter_stories=e((()=>{init_time_filter$1(),f={title:`Components/Time Filter`,component:d,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`Text displayed beside the time filter`},value:{control:`text`,description:`Unique value of the time filter`},selectedValue:{control:`text`,description:`Optional external value for connected groups`},customClass:{control:`text`,description:`Developer custom CSS class`},clickable:{control:`boolean`,description:`Controls whether the component can be clicked`},disabled:{control:`boolean`,description:`Disables the time filter`},selectedValueChange:{action:`selectedValueChange`,description:`Emitted when selection changes`},clicked:{action:`clicked`,description:`Emitted when the component is clicked`}}},p={args:{label:`Last 24 Hours`,value:`24h`,selectedValue:null,customClass:``,clickable:!0,disabled:!1}},m={args:{label:`Last 24 Hours`,value:`24h`,selectedValue:`24h`,customClass:``,clickable:!0,disabled:!1}},h={args:{label:`Last 24 Hours`,value:`24h`,selectedValue:null,customClass:``,clickable:!0,disabled:!0}},g={args:{label:`Last 24 Hours`,value:`24h`,selectedValue:null,customClass:``,clickable:!1,disabled:!1}},_={args:{label:`Last 24 Hours`,value:`24h`,selectedValue:null,customClass:`custom-time-filter`,clickable:!0,disabled:!1}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Last 24 Hours',
    value: '24h',
    selectedValue: null,
    customClass: '',
    clickable: true,
    disabled: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Last 24 Hours',
    value: '24h',
    selectedValue: '24h',
    customClass: '',
    clickable: true,
    disabled: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Last 24 Hours',
    value: '24h',
    selectedValue: null,
    customClass: '',
    clickable: true,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Last 24 Hours',
    value: '24h',
    selectedValue: null,
    customClass: '',
    clickable: false,
    disabled: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Last 24 Hours',
    value: '24h',
    selectedValue: null,
    customClass: 'custom-time-filter',
    clickable: true,
    disabled: false
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Selected`,`Disabled`,`NotClickable`,`CustomStyle`]})))()}init_time_filter_stories();export{_ as CustomStyle,p as Default,h as Disabled,g as NotClickable,m as Selected,v as __namedExportsOrder,f as default};