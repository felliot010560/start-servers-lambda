import { handler } from "./index.mjs";
import { argv } from 'node:process';

/**
 * This module is just to test the lambda code locally (before you deploy to a lambda) if you like. You can also
 * just run the lambda locally as described here: https://docs.aws.amazon.com/lambda/latest/dg/foundation-iac-local-development.html
 * Use "npm start" to start the servers
 * Use "npm stop" to stop the servers
 * Be sure that the INSTANCES environment var is defined and exported before running, e.g.:
 * export INSTANCES="i-0123456789ABCDEF0 i-0FEDCBA9876543210 <another-instance-id> <yet-another-instance-id>"
 * You will also need to define the INSTANCES var on your lambda.
 */

console.log( "Doing: " + argv[2] );
const event = {
    action: argv[2] //Must be either "start" or "stop"
}

if( event.action !== "start" && event.action !== "stop" ) {
    console.warn(`Invalid action: ${event.action}`);
    process.exit(-1);
}

await handler(event);