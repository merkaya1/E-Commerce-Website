const commentsFunc = () => {
  const stars = document.querySelectorAll('.stars .star');
  let starId;
  stars.forEach((star) => {
    star.addEventListener('click', function (e) {
      e.preventDefault();
      stars.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
      starId = Number(this.dataset.star);

      addNewComment(starId, star); // yıldızı seçiminden sonra çalış
    });
  });
};

const addNewComment = (starNumber, star) => {
  console.log(starNumber);
  let comments = [];
  let comment = document.querySelector('#comment-text');
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let commentBtn = document.querySelector('.form-submit input');
  const checkbox = document.querySelector('.comment-form-cookies #cookies');
  const commentWrapper = document.querySelector('.comment-list');
  console.log(commentWrapper);

  let commentText;
  let nameText;
  let emailText;
  comment.addEventListener('input', function () {
    commentText = this.value;
  });

  name.addEventListener('input', function () {
    nameText = this.value;
  });

  email.addEventListener('input', function () {
    emailText = this.value;
  });

  commentBtn.addEventListener('click', addComment);

  function addComment(e) {
    e.preventDefault();
    if (checkbox.checked) {
      comments.push({ text: commentText, name: nameText, email: emailText, star: starNumber });
      let list = '';
      for (let index = 1; index <= starNumber; index++) {
        list += `
        <li>
          <i class="bi bi-star-fill"></i>
        </li>`;
      }
      console.log(list);
      let dateProp = new Date();
      let date = `${dateProp.getDate()} - ${dateProp.getMonth() + 1} - ${dateProp.getFullYear()}`;
      console.log(date);
      console.log(comments.name);
      comments.map((comment) => {
        commentWrapper.innerHTML += `
       <li class="comment-item">
                    <div class="comment-avatar">
                      <img src="img/avatars/avatar1.jpg" alt="avatar">
                    </div>
                    <div class="comment-text">
                      <ul class="comment-star">
                       ${list}
                      </ul>
                      <div class="comment-meta">
                        <span>
                          <strong>${comment.name}</strong>
                          ${date}
                        </span>

                      </div>
                      <div class="comment-desc">
                        <p>${comment.text}</p>
                      </div>
                    </div>
                  </li>
      `;
      });

      comment.value = '';
      name.value = '';
      email.value = '';
      star.classList.remove('active');
      checkbox.checked = false;
      localStorage.setItem('comments', JSON.stringify(comments));
    } else {
      alert('checkbox Butonunu Aktif Hale Getirin');
    }
  }
};

export default commentsFunc;
