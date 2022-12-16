const sgMail = require('@sendgrid/mail')
exports.handler = async (event, context) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  return await sgMail.send([{
    to: 'amillion3@gmail.com',
    from: 'andy@sandersbroscoffee.com',
    subject: 'subject',
    text: 'body to send'
  },
    // {
    //   to: 'receiver2',
    //   from: 'sender',
    //   subject: 'subject',
    //   text: 'body to send'
    // }
    ]).then(() => {
    return {
      statusCode: 200,
      body: JSON.stringify('return something here')
    }
  })
}
