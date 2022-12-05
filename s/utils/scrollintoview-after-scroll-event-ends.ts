import {State} from "./initialize-state.js"

export function scrollIntoViewAfterScrollEventEnds(system: HTMLElement, state: State) {
	return setTimeout(() => {
		if (!state.isDown) {
			const observedSection = document.querySelector("[data-observed]")
			observedSection?.scrollIntoView({
				behavior: "smooth",
			})
		}
		system.removeAttribute("data-swipable")
	}, 66)
}
