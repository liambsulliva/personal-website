const myKey = 'a52e2fe91b943c26733c493a6c3c3090';
jQuery("#photo-gallery").nanogallery2({
    kind:             'flickr',
    userID:           '148052898@N03',
    flickrAPIKey:     myKey,
    photoset: "none",
    thumbnailL1Height:  300,
    thumbnailL1Width:   'auto',
    thumbnailHeight:  600,
    thumbnailWidth:   'auto',
    thumbnailGutterHeight: 5,
    thumbnailGutterWidth: 5,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,
    thumbnailLabel:     { display: false },
    itemsBaseURL:     'https://liambsullivan.com/portfolio/',
});