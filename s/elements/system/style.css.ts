
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
	cursor: pointer;
}

:host-context([data-grabbed]) {
	cursor: grabbing;
	cursor: -webkit-grabbing;
}

:host::-webkit-scrollbar {
	width: 10px;
	height: 0px;
}

:host::-webkit-scrollbar-track {
	background: #f1f1f1;
}

:host::-webkit-scrollbar-thumb {
	background: #888;
}

:host-context([data-swipable]) {
	overflow-x: scroll;
}

`
