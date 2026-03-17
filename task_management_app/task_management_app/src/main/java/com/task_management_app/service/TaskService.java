package com.task_management_app.service;

import com.task_management_app.exception.TaskNotFoundException;
import com.task_management_app.model.Task;
import com.task_management_app.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    public Task createTask(Task task){
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id){
        return taskRepository.findById(id)
                .orElseThrow(()-> new TaskNotFoundException("Task not found with id "+ id));
    }

    public Task updateTask(Long id, Task task){
        Task exstingTask = getTaskById(id);

        exstingTask.setTitle(task.getTitle());
        exstingTask.setDescription(task.getDescription());
        exstingTask.setPriority(task.getPriority());
        exstingTask.setStatus(task.getStatus());
        exstingTask.setDueDate(task.getDueDate());

        return taskRepository.save(exstingTask);
    }

    public void deleteTask(Long id){
        if(!taskRepository.existsById(id)){
            throw new TaskNotFoundException("Task not found with id "+ id);
        }
        taskRepository.deleteById(id);
    }
}
