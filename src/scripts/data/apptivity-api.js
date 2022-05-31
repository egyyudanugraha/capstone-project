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
    const response = await fetch(API_ENDPOINT.LOGOUT);
    const json = await response.json();
    return json;
  }

  static async getUser() {
    const response = await fetch(API_ENDPOINT.USER, this._options());
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

  static async getAllTask(params) {
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
    return json.data;
  }
}

export default ApptivityApi;
