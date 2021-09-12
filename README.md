## 个人信息

- 闫勃 / 男 / 1992
- 工作年限：6年
- 期望职位：后端研发工程师（基础架构方向）
- 期望城市：北京

---

## 联系方式

- 手机/微信：18519384536
- Email：saltbo@foxmail.com
- Blog：https://saltbo.cn
- Github：https://github.com/saltbo

---
## 技能清单

- 编程语言：Go/PHP/Js/Java/C/C#/C++
- Web框架：Gin/Geo/Yaf/Tp/Vue/iView/Element
- 存储相关：Mongo/MySQL/SQLite/Redis/Etcd/Consul
- 网络协议：HTTP/HTTPS/WebSocket/Vmess/Gossip/Raft
- CloudNative：APIGateway/Docker/K8S/Istio/Envoy
- CloudPlatform：阿里云/GoogleCloud/AWSCloud/Azure

---

## 工作经历

### 得到APP - Golang资深研发工程师（2015年6月 ~ 至今）

#### 职责业绩

1. 基于K8S的**Operator**研发了得到内部的微服务组件控制器，降低上层控制系统的复杂度，提升平台整体的稳定性
2. 基于**Tekton**研发了得到内部的CICD系统替代了Jenkins，解决了使用Jenkins时的单点问题，提升应用打包可靠性
3. 基于**eBPF**研发了一个类似**Kubectl Flame**的性能分析系统，可以在内部K8S平台上一键进行Pod级别的性能分析，有效帮助研发定位线上性能问题
4. 设计研发了一套类似**KubeVela**的应用描述文件，使业务研发人员不必编写与维护Dockerfile，只需要填写极少的应用描述字段即可完成应用的打包部署
5. 负责公司内部自研API网关的设计与研发，压测5x8C16G服务器最高可以达到21万QPS，高水平的支持了包括《罗振宇跨年演讲》在内的公司各种大型活动
6. 负责公司异步任务系统、通用上传服务等多个中间件项目的研发，完整参与了公司从单体架构向微服务架构转型的全过程，有力支持了微服务架构落地
7. 参与公司电商系统的设计与研发，负责商品、物流、异步任务和数据统计等多个模块的研发，成功将罗辑思维有赞店铺迁移回自研电商平台

---
## 项目经历

#### DCP平台的开发与维护

DCP是得到内部一套基于K8S的PaaS平台，它是一个面向业务研发人员的Devops平台，它集合了公司内部基础架构组向业务研发人员提供的所有能力。

工作内容：

- 负责DCP平台的需求收集整理，组织前后端与各子系统进行需求对接，推进日常版本迭代

#### K8S管理系统开发与维护

工作内容：

- 负责公司内部K8S集群的日常维护与管理
- 基于K8S的Operator研发得到内部的微服务组件控制器
- 设计与研发K8S管理系统配套的镜像构建系统
- 设计与构建得到内部的Docker基础镜像

#### API网关研发与维护

得到自研的网关脱胎于EaseGateway，我们保留了EaseGateway插件化的思路，同时将一些必备的插件固化到底层，从而做到简化配置的同时保留了可扩展性。在高可用方面，我们采用ETCD集群作为配置存储，网关每个节点watch配置的变更，这样网关集群可以做到无限水平扩展。

工作内容：

- 根据公司自身架构及业务需求进行自研版本网关的设计与研发。
- 根据公司业务需求完成API网关插件的设计与实现。
- 对网关性能进行压测优化，保障每年全链路压测及跨年演讲的平稳运行。
- 完成网关多机房部署的设计，支持公司私有云的建设工作。

#### 分布式任务调度系统

初期用于支持商城中订单30分钟自动关闭，后逐步完善为一个完整的异步任务调度系统，为公司内部所有项目提供异步调度能力。

工作内容：

- 独立负责异步任务调度系统的设计与研发
- 进行了多次重构，技术栈上从Swoole到Go; 消息队列上从Redis到RabbitMQ再到Kafka。

#### 生活作风电商平台

一个对标有赞的微信生态电商平台，后由于得到APP的诞生，公司将该电商平台的定位调整为企业内部自营商城，支持微信电商的同时为得到APP提供电商能力。

工作内容：

- 负责电商底层中商品模块的研发
- 参与电商底层中订单模块的研发
- 负责电商管理后台的设计与研发
- 负责商城上传服务的设计与研发
- 参与电商底层中微信模块的研发


---
## 教育经历

- 2012.09~2015.06：天津滨海职业学院 - 电子信息工程专业

---
## 开源项目和作品

### 开源项目

- [Zpan](http://github.com/saltbo/zpan)：一个基于云存储的私有云网盘系统
- [Uptoc](http://github.com/saltbo/uptoc)：一个用于将文件部署到云存储的cli工具
- [Bytom-Chrome-Extension](https://github.com/Bytom-Community/Bytom-Chrome-Extension):  比原链钱包（Chrome浏览器插件版）

### 技术文章

- [写在学习golang一个月后](https://www.jianshu.com/p/85cff688d02b)
- [后端开发写Vue（iView使用总结）](https://www.jianshu.com/p/816a77997b25)
- [基于RabbitMQ和Swoole实现的一个完整的异步任务系统](https://www.jianshu.com/p/91873a500296)
- [从HybridApp到ReactNative](https://www.jianshu.com/p/04593766df5e)
- [基于Swoole和Redis实现的并发队列处理系统](https://www.jianshu.com/p/54ffd360454f)

### 演讲和讲义

- 八里庄技术沙龙-12 期：[如何从零实现一个高性能的API网关 ](https://blog.luojilab.com/2019/08/14/dd-technical/ddgw/)
