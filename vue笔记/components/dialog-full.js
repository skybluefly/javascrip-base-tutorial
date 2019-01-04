<template>
  <div class="dialog-full" v-model="show" :class="{active:this.show}" :style="{zIndex:this.show? '1000' : '-1'}">
    <div class="v-dialog  v-dialog--fullscreen" >
        <div class="head">
          <p @click="close" class="return"> <i class="el-icon-close"></i> 返回</p>

        </div>
        <div class="content">
          <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dialog-full",
        model:{
          prop:'value',
          event:'change'
        },
        data() {
          return {
            show: this.value
          }
        },
        props: {
          value: Boolean,
        },
        watch: {
          value(newVal, oldVal) {
            this.show = newVal;
          },
          show(newVal, oldVal) {
            this.$emit('change', newVal);
          },
        },
        methods:{
          close(){
            this.show = false
          },
          action(){
            this.show = false
          }
        }
    }
</script>

<style lang="less" scoped>
  .dialog-full{
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: fixed;
    transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    z-index: 6;
    outline: none;
    background-color: #fff;
    transform: translateY(-100%);
    top:0;
    &.active{
      transform: translateY(0);
    }
  }
  .v-dialog--fullscreen {
    border-radius: 0;
    margin: 0;
    height: 100%;
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
  }
  .v-dialog {
    overflow-y: auto;
    pointer-events: auto;
    width: 100%;
    z-index: inherit;

  }
  .head{
    background-color: #348EED;
    height: 64px;
    line-height: 64px;
    color:#fff;
    padding:0 24px;
    font-size: 18px;
    .return{
      cursor: pointer;
      float: left;
    }
    .action{
      float: right;
      cursor: pointer;
    }
  }
  .content{
    width: 1200px;
    margin: 0 auto;
  }
</style>
