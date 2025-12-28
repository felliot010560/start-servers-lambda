This is a lambda function handler that will be called at the start and end of each trading day to start the EC2 servers you use in your trading system. You will need to create the AWS Lambda Function (in the Console or using the CLI) and upload a zip file (you can run zip-lambda.sh to do this). You will also need to give the role you use to run the lambda two permissions: StartInstances and StopInstances.

When configuring the lambda, be sure to define the REGION environment var (which is, shockingly, the AWS region your instances are in) and the INSTANCE env var, which is a space-delimited list of instance ids in that region, e.g.: "i-0123456789ABCDEF0 i-0FEDCBA9876543210 < <i>another-instance-id</i> > < <i>yet-another-instance-id</i> >".

You will also need to set up two EventBridge Schedules, one sometime before the start of trading (so if trading starts at 8:30AM Central Time, you might schedule for 8AM Central Time) and one sometime after the end of trading (for trading ending at 3:15PM Central, you might schedule shutdown for 4PM Central). The start-trading schedule will invoke the lambda with an event that sets the "action" key to "start", and the end-trading schedule will set "action" to "stop".

The handler will check for exchange holidays and decline to start or stop servers on a holiday. This is currently just US exchange holidays.
