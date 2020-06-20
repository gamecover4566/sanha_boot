<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link rel="stylesheet" type="text/css" href="/static/css/calendar.css"/>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="/static/js/calendar.js"></script>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>달력</title>
</head>
<body>
<div class="left">
	<div class="datearea" align="center">	
		<span class="dot">*</span> 기간 
		<input type=text maxlength="8" class="txtBox" id="txtStartDate" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"> ~ 
		<input type=text maxlength="8" class="txtBox" id="txtEndDate" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');">
		<input type=button class="btn" id="btnInquiry" value="조회" onclick="inquiry()">
	</div>
	
	<div class="displaydate" align="center">
		<span id="displayYear"/>년 <span id="displayMonth"/>
	</div>
	
	<div class="maincalendar">
		<table class="table" id="table1" align="center">
			<thead>
				<tr>
					<th class="table-day">Sun</th>
					<th class="table-day">Mon</th>
					<th class="table-day">Tue</th>
					<th class="table-day">Wed</th>
					<th class="table-day">Thu</th>
					<th class="table-day">Fri</th>
					<th class="table-day">Sat</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
				</tr>
				<tr>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
				</tr>
				<tr>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
				</tr>
				<tr>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
				</tr>
				<tr>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
					<td class="table-date"></td>
				</tr>
			</tbody>
		</table>
	</div>
	
	<div align="center" style="margin-top: 20px">
		<img src="/static/image/left_arrow.jpg" id="left_arrow" width="100" height="50" onclick="prev()">
		<img src="/static/image/right_arrow.jpg" id="right_arrow" width="100" height="50" onclick="next()">	
	</div>
	
	<div class="selectdate" align="center" style="margin-top: 30px">
		<span>선택된 일자 </span>
		<span id="selectedyear"/>&nbsp;년&nbsp;
		<span id="selectedmonth"/>&nbsp;월&nbsp;
		<span id="selecteddate"/>&nbsp;일&nbsp;
		<span id="selectedday"/>&nbsp;(요일)<br>
		<input type="button" class="btn" value="적용" onclick="send()">
	</div>
</div>
<div class="right">
	<div class="subcalendar">
		<table class="table2" id="table2" align="center">
			<thead>
				<tr>
					<th class="table2-title">일자</th>
					<th class="table2-title">요일</th>
					<th class="table2-title">국경일</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table2-content"></td>				
					<td class="table2-content"></td>				
					<td class="table2-content"></td>				
				</tr>
			</tbody>
		</table>
	</div>
</div>
</body>
</html>