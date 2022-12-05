
export function hashrouter(onChange: (route: string, count: number) => void) {

	let count = 0

	function hashchange() {
		const {hash} = location
		const route = (hash === "" || hash === "#")
			? "#/"
			: hash
		onChange(route, count++)
	}

	window.addEventListener("hashchange", hashchange)

	return {
		hashchange,
		update(route: string) {
			history.pushState({}, "", route)
		},
		dispose() {
			window.removeEventListener("hashchange", hashchange)
		},
	}
}
