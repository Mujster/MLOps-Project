// Dummy Prediction Logic (replace with real ML model)
const PredictedModel = ('/api/predict', (req, res) => {
  const { temperature, humidity, pressure } = req.body;

  // Dummy prediction formula (use a real model here)
  const predictedTemp =  (parseFloat(temperature) * 0.7) + (parseFloat(humidity) * 0.1) + (parseFloat(pressure) * 0.2);
  
  res.json({ prediction: predictedTemp.toFixed(2) });
});

export default PredictedModel;