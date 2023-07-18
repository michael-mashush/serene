export default function controlsSupportInsideSwiper(swipers, controlsTagNames = ['a']) {

    function getSlideIndex($control) {
        const $track = $control.closest('.swiper-wrapper')
        const $slide = $control.closest('.swiper-slide')
        const slides = Array.from($track.querySelectorAll('.swiper-slide'))
        return slides.indexOf($slide)
    }

    for (const swiper of swipers) {
        const controlsPerTagNames  = controlsTagNames.map((controlTagName) => Array.from(swiper.el.querySelectorAll(`${controlTagName}`)))
        const controlsList         = controlsPerTagNames.flat(1)
        const modifiedControlsList = controlsList.map(($controlElement) => ({$controlElement, slideIndex: getSlideIndex($controlElement)}))
        for (const {$controlElement, slideIndex} of modifiedControlsList) {
            $controlElement.addEventListener('focus', () => swiper.slideTo(slideIndex))
        }
    }

}