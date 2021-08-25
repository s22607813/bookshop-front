<template lang="pug">
b-container(fluid)#adminuserlist.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 會員管理
  hr.mb-5
  b-row
    b-col(cols="12")
      b-table(:items="users" :fields="fields" responsive).table-striped.table-bordered.text-left
</template>

<script>
export default {
  data () {
    return {
      users: [],
      fields: [
        {
          key: 'name',
          label: '會員暱稱'
        },
        {
          key: 'account',
          label: '會員帳號'
        },
        {
          key: 'email',
          label: '會員信箱'
        }
      ]
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users/all')
      this.users = data.result
    } catch (error) {
    }
  }
}
</script>
