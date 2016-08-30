export const signup = (user, success, error) => {
  $.ajax({
    method: 'POST' ,
    url: '/api/users',
    data: { user: {
        password: user.password,
        username: user.username
      }
    },
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: 'POST' ,
    url: '/api/session',
    data: { user: {
        password: user.password,
        username: user.username
      }
    },
    success,
    error
  });
};

export const logout = (success) => {
  $.ajax({
    method: 'DELETE' ,
    url: '/api/session',
    success
  });
};
