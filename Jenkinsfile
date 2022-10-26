pipeline {
    agent {
        docker { image 'medikove' }
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
