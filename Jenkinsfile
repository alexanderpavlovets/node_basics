pipeline {
    // agent { docker { image 'node:6.3' } }
    agent any
    environment {
      ADDED_ENV_VAR = 'added env variable for all steps within pipeline'

      // Dynamic set of env variables:
      RETURN_EXIT_STATUS = """${sh(
            returnStatus: true,
            script: 'exit 1'
        )}"""
      RETURN_STD_OUT_EXAMPLE = """${sh(
            returnStdout: true,
            script: 'echo "clang"'
        )}"""
    }

    // Parameters for pipeline. See usage in stage 2 step 1 
    parameters {
      string(name: 'userName', defaultValue: 'Alex-Default', description: 'Default user name to usage')
    }

    stages {
        stage('ENV_VARS') {
            environment {
              ADDED_ENV_VAR_FOR_STAGE = 'added env variable for stage where it was declared'
            }
            steps {
                sh 'npm --version'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo env.ADDED_ENV_VAR
                echo env.ADDED_ENV_VAR_FOR_STAGE
                sh 'printenv'
                // via "params" it is possible to acces define "parameters", and parameters from "Build with Paraemters" setting
                echo "${params.userName} is current user"
            }
        }
        
        stage('Building Browsers Farm') {
            steps {
                // echo environment
                // echo '---------'
                // echo parameters
                dir("test_browsers_farm") {
                    git url: 'https://github.com/alexanderpavlovets/selenoid_easy_start_unix.git'
                    sh './start.sh'
                }
            }
        }

        stage('Testing') {
            steps {
                dir("test_framework") {
                    git url: 'https://github.com/alexanderpavlovets/easy_start_protractor-ts.git'
                    sh 'cat README.md'
                    sh 'npm install'
                    sh 'npm test'
                }
                dir("test_browsers_farm") {
                    sh './stop.sh'
                }
            }
        }

        stage('Groove') {
            steps {
                // Groovy-like methods call:
                sh 'echo hello' /* short form  */
                sh([script: 'echo hello'])  /* long form */
            }
        }

        stage('Multiple sh lines') {
            steps {
                sh '''
                    echo "Multiline shell are available also"
                    ls -lah
                '''
            }
        }

        stage('Retry and Timeout') {
            steps {
                // These fail the build - turned-off
                // retry(2) {
                //     sh './hmmm.sh'
                //     echo 'failed, should be retried' // won't be displayed
                // }
                // timeout(time: 5, unit: 'SECONDS') {
                //     sh './some-check.sh'
                // }
                echo 'turned off security on'
            }
        }
    }
    
    // It is possible to use several agents (for Windows and Linux for example). I don't need so advance knowledge for now.
    // It is possible to use parallel execution. I don't need so advance knowledge for now.
    // Failure handling:
    post {
        always {
            echo 'Message from post-conditions/always'
        }
        success {
            echo 'Message from post-conditions/success'
        }
        failure {
            echo 'Message from post-conditions/failure'
        }
        unstable {
            echo 'Message from post-conditions/unstable'
        }
        changed {
            echo 'Message from post-conditions/changed '
        }
    }
}

