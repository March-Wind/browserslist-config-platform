/**
 * PC
 */
module.exports = {
  development: ["last 2 versions"],
  production: [
    ">1%", // 市占率超过1%的浏览器
    "IE 11", // 兼容IE 11就是为了es6转es5 因为现在用户使用的浏览器很多都支持了es6
    "since 2015",
    "not dead", // 24个月内没有官网支持或更新的浏览器
  ],
};
