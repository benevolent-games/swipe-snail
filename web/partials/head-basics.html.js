import { html } from "xiome/x/toolbox/hamster-html/html.js";
export default ({ title, v }) => html `

<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="darkreader" content="dark"/>
<title>${title}</title>

<link rel=stylesheet href="${v("/index.css")}"/>
`;
//# sourceMappingURL=head-basics.html.js.map