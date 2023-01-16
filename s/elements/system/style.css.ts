
import {noop as css} from "../../utils/template-noop.js"
export default css`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:host {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: stretch;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

:host-context([data-grabbed]) {
	cursor: grabbing;
	cursor: -webkit-grabbing;
}

`
