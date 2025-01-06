import requests
import os
from dotenv import load_dotenv

load_dotenv()

class ChatGPTClient:
    def __init__(self):
        self.api_key = os.getenv("GEMINI_API_KEY")
        self.endpoint = "https://api.gemini.com/v1/chat"
        self.headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}"
        }

    def send_message(self, message, model="gemini-model"):
        print("Hi")
        payload = {
            "model": model,
            "messages": [{"role": "user", "content": message}],
            "temperature": 0.7
        }

        try:
            response = requests.post(
                self.endpoint,
                headers=self.headers,
                json=payload
            )
            response.raise_for_status()
            return response.json()["choices"][0]["message"]["content"]
        except requests.exceptions.RequestException as e:
            return f"Error: {str(e)}"

def main():
    chatbot = ChatGPTClient()

    print("MINIME CLI (type 'quit' to exit)")
    print("---------------------------------")

    while True: 
        user_input = input("You: ")
        
        if user_input.lower() == 'quit':
            print("Goodbye!")
            break
            
        response = chatbot.send_message(user_input)
        print(f"ChatGPT: {response}")

if __name__ == "__main__":
    main()