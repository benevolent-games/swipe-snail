
import {noop as css} from "../../utils/template-noop.js"
export default css`

:host {
	display: inline-flex;
	width: 100%;
	height: 100vh;
	text-align: center;
	vertical-align:top;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	overflow: auto;
	padding: 1em;
	white-space: normal;
	overflow: overlay;
}

:host-context([border]) {
	box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15);
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

`
