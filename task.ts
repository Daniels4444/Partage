import {date} from "./date";
import {Priority} from "./priority";

export class Task
{
	private _content: String;
	private _date: date;
	private _priority: Priority;
	private _checked: boolean;
	
	constructor()
	{
		this._content = "";
		this._date = new date();
		this._priority = Priority.lower;
		this._checked = false;
	}
	
	get content():String
	{
		return this.content;
	}
	
	set content(content: String)
	{
		this.content = content;
	}
	
	get date():date
	{
		return this.date;
	}
	
	set date(date: date)
	{
		this.date = date;
	}
	
	get priority():Priority
	{
		return this.priority;
	}
	
	set priority(priority: Priority)
	{
		this.priority = priority;
	}
	
	get checked():boolean
	{
		return this.checked;
	}
	
	set checked(checked: boolean)
	{
		this.checked = checked;
	}
	
	add(content: String, date: date, priority: Priority)
	{
		
	}
	
	update(content: String, date: date, priority: Priority)
	{
		this._content = content;
		this._date = date;
		this._priority = priority;
	}
	
	close()
	{
		this._checked = true;
	}
	
	toString():String
	{
		var etat: String;
		if(this._checked == false)
		{
			etat = "Non effectué";
		}
		else
		{
			etat = "Terminé";
		}
		return ("CONTENU : " + this._content + "\nDATE : " + this._date + "\nPRIORITE : " + this._priority + "\nETAT : ")
	}
}