import{i as e}from"./preload-helper-CWn0lyrb.js";import{O as t,Qn as n,Zn as r,f as i,p as a,z as o}from"./angular-platform-BAlEzuMa.js";import{n as s,t as c}from"./header.component-DUW9k0ik.js";var l,u=e((()=>{l=`.storybook-page{color:#333;max-width:600px;margin:0 auto;padding:48px 20px;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:24px}.storybook-page h2{vertical-align:top;margin:0 0 4px;font-size:32px;font-weight:700;line-height:1;display:inline-block}.storybook-page p{margin:1em 0}.storybook-page a{color:inherit}.storybook-page ul{margin:1em 0;padding-left:30px}.storybook-page li{margin-bottom:8px}.storybook-page .tip{vertical-align:top;color:#357a14;background:#e7fdd8;border-radius:1em;margin-right:10px;padding:4px 12px;font-size:11px;font-weight:700;line-height:12px;display:inline-block}.storybook-page .tip-wrapper{margin-top:40px;margin-bottom:40px;font-size:13px;line-height:20px}.storybook-page .tip-wrapper svg{vertical-align:top;width:12px;height:12px;margin-top:3px;margin-right:4px;display:inline-block}.storybook-page .tip-wrapper svg path{fill:#1ea7fd}`})),d,f=e((()=>{n(),u(),t(),i(),s(),d=class PageComponent{user=null;doLogout(){this.user=null}doLogin(){this.user={name:`Jane Doe`}}doCreateAccount(){this.user={name:`Jane Doe`}}},d=r([o({selector:`storybook-page`,standalone:!0,imports:[a,c],template:`
    <article>
      <storybook-header
        [user]="user"
        (onLogout)="doLogout()"
        (onLogin)="doLogin()"
        (onCreateAccount)="doCreateAccount()"
      ></storybook-header>
      <section class="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page data
          in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>
          .
        </p>
        <div class="tip-wrapper">
          <span class="tip">Tip</span> Adjust the width of the canvas with the
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  `,styles:[l]})],d)})),p,m,h,g,_,v,y;e((()=>{f(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Example/Page`,component:d,parameters:{layout:`fullscreen`}},_={},v={play:async({canvasElement:e})=>{let t=h(e),n=t.getByRole(`button`,{name:/Log in/i});await p(n).toBeInTheDocument(),await m.click(n),await p(n).not.toBeInTheDocument();let r=t.getByRole(`button`,{name:/Log out/i});await p(r).toBeInTheDocument()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}},y=[`LoggedOut`,`LoggedIn`]}))();export{v as LoggedIn,_ as LoggedOut,y as __namedExportsOrder,g as default};