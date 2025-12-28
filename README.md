This is a lambda function handler that will be called at the start and end of each trading day to start the EC2 servers you use in your trading system. You will need to create the AWS Lambda Function (in the Console or using the CLI) and upload a zip file (run zip-lambda.sh to do this). You will also need to give the role you use to run the lambda two permissions: StartInstances and StopInstances.

Finally, you will set up two EventBridge Schedules, one sometime before the start of trading (so if trading starts at 8:30AM Central Time, you might schedule for 8AM Central Time) and one sometime after the end of trading (for trading ending at 3:15PM Central, you might schedule shutdown for 4PM Central).

The handler will check for exchange holidays and decline to start or stop servers on a holiday. This is currently just US exchange holidays.
