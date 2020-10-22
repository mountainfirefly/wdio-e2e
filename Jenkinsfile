pipeline {
    agent any 
    tools {nodejs "node"}

    stages {
        stage('build') {
            steps {
               echo 'Building..'
               sh 'env'
               sh '''
                npm config ls
                echo env
                npm install;
                npx wdio wdio.conf.js
                '''
            }
        }
    }
}
