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

/**
 * 用途： 获取都市类连载所有书籍
 */
export const getAllBooks = () => http(
    'get',
    '/book/by-categories?gender=male&type=hot&major=都市&minor=&start=0&limit=20'
)

/**
 * 用途： 获取奇幻完结所有书籍
 */
export const getQhuanBooks = () => http(
    'get',
    '/book/by-categories?gender=male&type=over&major=奇幻&minor=&start=0&limit=20'
)


/**
 * 用途： 获取仙侠完结所有书籍
 */
export const getXxiaBooks = () => http(
    'get',
    '/book/by-categories?gender=male&type=over&major=仙侠&minor=&start=0&limit=20'
)

/**
 * 用途： 获取青春校园所有书籍
 */
export const getSchoolBooks = () => http(
    'get',
    '/book/by-categories?gender=male&type=hot&major=都市&minor=青春校园&start=0&limit=20'
)

/**
 * 用途： 获取女生现代言情热门书籍
 */
export const getGhotBooks = () => http(
    'get',
    '/book/by-categories?gender=female&type=hot&major=现代言情&minor=&start=0&limit=20'
)

/**
 * 用途： 获取女生现代言情完结书籍
 */
export const getGfinishingBooks = () => http(
    'get',
    '/book/by-categories?gender=male&type=over&major=武侠&minor=&start=0&limit=20'
)

