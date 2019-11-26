# Jenkins triggered by Github webhook:
1) Install ngrok
2) Run by 
```
./ngrok http 8080
```
3) Copy HTTPS Url provided by ngrok console -> @url
4) Go to github ->repo -> settings -> webhooks -> add -> paste @url+/github-webhook/
```
https://228b9f82.ngrok.io/github-webhook/
```
5) Run Jenkins on 8080
6) Go to Manage Jenkins -> Configure System -> GitHub Pull Requests -> paste HTTPS URLof your repo
7) Go to job/pipeline -> Configure -> Build triggers -> GitHub hook trigger for GITScm polling
8) Push smth in repo -> enjoy your build

# Jenkinsfile declarative pipeline syntax
## String interpolation 

as in php: '' vs ""

def username = 'Alex'
echo 'Hello Mr. ${username}'          // Hello Mr. ${username}
echo "I said, Hello Mr. ${username}"  // I said, Hello Mr. Alex

## Env variables

list is available by link: jenkinsURL(http://127.0.0.1:8080)/pipeline-syntax/globals

## Docker:

### As agent:
```
agent {
    docker {
        image 'myregistry.com/node'
        label 'my-defined-label'
        registryUrl 'https://myregistry.com/'
        registryCredentialsId 'myPredefinedCredentialsInJenkins'
        args  '-v /tmp:/tmp'
    }
}
```

### As dockerfile:
To use this oprion Jenkinsfile must be loaded from Multibranch Pipeline, or a "Pipeline from SCM."
```
agent { dockerfile true }
```

```
agent {
    dockerfile {
        filename 'Dockerfile.build' // if file name is not "Dockerfile"
        dir 'build' // path to file
        label 'my-defined-label'
        additionalBuildArgs  '--build-arg version=1.0.2'
        args '-v /tmp:/tmp'
        registryUrl 'https://myregistry.com/'
        registryCredentialsId 'myPredefinedCredentialsInJenkins'
    }
}
```

## Credentilas:
Need to configure credential IDs in Jenkins itself, and the use ENV_VARS to use them
```
pipeline {
    agent { agent }
    environment {
        AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
    }
    stages {
        stage('Example stage 1') {
            steps {
                echo AWS_ACCESS_KEY_ID // ****
            }
        }
    }
}
```

## Testing:
Good practise to keep test results in post-actions

To fail the  pipeline: "skipStagesAfterUnstable" - Declarative syntax, currentBuild.currentResult == 'SUCCESS' - Scripted syntax
```
pipeline {
    options {
          skipStagesAfterUnstable()
      }
}
```

During pipeline "Artifacts" are generated - test results there (obvious)

```
pipeline {
    ...
    post {
        always {
            archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
            archiveArtifacts 'build/libs/**/*.jar' // short syntax if only 1 parameter needed
            junit 'build/reports/**/*.xml'
        }
    }
}
```

## Allure report adding: 
- download and install "Allure Jenkins Plugin" from Manage Jenkins
- add allure command line: Manage Jenkins -> Global Tool Configuration -> find Allure CommandLine installations (https://www.wedoqa.com/2017/11/allure-integration-in-jenkins/)
- in case of pipeline (mine one), just add a script to post-conditions: 
```
allure includeProperties: false, jdk: '', results: [[path: 'test_framework/allure-results']]
```
This script is generated from Jenkins itself (snippet). 
Example https://docs.qameta.io/allure/#_pipeline_plugin - official docs.

## Notifications:
As testing - nice to have it in post-actions: 
```
post {
    success {
        slackSend channel: '#ops-room',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
    }
}
```

## Several repo usage
Advice is to use different folders for different repos:
```
steps {
    dir("test_framework") {
        sh 'pwd'
        git url: 'https://github.com/alexanderpavlovets/easy_start_protractor-ts.git'
        sh 'cat README.md'
    }
}
```
