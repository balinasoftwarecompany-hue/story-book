import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{H as t,K as n,Lt as r,Q as i,Zn as a,j as o,qn as s,tt as c}from"./angular-platform-BtkHVU7X.js";var l;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL3RleHQtYm94L3RleHQtYm94Lmh0bWw(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL3RleHQtYm94L3RleHQtYm94Lmh0bWw=e((()=>{l=`<div class="text-box-container">

  <div class="text-box-input-wrapper">

    <input class="text-box-input" [type]="inputType" [placeholder]="placeholder" [value]="value" [disabled]="disabled"
      [readonly]="readonly" (input)="onInput($event)" (click)="onClick($event)" />

    <!-- Password Eye Button -->
    @if (type === 'password') {

    <button type="button" class="text-box-password-button" [disabled]="disabled" (click)="togglePassword($event)"
      aria-label="Toggle password visibility">

      @if (showPassword) {

      <!-- Eye Off -->
      <svg class="text-box-password-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 3l18 18" />

        <path d="M10.6 10.6a2 2 0 1 0 2.8 2.8" />

        <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5 0 8.7 4.2 9.8 8a10.8 10.8 0 0 1-3.1 5.1" />

        <path d="M6.2 6.2C4.5 7.4 3.2 9.2 2.2 12c1.1 3.8 4.8 8 9.8 8 1.7 0 3.3-.5 4.7-1.2" />
      </svg>

      } @else {

      <!-- Eye -->
      <svg class="text-box-password-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3.5-7 10-7
                 10 7 10 7
                 -3.5 7-10 7
                 -10-7-10-7z" />

        <circle cx="12" cy="12" r="3" />
      </svg>

      }

    </button>

    }

  </div>

</div>`})))()}var u;function init_text_box(){return(init_text_box=e((()=>{u=`:host{--textbox-width:300px;--textbox-height:44px;--textbox-background:#fff;--textbox-border:1px solid #a9a9a9;--textbox-border-hover:#777;--textbox-border-focus:#68479b;--textbox-radius:6px;--textbox-text-color:#222;--textbox-placeholder-color:#777;--textbox-font-family:Arial, Helvetica, sans-serif;--textbox-font-size:14px;--textbox-font-weight:600;--textbox-padding:0 18px;--textbox-focus-shadow:0 0 0 1px #68479b26;--textbox-disabled-background:#f5f5f5;--textbox-disabled-color:#999;--textbox-disabled-border:#d0d0d0;--textbox-icon-color:#777;--textbox-icon-hover-color:#333;width:var(--textbox-width);height:var(--textbox-height);box-sizing:border-box;display:block}.text-box-container{box-sizing:border-box;align-items:center;width:100%;height:100%;display:flex}.text-box-input-wrapper{box-sizing:border-box;align-items:center;width:100%;height:100%;display:flex;position:relative}.text-box-input{box-sizing:border-box;width:100%;height:100%;padding:var(--textbox-padding);border:var(--textbox-border);border-radius:var(--textbox-radius);background:var(--textbox-background);color:var(--textbox-text-color);font-family:var(--textbox-font-family);font-size:var(--textbox-font-size);font-weight:var(--textbox-font-weight);cursor:text;outline:none;transition:border-color .2s,box-shadow .2s,background-color .2s}.text-box-input[type=password]{padding-right:48px}.text-box-input::placeholder{color:var(--textbox-placeholder-color);opacity:1;font-family:var(--textbox-font-family);font-size:var(--textbox-font-size);font-weight:var(--textbox-font-weight)}.text-box-input:hover:not(:disabled){border-color:var(--textbox-border-hover)}.text-box-input:focus{border-color:var(--textbox-border-focus);box-shadow:var(--textbox-focus-shadow)}.text-box-input:disabled{background:var(--textbox-disabled-background);color:var(--textbox-disabled-color);border-color:var(--textbox-disabled-border);cursor:not-allowed}.text-box-input:read-only{cursor:default}.text-box-password-button{width:32px;height:32px;color:var(--textbox-icon-color);cursor:pointer;background:0 0;border:none;border-radius:4px;justify-content:center;align-items:center;padding:0;transition:color .2s,background-color .2s;display:flex;position:absolute;top:50%;right:8px;transform:translateY(-50%)}.text-box-password-button:hover:not(:disabled){color:var(--textbox-icon-hover-color);background:#0000000d}.text-box-password-button:disabled{cursor:not-allowed;opacity:.5}.text-box-password-icon{width:19px;height:19px;display:block}@media (width<=768px){:host{width:100%}.text-box-input{font-size:var(--textbox-font-size)}}`})))()}var d;function init_text_box$1(){return(init_text_box$1=e((()=>{a(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL3RleHQtYm94L3RleHQtYm94Lmh0bWw(),init_text_box(),o(),d=class TextBox{placeholder=``;value=``;type=`text`;disabled=!1;readonly=!1;customClass=``;valueChange=new r;inputChange=new r;clicked=new r;showPassword=!1;get inputType(){return this.type===`password`?this.showPassword?`text`:`password`:this.type}togglePassword(e){e.stopPropagation(),this.showPassword=!this.showPassword}onInput(e){let t=e.target;this.value=t.value,this.valueChange.emit(this.value),this.inputChange.emit(this.value)}onClick(e){this.clicked.emit(e)}static propDecorators={placeholder:[{type:i}],value:[{type:i}],type:[{type:i}],disabled:[{type:i}],readonly:[{type:i}],customClass:[{type:i},{type:n,args:[`class`]}],valueChange:[{type:c}],inputChange:[{type:c}],clicked:[{type:c}]}},d=s([t({selector:`brb-text-box`,standalone:!0,imports:[],template:l,styles:[u]})],d)})))()}var f,p,m,h,g,_,v,y,b,x;function init_text_box_stories(){return(init_text_box_stories=e((()=>{init_text_box$1(),f={title:`Components/Text Box`,component:d,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{placeholder:{control:`text`,description:`Placeholder text displayed inside the text box`},value:{control:`text`,description:`Current value of the text box`},type:{control:`select`,options:[`text`,`password`,`email`,`number`,`tel`,`search`],description:`Input type`},disabled:{control:`boolean`,description:`Disable the text box`},readonly:{control:`boolean`,description:`Make the text box read-only`},customClass:{control:`text`,description:`Custom CSS class provided by the developer`},valueChange:{action:`valueChange`,description:`Emitted when the value changes`},inputChange:{action:`inputChange`,description:`Emitted when the user types`},clicked:{action:`clicked`,description:`Emitted when the text box is clicked`}}},p={args:{placeholder:`Flight Numbers.......`,value:``,type:`text`,disabled:!1,readonly:!1,customClass:``}},m={args:{placeholder:`Flight Numbers.......`,value:`ET123`,type:`text`,disabled:!1,readonly:!1,customClass:``}},h={args:{placeholder:`Enter password`,value:``,type:`password`,disabled:!1,readonly:!1,customClass:``}},g={args:{placeholder:`Enter email`,value:``,type:`email`,disabled:!1,readonly:!1,customClass:``}},_={args:{placeholder:`Enter number`,value:``,type:`number`,disabled:!1,readonly:!1,customClass:``}},v={args:{placeholder:`Flight Numbers.......`,value:``,type:`text`,disabled:!0,readonly:!1,customClass:``}},y={args:{placeholder:`Flight Numbers.......`,value:`ET123`,type:`text`,disabled:!1,readonly:!0,customClass:``}},b={args:{placeholder:`Flight Numbers.......`,value:``,type:`text`,disabled:!1,readonly:!1,customClass:`custom-text-box`},parameters:{docs:{description:{story:`Demonstrates how developers can customize the component using customClass and CSS custom properties.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Flight Numbers.......',
    value: '',
    type: 'text',
    disabled: false,
    readonly: false,
    customClass: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Flight Numbers.......',
    value: 'ET123',
    type: 'text',
    disabled: false,
    readonly: false,
    customClass: ''
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password',
    value: '',
    type: 'password',
    disabled: false,
    readonly: false,
    customClass: ''
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter email',
    value: '',
    type: 'email',
    disabled: false,
    readonly: false,
    customClass: ''
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    value: '',
    type: 'number',
    disabled: false,
    readonly: false,
    customClass: ''
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Flight Numbers.......',
    value: '',
    type: 'text',
    disabled: true,
    readonly: false,
    customClass: ''
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Flight Numbers.......',
    value: 'ET123',
    type: 'text',
    disabled: false,
    readonly: true,
    customClass: ''
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Flight Numbers.......',
    value: '',
    type: 'text',
    disabled: false,
    readonly: false,
    customClass: 'custom-text-box'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how developers can customize the component using customClass and CSS custom properties.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithValue`,`Password`,`Email`,`Number`,`Disabled`,`Readonly`,`CustomStyle`]})))()}init_text_box_stories();export{b as CustomStyle,p as Default,v as Disabled,g as Email,_ as Number,h as Password,y as Readonly,m as WithValue,x as __namedExportsOrder,f as default};