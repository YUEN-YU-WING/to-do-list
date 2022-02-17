const Task = ({ title, date, time, id, handleRemove }) => {
    return (
        <div className="task">
            <div>
                <p>{title}</p>
                {!date ? null : <p>{`${date} ${time}`}</p>}
            </div>
            <button onClick={() => handleRemove(id)}>刪除</button>
        </div>
    )
}

export default Task