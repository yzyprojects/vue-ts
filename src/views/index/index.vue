<template>
  <div class="home">
    <input type="text" v-model="title" @keyup.enter="inputChange">
    <div v-for="d in states.datas" :key="d.id">
       <Item :data="d" />
    </div>
    <div>==============vuex==========</div>
    <button @click="add">加</button>
     <button @click="minus">减</button>
     <div>{{Store.state.msIndex.number}}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import Item from '@/components/item.vue' // @ is an alias to /src
import Store from '@/store'
export default defineComponent({
    name: 'Home',
    components: {
        Item
    },
    setup () {
        const title = ref('')
        const states = reactive({
            datas: [
                {
                    id: new Date(),
                    name: '大众'
                },
                {
                    id:new Date(),
                    name: '奔驰'
                },
                {
                    id: new Date(),
                    name: '宝马'
                },
            ],
            Store
        })
        
        const inputChange = (val:string) => {
            const item = {
                id: new Date(),
                name: title.value
            }
            states.datas.push(item);
        }
        
        const add = () => {
            Store.dispatch('addNumber')
        }

        const minus = () => {
            Store.dispatch('minus')
        }

        return {
            states,
            inputChange,
            title,
            add,
            minus,
            Store
        }
    }
})
</script>
<style >
</style>