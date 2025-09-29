<div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
  {filteredTasks.map((task) => (
    <TaskCard
      key={task.id}
      task={task}
      onToggleComplete={handleToggleComplete}
      onDelete={handleDeleteTask}
      onEdit={handleEditTask}
    />
  ))}
</div>
