import{i as e}from"./preload-helper-CWn0lyrb.js";import{J as t,O as n,Ot as r,Qn as i,Z as a,Zn as o,f as s,p as c,z as l}from"./angular-platform-BAlEzuMa.js";import{n as u,t as d}from"./button.component-CAQwZn1P.js";var f,p=e((()=>{f=`.storybook-header{border-bottom:1px solid #0000001a;justify-content:space-between;align-items:center;padding:15px 20px;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;display:flex}.storybook-header svg{vertical-align:top;display:inline-block}.storybook-header h1{vertical-align:top;margin:6px 0 6px 10px;font-size:20px;font-weight:700;line-height:1;display:inline-block}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{color:#333;margin-right:10px;font-size:14px}`})),m,h=e((()=>{i(),p(),n(),s(),u(),m=class HeaderComponent{user=null;onLogin=new r;onLogout=new r;onCreateAccount=new r;static propDecorators={user:[{type:t}],onLogin:[{type:a}],onLogout:[{type:a}],onCreateAccount:[{type:a}]}},m=o([l({selector:`storybook-header`,standalone:!0,imports:[c,d],template:`
    <header>
      <div class="storybook-header">
        <div>
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
            </g>
          </svg>
          <h1>Acme</h1>
        </div>
        <div>
          <div *ngIf="user">
            <span class="welcome">
              Welcome, <b>{{ user.name }}</b
              >!
            </span>
            <storybook-button
              *ngIf="user"
              size="small"
              (onClick)="onLogout.emit($event)"
              label="Log out"
            ></storybook-button>
          </div>
          <div *ngIf="!user">
            <storybook-button
              *ngIf="!user"
              size="small"
              class="margin-left"
              (onClick)="onLogin.emit($event)"
              label="Log in"
            ></storybook-button>
            <storybook-button
              *ngIf="!user"
              size="small"
              [primary]="true"
              class="margin-left"
              (onClick)="onCreateAccount.emit($event)"
              label="Sign up"
            ></storybook-button>
          </div>
        </div>
      </div>
    </header>
  `,styles:[f]})],m)}));export{h as n,m as t};