pipeline {
  agent any

  environment {
    IMAGE_NAME = "node-app"
    IMAGE_TAG = "${BUILD_NUMBER}"
  }

  stages {

    stage('Checkout') {
      steps {
        git 'https://github.com/YOUR_USERNAME/scalable-cicd-project.git'
      }
    }

    stage('Detect Environment') {
      steps {
        script {
          ENV = (env.BRANCH_NAME == "main") ? "prod" : "dev"
        }
      }
    }

    stage('Fetch Secrets') {
      steps {
        sh '''
          SECRET_PATH=${ENV}/mongo
          export MONGO_URL=$(aws secretsmanager get-secret-value \
            --secret-id $SECRET_PATH \
            --query SecretString \
            --output text | jq -r .MONGO_URL)
        '''
      }
    }

    stage('Build Image') {
      steps {
        sh '''
          docker build -t $IMAGE_NAME:$IMAGE_TAG ./app


