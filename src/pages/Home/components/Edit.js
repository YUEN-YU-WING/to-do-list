const Edit = ({ newTask, handleChange, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>備忘錄</h1>
                <p>記事:</p>
                <input
                    type="text"
                    name="title"
                    value={newTask.title || ""}
                    onChange={handleChange}
                />
                <p>日期:</p>
                <input
                    type="date"
                    name="date"
                    value={newTask.date || ""}
                    onChange={handleChange}
                />
                <p>時間:</p>
                <input
                    type="time"
                    name="time"
                    value={newTask.time || ""}
                    onChange={handleChange}
                />
                <button type="submit" className="add">新增</button>
            </form>
        </div>
    )
}

export default Edit