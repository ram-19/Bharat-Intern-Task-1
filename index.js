function submitForm() {
    var title = document.getElementById('title').value;
    var discription = document.getElementById('discription').value;
    var image = document.getElementById('image').files[0];
    var video = document.getElementById('video').files[0];
    var files = document.getElementById('files').files[0];

    var dataSection = document.getElementById('dataSection');

    var newData = "<div class='card'>" +
      "<div class='card-header'>" +
      "<h3 class='card-title'><b>Title:</b>" + title + "</h3>" +
      "</div>" +
      "<div class='card-body'>" +
      "<p><b>Content: </b>" + discription + "</p>";

    if (image) {
      var imagePreview = document.createElement('img');
      imagePreview.src = URL.createObjectURL(image);
      imagePreview.style.maxWidth = '100%';
      imagePreview.style.height = 'auto';
      imagePreview.style.marginTop = '10px';
      newData += "<p><b>Image:</b></p>";
      newData += "<div class='card-body-image'>" +
        "<img class='preview' src='" + imagePreview.src + "' alt='Selected Image'>" +
        "</div>";
    }
    
    if (video) {
      var videoPreview = document.createElement('video');
      videoPreview.src = URL.createObjectURL(video);
      videoPreview.controls = true;
      videoPreview.autoplay = true;
      videoPreview.style.maxWidth = '100%';
      videoPreview.style.height = 'auto';
      videoPreview.style.marginTop = '20px';
      newData += "<p><b>Video:</b></p>";
      newData += "<div class='card-body-video'>" +
        "<video class='video-preview' src='" + videoPreview.src + "' controls autoplay></video>" +
        "</div>";
    }
    if (files) {
        const filesPreview = document.createElement('iframe');
        filesPreview.src = URL.createObjectURL(files);
        filesPreview.style.width = '100%';
        filesPreview.style.height = 'auto';
        filesPreview.style.marginTop = '20px';
        newData += `
          <p><b>files:</b></p>
          <div class="card-body-document">
            <iframe class="files-preview" src="${filesPreview.src}"></iframe>
          </div>`;
      }

    newData += "</div></div>";

    dataSection.innerHTML += newData;

    document.getElementById('title').value = '';
    document.getElementById('discription').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
    document.getElementById('files').value = '';
  }
