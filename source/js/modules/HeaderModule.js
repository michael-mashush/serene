export default class HeaderModule {

    constructor(options) {
        this.options = {
            headerElement: {
                sourceClassName: options?.headerElement?.sourceClassName ?? 'header',
                activeClassName: options?.headerElement?.activeClassName ?? 'header--active',
            },
            immediatelyInitializeModule: options?.immediatelyInitializeModule ?? false,
            triggerPoint: options?.triggerPoint ?? 0
        }

        this.$headerElement = document.querySelector(`.${this.options.headerElement.sourceClassName}`)

        this.bind()

        if (this.options.immediatelyInitializeModule) {
            this.init()
        }
    }

    bind() {
        this.windowScrollHandler = this.windowScrollHandler.bind(this)
    }

    init() {
        window.addEventListener('scroll', this.windowScrollHandler)
    }

    stop() {
        window.removeEventListener('scroll', this.windowScrollHandler)
    }

    windowScrollHandler() {
        if (this._triggerPointIsPassed()) {
            this._activateHeaderElement()
            return
        }
        this._disactivateHeaderElement()
    }

    _triggerPointIsPassed() {
        return this.options.triggerPoint < window.scrollY
    }

    _activateHeaderElement() {
        this.$headerElement.classList.add(`${this.options.headerElement.activeClassName}`)
    }

    _disactivateHeaderElement() {
        this.$headerElement.classList.remove(`${this.options.headerElement.activeClassName}`)
    }

}