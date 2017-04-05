import os

from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse

accountSid = '<REPLACE_HERE>'
authToken = '<REPLACE_HERE>'


def sendSMS():
    client = Client(accountSid, authToken)

    print('Sending a message...')
    new_message = client.messages.create(to='+5561912345678', from_='+1234567890', body='Hello World!!! twilio-sms-bot using python')

if __name__ == '__main__':
    sendSMS()
