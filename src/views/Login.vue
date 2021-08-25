<template lang="pug">
b-container#login.px-5
  b-row.py-5
    b-col(cols='12').box-shadow.my-5.px-4
      h3.text-left.title.mt-4 登入
      hr
      b-form(@submit.prevent="submit" @reset="reset")
        //- 帳號
        b-form-group.mb-4(
          label="帳號"
          label-for="input-account"
          :state="state.account"
          description="帳號長度限制為 4 到 20 個字"
          invalid-feedback="帳號格式不正確"
        )
          b-form-input#input-account(
            v-model="form.account"
            type="text"
            required
            placeholder= "請輸入帳號"
            :state="state.account"
          )
        //- 密碼
        b-form-group(
          label="密碼"
          label-for="input-password"
          :state="state.password"
          description="密碼長度限制為 4 到 20 個字"
          invalid-feedback="密碼格式不正確"
        ).mb-4
          b-form-input#input-password(
            v-model="form.password"
            type="password"
            required
            placeholder= "請輸入密碼"
            :state="state.password"
          )
        h6.text-right.mb-4
          router-link(to="/register")
            b-icon(icon="shield-fill-exclamation").mr-1
            span 沒有帳號嗎 ?
        hr.mb-4
        //- 送出重置
        .text-center.mb-4
          b-btn(variant="success" type="submit").w-25.mr-2 登入
          b-btn(variant="danger" type="reset").w-25 重置
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  computed: {
    state () {
      return {
        account: this.form.account.length === 0 ? null : this.form.account.length >= 4 && this.form.account.length <= 20,
        password: this.form.password.length === 0 ? null : this.form.password.length >= 4 && this.form.password.length <= 20
      }
    }
  },
  methods: {
    reset () {
      this.form.account = ''
      this.form.password = ''
    },
    async submit () {
      try {
        const { data } = await this.axios.post('/users/login', this.form)
        this.$store.commit('login', data)
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '登入失敗'
        })
      }
    }
  }
}
</script>
