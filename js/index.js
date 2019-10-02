$("form > button").click(function(event) {
	event.preventDefault();
	let newVal = $("input").val();
	$("input").val("")
	let newTitle = `<div class="itemTitle">` + newVal + `</div>`;
	let newSpan = `<span><button id="checkButton">check</button><button id="deleteButton">Delete</button></span>`;
	let newDiv = `<div class="itemBox">` + newTitle + newSpan + `</div>`;
	$("#checkList").append(`<li class="listItem">` + newDiv + `</li>`)
});

$("#checkList").on("click", "button#checkButton", function(event) {
	$(this).parent().parent().toggleClass("checkedTitle");
});

$("#checkList").on("click", "button#deleteButton", function(event) {
	$(this).parent().parent().remove();
});