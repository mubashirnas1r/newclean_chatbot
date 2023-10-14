const initialMessage = "👋 Hello! I am CleanAI, driven by ChatGPT, ask me anything you'd like to know about Newclean.";
const chatbot_dp = "https://static.wixstatic.com/media/8b9b5d_875ccb3a038f483c86b2843b2dad3484~mv2.jpg"
const chatbot_name = 'CleanAI 🏡'
const chatbot_toggle_picture = "https://static.wixstatic.com/media/8b9b5d_a0ee742c44344c9f8e81b8552e513e03~mv2.gif"

function createStyles() {
    const styles = `
    body {
    margin: 0;
    padding: 0;
    /* Add any other styles for your page here */
    }

    /* Style the widget container */
    .widget-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    }

    /* Style the widget button */
    .widget-button {
    width: 51px;
    height: 51.2px;
    border-radius: 50%;
    /* background-color:; */
    background-color: #fff;
    padding: 1; /* Remove default padding */
    border: none;
    cursor: pointer;
    shape-outside: 10px;
    background-image: url(${chatbot_toggle_picture});
    background-size: 100% 100%; /* You can use other values like "100% 100%" or "50% 50%" */
    background-position: center; /* Center the image within the button */
    background-repeat: no-repeat; /* Prevent image repetition */
    }

    .widget {
    display: none;
    background-color: #f2f2f2;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 15px;
    background-color:#fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    /* Position the chatbot container at the top of the button */
    position: absolute;
    top: -590px; /* Adjust this value to position the widget as desired */
    right: 0;
    height: 500x; /* Increase the height by 20% (300px + 20%) */
    width: 400px; /* Increase the width by 20% (250px + 20%) */
    overflow: hidden;
    /* Add a CSS transition to create a smooth upward movement effect */
    transition: top 0.3s ease;
    scrollbar-width:thin;
    scrollbar-color: #c4d4da #f2f2f2;
    }
    /* Style the chat messages container scroll bar track */
    #chatMessagesContainer::-webkit-scrollbar {
    width: 4px; /* Width of the scroll bar */
    }

    /* Style the chat messages container scroll bar thumb */
    #chatMessagesContainer::-webkit-scrollbar-thumb {
    background-color: #c4d4da; /* Color of the scroll bar thumb */
    border-radius: 10px; /* Radius of the scroll bar thumb */
    }

    /* Style chat messages container */
    #chatMessagesContainer {
    height: 430px; /* Increase the height by 20% (240px + 20%) */
    overflow-y: auto; /* Enable vertical scrolling for overflow */
    margin-bottom: 18px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    #chatMessages {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    }

    /* Style user messages */
    #chatMessages .user-message {
    background-color: #ccc;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
    max-width: 60%;
    word-wrap: break-word;
    align-self: flex-end;
    margin-bottom: 5px;
    }

    /* Style bot messages */
    #chatMessages .chatbot-message {
    background-color: #128b40;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
    max-width: 60%;
    word-wrap: break-word;
    align-self: flex-start;
    margin-bottom: 5px;
    }

    /* Style the chat input */
    .chat-input {
    display: flex;
    }

    .chat-input input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    .chat-input button {
    padding: 5px 10px;
    margin-left: 10px;
    border: none;
    background-color: #128b40;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    }
    /* Style the chatbot header */
    .chat-header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    }

    .chat-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    }

    .chatbot-name {
    font-weight:bold;
    font-size:larger;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:grey;
    }
    .typing-dot {
    animation: typing 1s infinite;
    }

    @keyframes typing {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
    }

    `;

    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styles));
    document.head.appendChild(styleElement);
}

// Function to create and set attributes for HTML elements
function createElement(elementType, attributes = {}, textContent = "") {
    const element = document.createElement(elementType);
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }
    element.textContent = textContent;
    return element;
}

// Create and append styles
createStyles();

// Create the widget container
const widgetContainer = createElement('div', { class: 'widget-container' });

// Create the chat button
const chatButton = createElement('button', { id: 'chatButton', class: 'widget-button' });

// Create the chatbot container
const chatbotContainer = createElement('div', { id: 'chatbot', class: 'widget' });

// Create the chatbot header
const chatHeader = createElement('div', { class: 'chat-header' });

// Create the chatbot avatar
const chatAvatar = createElement('img', { src: chatbot_dp, alt: 'Chatbot Avatar', class: 'chat-avatar' });

// Create the chatbot name
const chatbotName = createElement('span', { class: 'chatbot-name' }, chatbot_name);

// Create the chat messages container
const MessagesContainer = createElement('div', { id: 'chatMessagesContainer' });

// Create the chat messages list
const chatMessages = createElement('ul', { id: 'chatMessages' });

// Create the chat input
const chatInput = createElement('div', { class: 'chat-input' });

// Create the input field
const userInput = createElement('input', { type: 'text', id: 'userInput', placeholder: 'Type your message...' });

// Create the send button
const sendButton = createElement('button', { id: 'sendButton' }, '📩');

// Append elements to their respective containers
chatHeader.appendChild(chatAvatar);
chatHeader.appendChild(chatbotName);

chatInput.appendChild(userInput);
chatInput.appendChild(sendButton);

chatbotContainer.appendChild(chatHeader);
chatbotContainer.appendChild(MessagesContainer);
chatbotContainer.appendChild(chatInput);

MessagesContainer.appendChild(chatMessages);
widgetContainer.appendChild(chatButton);
widgetContainer.appendChild(chatbotContainer);

