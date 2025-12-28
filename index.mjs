import { startInstances } from "./startInstances.mjs";
import { stopInstances } from "./stopInstances.mjs";
import { holidays } from "./holidays.js";

export const handler = async(event) => {
    //Is today an exchange holiday? Check against holidays array.
    const today = new Date().toLocaleDateString("sv");
    const found = holidays.find( (val) => val === today );
    if( found ) {
        console.log("Today is a holiday--not starting or stopping servers.");
        return;
    }

    const instances = process.env.INSTANCES.split(" ");
    try {
        if( event.action === "start" ) {
            console.log("Calling to start instances.")
            await startInstances(instances);
        } else if ( event.action === "stop" ) {
            console.log("Calling to stop instances.")
            await stopInstances(instances);
        } else {
            console.log( "Unknown event action." );
        }
        return 'Success';
    } catch (error) {
        console.error(`Failed to process order: ${error.message}`);
        throw error;
    }
};