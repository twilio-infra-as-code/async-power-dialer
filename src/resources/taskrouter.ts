const getQueuesFromEnv = () => {
    const { QUEUES_FOR_POWER_DIALERS } = process.env;

    if(QUEUES_FOR_POWER_DIALERS) {
        return QUEUES_FOR_POWER_DIALERS.split(",").map(queue => ({ name: queue }))
    }

    return []
}

export const getTaskRouterStructure = ():any => {

    return {
        queues: getQueuesFromEnv()
    }
    
}