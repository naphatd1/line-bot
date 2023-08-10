const config = require('../config/line')
const { sendButton } = require('./send-button')
const { sendFlexCovidInfo } = require('./send-flex-covid-info')
const { sendFlexPromotion } = require('./send-flex-promotion')
const { sendImage } = require('./send-image')
const { sendImageMap } = require('./send-imagemap')
const { sendLocation } = require('./send-location')
const { sendQuickReply } = require('./send-quick')
const { sendSticker } = require('./send-sticker')
const { sendText } = require('./send-text')

exports.handleMessage = async (event) => {
  let msg
  switch (event.message.text.toLowerCase().trim()) {
    case 'sticker':
      msg = sendSticker()
      break
    case 'location':
      msg = sendLocation()
      break
    case 'image':
      msg = sendImage()
      break
    case 'imagemap':
      msg = sendImageMap()
      break
    case 'button':
      msg = sendButton()
      break
    case 'flex':
      msg = await sendFlexCovidInfo()
      break
    case 'roompromotion':
      msg = await sendFlexPromotion()
      break
    case 'quick':
      msg = await sendQuickReply()
      break
    default:
      msg = sendText(event)
  }
  return config.client.replyMessage(event.replyToken, msg)
}
