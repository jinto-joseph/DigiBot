from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import json
import random
import os

app = Flask(__name__)
CORS(app)

# Load knowledge base
with open('knowledge_base.json', 'r', encoding='utf-8') as f:
    knowledge_base = json.load(f)

@app.route('/')
def home():
    return send_file('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '').lower()
    language = data.get('language', 'en')
    is_voice = data.get('is_voice', False)
    
    # Find matching response
    response_data = find_response(user_message, language, is_voice)
    
    return jsonify(response_data)

def find_response(message, language='en', is_voice=False):
    # Check for exact matches in knowledge base
    for intent in knowledge_base['intents']:
        if message in intent['patterns']:
            response = random.choice(intent['responses'])
            response_data = {
                'response': response,
                'bot_name': 'DigiBuddy',
                'has_tutorial': 'tutorial' in intent,
                'has_tips': 'tips' in intent
            }
            
            # Add tutorial steps if available
            if 'tutorial' in intent:
                response_data['tutorial'] = intent['tutorial']
            
            # Add tips if available
            if 'tips' in intent:
                response_data['tips'] = intent['tips']
            
            return response_data
    
    # Check for partial matches
    for intent in knowledge_base['intents']:
        for pattern in intent['patterns']:
            if pattern in message:
                response = random.choice(intent['responses'])
                response_data = {
                    'response': response,
                    'bot_name': 'DigiBuddy',
                    'has_tutorial': 'tutorial' in intent,
                    'has_tips': 'tips' in intent
                }
                
                if 'tutorial' in intent:
                    response_data['tutorial'] = intent['tutorial']
                
                if 'tips' in intent:
                    response_data['tips'] = intent['tips']
                
                return response_data
    
    # Default response if no match found
    return {
        'response': random.choice(knowledge_base['default_responses']),
        'bot_name': 'DigiBuddy',
        'has_tutorial': False,
        'has_tips': False
    }

@app.route('/api/languages', methods=['GET'])
def get_languages():
    return jsonify(knowledge_base['languages'])

@app.route('/api/voice-commands', methods=['GET'])
def get_voice_commands():
    return jsonify(knowledge_base['voice_commands'])

if __name__ == '__main__':
    app.run(debug=True) 