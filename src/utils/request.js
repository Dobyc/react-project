const request = (url, method = 'post', body = {}) => {
  let isOk;

  if (method === 'get') {
    url += `?${Object.entries(body).map(a => `${a[0]}=${a[1]}`).join('&')}`;
    body = null;
  } else {
    body = JSON.stringify(body);
  }

  // 模拟请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          username: '登录名',
          company: '公司名'
        }
      });
    }, 1500)
  });
};

export default request;