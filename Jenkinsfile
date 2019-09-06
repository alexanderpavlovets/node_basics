pipeline {
    agent { docker { image 'node:6.3' } }
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
    stages {
        stage('build') {
            environment {
              ADDED_ENV_VAR_FOR_STAGE = 'added env variable for stage where it was declared'
            }
            steps {
                sh 'npm --version'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo env.ADDED_ENV_VAR
                echo env.ADDED_ENV_VAR_FOR_STAGE
                sh 'printenv'
            }
        }
    }
}