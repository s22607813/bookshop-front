<template lang="pug">
b-container#register.px-5
  b-row.py-5
    b-col(cols='12').box-shadow.my-5.px-4
      h3.text-left.title.mt-4 註冊
      hr
      b-form(@submit.prevent="submit" @reset="reset")
        //- 暱稱
        b-form-group.mb-4(
          label="暱稱"
          label-for="input-name"
          :state="state.name"
          description="暱稱長度限制為 1 到 10 個字"
          invalid-feedback="暱稱格式不正確"
        )
          b-form-input#input-name(
            v-model="form.name"
            type="text"
            required
            placeholder= "請輸入暱稱"
            :state="state.name"
          )
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
        b-form-group.mb-4(
          label="密碼"
          label-for="input-password"
          :state="state.password"
          description="密碼長度限制為 4 到 20 個字"
          invalid-feedback="密碼格式不正確"
        )
          b-form-input#input-password(
            v-model="form.password"
            type="password"
            required
            placeholder= "請輸入密碼"
            :state="state.password"
          )
        //- 信箱
        b-form-group.mb-4(
          label="信箱"
          label-for="input-email"
          :state="state.email"
          description="請輸入有效的信箱"
          invalid-feedback="信箱格式不正確"
        )
          b-form-input#input-email(
            v-model="form.email"
            type="text"
            required
            placeholder= "請輸入信箱"
            :state="state.email"
          )
        hr.mb-4
        //- 送出重置
        .text-center.mb-4
          b-btn(variant="success" type="submit").w-25.mr-2 註冊
          b-btn(variant="danger" type="reset").w-25 重置
</template>

<script>
import isEmail from 'validator/es/lib/isEmail'

export default {
  data () {
    return {
      form: {
        name: '',
        account: '',
        password: '',
        email: ''
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : this.form.name.length >= 1 && this.form.name.length <= 10,
        account: this.form.account.length === 0 ? null : this.form.account.length >= 4 && this.form.account.length <= 20,
        password: this.form.password.length === 0 ? null : this.form.password.length >= 4 && this.form.password.length <= 20,
        email: this.form.email.length === 0 ? null : isEmail(this.form.email)
      }
    }
  },
  methods: {
    reset () {
      this.form.name = ''
      this.form.account = ''
      this.form.password = ''
      this.form.email = ''
    },
    async submit () {
      try {
        await this.axios.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'erro',
          title: '失敗',
          text: '註冊失敗'
        })
      }
    }
  }
}
</script>
