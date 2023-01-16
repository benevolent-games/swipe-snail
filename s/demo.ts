
import {hashrouter} from "./hashrouter.js"
import {SnailPanel} from "./elements/panel/element.js"
import {SnailSystem} from "./elements/system/element.js"

const elements = {
	system: (
		document
			.querySelector<SnailSystem>("snail-system")!
	),
	getPanel: (hash: string) => (
		document
			.querySelector<SnailPanel>(`snail-panel[data-route="${hash}"]`)
	),
}

const router = hashrouter((route, count) => {
	const panel = elements.getPanel(route)
	if (panel) {
		if (count === 0)
			elements.system.goInstantly(panel)
		else
			elements.system.go(panel)
	}
	else
		console.error(`unknown route: "${route}"`)
})

router.hashchange()

SnailSystem
	.events
	.PanelChangeEvent
		.listen(elements.system)
		.handle(event => {
			const panel = event.detail
			const route = panel.getAttribute("data-route")!
			router.update(route)
		})
