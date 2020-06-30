let dating = {
	today : null,
	year : null,
	month : null
}
let monthDating = {
	firstDay : null,
	lastDay : null
}
let tableData = {
	tableDate : null,
	tableCount : 0		
}

$(document).ready(() => {
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
	
	$("#table1").click(event => {
		let emptyCheck = $(event.target).text();
		
		if(emptyCheck !== "" && emptyCheck !== null) {
			if(emptyCheck.length >= 3){
				event.preventDefault();
			}
			else {
				let week = ['일', '월', '화', '수', '목', '금', '토'];
				let date = week[new Date(dating.year + "/" + dating.month + "/" + emptyCheck).getDay()];

				$("#selectedyear").text(dating.year);
				$("#selectedmonth").text(dating.month);
				$("#selecteddate").text(emptyCheck);
				
				removeSelected();
				
				$(event.target).css("background-color", "Turquoise");
				$("#selectedday").text(date);
			}
		}
	});
	
	$("#txtStartDate").keydown((key) => {
		if(key.keyCode === 13) {
			validateDate(document.getElementById("txtStartDate").value, 1);
		}
	});
	
	$("#txtEndDate").keydown((key) => {
		if(key.keyCode === 13) {
			validateDate(document.getElementById("txtEndDate").value, 2);
		}
	});
});

const removeSelected = () => {
	for(let i = 0; i < 42; i++) {
		tableData.tableDate.eq(i).css("background-color", "White");;
	}
}

