
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
	overflow-x: hidden;
	overflow-y: auto;
	overflow-y: overlay;
	touch-action: pan-y;
}

:host::-webkit-scrollbar {
	width: var(--snail-scrollbar-width, 4px);
	height: 0px;
}

:host::-webkit-scrollbar-track {
	background: var(--snail-scrollbar-track, #0000);
}

:host::-webkit-scrollbar-thumb {
	background: var(--snail-scrollbar-thumb, #fff8);
}

`
