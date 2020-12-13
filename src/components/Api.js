export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

getInitialCards() {
  return fetch(`${this._url}/cards`, {
    method: 'GET',
    headers: this._headers
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}

getInformationUser() {
  return fetch(`${this._url}/users/me`, {
    method: 'GET',
    headers: this._headers
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })

}

saveInfoUser(formData) {
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      name: formData['profile-title'],
      about: formData['profile-subtitle']
  })
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}

addNewCard(formData) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      name: formData.name,
      link: formData.link
    })
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}

allDataPromise() {
  return Promise.all([ this.getInitialCards(), this.getInformationUser() ]);
}

deleteCard(_id) {
  return fetch(`${this._url}/cards/${_id}`, {
    method: 'DELETE',
    headers: this._headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

putLike(_id) {
  return fetch(`${this._url}/cards/likes/${_id}`, {
    method: 'PUT',
    headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  })
}

deleteLiki(_id) {
  return fetch(`${this._url}/cards/likes/${_id}`, {
    method: 'DELETE',
    headers: this._headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

avatar(formData) {
  return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify({
      avatar: formData.avatar
    })
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

}
