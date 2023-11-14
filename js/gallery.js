jQuery(document).ready(function () {

jQuery("#photo-gallery").nanogallery2( {
    // ### gallery settings ### 
    thumbnailL1Height:  300,
    thumbnailL1Width:   'auto',
    thumbnailHeight:  600,
    thumbnailWidth:   'auto',
    thumbnailGutterHeight: 5,
    thumbnailGutterWidth: 5,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,
    thumbnailLabel:     { display: false },
    itemsBaseURL:     'https://sites.pitt.edu/~lbs57/portfolio/',
    
    // ### gallery content ### 
    items: [

        // maysia
        { srct: 'thumbnails/portrait5.jpg', title: 'Maysia Mateos',  ID: 1070,	kind:'album' },
        { src: 'portrait5.jpg', srct: 'thumbnails/portrait5.jpg', ID: 170, albumID: 1070 },
        { src: 'portrait6.jpg', srct: 'thumbnails/portrait6.jpg', ID: 171, albumID: 1070 },

        // album 1
        { srct: 'thumbnails/portrait7.jpg', title: 'Paige Shark',  ID: 1,	kind:'album' },
        { src: 'portrait7.jpg', srct: 'thumbnails/portrait7.jpg', ID: 10, albumID: 1 },
        { src: 'portrait8.jpg', srct: 'thumbnails/portrait8.jpg', ID: 11, albumID: 1 },
        { src: 'portrait9.jpg', srct: 'thumbnails/portrait9.jpg', ID: 12, albumID: 1 },
        
        // album 2
        { srct: 'thumbnails/portrait12.jpg', title: 'Elle Levi',  ID: 2,	kind:'album' },
        { src: 'portrait11.jpg', srct: 'thumbnails/portrait11.jpg', ID: 20, albumID: 2 },
        { src: 'portrait12.jpg', srct: 'thumbnails/portrait12.jpg', ID: 21, albumID: 2 },
        { src: 'portrait13.jpg', srct: 'thumbnails/portrait13.jpg', ID: 22, albumID: 2 },
        { src: 'portrait14.jpg', srct: 'thumbnails/portrait14.jpg', ID: 23, albumID: 2 },
        { src: 'portrait15.jpg', srct: 'thumbnails/portrait15.jpg', ID: 24, albumID: 2 },

        // album 3
        { srct: 'thumbnails/portrait19.jpg', title: 'Samantha Kay',  ID: 3,	kind:'album' },
        { src: 'portrait17.jpg', srct: 'thumbnails/portrait17.jpg', ID: 30, albumID: 3 },
        { src: 'portrait18.jpg', srct: 'thumbnails/portrait18.jpg', ID: 31, albumID: 3 },
        { src: 'portrait19.jpg', srct: 'thumbnails/portrait19.jpg', ID: 32, albumID: 3 },
        { src: 'portrait20.jpg', srct: 'thumbnails/portrait20.jpg', ID: 33, albumID: 3 },
        { src: 'portrait21.jpg', srct: 'thumbnails/portrait21.jpg', ID: 34, albumID: 3 },

        // erin
        { srct: 'thumbnails/portrait24.jpg', title: 'Erin Hopewell',  ID: 1030,	kind:'album' },
        { src: 'portrait23.jpg', srct: 'thumbnails/portrait23.jpg', ID: 130, albumID: 1030 },
        { src: 'portrait24.jpg', srct: 'thumbnails/portrait24.jpg', ID: 131, albumID: 1030 },
        { src: 'portrait25.jpg', srct: 'thumbnails/portrait25.jpg', ID: 132, albumID: 1030 },
        
        // album 4
        { srct: 'thumbnails/portrait26.jpg', title: 'Winter Grimes',  ID: 4,	kind:'album' },
        { src: 'portrait26.jpg', srct: 'thumbnails/portrait26.jpg', ID: 40, albumID: 4 },
        { src: 'portrait27.jpg', srct: 'thumbnails/portrait27.jpg', ID: 41, albumID: 4 },

        // album 5
        { srct: 'thumbnails/portrait28.jpg', title: 'Caroline Jones',  ID: 5,	kind:'album' },
        { src: 'portrait28.jpg', srct: 'thumbnails/portrait28.jpg', ID: 50, albumID: 5 },
        { src: 'portrait29.jpg', srct: 'thumbnails/portrait29.jpg', ID: 51, albumID: 5 },
        { src: 'portrait30.jpg', srct: 'thumbnails/portrait30.jpg', ID: 52, albumID: 5 },
        { src: 'portrait31.jpg', srct: 'thumbnails/portrait31.jpg', ID: 53, albumID: 5 },
        { src: 'portrait32.jpg', srct: 'thumbnails/portrait32.jpg', ID: 54, albumID: 5 },

        // album 6
        { srct: 'thumbnails/portrait35.jpg', title: 'Ava Acosta - 1',  ID: 6,	kind:'album' },
        { src: 'portrait33.jpg', srct: 'thumbnails/portrait33.jpg', ID: 60, albumID: 6 },
        { src: 'portrait34.jpg', srct: 'thumbnails/portrait34.jpg', ID: 61, albumID: 6 },
        { src: 'portrait35.jpg', srct: 'thumbnails/portrait35.jpg', ID: 62, albumID: 6 },
        { src: 'portrait36.jpg', srct: 'thumbnails/portrait36.jpg', ID: 63, albumID: 6 },
        { src: 'portrait37.jpg', srct: 'thumbnails/portrait37.jpg', ID: 64, albumID: 6 },
        { src: 'portrait38.jpg', srct: 'thumbnails/portrait38.jpg', ID: 65, albumID: 6 },
        { src: 'portrait39.jpg', srct: 'thumbnails/portrait39.jpg', ID: 66, albumID: 6 },

        // album 7
        { srct: 'thumbnails/portrait41.jpg', title: 'John Policarpio',  ID: 7,	kind:'album' },
        { src: 'portrait40.jpg', srct: 'thumbnails/portrait40.jpg', ID: 70, albumID: 7 },
        { src: 'portrait41.jpg', srct: 'thumbnails/portrait41.jpg', ID: 71, albumID: 7 },
        { src: 'portrait42.jpg', srct: 'thumbnails/portrait42.jpg', ID: 72, albumID: 7 },

        // album 8
        { srct: 'thumbnails/portrait44.jpg', title: 'Yuliya Dadayeva',  ID: 8,	kind:'album' },
        { src: 'portrait43.jpg', srct: 'thumbnails/portrait43.jpg', ID: 80, albumID: 8 },
        { src: 'portrait44.jpg', srct: 'thumbnails/portrait44.jpg', ID: 81, albumID: 8 },
        { src: 'portrait45.jpg', srct: 'thumbnails/portrait45.jpg', ID: 82, albumID: 8 },
        { src: 'portrait46.jpg', srct: 'thumbnails/portrait46.jpg', ID: 83, albumID: 8 },

        // cats
        { srct: 'thumbnails/portrait47.jpg', title: 'The Cats',  ID: 1040,	kind:'album' },
        { src: 'portrait47.jpg', srct: 'thumbnails/portrait47.jpg', ID: 140, albumID: 1040 },
        { src: 'portrait48.jpg', srct: 'thumbnails/portrait48.jpg', ID: 141, albumID: 1040 },

        // album 9
        { srct: 'thumbnails/portrait52.jpg', title: 'Funky Lamp - Band',  ID: 9,	kind:'album' },
        { src: 'portrait50.jpg', srct: 'thumbnails/portrait50.jpg', ID: 90, albumID: 9 },
        { src: 'portrait51.jpg', srct: 'thumbnails/portrait51.jpg', ID: 91, albumID: 9 },
        { src: 'portrait52.jpg', srct: 'thumbnails/portrait52.jpg', ID: 92, albumID: 9 },
        { src: 'portrait53.jpg', srct: 'thumbnails/portrait53.jpg', ID: 93, albumID: 9 },
        { src: 'portrait54.jpg', srct: 'thumbnails/portrait54.jpg', ID: 94, albumID: 9 },
        { src: 'portrait49.jpg', srct: 'thumbnails/portrait49.jpg', ID: 95, albumID: 9 },

        // pitter patter
        { srct: 'thumbnails/portrait55.jpg', title: 'Pitter Patter - Band',  ID: 1050,	kind:'album' },
        { src: 'portrait55.jpg', srct: 'thumbnails/portrait55.jpg', ID: 150, albumID: 1050 },
        { src: 'portrait56.jpg', srct: 'thumbnails/portrait56.jpg', ID: 151, albumID: 1050 },

        // sophia
        { srct: 'thumbnails/portrait59.jpg', title: 'Sophia',  ID: 1080,	kind:'album' },
        { src: 'portrait57.jpg', srct: 'thumbnails/portrait57.jpg', ID: 180, albumID: 1080 },
        { src: 'portrait58.jpg', srct: 'thumbnails/portrait58.jpg', ID: 181, albumID: 1080 },
        { src: 'portrait59.jpg', srct: 'thumbnails/portrait59.jpg', ID: 182, albumID: 1080 },
        { src: 'portrait60.jpg', srct: 'thumbnails/portrait60.jpg', ID: 183, albumID: 1080 },
        { src: 'portrait61.jpg', srct: 'thumbnails/portrait61.jpg', ID: 184, albumID: 1080 },

        // album 10
        { srct: 'thumbnails/portrait69.jpg', title: 'Bevin Surbey',  ID: 1000,	kind:'album' },
        { src: 'portrait65.jpg', srct: 'thumbnails/portrait65.jpg', ID: 101, albumID: 1000 },
        { src: 'portrait66.jpg', srct: 'thumbnails/portrait66.jpg', ID: 102, albumID: 1000 },
        { src: 'portrait67.jpg', srct: 'thumbnails/portrait67.jpg', ID: 103, albumID: 1000 },
        { src: 'portrait68.jpg', srct: 'thumbnails/portrait68.jpg', ID: 104, albumID: 1000 },
        { src: 'portrait69.jpg', srct: 'thumbnails/portrait69.jpg', ID: 105, albumID: 1000 },
        
        // ava 2
        { srct: 'thumbnails/portrait62.jpg', title: 'Ava Acosta - 2',  ID: 1060,	kind:'album' },
        { src: 'portrait62.jpg', srct: 'thumbnails/portrait62.jpg', ID: 160, albumID: 1060 },
        { src: 'portrait63.jpg', srct: 'thumbnails/portrait63.jpg', ID: 161, albumID: 1060 },
        { src: 'portrait64.jpg', srct: 'thumbnails/portrait64.jpg', ID: 162, albumID: 1060 },

        // album 11
        { srct: 'thumbnails/portrait71.jpg', title: 'Jack Hopewell', ID: 1010,	kind:'album' },
        { src: 'portrait70.jpg', srct: 'thumbnails/portrait70.jpg', ID: 110, albumID: 1010 },
        { src: 'portrait71.jpg', srct: 'thumbnails/portrait71.jpg', ID: 111, albumID: 1010 },
        { src: 'portrait72.jpg', srct: 'thumbnails/portrait72.jpg', ID: 112, albumID: 1010 },
        { src: 'portrait73.jpg', srct: 'thumbnails/portrait73.jpg', ID: 113, albumID: 1010 },
        { src: 'portrait74.jpg', srct: 'thumbnails/portrait74.jpg', ID: 114, albumID: 1010 },

        // album 12
        { srct: 'thumbnails/portrait77.jpg', title: 'Yellow Bridges - Band', ID: 1020,	kind:'album' },
        { src: 'portrait75.jpg', srct: 'thumbnails/portrait75.jpg', ID: 120, albumID: 1020 },
        { src: 'portrait76.jpg', srct: 'thumbnails/portrait76.jpg', ID: 121, albumID: 1020 },
        { src: 'portrait77.jpg', srct: 'thumbnails/portrait77.jpg', ID: 122, albumID: 1020 },
        { src: 'portrait78.jpg', srct: 'thumbnails/portrait78.jpg', ID: 123, albumID: 1020 },
        { src: 'portrait79.jpg', srct: 'thumbnails/portrait79.jpg', ID: 124, albumID: 1020 },
      ]
    });
});