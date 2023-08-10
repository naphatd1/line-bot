exports.sendQuickReply = () => {
  let msg = {
    type: 'text', // ①
    text: 'โปรดเลือกเมนูที่ต้องการ',
    quickReply: {
      // ②
      items: [
        {
          type: 'action', // ③
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5583/5583604.png',
          action: {
            type: 'message',
            label: 'Promotion',
            text: 'roompromotion',
          },
        },
        {
          type: 'action',
          imageUrl:
            'https://icons.iconarchive.com/icons/iconarchive/outline-camera/512/Flat-Red-Big-Camera-icon.png',
          action: {
            type: 'camera',
            label: 'Open camera',
          },
        },
        {
          type: 'action', // ④
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1865/1865269.png',
          action: {
            type: 'location',
            label: 'Send location',
          },
        },
        {
          type: 'action', // ④
          action: {
            type: 'datetimepicker',
            label: 'Select date',
            data: 'storeId=12345',
            mode: 'datetime',
            initial: new Date().now,
            max: '2018-01-24t23:59',
            min: '2017-12-25t00:00',
          },
        },
      ],
    },
  }
  return msg
}
