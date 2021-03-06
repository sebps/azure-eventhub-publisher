import { EventHubProducerClient } from "@azure/event-hubs";

export default async function publishEvents(config, events) {
    try {
        // extract connection elements from config
        const { eventhubConnectionString, eventhubName } = config

        // Create a producer client to send messages to the event hub.
        const producer = new EventHubProducerClient(eventhubConnectionString, eventhubName);
        
        // Prepare a batch of three events.
        const batch = await producer.createBatch();

        events.forEach(event => batch.tryAdd({ body: event }));

        // Send the batch to the event hub.
        await producer.sendBatch(batch);

        // Close the producer client.
        await producer.close();

        console.log("Events sent");
    } catch (err) {
        console.log("An error occured : ");
        console.log(err)
    }
}