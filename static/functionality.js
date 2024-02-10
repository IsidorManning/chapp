class Chat {
  constructor(username) {
    this.username = username;
    this.recievers = [];
    this.currentMessanger = NaN;

    this.LastMessanger = "";
    this.lastUserMessageHeight = 0;
    this.lastRecieverMessageHeight = 0;
    this.messageStreak = 1;

    this.mt = "0px";

    this.userContainer = document.querySelector("#id_chat_item_container_user");
    this.recieversContainer = document.querySelector("#id_chat_item_container_reciever");
  };

  handleMessage(e) {
    const data = this.getData(e);
    const messageDiv = document.createElement("div");
    this.currentMessanger = data.username;

    messageDiv.style.cssText = "opacity: 0; margin-left: 20px; margin-top: 60px;";
    messageDiv.innerHTML = data.message;
    
    if (this.currentMessanger == this.username) this.handleSend(messageDiv, true)
    else {
      if (!(this.recievers.includes(this.currentMessanger))) {
        this.recievers.push(this.currentMessanger);
        document.getElementById("reciever-profile-name").innerHTML = this.formatRecievers();
      };
      this.updateDisplayName(messageDiv);
      this.handleSend(messageDiv, false)
    };
    this.updateMessageDivStyles(messageDiv)
    
    var chatHistory = document.getElementById("message_container");
    chatHistory.scrollTop = chatHistory.scrollHeight;
    document.querySelector("#id_message_send_input").value = "";
  };

  getData(e) {
    return JSON.parse(e.data);
  };

  handleSend(div, from_user) {
    this.updateContainers(div, from_user);
    this.updateChatArrow(div, from_user);

    if (this.LastMessanger != this.currentMessanger || this.LastMessanger == "") {
      this.mt = this.updateMt(from_user);
      from_user ? this.lastUserMessageHeight = div.offsetHeight : this.lastRecieverMessageHeight = div.offsetHeight;
      this.messageStreak = 1;
    } else {
      this.messageStreak++;
      this.mt = "5px";
    };
    this.LastMessanger = this.currentMessanger;
  };
  
  updateChatArrow(div, from_user) {
    const chatArrow = document.createElement("img");
    from_user ? chatArrow.src = '/static/chatArrowUser.svg' : chatArrow.src = '/static/chatArrowReciever.svg';
    from_user ? chatArrow.className = 'chat-arrow-user' : chatArrow.className = 'chat-arrow-reciever';
    div.appendChild(chatArrow);
  };

  updateContainers(div, from_user) {
    const newLine = document.createElement("br");
    from_user ? div.className = "message-user font" : div.className = "message-reciever font";
    from_user ? this.userContainer.appendChild(div) : this.recieversContainer.appendChild(div);
    from_user ? this.userContainer.appendChild(newLine) : this.recieversContainer.appendChild(newLine);
  };

  updateMt(from_user) {
    function _updateMtHelper(container, messageStreak) {
      return ((messageStreak * (container + 5)).toString() + "px");
    };
    if (from_user) { 
      return _updateMtHelper(this.lastRecieverMessageHeight, this.messageStreak);
    } else {
      return _updateMtHelper(this.lastUserMessageHeight, this.messageStreak);
    };
  };

  formatRecievers() {
    let repr = "";
    const n = this.recievers.length

    if (n == 1) repr = this.recievers[0];
    else if (n == 2) repr = this.recievers[0] + " and " + this.recievers[1];
    
    else {
      for (let i = 0; i < n; i++) {
        i == n - 1 ? repr += "and " + this.recievers[i] : repr += this.recievers[i] + ", ";
      };
    };

    return repr;
  };

  updateDisplayName(div) {
    var nameDisplay = document.createElement("p");
    nameDisplay.innerHTML = this.currentMessanger;
    nameDisplay.className = "message-name";
    div.appendChild(nameDisplay);
  };

  updateMessageDivStyles(div) {
    setTimeout(() => {
      div.style.opacity = "1"; 
      div.style.marginLeft = "0px" ;
      div.style.marginTop = this.mt;
    }, 100);
  };
};
