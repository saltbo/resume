/**
 * JSON Resume 多岗位编译配置文件
 * 
 * 在这里定义你面向不同岗位的简历画像。
 * 运行 `pnpm build` 时，会根据此配置自动生成多份 HTML 和 PDF 简历。
 */
module.exports = {
  // 指定主简历文件（单数据源）
  master: 'resume.json',
  
  // 全局简历主题（指向我们本地 Fork 并进行了精美字体优化与一页纸排版微调的专属 Macchiato 主题 👑）
  theme: './theme', 
  
  // 岗位画像定义
  profiles: {
    // 岗位一：偏基础架构 & 平台工程 / DevOps 方向
    infra: {
      output: 'resume-infra', // 编译生成 dist/resume-infra.html 和 dist/resume-infra.pdf
      basics: {
        label: 'Senior Infrastructure & Platform Engineer',
        summary: 'Jasper is an experienced software engineer with over a decade in computer programming and the past seven years focused on cloud-native infrastructure and platform engineering. Highly proficient in designing and maintaining large-scale developer platforms, container ecosystems, and GitOps workflows using Kubernetes, Istio, ArgoCD, Knative, and serverless frameworks.'
      },
      // 仅保留包含 'infra' 标签的项目和专业技能
      tags: ['infra']
    },
    
    // 岗位二：AI Agentic Engineering（智能体工程）方向
    ai: {
      output: 'resume-ai', // 编译生成 dist/resume-ai.html 和 dist/resume-ai.pdf
      basics: {
        label: 'Senior AI Agentic Engineer',
        summary: 'Jasper is a seasoned software engineer and AI Agentic Engineer with over a decade of computer programming experience. Highly proficient in architecting and implementing autonomous AI agent workflows, multi-agent cooperative systems, semantic retrievers, RAG pipelines, and sandboxed tool-execution environments using LLMs, LangGraph, LlamaIndex, and vector databases.'
      },
      // 仅保留包含 'agentic' 标签的项目和专业技能
      tags: ['agentic']
    },
    
    // 岗位三：全栈开发（Full-Stack）方向
    fullstack: {
      output: 'resume-fullstack', // 编译生成 dist/resume-fullstack.html 和 dist/resume-fullstack.pdf
      basics: {
        label: 'Senior Full-Stack Engineer',
        summary: 'Jasper is an experienced senior full-stack engineer with over a decade in software development. Expert in building robust end-to-end applications, combining high-performance Go/Python microservices and custom API gateways with rich, modern frontend web user interfaces (React/TypeScript). Highly skilled in developer platform design and cloud-native application deployments.'
      },
      // 仅保留包含 'fullstack' 标签的项目和专业技能
      tags: ['fullstack']
    }
  }
};
