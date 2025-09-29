pipeline {
  agent any
  tools {
    maven 'Maven3'
    nodejs 'Node18'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'mvn -B clean package -DskipTests'
        }
      }
    }
    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
    stage('Docker Compose Up') {
      steps {
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
