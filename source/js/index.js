import AOS              from 'aos'
import NavigationModule from './modules/NavigationModule.js'
import HeaderModule     from './modules/HeaderModule.js'

AOS.init({
    duration: 500,
    easing: 'ease-in-out-sine',
    offset: 0,
})

const navigationModule = new NavigationModule({
    navigationElement: {
        sourceClassName: 'navigation',
        activeClassName: 'navigation--active',
    },
    burgerElement: {
        sourceClassName: 'burger-button',
        activeClassName: 'burger-button--active',
    },
    linkElement: {
        sourceClassName: 'navigation__link',
        activeClassName: 'navigation__link--active',
    },
    topIndentElementOnScroll: {
        sourceClassName: 'header-section'
    },
    immediatelyInitializeModule: true
})

const headerModule = new HeaderModule({
    headerElement: {
        sourceClassName: 'header-section',
        activeClassName: 'header-section--active',
    },
    triggerPoint: 0,
    immediatelyInitializeModule: true
})