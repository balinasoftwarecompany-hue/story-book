import{n as e}from"./rolldown-runtime-D_-wTCJc.js";import{G as t,H as n,K as r,Lt as i,Q as a,Zn as o,j as s,q as c,qn as l,tt as u}from"./angular-platform-BtkHVU7X.js";var d;function init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2RhdGUtaW5wdXQvZGF0ZS1pbnB1dC5odG1s(){return(init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2RhdGUtaW5wdXQvZGF0ZS1pbnB1dC5odG1s=e((()=>{d=`<div class="date-input-container" [class.date-input-disabled]="disabled" [class.date-input-open]="isOpen">
  <div class="date-input-field" (click)="toggleCalendar($event)">

    <!-- LABEL -->

    @if (label) {

    <label class="date-input-label">

      {{ label }}

    </label>

    }


    <!-- VALUE -->

    <span class="date-input-value" [class.date-input-placeholder]="!value">

      {{ value || placeholder }}

    </span>


    <!-- CALENDAR ICON -->

    <span class="calendar-icon">

      <span class="calendar-top"></span>

      <span class="calendar-body"></span>

    </span>

  </div>



  @if (isOpen) {

  <div class="date-picker" (click)="$event.stopPropagation()">


    <div class="date-picker-header">

      <button type="button" class="month-button" aria-label="Previous month" (click)="previousMonth($event)">

        ‹

      </button>


      <span class="month-title">

        {{ monthName }} {{ year }}

      </span>


      <button type="button" class="month-button" aria-label="Next month" (click)="nextMonth($event)">

        ›

      </button>

    </div>


    <div class="week-days">

      <span>Sun</span>

      <span>Mon</span>

      <span>Tue</span>

      <span>Wed</span>

      <span>Thu</span>

      <span>Fri</span>

      <span>Sat</span>

    </div>



    <div class="calendar-days">

      @for (
      date of calendarDays;
      track date.getTime()
      ) {

      <button type="button" class="calendar-day" [class.other-month]="
              !isCurrentMonth(date)
            " [class.today]="
              isToday(date)
            " [class.selected]="
              isSelected(date)
            " (click)="
              selectDate(date, $event)
            ">

        {{ date.getDate() }}

      </button>

      }

    </div>

  </div>

  }

</div>`})))()}var f;function init_date_input(){return(init_date_input=e((()=>{f=`:host{--date-width:300px;--date-height:44px;--date-background:#fff;--date-border:1px solid #a9a9a9;--date-border-hover:#777;--date-border-focus:#68479b;--date-radius:6px;--date-text:#222;--date-placeholder:#777;--date-primary:#68479b;--date-hover:#f3f0f7;--date-selected:#68479b;--date-selected-text:#fff;--date-font-family:Arial, Helvetica, sans-serif;--date-font-size:14px;--date-font-weight:600;--date-shadow:0 4px 12px #0000001f;--date-icon-color:#555;--date-disabled-background:#f5f5f5;--date-disabled-border:#d0d0d0;--date-disabled-text:#999;width:var(--date-width);box-sizing:border-box;font-family:var(--date-font-family);display:block;position:relative}.date-input-container{box-sizing:border-box;width:100%;position:relative}.date-input-field{width:100%;height:var(--date-height);box-sizing:border-box;border:var(--date-border);border-radius:var(--date-radius);background:var(--date-background);color:var(--date-text);font-size:var(--date-font-size);font-weight:var(--date-font-weight);cursor:pointer;align-items:center;padding:0 50px 0 18px;transition:border-color .2s,box-shadow .2s,background-color .2s;display:flex;position:relative}.date-input-field:hover{border-color:var(--date-border-hover)}.date-input-open .date-input-field{border-color:var(--date-border-focus);box-shadow:0 0 0 1px #68479b1f}.date-input-label{background:var(--date-background);color:var(--date-border-focus);pointer-events:none;padding:0 6px;font-size:13px;font-weight:500;line-height:1;position:absolute;top:0;left:14px;transform:translateY(-50%)}.date-input-value{white-space:nowrap;text-overflow:ellipsis;color:var(--date-text);overflow:hidden}.date-input-placeholder{color:var(--date-placeholder)}.calendar-icon{box-sizing:border-box;border:1.8px solid var(--date-icon-color);border-radius:3px;width:18px;height:18px;position:absolute;right:17px}.calendar-top{border-top:1.8px solid var(--date-icon-color);width:100%;position:absolute;top:4px;left:0}.calendar-icon:before,.calendar-icon:after{content:"";background:var(--date-icon-color);border-radius:2px;width:2px;height:6px;position:absolute;top:-4px}.calendar-icon:before{left:4px}.calendar-icon:after{right:4px}.date-picker{z-index:1000;box-sizing:border-box;border-radius:var(--date-radius);width:100%;min-width:300px;box-shadow:var(--date-shadow);background:#fff;border:1px solid #d5d5d5;padding:14px;position:absolute;top:calc(100% + 6px);left:0}.date-picker-header{justify-content:space-between;align-items:center;margin-bottom:14px;display:flex}.month-title{color:var(--date-text);font-size:15px;font-weight:700}.month-button{color:#555;cursor:pointer;background:0 0;border:none;border-radius:50%;justify-content:center;align-items:center;width:32px;height:32px;font-size:24px;line-height:1;transition:background-color .15s,color .15s;display:flex}.month-button:hover{background:var(--date-hover);color:var(--date-primary)}.week-days{text-align:center;color:#777;grid-template-columns:repeat(7,1fr);margin-bottom:6px;font-size:12px;font-weight:600;display:grid}.calendar-days{grid-template-columns:repeat(7,1fr);gap:4px;display:grid}.calendar-day{aspect-ratio:1;width:100%;color:var(--date-text);font-family:var(--date-font-family);cursor:pointer;background:0 0;border:none;border-radius:50%;justify-content:center;align-items:center;font-size:13px;transition:background-color .15s,color .15s;display:flex}.calendar-day:hover{background:var(--date-hover)}.calendar-day.other-month{color:silver}.calendar-day.today{border:1px solid var(--date-primary);color:var(--date-primary)}.calendar-day.selected{background:var(--date-selected);color:var(--date-selected-text);border:none}.calendar-day.selected.today{background:var(--date-selected);color:var(--date-selected-text)}.date-input-disabled .date-input-field{background:var(--date-disabled-background);border-color:var(--date-disabled-border);color:var(--date-disabled-text);cursor:not-allowed}@media (width<=768px){:host{width:100%}.date-picker{min-width:100%}}`})))()}var p;function init_date_input$1(){return(init_date_input$1=e((()=>{o(),init_vite_plugin_angular_raw_L2hvbWUvYXRvbWljL2JhbGluYS11aS13b3Jrc3BhY2UvcHJvamVjdHMvYmFsaW5hdWktY29tcG9uZW50cy9zcmMvbGliL2RhdGUtaW5wdXQvZGF0ZS1pbnB1dC5odG1s(),init_date_input(),s(),p=class DateInput{elementRef;label=``;placeholder=``;value=``;disabled=!1;readonly=!1;customClass=``;valueChange=new i;dateChange=new i;openedChange=new i;clicked=new i;isOpen=!1;currentDate=new Date;constructor(e){this.elementRef=e}ngOnInit(){if(this.value){let e=this.parseDate(this.value);e&&(this.currentDate=new Date(e.getFullYear(),e.getMonth(),1))}}get calendarDays(){let e=this.currentDate.getFullYear(),t=this.currentDate.getMonth(),n=new Date(e,t,1),r=new Date(e,t+1,0),i=[],a=n.getDay();for(let n=0;n<a;n++)i.push(new Date(e,t,n-a+1));for(let n=1;n<=r.getDate();n++)i.push(new Date(e,t,n));let o=42-i.length;for(let n=1;n<=o;n++)i.push(new Date(e,t+1,n));return i}get monthName(){return this.currentDate.toLocaleString(`default`,{month:`long`})}get year(){return this.currentDate.getFullYear()}toggleCalendar(e){this.disabled||this.readonly||(e&&this.clicked.emit(e),this.isOpen=!this.isOpen,this.openedChange.emit(this.isOpen))}previousMonth(e){e?.stopPropagation(),this.currentDate=new Date(this.year,this.currentDate.getMonth()-1,1)}nextMonth(e){e?.stopPropagation(),this.currentDate=new Date(this.year,this.currentDate.getMonth()+1,1)}selectDate(e,t){if(t.stopPropagation(),this.disabled||this.readonly)return;let n=new Date(e.getFullYear(),e.getMonth(),e.getDate());this.value=this.formatDate(n),this.valueChange.emit(this.value),this.dateChange.emit(n),this.clicked.emit(t),this.isOpen=!1,this.openedChange.emit(!1)}formatDate(e){let t=String(e.getDate()).padStart(2,`0`),n=String(e.getMonth()+1).padStart(2,`0`);return`${e.getFullYear()}-${n}-${t}`}parseDate(e){let t=e.split(`-`);if(t.length!==3)return null;let n=Number(t[0]),r=Number(t[1]),i=Number(t[2]);if(!n||!r||!i)return null;let a=new Date(n,r-1,i);return a.getFullYear()!==n||a.getMonth()!==r-1||a.getDate()!==i?null:a}isCurrentMonth(e){return e.getMonth()===this.currentDate.getMonth()&&e.getFullYear()===this.currentDate.getFullYear()}isToday(e){let t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}isSelected(e){return this.value===this.formatDate(e)}onDocumentClick(e){if(!this.isOpen)return;let t=e.target;this.elementRef.nativeElement.contains(t)||this.closeCalendar()}closeCalendar(){this.isOpen&&(this.isOpen=!1,this.openedChange.emit(!1))}static ctorParameters=()=>[{type:t}];static propDecorators={label:[{type:a}],placeholder:[{type:a}],value:[{type:a}],disabled:[{type:a}],readonly:[{type:a}],customClass:[{type:a},{type:r,args:[`class`]}],valueChange:[{type:u}],dateChange:[{type:u}],openedChange:[{type:u}],clicked:[{type:u}],onDocumentClick:[{type:c,args:[`document:click`,[`$event`]]}]}},p=l([n({selector:`brb-date-input`,standalone:!0,imports:[],template:d,styles:[f]})],p)})))()}var m,h,g,_,v,y,b;function init_date_input_stories(){return(init_date_input_stories=e((()=>{init_date_input$1(),m={title:`Components/Date Input`,component:p,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{label:{control:`text`},placeholder:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},readonly:{control:`boolean`},customClass:{control:`text`},valueChange:{action:`valueChange`},dateChange:{action:`dateChange`},openedChange:{action:`openedChange`},clicked:{action:`clicked`}}},h={args:{label:`Date`,placeholder:`Select date`,value:``,disabled:!1,readonly:!1,customClass:``}},g={args:{label:`Date`,placeholder:`Select date`,value:`2026-08-18`,disabled:!1,readonly:!1,customClass:``}},_={args:{label:`Date`,placeholder:`Select date`,value:``,disabled:!0,readonly:!1,customClass:``}},v={args:{label:`Date`,placeholder:`Select date`,value:`2026-08-18`,disabled:!1,readonly:!0,customClass:``}},y={args:{label:`Date`,placeholder:`Select date`,value:``,disabled:!1,readonly:!1,customClass:`custom-date-input`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    placeholder: 'Select date',
    value: '',
    disabled: false,
    readonly: false,
    customClass: ''
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    placeholder: 'Select date',
    value: '2026-08-18',
    disabled: false,
    readonly: false,
    customClass: ''
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    placeholder: 'Select date',
    value: '',
    disabled: true,
    readonly: false,
    customClass: ''
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    placeholder: 'Select date',
    value: '2026-08-18',
    disabled: false,
    readonly: true,
    customClass: ''
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    placeholder: 'Select date',
    value: '',
    disabled: false,
    readonly: false,
    customClass: 'custom-date-input'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithValue`,`Disabled`,`Readonly`,`CustomStyle`]})))()}init_date_input_stories();export{y as CustomStyle,h as Default,_ as Disabled,v as Readonly,g as WithValue,b as __namedExportsOrder,m as default};