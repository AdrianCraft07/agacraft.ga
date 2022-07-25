﻿function isUrl(Url) {
  let url = document.URL;
  return url.endsWith(Url) || url.endsWith(Url + '.html');
}
function getLink() {
  if (isUrl('ChoesinCraft')) return 'ChoesinCraft';
  if (isUrl('Home')) return 'Home';
  alert('no se pudo encontrar el link que nesesitas');
  return '#';
}

function pass() {
  document.getElementById('btn').value = 'o';
  document.getElementById('btn').onclick = () => passNo();
  document.getElementById('pass').type = 'text';
}
function passNo() {
  document.getElementById('btn').onclick = () => pass();
  document.getElementById('btn').value = '-';
  document.getElementById('pass').type = 'password';
}
function StringToURL(string) {
  let URL = "% !*'();:@&=+$/?#[]".split(
    (_, i) =>
      [
        '%25',
        '%20',
        '%21',
        '%2a',
        '%27',
        '%28',
        '%29',
        '%3B',
        '%3A',
        '%40',
        '%26',
        '%3D',
        '%2B',
        '%24',
        '%2F',
        '%3F',
        '%23',
        '%5B',
        '%5D',
      ][i]
  );
  return URL;
}
let download = () => {
  fetch('https://aga-db.herokuapp.com/', {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'User-Agent': 'Aga Web (https://agacraft07.github.io)',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: document.getElementById('user').value,
      password: document.getElementById('pass').value,
      page: 'seo',
      addon: getLink(),
    }),
  })
    .then(response => response.text())
    .then(function (data) {
      if (data == '#') return;
      document.getElementById('login').style.display = 'none';
      document.getElementById('descargar').style.display = '';
      document.getElementById('download').href = data;
      download = undefined;
    });
};
