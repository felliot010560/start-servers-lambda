import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import

const ec2Client = new EC2Client({ region: process.env.REGION });

export const stopInstances = async function (instances) {
    // Stop the specified EC2 instances.
    const input = {
        InstanceIds: instances
    };

    console.log(`Stopping instances: ${JSON.stringify(input.InstanceIds)}`);

    const command = new StopInstancesCommand(input);
    try {
        const response = await ec2Client.send(command);
        console.log(`Stop instances response: ${JSON.stringify(response)}`);
    } catch( err ) {
        console.warn(`Error: ${err}`);
        return;
    }

}