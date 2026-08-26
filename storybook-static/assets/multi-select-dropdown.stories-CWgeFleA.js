import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{G as t,H as n,K as r,Lt as i,Q as a,Zn as o,j as s,q as c,qn as l,tt as u}from"./angular-platform-BtkHVU7X.js";var d;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL211bHRpLXNlbGVjdC1kcm9wZG93bi9tdWx0aS1zZWxlY3QtZHJvcGRvd24uaHRtbA(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL211bHRpLXNlbGVjdC1kcm9wZG93bi9tdWx0aS1zZWxlY3QtZHJvcGRvd24uaHRtbA=e((()=>{d=`<div
  class="multi-dropdown"
>
  <button
    type="button"
    class="dropdown-header"
    [disabled]="disabled"
    (click)="toggle($event)"
  >

    <span class="dropdown-label">

      {{ displayText }}

    </span>


    <span
      class="dropdown-arrow"
      [class.arrow-open]="isOpen"
    ></span>

  </button>
  @if (isOpen) {

    <div
      class="dropdown-options"
    >

      @for (
        option of options;
        track option.value
      ) {

        <button
          type="button"
          class="dropdown-option"
          [class.option-selected]="
            isSelected(option)
          "
          [class.option-disabled]="
            option.disabled
          "
          [disabled]="
            disabled ||
            option.disabled
          "
          (click)="
            onOptionClick(
              option,
              $event
            )
          "
        >

          <!-- Checkbox -->

          <span
            class="checkbox"
            [class.checkbox-selected]="
              isSelected(option)
            "
          >

            @if (
              isSelected(option)
            ) {

              <span class="checkmark">
                ✓
              </span>

            }

          </span>


          <!-- Label -->

          <span
            class="option-label"
          >
            {{ option.label }}
          </span>

        </button>

      }

    </div>

  }

</div>`})))()}var f;function init_multi_select_dropdown(){return(init_multi_select_dropdown=e((()=>{f=`:host{--dropdown-width:300px;--dropdown-max-width:100%;--dropdown-max-height:190px;--dropdown-background:#fff;--dropdown-text:#344054;--dropdown-option-text:#344054;--dropdown-border:#b8c1d1;--dropdown-focus-border:#2962ff;--dropdown-hover:#f5f7fb;--dropdown-selected:#e9efff;--dropdown-arrow:#344054;--dropdown-scrollbar:#7050c8;--dropdown-header-height:42px;--dropdown-header-padding:0 12px;--dropdown-border-width:1.5px;--dropdown-radius:10px;--dropdown-label-size:14px;--dropdown-label-weight:400;--dropdown-option-size:14px;--dropdown-option-weight:400;--dropdown-option-height:38px;--dropdown-option-padding:0 13px;--dropdown-arrow-size:15px;--dropdown-font-family:Arial, Helvetica, sans-serif;width:var(--dropdown-width);max-width:var(--dropdown-max-width);box-sizing:border-box;font-family:var(--dropdown-font-family);display:block;position:relative}:host .multi-dropdown{box-sizing:border-box;flex-direction:column;width:100%;display:flex;position:relative}:host .dropdown-header{width:100%;height:var(--dropdown-header-height);min-height:var(--dropdown-header-height);padding:var(--dropdown-header-padding);box-sizing:border-box;background:var(--dropdown-background);border:var(--dropdown-border-width) solid var(--dropdown-border);border-radius:var(--dropdown-radius);color:var(--dropdown-text);font-family:inherit;font-size:var(--dropdown-label-size);font-weight:var(--dropdown-label-weight);text-align:left;cursor:pointer;z-index:2;outline:none;justify-content:space-between;align-items:center;gap:10px;transition:border-color .15s,box-shadow .15s;display:flex;position:relative}:host .dropdown-header:hover{border-color:#8e99aa}:host .dropdown-header:focus,:host .dropdown-header:focus-visible{border-color:var(--dropdown-focus-border);box-shadow:0 0 0 2px #2962ff2e}:host(.dropdown-open) .dropdown-header{border-radius:var(--dropdown-radius);border-color:var(--dropdown-focus-border);border-bottom-color:#fff;box-shadow:0 0 0 1px #2962ff14}:host .dropdown-label{white-space:nowrap;text-overflow:ellipsis;min-width:0;color:var(--dropdown-text);font-size:var(--dropdown-label-size);font-weight:var(--dropdown-label-weight);flex:auto;line-height:1.2;display:block;overflow:hidden}:host .dropdown-arrow{width:8px;min-width:8px;height:8px;color:var(--dropdown-arrow);border-bottom:1.5px solid;border-right:1.5px solid;flex:0 0 8px;transition:transform .15s;display:flex;transform:translateY(-2px)rotate(45deg)}:host .dropdown-arrow.arrow-open{transform:translateY(2px)rotate(225deg)}:host .dropdown-options{width:100%;max-height:var(--dropdown-max-height);box-sizing:border-box;background:var(--dropdown-background);border:var(--dropdown-border-width) solid var(--dropdown-border);border-radius:var(--dropdown-radius);z-index:1;flex-direction:column;margin-top:7px;padding:4px 4px 5px;display:flex;position:relative;overflow:hidden auto;box-shadow:0 3px 8px #10182814}:host .dropdown-option{width:100%;height:var(--dropdown-option-height);min-height:var(--dropdown-option-height);padding:var(--dropdown-option-padding);box-sizing:border-box;color:var(--dropdown-option-text);font-family:inherit;font-size:var(--dropdown-option-size);font-weight:var(--dropdown-option-weight);text-align:left;cursor:pointer;background:0 0;border:none;border-radius:6px;outline:none;flex:none;align-items:center;transition:background .12s,color .12s;display:flex}:host .dropdown-option:hover{background:var(--dropdown-hover)}:host .dropdown-option.option-selected{background:var(--dropdown-selected);color:#2457d6}:host .dropdown-option.option-selected:hover{background:#e2e9ff}:host .checkbox{box-sizing:border-box;border:1.5px solid var(--dropdown-border);background:var(--dropdown-background);border-radius:4px;flex:0 0 16px;justify-content:center;align-items:center;width:16px;height:16px;margin-right:10px;display:inline-flex}:host .checkbox.checkbox-selected{border-color:var(--dropdown-focus-border);background:var(--dropdown-focus-border)}:host .checkmark{color:#fff;font-size:12px;font-weight:700;line-height:1}:host .option-label{white-space:nowrap;text-overflow:ellipsis;flex:auto;min-width:0;overflow:hidden}:host .dropdown-option.option-disabled{opacity:.45;cursor:not-allowed}:host .dropdown-option.option-disabled:hover{background:0 0}:host .dropdown-options::-webkit-scrollbar{width:5px}:host .dropdown-options::-webkit-scrollbar-track{background:0 0;margin:5px 0}:host .dropdown-options::-webkit-scrollbar-thumb{background:var(--dropdown-scrollbar);border-radius:10px;min-height:35px}:host .dropdown-options::-webkit-scrollbar-thumb:hover{background:#5c3bb0}:host .dropdown-options{scrollbar-width:thin;scrollbar-color:var(--dropdown-scrollbar) transparent}:host(.dropdown-disabled){opacity:.55;pointer-events:none}@media (width<=768px){:host{--dropdown-width:280px;--dropdown-header-height:42px;--dropdown-option-height:38px}}@media (width<=480px){:host{--dropdown-width:100%;--dropdown-header-height:42px;--dropdown-header-padding:0 11px;--dropdown-label-size:14px;--dropdown-option-size:14px;--dropdown-option-height:38px;--dropdown-option-padding:0 11px;--dropdown-max-height:180px;--dropdown-radius:9px}}`})))()}var p;function init_multi_select_dropdown$1(){return(init_multi_select_dropdown$1=e((()=>{o(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL211bHRpLXNlbGVjdC1kcm9wZG93bi9tdWx0aS1zZWxlY3QtZHJvcGRvd24uaHRtbA(),init_multi_select_dropdown(),s(),p=class MultiSelectDropdown{elementRef;label=`Add Parameters`;options=[];selectedValues=[];placeholder=`Select options`;customClass=``;disabled=!1;isOpen=!1;get hostClasses(){return[this.customClass,this.disabled?`dropdown-disabled`:``,this.isOpen?`dropdown-open`:``].filter(Boolean).join(` `)}selectionChange=new i;opened=new i;closed=new i;clicked=new i;constructor(e){this.elementRef=e}toggle(e){this.disabled||(e.stopPropagation(),this.clicked.emit(e),this.isOpen=!this.isOpen,this.isOpen?this.opened.emit():this.closed.emit())}onOptionClick(e,t){if(this.disabled||e.disabled)return;t.stopPropagation();let n=[...this.selectedValues],r=n.indexOf(e.value);r===-1?n.push(e.value):n.splice(r,1),this.selectedValues=n,this.selectionChange.emit([...n])}isSelected(e){return this.selectedValues.includes(e.value)}get displayText(){return this.label}onDocumentClick(e){if(!this.isOpen)return;let t=e.target;this.elementRef.nativeElement.contains(t)||this.close()}close(){this.isOpen&&(this.isOpen=!1,this.closed.emit())}static ctorParameters=()=>[{type:t}];static propDecorators={label:[{type:a}],options:[{type:a}],selectedValues:[{type:a}],placeholder:[{type:a}],customClass:[{type:a}],disabled:[{type:a}],hostClasses:[{type:r,args:[`class`]}],selectionChange:[{type:u}],opened:[{type:u}],closed:[{type:u}],clicked:[{type:u}],onDocumentClick:[{type:c,args:[`document:click`,[`$event`]]}]}},p=l([n({selector:`brb-multi-select-dropdown`,standalone:!0,imports:[],template:d,styles:[f]})],p)})))()}var m,h,g,_,v,y,b;function init_multi_select_dropdown_stories(){return(init_multi_select_dropdown_stories=e((()=>{init_multi_select_dropdown$1(),m={title:`Components/MultiSelectDropdown`,component:p,parameters:{layout:`centered`},argTypes:{label:{control:`text`},placeholder:{control:`text`},options:{control:`object`},selectedValues:{control:`object`},customClass:{control:`text`},disabled:{control:`boolean`},selectionChange:{action:`selectionChange`},opened:{action:`opened`},closed:{action:`closed`},clicked:{action:`clicked`}}},h={args:{label:`Add Parameters`,placeholder:`Select options`,options:[{label:`Option`,value:`option1`},{label:`Option`,value:`option2`},{label:`Option`,value:`option3`}],selectedValues:[],customClass:``,disabled:!1}},g={args:{label:`Add Parameters`,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Option 4`,value:`option4`},{label:`Option 5`,value:`option5`},{label:`Option 6`,value:`option6`},{label:`Option 7`,value:`option7`},{label:`Option 8`,value:`option8`},{label:`Option 9`,value:`option9`},{label:`Option 10`,value:`option10`}],selectedValues:[]}},_={args:{label:`Add Parameters`,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Option 4`,value:`option4`}],selectedValues:[`option1`,`option3`]}},v={args:{label:`Add Parameters`,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`}],selectedValues:[],disabled:!0}},y={args:{label:`Add Parameters`,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Option 4`,value:`option4`}],selectedValues:[],customClass:`storybook-custom-dropdown`},decorators:[e=>({...e(),styles:[`

    .storybook-custom-dropdown {

      --dropdown-width: 320px;

      --dropdown-header-height: 55px;

      --dropdown-max-height: 220px;

      --dropdown-header-padding: 0 18px;

      --dropdown-border: 3px solid #c5c5c5;

      --dropdown-radius: 8px;

      --dropdown-label-size: 20px;

      --dropdown-option-size: 18px;

      --dropdown-option-height: 52px;

      --dropdown-option-gap: 22px;

      --checkbox-size: 24px;

    }

        `]})]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add Parameters',
    placeholder: 'Select options',
    options: [{
      label: 'Option',
      value: 'option1'
    }, {
      label: 'Option',
      value: 'option2'
    }, {
      label: 'Option',
      value: 'option3'
    }],
    selectedValues: [],
    customClass: '',
    disabled: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add Parameters',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }, {
      label: 'Option 4',
      value: 'option4'
    }, {
      label: 'Option 5',
      value: 'option5'
    }, {
      label: 'Option 6',
      value: 'option6'
    }, {
      label: 'Option 7',
      value: 'option7'
    }, {
      label: 'Option 8',
      value: 'option8'
    }, {
      label: 'Option 9',
      value: 'option9'
    }, {
      label: 'Option 10',
      value: 'option10'
    }],
    selectedValues: []
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add Parameters',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }, {
      label: 'Option 4',
      value: 'option4'
    }],
    selectedValues: ['option1', 'option3']
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add Parameters',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }],
    selectedValues: [],
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add Parameters',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }, {
      label: 'Option 4',
      value: 'option4'
    }],
    selectedValues: [],
    customClass: 'storybook-custom-dropdown'
  },
  decorators: [story => ({
    ...story(),
    styles: [\`

    .storybook-custom-dropdown {

      --dropdown-width: 320px;

      --dropdown-header-height: 55px;

      --dropdown-max-height: 220px;

      --dropdown-header-padding: 0 18px;

      --dropdown-border: 3px solid #c5c5c5;

      --dropdown-radius: 8px;

      --dropdown-label-size: 20px;

      --dropdown-option-size: 18px;

      --dropdown-option-height: 52px;

      --dropdown-option-gap: 22px;

      --checkbox-size: 24px;

    }

        \`]
  })]
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Scrollable`,`Preselected`,`Disabled`,`CustomStyle`]})))()}init_multi_select_dropdown_stories();export{y as CustomStyle,h as Default,v as Disabled,_ as Preselected,g as Scrollable,b as __namedExportsOrder,m as default};