$(document).ready(function()
{

	var calculation = "";
	var result = "";
	$(".number, .operator").click(function()
	{
		calculation += $(this).html();
		$("#screen").html(calculation);	
	});

	$(".equals").click(function()
	{
		result = eval(calculation);
    	$("#screen").html(result);
    	number = previousNumber = "";
	});

	$(".ans").click(function()
	{
		calculation = result;
	});

	$(".clear, .clearall").click(function()
	{
		calculation = "";
		$("#screen").html("");
	});

	

});