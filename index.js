const express = require('express');
// const bodyParser = require('body-parser');
// const twilio = require('twilio');

const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const message = req.body.entry[0].messaging[0].message.text;

  if (message.includes('hi')) {
    // const client = new twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
    // client.messages.create({
    //   to: 'YOUR_PHONE_NUMBER',
    //   from: 'TWILIO_PHONE_NUMBER',
    //   body: 'Incoming message includes the specific word'
    // });
    console.log("Asche");
  }

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Chatbot server listening on port 3000');
});
