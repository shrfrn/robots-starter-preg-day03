import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

window.rs = robotService            // Easy access from console

export const robotService = {
    query,
    save,
    remove,
    getById,
    createRobot,
    getDefaultFilter
}

const STORAGE_KEY = 'robots'

_createRobots()

async function query(filterBy) {
    let robots = await storageService.query(STORAGE_KEY)

    if (filterBy) {
        let { minBatteryStatus = 0, type = '' } = filterBy

        robots = robots.filter(robot =>
            robot.type.toLowerCase().includes(type.toLowerCase()) &&
            robot.batteryStatus > minBatteryStatus
        )
    }
    return robots
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(robotToSave) {
    if (robotToSave.id) {
        return storageService.put(STORAGE_KEY, robotToSave)
    } else {
        robotToSave.isOn = false
        return storageService.post(STORAGE_KEY, robotToSave)
    }
}

function createRobot(model = '', type = '', batteryStatus = 100) {
    return {
        model,
        type,
        batteryStatus,
    }
}

function getDefaultFilter() {
    return {
        type: '',
        minBatteryStatus: 50,
        maxBattery: '',
        model: ''
    }
}

function _createRobots() {
    let robots = utilService.loadFromStorage(STORAGE_KEY)
    if(robots && robots.length > 0) return robots

    robots = [
        { id: 'r1', model: 'Turbo Plonter', batteryStatus: 100, type: 'Security' },
        { id: 'r2', model: 'Salad-O-Matic', batteryStatus: 80, type: 'Cooking' },
        { id: 'r3', model: 'Dusty', batteryStatus: 100, type: 'Cleaning' },
        { id: 'r4', model: 'DevTron', batteryStatus: 40, type: 'Office' }
    ]
    utilService.saveToStorage(STORAGE_KEY, robots)
}