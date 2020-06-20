$(function() {
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
});

function inquiry() {
	let value1 = document.getElementById("txtStartDate");
	let value2 = document.getElementById("txtEndDate");
	
	let year1 = String(value1.value).substring(0, 4);
	let month1 = String(value1.value).substring(4, 6);
	let day1 = String(value1.value).substring(6, 8);
	
	let year2 = String(value2.value).substring(0, 4);
	let month2 = String(value2.value).substring(4, 6);
	let day2 = String(value2.value).substring(6, 8);
	let isLeapYear = true;
	
	if(year1 % 4 == 0 && year1 % 100 != 0 || year1 % 400 == 0 ||
	   year2 % 4 == 0 && year2 % 100 != 0 || year2 % 400 == 0) {
		isLeapYear = true;
	}
	else {
		isLeapYear = false;
	}

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
	else {
		alert("유효성 통과!");
	}
}