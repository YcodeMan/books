import http from '@utils/http'

/**
   *  用途：获取分类榜单
   *  @param method  
   *  @param url
   *  @param data
   *  @return example  title":"追书最热榜 
   */
export const getCrunchies = () => http(
    'get',
    'ranking/gender'
)

/**
 * 用途： 获取文章的类别
 *  @param method  
 *  @param url
 *  @param data
 *  @return example  "major":"玄幻","mins":['东方玄幻','异界大陆','异界争霸','远古神话']
 */
export const getTitleClass = () => http(
    'get',
    '/cats/lv2'
)
/**
 * 用途： 获取书本详细信息
 * 
 */
export const getBookDetail = () => http(
    'get',
    '/book/57206c3539a913ad65d35c7b'
) 