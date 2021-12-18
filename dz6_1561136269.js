// 1
var car = {"manufacturer": "ms-benz", "model": "jeep", "year_of_producted": 2017, 
"average_speed": 120,
informer : function() // 1.1
{
console.log(this.manufacturer)
console.log(this.model)
console.log(this.year_of_producted)
console.log(this.average_speed)
},
amount_of_time: function(length) //1.2
{
	var sec = length*1000 / (this.average_speed / 3.6)
	var timer = sec
	while(timer > 0)
	{
	if(sec % 14400 == 0)
		{
			sec += 3600;
		}
		timer = timer - 3600
	}
	var hours = Math.floor(sec/3600)
    sec = sec - hours*3600	
	var minutes = Math.floor(sec/60)
    sec = sec - minutes*60
 alert("hours: " + hours + " minutes: " + minutes + " seconds: " + Math.round(sec))
}
};

car.informer() // 1.1
car.amount_of_time(900) // 1.2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2
var drob1 = {"znamenatil": 4, "chislitel": 4,
slozenie: function(znamenatil1, chislitel1) 
{
	var nok = NOK(this.znamenatil, znamenatil1)
	var additionalMultiplierFirst = nok / this.znamenatil
	var additionalMultiplierSecond = nok / znamenatil1
	this.chislitel = this.chislitel * additionalMultiplierFirst + chislitel1 * additionalMultiplierSecond
	this.znamenatil = this.znamenatil * additionalMultiplierFirst
	console.log("Числитель: " + this.chislitel + " ; Знаменатель: " + this.znamenatil)
},
vichitanie: function(znamenatil1, chislitel1) 
{
		var nok = NOK(this.znamenatil, znamenatil1)
	var additionalMultiplierFirst = nok / this.znamenatil
	var additionalMultiplierSecond = nok / znamenatil1
	this.chislitel = this.chislitel * additionalMultiplierFirst - chislitel1 * additionalMultiplierSecond
	this.znamenatil = this.znamenatil * additionalMultiplierFirst
	console.log("Числитель: " + this.chislitel + " ; Знаменатель: " + this.znamenatil)
},
ymnozenie: function(znamenatil1, chislitel1) 
{
	this.chislitel = this.chislitel * chislitel1 
	this.znamenatil = this.znamenatil * znamenatil1
	console.log("Числитель: " + this.chislitel + " ; Знаменатель: " + this.znamenatil)
},
delenie: function(znamenatil1, chislitel1) 
{
	this.chislitel = this.chislitel * znamenatil1 
	this.znamenatil = this.znamenatil * chislitel
	console.log("Числитель: " + this.chislitel + " ; Знаменатель: " + this.znamenatil)
},
sokrazenie: function() 
{
	var nod = NOD(this.chislitel, this.znamenatil)
	this.chislitel = this.chislitel / nod
	this.znamenatil = this.znamenatil / nod
	console.log("Числитель: " + this.chislitel + " ;Знаменатель: " + this.znamenatil)
}
};

var drob2 = {"znamenatil": 4, "chislitel": 4}

function NOD(a, b)
{
	while(b!=0)
	{
		var temp = b 
		b  =  a % b
		a = temp
	}
	return a
}

function NOK(a, b)
{
	return a * b / NOD(a, b)
}

drob1.slozenie(drob2.znamenatil, drob2.chislitel) // 2.1
//drob1.vichitanie(drob2.znamenatil, drob2.chislitel) // 2.2
//drob1.ymnozenie(drob2.znamenatil, drob2.chislitel) // 2.3 
//drob1.delenie(drob2.znamenatil, drob2.chislitel) // 2.4
drob1.sokrazenie() // 2.5







//3
var date_obj = {"hours": 20, "minutes": 30, "sec": 45,
print_all : function()
{
console.log(this.hours + ":" +this.minutes + ":" + this.sec)	
},
change_by_sec : function(amount_of_sec)
{
	var all_time_in_sec = this.hours*3600 + this.minutes*60 + this.sec
	all_time_in_sec+= amount_of_sec
	this.hours = Math.floor(all_time_in_sec/3600)
    all_time_in_sec = all_time_in_sec - this.hours*3600	
	this.minutes = Math.floor(all_time_in_sec/60)
    all_time_in_sec = all_time_in_sec - this.minutes*60
	this.sec = all_time_in_sec
},
change_by_min : function(amount_of_min)
{
	var all_time_in_sec = this.hours*3600 + this.minutes*60 + this.sec
	all_time_in_sec =all_time_in_sec +  amount_of_min*60
	this.hours = Math.floor(all_time_in_sec/3600)
    all_time_in_sec = all_time_in_sec - this.hours*3600	
	this.minutes = Math.floor(all_time_in_sec/60)
    all_time_in_sec = all_time_in_sec - this.minutes*60
	this.sec = all_time_in_sec
},
change_by_hours : function(amount_of_hours)
{	
			this.hours += amount_of_hours
}
}
date_obj.change_by_sec(30)
//date_obj.change_by_min(39)
//date_obj.change_by_hours(2)
date_obj.print_all()











/*<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<div id = "stroka"></div>
</body>
</html>
*/
var marker = {"color": "red", "quantity_of_oil":10,
print : function()
{
var prev_res = prompt("Введите строку")
var res = ""
var i =0
while(this.quantity_of_oil > 0 && i < prev_res.length)
{
  res += prev_res[i]
  i++
  if(prev_res[i] !== " ")
  this.quantity_of_oil -= 0.5
}
stroka.innerHTML += "<p>" + res + "</p>"
if(i != prev_res.length)
  {
    alert("Кончились чернила")
  }
}
};
var marker_adv = Object.create(marker)
marker_adv.color = "green"
marker_adv.quantity_of_oil = 10
marker_adv.tank_up = function (number_of_oil) 
{
	this.quantity_of_oil += number_of_oil
}
marker.print()
marker_adv.tank_up(10)
marker_adv.print()
stroka.style.color= marker_adv.color




