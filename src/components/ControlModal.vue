<template>
  <button
    @click="isOpen = true"
    class="btn btn-sm btn-success mb-2">
    Open Modal
  </button>
  <modal
    @on-close="isOpen = false"
    :isOpen="isOpen"/>
</template>


<script>
  import Modal from '@/components/shared/Modal'
  export default {
    components: {
      Modal
    },
    data() {
      return {
        isOpen: false
      }
    }
  }
</script>
