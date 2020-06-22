let today = null;
let year = null;
let month = null;
let firstDay = null;
let lastDay = null;
let tableDate = null;
let tableSelectd = null;
let tableCount = 0;

$(document).ready(function() {
	drawCalendar();
	$("#txtStartDate").datepicker({
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		dateFormat: "yy-mm-dd"
	});
	
	$("#txtEndDate").datepicker({
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		dateFormat: "yy-mm-dd"
	});
	
	$("#table1").click(function(event) {
		let emptyCheck = $(event.target).text();
		
		if(emptyCheck !== "" && emptyCheck !== null) {
			if(emptyCheck.length >= 3){
				event.preventDefault();
			}
			else {
				let week = ['일', '월', '화', '수', '목', '금', '토'];
				let date = week[new Date(year + "/" + month + "/" + emptyCheck).getDay()];

				$("#selectedyear").text(year);
				$("#selectedmonth").text(month);
				$("#selecteddate").text(emptyCheck);
				
				removeSelected();
				
				$(event.target).css("background-color", "Turquoise");
				$("#selectedday").text(date);
			}
		}
	});
	
	drawTable();
});

function removeSelected() {
	for(let i = 0; i < 42; i++) {
		tableDate.eq(i).css("background-color", "White");;
	}
}

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

function drawTable() {
	let tableHTML = "";

	tableHTML += "<tr>";
	for (let i = 0; i < 3; i++) {
		tableHTML += "<td>";
		tableHTML += '<div class="table-selected"></div>';
		tableHTML += "</td>";
	}
	tableHTML += "</tr>";
	
	$("#table-selected").append(tableHTML);
}

function removeTable() {
	$("#table2 > tbody:last").empty();
	drawTable();
	tableCount = 0;
}

function inquiry() {
	let value1 = document.getElementById("txtStartDate");
	let value2 = document.getElementById("txtEndDate");
	let year1 = String(value1.value).substring(0, 4);
	let month1 = String(value1.value).substring(5, 7);
	let day1 = String(value1.value).substring(8, 10);
	let year2 = String(value2.value).substring(0, 4);
	let month2 = String(value2.value).substring(5, 7);
	let day2 = String(value2.value).substring(8, 10);
	
	today = new Date(year1 + "/" + month1 + "/" + day1);
	year = today.getFullYear();
	month = today.getMonth() + 1;
	
	if(value1.value === "" || value1.value === null) {
		alert("시작일을 입력해주세요.")
		value1.focus();
	}
	else if(value2.value === "" || value2.value === null) {
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
	
	refreshDate();
	removeTable();
}

function refreshDate() {
	firstDay = new Date(year, month - 1, 1);
	lastDay = new Date(year, month, 0);
	tableDate = $("td div.table-date");
	
	removeSelected();
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
	
	$("#displayYear").text(year);
	
	switch (month) {
	case 1:
		$("#displayMonth").text("Jan");		
		break;
	case 2:
		$("#displayMonth").text("Feb");		
		break;
	case 3:
		$("#displayMonth").text("Mar");		
		break;
	case 4:
		$("#displayMonth").text("Apr");		
		break;
	case 5:
		$("#displayMonth").text("May");		
		break;
	case 6:
		$("#displayMonth").text("Jun");		
		break;
	case 7:
		$("#displayMonth").text("Jul");		
		break;
	case 8:
		$("#displayMonth").text("Aug");		
		break;
	case 9:
		$("#displayMonth").text("Sep");		
		break;
	case 10:
		$("#displayMonth").text("Oct");		
		break;
	case 11:
		$("#displayMonth").text("Nov");		
		break;
	case 12:
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
		
		if(year === year2) {
			if((month === month1) && (month < month2)) {
				if(checkDay < day1) {
				}
				else {
					tableDate.eq(i).text(checkDay);	
				}
			}
			else if((month === month1) && (month === month2)) {
				if(checkDay < day1) {
				}
				else if(checkDay <= day2){
					tableDate.eq(i).text(checkDay);
				}
			}
			else if(month < month2) {
				tableDate.eq(i).text(checkDay);	
			}
			else if(month === month2) {
				if(checkDay <= day2){
					tableDate.eq(i).text(checkDay);	
				}
			}
			
		}
		else if(year < year2) {
			if(month === month1) {
				if(checkDay < day1) {			
				}
				else {
					tableDate.eq(i).text(checkDay);
				}
			}
			else if(month > month1 || month < month1) {
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
		refreshDate();
	}
	else {
		if(month1 === month) {
			alert("가장 첫 달입니다.");
		}
		else {
			month--;
			if (month <= 0) {
				month = 12;
				year--;
			}
			refreshDate();
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
		refreshDate();
	}
	else if(year === year2) {
		if(month2 === month) {
			alert("가장 마지막 달입니다.");
		}
		else {
			month++;
			if (month > 12) {
				month = 1;
				year++;
			}
			refreshDate();
		}
	}
}

function sendDate() {
	let sendYear = $('#selectedyear').text();
	let sendMonth = $('#selectedmonth').text();
	let sendDate = $('#selecteddate').text();
	let sendDay = $('#selectedday').text();
	let tableSelected = $("td div.table-selected");
	
	if(sendMonth.length < 2) {
		sendMonth = "0" + sendMonth;
	}

	if(sendDate.length < 2) {
		sendDate = "0" + sendDate;
	}
	
	let processDate = sendYear + "-" + sendMonth + "-" + sendDate;
	
	drawTable();
	
	tableSelected.eq(tableCount).text(processDate);
	tableSelected.eq(tableCount + 1).text(sendDay + "요일");	

	switch (sendMonth + sendDate) {
		case '0301':
			tableSelected.eq(tableCount + 2).text("3·1절");	
			break;
		case '0717':
			tableSelected.eq(tableCount + 2).text("제헌절");	
			break;
		case '0815':
			tableSelected.eq(tableCount + 2).text("광복절");	
			break;
		case '1003':
			tableSelected.eq(tableCount + 2).text("개천절");	
			break;
		case '1009':
			tableSelected.eq(tableCount + 2).text("한글날");	
			break;
		default:
			tableSelected.eq(tableCount + 2).text("아니오");	
			break;
	}
	
	if(sendDay === "토") {
		tableSelected.eq(tableCount).css("color", "DodgerBlue");
		tableSelected.eq(tableCount + 1).css("color", "DodgerBlue");
		tableSelected.eq(tableCount + 2).css("color", "DodgerBlue");
	}
	else if(sendDay === "일") {
		tableSelected.eq(tableCount).css("color", "Crimson");
		tableSelected.eq(tableCount + 1).css("color", "Crimson");
		tableSelected.eq(tableCount + 2).css("color", "Crimson");
	}
		
	tableCount += 3;
	
	
}