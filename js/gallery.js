jQuery(document).ready(function () {

jQuery("#photo-gallery").nanogallery2( {
    // ### gallery settings ### 
    // TODO: Set gallery theme with dark mode toggle
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

        { srct: 'thumbnails/portrait5.jpg', title: 'Maysia Mateos',  ID: 1000,	kind:'album' },
        { src: 'portrait5.jpg', srct: 'thumbnails/portrait5.jpg', ID: 1, albumID: 1000 }, //! Setting ID to 0 results in UI bug on hover
        { src: 'portrait6.jpg', srct: 'thumbnails/portrait6.jpg', ID: 2, albumID: 1000 },

        { srct: 'thumbnails/portrait7.jpg', title: 'Paige Shark',  ID: 1001,	kind:'album' },
        { src: 'portrait7.jpg', srct: 'thumbnails/portrait7.jpg', ID: 20, albumID: 1001 },
        { src: 'portrait8.jpg', srct: 'thumbnails/portrait8.jpg', ID: 21, albumID: 1001 },
        { src: 'portrait9.jpg', srct: 'thumbnails/portrait9.jpg', ID: 22, albumID: 1001 },
        
        { srct: 'thumbnails/portrait12.jpg', title: 'Elle Levi',  ID: 1002,	kind:'album' },
        { src: 'portrait11.jpg', srct: 'thumbnails/portrait11.jpg', ID: 40, albumID: 1002 },
        { src: 'portrait12.jpg', srct: 'thumbnails/portrait12.jpg', ID: 41, albumID: 1002 },
        { src: 'portrait13.jpg', srct: 'thumbnails/portrait13.jpg', ID: 42, albumID: 1002 },
        { src: 'portrait14.jpg', srct: 'thumbnails/portrait14.jpg', ID: 43, albumID: 1002 },
        { src: 'portrait15.jpg', srct: 'thumbnails/portrait15.jpg', ID: 44, albumID: 1002 },

        { srct: 'thumbnails/portrait19.jpg', title: 'Samantha Kay',  ID: 1003,	kind:'album' },
        { src: 'portrait17.jpg', srct: 'thumbnails/portrait17.jpg', ID: 60, albumID: 1003 },
        { src: 'portrait18.jpg', srct: 'thumbnails/portrait18.jpg', ID: 61, albumID: 1003 },
        { src: 'portrait19.jpg', srct: 'thumbnails/portrait19.jpg', ID: 62, albumID: 1003 },
        { src: 'portrait20.jpg', srct: 'thumbnails/portrait20.jpg', ID: 63, albumID: 1003 },
        { src: 'portrait21.jpg', srct: 'thumbnails/portrait21.jpg', ID: 64, albumID: 1003 },

        { srct: 'thumbnails/portrait24.jpg', title: 'Erin Hopewell',  ID: 1004,	kind:'album' },
        { src: 'portrait23.jpg', srct: 'thumbnails/portrait23.jpg', ID: 80, albumID: 1004 },
        { src: 'portrait24.jpg', srct: 'thumbnails/portrait24.jpg', ID: 81, albumID: 1004 },
        { src: 'portrait25.jpg', srct: 'thumbnails/portrait25.jpg', ID: 82, albumID: 1004 },
        
        { srct: 'thumbnails/portrait26.jpg', title: 'Winter Grimes',  ID: 1005,	kind:'album' },
        { src: 'portrait26.jpg', srct: 'thumbnails/portrait26.jpg', ID: 100, albumID: 1005 },
        { src: 'portrait27.jpg', srct: 'thumbnails/portrait27.jpg', ID: 101, albumID: 1005 },

        { srct: 'thumbnails/portrait28.jpg', title: 'Caroline Jones',  ID: 1006,	kind:'album' },
        { src: 'portrait28.jpg', srct: 'thumbnails/portrait28.jpg', ID: 120, albumID: 1006 },
        { src: 'portrait29.jpg', srct: 'thumbnails/portrait29.jpg', ID: 121, albumID: 1006 },
        { src: 'portrait30.jpg', srct: 'thumbnails/portrait30.jpg', ID: 122, albumID: 1006 },
        { src: 'portrait31.jpg', srct: 'thumbnails/portrait31.jpg', ID: 123, albumID: 1006 },
        { src: 'portrait32.jpg', srct: 'thumbnails/portrait32.jpg', ID: 124, albumID: 1006 },

        { srct: 'thumbnails/portrait35.jpg', title: 'Ava Acosta - 1',  ID: 1007,	kind:'album' },
        { src: 'portrait33.jpg', srct: 'thumbnails/portrait33.jpg', ID: 140, albumID: 1007 },
        { src: 'portrait34.jpg', srct: 'thumbnails/portrait34.jpg', ID: 141, albumID: 1007 },
        { src: 'portrait35.jpg', srct: 'thumbnails/portrait35.jpg', ID: 142, albumID: 1007 },
        { src: 'portrait36.jpg', srct: 'thumbnails/portrait36.jpg', ID: 143, albumID: 1007 },
        { src: 'portrait37.jpg', srct: 'thumbnails/portrait37.jpg', ID: 144, albumID: 1007 },
        { src: 'portrait38.jpg', srct: 'thumbnails/portrait38.jpg', ID: 145, albumID: 1007 },
        { src: 'portrait39.jpg', srct: 'thumbnails/portrait39.jpg', ID: 146, albumID: 1007 },

        { srct: 'thumbnails/portrait41.jpg', title: 'John Policarpio',  ID: 1008,	kind:'album' },
        { src: 'portrait40.jpg', srct: 'thumbnails/portrait40.jpg', ID: 160, albumID: 1008 },
        { src: 'portrait41.jpg', srct: 'thumbnails/portrait41.jpg', ID: 161, albumID: 1008 },
        { src: 'portrait42.jpg', srct: 'thumbnails/portrait42.jpg', ID: 162, albumID: 1008 },

        { srct: 'thumbnails/portrait44.jpg', title: 'Yuliya Dadayeva',  ID: 1009,	kind:'album' },
        { src: 'portrait43.jpg', srct: 'thumbnails/portrait43.jpg', ID: 180, albumID: 1009 },
        { src: 'portrait44.jpg', srct: 'thumbnails/portrait44.jpg', ID: 181, albumID: 1009 },
        { src: 'portrait45.jpg', srct: 'thumbnails/portrait45.jpg', ID: 182, albumID: 1009 },
        { src: 'portrait46.jpg', srct: 'thumbnails/portrait46.jpg', ID: 183, albumID: 1009 },

        { srct: 'thumbnails/portrait47.jpg', title: 'The Cats',  ID: 1010,	kind:'album' },
        { src: 'portrait47.jpg', srct: 'thumbnails/portrait47.jpg', ID: 200, albumID: 1010 },
        { src: 'portrait48.jpg', srct: 'thumbnails/portrait48.jpg', ID: 201, albumID: 1010 },

        { srct: 'thumbnails/portrait52.jpg', title: 'Funky Lamp - Band',  ID: 1011,	kind:'album' },
        { src: 'portrait50.jpg', srct: 'thumbnails/portrait50.jpg', ID: 220, albumID: 1011 },
        { src: 'portrait51.jpg', srct: 'thumbnails/portrait51.jpg', ID: 221, albumID: 1011 },
        { src: 'portrait52.jpg', srct: 'thumbnails/portrait52.jpg', ID: 222, albumID: 1011 },
        { src: 'portrait53.jpg', srct: 'thumbnails/portrait53.jpg', ID: 223, albumID: 1011 },
        { src: 'portrait54.jpg', srct: 'thumbnails/portrait54.jpg', ID: 224, albumID: 1011 },
        { src: 'portrait49.jpg', srct: 'thumbnails/portrait49.jpg', ID: 225, albumID: 1011 },

        { srct: 'thumbnails/portrait55.jpg', title: 'Pitter Patter - Band',  ID: 1012,	kind:'album' },
        { src: 'portrait55.jpg', srct: 'thumbnails/portrait55.jpg', ID: 240, albumID: 1012 },
        { src: 'portrait56.jpg', srct: 'thumbnails/portrait56.jpg', ID: 241, albumID: 1012 },

        { srct: 'thumbnails/portrait59.jpg', title: 'Sophia',  ID: 1013,	kind:'album' },
        { src: 'portrait57.jpg', srct: 'thumbnails/portrait57.jpg', ID: 260, albumID: 1013 },
        { src: 'portrait58.jpg', srct: 'thumbnails/portrait58.jpg', ID: 261, albumID: 1013 },
        { src: 'portrait59.jpg', srct: 'thumbnails/portrait59.jpg', ID: 262, albumID: 1013 },
        { src: 'portrait60.jpg', srct: 'thumbnails/portrait60.jpg', ID: 263, albumID: 1013 },
        { src: 'portrait61.jpg', srct: 'thumbnails/portrait61.jpg', ID: 264, albumID: 1013 },

        { srct: 'thumbnails/portrait69.jpg', title: 'Bevin Surbey',  ID: 1014,	kind:'album' },
        { src: 'portrait65.jpg', srct: 'thumbnails/portrait65.jpg', ID: 280, albumID: 1014 },
        { src: 'portrait66.jpg', srct: 'thumbnails/portrait66.jpg', ID: 281, albumID: 1014 },
        { src: 'portrait67.jpg', srct: 'thumbnails/portrait67.jpg', ID: 282, albumID: 1014 },
        { src: 'portrait68.jpg', srct: 'thumbnails/portrait68.jpg', ID: 283, albumID: 1014 },
        { src: 'portrait69.jpg', srct: 'thumbnails/portrait69.jpg', ID: 284, albumID: 1014 },
        
        { srct: 'thumbnails/portrait62.jpg', title: 'Ava Acosta - 2',  ID: 1015,	kind:'album' },
        { src: 'portrait62.jpg', srct: 'thumbnails/portrait62.jpg', ID: 300, albumID: 1015 },
        { src: 'portrait63.jpg', srct: 'thumbnails/portrait63.jpg', ID: 301, albumID: 1015 },
        { src: 'portrait64.jpg', srct: 'thumbnails/portrait64.jpg', ID: 302, albumID: 1015 },

        { srct: 'thumbnails/portrait71.jpg', title: 'Jack Hopewell', ID: 1016,	kind:'album' },
        { src: 'portrait70.jpg', srct: 'thumbnails/portrait70.jpg', ID: 320, albumID: 1016 },
        { src: 'portrait71.jpg', srct: 'thumbnails/portrait71.jpg', ID: 321, albumID: 1016 },
        { src: 'portrait72.jpg', srct: 'thumbnails/portrait72.jpg', ID: 322, albumID: 1016 },
        { src: 'portrait73.jpg', srct: 'thumbnails/portrait73.jpg', ID: 323, albumID: 1016 },
        { src: 'portrait74.jpg', srct: 'thumbnails/portrait74.jpg', ID: 324, albumID: 1016 },

        { srct: 'thumbnails/portrait77.jpg', title: 'Yellow Bridges - Band', ID: 1017,	kind:'album' },
        { src: 'portrait75.jpg', srct: 'thumbnails/portrait75.jpg', ID: 340, albumID: 1017 },
        { src: 'portrait76.jpg', srct: 'thumbnails/portrait76.jpg', ID: 341, albumID: 1017 },
        { src: 'portrait77.jpg', srct: 'thumbnails/portrait77.jpg', ID: 342, albumID: 1017 },
        { src: 'portrait78.jpg', srct: 'thumbnails/portrait78.jpg', ID: 343, albumID: 1017 },
        { src: 'portrait79.jpg', srct: 'thumbnails/portrait79.jpg', ID: 344, albumID: 1017 },
      ]
    });
});