import { HtmlTemplate } from "xiome/x/toolbox/hamster-html/html.js";
import { WebsiteContext } from "xiome/x/toolbox/hamster-html/website/build-website-types.js";
declare const _default: ({ v, mainContent, headContent, htmlClass, ...options }: WebsiteContext & {
    htmlClass?: string | undefined;
    headContent?: HtmlTemplate | undefined;
    mainContent?: HtmlTemplate | undefined;
}) => HtmlTemplate;
export default _default;
