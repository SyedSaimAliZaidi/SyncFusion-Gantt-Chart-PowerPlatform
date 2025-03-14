import { GanttComponent, Inject, Edit } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";
export default function Gantt() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: "ParentId",
  };
  const editSettings = {
    allowTaskbarEditing: true,
  };
  return (
    <GanttComponent
      dataSource={data}
      taskFields={taskFields}
      editSettings={editSettings}
      height="400px"
    >
      <Inject services={[Edit]} />
    </GanttComponent>
  );
}
