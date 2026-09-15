export default function ProgressWidget({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const remainingTasks = totalTasks - completedTasks;
  const completionPercentage = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <section className="progress-widget" aria-labelledby="progress-title">
      <div className="progress-widget-heading">
        <div>
          <p className="eyebrow">Today&apos;s focus</p>
          <h3 id="progress-title">Progress tracker</h3>
        </div>
        <strong>{completionPercentage}%</strong>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Tasks completed today"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={completionPercentage}
      >
        <span style={{ width: `${completionPercentage}%` }} />
      </div>
      <div className="progress-summary">
        <span>{completedTasks} completed</span>
        <span>{remainingTasks} remaining</span>
      </div>
      <p className="progress-message">
        {totalTasks === 0
          ? "Add a task to start your focus list."
          : remainingTasks === 0
            ? "Everything on your list is complete."
            : "Finish the next task to move your progress forward."}
      </p>
    </section>
  );
}
