const messages = [
  {
    author: "it academy",
    message: " hello. I'm It Academy"
  },
  {
    author: "Nuraym",
    message: "Hello! I'm Nuraym"
  }
]

const sendBtn = document.querySelector("#sendBtn");
const posts = document.querySelector(".posts");

const authorInput = document.querySelector("#create-msg-author");
const messageInput = document.querySelector("#create-msg-text")

const createElement = (tag, className, innerTxt) => {
  if(!tag){
    alert("Внутренняя ошибка сервиса!");
    return;
  }

  const element = document.createElement(tag);

  if(className) {
    element.className = className;
  }

  if(innerTxt) {
    element.innerText = innerTxt;
  } 

  return element;
}

const renderMessages = (messages) => {
  for(let i = 0; i < messages.length; i++){
    const element = messages[i];
    console.log(element);

    const message = createElement("li", "msg");
    const author = createElement("div","author", element.author);
    const text = createElement("div", "text", element.message);

    message.append(author, text);
    posts.prepend(message);
  }
}

const clearInput = () => {
  authorInput.value = " ";
  messageInput.value = " ";
}

const clearPost = (posts) => {
  posts.innerHTML = '';
}



renderMessages(messages);

sendBtn.addEventListener("click", function(){
  if(messageInput.value.trim().length < 1) { 
    messageInput.style.border = "1px solid red";
    alert("You have not entered a message!");
  }
  else if(authorInput.value.trim().length < 1) {
    messageInput.style.border = "1px solid #999";
    const message = {
      author: "Unknowm author",
      message: messageInput.value
    }
    messages.push(message);
    clearInput();
    console.log(posts);
    clearPost(posts);
    console.log(posts);
    renderMessages(messages);
  }
  else{
    messageInput.style.border = "1px solid #999";
    const message = {
      author: authorInput.value,
      message: messageInput.value
    }
    messages.push(message);
    clearInput();
    console.log(posts);
    clearPost(posts);
    console.log(posts);
    renderMessages(messages);
  }
});