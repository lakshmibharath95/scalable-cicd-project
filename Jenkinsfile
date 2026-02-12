pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t scalable-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                echo 'Deploying container...'
                sh '''
                docker stop scalable-app || true
                docker rm scalable-app || true
                docker run -d -p 3000:3000 --name scalable-app scalable-app
                '''
            }
        }
    }
}

