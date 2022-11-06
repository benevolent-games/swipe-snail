
import {noop as css} from "../../utils/template-noop.js"
export default css`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:host {
	display: block;
	flex: 0 0 100%;
	width: 100%;
	height: 100%;
	overflow-y: overlay;
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
