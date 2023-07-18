export default class NavigationModule {

    constructor(options) {
        this.options = {
            navigationElement: {
                sourceClassName: options?.navigationElement?.sourceClassName ?? 'navigation',
                activeClassName: options?.navigationElement?.activeClassName ?? 'navigation--active',
            },
            burgerElement: {
                sourceClassName: options?.burgerElement?.sourceClassName ?? 'burger',
                activeClassName: options?.burgerElement?.activeClassName ?? 'burger--active',
            },
            linkElement: {
                sourceClassName: options?.linkElement?.sourceClassName ?? 'navigation-link',
                activeClassName: options?.linkElement?.activeClassName ?? 'navigation-link--active',
            },
            topIndentElementOnScroll: {
                sourceClassName: options?.topIndentElementOnScroll?.sourceClassName ?? null
            },
            isAnchorNavigation: options?.isAnchorNavigation ?? false,
            activeLinkElementIndex: options?.activeLinkElementIndex ?? null,
            immediatelyActivateElements: options?.immediatelyActivateElements ?? false,
            immediatelyInitializeModule: options?.immediatelyInitializeModule ?? false,
            onShowNavigation: options?.onShowNavigation ?? null,
            onHideNavigation: options?.onHideNavigation ?? null,
        }

        this.$navigationElement = document.querySelector(`.${this.options.navigationElement.sourceClassName}`)
        this.$burgerElement     = document.querySelector(`.${this.options.burgerElement.sourceClassName}`)
        this.$linkElements      = document.querySelectorAll(`.${this.options.linkElement.sourceClassName}`)

        if (this.options.topIndentElementOnScroll.sourceClassName) {
            this.$topIndentElementOnScroll = document.querySelector(`.${this.options.topIndentElementOnScroll.sourceClassName}`)
        }
        
        this.bind()

        if (this.options.immediatelyInitializeModule) {
            this.init()
        }

        if (this.options.immediatelyActivateElements) {
            this._activateElements()
        }

        if (this.options.activeLinkElementIndex) {
            this._setActiveLinkElement(this.options.activeLinkElementIndex)
        }

    }

    bind() {
        this.burgerElementClickHandler = this.burgerElementClickHandler.bind(this)
        this.linkElementClickHandler   = this.linkElementClickHandler.bind(this)
    }

    init() {
        this.$burgerElement.addEventListener('click', this.burgerElementClickHandler)
        if (this.options.isAnchorNavigation) {
            this.$linkElements.forEach(($linkElement) => {
                $linkElement.addEventListener('click', this.linkElementClickHandler)
            })
        }
    }

    stop() {
        this.$burgerElement.removeEventListener('click', this.burgerElementClickHandler)
        if (this.options.isAnchorNavigation) {
            this.$linkElements.forEach(($linkElement) => {
                $linkElement.removeEventListener('click', this.linkElementClickHandler)
            })
        }
    }

    burgerElementClickHandler(event) {
        if (this._navigationElementIsActive()) {
            this._disactivateElements()
            return
        }
        this._activateElements()
    }

    linkElementClickHandler(event) {
        if (this.options.isAnchorNavigation) {
            const linkElementIndex = this._getLinkElementIndex(event.target)
            this._disactivateElements()
            this._scrollToElement(event.target)
            this._setActiveLinkElement(linkElementIndex)
            return
        }
    }

    _activateElements() {
        this._activateNavigationElement()
        this._activateBurgerElement()
        this._disablePageScrolling()
        
        if (this.options.onShowNavigation) {
            this.options.onShowNavigation()
        }
    }

    _disactivateElements() {
        this._disactivateNavigationElement()
        this._disactivateBurgerElement()
        this._enabledPageScrolling()

        if (this.options.onHideNavigation) {
            this.options.onHideNavigation()
        }
    }

    _disablePageScrolling() {
        document.body.style.overflow = 'hidden'
    }

    _enabledPageScrolling() {
        document.body.style.overflow = ''
    }

    _navigationElementIsActive() {
        return this.$navigationElement.classList.contains(`${this.options.navigationElement.activeClassName}`)
    }

    _activateNavigationElement() {
        this.$navigationElement.classList.add(`${this.options.navigationElement.activeClassName}`)
    }

    _disactivateNavigationElement() {
        this.$navigationElement.classList.remove(`${this.options.navigationElement.activeClassName}`)
    }

    _activateBurgerElement() {
        this.$burgerElement.classList.add(`${this.options.burgerElement.activeClassName}`)
    }

    _disactivateBurgerElement() {
        this.$burgerElement.classList.remove(`${this.options.burgerElement.activeClassName}`)
    }

    _scrollToElement($linkElement) {
        const hrefId   = $linkElement.getAttribute('href').slice(1)
        const element  = document.querySelector(`${hrefId}`)
        const position = element.getBoundingClientRect().top
        const distance = position - (this.$topIndentElementOnScroll ? this.$topIndentElementOnScroll.offsetHeight : 0)

        window.scrollBy({
            top: distance,
            behavior: 'smooth'
        });        
    }

    _getLinkElementIndex($linkElement) {

        const array = Array.from(this.$linkElements)
        const index = array.indexOf($linkElement)

        return index

    }

    _setActiveLinkElement(linkElementIndex) {

        this.$linkElements.forEach(($currentLinkElement, index) => {

            linkElementIndex === index
                ? $currentLinkElement.classList.add(`${this.options.linkElement.activeClassName}`)
                : $currentLinkElement.classList.remove(`${this.options.linkElement.activeClassName}`)

        })

    }

}