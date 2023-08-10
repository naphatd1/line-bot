exports.sendImageMap = () => {
  let msg = {
    type: 'imagemap',
    baseUrl: process.env.BASE_URL + '/images/static/imagemap',
    altText: 'ImageMAP',
    baseSize: {
      width: 1040,
      height: 1040,
    },
    video: {
      originalContentUrl:
        process.env.BASE_URL + '/images/static/imagemap/video.mp4',
      previewImageUrl:
        process.env.BASE_URL + '/images/static/imagemap/preview.jpg',
      area: {
        x: 0,
        y: 0,
        width: 1040,
        height: 585,
      },
      externalLink: {
        linkUri: 'https://www.google.com',
        label: 'Load Video',
      },
    },
    actions: [
      {
        type: 'uri',
        linkUri: 'https://mthai.com/',
        area: {
          x: 0,
          y: 528,
          width: 520,
          height: 520,
        },
      },
      {
        type: 'message',
        text: 'Hello',
        area: {
          x: 521,
          y: 521,
          width: 520,
          height: 520,
        },
      },
    ],
  }
  return msg
}
