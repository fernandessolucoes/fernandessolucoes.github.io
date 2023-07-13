  const chatButton = document.getElementById('whatsapp-button');
  const chatWindow = document.getElementById('whatsapp-chat');
  const chatInput = document.querySelector('.chat-input');
  const chatSend = document.querySelector('.chat-send-button');
  const chatBody = document.querySelector('.chat-body');
  const chatInputContainer = document.querySelector('.chat-input-container');

  chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
  });

  chatSend.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== '') {
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/5561992209484?text=${encodedMessage}`;
      window.open(whatsappLink, '_blank');
      const chatMessage = document.createElement('div');
      chatMessage.className = 'chat-message';
      chatMessage.innerHTML = `<span class="message-text">${message}</span>`;
      chatBody.appendChild(chatMessage);
      chatInput.value = '';
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });

  chatInput.addEventListener('focus', () => {
    chatInputContainer.style.bottom = '100px';
  });

  chatInput.addEventListener('blur', () => {
    chatInputContainer.style.bottom = '10px';
  });