const SENDGRID_FROM_ADDRESS = process.env.SENDGRID_FROM_ADDRESS

exports.handler =  function(event, context, callback) {
  // console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  
  let r = ' \
    [ \
      { \
        "name": "access_key", \
        "label": "アクセスキー", \
        "description": "アクセスキー", \
        "type": "text", \
        "default":"xxxxxxxxxx" \
      }, \
      { \
        "name": "encoding", \
        "label": "エンコード", \
        "description": "エンコード", \
        "type": "text", \
        "default":"shift_jis" \
      }, \
      { \
        "name": "recipient", \
        "label": "送信先アドレス", \
        "description": "受信者に ' + SENDGRID_FROM_ADDRESS +' からのメール受信許可設定を行なっていただく必要があります。また、Sendgrid側の設定に依存しますが、デフォルトではsendgrid.netから送信されます", \
        "type": "text", \
        "default": "' + SENDGRID_FROM_ADDRESS + '" \
      }, \
      { \
        "name": "subject", \
        "label": "タイトル", \
        "description": "メールタイトル", \
        "type": "text", \
        "default": "送信テスト" \
      }, \
      { \
        "name": "bodytext", \
        "label": "メール本文", \
        "description": "メール本文", \
        "type": "text", \
        "default": "このメールはテストです。" \
      } \
    ] \
  '
  
  const res = {
    statusCode: 200,
    headers: {
      'Context-Type': 'application/json'
    },
    body: JSON.stringify(JSON.parse(r))
  }
  callback(null, res);
}