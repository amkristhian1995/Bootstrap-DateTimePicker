$(function() {
	var hoy = new Date();
	// Fecha (12/31/1999)
	$('#txt-datetimepicker-1').datetimepicker({
		autoclose:1,
		forceParse:0,
		format:'dd/mm/yyyy',
		language:'es',
		minView:2,
		showMeridian:true,
		startView:2,
		todayBtn:0,
		todayHighlight:1,
		weekStart:1,
	});
	// Fecha hasta hoy
	$('#txt-datetimepicker-2').datetimepicker({
		autoclose:1,
		endDate:hoy,
		forceParse:0,
		format:'dd/mm/yyyy',
		language:'es',
		minView:2,
		showMeridian:true,
		startView:2,
		todayBtn:0,
		todayHighlight:1,
		weekStart:1,
	});
	// Fecha desde hoy
	$('#txt-datetimepicker-3').datetimepicker({
		autoclose:1,
		forceParse:0,
		format:'dd/mm/yyyy',
		language:'es',
		minView:2,
		showMeridian:true,
		startDate:hoy,
		startView:2,
		todayBtn:0,
		todayHighlight:1,
		weekStart:1,
	});
	// Fecha (12/31/1999 11:59:59)
	$('#txt-datetimepicker-4').datetimepicker({
		autoclose:1,
		disableFocus:true,
		forceParse:0,
		format:'dd/mm/yyyy hh:ii',
		language:'es',
		maxView:2,
		minuteStep:5,
		minView:0,
		showMeridian:true,
		startView:2,
		todayBtn:0,
		todayHighlight:1,
		weekStart:1,
	});
	// Fecha (12/31/1999 23:59:59)
	$('#txt-datetimepicker-5').datetimepicker({
		autoclose:1,
		disableFocus:true,
		forceParse:0,
		format:'dd/mm/yyyy hh:ii',
		language:'es',
		maxView:2,
		minuteStep:5,
		minView:0,
		startView:2,
		todayBtn:0,
		todayHighlight:1,
		weekStart:1,
	});
	// Horas (11:59)
	$('#txt-datetimepicker-6').datetimepicker({
		autoclose:1,
		disableFocus:true,
		forceParse:0,
		format:'HH:ii',
		language:'es',
		maxView:1,
		minuteStep:5,
		minView:0,
		showMeridian:true,
		startView:1,
		todayBtn:0,
		todayHighlight:1,
		weekStart:1,
	});
	// Horas (23:59)
	$('#txt-datetimepicker-7').datetimepicker({
		autoclose:1,
		disableFocus:true,
		forceParse:0,
		format:'hh:ii',
		language:'es',
		maxView:1,
		minuteStep:5,
		minView:0,
		startView:1,
		todayBtn:0,
		todayHighlight:1,
		weekStart:1,
	});
})