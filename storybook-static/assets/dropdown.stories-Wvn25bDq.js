import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{G as t,H as n,K as r,Lt as i,Q as a,Zn as o,j as s,q as c,qn as l,tt as u}from"./angular-platform-BtkHVU7X.js";var d;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLmh0bWw(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLmh0bWw=e((()=>{d=`<div class="dropdown-container" [class.dropdown-disabled]="disabled" [class.dropdown-open]="isOpen">

  <div class="dropdown-field" (click)="toggleDropdown($event)">

    <!-- Label -->

    @if (label) {

    <label class="dropdown-label">
      {{ label }}
    </label>

    }


    <!-- Selected Value -->

    <span class="dropdown-value" [class.dropdown-placeholder]="
        !selectedOption
      ">

      {{
      selectedOption?.label ||
      placeholder
      }}

    </span>


    <!-- Arrow -->

    <span class="dropdown-arrow" [class.arrow-up]="isOpen"></span>

  </div>


  @if (isOpen) {

  <div class="dropdown-menu" (click)="$event.stopPropagation()">

    <!-- SEARCH -->

    @if (searchable) {

    <div class="dropdown-search">

      <input type="text" class="dropdown-search-input" placeholder="Search..." [value]="searchText"
        (input)="onSearch($event)" />

    </div>

    }


    <!-- OPTIONS -->

    <div class="dropdown-options">

      @for (
      option of filteredOptions;
      track option.value
      ) {

      <div class="dropdown-option" [class.option-disabled]="
              option.disabled
            " [class.option-selected]="
              option.value === value
            " (click)="
              selectOption(option, $event)
            ">

        {{ option.label }}

      </div>

      }


      <!-- NO RESULTS -->

      @if (
      filteredOptions.length === 0
      ) {

      <div class="dropdown-no-result">

        No results found

      </div>

      }

    </div>

  </div>

  }

</div>`})))()}var f;function init_dropdown(){return(init_dropdown=e((()=>{f=`:host{--dropdown-width:300px;--dropdown-height:44px;--dropdown-background:#fff;--dropdown-border:1px solid #a9a9a9;--dropdown-border-hover:#777;--dropdown-border-focus:#68479b;--dropdown-radius:6px;--dropdown-text-color:#222;--dropdown-placeholder-color:#777;--dropdown-menu-background:#fff;--dropdown-option-hover:#f3f0f7;--dropdown-option-selected:#eee8f5;--dropdown-disabled:#f5f5f5;--dropdown-font-family:Arial, Helvetica, sans-serif;--dropdown-font-size:14px;--dropdown-font-weight:600;--dropdown-shadow:0 4px 12px #0000001f;--dropdown-label-color:#68479b;--dropdown-arrow-color:#555;--dropdown-search-border:#cfcfcf;width:var(--dropdown-width);box-sizing:border-box;display:block;position:relative}.dropdown-container{width:100%;font-family:var(--dropdown-font-family);box-sizing:border-box;position:relative}.dropdown-field{width:100%;height:var(--dropdown-height);box-sizing:border-box;border:var(--dropdown-border);border-radius:var(--dropdown-radius);background:var(--dropdown-background);color:var(--dropdown-text-color);font-size:var(--dropdown-font-size);font-weight:var(--dropdown-font-weight);cursor:pointer;align-items:center;padding:0 48px 0 18px;transition:border-color .2s,box-shadow .2s;display:flex;position:relative}.dropdown-field:hover{border-color:var(--dropdown-border-hover)}.dropdown-open .dropdown-field{border-color:var(--dropdown-border-focus);box-shadow:0 0 0 1px #68479b1f}.dropdown-label{background:var(--dropdown-background);color:var(--dropdown-label-color);pointer-events:none;padding:0 6px;font-size:13px;font-weight:500;line-height:1;position:absolute;top:0;left:14px;transform:translateY(-50%)}.dropdown-value{white-space:nowrap;text-overflow:ellipsis;color:var(--dropdown-text-color);overflow:hidden}.dropdown-placeholder{color:var(--dropdown-placeholder-color)}.dropdown-arrow{border-right:2px solid var(--dropdown-arrow-color);border-bottom:2px solid var(--dropdown-arrow-color);width:9px;height:9px;transition:transform .2s;position:absolute;top:50%;right:18px;transform:translateY(-65%)rotate(45deg)}.dropdown-arrow.arrow-up{transform:translateY(-25%)rotate(225deg)}.dropdown-menu{z-index:1000;background:var(--dropdown-menu-background);border-radius:var(--dropdown-radius);width:100%;box-shadow:var(--dropdown-shadow);border:1px solid #d0d0d0;position:absolute;top:calc(100% + 6px);left:0;overflow:hidden}.dropdown-search{border-bottom:1px solid #eee;padding:8px}.dropdown-search-input{box-sizing:border-box;border:1px solid var(--dropdown-search-border);width:100%;height:38px;color:var(--dropdown-text-color);font-family:var(--dropdown-font-family);background:#fff;border-radius:5px;outline:none;padding:0 12px;font-size:14px}.dropdown-search-input:focus{border-color:var(--dropdown-border-focus)}.dropdown-options{max-height:240px;overflow-y:auto}.dropdown-option{box-sizing:border-box;min-height:42px;color:var(--dropdown-text-color);font-size:var(--dropdown-font-size);cursor:pointer;align-items:center;padding:0 14px;transition:background-color .15s;display:flex}.dropdown-option:hover{background:var(--dropdown-option-hover)}.dropdown-option.option-selected{background:var(--dropdown-option-selected);color:var(--dropdown-border-focus);font-weight:600}.dropdown-option.option-disabled{color:#aaa;cursor:not-allowed;background:0 0}.dropdown-no-result{color:#888;justify-content:center;align-items:center;min-height:50px;padding:0 15px;font-size:13px;display:flex}.dropdown-disabled .dropdown-field{background:var(--dropdown-disabled);color:#999;cursor:not-allowed;border-color:#d0d0d0}.dropdown-options::-webkit-scrollbar{width:6px}.dropdown-options::-webkit-scrollbar-thumb{background:#c5c5c5;border-radius:10px}@media (width<=768px){:host{width:100%}.dropdown-field{height:var(--dropdown-height)}}`})))()}var p;function init_dropdown$1(){return(init_dropdown$1=e((()=>{o(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLmh0bWw(),init_dropdown(),s(),p=class Dropdown{elementRef;label=``;placeholder=``;options=[];value=``;disabled=!1;searchable=!0;customClass=``;valueChange=new i;selectionChange=new i;openedChange=new i;clicked=new i;isOpen=!1;searchText=``;constructor(e){this.elementRef=e}get filteredOptions(){let e=this.searchText.trim().toLowerCase();return e?this.options.filter(t=>t.label.toLowerCase().includes(e)):this.options}get selectedOption(){return this.options.find(e=>e.value===this.value)}toggleDropdown(e){this.disabled||(e&&this.clicked.emit(e),this.isOpen=!this.isOpen,this.openedChange.emit(this.isOpen),this.isOpen||(this.searchText=``))}onDocumentClick(e){if(!this.isOpen)return;let t=e.target;this.elementRef.nativeElement.contains(t)||this.closeDropdown()}closeDropdown(){this.isOpen&&(this.isOpen=!1,this.searchText=``,this.openedChange.emit(!1))}selectOption(e,t){e.disabled||(this.value=e.value,this.valueChange.emit(e.value),this.selectionChange.emit(e),this.clicked.emit(t),this.isOpen=!1,this.searchText=``,this.openedChange.emit(!1))}onSearch(e){let t=e.target;this.searchText=t.value}static ctorParameters=()=>[{type:t}];static propDecorators={label:[{type:a}],placeholder:[{type:a}],options:[{type:a}],value:[{type:a}],disabled:[{type:a}],searchable:[{type:a}],customClass:[{type:a},{type:r,args:[`class`]}],valueChange:[{type:u}],selectionChange:[{type:u}],openedChange:[{type:u}],clicked:[{type:u}],onDocumentClick:[{type:c,args:[`document:click`,[`$event`]]}]}},p=l([n({selector:`brb-dropdown`,standalone:!0,imports:[],template:d,styles:[f]})],p)})))()}var m,h,g,_,v,y,b,x;function init_dropdown_stories(){return(init_dropdown_stories=e((()=>{init_dropdown$1(),m=[{label:`Addis Ababa`,value:`addis-ababa`},{label:`Debre Berhan`,value:`debre-berhan`},{label:`Bahir Dar`,value:`bahir-dar`},{label:`Hawassa`,value:`hawassa`},{label:`Gondar`,value:`gondar`},{label:`Dire Dawa`,value:`dire-dawa`}],h={title:`Components/Dropdown`,component:p,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`Dropdown floating label`},placeholder:{control:`text`,description:`Text displayed when nothing is selected`},options:{control:`object`,description:`Dropdown options`},value:{control:`text`,description:`Selected option value`},disabled:{control:`boolean`},searchable:{control:`boolean`},customClass:{control:`text`,description:`Developer custom CSS class`},valueChange:{action:`valueChange`},selectionChange:{action:`selectionChange`},openedChange:{action:`openedChange`},clicked:{action:`clicked`}}},g={args:{label:`City`,placeholder:`Select city`,options:m,value:``,disabled:!1,searchable:!0,customClass:``}},_={args:{label:`City`,placeholder:`Select city`,options:m,value:`addis-ababa`,disabled:!1,searchable:!0,customClass:``}},v={args:{label:`City`,placeholder:`Select city`,options:m,value:``,disabled:!1,searchable:!1,customClass:``}},y={args:{label:`City`,placeholder:`Select city`,options:m,value:``,disabled:!0,searchable:!0,customClass:``}},b={args:{label:`City`,placeholder:`Select city`,options:m,value:``,disabled:!1,searchable:!0,customClass:`custom-dropdown`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'City',
    placeholder: 'Select city',
    options,
    value: '',
    disabled: false,
    searchable: true,
    customClass: ''
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'City',
    placeholder: 'Select city',
    options,
    value: 'addis-ababa',
    disabled: false,
    searchable: true,
    customClass: ''
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'City',
    placeholder: 'Select city',
    options,
    value: '',
    disabled: false,
    searchable: false,
    customClass: ''
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'City',
    placeholder: 'Select city',
    options,
    value: '',
    disabled: true,
    searchable: true,
    customClass: ''
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'City',
    placeholder: 'Select city',
    options,
    value: '',
    disabled: false,
    searchable: true,
    customClass: 'custom-dropdown'
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithValue`,`WithoutSearch`,`Disabled`,`CustomStyle`]})))()}init_dropdown_stories();export{b as CustomStyle,g as Default,y as Disabled,_ as WithValue,v as WithoutSearch,x as __namedExportsOrder,h as default};