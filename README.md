最近在用Vue做项目的时候，遇到前端页面的访问权限控制问题。参考了网上一些文章的思路，并且自己动手做了一个demo
应用场景如下：一个网站多个角色，例如admin（管理员）,super（超级客户）,guest（普通客户），不同权限的用户能访问的网页权限不同。
权限admin可看到admin.vue，SuperManager.vue，Guest.vue，权限super能看到SuperManager.vue,Guest.vue，而权限guest只能访问Guest。
实现思路如下：
1、无权限限制的网页路由在router中定义。
2、有权限限制的网页路由根据用户的权限在store中生成并存储，动态添加到router中。
3、主页（home.vue）从store中读取带权限路由信息，并渲染到页面上。

从login.vue登录，并获取到用户权限（登录验证），然后跳转到home.vue（主页），主页动态获取权限路由。

