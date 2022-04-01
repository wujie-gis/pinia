<template>
  <h1>{{ msg }}</h1>
  <div>组件中:{{ store.count }}</div>
  <div>年龄:{{ store.age }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../store/index";

const store = useStore();

defineProps<{ msg: string }>();

const count = ref(0);

const subscribe = store.$subscribe(
  (mutation, state) => {
    /*
      * mutation主要包含三个属性值：
      *   events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
      *   storeId：是当前store的id
      *   type：用于记录这次数据变化是通过什么途径，主要有三个分别是
      *         “direct” ：通过 action 变化的
                ”patch object“ ：通过 $patch 传递对象的方式改变的
                “patch function” ：通过 $patch 传递函数的方式改变的
      *
      * */
    // 我们就可以在此处监听store中值的变化，当变化为某个值的时候，去做一些业务操作之类的
    console.log(mutation, state, 2222);
  },
  { detached: false, immediate: true }
); //第二个参数options对象，是各种配置参数
//detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
// 如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效
//参数还有immediate，deep，flush等等参数 和vue3 watch的参数是一样的，多的就不介绍了，用到再看文档吧

// 停止订阅
// subscribe()
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
