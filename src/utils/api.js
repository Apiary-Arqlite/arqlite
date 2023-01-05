//utils.api.js

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error:${res.staus}`);
  }

  handleErrorRespone(err) {
    console.log(`Error:${err}`);
  }

  //send form data to zapier
  addNewContact(name, email) {
    return this._request(`${this._baseUrl}`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }
}
/* ------------------------- Api class - set up Api ------------------------- */
const baseUrl = "https://hooks.zapier.com/hooks/catch/11894352/b7netx7/";
const api = new Api({
  baseUrl: baseUrl,
  headers: { "Content-Type": "application/json" },
});
/* --------------------------------- exports -------------------------------- */
export default api;