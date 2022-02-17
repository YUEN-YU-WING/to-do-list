import Item from "./Task"

const List = ({ allTask, handleRemove }) => {
    return (
        <div className="list">
            {
                allTask.map((task) => {
                    const { title, date, time, id } = task;
                    return (
                        <Item 
                            key={id}
                            id={id}
                            title={title}
                            date={date}
                            time={time}
                            handleRemove={handleRemove}
                        />
                    )
                })
            }
        </div>
    )
}

export default List