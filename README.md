# AzureEventhubPublisher

azure-eventhub-publisher
==========

lightweight npm module to publish events into an azure eventhub instance.

<!-- TOC -->

- [CLI](#cli)
- [LIB](#lib)
- [License](#license)

<!-- /TOC -->

## CLI

### Installation
```sh
$ npm install azure-eventhub-publisher -g
```

### Usage
To publish and event to an eventhub instance, run the following command :
```azure-eventhub-publisher --config=<CONFIG_FILE_PATH> --event=<EVENT_FILE_PATH>```

### Arguments 

#### configuration
CLI configuration argument expects a path to a json file mirroring a configuration parameter as defined in below LIB section

#### event
CLI event argument expects a path to a json file mirroring an event parameter as defined in below LIB section

## LIB

### Installation
```sh
$ npm install azure-eventhub-publisher
```

### Usage
```
const { publishEvent } = require("azure-eventhub-publisher")

const configuration = {
    eventhubConnectionString: <EVENTHUB_CONNECTION_STRING>,
    eventhubName: <EVENTHUB_NAME>  
}

const event = {
    'test':'test'
}

publishEvent(configuration, event)
```

### Parameters

### configuration 
An object defining the 2 following properties 

#### eventhubConnectionString
The full eventhub connexion string which can be found in "Shared Access Policies" section of an Event Hubs namespace in Azure Portal interface.

#### eventhubName 
The name of the eventhub entity which can be found into the "Event Hubs" section of an Event Hubs namespace in Azure Portal interface.

### event 
An arbitrary object that will be sent to the eventhub instance defined into the configuration

## License

MIT

[npm-url]: https://www.npmjs.com/package/azure-eventhub-publisher