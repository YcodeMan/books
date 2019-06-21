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
 * 用途： 获取文章的类别下的小分类
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
    '/book/548d9c17eb0337ee6df738f5'
) 

/**
 * 用途： 获取书本评论
 * book: 书本id
 * limit 数据条数
 */
export const getBookComment = () => http(
    'get',
    '/post/review/best-by-book',
    { book: '5b335b9296db9d2c6f3db6de', limit: 10}
) 

/**
 * 用途： 获取所有类别
 *  @param method  
 *  @param url
 *  @param data
 *  @return example  "male":[{"name":"玄幻","bookCount":578792,"monthlyCount":22549,"icon":"/icon/玄幻_.png"
 */
export const getCategory = () => http(
    'get',
    '/cats/lv2/statistics'
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

// 漫画专区

/**
 * 用途： 获取热血类漫画
 */
export const getHotBloodBooks = () => http(
    'get',
    '/book/by-categories',
    {gender:"picture",type:undefined,major:"热血",minor:"",start:0,limit:20}
)
/**
 * 用途： 获取搞笑类漫画
 */
export const getLaughBooks = () => http(
    'get',
    '/book/by-categories',
    {gender:"picture",type:undefined,major:"搞笑",minor:"",start:0,limit:20}
)

/**
 * 用途： 获取恋爱类漫画
 */
export const getLoveBooks = () => http(
    'get',
    '/book/by-categories',
    {gender:"picture",type:undefined,major:"恋爱",minor:"",start:0,limit:20}
)

/**
 * 用途： 获取魔幻类漫画
 */
export const getMagicBooks = () => http(
    'get',
    '/book/by-categories',
    {gender:"picture",type:"over",major:"魔幻",minor:"",start:0,limit:20}
)

