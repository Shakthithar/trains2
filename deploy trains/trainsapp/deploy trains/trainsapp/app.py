from flask import Flask, render_template, request, jsonify, redirect, url_for
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key-here'
app.config['UPLOAD_FOLDER'] = 'static/uploads'

# Ensure upload folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    data = request.form
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    # Here you would typically save to database or send email
    print(f"New contact submission: {name} <{email}> - {message}")
    
    return jsonify({
        'status': 'success',
        'message': 'Thank you for your message! We will get back to you soon.'
    })

@app.route('/submit_application', methods=['POST'])
def submit_application():
    data = request.form
    # Process application data here
    
    return jsonify({
        'status': 'success',
        'message': 'Application submitted successfully!'
    })

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({
            'status': 'success',
            'filename': filename,
            'url': url_for('static', filename=f'uploads/{filename}')
        })

# API endpoint for chatbot
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    message = data.get('message', '').lower()
    
    # Simple response logic - you'd replace this with a proper NLP service
    responses = {
        'hi': 'Hello! How can I help you with TRAInS today?',
        'hello': 'Hi there! What would you like to know about our programs?',
        'pricing': 'Our Group Project Package costs ₹20k–₹25k per team. Would you like more details?',
        'technologies': 'We offer training in AI, Blockchain, IoT, Cybersecurity and more!',
        'default': 'Thanks for your message! Our team will get back to you soon.'
    }
    
    response = responses['default']
    for key in responses:
        if key in message:
            response = responses[key]
            break
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)