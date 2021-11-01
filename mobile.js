/**
 * 移动端
 */
module.exports = {
    "development": [
        "chrome 58"
    ],
    "production": [
        ">1%",
        "iOS 8",
        "last 3 iOS versions",
        "ie 10",
        "since 2010"
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