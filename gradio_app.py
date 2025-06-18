import gradio as gr
import json
import random
from transformers import pipeline
from sentence_transformers import SentenceTransformer, util
import torch
from gtts import gTTS
import os
import tempfile
from playsound import playsound
import numpy as np
from PIL import Image
import requests
from io import BytesIO

# Load knowledge base
with open('knowledge_base.json', 'r', encoding='utf-8') as f:
    knowledge_base = json.load(f)

# Initialize models
sentiment_analyzer = pipeline("sentiment-analysis")
model = SentenceTransformer('all-MiniLM-L6-v2')

# Load emoji images
EMOJI_MAP = {
    "happy": "😊",
    "excited": "🎉",
    "thinking": "🤔",
    "tech": "💻",
    "success": "✅",
    "warning": "⚠️",
    "idea": "💡",
    "heart": "❤️"
}

def get_emoji_for_sentiment(text):
    result = sentiment_analyzer(text)[0]
    if result['label'] == 'POSITIVE':
        return random.choice([EMOJI_MAP["happy"], EMOJI_MAP["excited"], EMOJI_MAP["heart"]])
    elif result['label'] == 'NEGATIVE':
        return random.choice([EMOJI_MAP["thinking"], EMOJI_MAP["warning"]])
    return random.choice([EMOJI_MAP["tech"], EMOJI_MAP["idea"]])

def find_best_match(query, patterns):
    query_embedding = model.encode(query, convert_to_tensor=True)
    pattern_embeddings = model.encode(patterns, convert_to_tensor=True)
    similarities = util.pytorch_cos_sim(query_embedding, pattern_embeddings)[0]
    return torch.argmax(similarities).item()

def text_to_speech(text, language='en'):
    tts = gTTS(text=text, lang=language, slow=False)
    with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as fp:
        tts.save(fp.name)
        return fp.name

def generate_response(message, history, language='en', use_voice=False):
    # Find the best matching intent
    best_match_idx = -1
    best_match_score = -1
    
    for idx, intent in enumerate(knowledge_base['intents']):
        if not intent['patterns']:
            continue
        match_idx = find_best_match(message, intent['patterns'])
        similarity = util.pytorch_cos_sim(
            model.encode(message, convert_to_tensor=True),
            model.encode(intent['patterns'][match_idx], convert_to_tensor=True)
        )[0][0]
        
        if similarity > best_match_score:
            best_match_score = similarity
            best_match_idx = idx
    
    if best_match_score > 0.5 and best_match_idx != -1:
        intent = knowledge_base['intents'][best_match_idx]
        response = random.choice(intent['responses'])
        emoji = get_emoji_for_sentiment(message)
        response = f"{emoji} {response}"
        
        # Add tutorial if available
        if 'tutorial' in intent:
            response += "\n\n📚 Here's a step-by-step guide:\n"
            if isinstance(intent['tutorial'], dict):
                for app, steps in intent['tutorial'].items():
                    response += f"\n📱 {app.upper()}:\n"
                    for i, step in enumerate(steps, 1):
                        response += f"{i}. {step}\n"
            else:
                for i, step in enumerate(intent['tutorial']['steps'], 1):
                    response += f"{i}. {step}\n"
        
        # Add tips if available
        if 'tips' in intent:
            response += "\n💡 Quick Tips:\n"
            for category, tips in intent['tips'].items():
                response += f"\n{category.title()}:\n"
                for tip in tips:
                    response += f"• {tip}\n"
    else:
        response = f"{EMOJI_MAP['thinking']} {random.choice(knowledge_base['default_responses'])}"
    
    if use_voice:
        audio_file = text_to_speech(response, language)
        return response, audio_file
    return response, None

def create_chat_interface():
    with gr.Blocks(theme=gr.themes.Soft()) as demo:
        gr.Markdown("""
        # 🤖 DigiBuddy - Your Digital Literacy Guide
        
        Welcome to DigiBuddy! I'm here to help you navigate the digital world with confidence and ease. 
        Whether you're learning about technology for the first time or need help with specific tasks, 
        I'm here to guide you every step of the way! 🌟
        """)
        
        with gr.Row():
            with gr.Column(scale=4):
                chatbot = gr.Chatbot(
                    height=600,
                    show_label=False,
                    container=True,
                    bubble_full_width=False,
                )
                with gr.Row():
                    msg = gr.Textbox(
                        placeholder="Type your question here...",
                        show_label=False,
                        container=False
                    )
                    submit = gr.Button("Send", variant="primary")
            
            with gr.Column(scale=1):
                language = gr.Dropdown(
                    choices=list(knowledge_base['languages'].items()),
                    value="en",
                    label="Language"
                )
                voice = gr.Checkbox(label="Enable Voice", value=False)
                
                gr.Markdown("### Quick Access")
                for intent in knowledge_base['intents']:
                    if intent['tag'] not in ['greeting', 'motivation']:
                        gr.Button(
                            intent['patterns'][0].title(),
                            variant="secondary"
                        ).click(
                            lambda x: x,
                            inputs=[gr.Textbox(value=intent['patterns'][0], visible=False)],
                            outputs=[msg]
                        )
        
        def respond(message, chat_history, language, voice):
            response, audio_file = generate_response(message, chat_history, language, voice)
            chat_history.append((message, response))
            if audio_file and voice:
                return chat_history, audio_file
            return chat_history, None
        
        msg.submit(respond, [msg, chatbot, language, voice], [chatbot, gr.Audio()])
        submit.click(respond, [msg, chatbot, language, voice], [chatbot, gr.Audio()])
        
        gr.Markdown("""
        ### Tips for using DigiBuddy:
        - 💬 Type your questions naturally
        - 🎤 Enable voice for audio responses
        - 🌐 Choose your preferred language
        - 📱 Use quick access buttons for common topics
        - 💡 Follow the step-by-step guides
        """)
    
    return demo

if __name__ == "__main__":
    demo = create_chat_interface()
    demo.launch(share=True) 