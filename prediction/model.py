import mlflow
import mlflow.sklearn
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pandas as pd
import joblib
from mlflow.tracking import MlflowClient

# Load the dataset
data = pd.read_csv('E:/PHAASHT/semester7/MLOPS/project/prediction/data.csv')
data['Date/Time'] = pd.to_datetime(data['Date/Time'])
data = data.dropna()
X = data[['Rel Hum_%', 'Temp_C', 'Press_kPa']]
y = data['Temp_C']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Start an MLFlow run
with mlflow.start_run():
    model = LinearRegression()
    model.fit(X_train, y_train)

    # Log model
    mlflow.sklearn.log_model(model, "model")

    # Log parameters
    mlflow.log_param("random_state", 42)
    mlflow.log_param("test_size", 0.2)

    # Log metrics
    train_score = model.score(X_train, y_train)
    test_score = model.score(X_test, y_test)
    mlflow.log_metric("train_score", train_score)
    mlflow.log_metric("test_score", test_score)

    # Register the model
    model_uri = "runs:/{}/model".format(mlflow.active_run().info.run_id)
    mlflow.register_model(model_uri, "TemperaturePredictionModel")

    # Save the model as a .pkl file
    joblib.dump(model, 'temperature_model.pkl')

# Transition model to staging
client = MlflowClient()
model_name = "TemperaturePredictionModel"

# Get the latest version of the model
latest_version_info = client.get_latest_versions(model_name, stages=["None"])[0]
model_version = latest_version_info.version

# Transition model to staging
client.transition_model_version_stage(
    name=model_name,
    version=model_version,
    stage="Staging"
)

print("Model trained, logged, registered, saved as 'temperature_model.pkl', and transitioned to staging.")