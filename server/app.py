# server/app.py
from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

@app.route('/inquiry', methods=['POST'])
def inquiry():
    data = request.json
    # Validate required fields
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    if not name or not email:
        return jsonify({"error":"name and email required"}), 400

    # TODO: Save to DB or send email using SMTP or a transactional email API (SendGrid/Mailgun)
    # For demo return OK
    return jsonify({"status":"received", "data": data}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.getenv('PORT', 5000)))
