const request = new XMLHttpRequest();

const url_request = "https://api.github.com/users/hiteshchoudhary";

request.open("GET", url_request);
request.onreadystatechange = function () {
  console.log(request.readyState);
  if (request.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const image = document.getElementsByClassName("image")[0];
    console.log(image);
    image.innerHTML = `<img
          src="${data.avatar_url}"
          alt="profile photo"
        />`;

        document.getElementsByClassName('meta')[0].innerHTML=`<div class="name">Name : ${data.name}</div>
        <div class="followers">
            <h3>${data.followers} followers</h3>
        </div>
      </div>`
  }
};
request.send();
