pipeline {
    agent any

    environment {
        // Define environment variables here
        NODEJS_VERSION = '14'
        SONAR_PROJECT_KEY = 'your-sonar-project-key'
        NEXUS_REPO = 'http://your-nexus-repo/repository/npm-releases/'
        DOCKER_REGISTRY = 'your-docker-registry'
        K8S_NAMESPACE = 'your-kubernetes-namespace'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout source code
                checkout scm
                echo 'checkout suc'
            }
        }

        // stage('Build and Test') {
        //     steps {
        //         // Install Node.js and dependencies
        //         withEnv(["PATH+NODEJS=${tool 'NodeJS ' + NODEJS_VERSION}/bin"]) {
        //             sh 'npm install'
        //             sh 'npm test'
        //         }
        //     }
        // }

        // stage('SonarQube Scan') {
        //     steps {
        //         script {
        //             withSonarQubeEnv('SonarQube') {
        //                 sh 'npm install -g sonarqube-scanner'
        //                 sh 'sonar-scanner'
        //             }
        //         }
        //     }
        // }

        // stage('Save Artifact to Nexus') {
        //     steps {
        //         script {
        //             // Assuming your backend has a build script or you can create a tarball
        //             sh 'tar -czf backend-artifact.tgz backend/*'
        //             sh "curl -v --user username:password --upload-file backend-artifact.tgz ${NEXUS_REPO}/backend-artifact-${BUILD_NUMBER}.tgz"
        //         }
        //     }
        // }

        // stage('Build and Push Docker Image') {
        //     steps {
        //         script {
        //             // Build Docker image for the backend
        //             sh 'docker build -t $DOCKER_REGISTRY/your-node-app:${BUILD_NUMBER} ./backend'

        //             // Push Docker image to registry
        //             sh 'docker push $DOCKER_REGISTRY/your-node-app:${BUILD_NUMBER}'
        //         }
        //     }
        // }

        // stage('Deploy on Kubernetes') {
        //     steps {
        //         script {
        //             // Assuming you have Kubernetes credentials configured in Jenkins
        //             withKubeConfig([credentialsId: 'your-kube-config-credentials', serverUrl: 'https://your-kube-api-server']) {
        //                 sh "kubectl apply -f kubernetes-deployment.yaml --namespace=${K8S_NAMESPACE}"
        //             }
        //         }
        //     }
        // }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
