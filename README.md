# 个人信息

 - 闫勃 / 男 / 1992 
 - 专科/天津滨海学院/电子信息工程
 - 工作年限：5年
 - 技术博客：https://saltbo.cn
 - Github：https://github.com/saltbo
 - 期望职位：后端研发工程师（基础架构方向）
 - 期望城市：北京

---
# 联系方式

- 手机/微信：`echo 'MTg1MTkzODQ1MzYK' | base64 --decode`
- Email：saltbo@foxmail.com

---
# 技能清单

- 编程语言：Golang/PHP/Js/C/C++/Java
- Web框架：Gin/Geo/Tp/Yaf/Vue/iView/Element
- 存储相关：Mongo/MySQL/SQLite/Redis/Etcd/Consul
- 网络协议：HTTP/HTTPS/WebSocket/Vmess/Gossip/Raft
- CloudNative：APIGateway/Docker/K8S/Istio/Envoy
- CloudPlatform：阿里云/GoogleCloud/AWSCloud

---
# 工作经历

## 得到APP - Golang高级研发工程师(2017.09 - 至今)

### 自研微服务API网关

API网关一般作为系统与外界联通的入口，在微服务架构中，所有的客户端和消费端都通过统一的网关接入微服务，在网关层处理所有的非业务功能。得到自研的网关脱胎于EaseGateway，我们保留了EaseGateway插件化的思路，同时将一些必备的插件固化到底层，从而做到简化配置的同时保留了可扩展性。在高可用方面，我们采用ETCD集群作为配置存储，网关每个节点watch配置的变更，这样网关集群可以做到无限水平扩展。

工作内容： 
- 根据公司自身架构及业务需求进行自研版本网关的设计与研发。
- 根据公司业务需求完成API网关插件的设计与实现。
- 对网关性能进行压测优化，保障每年全链路压测及跨年演讲的平稳运行。
- 完成网关多机房部署的设计，支持公司私有云的建设工作。

我的收获：
- 深入学习了Gin框架的源码，自行实现了ServerMux，Gzip，JWT等中间件逻辑。
- 学习了Trie，基于Trie自行实现了可动态编辑的Router。
- 学习了Snowflake，基于Snowflake完成了分布式ID生成器的实现。
- 学习了加权轮训、哈希、一致性哈希等算法，完成了业务所需的复杂均衡功能。

技术分享：
- [【八里庄技术沙龙-12 期】如何从零实现一个高性能的API网关](https://blog.luojilab.com/2019/08/14/dd-technical/ddgw/)


### EaseGateway二次开发

EaseGateway是左耳朵耗子团队的网关产品，它是一个高度插件化可配置的API网关。由于公司做微服务架构早期没有API网关方向的技术积累，所以直接使用了EaseGateway。早期EaseGateway的高度可配置化导致易用性较差，所以由我负责研发了EaseGateway的控制面。同时，根据公司的实际情况，我们也对EaseGateway进行了深度的二次开发。

工作内容： 
- 独立负责EaseGateway控制面的设计与实现。
- 深入理解EaseGateway底层代码并根据公司自身需求对其进行二次开发。

我的收获：
- 学习了Java背景的开发人员是如何写Go语言代码的。
- 学习了分布式集群管理的知识，了解了分布式一致性协议2PC和最终一致性协议Gossip。
- 了解了一个API网关的内部组成结构，学会了如何开发一个API网关。


## 罗辑思维 - PHP中级研发工程师(2015.06 - 2017.08)

### 分布式任务调度系统

初期用于支持商城中订单30分钟自动关闭，后逐步完善为一个完整的异步任务调度系统，为公司内部所有项目提供异步调度能力。

工作内容： 
- 独立负责异步任务调度系统的设计与研发
- 从Swoole到Go; 从Redis到RabbitMQ再到Kafka。

我的收获：
- 完成了从PHP到Go语言的转型，利用Go语言替代Swoole完成了异步任务调度系统的重构。
- 了解了MQ的使用场景，掌握了RabbitMQ和Kafka的使用。
- 第一次尝试从架构设计上实现一个系统性能的提升。

相关文章：
- [基于Swoole和Redis实现的并发队列处理系统](https://www.jianshu.com/p/54ffd360454f)
- [基于RabbitMQ和Swoole实现的一个完整的异步任务系统](https://www.jianshu.com/p/91873a500296)

### 生活作风电商平台

一个对标有赞的微信生态电商平台，后由于得到APP的诞生，公司将该电商平台的定位调整为企业内部自营商城，支持微信电商的同时为得到APP提供电商能力。

工作内容： 
- 负责电商底层中商品模块的研发
- 负责电商管理后台的设计与研发
- 负责商城上传服务的设计与研发

我的收获：
- 第一次进入公司参与团队开发，了解了互联网公司的敏捷开发流程。
- 学会了svn和git的使用，能够熟练的参与到团队开发中去。
- 了解了一个电商系统的构成，独立完成了商城商品模块的开发。

---
# 开源项目和作品

## 开源项目
 - [Bytom-Chrome-Extension](https://github.com/Bytom-Community/Bytom-Chrome-Extension):  比原链钱包（Chrome浏览器插件版）
 - [Gofbot](https://github.com/saltbo/gofbot)：一个通用的请求转发机器人
 - [ZPan](http://github.com/saltbo/zpan)：一个基于云存储的私有云网盘系统
 - [UPToc](http://github.com/saltbo/uptoc)：一个用于将文件部署到云存储的cli工具

## 技术文章
- [Uptoc - 将你的Hugo静态博客部署到阿里云OSS上](http://saltbo.cn/post/hugo-uptoc-oss.html)
- [写在学习golang一个月后](https://www.jianshu.com/p/85cff688d02b)
- [后端开发写Vue（iView使用总结）](https://www.jianshu.com/p/816a77997b25)
- [基于RabbitMQ和Swoole实现的一个完整的异步任务系统](https://www.jianshu.com/p/91873a500296)
- [从HybridApp到ReactNative](https://www.jianshu.com/p/04593766df5e)
- [基于Swoole和Redis实现的并发队列处理系统](https://www.jianshu.com/p/54ffd360454f)

## 演讲和讲义
 - 八里庄技术沙龙-12 期：[如何从零实现一个高性能的API网关](https://blog.luojilab.com/2019/08/14/dd-technical/ddgw/)

---
# 自我评价

从2011年开始自学编程，近十年来从单枪匹马到进入公司团队，我积累了丰富的项目经历。在得到工作的五年多，我很有幸和公司共同成长。从svn到git，从PHP到Go语言，从业务开发到中间件研发，基于五年前自学能力的培养，我可以很轻松的完成技术栈的转换。我从不把自己限定为xx语言工程师，因为语言只是工具而已。

抛开语言来说，我对Web开发相关的技术了解的最深。由于有机会从零研发一个API网关，所以我对HTTP协议较为熟悉。同时在API网关研发时要求较高的性能，所以我对性能调优也较为熟悉。

基于API网关的研发经验，我对CloudNative很感兴趣。为了理解自己研发的API网关与CloudNative社区的网关产品有啥差别，我深入学习了Ambassador和Gloo，因此了解了Envoy的xDS协议。

---
# 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。
