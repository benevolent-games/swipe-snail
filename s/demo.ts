
import {hashrouter} from "./hashrouter.js"
import {SnailPanel} from "./elements/panel/element.js"
import {SnailSystem} from "./elements/system/element.js"

const elements = {
	snail: {
		system: (
			document
				.querySelector<SnailSystem>("snail-system")!
		),
		getPanel: (hash: string) => (
			document
				.querySelector<SnailPanel>(`snail-panel[data-route="${hash}"]`)
		),
	},
}

let routingCount = 0

function openPanel(hash: string) {
	const currentCount = routingCount++
	const panel = elements.snail.getPanel(hash)
	if (panel) {
		if (currentCount === 0)
			elements.snail.system.goInstantly(panel)
		else
			elements.snail.system.go(panel)
	}
	else
		console.error(`unknown route: "${hash}"`)
}

const router = hashrouter({
	"#/": openPanel,
	"#/left": openPanel,
	"#/right": openPanel,
})

window.addEventListener("hashchange", router.hashchange)
requestAnimationFrame(router.hashchange)
