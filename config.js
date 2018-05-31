const CONF = {
    port: '5758',
    rootPathname: '/data/release/weapp',

    // 微信小程序 App ID
    appId: 'wxf48f7da34350545d',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: '123456',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'cn-north-1',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: 'car'
    },

    // 微信登录态有效期

    serverHost: '54.222.168.212',
    tunnelServerUrl: 'http://tunnel.ws.qcloud.la',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    wxLoginExpires: 7200,
    qcloudAppId: '1256688100',
    qcloudSecretId: 'AKID0ueDfwZ2rUvAGCdUu8c7e9UghZKP3va4',
    qcloudSecretKey: 'WvLVtAHEzYuAcy98DCIakicN1c6UhleR',
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
