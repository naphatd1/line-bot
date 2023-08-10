exports.sendLocation = () => {
  let msg = {
    type: 'location' ,
    title: 'Kasetsart University',
    address: '50 Ngamwongwan Rd, Lat Yao, Chatuchak, Bangkok 10900',
    latitude: 13.849806862947194,
    longitude: 100.569362734926,
  }
  return msg
}
