// Lấy đối tượng đường thẳng
var line = document.getElementById('line');
var startLabel = document.getElementById('start-label');
var endLabel = document.getElementById('end-label');


// Tạo hiệu ứng load và biến mất
function animateLine() {
  line.style.transform = "translateX(100%)"; // Đặt vị trí ban đầu của đường thẳng (nằm bên phải khung web)

  // Bắt đầu animation
  line.addEventListener("transitionend", function(event) {
    if (event.propertyName === "transform") {
      line.style.display = "none"; // Ẩn đường thẳng khi transition kết thúc
      startLabel.style.display = "none";
      endLabel.style.display = "none";
      window.location.href = 'Trangchinh.html';
    }
  });
  line.style.transform = "translateX(0%)"; // Di chuyển đường thẳng từ phải sang trái

}


window.addEventListener('DOMContentLoaded', function() {
  var snowContainer = document.getElementById('snow-container');
  
  // Số lượng tuyết rơi
  var snowflakeCount = 50;
  
  // Tạo các tuyết rơi
  for (var i = 0; i < snowflakeCount; i++) {
      var snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowContainer.appendChild(snowflake);
  }
});


// Gọi hàm animateLine khi trang web được tải
window.onload = animateLine;



