import { readFileSync } from 'fs'
import { publishEvent } from './lib/index.js' 

export function cli(args) {
    let configPath
    let eventPath

    for (let j = 0; j < args.length; j++) {
        const arg = process.argv[j]
        if(arg.startsWith('--config=') && arg.split('=').length == 2) {
            configPath = arg.split('=')[1]
        }
        if(arg.startsWith('--event=') && arg.split('=').length == 2) {
            eventPath = arg.split('=')[1]
        }
    }

    if (!configPath) return console.error("missing config file path ( usage : --config=<CONFIG_PATH> )")
    if (!eventPath) return console.error("missing event file path ( usage : --event=<EVENT_PATH> )")

    const rawConfig = readFileSync(configPath)
    const config = JSON.parse(rawConfig)

    const rawEvent = readFileSync(eventPath)
    const event = JSON.parse(rawEvent)

    publishEvent(config, event)
}