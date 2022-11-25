class MediaFactory {
    constructor(media, type) {
        if (type === 'mediaApi') {
            return new Media(media)
        } else {
            throw 'Unknown type format'
        }
    }
}