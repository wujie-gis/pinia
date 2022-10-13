<template>
  2323
  <button @click="singleTest">单线程</button>
  <button @click="workerTest">多线程</button>
</template>
<script setup lang="ts">
const number = 20; // 运行次数
// 多线程测试
function workerTest() {
  console.log("%c 开始多线程测试 ", "color:#fff; background:#00897b ");
  const workerList = [];
  for (let i = 0; i < number; i++) {
    const workerItem = new Promise((resolve, reject) => {
      const myWorker = new Worker(new URL("./fb.worker.ts", import.meta.url));
      myWorker.postMessage({
        function: "fb",
        data: 43,
      });
      myWorker.onmessage = (e) => {
        resolve(e.data);
        // 关闭worker线程
        myWorker.terminate();
      };
    });
    workerList.push(workerItem);
  }
  console.time("worker多线程执行时间");
  Promise.all(workerList).then((res) => {
    console.log(res);
    console.timeEnd("worker多线程执行时间");
  });
}
function singleTest() {
  console.log("%c 开始单线程测试 ", "color:#fff; background:#00897b ");
  function fb(n: any): any {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fb(n - 1) + fb(n - 2);
  }
  console.time("单线程执行时间");
  //   for (let i = 0; i < number; i++) {
  //     const res = fb(43);
  //     console.log({
  //       data: res,
  //       name: "single test",
  //     });
  //     }
  new Promise((resolve) => {
    for (let i = 0; i < number; i++) {
      const res = fb(43);
      console.log({
        data: res,
        name: "single test",
      });
    }
    resolve(true);
  }).then((res) => {
    console.timeEnd("单线程执行时间");
  });
  //   console.timeEnd("单线程执行时间");
}

console.log(new URL("./fb.worker.ts", import.meta.url));
</script>
<style scoped></style>
