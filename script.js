$(function() {

    $('.fotorama').fotorama({
        data: [
            {
                img: 'https://placehold.co/600x400',
                thumb: 'https://placehold.co/600x400',
                full: 'https://placehold.co/600x400', // Separate image for the fullscreen mode.
                // video: 'https://youtu.be/C3lWwBslWqg', // Youtube, Vimeo or custom iframe URL
                id: 'fotoramaPicOne', // Custom anchor is used with the hash:true option.
                // caption: 'The first caption',
                // html: $('selector'), // ...or '<div>123</div>'. Custom HTML inside the frame.
                fit: 'cover', // Override the global fit option.
                // any: 'Any data relative to the frame you want to store'
              },
            {
                img: 'https://placehold.co/600x400',
                thumb: 'https://placehold.co/600x400',
                full: 'https://placehold.co/600x400', // Separate image for the fullscreen mode.
                // video: 'https://youtu.be/C3lWwBslWqg', // Youtube, Vimeo or custom iframe URL
                id: 'fotoramaPicOne', // Custom anchor is used with the hash:true option.
                // caption: 'The first caption',
                // html: $('selector'), // ...or '<div>123</div>'. Custom HTML inside the frame.
                fit: 'cover', // Override the global fit option.
                // any: 'Any data relative to the frame you want to store'
              },
            {
                img: 'https://placehold.co/600x400',
                thumb: 'https://placehold.co/600x400',
                full: 'https://placehold.co/600x400', // Separate image for the fullscreen mode.
                // video: 'https://youtu.be/C3lWwBslWqg', // Youtube, Vimeo or custom iframe URL
                id: 'fotoramaPicOne', // Custom anchor is used with the hash:true option.
                // caption: 'The first caption',
                // html: $('selector'), // ...or '<div>123</div>'. Custom HTML inside the frame.
                fit: 'cover', // Override the global fit option.
                // any: 'Any data relative to the frame you want to store'
              },
        ]
    });

})