export default function webmIsSupported() {

    const videoElement  = document.createElement('video')
    const canPlayWebm   = videoElement.canPlayType('video/webm; codecs="vp8, vorbis"')
    const isSupportWebm = canPlayWebm === 'probably'

    isSupportWebm
        ? document.body.classList.add('with-webm')
        : document.body.classList.add('without-webm')

}