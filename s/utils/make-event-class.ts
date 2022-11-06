
export function makeEventClass<xDetail>(eventName: string) {
	return class MyEvent extends CustomEvent<xDetail> {

		static readonly eventName = eventName

		static listen(...elements: HTMLElement[]) {
			return {
				handle: (func: (event: MyEvent) => void) => {

					for (const element of elements)
						element.addEventListener(eventName, <any>func)
	
					return () => {
						for (const element of elements)
							element.removeEventListener(eventName, <any>func)
					}
				}
			}
		}

		constructor(detail: xDetail) {
			super(eventName, {
				bubbles: true,
				cancelable: true,
				composed: true,
				detail,
			})
		}
	}
}
