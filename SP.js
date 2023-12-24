const imageList = document.getElementById('imageList');
const fileInput = document.getElementById('fileInput');
        
    
fileInput.addEventListener('change', uploadImage);
    
  function uploadImage() {
    const file = fileInput.files[0];
    if (!file) {
      alert('Vui lòng chọn một tệp ảnh.');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = function (event) {
    const imageUrl = event.target.result;
    
    const imageItem = document.createElement('li');
    imageItem.classList.add('image-item');
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Ảnh tải lên';
    
    imageItem.appendChild(image);
    imageList.appendChild(imageItem);

    const imageFrame = document.createElement('div');
    imageFrame.classList.add('image-frame');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function () {
      imageItem.remove();
    });
                
    imageFrame.appendChild(image);
      imageItem.appendChild(imageFrame);
      imageItem.appendChild(deleteButton);
      imageList.appendChild(imageItem);

        fileInput.value = null;
    };
    image.scrollIntoView({ behavior: 'smooth' }); // Di chuyển màn hình tới hình vừa tải lên
    reader.readAsDataURL(file);
  }
