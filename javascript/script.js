var encryptionKey = "turn3r2"//Secret Passphrase
function decryptText()
{
	var encrypted = document.getElementById('encryptedText').value;
	
	if (encrypted == "BHki1uH4pJ")
	{
		encrypted = "U2FsdGVkX1+Lt2gGX09Wz8uRSmVznOrd5idrZLuYr51Gg0VKXHdJSOaDy3djULo5/8Xq4ei3opZTGAJ63acUOPrK3V6H+HBtOHem3R6N+1vJClLOJQgj7RAIa4pi24o/b5RwDamT0HKc/skZFS/LjJhOUwY3cGKlK8Xs/WSpNWwNCaNEKWF5tMSyZ2Cx2FxhxpOGsCHm58oFnpGd6cIT4Q==";
	}
	else if (encrypted == "srQ57GzeyM")
	{
		encrypted = "U2FsdGVkX19SubbGmFZnVNLheoTT3HtYmUunMQRsj2Lg+0wushvSxHK7+OAjcIFrODj6toH+YaOupoq3osmKRGhWrfA/Qz7kXdEhVgsOOXDi2DVKfFI1NWlvyGyT5n9c7X3QGGqDMrZxVwbLLYfDkjjk3rIAu8xW6hjHuLIg7JWIBkD7C3OYXlVHkFWzlZm5";
	}
	else if (encrypted == "T0Q4YGV1i4")
	{
		encrypted = "U2FsdGVkX1/S/XL00gQhVhXclvQMqU6qxlLzFsyy8UAbwRL6LpMN4uttLTzusWwIqxF6HKVdaXnKjeki4wVAd3US8xBt4W8A0xAgFNUfzqqfIQyUG7IeHarFwfAgxv4ZpVYRSnX1cxGxIj2oaoFjOweO/Ukt8FXx2HuYDR3M+MkNOsyz7lqRu6pI4fo6CEQO6/JkPbjkAadk2ZgxLzbnyw==";
	}
	else if (encrypted == "878PRKpLIj")
	{
		encrypted = "U2FsdGVkX1+25BTvKk7uyKdQKo1HvaB2oKZuRSo1iiN9Pnk572qxu9RWZoBuPkfJL2rZuwruKzWYBAz87O0ZCOElM1aqwPom+nJGMyYZ9iIH9WXcsWtH9kBr8nDrn8fptCMe9kjYSmc0g6EHCMb1qxJFJa/UCx1AJOZXVM89B+yK/nLwkhUKgbyYK3iRyny7uhV7XOy/J6TNOluP405dHg==";
	}
	else if (encrypted == "waNXci4D6T")
	{
		encrypted = "U2FsdGVkX1/Y1u3x2QUZFplzg3yKQc6Bq12twtLqm9Hgjnwc4WHzbaMYYAQUG9T+AlIj4uxEPSXAorBCBMfi7wYqyw7M5pnaYGKxTnudl6tq2C4LiEdZi33MlL8CKnKdK0edSX4sMXGyPLbUlnzZKt4FlURRDok0agqNEFT3JSmQxPT/qQhw/CcEl07axuxa8v00KDPYD5ipQYZlryrvfNQAgxiKXsKL+eyiBucuJRT2vbFRXWaH4UU5DAS8jJQ1cz8bAKn6c1g0v3NoGfKMRKF4vCDKv+vAXxwB6bv/bf0=";
	}
	
	var decrypted = CryptoJS.AES.decrypt(encrypted, encryptionKey);
		
	document.getElementById("decryptedText").value = decrypted.toString(CryptoJS.enc.Utf8);
		
	if (encrypted == "U2FsdGVkX1+Lt2gGX09Wz8uRSmVznOrd5idrZLuYr51Gg0VKXHdJSOaDy3djULo5/8Xq4ei3opZTGAJ63acUOPrK3V6H+HBtOHem3R6N+1vJClLOJQgj7RAIa4pi24o/b5RwDamT0HKc/skZFS/LjJhOUwY3cGKlK8Xs/WSpNWwNCaNEKWF5tMSyZ2Cx2FxhxpOGsCHm58oFnpGd6cIT4Q==")
	{
		changePicture1();
	}
	else if (encrypted == "U2FsdGVkX19SubbGmFZnVNLheoTT3HtYmUunMQRsj2Lg+0wushvSxHK7+OAjcIFrODj6toH+YaOupoq3osmKRGhWrfA/Qz7kXdEhVgsOOXDi2DVKfFI1NWlvyGyT5n9c7X3QGGqDMrZxVwbLLYfDkjjk3rIAu8xW6hjHuLIg7JWIBkD7C3OYXlVHkFWzlZm5")
	{
		changePicture2();
	}
	else if (encrypted == "U2FsdGVkX1/S/XL00gQhVhXclvQMqU6qxlLzFsyy8UAbwRL6LpMN4uttLTzusWwIqxF6HKVdaXnKjeki4wVAd3US8xBt4W8A0xAgFNUfzqqfIQyUG7IeHarFwfAgxv4ZpVYRSnX1cxGxIj2oaoFjOweO/Ukt8FXx2HuYDR3M+MkNOsyz7lqRu6pI4fo6CEQO6/JkPbjkAadk2ZgxLzbnyw==")
	{
		changePicture3();
	}
	else if (encrypted == "U2FsdGVkX1+25BTvKk7uyKdQKo1HvaB2oKZuRSo1iiN9Pnk572qxu9RWZoBuPkfJL2rZuwruKzWYBAz87O0ZCOElM1aqwPom+nJGMyYZ9iIH9WXcsWtH9kBr8nDrn8fptCMe9kjYSmc0g6EHCMb1qxJFJa/UCx1AJOZXVM89B+yK/nLwkhUKgbyYK3iRyny7uhV7XOy/J6TNOluP405dHg==")
	{
		changePicture4();
	}
	else if (encrypted == "U2FsdGVkX1/Y1u3x2QUZFplzg3yKQc6Bq12twtLqm9Hgjnwc4WHzbaMYYAQUG9T+AlIj4uxEPSXAorBCBMfi7wYqyw7M5pnaYGKxTnudl6tq2C4LiEdZi33MlL8CKnKdK0edSX4sMXGyPLbUlnzZKt4FlURRDok0agqNEFT3JSmQxPT/qQhw/CcEl07axuxa8v00KDPYD5ipQYZlryrvfNQAgxiKXsKL+eyiBucuJRT2vbFRXWaH4UU5DAS8jJQ1cz8bAKn6c1g0v3NoGfKMRKF4vCDKv+vAXxwB6bv/bf0=")
	{
		alert("Well, by now you've probably figured it out. Since I won't be going to MIT, I figured I could bring a piece of it here. Here's to many great hacks at your future school, and a great time here.");
		changePicture5();
	}
}
function encryptText()
{
	var message = document.getElementById('decryptedText').value;
	var encrypted = CryptoJS.AES.encrypt(message, encryptionKey);
		
	document.getElementById("encryptedText").value = encrypted;
}


