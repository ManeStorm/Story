function submitAction(form){
	var story = document.getElementById("story");
	var tag2 = document.getElementById("Σημείο2");
	var story2 = document.getElementById("story2");
	var tag3 = document.getElementById("Σημείο");


	story.innerHTML = form.nameInput.value;
	tag2.innerHTML = form.tag2.value;
	story2.innerHTML = form.nameInput2.value;
	tag3.innerHTML = form.tag3.value;
}

