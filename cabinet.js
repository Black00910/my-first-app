const userId = localStorage.getItem("user");

function load() {
  fetch(`http://localhost:3000/my/${userId}`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = data.map(i =>
        `<p>${i.groom} & ${i.bride}
        <br>https://t.me/YOUR_BOT?startapp=${i.inviteId}</p>`
      ).join("");
    });
}

function create() {
  fetch("http://localhost:3000/create", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      userId,
      groom: groom.value,
      bride: bride.value,
      date: date.value,
      photo: photo.value,
      video: video.value,
      music: music.value,
      lang: lang.value
    })
  }).then(load);
}

load();