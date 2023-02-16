## 个人信息

- 闫勃 / 男 / 1992
- 工作年限：8 年
- 期望职位：资深研发工程师（基础架构方向）
- 期望城市：北京
- 手机/微信：18519384536
- Email：saltbo@foxmail.com
- Github：https://github.com/saltbo

---

## 个人简介

- 多年云原生领域从业经验，Kubernetes 和 Istio 开源社区成员。
- 拥有多种基架平台的开发经验，主导设计并实现了容器平台、任务调度平台、API 网关平台、事件平台、FaaS 平台、ServiceMesh 平台等。
- 开源爱好者，熟悉开源社区，贡献过的项目包括不限于 k8s、istio、envoy、fission、lima、minikube 等。
- 具备高并发应用开发经验，在得到作为 API 网关负责人期间多年为《罗振宇跨年演讲》提供技术支撑。
- 经历过从传统单体架构转型微服务架构过程，熟悉微服务架构体系及相关中间件技术，熟悉服务治理相关内容。
- 具备电商系统开发经验，熟悉电商系统各个模块设计及实现

---

## 技能清单

- 精通 API 网关、内网穿透等网络代理相关技术
- 精通 K8S Operator 的设计与研发
- 熟悉 OAM 和 Kubevela，进行过基于 Kubevela 的扩展开发工作
- 熟悉 Knative、Fission、OpenFunction 等 Serverless 框架
- 了解 Tekton、Argo Workflow 等工作流引擎
- 了解 FluxCD、ArgoCD 等 GitOps 框架
- 了解 Prometheus、OpenTelemetry、Loki 等可观测性组件

---

## 工作经历

### 理想汽车 - Java 高级研发工程师（2021 年 11 月 ~ 至今）

#### 函数平台

1. 基于 knative-eventing 的事件平台开发，在公司内部推动落地事件驱动架构（EDA)。
2. 基于 fission 的 FaaS 平台开发，为公司内部研发提供了便捷高效的函数平台。

#### 服务治理平台

1. 基于 istio 的 servicemesh 平台开发，目标是为公司内部多语言栈提供统一的服务治理能力。
2. 开发了 Golang 的服务治理 SDK，方便统一公司内部所有 Go 语言项目的服务治理能力。

### 得到 APP - Golang 资深研发工程师（2015 年 6 月 ~ 2021 年 11 月）

#### K8S 管理系统

1. 基于 K8S 的**Operator**研发了得到内部的微服务组件控制器，降低上层控制系统的复杂度，提升平台整体的稳定性
2. 基于**Tekton**研发了得到内部的 CICD 系统替代了 Jenkins，解决了使用 Jenkins 时的单点问题，提升应用打包可靠性
3. 基于**eBPF**研发了一个类似**Kubectl Flame**的性能分析系统，可以在内部 K8S 平台上一键进行 Pod 级别的性能分析，有效帮助研发定位线上性能问题
4. 设计研发了一套类似**KubeVela**的应用描述文件，使业务研发人员不必编写与维护 Dockerfile，只需要填写极少的应用描述字段即可完成应用的打包部署

#### API 网关系统

1. 负责公司内部自研 API 网关的设计与研发，作为整个公司级别的线上流量入口承担了最大的流量
2. 压测 5x8C16G 服务器最高可以达到 25 万 QPS，高水平的支持了包括《罗振宇跨年演讲》在内的公司各种大型活动

#### 罗辑思维电商平台

1. 参与公司电商系统的设计与研发，负责商品、物流、异步任务和数据统计等多个模块的研发，成功将罗辑思维有赞店铺迁移回自研电商平台
1. 负责公司异步任务系统、通用上传服务等多个中间件项目的研发，完整参与了公司从单体架构向微服务架构转型的全过程，有力支持了微服务架构落地

---

## 开源项目和作品

### 开源项目

- [Kiae](http://github.com/kiaedev/kiae)：一个基于 Kubernetes 和 Istio 的云原生应用开发平台
- [Seenvoy](https://github.com/bonaysoft/seenvoy): 一个 Envoy 配置和关系可视化工具
- [Rslocal](https://github.com/bonaysoft/rslocal): 一个使用 rust 基于 grpc 实现的类似 ngrok 和 frp 的内网穿透工具
- [Zpan](http://github.com/saltbo/zpan)：一个基于云存储的私有云网盘系统
- [Uptoc](http://github.com/saltbo/uptoc)：一个用于将文件部署到云存储的 cli 工具
- [Bytom-Chrome-Extension](https://github.com/Bytom-Community/Bytom-Chrome-Extension): 比原链钱包（Chrome 浏览器插件版）

### 技术文章

- [在 K8S 中一个网络请求是如何到达应用的](https://saltbo.cn/posts/network-in-k8s.html)
- [K8S 的 client-go 与 informer 机制](https://saltbo.cn/posts/client-go-&&-informer.html)
- [写在学习 golang 一个月后](https://www.jianshu.com/p/85cff688d02b)
- [后端开发写 Vue（iView 使用总结）](https://www.jianshu.com/p/816a77997b25)
- [基于 RabbitMQ 和 Swoole 实现的一个完整的异步任务系统](https://www.jianshu.com/p/91873a500296)
- [从 HybridApp 到 ReactNative](https://www.jianshu.com/p/04593766df5e)
- [基于 Swoole 和 Redis 实现的并发队列处理系统](https://www.jianshu.com/p/54ffd360454f)

### 演讲和讲义

- 八里庄技术沙龙-12 期：[如何从零实现一个高性能的 API 网关 ](https://blog.luojilab.com/2019/08/14/dd-technical/ddgw/)

---

## 教育经历

- 2012.09~2015.06：天津滨海职业学院 - 电子信息工程专业
