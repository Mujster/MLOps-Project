# Weather Prediction Full-Stack Application with MLOps Integration

This project showcases practical experience in integrating **MLOps tools** such as **DVC**, **MLFlow**, and **Airflow** with a full-stack application for weather prediction. The project includes implementing **DevOps/MLOps practices**, **CI/CD pipelines**, and deploying the application using **Kubernetes**.

---

## 🚀 Project Objectives

1. **Integrate DVC** for dataset and model versioning.
2. **Use MLFlow** for tracking experiments, logging parameters, metrics, and managing model lifecycle.
3. **Build a Full-Stack Application**:
   - **Frontend**: MERN Stack-based interface for user interactions.
   - **Backend**: Flask/FastAPI REST API for predictions.
4. **Adopt Git Workflow**:
   - Branch-based workflow: `Dev`, `Testing`, and `Prod`.
   - CI/CD pipelines for testing and deploying.
5. **Automate Workflows** with Airflow for data preprocessing, training, and monitoring.
6. **Write a Blog** documenting the entire implementation.

---

## 🛠️ Tools and Technologies

- **Frontend**: React.js
- **Backend**: Nodejs,Express.js
- **Database**: MongoDB
- **Versioning Tools**: DVC, MLFlow
- **CI/CD**: GitHub Actions
- **Containerization**: Docker, DockerHub
- **Orchestration**: Kubernetes, Minikube
- **Workflow Automation**: Airflow

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Mujster/MLOps-Project.git

```
Once the repository is cloned, navigate into the project directory

### 2. Open the Project in Visual Studio Code

Open the project folder in Visual Studio Code (VS Code). If you're using VS Code, you can do this directly from the terminal:

```bash
code .

```
### 3. Install Dependencies

In your terminal, navigate to the Frontend directory and install the dependencies:

```bash
cd Frontend
npm install

```
This will install the following:

- **Vite** - A build tool for fast development and production-ready builds.
- **React** - The JavaScript library for building user interfaces.
- **TailwindCSS** - A utility-first CSS framework for styling.

```bash
cd Backend
npm install

```

This will install the following:

- **Express.js** - Node js framework for backend application.
- **Mongoose** - A tool that acts as a bridge between backend server and database.
- **jwt** - A package use for authentication and authorization.
- **bcrypt** - A package use for hashing user's password.


### 4. Setup MongoDB

- Install MongoDB and start the service.
- Create a database named weatherApp/mlops project.
- Update MONGO_URI in .env files in the backend.


### 4. Configure DVC

initialize dvc in the project 


```bash
run: dvc init
```
Add the dataset and version it:
```bash
run: dvc add data/weather_data.csv
```

Push the dataset to remote storage:

```bash
run: dvc remote add -d myremote <remote-storage-url>
dvc push
```

### 5. Configure MLFlow

Start the MLFlow server:

Log metrics and models during training


### 6. Setup Airflow
```bash 
pip install apache-airflow
airflow db init
airflow scheduler
airflow webserver
```
Add DAGs for preprocessing and training (dags folder).

## 7. Dockerize the Application

Build Docker images:

```bash 
docker build -t backend ./backend
docker build -t frontend ./frontend
```

Push images to DockerHub:

```bash 
docker login
docker tag backend <DockerHub username>>/weather-backend
docker push <DockerHub username>/weather-backend
```

### 8.  Deploy with Kubernetes

Start Minikube:

```bash
minikube start
```

Apply Kubernetes manifests

```bash
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

### 9. 🌐 Application Features

## Frontend (React)

- Weather Input Form: Allows users to input weather data.
- Temperature Predictions: Displays predicted temperature based on user input.

## Backend (Node.js)

- POST /predict: Accepts weather features and returns predictions.
- Signup/Login: MongoDB-based session management.
- Database (MongoDB) Stores user authentication data.

## 🔀 Git Branch Workflow

1. Branches:
  - **Dev**: Active development.
  - **Testing**: Automated testing and Docker build.
  - **Prod**: Deployment branch.



### 10. Blog

Here is our detailed medium blog about this project:

```bash
https://medium.com/@junaidkhalid2001/building-a-weather-prediction-app-with-mlops-a-journey-into-dvc-mlflow-and-kubernetes-72ac35f83875
```

With this guide, you should be able to set up this project with ease. Happy coding! 🚀
