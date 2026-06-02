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
        summary: 'Product-minded platform engineer focused on turning infrastructure complexity into useful developer-facing systems. Strongest at driving work from architecture through implementation, deployment, and verification, with experience building large-scale internal platforms for function compute, service governance, application delivery, and API traffic.'
      },
      // 仅保留包含 'infra' 标签的项目和专业技能
      tags: ['infra']
    },
    
    // 岗位二：AI Agentic Engineering（智能体工程）方向
    ai: {
      output: 'resume-ai', // 编译生成 dist/resume-ai.html 和 dist/resume-ai.pdf
      basics: {
        label: 'Senior Platform Engineer, AI Agentic Tools',
        summary: 'Product-minded platform engineer applying agentic systems to practical software development workflows. Strongest fit is building multi-agent collaboration tools that help AI coding agents plan, execute, review, and ship project iterations while keeping human product direction visible.'
      },
      // 仅保留包含 'agentic' 标签的项目和专业技能
      tags: ['agentic']
    },
    
    // 岗位三：全栈开发（Full-Stack）方向
    fullstack: {
      output: 'resume-fullstack', // 编译生成 dist/resume-fullstack.html 和 dist/resume-fullstack.pdf
      basics: {
        label: 'Senior Full-Stack Engineer',
        summary: 'Product-minded full-stack engineer able to own product-facing systems end to end. Strongest at connecting product intent, backend architecture, operational constraints, and usable web interfaces into complete working products, including high-throughput services, internal platforms, auth/admin tooling, and open-source developer products.'
      },
      // 仅保留包含 'fullstack' 标签的项目和专业技能
      tags: ['fullstack']
    }
  }
};
