<template>
  <div class="content">
    <MySkills />

    <h2>Let's connect</h2>
    <p>
     我是一个自学计算机的大学生 希望可以和大家分享我的知识 简单说说我的个人的学习路线吧
    </p>
    <p>
      最初喜欢上计算机可以说离不开算法这本书---<a href="https://item.jd.com/11098789.html">算法(第四版)</a> 书中的算法带给了我足够的思维上的冲击 算法的世界是纯净的 也是因为这本书  我开始在👉<a href="https://leetcode-cn.com/u/wo-jiao-sha-ru/">leetcode（我的主页）</a>坚持刷算法题 因为一开始接触的编程语言是java （虽然高中那会学过c语言 但是在商业环境中c语言的生态真的很差 嵌入式开发等底层编程又没时间系统去学 我的编程事业就相当于搁置了）
      大家都知道java是一个编译型语言 强类型语言 严格的类型检查 真的很费代码 coding efficiency真的不高 我觉得除非大型项目像spring那样的 一般真的用不上java 而且我一直也想从oop转fp(函数式编程) 于是我开始接触了脚本（动态）语言 js和python 对于 js 正如你看到的我的个人博客就是基于
      vue.js 和 nuxt.js 开发的 我也会在GitHub repo中将其开源 feel free to use
      而python通常我会用它来写网络爬虫 这里推荐一本书《Python-3反爬虫原理与绕过实战》可以加我微信找我要电子书哦🙌🏿 同时我自己也在学习神经网络 python的科学库很丰富 像numpy 神经网络框架也很完善像前端的keras 后端引擎tensorflow Theano CNTK等
      在这里插一句 我的语言基础包括设计模式基本上都是从《Head First系列》学到的 对初学者很友好的编程书！
    </p>
    <p>
      我也算是一名入门级的hacker 在笔记本上折腾过半年的Linux(kali,ubuntu) 踩过不少坑 tcp/ip OSI参考模型 这些网络基础知识也算是懂个七八分 操作系统层面还只能停留在理论 基本的攻击类型和防御手段算是都有所实践 nmap,ettercap,wireshark,hping3
      等工具 作为一名hacker都是最基本的 在这里推荐一本书--《渗透测试实战第三版(红队版)》For the record,今年立个小目标 搭建一个mini的homelab 当然企业级服务器就别想了（没钱）
    </p>
    <p>
      总之 人生最大的乐趣就在于折腾 希望可以找到和我一样Geek的bro 以后也会定期发布原创的技术类文章 也希望我的博客可以将我的知识分享给大家😇!
    </p>
    <social-media/>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'About Me',
        meta: [
          { hid: 'description', name: 'description', content: 'Some information about me' },
          { hid: 'og:description', name: 'og:description', content: 'Some information about me' },
          { hid: 'og:type',  name: 'og:type', content: 'blog' },
        ]
      }
    },
    transition: {
      name: 'fade',
      mode: 'out-in'
    }
  }
</script>
