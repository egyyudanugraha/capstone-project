import API_ENDPOINT from '../globals/api-endpoint';
import Auth from './key-idb';

class ApptivityApi {
  static async _options() {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await Auth.getAccessToken()}`,
      },
    };
  }

  static async register(user) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  }

  static async login(user) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    await Auth.setAccessToken(json);
    return json;
  }

  static async logout() {
    const response = await fetch(API_ENDPOINT.LOGOUT, await this._options());
    const json = await response.json();
    await Auth.deleteAccessToken();
    return json;
  }

  static async logoutAll() {
    const response = await fetch(API_ENDPOINT.LOGOUT_ALL, await this._options());
    const json = await response.json();
    await Auth.deleteAccessToken();
    return json;
  }

  static async getUser() {
    const response = await fetch(API_ENDPOINT.USER, await this._options());
    const json = await response.json();
    return json;
  }

  static async updateUser(user) {
    const response = await fetch(API_ENDPOINT.USER, {
      method: 'PUT',
      ...await this._options(),
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  }

  static async updatePassword(passwords) {
    const response = await fetch(API_ENDPOINT.USER_PASSWORD, {
      method: 'PUT',
      ...await this._options(),
      body: JSON.stringify(passwords),
    });
    const json = await response.json();
    return json;
  }

  static async deleteUser() {
    const response = await fetch(API_ENDPOINT.USER, {
      method: 'DELETE',
      ...await this._options(),
    });
    const json = await response.json();
    await Auth.deleteAccessToken();
    return json;
  }

  // Tasks
  static async createTask(task) {
    const response = await fetch(API_ENDPOINT.TASK, {
      method: 'POST',
      ...await this._options(),
      body: JSON.stringify(task),
    });
    const json = await response.json();
    return json;
  }

  static async getAllTask(params = '') {
    const response = await fetch(`${API_ENDPOINT.TASK}?${params}`, await this._options());
    const json = await response.json();
    return json.data;
  }

  static async getTask(id) {
    const response = await fetch(API_ENDPOINT.TASK_DETAIL(id), await this._options());
    const json = await response.json();
    return json.data;
  }

  static async updateTask(id, task) {
    const response = await fetch(`${API_ENDPOINT.TASK_DETAIL(id)}`, {
      method: 'PUT',
      ...await this._options(),
      body: JSON.stringify(task),
    });
    const json = await response.json();
    return json;
  }

  static async deleteTask(id) {
    const response = await fetch(`${API_ENDPOINT.TASK_DETAIL(id)}`, {
      method: 'DELETE',
      ...await this._options(),
    });
    const json = await response.json();
    return json;
  }

  static async deleteAllTask() {
    const response = await fetch(`${API_ENDPOINT.TASK}`, {
      method: 'DELETE',
      ...await this._options(),
    });
    const json = await response.json();
    return json;
  }

  // Matrix
  static async getMatrix() {
    const response = await fetch(API_ENDPOINT.MATRIX, await this._options());
    const json = await response.json();
    return json.data;
  }

  // History
  static async getHistory() {
    const response = await fetch(API_ENDPOINT.HISTORY, await this._options());
    const json = await response.json();
    return json.data;
  }

  static async createHistory(history) {
    const response = await fetch(API_ENDPOINT.HISTORY, {
      method: 'POST',
      ...await this._options(),
      body: JSON.stringify(history),
    });
    const json = response.json();
    return json;
  }
}

export default ApptivityApi;
