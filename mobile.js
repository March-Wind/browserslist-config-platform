/**
 * 移动端
 */
module.exports = {
    "development": [
        "chrome 58"
    ],
    "production": [
        ">1%",// 市占率超过1%的浏览器
        "iOS 8", // 监听IOS 8的系统
        "last 3 iOS versions", // 最近的三个
        "ie 10",
        "since 2010",
        "not dead", // 24个月内没有官网支持或更新的浏览器
    ]
}

/**
 * 第二个移动端
 */
const second = [
    // 这个只用最新的
    'last 3 ChromeAndroid major versions',
    'last 2 iOS major versions',
    // 这个标识最多的
    'ChromeAndroid >= 37',
    'iOS >= 11'
];