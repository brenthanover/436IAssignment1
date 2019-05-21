function addListItem() {
	var ul = document.getElementById("messageList");
	var messageText = document.getElementById("reviewMessage").value;
	var nameText = document.getElementById("reviewName").value;
	if (messageText.length == 0 || nameText.length == 0) return;
	var mli = document.createElement("li");
	var nli = document.createElement("li");
	mli.innerHTML = messageText;
	nli.innerHTML = nameText;
	nli.setAttribute("class", "quoter");
	ul.appendChild(mli);
	ul.appendChild(nli);
}

function addNote1() {
	var ul = document.getElementById("notepad1");
	var noteText = document.getElementById("note1").value;
	var li = document.createElement("li");
	li.innerHTML = noteText;
	ul.appendChild(li);
}

function addNote2() {
	var ul = document.getElementById("notepad2");
	var noteText = document.getElementById("note2").value;
	var li = document.createElement("li");
	li.innerHTML = noteText;
	ul.appendChild(li);
}

function JSONList() {
	var stringData = '["Brent is a swell guy. I would give him an A.","Santa Ono", "See, this guy, he\'s, I don\'t much care for Brad, when he sits, you see you have to understand, he is not a good guy, so he sits up there up there, you know when he does, on the computer, he isn\'t that smart or bigly smart, not smart like me.","Donald J Trump", "Theres no way that you are going to get a quote from me to put on your website.","Steven Spielberg", "He\'s such a handsome young man.", "Brent\'s mom"]';
	var stringArray = JSON.parse(stringData);
	for (i = 0; i < stringArray.length; i+=2) {
		var testimonial = document.createElement("li");
		var quoter = document.createElement("li");
		quoter.setAttribute("class", "quoter");
		testimonial.innerHTML = stringArray[i];
		quoter.innerHTML = stringArray[i + 1];
		document.getElementById("messageList").appendChild(testimonial);
		document.getElementById("messageList").appendChild(quoter);
	}
}
window.onload = JSONList;

function removeListItem() {
	var root = document.getElementById("messageList");
	while (root.firstChild) {
		root.removeChild(root.firstChild);
	}
}
