<template lang="pug">
b-container(fluid)#user.page
  b-row
    b-col.sidebar(cols="12" md="2").position-fixed.d-flex.justify-content-between.justify-content-md-start.align-items-center.flex-md-column.px-0.border-bottom.border-warning
      b-btn.btn(to='/user' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-4.px-0 會 員 資 料
      b-btn.btn(to='/user/userdonate' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-3.px-0 捐 贈 書 籍
      b-btn.btn(to='/user/userdonatelist' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-3.px-0 捐 贈 紀 錄
      b-btn.btn(to='/user/userboughtlist' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-3.px-0 收 購 紀 錄
  b-row.down.offset-md-2
    vue-page-transition(name="fade-in-left").w-100
      router-view
</template>

<script>
export default {
}
</script>
