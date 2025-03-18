import React, { useState } from 'react';
import { Task } from '../../types';
import Modal from '../../Components/Modal';
import { MainButton } from '../../Components/Form/button';

const TaskList: React.FC = () => {
  
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Complete Project Proposal',
      description: 'Draft and finalize the project proposal for client review.',
      completed: true,
    },
    {
      id: 2,
      title: 'Team Meeting',
      description: 'Attend the weekly team meeting to discuss project progress.',
      completed: false,
    },
    {
      id: 3,
      title: 'Code Review',
      description: 'Review pull requests and provide feedback on recent code changes.',
      completed: false,
    },
    {
      id: 4,
      title: 'Update Documentation',
      description: 'Revise API documentation with the latest changes and improvements.',
      completed: false,
    },
    {
      id: 5,
      title: 'Fix UI Bugs',
      description: 'Resolve reported UI bugs in the dashboard component.',
      completed : false,
    },

  ]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskDescription, setNewTaskDescription] = useState<string>('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addTask = () => {
    if (newTaskTitle.trim() === '') return;
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const saveTaskChanges = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <div className='flex-col flex lg:flex-row'>
         <div className="mb-4 p-4 border h-[260px] rounded lg:w-1/5 mr-3">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Task Title"
          className="p-2 border rounded mb-2 w-full"
        />
        <textarea
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Task Description"
          className="p-2 border rounded mb-2 w-full"
        />
        <MainButton
          onClick={addTask}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </MainButton>
      </div>
      <table className=" bg-white shadow-lg lg:w-4/5">
        <thead>
          <tr>
            <th className="py-2">Completed</th>
            <th className="py-2">Title</th>
            <th className="py-2">Description</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b shadow-xl">
              <td className="py-2 text-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
              </td>
              <td className="py-2">
                <span className={`${task.completed ? 'line-through' : ''}`}>
                  {task.title}
                </span>
              </td>
              <td className="py-2">
                <span className={`${task.completed ? 'line-through' : ''}`}>
                  {task.description}
                </span>
              </td>
              <td className="py-2 text-center space-y-4">
                <MainButton
                  onClick={() => openEditModal(task)}
                  className="p-1 bg-yellow-400 w-[70px] rounded-none border-white  mr-2"
                >
                  Edit
                </MainButton>
                <MainButton
                  onClick={() => deleteTask(task.id)}
                  className="p-1 bg-red-500 w-[70px]  rounded-none  border-white mr-2"
                >
                  Delete
                </MainButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     


      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {editingTask && (
          <div>
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <div className="mb-4">
              <label className="block mb-2">Title</label>
              <input
                type="text"
                value={editingTask.title}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, title: e.target.value })
                }
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Description</label>
              <textarea
                value={editingTask.description}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, description: e.target.value })
                }
                className="p-2 border rounded w-full"
              />
            </div>
            <button
              onClick={() => saveTaskChanges(editingTask)}
              className="p-2 bg-green-500 text-white rounded"
            >
              Save Changes
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TaskList;