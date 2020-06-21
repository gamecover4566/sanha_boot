let today = null;
let year = null;
let month = null;
let firstDay = null;
let lastDay = null;
let tableDate = null;
let tableSelectd = null;

$(document).ready(function() {
	drawCalendar();
	$("#txtStartDate").datepicker({
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		dateFormat: "yymmdd"
	});
	
	$("#txtEndDate").datepicker({
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		dateFormat: "yymmdd"
	});
	
	$("#table1").click(function(event) {
		let emptyCheck = $(event.target).text();
		
		if(emptyCheck != "" || emptyCheck != null) {
			console.log(month + "//" + emptyCheck);
			$("#selectedyear").text(year);
			$("#selectedmonth").text(month);
			$("#selecteddate").text(emptyCheck);
		}
		else {
			event.stopPropagation();
			event.preventDefault();
		}
	});
});

function drawCalendar() {
	let calendarHTML = "";
	
	for(let i = 0; i < 6; i ++) {
		calendarHTML += "<tr>";
		for (let j = 0; j < 7; j++) {
			calendarHTML += "<td>";
			calendarHTML += '<div class="table-date"></div>';
			calendarHTML += "</td>";
		}
		calendarHTML += "</tr>";
	}
	$("#table-date").html(calendarHTML);
}

function inquiry() {
	let value1 = document.getElementById("txtStartDate");
	let value2 = document.getElementById("txtEndDate");
	let year1 = String(value1.value).substring(0, 4);
	let month1 = String(value1.value).substring(4, 6);
	let day1 = String(value1.value).substring(6, 8);
	let year2 = String(value2.value).substring(0, 4);
	let month2 = String(value2.value).substring(4, 6);
	let day2 = String(value2.value).substring(6, 8);
	
	today = new Date(year1 + "/" + month1 + "/" + day1);
	year = today.getFullYear();
	month = today.getMonth() + 1;
	
	if(value1.value == "" || value1.value == null) {
		alert("시작일을 입력해주세요.")
		value1.focus();
	}
	else if(value2.value == "" || value2.value == null) {
		alert("종료일을 입력해주세요.")
		value2.focus();
	}
	else if(value1.value.length < 8 || value2.value.length < 8) {
		alert("YYYYMMDD 형식으로 입력해주세요.");
	}
	else if((month1 < 1 || month1 > 12) ||
			(month2 < 1 || month2 > 12)) {
		alert("월의 범위는 1 ~ 12입니다.")
	}
	else if((day1 < 1 || day1 > 31) ||
			(day2 < 1 || day2 > 31)) {
		alert("일의 범위는 1 ~ 31입니다.")
	}
	else if((value2.value - value1.value) < 0) {
		alert("종료일은 시작일보다 작을 수 없습니다.");
		value2.focus();
	}
	
	initDate();
	
}

function initDate() {
	firstDay = new Date(year, month - 1, 1);
	lastDay = new Date(year, month, 0);
	tableDate = $("td div.table-date");
	
	drawDate();
}

function drawDate() {	
	let value1 = document.getElementById("txtStartDate");
	let value2 = document.getElementById("txtEndDate");
	let month1 = String(value1.value).substring(4, 6);
	let day1 = String(value1.value).substring(6, 8);
	let year2 = String(value2.value).substring(0, 4);
	let month2 = String(value2.value).substring(4, 6);
	let day2 = String(value2.value).substring(6, 8);
	let count = 0;
	
	
	$("#displayYear").val(year);
	$("#displayYear").text(year);
	
	switch (month) {
	case 1:
		$("#displayMonth").val('01');		
		$("#displayMonth").text("Jan");		
		break;
	case 2:
		$("#displayMonth").val('02');		
		$("#displayMonth").text("Feb");		
		break;
	case 3:
		$("#displayMonth").val('03');		
		$("#displayMonth").text("Mar");		
		break;
	case 4:
		$("#displayMonth").val('04');		
		$("#displayMonth").text("Apr");		
		break;
	case 5:
		$("#displayMonth").val('08');		
		$("#displayMonth").text("May");		
		break;
	case 6:
		$("#displayMonth").val('06');		
		$("#displayMonth").text("Jun");		
		break;
	case 7:
		$("#displayMonth").val('07');		
		$("#displayMonth").text("Jul");		
		break;
	case 8:
		$("#displayMonth").val('08');		
		$("#displayMonth").text("Aug");		
		break;
	case 9:
		$("#displayMonth").val('09');		
		$("#displayMonth").text("Sep");		
		break;
	case 10:
		$("#displayMonth").val('10');		
		$("#displayMonth").text("Oct");		
		break;
	case 11:
		$("#displayMonth").val('11');		
		$("#displayMonth").text("Nov");		
		break;
	case 12:
		$("#displayMonth").val('12');		
		$("#displayMonth").text("Dec");		
		break;
	default:
		break;
	}
	
	for(let i = 0; i < 42; i++) {
		tableDate.eq(i).text("");
	}
	
	for (let i = firstDay.getDay(); i < firstDay.getDay() + lastDay.getDate(); i++) {
		let checkDay = ++count;
		
		if(year == year2) {
			if(month < month2) {
				tableDate.eq(i).text(checkDay);	
			}
			else if(month == month2) {
				if(checkDay <= day2){
					tableDate.eq(i).text(checkDay);	
				}
			}
			
		}
		else if(year < year2) {
			if(month == month1) {
				if(checkDay < day1) {			
				}
				else {
					tableDate.eq(i).text(checkDay);
				}
			}
			else if(month > month1) {
				tableDate.eq(i).text(checkDay);
			}			
		}
	}
	
}

function prev() {
	let value1 = document.getElementById("txtStartDate");
	let year1 = String(value1.value).substring(0, 4);
	let month1 = String(value1.value).substring(4, 6);
	
	if(year > year1) {
		month--;
		if (month <= 0) {
			month = 12;
			year--;
		}
		initDate();
	}
	else {
		if(month1 == month) {
			alert("가장 첫 달입니다.");
		}
		else {
			month--;
			if (month <= 0) {
				month = 12;
				year--;
			}
			initDate();
		}
	}
	
}

function next() {
	let value2 = document.getElementById("txtEndDate");
	let year2 = String(value2.value).substring(0, 4);
	let month2 = String(value2.value).substring(4, 6);

	if(year < year2) {
		month++;
		if (month > 12) {
			month = 1;
			year++;
		}
		initDate();
	}
	else if(year == year2) {
		if(month2 == month) {
			alert("가장 마지막 달입니다.");
		}
		else {
			month++;
			if (month > 12) {
				month = 1;
				year++;
			}
			initDate();
		}
	}
}

