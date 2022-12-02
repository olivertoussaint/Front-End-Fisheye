class MediaFactory {
    constructor(media, type) {
        if (type === 'mediaApi') {
            return new MediaCard(media)
        } else {
            throw 'Unknown type format'
        }
    }
}