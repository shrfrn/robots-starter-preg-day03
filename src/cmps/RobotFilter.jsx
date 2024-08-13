import { useEffect, useState } from "react"
import { robotService } from "../services/robot.service"

export function RobotFilter({ filterBy, onFilterBy }) {
    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const { name, type } = target
        const value = type === 'text' ? target.value : +target.value || ''

        setFilterByToEdit(prev => ({ ...filterByToEdit, [name]: value }))
    }

    return <section className="robot-filter">
        <label htmlFor="model">Model</label>
        <input 
            id="model"  
            value={filterByToEdit.model}  
            onChange={handleChange}
            name="model"  
            type="text" />

        <label htmlFor="battery">Battery</label>
        <input 
            id="battery"  
            value={filterByToEdit.minBatteryStatus}  
            onChange={handleChange}
            name="minBatteryStatus"  
            type="number" />
    </section>
}