from flask import Flask, request, jsonify, send_from_directory, render_template
from flask_cors import CORS
import json
import random
import os
from transformers import pipeline, Conversation

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)

# Load knowledge base
with open('knowledge_base.json', 'r', encoding='utf-8') as f:
    knowledge_base = json.load(f)

# Hugging Face conversational model
chatbot = pipeline('conversational', model='microsoft/DialoGPT-medium')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '').strip()
    # Try FAQ/tutorial match first
    response, extra = find_response(user_message)
    if not response:
        # Fallback to Hugging Face conversational model
        conv = Conversation(user_message)
        hf_response = chatbot(conv)
        response = hf_response.generated_responses[-1]
        response = add_personality(response)
    return jsonify({'response': response, **extra})

def find_response(message):
    message_lower = message.lower()
    for intent in knowledge_base['intents']:
        for pattern in intent['patterns']:
            if pattern in message_lower:
                response = random.choice(intent['responses'])
                extra = {}
                if 'tutorial' in intent:
                    extra['tutorial'] = intent['tutorial']
                if 'tips' in intent:
                    extra['tips'] = intent['tips']
                return response, extra
    return None, {}

def add_personality(text):
    # Add humor, emoji, and warmth
    fun_lines = [
        "(Psst! You're doing great! 🚀)",
        "Tech can be tricky, but you're trickier! 😄",
        "If Wi-Fi had feelings, it'd be jealous of your skills! 📶✨",
        "Remember: Every click is a step forward! 👣",
        "Learning is fun at any age! 🎉"
    ]
    return f"{text} {random.choice(fun_lines)}"

@app.route('/api/faq', methods=['GET'])
def get_faq():
    faqs = [i['patterns'][0] for i in knowledge_base['intents'] if i['tag'] != 'motivation']
    return jsonify(faqs)

@app.route('/api/tutorials', methods=['GET'])
def get_tutorials():
    tutorials = {i['tag']: i.get('tutorial', None) for i in knowledge_base['intents'] if 'tutorial' in i}
    return jsonify(tutorials)

@app.route('/api/funfact', methods=['GET'])
def fun_fact():
    facts = knowledge_base.get('fun_facts', [
        "Did you know? The first email was sent in 1971! 📧",
        "Fun fact: More than 4.5 billion people use the internet! 🌍",
        "Tip: Always use strong passwords to stay safe online! 🔒"
    ])
    return jsonify({'fact': random.choice(facts)})

if __name__ == '__main__':
    app.run(debug=True) 