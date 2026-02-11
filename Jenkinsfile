        }
      }
    }

    stage('Fetch Secrets') {
      steps {
        sh '''
          SECRET_PATH=${ENV}/mongo
          export MONGO_URL=$(aws secretsmanager get-secret-value \
            --secret-id $SECRET_PATH \
            --query SecretString \
            --output text | jq -r .MONGO_URL)
        '''
      }
    }

    stage('Build Image') {
      steps {
        sh '''
          docker build -t $IMAGE_NAME:$IMAGE_TAG ./app


