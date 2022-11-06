
export function hashrouter<R extends {
		[route: string]: (hash: string) => (void | (() => void))
	}>(routesSpec: R) {

	const routes = new Map(Object.entries(routesSpec))
	const cleanups = new Set<() => void>()

	function hashchange() {
		let {hash} = location

		if (hash === "" || hash === "#")
			hash = "#/"
	
		const route = routes.get(hash)

		if (route) {
			for (const clean of cleanups)
				clean()
			cleanups.clear()
			const cleanup = route(hash) ?? (() => {})
			cleanups.add(cleanup)
		}
		else
			console.error(`route "${hash}" not found`)
	}

	return {
		hashchange,
		get goto() {
			return <{[P in keyof R]: () => void}>new Proxy({}, {
				get(t, p: string) {
					return () => {
						history.pushState({}, "", p)
					}
				},
			})
		},
	}
}
