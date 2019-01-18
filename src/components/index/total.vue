<template>
<div id="total">
  <div class="index_card_title">
      <h5 class="">总体情况</h5>
      <i class="icon font_family icon-yema-you"></i>
  </div>
  <div class="items">
    <div class="item blue">
      <i class="icon font_family icon-moxing-"></i>
        <div class="num">
          <span>88</span>
          <p>模型数量</p>
        </div>
    </div>

    <div class="item yellow">
      <i class="icon font_family icon-moxing-"></i>
        <div class="num">
          <span>88</span>
          <p>已评论数</p>
        </div>
    </div>

    <div class="item green">
      <i class="icon font_family icon-moxing-"></i>
        <div class="num">
          <span>88</span>
          <p>模型数量</p>
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'template',
  components: {
  },
  data(){
    return{
      value: [],
    }
  },
  computed:{
    //计算属性
  },
  methods:{
    //定义函数
  },
  //vue的生命周期钩子函数
  beforeCreate(){
    //组建实例被创建，组建属性计算之前
  },
  created(){
    //组建实例创建完成，属性已绑定，但DOM还未生成
  },
  beforeMount(){
    //模版编译挂载之前
  },
  mounted(){
    //模板编译挂载之后
  },
  activated(){
    //keep-alive,组件被激活时调用
  },
  deactivated(){
    //keep-alive,组件被移除时调用
  },
  beforeDestory(){
    //组件被销毁前调用
  },
  destoryed(){
    //组件被销毁后调用
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/css/styles.less';
#total{
  height: 270px;
  .card;
  .items{
    .item{
      padding: 10px 0;
      display: flex;
      align-items: center;
      i{
        font-size: 36px;
      }
      .num{
        margin-left: 30px;
        span{
          font-size: 28px;
          font-weight: 600;
        }
        p{
          font-size: 14px;
          color:#666666;
        }
      }
    }
  }
}
</style>
