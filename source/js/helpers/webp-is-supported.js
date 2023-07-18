export default function webpIsSupported() {

    function webpHandler(webpImage) {
        const correctHeight = (webpImage.height === 2)
        const correctWidth  = (webpImage.width === 2)
        
        correctHeight && correctWidth
            ? document.body.classList.add('with-webp')
            : document.body.classList.add('witout-webp')
    }

    const webpImage = new Image()

    webpImage.src     = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
    webpImage.onload  = webpHandler.bind(null, webpImage)
    webpImage.onerror = webpHandler.bind(null, webpImage)

}