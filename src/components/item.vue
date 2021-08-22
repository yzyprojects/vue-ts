<template>
  <div class="item-root-ele">
    {{data.name}}
  </div>
   <div>{{Store.state.msIndex.number}}</div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Store from '@/store'
export default defineComponent({
  name: 'Item',
  components: {

  },
  props: {
      data:{
          type: Object,
          default: {}
      }
  },
  setup () {
      const state = reactive({
          Store
      })

      return {
          Store
      }
    
  }
})
</script>
<style >
</style>