import API_ENDPOINT from '../globals/api-endpoint';

class ApptivityApi {
  static _options() {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    };
  }

  static async register(user) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      ...this._options(),
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  }

  static async login(user) {
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      ...this._options(),
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  }

  static async logout() {
    const response = await fetch(API_ENDPOINT.LOGOUT, this._options());
    const json = await response.json();
    localStorage.removeItem('access_token');
    return json;
  }

  static async logoutAll() {
    const response = await fetch(API_ENDPOINT.LOGOUT_ALL, this._options());
    const json = await response.json();
    return json;
  }

  static async getUser() {
    const response = await fetch(API_ENDPOINT.USER, this._options());
    const json = await response.json();
    return json;
  }

  static async updateUser(user) {
    const response = await fetch(API_ENDPOINT.USER, {
      method: 'PUT',
      ...this._options(),
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  }

  static async updatePassword(passwords) {
    const response = await fetch(API_ENDPOINT.USER_PASSWORD, {
      method: 'PUT',
      ...this._options(),
      body: JSON.stringify(passwords),
    });
    const json = await response.json();
    return json;
  }

  static async deleteUser() {
    const response = await fetch(API_ENDPOINT.USER, {
      method: 'DELETE',
      ...this._options(),
    });
    const json = await response.json();
    return json;
  }

  // Tasks
  static async createTask(task) {
    const response = await fetch(API_ENDPOINT.TASK, {
      method: 'POST',
      ...this._options(),
      body: JSON.stringify(task),
    });
    const json = await response.json();
    return json;
  }

  static async getAllTask(params = '') {
    const response = await fetch(`${API_ENDPOINT.TASK}?${params}`, this._options());
    const json = await response.json();
    return json.data;
  }

  static async getTask(id) {
    const response = await fetch(API_ENDPOINT.TASK_DETAIL(id), this._options());
    const json = await response.json();
    return json.data;
  }

  static async updateTask(id, task) {
    const response = await fetch(`${API_ENDPOINT.TASK_DETAIL(id)}`, {
      method: 'PUT',
      ...this._options(),
      body: JSON.stringify(task),
    });
    const json = await response.json();
    return json;
  }

  static async deleteTask(id) {
    const response = await fetch(`${API_ENDPOINT.TASK_DETAIL(id)}`, {
      method: 'DELETE',
      ...this._options(),
    });
    const json = await response.json();
    return json;
  }

  static async deleteAllTask() {
    const response = await fetch(`${API_ENDPOINT.TASK}`, {
      method: 'DELETE',
      ...this._options(),
    });
    const json = await response.json();
    return json;
  }

  // Matrix
  static async getMatrix() {
    const response = await fetch(API_ENDPOINT.MATRIX, this._options());
    const json = await response.json();
    return json.data;
  }

  // History
  static async getHistory() {
    const response = await fetch(API_ENDPOINT.HISTORY, this._options());
    const json = await response.json();
    return json.data;
  }

  static async createHistory(history) {
    const response = await fetch(API_ENDPOINT.HISTORY, {
      method: 'POST',
      ...this._options(),
      body: JSON.stringify(history),
    });
    const json = response.json();
    return json;
  }
}

export default ApptivityApi;
