import { useEffect, useState } from "react"
import { robotService } from "../services/robot.service"
import { RobotList } from "../cmps/RobotList"
import { RobotFilter } from "../cmps/RobotFilter"

export function RobotIndex() {
    const [ robots, setRobots ] = useState(null)

    const defaultFilter = robotService.getDefaultFilter()
    const [ filterBy, setFilterBy ] = useState(defaultFilter)

    useEffect(() => {
        loadRobots(filterBy)
    }, [filterBy])

    async function loadRobots(filterBy) {
        const robots = await robotService.query(filterBy)
        setRobots(robots)
    }

    async function removeRobot(robotId) {
        await robotService.remove(robotId)
        setRobots(robots => robots.filter(robot => robot.id !== robotId))
    }
    
    function onFilterBy(filterBy) {
        setFilterBy(filterBy)
    }

    if(!robots) return <div>Loading...</div>
    return <section className="robot-index">
        <h1>Welcome to Robots!</h1>
        <RobotFilter filterBy={filterBy} onFilterBy={onFilterBy}/>
        <RobotList robots={robots} onRemoveRobot={removeRobot}/>
    </section>
}