pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                // Use Maven Docker image to build backend
                dir('backend') {
                    docker.image('maven:3.9.11-eclipse-temurin-17').inside {
                        sh 'mvn -B clean package -DskipTests'
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                // Use Node Docker image to build frontend
                dir('frontend') {
                    docker.image('node:18-alpine').inside {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Docker Compose Up') {
            steps {
                // Use docker-compose on host machine (or install in Jenkins agent)
                sh 'docker-compose up -d --build'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
