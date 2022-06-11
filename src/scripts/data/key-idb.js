import { openDB } from 'idb';

const dbPromise = openDB('auth', 1, {
  upgrade(db) {
    db.createObjectStore('access_token');
  },
});

const Auth = {
  async setAccessToken(accessToken) {
    return (await dbPromise).put('access_token', accessToken.token, 'token');
  },

  async getAccessToken() {
    return (await dbPromise).get('access_token', 'token');
  },

  async deleteAccessToken() {
    return (await dbPromise).delete('access_token', 'token');
  },
};

export default Auth;
