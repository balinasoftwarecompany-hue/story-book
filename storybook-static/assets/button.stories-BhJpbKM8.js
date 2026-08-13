import{i as e}from"./preload-helper-CWn0lyrb.js";import{J as t,O as n,Ot as r,Qn as i,Z as a,Zn as o,z as s}from"./angular-platform-BAlEzuMa.js";var c,l=e((()=>{c=`<button
  [type]="type"
  [disabled]="disabled"
  [class]="'lib-button
    lib-button-' + variant + '
    lib-button-' + color + '
    lib-button-' + size"
  (click)="handleClick($event)"
>
  {{ text }}
</button>`})),u,d=e((()=>{u=`.lib-button{cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #0000;border-radius:8px;outline:none;justify-content:center;align-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-weight:600;line-height:1;transition:background-color .2s,border-color .2s,color .2s,box-shadow .2s,transform .1s;display:inline-flex}.lib-button-xs{border-radius:6px;min-height:28px;padding:5px 10px;font-size:12px}.lib-button-sm{border-radius:7px;min-height:34px;padding:7px 14px;font-size:13px}.lib-button-md{border-radius:8px;min-height:40px;padding:9px 18px;font-size:14px}.lib-button-lg{border-radius:9px;min-height:46px;padding:11px 22px;font-size:16px}.lib-button-xl{border-radius:10px;min-height:54px;padding:13px 28px;font-size:18px}.lib-button-solid.lib-button-primary{color:#fff;background:#2563eb;border-color:#2563eb}.lib-button-solid.lib-button-primary:hover:not(:disabled){background:#1d4ed8;border-color:#1d4ed8}.lib-button-solid.lib-button-primary:active:not(:disabled){background:#1e40af;border-color:#1e40af;transform:translateY(1px)}.lib-button-solid.lib-button-secondary{color:#fff;background:#64748b;border-color:#64748b}.lib-button-solid.lib-button-secondary:hover:not(:disabled){background:#475569;border-color:#475569}.lib-button-solid.lib-button-secondary:active:not(:disabled){background:#334155;border-color:#334155;transform:translateY(1px)}.lib-button-solid.lib-button-success{color:#fff;background:#16a34a;border-color:#16a34a}.lib-button-solid.lib-button-success:hover:not(:disabled){background:#15803d;border-color:#15803d}.lib-button-solid.lib-button-success:active:not(:disabled){background:#166534;border-color:#166534;transform:translateY(1px)}.lib-button-solid.lib-button-danger{color:#fff;background:#dc2626;border-color:#dc2626}.lib-button-solid.lib-button-danger:hover:not(:disabled){background:#b91c1c;border-color:#b91c1c}.lib-button-solid.lib-button-danger:active:not(:disabled){background:#991b1b;border-color:#991b1b;transform:translateY(1px)}.lib-button-solid.lib-button-warning{color:#fff;background:#f59e0b;border-color:#f59e0b}.lib-button-solid.lib-button-warning:hover:not(:disabled){background:#d97706;border-color:#d97706}.lib-button-solid.lib-button-warning:active:not(:disabled){background:#b45309;border-color:#b45309;transform:translateY(1px)}.lib-button-solid.lib-button-info{color:#fff;background:#0891b2;border-color:#0891b2}.lib-button-solid.lib-button-info:hover:not(:disabled){background:#0e7490;border-color:#0e7490}.lib-button-solid.lib-button-info:active:not(:disabled){background:#155e75;border-color:#155e75;transform:translateY(1px)}.lib-button-solid.lib-button-neutral{color:#fff;background:#374151;border-color:#374151}.lib-button-solid.lib-button-neutral:hover:not(:disabled){background:#1f2937;border-color:#1f2937}.lib-button-solid.lib-button-neutral:active:not(:disabled){background:#111827;border-color:#111827;transform:translateY(1px)}.lib-button-outline.lib-button-primary{color:#2563eb;background:0 0;border-color:#2563eb}.lib-button-outline.lib-button-primary:hover:not(:disabled){background:#eff6ff}.lib-button-outline.lib-button-primary:active:not(:disabled){background:#dbeafe;border-color:#1d4ed8}.lib-button-outline.lib-button-secondary{color:#475569;background:0 0;border-color:#64748b}.lib-button-outline.lib-button-secondary:hover:not(:disabled){background:#f1f5f9}.lib-button-outline.lib-button-secondary:active:not(:disabled){background:#e2e8f0}.lib-button-outline.lib-button-success{color:#15803d;background:0 0;border-color:#16a34a}.lib-button-outline.lib-button-success:hover:not(:disabled){background:#f0fdf4}.lib-button-outline.lib-button-success:active:not(:disabled){background:#dcfce7}.lib-button-outline.lib-button-danger{color:#dc2626;background:0 0;border-color:#dc2626}.lib-button-outline.lib-button-danger:hover:not(:disabled){background:#fef2f2}.lib-button-outline.lib-button-danger:active:not(:disabled){background:#fee2e2}.lib-button-outline.lib-button-warning{color:#d97706;background:0 0;border-color:#f59e0b}.lib-button-outline.lib-button-warning:hover:not(:disabled){background:#fffbeb}.lib-button-outline.lib-button-warning:active:not(:disabled){background:#fef3c7}.lib-button-outline.lib-button-info{color:#0891b2;background:0 0;border-color:#0891b2}.lib-button-outline.lib-button-info:hover:not(:disabled){background:#ecfeff}.lib-button-outline.lib-button-info:active:not(:disabled){background:#cffafe}.lib-button-outline.lib-button-neutral{color:#374151;background:0 0;border-color:#374151}.lib-button-outline.lib-button-neutral:hover:not(:disabled){background:#f3f4f6}.lib-button-outline.lib-button-neutral:active:not(:disabled){background:#e5e7eb}.lib-button-ghost.lib-button-primary{color:#2563eb;background:0 0;border-color:#0000}.lib-button-ghost.lib-button-primary:hover:not(:disabled){background:#eff6ff}.lib-button-ghost.lib-button-primary:active:not(:disabled){background:#dbeafe}.lib-button-ghost.lib-button-secondary{color:#475569;background:0 0;border-color:#0000}.lib-button-ghost.lib-button-secondary:hover:not(:disabled){background:#f1f5f9}.lib-button-ghost.lib-button-secondary:active:not(:disabled){background:#e2e8f0}.lib-button-ghost.lib-button-success{color:#15803d;background:0 0;border-color:#0000}.lib-button-ghost.lib-button-success:hover:not(:disabled){background:#f0fdf4}.lib-button-ghost.lib-button-success:active:not(:disabled){background:#dcfce7}.lib-button-ghost.lib-button-danger{color:#dc2626;background:0 0;border-color:#0000}.lib-button-ghost.lib-button-danger:hover:not(:disabled){background:#fef2f2}.lib-button-ghost.lib-button-danger:active:not(:disabled){background:#fee2e2}.lib-button-ghost.lib-button-warning{color:#d97706;background:0 0;border-color:#0000}.lib-button-ghost.lib-button-warning:hover:not(:disabled){background:#fffbeb}.lib-button-ghost.lib-button-warning:active:not(:disabled){background:#fef3c7}.lib-button-ghost.lib-button-info{color:#0891b2;background:0 0;border-color:#0000}.lib-button-ghost.lib-button-info:hover:not(:disabled){background:#ecfeff}.lib-button-ghost.lib-button-info:active:not(:disabled){background:#cffafe}.lib-button-ghost.lib-button-neutral{color:#374151;background:0 0;border-color:#0000}.lib-button-ghost.lib-button-neutral:hover:not(:disabled){background:#f3f4f6}.lib-button-ghost.lib-button-neutral:active:not(:disabled){background:#e5e7eb}.lib-button:focus-visible{outline-offset:2px;outline:3px solid #2563eb40}.lib-button:disabled{cursor:not-allowed;opacity:.7;color:#9ca3af!important;box-shadow:none!important;background:#e5e7eb!important;border-color:#d1d5db!important;transform:none!important}@media (width<=480px){.lib-button-xl{min-height:50px;padding:11px 22px;font-size:16px}.lib-button-lg{min-height:44px;padding:10px 18px;font-size:15px}.lib-button-md{min-height:38px;padding:8px 16px}}`})),f,p=e((()=>{i(),l(),d(),n(),f=class Button{text=`Button`;variant=`solid`;color=`primary`;size=`md`;disabled=!1;type=`button`;buttonClick=new r;handleClick(e){this.disabled||this.buttonClick.emit(e)}static propDecorators={text:[{type:t}],variant:[{type:t}],color:[{type:t}],size:[{type:t}],disabled:[{type:t}],type:[{type:t}],buttonClick:[{type:a}]}},f=o([s({selector:`lib-button`,imports:[],template:c,styles:[u]})],f)})),m,h,g,_,v,y,b,x,S;e((()=>{p(),m={title:`Components/Button`,component:f,parameters:{layout:`centered`},argTypes:{text:{control:`text`,description:`Button text`},variant:{control:`select`,options:[`solid`,`outline`,`ghost`],description:`Button style`},color:{control:`select`,options:[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`neutral`],description:`Button color`},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`],description:`Button size`},disabled:{control:`boolean`},type:{control:`select`,options:[`button`,`submit`,`reset`]},buttonClick:{action:`button clicked`}}},h={args:{text:`Primary Button`,variant:`solid`,color:`primary`,size:`md`}},g={args:{text:`Outline Button`,variant:`outline`,color:`primary`,size:`md`}},_={args:{text:`Ghost Button`,variant:`ghost`,color:`primary`,size:`md`}},v={args:{text:`Delete`,variant:`solid`,color:`danger`,size:`md`}},y={args:{text:`Save`,variant:`solid`,color:`success`,size:`md`}},b={args:{text:`Large Button`,variant:`solid`,color:`primary`,size:`lg`}},x={args:{text:`Disabled`,variant:`solid`,color:`primary`,size:`md`,disabled:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    variant: 'solid',
    color: 'primary',
    size: 'md'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Outline Button',
    variant: 'outline',
    color: 'primary',
    size: 'md'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Ghost Button',
    variant: 'ghost',
    color: 'primary',
    size: 'md'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Delete',
    variant: 'solid',
    color: 'danger',
    size: 'md'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Save',
    variant: 'solid',
    color: 'success',
    size: 'md'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Large Button',
    variant: 'solid',
    color: 'primary',
    size: 'lg'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Disabled',
    variant: 'solid',
    color: 'primary',
    size: 'md',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S=[`Solid`,`Outline`,`Ghost`,`Danger`,`Success`,`Large`,`Disabled`]}))();export{v as Danger,x as Disabled,_ as Ghost,b as Large,g as Outline,h as Solid,y as Success,S as __namedExportsOrder,m as default};