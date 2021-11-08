import os
from fastapi import FastAPI, Form, Response, Request, HTTPException
from twilio.twiml.messaging_response import MessagingResponse
from twilio.request_validator import RequestValidator
from transformers import pipeline
from twilio.rest import Client


app = FastAPI()
TWILIO_AUTH_TOKEN = "3c78e3afc2b3128942a6902ff35b9163"
ACCOUNT_SID = "AC7325dafccea07beac9c043f5940b9bd2"

@app.get('/')
def home():
    return 'Hi Alt'


@app.get('/send_message')
def home():
    client = Client(ACCOUNT_SID, TWILIO_AUTH_TOKEN)
    message = client.messages.create(
        body="""
Olá Joana! Tudo bem? Meu nome é Joao virtual assistant of alt.bank ESCi, 
eu vi que ainda não subiu para nós o pagamento da sua parcela 3 do seu
empréstimo conosco. Poderia te ajudar de alguma forma?

1. QR code para pagamento
2. Chave para pagamento via PIX
3. Confirmação do valor da parcela
4. Falar com o atendente
                            """,
        from_='whatsapp:+14155238886',
        to='whatsapp:+573148327741'
    )
    return message.sid


@app.post("/chat")
async def chat(From: str = Form(...), Body: str = Form(...)):
    response = MessagingResponse()
    msg = response.message()
    print('Hole')
    if '1' in str(Body):
        message = """Aqui está o QR code, se precisar de algo, estamos à disposição."""
        msg.media('https://randomqr.com/assets/images/randomqr-256.png')
        msg.body(message)
    elif '2' in str(Body):
        message = """Segue para ajudar a chave pix para facilitar o pagamento

ALT EMPRESA SIMPLES DE CREDITO LTDA

CNPJ: 42.690.527/0001-35

Caso precisar de algo, estamos à disposição.
                    """
        msg.body(message)    
    elif '3' in str(Body):
        message = """O valor da sua parcela é de R$ 895,00, qualquer coisa estamos a disposição.
                    """
        msg.body(message) 
    elif '4' in str(Body):
        message = """Alguém da nossa equipe entrará em contato com você pelo whatsapp, por favor aguarde
                    """
        msg.body(message)        
    return Response(content=str(response), media_type="application/xml")
