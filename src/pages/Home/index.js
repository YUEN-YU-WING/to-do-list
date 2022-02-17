import Edit from './components/Edit';
import List from './components/List';
import './index.css';
import { v4 } from 'uuid';

import { useState, useEffect, useRef } from 'react';
import { APT_GET_DATA } from '../../global/constants'

const fetchData = async (setAllTask) => {
    const res = await fetch(APT_GET_DATA);
    const { allTask } = await res.json();
    setAllTask(allTask);
}

const changeData = async (allTask) => {
    await fetch(APT_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ allTask })
    })
}

const Home = () => {
    const submittingState = useRef(false);
 
    const [newTask, setNewTask] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prev) => ({
            ...prev,
            id: v4(),
            [name]: value
        }));
    };

    const [allTask, setAllTask] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        submittingState.current = true;
        if (!newTask.title) return;
        setAllTask((prev) => [newTask, ...prev]);
        setNewTask({});
    };

    const handleRemove = (taskIdToRemove) => {
        submittingState.current = true;
        setAllTask((prev) => prev.filter((task) => task.id !== taskIdToRemove))
    }

    useEffect(() => {
        if (!submittingState.current) {
            return;
        }
        changeData(allTask)
            .then(() => submittingState.current = false)
    }, [allTask])

    useEffect(() => {
        fetchData(setAllTask)
    }, [])

    return (
        <div className="app">
            <Edit newTask={newTask} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
            />
            <List 
                allTask={allTask}
                handleRemove={handleRemove}
            />
        </div>
    )
}

export default Home