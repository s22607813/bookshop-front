<template lang="pug">
b-container(fluid)#admin.page
  b-row
    b-col.sidebar(cols="12" md="2").position-fixed.d-flex.justify-content-between.justify-content-md-start.align-items-center.flex-md-column.px-0.border-bottom
      b-btn.btn(to='/admin' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-4.px-0 會 員 管 理
      b-btn.btn(to='/admin/adminorders' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-3.px-0 訂 單 管 理
      b-btn.btn(to='/admin/admindonatelist' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-3.px-0 審 核 清 單
      b-btn.btn(to='/admin/adminproducts' exact exact-active-class="active" variant="" size="lg").mx-2.mt-md-3.px-0 書 籍 管 理
  b-row.down.offset-md-2
    vue-page-transition(name="fade-in-left").w-100
      router-view
</template>

<script>
export default {
}
</script>
