export default {
  login(email, pass) {
    return new Promise((resolve, reject) => {
      if (localStorage.token) {
        resolve(true)
        this.onChange(true)
      } else {
        fakeRequest(email, pass).then((res) => {
          if (res.authenticated) {
            localStorage.token = res.token
            resolve(true);
            this.onChange(true)
          } else {
            reject()
            this.onChange(false)
          }
        })
        .catch(reject)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout() {
    delete localStorage.token
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

const fakeRequest = (email, pass) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'foo@bar.com' && pass === 'pwd') {
        resolve({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      } else {
        reject({authenticated: false})
      }
    }, 0)
  })
}
