import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { robotService } from "../services/robot.service";

export function RobotDetails() {
    const [ robot, setRobot ] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        loadRobot()
    }, [id])

    async function loadRobot() {
        const robot = await robotService.getById(id)
        setRobot(robot)
    }

    return <section className="robot-details">
        <pre>{JSON.stringify(robot, null ,2)}</pre>
        <Link to="/robot">Back</Link>
        <Link to="/robot/r4">Next</Link>
    </section>
}