pipeline {
  agent {
    kubernetes {
      label 'nodejs-demo-app'  // all your pods will be named with this prefix, followed by a unique id
      idleMinutes 5  // how long the pod will live after no jobs have run on it
      yamlFile 'build-pod.yaml'  // path to the pod definition relative to the root of our project 
      defaultContainer 'node'  // define a default container if more than a few stages use it, will default to jnlp container
    }
  }

  stages {
    stage('Build') {
      steps {
        sh "npm install"   
      }
    }
    stage('Build Docker Image') {
      steps {
        container('docker') {  
          sh "docker build -t nodejs-demo:latest ."
        }
      }
    }
  }
}
