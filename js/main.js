function submitComment() {
	//retrieve use input
	var username = document.getElementById('username').value
	var userComment = document.getElementById('commentBox').value

	if (username.trim() == "" && userComment.trim() == "") {
			document.getElementById('username').value = "Enter your name here"
			document.getElementById('commentBox').value = "Enter your comment here"
			return
		} else if (username.trim() == "") {
			document.getElementById('username').value = "Enter your name here"
			return
		} else if (userComment.trim() == "") {
			document.getElementById('commentBox').value = "Enter your comment here"
			return
		} else if (username.trim() == "Enter your name here" || userComment.trim() == "Enter your comment here") {
			document.getElementById('username').value = ""
			document.getElementById('commentBox').value = ""
			return
		}

	if (username.trim() != "" && userComment.trim() != "") {

		//creating elements
		var nameDisplayBox = document.createElement('h3')
		var nameDisplay = document.createTextNode(username)
		nameDisplayBox.appendChild(nameDisplay)
		var commentList = document.createElement('li')
		var userComments = document.getElementById('userComments')
		commentList.appendChild(nameDisplayBox)
		userComments.insertBefore(commentList, userComments.childNodes[0])
		

		var timeStamp = new Date()
		var timeSpan = document.createElement('span')
		timeSpan.innerHTML = timeStamp.toDateString();
		nameDisplayBox.appendChild(timeSpan)

		var userCommentBox = document.createElement('p')
		var userInput = document.createTextNode(userComment)
		userCommentBox.appendChild(userInput)
		commentList.appendChild(userCommentBox)

		document.getElementById('username').value = ""
		document.getElementById('commentBox').value = ""
	} 
}