<template>
  <div id="login">
    <div class="main">
      <div class="login_item">
        <div class="top-title">
          <i class="icon font_family icon-zhongguoyidonglogo"></i>
        </div>
        <div class="item">
          <h5 class="title">大数据建模取数平台</h5>
          <div class="input">
            <i class="icon font_family icon-zhanghaotubiao"></i>
            <input type="text" v-model="username" name value placeholder="输入用户名" maxlength="20">
          </div>
          <div class="input">
            <i class="icon font_family icon-mima"></i>
            <input type="password" v-model="password" name value placeholder="输入密码" maxlength="20">
          </div>
          <div class="input">
            <i class="icon font_family icon-yanzhengma"></i>
            <input type="text" v-model="verify" name value placeholder="输入验证码" maxlength="6">
            <img
              class="v-code"
              :src="captcha_img + '?v=' + captcha_versoin"
              @click="captcha_versoin++"
              alt
            >
          </div>
          <p class="forget-password pointer">忘记密码</p>
          <div class="login-btn">
            <el-button type="primary" class="button" @click="login">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../env/config.js'
export default {
  // <img :src="captcha_img + '?v=' + captcha_versoin" @click="captcha_versoin++">

  name: 'login',
  components: {},
  data() {
    return {
      captcha_img: 'http://vpn.zhaohu.co:36009/login/code_img', //验证码
      username: '', //用户名
      password: '', //密码
      verify: '', //验证码
      captcha_versoin: 0
    }
  },
  computed: {
    //计算属性
  },
  methods: {
    //登录
    async login() {
      if (!this.username) {
        this.$message.error('用户名不能为空')
        return
      }
      if (!this.password) {
        this.$message.error('密码不能为空')
        return
      }
      if (!this.verify) {
        this.$message.error('验证码不能为空')
        return
      }
      //引入加密文件
      var enc = new JSEncrypt()
      enc.setPublicKey(config.PUBKEY)
      // 发送axios
      let res = await this.axios.post('/login/checkLogin', {
        // 加密用户名和密码
        pu: enc.encrypt(this.username),
        pw: enc.encrypt(this.password),
        code: this.verify
      })

      let {
        data: { errcode, message }
      } = res
      if (errcode == 2000) {
        // localStorage.setItem('token', token)
        this.$router.push({
          path: '/'
        })
      }
      if (errcode == 4802) {
        this.$message.error('用户名或密码错误')
        this.$message.error(message)
        return
      }
      if (errcode == 3003) {
        this.captcha_versoin++
        this.$message.error('验证码错误')
        return
      }
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  .main {
    background-image: url('../assets/img/login_bg.png');
    width: 100vw;
    border-radius: 5px;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_item {
      width: 560px;
      height: auto;
      min-height: 420px;
      background-color: #fff;
      border-radius: 10px;
      .top-title {
        width: 100%;
        padding: 20px 0;
        background-color: #108ee9;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0px 2px 11px -1px rgba(0, 0, 0, 0.5);
        i {
          color: #fff;
          font-size: 36px;
        }
      }
      .item {
        padding: 0px 80px 0 80px;
        .title {
          font-size: 22px;
          color: #0081cc;
          font-weight: 600;
          margin: 30px 0;
        }
        .input {
          position: relative;
          width: 100%;
          margin-top: 15px;
          i {
            color: #0081cc;
            position: absolute;
            left: 0;
            line-height: 32px;
            font-size: 18px;
          }
          input {
            font-size: 14px;
            border: none;
            width: calc(100% - 30px);
            padding-left: 30px;
            line-height: 36px;
            border-bottom: 1px solid #cecece;
          }
          .v-code {
            position: absolute;
            right: 0;
            top: 0;
            width: auto;
            height: 30px;
          }
        }
        .forget-password {
          padding: 10px 0;
          text-align: left;
          color: #0081cc;
          font-size: 12px;
        }
        .login-btn {
          .button {
            width: 50%;
            margin: 10px 0;
            font-size: 18px;
          }
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
