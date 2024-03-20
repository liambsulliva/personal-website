var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;
jQuery("#photo-gallery").nanogallery2({
    kind:             'flickr',
    userID:           '148052898@N03',
    flickrAPIKey:     mykey,
    secretkey:        secretkey,
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