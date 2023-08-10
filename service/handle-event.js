const service = require('./handle.message')

exports.handleEvent = (event) => {
  switch (event.type) {
    case 'message':
      switch (event.message.type) {
        case 'text':
          service.handleMessage(event)
          break
        case 'sticker':
          console.log(event)
          break
        default:
          throw new Error('Unknown event' + JSON.stringify(event.message.type))
      }
      break
    case 'postback':
      console.log('Room Pro Id: ' + event.postback.data)
      break
    default:
      throw new Error('Unknown event' + JSON.stringify(event))
  }
}
