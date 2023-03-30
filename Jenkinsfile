pipeline {
    agent any
    triggers {
        githubPush()
    }
    stages {
        stage('Display Environment Variables') {
            steps {
                echo "Jenkins URL: ${JENKINS_URL}"
                echo "Build ID: ${BUILD_ID}"
            }
        }
    }
}