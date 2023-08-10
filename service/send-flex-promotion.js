const axios = require('axios').default

exports.sendFlexPromotion = async () => {
  const url = process.env.BASE_URL + '/getpromotion'
  const response = await axios.get(url, {
    headers: { 'Content-Type': 'application/json' },
  })

  let bubbles = []
  let promotions = response.data

  bubbles = promotions.map((item) => {
    return {
      type: 'bubble',
      hero: {
        type: 'image',
        url: item.picture,
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover',
        action: {
          type: 'uri',
          uri: item.picture,
        },
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: `[Id: ${item.id} ] ${item.name}`,
            weight: 'bold',
            size: 'xl',
            color: '#2FF7FF',
            align: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            spacing: 'sm',
            contents: [],
          },
        ],
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'primary',
            height: 'sm',
            action: {
              type: 'postback',
              label: 'ดูรายละเอียดเพิ่มเติม',
              data: JSON.stringify(item),
            },
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            margin: 'sm',
          },
        ],
        flex: 0,
      },
    }
  })

  let msg = {
    type: 'flex',
    altText: 'ห้องพักสำหรับผู้ป่วย',
    contents: {
      type: 'carousel',
      contents: bubbles,
    },
  }
  return msg
}
