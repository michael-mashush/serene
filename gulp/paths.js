const sourceFolder = './source'
const buildFolder  = './docs'

export const paths = {
    source: {
        html:  `${sourceFolder}/*.html`,
        scss:  `${sourceFolder}/scss/index.scss`,
        js:    `${sourceFolder}/js/index.js`,
        assets: {
            fonts:  `${sourceFolder}/assets/fonts/**/*.ttf`,
            icons:  `${sourceFolder}/assets/icons/**/*.svg`,
            images: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png}`,
            videos: `${sourceFolder}/assets/videos/**/*.{mp4,webm}`,
            audios: `${sourceFolder}/assets/audios/**/*.mp3`
        },
    },
    build: {
        html:  `${buildFolder}/`,
        css:   `${buildFolder}/css/`,
        js:    `${buildFolder}/js/`,
        assets: {
            fonts:  `${buildFolder}/assets/fonts/`,
            icons:  `${buildFolder}/assets/icons/`,
            images: `${buildFolder}/assets/images/`,
            videos: `${buildFolder}/assets/videos/`,
            audios: `${buildFolder}/assets/audios/`
        },
    },
    watch: {
        html:  `${sourceFolder}/**/*.html`,
        scss:  `${sourceFolder}/scss/**/*.scss`,
        js:    `${sourceFolder}/js/**/*.js`,
    },
    sourceFolder,
    buildFolder,
}