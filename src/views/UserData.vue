<template lang="pug">
b-container(fluid)#userdata.text-dark.px-5
  b-row
    b-col
      h3.text-left.mt-4
        span.font-weight-bold.title 會員資料
  hr.mb-5
  b-row
    b-col(cols="12")
      table(role="table").table.b-table.table-striped.table-bordered.text-left
        tbody(role="rowgroup")
          tr(role="row")
            td(aria-colindex="1" role="cell" class="")
              div.font-weight-bold 暱稱
            td(aria-colindex="2" role="cell" class="")
              div {{ this.users.name }}
          tr(role="row")
            td(aria-colindex="1" role="cell" class="")
              div.font-weight-bold 帳號
            td(aria-colindex="2" role="cell" class="")
              div {{ this.users.account }}
          tr(role="row")
            td(aria-colindex="1" role="cell" class="")
              div.font-weight-bold 信箱
            td(aria-colindex="2" role="cell" class="")
              div {{ this.users.email }}
          tr(role="row")
            td(aria-colindex="1" role="cell" class="")
              div.font-weight-bold 捐贈數量
            td(aria-colindex="2" role="cell" class="")
              div {{ this.donateAmount  }} 本
          tr(role="row")
            td(aria-colindex="1" role="cell" class="")
              div.font-weight-bold 已審核
            td(aria-colindex="2" role="cell" class="")
              div {{ this.changeAmount }} 本
</template>

<script>
export default {
  name: 'UserData',
  data () {
    return {
      users: [],
      donateAmount: '',
      changeAmount: ''
    }
  },
  async mounted () {
    try {
      // 使用者資料
      const { data } = await this.axios.get('/users/' + this.$store.state.user.id)
      this.users = data.result
      // 使用者捐贈資料
      const donateAmount = await this.axios.get('/products/from/' + this.$store.state.user.id, {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.donateAmount = donateAmount.data.result.length
      const changeAmount = donateAmount.data.result.filter(amount => amount.checked
      ).length
      this.changeAmount = changeAmount
      console.log(data.result)
      console.log(changeAmount)
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得資料失敗'
      })
    }
  }
}
</script>
