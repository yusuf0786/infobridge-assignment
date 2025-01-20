$(function() {

    let cartCuantity = 1

    const flavorData = [
        {
            "name": "Strawberry Passion",
            "description": "PREBIOTIC + PROBIOTIC SPARKLING DRINK",
            "descriptionCount": "12 Cans",
            "details": "Ripe strawberries and tart passion fruit meet freshly brewed hibiscus flowers for a sweet and tropical refresher.",
            "reviews": 138,
            "fotoramaData": [
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
                    // img: 'https://placehold.co/600x400',
                    thumb: './test-thumb.jpg',
                    // full: 'https://placehold.co/600x400', // Separate image for the fullscreen mode.
                    // video: './test.mp4', // Youtube, Vimeo or custom iframe URL
                    // videoOptions: { controls: false, autoplay: true, muted: true, loop: true },
                    html: '<video id="videoSlide" class="videoSlide" muted loop playsinline style="width: 100%; height: auto;">' +
                          '<source src="./test.mp4" type="video/mp4">' +
                          'Your browser does not support the video tag.' +
                          '</video>',
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
        },
        {
            "name": "Variety Pack",
            "description": "BEST SELLER PACK",
            "descriptionCount": "13 Cans",
            "details": "Can't decide on just one flavor? Experience all 6 prebiotic + probiotics flavors and all their gut friendly benefits!",
            "reviews": 500,
            "fotoramaData": [
                {
                    thumb: './test-thumb.jpg',
                    // video: './test.mp4',
                    html: '<video id="videoSlide" class="videoSlide" muted loop playsinline style="width: 100%; height: auto;">' +
                          '<source src="./test.mp4" type="video/mp4">' +
                          'Your browser does not support the video tag.' +
                          '</video>',
                    id: 'fotoramaPicTwo', // Custom anchor is used with the hash:true option.
                    fit: 'cover', // Override the global fit option.
                  },
                {
                    img: 'https://placehold.co/600x400',
                    thumb: 'https://placehold.co/600x400',
                    full: 'https://placehold.co/600x400', // Separate image for the fullscreen mode.
                    id: 'fotoramaPicOne', // Custom anchor is used with the hash:true option.
                    fit: 'cover', // Override the global fit option.
                  },
                {
                    img: 'https://placehold.co/600x400',
                    thumb: 'https://placehold.co/600x400',
                    full: 'https://placehold.co/600x400', // Separate image for the fullscreen mode.
                    id: 'fotoramaPicThree', // Custom anchor is used with the hash:true option.
                    fit: 'cover', // Override the global fit option.
                  },
            ]
        },
        {
            "name": "Banana Queen",
            "description": "PREBIOTIC + PROBIOTIC SPARKLING DRINK",
            "descriptionCount": "14 Cans",
            "details": "Our fab collab with Nymphia Wind features sweet banana puree, decadent vanilla bean, and fresh brewed marigold flowers. Banana cream for the Banana Queen is a toast to Asian heritage and a celebration of this iconic yellow fruit.",
            "reviews": 735,
            "fotoramaData": [
                {
                    img: 'https://placehold.co/600x400',
                    thumb: 'https://placehold.co/600x400',
                    full: 'https://placehold.co/600x400', // Separate image for the fullscreen mode.
                    id: 'fotoramaPicOne', // Custom anchor is used with the hash:true option.
                    fit: 'cover', // Override the global fit option.
                  },
                {
                    img: 'https://placehold.co/600x400',
                    thumb: 'https://placehold.co/600x400',
                    full: 'https://placehold.co/600x400', // Separate image for the fullscreen mode.
                    id: 'fotoramaPicThree', // Custom anchor is used with the hash:true option.
                    fit: 'cover', // Override the global fit option.
                  },
                {
                    thumb: './test-thumb.jpg',
                    // video: './test.mp4',
                    html: '<video id="videoSlide" class="videoSlide" muted loop playsinline style="width: 100%; height: auto;">' +
                          '<source src="./test.mp4" type="video/mp4">' +
                          'Your browser does not support the video tag.' +
                          '</video>',
                    id: 'fotoramaPicTwo', // Custom anchor is used with the hash:true option.
                    fit: 'cover', // Override the global fit option.
                  },
            ]
        },
    ]

    const fotoramaElement = $('.fotorama').fotorama(); // Initialize Fotorama
    const fotorama = fotoramaElement.data('fotorama'); // Access Fotorama instance

    const dataIntegration = (data) => {
        $(".product-title").text(data.name)
        $(".choose-flavor-title > span").text(data.name)
        $(".product-description span:nth-child(1)").text(data.descriptionCount)
        $(".product-description span:nth-child(2)").text(data.description)
        $(".product-details").text(data.details)
        $(".product-ratings .reviews").text(data.reviews + " Views")
    }

    $(".choose-flavor-wrapper .choose-flavor").on('click', function(){
        $(".choose-flavor").removeClass("active");
        $(this).addClass("active");

        let flavorIndex = 0;
        if ($(this).hasClass("choose-flavor-one")) flavorIndex = 0;
        else if ($(this).hasClass("choose-flavor-two")) flavorIndex = 1;
        else if ($(this).hasClass("choose-flavor-three")) flavorIndex = 2;
        else if ($(this).hasClass("choose-flavor-four")) flavorIndex = 1;
        else if ($(this).hasClass("choose-flavor-five")) flavorIndex = 0;

        const selectedFlavor = flavorData[flavorIndex];
        dataIntegration(selectedFlavor);
        fotorama.load(selectedFlavor.fotoramaData);

        fotoramaElement.off('fotorama:show').on('fotorama:show', (e, fotoramaData) => {
            fotoramaSlideActiveFunc (e, fotoramaData)
        });

    })

    fotorama.load(flavorData[0].fotoramaData);

    // Add event listener to control video playback
    fotoramaElement.off('fotorama:show').on('fotorama:show', (e, fotoramaData) => {
        fotoramaSlideActiveFunc (e, fotoramaData)
    });
    function fotoramaSlideActiveFunc(e, fotoramaData) {

        setTimeout(() => {
            // Ensure that fotoramaData.$active is defined
           const activeSlide = fotoramaData.activeFrame;
           
           // Find the video element in the active slide
           const videoElement = $(".videoSlide")[0];
    
           // If the slide contains a video, play it
           if (videoElement) {
               videoElement.play();  // Play the video
               videoElement.currentTime = 0;
           } else {
               // If there is no video, make sure all videos are paused (optional)
               videoElement.each(function() {
                   this.pause();
                   this.currentTime = 0;  // Reset video to the beginning
               });
           }
        }, 100);
    }

    // cart quantuty add/less JS
    $(".qty-count-container > span").text(cartCuantity)
    $(".qty-count-container button:nth-child(1)").on('click', function(){
        cartCuantity--;
        $(".qty-count-container > span").text(cartCuantity)
    })
    $(".qty-count-container button:nth-child(3)").on('click', function(){
        cartCuantity++;
        $(".qty-count-container > span").text(cartCuantity)
    })

})