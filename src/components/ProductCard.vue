<template lang="pug">
.card(:title="product.name").product-card.mt-2.mb-1.py-3
  .card-head.text-center
    img(:src="product.image")
  .card-body.pb-1
    h4.card-title.mb-3.text-secondary {{ product.name }}
    h6.card-subtitle.text-muted.mb-2 {{ '捐贈者：'+ product.from.name }}
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
