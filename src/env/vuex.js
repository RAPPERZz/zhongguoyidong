import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /** 记录状态 **/
    /**
     * 状态
     * analyze, edit, manage
     */
    mode: '',
    /**
     * 左侧组件组
     */
    group_com_left: '',

    /** 记录内容的选择情况 **/
    /**
     * 数组或对象或字符串，当前区域或已选择的多个区域
     */
    area: '',
    /**
     * 选择的区域
     */
    area_select : '',
    /**
     * 数组或字符串，指标
     */
    indicator : '',
    /**
     * 数组或字符串，直接关联数据的指标级别
     */
    indicator_lv1: '',
    /**
     * 数组或字符串，lv1指标父级
     */
    indicator_lv2: '',
    /**
     * 数组或字符串，lv2指标父级
     */
    indicator_lv3: '',
    /**
     * 数组或字符串，lv3指标父级
     */
    indicator_lv4: '',
    /**
     * 指标列表当前展示的指标
     */
    indicator_focus : '',
    /**
     * 数组或字符串，当前场景类型或已选择的多个场景类型
     */
    scene_type: [],
    /**
     * 数组或对象或字符串，选中的场景或已选择的多个场景
     */
    scene: '',

    /** 记录组件的开关情况 **/
    /**
     * lv2指标
     * 指标对标面板组件
     */
    com_indicator_pane: false,
    /**
     * lv3指标
     * 指标对标列表组件
     */
    com_indicator_list: false,
    /**
     * lv2指标
     * 指标展示设置组件
     */
    com_indicator_setter: false,
    /**
     * 新增场景类型
     */
    com_new_add_scene:false,
    /**
     * 场景绘制
     */
    com_scene_draw:false,
    /**
     * 绑定指标
     */
    com_binding_Indicator:false,

    /**
     * 精准营销面板
     */
    com_accurate_marketing_pane : false,
    /**
     * 精准营销入口
     */
    com_accurate_marketing_enter : false,
    /**
     * 网格画像
     */
    com_area_profile : false,
    /**
     * 图例
     */
    com_color_panel : false,

    // 新增的部分
    /**
     * 客群筛选
     */
    crowd_filter : {},
  

    /**
     * 绘制工具状态
     */
    drawingType:'',
    /**
     * 绘制完成，数据提交成功，把绘制的边界绘制在地图上
     */
    sceneShowpointData:{},
    /**
     * 点击海量点显示绘制边界的信息
     */
    scenePolyedStatus:{},
    /**
     * 右键菜单
     */
    contextMenustatus:'',
    /**
     * 边界中心点
     */
    lnglat:'',
    /**
     * marker
     */
    isMarker:false,
    /**
     * 选择的时间
     */
    selectedDate:"",

    /**
     * 当前市县名
     */
    areaTitle:"湖州市",
    /**
     * 全局的tags存的值
     */
    tags:[],
    /**
     * 左侧客群勾选时存储的值
     */
    allCustomerGroup:[],
    /**
     * 面板为指标时触发数据对标
     */
    indicatorPaneFlag:false,

    boundaryData:'',

    //绘制地图边界的类型
    mouseToolType:'', 
    // markercoordinate
    markercoordinate:'',
     //精确营销
     marketing:'',
     marketing_one:'',
     marketingout:'',
     marketing_show:'',
     marketing_data:{},
     marketingtype_show:'',
     marketingtype_content:[],
     //场景点信息
     scene_focus:'',
     add_scene:{},
     scene_edit:{},

     zxcv1:'',
  },
  mutations: {
    zxcv(state, payload) {
      state.zxcv1 = payload;
      console.log(payload)
    },
    GROUP_COM_LEFT(state, payload) {
      state.group_com_left = payload;
    },
    AREA(state, payload) {
      state.area = payload;
    },
    AREA_SELECT( state, payload ) {
      state.area_select = payload;
    },
    INDICATOR(state, payload) {
      state.indicator= payload;
    },
    INDICATOR_LV1(state, payload) {
      state.indicator_lv1 = payload;
    },
    INDICATOR_LV2(state, payload) {
      state.indicator_lv2 = payload;
    },
    INDICATOR_LV3(state, payload) {
      state.indicator_lv3 = payload;
    },
    INDICATOR_LV4(state, payload) {
      state.indicator_lv4 = payload;
    },
    INDICATOR_FOCUS(state, payload) {
      state.indicator_focus = payload;
    },
    SCENE_TYPE(state, payload) {
      state.scene_type = payload;
    },
    SCENE(state, payload) {
      state.scene = payload;
    },
    COM_INDICATOR_PANE(state, payload) {
      state.com_indicator_pane = payload;
    },
    COM_INDICATOR_LIST(state, payload) {
      state.com_indicator_list = payload;
    },
    COM_INDICATOR_SETTER(state, payload) {
      state.com_indicator_setter = payload;
    },
    COM_NEW_ADD_SCENE(state,payload){
      state.com_new_add_scene = payload;
    },
    COM_SCENE_DRAW(state,payload){
      state.com_scene_draw = payload;
    },
    COM_BINDING_INDICATOR(state,payload){
      state.com_binding_Indicator = payload;
    },
    COM_ACCURATE_MARKETING_PANE ( state, payload ) {
      state.com_accurate_marketing_pane = payload;
    },
    COM_ACCURATE_MARKETING_ENTER ( state, payload ) {
      state.com_accurate_marketing_enter = payload;
    },
    COM_AREA_PROFILE ( state, payload ) {
      state.com_area_profile = payload;
    },
    COM_COLOR_PANEL ( state, payload ) {
      state.com_color_panel = payload;
    },
    RESET(state, payload) {
      for (let k in state) {
        state[k] = undefined !== payload[k] ? payload[k] : state[k];
      }
    },

    SELECTEDDATE(state, payload){
        // 把日期控件默认的yyyy/mm/dd替换为yyyy-mm-dd格式
        payload = payload.replace(/\//g,"-");
        state.selectedDate = payload;
    },

    ALLCUSTOMERGROUP(state, payload){
      state.allCustomerGroup = payload;
    },

    AREATITLE(state, payload){
        state.areaTitle = payload;
    },

    TAGS(state, payload){
      state.tags = payload;
    },
    /**
     * 
     * @param {*} state 
     * @param {*} payload 
     */
    contextMenu(state,payload){
      state.contextMenustatus = payload;
      console.log(payload)
    },
    /**
     * 
     * @param {*} state 
     * @param {*} payload 
     * 场景绘制状态
     */
    setDrawingtool(state,payload){
      state.drawingType = payload;
    },
    // 
    /**
     * 绘制结束，设置海量点相关数据，渲染边界；
     * 地图组件监听sceneShowpointData
     * 相关参数: 组件addSceneinfo
     * @param {*} state 
     * @param {type:Object;} payload 
     */
    setSceneShowpoint(state,payload){
      state.sceneShowpointData = payload;
    },
  
    // 经纬度
    setLngLat(state,payload){
      state.lnglat = payload;
    },
    setMarker(state,payload){
      state.isMarker = payload;
    },
    // 设置边界
    setboundaryData(state,payload){
      state.boundaryData = payload;
    },
    /**
     * 
     * @param {*} state 
     * @param {type:Object} payload 
     */
    setScenePolyedStatus(state,payload){
      state.scenePolyedStatus = payload;
    },
    // marker坐标
    setMarkercoordinate(state,payload){
      state.markercoordinate = payload;
    },
    //精确营销
    MARKETING(state, payload) {
      state.marketing = payload;
    },
    MARKETINGOUT(state, payload) {
      state.marketingout = payload;
    },
    MARKETING_ONE(state,payload){
      state.marketing_one = payload;
    },
    MARKETING_SHOW(state,payload){
      state.marketing_show = payload;
    },
    MARKETINGTYPE_SHOW(state,payload){
      state.marketingtype_show = payload;
    },
    MARKETINGTYPE_CONTENT(state,payload){
      state.marketingtype_content = payload;
      console.log(payload)
    },
    SCENE_FOCUS(state,payload){
      state.scene_focus = payload;
    },
    ADD_SCENE(state,payload){
      state.add_scene = payload;
      console.log(payload)
    },
    // 新增场景
    SCENE_EDIT ( state, payload ) {
      state.scene_edit = payload;
      console.log(payload)
    },
    INDICATORPANEFLAG(state,payload){
      state.indicatorPaneFlag = payload;
    },
  }
});
