const URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = (username, password) => {
  return {
    url: `${URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    },
  };
};

export const TOKEN_VALIDATE_POST = token => {
  return {
    url: `${URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_POST = (username, password, email) => {
  return {
    url: `${URL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    },
  };
};

export const USER_GET = token => {
  return {
    url: `${URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const PHOTOS_GET = ({ page, total, user }) => {
  return {
    url: `${URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const PHOTO_GET = id => {
  return {
    url: `${URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

export const PHOTO_POST = (name, weight, age, img) => {
  const formData = new FormData();
  formData.append('nome', name);
  formData.append('peso', weight);
  formData.append('idade', age);
  formData.append('img', img);
  const token = window.localStorage.getItem('token');
  return {
    url: `${URL}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
};

export const PHOTO_DELETE = id => {
  return {
    url: `${URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    },
  };
};

export const COMMENT_POST = (id, comment) => {
  return {
    url: `${URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        comment,
      }),
    },
  };
};

export const PASSWORD_LOST = body => {
  return {
    url: `${URL}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const PASSWORD_RESET = body => {
  return {
    url: `${URL}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const STATS_GET = () => {
  return {
    url: `${URL}/api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    },
  };
};
