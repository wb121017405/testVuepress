module.exports = {
  title: "标题",
  description: "描述",
  // 引入百度统计
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d8a6fdbfb8332bed5afb8abbed2f572c";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  plugins: [
    [
      // 评论插件
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        options: {
          el: "#valine-vuepress-comment",
          appId: 'Your own appId',
          appKey: 'Your own appKey',
          meta:['nick','mail'],
          path:'<%- frontmatter.to.path %>',
          placeholder: "来喷我呀笨蛋！"
        }
      }
    ]
  ]
};
