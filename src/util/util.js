import {base64encode} from './base64.js'
import {b64Hmacsha1} from './hmacsha1.js'

let TS = Date.parse(new Date())

// 构造加密key值
function structureKey(msg) {
  let cryptoKey = 'qqs/web-app'
  let Str = b64Hmacsha1(cryptoKey, msg)
  let Base64Str = base64encode(Str)

  return Base64Str
}

export {
  structureKey,
  TS
}