// Append the widget container to the body
document.body.appendChild(widgetContainer);
// Get the chatbot element, the chat button element, and the input elements
// Get the chatbot element, the chat button element, and the input elements
const chatbot = document.getElementById('chatbot');
const chatBtn = document.getElementById('chatButton');
const chatMsgs = document.getElementById('chatMessages');
const userQuery = document.getElementById('userInput');
const sendBtn = document.getElementById('sendButton');
const chatMessagesContainer = document.getElementById('chatMessagesContainer');

let chatbotVisible = false;

// const messageHistory = [
//     { role: 'chatbot', content: 'Hello! How can I assist you today?' },
//     { role: 'user', content: 'Can you provide me with some information?' },
//     { role: 'chatbot', content: 'Of course! What specific information are you looking for?' },
//     { role: 'user', content: 'Tell me about your pricing plans.' },
//     { role: 'chatbot', content: 'Of course! What specific information are you looking for?' },
//     { role: 'user', content: 'Tell me about your pricing plans.' },
//     { role: 'chatbot', content: 'Of course! What specific information are you looking for?' },
//     { role: 'user', content: 'Tell me about your pricing plans.' },
//     { role: 'chatbot', content: 'Of course! What specific information are you looking for?' },
//     { role: 'user', content: 'Tell me about your pricing plans.' },
//     { role: 'chatbot', content: 'Of course! What specific information are you looking for?' }
//     // Add more messages to the message history as needed
// ];
function addChatMessageNoTyping(text, isUser) {
    const messageClass = isUser ? 'user-message' : 'chatbot-message';
    const listItem = document.createElement('li');
    listItem.className = messageClass;
    listItem.innerText = text;
    chatMsgs.appendChild(listItem);

    // Scroll to the bottom of the message container
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}
// Function to load message history
function saveConversationToLocalStorage(conversation) {
    localStorage.setItem('chatbotConversation', JSON.stringify(conversation));
}
function isConversationHistoryEmpty() {
    const conversation = loadConversationFromLocalStorage();
    console.log(conversation);
    return conversation.length;
}

// Function to load the conversation history from local storage
function loadConversationFromLocalStorage() {
    const conversation = JSON.parse(localStorage.getItem('chatbotConversation'));
    if (conversation && conversation.length > 0) {
        return conversation;
    }
    return [];
}

// Function to load the conversation history
function loadMessageHistory() {
    const conversation = loadConversationFromLocalStorage();
    conversation.forEach((message) => {
        const { role, content } = message;
        if (role === 'user') {
            addChatMessage(content, true);
        } else {
            addChatMessageNoTyping(content, false);
        }
    });
}
function deleteConversationFromLocalStorage() {
    localStorage.removeItem('chatbotConversation');
}

// Function to toggle chatbot visibility
function toggleChatbot() {
chatbotVisible = !chatbotVisible;
chatbot.style.display = chatbotVisible ? 'block' : 'none';

if (chatbotVisible) {
    // Show the chatbot and send the initial greeting only once
    chatbot.style.top = '-590';
    setTimeout(() => {
    
    if(isConversationHistoryEmpty() == 0){
        addChatMessageTyping(initialMessage, false);
        
    };
    loadMessageHistory();
}, 500);
} else {
    // Hide the chatbot and clear the messages
    chatbot.style.top = '-590px';
    chatMsgs.innerHTML = '';
    userQuery.value = '';
}
}

// Function to add a new chat message
function addChatMessage(text, isUser) {
const messageClass = isUser ? 'user-message' : 'chatbot-message';
const listItem = document.createElement('li');
listItem.className = messageClass;
listItem.innerText = text;
chatMsgs.appendChild(listItem);

// Scroll to the bottom of the message container
chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function addChatMessageTyping(text, isUser) {
    const messageClass = isUser ? 'user-message' : 'chatbot-message';
    const listItem = document.createElement('li');
    listItem.className = messageClass;
    chatMsgs.appendChild(listItem);

    // Function to simulate the typing animation
    function typeText(i) {
    if (i < text.length) {
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        listItem.innerHTML = text.substring(0, i + 1) + '<span class="typing-dot">.</span>';
        i++;
        setTimeout(() => typeText(i), 8);
    } else {
        listItem.innerHTML = text;
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
    }

    typeText(0);
}

// Function to animate opening the chatbot
function openChatbot(timestamp) {
    if (!chatbot.startTime) chatbot.startTime = timestamp;
    const progress = Math.min((timestamp - chatbot.startTime) / 300, 1); // 300ms for animation duration
    chatbot.style.top = `${-340 + 340 * progress}px`; // Slide chatbot down
    if (progress < 1) {
    requestAnimationFrame(openChatbot);
    }
}

// Function to handle user input
function handleUserInput() {
const userMessage = userQuery.value;
if (userMessage.trim() !== '') {
    addChatMessage(userMessage, true);
    // Replace the following line with your chatbot logic
    if(isConversationHistoryEmpty() == 0){
        saveConversationToLocalStorage([
        ...loadConversationFromLocalStorage(),
        { role: 'chatbot', content: initialMessage }
    ]);
    }
    saveConversationToLocalStorage([
        ...loadConversationFromLocalStorage(),
        { role: 'user', content: userMessage }
    ]);
    var ai_training = "You are helpful Assistant";
    var responseText = "Response from GPT...";
    addChatMessageTyping(responseText.replace(/\n/g, "<br>"), false);
    saveConversationToLocalStorage([
        ...loadConversationFromLocalStorage(),
        { role: 'chatbot', content: responseText }
    ]);
    userQuery.value = '';
       
}
}

// Add event listener to the chat button
chatBtn.addEventListener('click', toggleChatbot);

// Add event listener to the send button
sendBtn.addEventListener('click', handleUserInput);
// deleteConversationFromLocalStorage();
// Allow pressing Enter key to send messages
userQuery.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
    handleUserInput();
}
});
