import requests
import json
import os
# from dotenv import load_dotenv

# load_dotenv()

url = "https://api-integracao.sandbox.vipcommerce.com.br/"
response = requests.get(url)

print(response.status_code)
print(response.json())