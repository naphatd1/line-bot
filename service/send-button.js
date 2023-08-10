exports.sendButton = () => {
  let msg = {
    type: 'template',
    altText: 'This is a buttons template',
    template: {
      type: 'buttons',
      thumbnailImageUrl: process.env.BASE_URL + '/images/2.png',
      imageAspectRatio: 'square',
      imageSize: 'cover',
      imageBackgroundColor: '#FFFFFF',
      title: 'Menu',
      text: 'Please select',
      defaultAction: {
        type: 'uri',
        label: 'View detail',
        uri: 'http://example.com/page/123',
      },
      actions: [
        {
          type: 'postback',
          label: 'Buy',
          data: 'action=buy&itemid=123',
        },
        {
          type: 'postback',
          label: 'Add to cart',
          data: 'action=add&itemid=123',
        },
        {
          type: 'uri',
          label: 'View detail',
          uri: 'http://example.com/page/123',
        },
      ],
    },
  }
  return msg
}
