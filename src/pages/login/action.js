export const requestLogin = (username, password) => {
  console.log('点击登录按钮')
  return {
      type: 'REQUEST_LOGIN',    // 名字自取，reducer判断依据
      username,
      password
  }
}

export const fetchLogin = (username, password) => {
  console.log('正在请求登录接口')
  return {
      type: 'FETCH_LOGIN',    // 名字自取，reducer判断依据
  }
}

export const receiveLogin = (username, company) => {
  console.log('登录完成')
  return {
      type: 'RECEIVE_LOGIN',    // 名字自取，reducer判断依据
      username,
      company
  }
}
