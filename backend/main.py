from flask import Flask, jsonify, request
from service import service_random_users
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/consumer/random')
def home():
    try:
        count = request.args.get('count', default=1, type=int)
        
        result = service_random_users(count)
        if not result:
            return jsonify({
                "message": "Verificar la API consumer",
                "status": "error"
            }), 404
            
        return jsonify({
            "message": "Generación de usuarios de manera random correctamente",
            "status": "success",
            "data": result
        }), 200
        
    except Exception as err:
        return jsonify({
                "message": "Error interno del server",
                "status": "error"
            }), 500
        


if __name__ == '__main__':
    app.run(debug=True)