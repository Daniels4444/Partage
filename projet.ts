import {Task} from "./task";

export class Projet
{
	private _tasks: Task;
	
	addTask(tasks: Task)
	{
		this._tasks = tasks;
	}
	
	getTask()
	{
		return this._tasks;
	}
	
	deleteTask()
	{
		this._tasks = "";
	}
}