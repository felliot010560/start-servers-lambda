import { EC2Client, StartInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import

const ec2Client = new EC2Client({ region: process.env.REGION });

export const startInstances = async function (instances) {
    // Start the specified EC2 instances.
    const input = {
        InstanceIds: instances
    };

    console.log(`Starting instances: ${JSON.stringify(input.InstanceIds)}`);

    const command = new StartInstancesCommand(input);
    try {
        const response = await ec2Client.send(command);
        console.log(`Start instances response: ${JSON.stringify(response)}`);
    } catch( err ) {
        console.warn(`Error: ${err}`);
        return;
    }

}