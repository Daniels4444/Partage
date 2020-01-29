export class date
{
	private _year: number;
	private _month: number;
	private _day: number;
	
	constructor()
	{
		this._year = 1900;
		this._month = 1;
		this._day = 1;
	}
	
	get year():number
	{
		return this.year;
	}
	
	set year(year: number)
	{
		this.year = year;
	}
	
	get month():number
	{
		return this.month;
	}
	
	set month(month: number)
	{
		this.month = month;
	}
	
	get day():number
	{
		return this.day;
	}
	
	set day(day: number)
	{
		this.day = day;
	}
	
	ToString():String
	{
		return (this._year + "-" + this._month + "-" + this._day);
	}
	
	create(year:number, month:number, day:number):String
	{
		return (year + "-" + month + "-" + day);
	}
	
	setDate(newYear:number, newMonth:number, newDay:number):String
	{
		this._year = newYear;
		this._month = newMonth;
		this._day = newDay;
		return (this._year + "-" + this._month + "-" + this._day);
	}
	
	yesterday():String
	{
		var year: number;
		var month: number;
		var day: number;
		
		if(this._day == 1)
		{
			if(this._month == 1)
			{
				day = 31,
				year = this._year - 1;
				month = 12;
			}
			else if(this._month == 2 || this._month == 4 || this._month == 6 || this._month == 8 || this._month == 9 || this._month == 11)
			{
				day = 31;
				year = this._year;
				month = this._month - 1;
			}
			else if(this._month == 3)
			{
				year = this._year;
				month = this._month - 1;
				day = 28;
			}
			else
			{
				year = this._year;
				month = this._month - 1;
				day = 30;
			}
		}
		else
		{
			year = this._year;
			month = this._month;
			day = this._day - 1;
			
		}
		return (year + "-" + month + "-" + day);
	}
	
	tomorrow():String
	{
		var year: number;
		var month: number;
		var day: number;
		
		if(this._month == 12)
		{
			if(this._day == 31)
			{
				year = this._year + 1;
				month = 1;
				day = 1;
			}
			else
			{
				year = this._year;
				month = this._month;
				day = this._day + 1;
			}
		}
		if(this._month == 1 || this._month == 3 || this._month == 5 || this._month == 7 || this._month == 8 || this._month == 10)
		{
			if(this._day == 31)
			{
				year = this._year;
				month = this._month + 1;
				day = 1;
			}
			else
			{
				year = this._year;
				month = this._month;
				day = this._day + 1;
			}
		}
		else if(this._month == 2)
		{
			if(this._day == 28)
			{
				year = this._year;
				month = this._month + 1;
				day = 1;
			}
			else
			{
				year = this._year;
				month = this._month;
				day = this._day + 1;
			}
		}
		else
		{
			if(this._day == 30)
			{
				year = this._year;
				month = this._month + 1;
				day = 1;
			}
			else
			{
				year = this._year;
				month = this._month;
				day = this._day + 1;
			}
		}
		return (year + "-" + month + "-" + day);
	}
	
	addDay(jour:number):String
	{
		if(jour == 0)
		{
			jour = 1;
		}
		this._day = this._day + jour;
		return (this._year + "-" + this._month + "-" + this._day);
	}
	
	subDay(jour:number):String
	{
		if(jour == 0)
		{
			jour = 1;
		}
		this._day = this._day - jour;
		return (this._year + "-" + this._month + "-" + this._day);
	}
	
	addMonth(mois:number):String
	{
		if(mois == 0)
		{
			mois = 1;
		}
		this._month = this._month + mois;
		return (this._year + "-" + this._month + "-" + this._day);
	}
	
	subMonth(mois:number):String
	{
		if(mois == 0)
		{
			mois = 1;
		}
		this._month = this._month - mois;
		return (this._year + "-" + this._month + "-" + this._day);
	}
	
	addYear(annee:number):String
	{
		if(annee == 0)
		{
			annee = 1;
		}
		this._year = this._year + annee;
		return (this._year + "-" + this._month + "-" + this._day);
	}
	
	subYear(annee:number):String
	{
		if(annee == 0)
		{
			annee = 1;
		}
		this._year = this._year - annee;
		return (this._year + "-" + this._month + "-" + this._day);
	}
}