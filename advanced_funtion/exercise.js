let timeoutId;

function add() {
  const messageElement = document.querySelector('.p');
  if(messageElement.innerHTML == ""){
  messageElement.innerHTML = 'Added';

  // Làm hiện lên (opacity = 1)
  messageElement.style.opacity = '1';

  // Xóa timeout cũ nếu có
  clearTimeout(timeoutId);
  }else{
  // Sau 2 giây, bắt đầu ẩn dần
  timeoutId = setTimeout(() => {
    messageElement.style.opacity = '0';

    // Sau khi ẩn xong thì xóa nội dung (sau 1 giây)
    setTimeout(() => {
      messageElement.innerHTML = '';
    }, 1000);
  }, 1000);
}
}
