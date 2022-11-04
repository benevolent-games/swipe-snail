
import {noop as css} from "../../utils/template-noop.js"
export default css`

:host {
	width: 100%;
	display: block;
	text-align: center;
	overflow-x: hidden;
	overflow-y: hidden;
	white-space: nowrap;
	user-select: none;
	cursor: pointer;
	/* im not sure if these two under are needed*/
	transition: all 0.2s;
	will-change: transform;
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
