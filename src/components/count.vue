<template>
  <div class="hello">
    <h1>count</h1>
    <h2>count:<span class="count"> {{ count }}</span></h2>
    <button @click="actionIncrease"> + </button>
    <button @click="actionDecrease"> - </button>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    computed: {
      // ...mapGetters 為 ES7 寫法
      ...mapGetters({
        // getCount return value 將會存在別名為 count 的 data 上
        count: 'getCount',
      }),
    },
    methods: {
      ...mapActions([
        'actionIncrease',
        'actionDecrease',
      ])
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }

</style>
