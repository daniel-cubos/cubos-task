import { Link } from "react-router-dom";
import "./styles.css";

function Task({ task }) {
  return (
    <Link className="container-task" to={`/task-detail/${task.id}`}>
      <h3>{task.name}</h3>
      <hr />
      <div>
        <div>
          <strong>Description:</strong>
          <p>{task.description}</p>
        </div>
        <div>
          <strong>Responsável: </strong>
          <span>{task.owner}</span>
        </div>
      </div>
    </Link>
  );
}

export default Task;
