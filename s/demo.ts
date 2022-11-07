
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

const router = hashrouter((route, count) => {
	const panel = elements.snail.getPanel(route)
	if (panel) {
		if (count === 0)
			elements.snail.system.goInstantly(panel)
		else
			elements.snail.system.go(panel)
	}
	else
		console.error(`unknown route: "${route}"`)
})

SnailSystem
	.events
	.PanelChangeEvent
		.listen(elements.snail.system)
		.handle(event => {
			const panel = event.detail
			const route = panel.getAttribute("data-route")!
			router.update(route)
		})