const drawCalendar = () => {
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

const drawTable = () => {
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

const removeTable = () => {
	$("#table2 > tbody:last").empty();
	tableData.tableCount = 0;
}

const validateDate = (date, number) => {
	let year = String(date).substring(0, 4);
	let month = String(date).substring(5, 7);
	let day = String(date).substring(8, 10);
	let processValue = year + month + day;
	
	if(processValue.length < 8) {
		alert("YYYYMMDD 형식으로 입력해주세요.");		
		if(number === 1) {
			$("#txtStartDate").val("");
		}
		else {
			$("#txtEndDate").val("");			
		}
		
		return false;
	}
	else if(month < 1 || month > 12) {
		alert("월의 범위는 1 ~ 12입니다.")
		if(number === 1) {
			$("#txtStartDate").val("");
		}
		else {
			$("#txtEndDate").val("");			
		}
		
		return false;
	}
	else if(day < 1 || day > 31) {
		alert("일의 범위는 1 ~ 31입니다.")
		if(number === 1) {
			$("#txtStartDate").val("");
		}
		else {
			$("#txtEndDate").val("");			
		}
		
		return false;
	}
}

const inquiry = () => {
	let value1 = document.getElementById("txtStartDate");
	let value2 = document.getElementById("txtEndDate");
	let year1 = String(value1.value).substring(0, 4);
	let month1 = String(value1.value).substring(5, 7);
	let day1 = String(value1.value).substring(8, 10);
	let year2 = String(value2.value).substring(0, 4);
	let month2 = String(value2.value).substring(5, 7);
	let day2 = String(value2.value).substring(8, 10);
	let processValue1 = year1 + month1 + day1;
	let processValue2 = year2 + month2 + day2;
		
	dating.today = new Date(value1.value);
	dating.year = dating.today.getFullYear();
	dating.month = dating.today.getMonth() + 1;
	
	if(processValue1 === 0) {
		alert("시작일을 입력해주세요.")
		value1.focus();
		
		return false;
	}
	else if(processValue2 === 0) {
		alert("종료일을 입력해주세요.")
		value2.focus();
		
		return false;
	}
	
	
	if((validateDate(value1.value, 1) === false) || (validateDate(value2.value, 2) === false)) {
		return false;
	}
	
	if(processValue2 < processValue1) {
		alert("종료일은 시작일보다 작을 수 없습니다.");
		$("#txtEndDate").val("");
		value2.focus();
		
		return false;
	}
	
	refreshDate();
	removeTable();
}

const refreshDate = () => {
	monthDating.firstDay = new Date(dating.year, dating.month - 1, 1);
	monthDating.lastDay = new Date(dating.year, dating.month, 0);
	tableData.tableDate = $("td div.table-date");
	
	removeSelected();
	drawDate();
}

const abbreviation = (value) => {
	let result = "";
	let lookup = {
			1 : "Jan",
			2 : "Feb",
			3 : "Mar",
			4 : "Apr",
			5 : "May",
			6 : "Jun",
			7 : "Jul",
			8 : "Aug",
			9 : "Sep",
			10 : "Oct",
			11 : "Nov",
			12 : "Dec"
	}
	
	result = lookup[value];
	$("#displayMonth").text(result);
}

const drawDate = () => {	
	let value1 = document.getElementById("txtStartDate");
	let value2 = document.getElementById("txtEndDate");
	let year1 = Number(String(value1.value).substring(0, 4));
	let month1 = Number(String(value1.value).substring(5, 7));
	let day1 = Number(String(value1.value).substring(8, 10));
	let year2 = Number(String(value2.value).substring(0, 4));
	let month2 = Number(String(value2.value).substring(5, 7));
	let day2 = Number(String(value2.value).substring(8, 10));
	let count = 0;
	
	$("#displayYear").text(dating.year);	
	abbreviation(dating.month);
	
	for(let i = 0; i < 42; i++) {
		tableData.tableDate.eq(i).text("");
	}
	
	for (let i = monthDating.firstDay.getDay(); i < monthDating.firstDay.getDay() + monthDating.lastDay.getDate(); i++) {
		let checkDay = ++count;
		
		if(dating.year === year1 && dating.year === year2) {
			if(dating.month === month1 && dating.month === month2) {
				if(checkDay < day1) {			
				}
				else if(checkDay <= day2) {
					tableData.tableDate.eq(i).text(checkDay);
				}
			}
			else if(dating.month === month1 && dating.month < month2) {
				if(checkDay < day1) {			
				}
				else {
					tableData.tableDate.eq(i).text(checkDay);
				}
				
			}
			else if(dating.month > month1 && dating.month < month2) {
				tableData.tableDate.eq(i).text(checkDay);
			}
			else if(dating.month === month2) {
				if(checkDay <= day2) {
					tableData.tableDate.eq(i).text(checkDay);
				}
			}
		}
		else if(dating.year === year1 && dating.year < year2) {
			if(dating.month === month1) {
				if(checkDay < day1) {
				}
				else {
					tableData.tableDate.eq(i).text(checkDay);
				}
			}
			else if(dating.month > month1) {
				tableData.tableDate.eq(i).text(checkDay);
			}
		}
		else if(dating.year > year1 && dating.year < year2) {
			tableData.tableDate.eq(i).text(checkDay);
		}
		else if(dating.year === year2) {
			if(dating.month < month2) {
				tableData.tableDate.eq(i).text(checkDay);	
			}
			else if(dating.month === month2) {
				if(checkDay <= day2) {
					tableData.tableDate.eq(i).text(checkDay);	
				}
			}			
		}
	}	
}

const prev = () => {
	let value1 = document.getElementById("txtStartDate");
	let year1 = Number(String(value1.value).substring(0, 4));
	let month1 = Number(String(value1.value).substring(5, 7));
	
	if(dating.year > year1) {
		dating.month--;
		if (dating.month <= 0) {
			dating.month = 12;
			dating.year--;
		}
		
		refreshDate();
	}
	else {
		if($("#displayYear").text() === "") {
			return false;
		}
		
		if(month1 === dating.month) {
			alert("가장 첫 달입니다.");
		}
		else {
			dating.month--;
			if (dating.month <= 0) {
				dating.month = 12;
				dating.year--;
			}
			refreshDate();
		}
	}	
}

const next = () => {
	let value2 = document.getElementById("txtEndDate");
	let year2 = Number(String(value2.value).substring(0, 4));
	let month2 = Number(String(value2.value).substring(5, 7));

	if(dating.year < year2) {
		if($("#displayYear").text() === "") {
			return false;
		}
		
		dating.month++;
		if (dating.month > 12) {
			dating.month = 1;
			dating.year++;
		}
		
		refreshDate();
	}
	else if(dating.year === year2) {
		if(month2 === dating.month) {
			alert("가장 마지막 달입니다.");
		}
		else {
			dating.month++;
			if (dating.month > 12) {
				dating.month = 1;
				dating.year++;
			}
			
			refreshDate();
		}
	}
}

const holiday = (value) => {
	let result = "";	
	let lookup = {
		"0301" : "3·1절",
		"0717" : "제헌절",
		"0815" : "광복절",
		"1003" : "개천절",
		"1009" : "한글날"
	}
	
	result = lookup[value];	
	$("td div.table-selected").eq(tableData.tableCount + 2).text(result);
}

const sendDate = () => {
	if($("#selectedyear").text() === "") {
		alert("선택된 일자가 없습니다.");
		
		return false;
	}
	
	drawTable();
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
	
	tableSelected.eq(tableData.tableCount).text(processDate);
	tableSelected.eq(tableData.tableCount + 1).text(sendDay + "요일");	
	tableSelected.eq(tableData.tableCount + 2).text("아니오");
	
	holiday(sendMonth + sendDate);
	
	if(sendDay === "토") {
		tableSelected.eq(tableData.tableCount).css("color", "DodgerBlue");
		tableSelected.eq(tableData.tableCount + 1).css("color", "DodgerBlue");
		tableSelected.eq(tableData.tableCount + 2).css("color", "DodgerBlue");
	}
	else if(sendDay === "일") {
		tableSelected.eq(tableData.tableCount).css("color", "Crimson");
		tableSelected.eq(tableData.tableCount + 1).css("color", "Crimson");
		tableSelected.eq(tableData.tableCount + 2).css("color", "Crimson");
	}
		
	tableData.tableCount += 3;
}