import config from './config';

/**
 * 根据设置判断使用的接口来源，弱网络接口不存在则直接使用本地接口
 * @param {String} local 本地接口
 * @param {String} net 网络接口
 */
function l(local, net) {
  if (undefined === net) {
    return local;
  }
  return config.DATA_INTERFACE_LOCAL ? local : net;
}
// const requestUrl = "http://192.168.1.235:8889";
// const requestUrl = 'http://vpn.zhaohu.co:3009';

// 新地址
const requestUrl = 'http://vpn.zhaohu.co:38099';

export default {
  baseURL: l('', ''),

  /**
   * 登录
   */
  login: l('/api/login', requestUrl + '/login/checkLogin'),
  /**
   * 树状图
   */
  tree: l('/api/tree', requestUrl + '/tree'),
  /**
   * 指标
   */
  indicator: l( '/api/indicator', requestUrl + '/indicator'),
  /**
   * 菜单
   */
  navigation: l('/api/navigation', requestUrl + '/navigation'),
  /**
   * 指标历史
   */
  indicatorHistory: l(
    '/api/indicator-history', requestUrl + '/indicator-history' ),
  /**
   * 场景类型
   */
  // sceneType: l('/api/scene-type', requestUrl + '/scene-type'),

  sceneType: l('/api/tree', requestUrl + '/tree'),
  /**
   * 新增场景类型
   */
  sceneCategory:l(
    '',requestUrl + '/scene_category'
  ),
  /**
   * 上传新增场景信息
   */
  sceneTool :l('',requestUrl + '/scene_tool'),
  /**
   * 上传文件
   */
  sceneGuestBinding:l('', requestUrl + '/scene_guest_binding'),

  /**
   * 获取绘制场景信息
   * 
   */
   sceneDetail:l('',requestUrl + '/scene_detail'),
   /**
   * 地区指标排名及明细
   */
  synthesCount: l(
    '/api/synthes-count',
    'http://192.168.1.153:8096/synthes-count'
  ),
  /**
   * 画像
   */
  property: l('/api/property', requestUrl + '/property'),

  /**
   * 场景列表
   */
  sceneData: l('', requestUrl + '/scene_data'),

  /**
   * 地图染色
   */
  indicatorDeying: l('', requestUrl + '/deying'),

  // more data apis
  config: l('/config', requestUrl + '/config'),
  indicatorList: l('/indicator-list', requestUrl + '/indicators'),

  /**
   * 地图多边形数据
   */
  // mapPolygonData: l('', requestUrl + '/border/find_new_child_regions'),
  mapPolygonData: l('', requestUrl + '/region/query'),

  mapVisualLayer: l(''),
  mapRegionalData: l('', '/border/getRegionalData'),

  /**
   * 地图场景数据
   */
  mapSceneData: l('', requestUrl + '/scene_data'),

    /**
     * 取id和折线图、柱状图的对应关系
     */
  idToChart:l('', requestUrl + '/config/query'),
  /**
   * 精确营销
   */

  Marketing:l('', requestUrl + '/accurate_marketing'),
  // 指标绑定
  targetSave:l('', requestUrl + '/scene_category_binding/save'),

  /**
   * 网格画像客群
   */
  customerCounts : l( '/api/customer', requestUrl + '/customer_count' ),
  // 搜索
  search : l ( '/api/search', requestUrl + '/search' ),
  
  
  /**
   * 登录
   */
  user: l('/api/user', requestUrl + '/user'),
};
