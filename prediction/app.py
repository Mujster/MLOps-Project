from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('E:/PHAASHT/semester7/MLOPS/project/prediction/temperature_model.pkl')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    temperature = data.get('temperature')
    humidity = data.get('humidity')
    pressure = data.get('pressure')

    if humidity is None or pressure is None:
        return jsonify({'error': 'Missing data'}), 400

    try:
        temperature= float(temperature)
        humidity = float(humidity)
        pressure = float(pressure)
    except ValueError:
        return jsonify({'error': 'Invalid data format'}), 400

    prediction = model.predict([[temperature,humidity, pressure]])
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)