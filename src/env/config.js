var obj = {
  /**
   * 模式
   *  true :
   *  false :
   */
  DEBUG: true,
  /**
   * 数据接口
   *  true: 本地Mock
   *  false: 网络接口
   */
  DATA_INTERFACE_LOCAL: false,

  /**
   * 发布的目录
   */
  BASEURL: '',

  /**
   * 是否使用云梯
   * 如果后端使用云梯系统开发接口则axios会按照云梯系统的接口格式定义更新请求方式，同时需要更新前端开发的测试服务器配置。
   */
  IS_YUNTI: true,

  PUBKEY: `-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlnhAt70EGmdlCWFpNNy3EueWzLPSyAPCwz1vgUqUbQQGD50spMDghQAoxI/y0/Qb6r62J6AB0YpJxD9tRRA91GkJ2hwWVH+tSasUOYTaCqxKdFNzu3bNxqJWh9D9xO60umalX7KUhH+ZQZHhYByHA58Z64U+/jWnozAHP24OKDwIDAQAB-----END PUBLIC KEY-----`
};

obj.PUBLIC_IMAGES = `${obj.BASEURL}/images`;

export default obj;