function clearFields()
{
	document.getElementById("decryptedText").value = "";
	document.getElementById("encryptedText").value = "";
	document.getElementById("image").src = "images/Fire Truck On MIT.png";
}


function changePicture1()
{
	document.getElementById("image").className = "imageTransparent";
	setTimeout(finishChange1, "1000");
}
function finishChange1()
{
	document.getElementById("image").src = "images/Programming.png";
	document.getElementById("image").className = "imageOpaque";
}


function changePicture2()
{
	document.getElementById("image").className = "imageTransparent";
	setTimeout(finishChange2, "1000");
}
function finishChange2()
{
	document.getElementById("image").src = "images/Robotics.png";
	document.getElementById("image").className = "imageOpaque";
}


function changePicture3()
{
	document.getElementById("image").className = "imageTransparent";
	setTimeout(finishChange3, "1000");
}
function finishChange3()
{
	document.getElementById("image").src = "images/PracticeRoom.png";
	document.getElementById("image").className = "imageOpaque";
}


function changePicture4()
{
	document.getElementById("image").className = "imageTransparent";
	setTimeout(finishChange4, "1000");
}
function finishChange4()
{
	document.getElementById("image").src = "images/CPHS.png";
	document.getElementById("image").className = "imageOpaque";
}


function changePicture5()
{
	document.getElementById("image").className = "imageTransparent";
	setTimeout(finishChange5, "1000");
}
function finishChange5()
{
	document.getElementById("image").src = "images/Question.png";
	setTimeout(wait, "15000")
	document.getElementById("image").className = "imageOpaque";
}


function resizeScreen()
{
	document.getElementById("body").width = screen.availWidth;
	document.getElementById("body").height = screen.availHeight;
}


function wait()
{
}
