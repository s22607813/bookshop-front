<template lang="pug">
b-container(fluid)#userdonate.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 捐贈書籍
  hr.mb-5
  b-row
    b-col(cols="12")
      b-form(@submit.prevent="submit" @reset="reset")
        //- 名稱
        b-form-group.font-weight-bold.mb-4(
          label= "書本名稱"
          label-for= "book-name"
          :state="state.name"
          description="書本名稱不能為空"
        )
          b-form-input#book-name(
            v-model="form.name"
            type="text"
            required
            placeholder="請輸入書本名稱"
            :state="state.name"
          )
        //- 類別
        b-form-group.font-weight-bold.mb-4(
          label= "書本類別"
          label-for= "book-genre"
          :state="state.genre"
          description="請選擇書本類別"
        )
          b-form-select#book-genre(
            v-model.number="form.genre"
            required
            :state="state.genre"
          )
            option(value=1) 1.文學
            option(value=2) 2.雜誌
            option(value=3) 3.教科書
            option(value=4) 4.其他
        //- 說明
        b-form-group.font-weight-bold.mb-4(
          label= "書本說明"
          label-for= "book-description"
          :state="state.description"
          description="書本說明不能為空"
        )
          b-form-textarea#book-description(
            v-model="form.description"
            type="text"
            required
            placeholder="請輸入書本說明"
            :state="state.description"
          )
        //- img
        img-inputer(v-model="form.image" theme="dark" size="large" placeholder='點擊或拖曳選擇圖片' bottom-text="點擊或拖曳選擇圖片以修改").w-100
        //- 送出
        .text-center.my-4
              b-btn(variant="success" type="submit").w-25.mr-2 送出
              b-btn(variant="danger" type="reset").w-25 重置
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        description: '',
        genre: 1,
        image: null,
        from: this.$store.state.user.id
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        description: this.form.description.length === 0 ? null : true
      }
    }
  },
  methods: {
    reset () {
      this.form.name = ''
      this.form.description = ''
      this.form.genre = ''
      this.form.image = null
    },
    async submit () {
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        await this.axios.post('/products', fd, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '捐贈成功'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '捐贈失敗'
        })
      }
      this.form.name = ''
      this.form.description = ''
      this.form.genre = 1
      this.form.image = null
    }
  }
}
</script>
