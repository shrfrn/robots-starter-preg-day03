export function RobotPreview({ robot }) {
    return <article className="robot-preview">
        <pre>{JSON.stringify(robot, null, 2)}</pre>
    </article>
}