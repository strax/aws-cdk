import cdk = require('@aws-cdk/core');
import path = require('path');
import lambda = require('../lib');

class TestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    /// !show
    new lambda.Function(this, 'MyLambda', {
      code: lambda.Code.asset(path.join(__dirname, 'handler.zip')),
      handler: 'index.main',
      runtime: lambda.Runtime.PYTHON_3_6
    });
    /// !hide
  }
}

const app = new cdk.App();

new TestStack(app, 'lambda-test-assets-file');

app.synth();
