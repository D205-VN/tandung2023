// Lắng nghe sự kiện nhấn phím trên trang
document.addEventListener('keydown', function(event) {
    // Kiểm tra xem người dùng đã nhấn phím "R" và không nhấn phím Shift, Ctrl, hoặc Alt cùng lúc
    if (event.key === 'r' && !event.shiftKey && !event.ctrlKey && !event.altKey) {
      // Chuyển về trang đầu
      window.location.href = 'index.html';
    }
  });
