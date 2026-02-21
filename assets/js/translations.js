const translations = {
    en: {
        meta: {
            title: "Wright - AI Assistant for macOS | Rewrite, Translate & Chat",
            description: "Wright is a customizable AI assistant for macOS. Create tailored roles, rewrite and translate text effortlessly, and chat — all from a keyboard shortcut or PopClip. Free to use."
        },
        nav: {
            features: "Features",
            download: "Download",
            support: "Support",
            guide: "Guide",
            toggle: "Language"
        },
        hero: {
            title: "Your AI Assistant for macOS",
            subtitle: "Wright is a customizable AI assistant for macOS. Create tailored roles, rewrite and translate text effortlessly, and chat — all from a keyboard shortcut or PopClip. Free to use.",
            download: "Download for macOS"
        },
        guide: {
            title: "Wright User Guide",
            quickStart: {
                title: "Quick Start",
                accessibility: {
                    title: "NOTE: Accessibility Permissions Required",
                    desc1: "Wright needs accessibility permissions to monitor global keyboard shortcuts. After the application is installed, a window will appear requesting your permission to configure the necessary accessibility settings for Wright.",
                    desc2: "Alternatively, you can manually enable these settings by navigating to System Settings > Privacy & Security > Accessibility and activating Wright.",
                    desc3: "You may need to quit the application and restart it for the settings to take effect."
                },
                shortcuts: {
                    title: "Using Wright via Keyboard Shortcuts",
                    desc: "You can use Wright's Rewrite, Translate, and quick chat functions with keyboard shortcuts. The default shortcuts are listed below, and you can customize them in the Settings."
                },
                menuBar: {
                    title: "Using Wright via Apple Menu Bar",
                    desc: "You can also use Wright from your menu bar"
                }
            },
            configureModels: {
                title: "How to Configure Your LLM Models",
                step1: {
                    title: "1. Access Settings",
                    list: ["Open Wright app", "Click the app menu → Settings"]
                },
                step2: {
                    title: "2. Configure API Key",
                    list: ["In the Settings window, go to \"LLM Model\" tab", "Select your desired LLM provider", "Paste your API key in the corresponding field", "Click Save to securely store your key"]
                },
                step3: {
                    title: "3. Model Selection",
                    list: ["After saving your API key, you can select your preferred model version", "Then your model will be ready to use"]
                }
            },
            getApiKeys: {
                title: "How to Get LLM API Keys",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Account Setup", list: ["Visit <a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI Platform</a>", "Sign up or log in"] },
                    step2: { title: "2. Generate Key", list: ["Navigate to \"API keys\"", "Click \"Create new secret key\"", "Name your key (optional)", "Copy key immediately"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Account Setup", list: ["Visit <a href=\"https://console.groq.com\" target=\"_blank\">Groq Console</a>", "Sign up or log in"] },
                    step2: { title: "2. Generate Key", list: ["Navigate to \"API Keys\"", "Click \"Create API Key\"", "Name your key (recommended)", "Copy key immediately"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Account Setup", list: ["Visit Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Log in with X (Twitter)"] },
                    step2: { title: "2. Generate Key", list: ["Click username → \"API Keys\"", "Click \"Create API Key\"", "Set permissions (e.g. chat:write)", "Copy key immediately"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Account Setup", list: ["Visit <a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek Platform</a>", "Sign up or log in"] },
                    step2: { title: "2. Generate Key", list: ["Navigate to \"API Keys\"", "Click \"Create new API key\"", "Name key (optional)", "Copy key immediately"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Account Setup", list: ["Visit <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Log in with Google"] },
                    step2: { title: "2. Generate Key", list: ["Click \"Get API key\"", "Click \"Create API key\"", "Copy key immediately", "Configure project if prompted"] }
                }
            },
            security: {
                title: "Important Security Notes",
                list: [
                    "Never share your API key or expose it in public repositories",
                    "Store API keys securely",
                    "Rotate keys periodically for better security",
                    "Monitor API usage to avoid unexpected charges"
                ]
            }
        },
        support: {
            title: "Support Center",
            subtitle: "Find answers, get help, and reach out to us.",
            links: {
                guide: {
                    title: "User Guide",
                    desc: "Step-by-step setup: accessibility permissions, keyboard shortcuts, and custom roles.",
                    cta: "View Guide"
                },
                issue: {
                    title: "Report an Issue",
                    desc: "Found a bug or have a suggestion? Open an issue on GitHub.",
                    cta: "Submit Issue"
                }
            },
            faq: {
                title: "Frequently Asked Questions",
                q1: {
                    q: "What can Wright do?",
                    a: "Wright is an AI assistant for macOS. It provides three basic functions you can trigger from any app via keyboard shortcuts or PopClip:",
                    list: [
                        "<strong>Rewrite</strong> — Polish selected text for grammar, tone, and clarity while keeping your original meaning.",
                        "<strong>Translate</strong> — Translate selected text between languages instantly.",
                        "<strong>Chat</strong> — Ask questions and have a conversation with AI, with the option to transition from a quick Quick View to a full Chat interface."
                    ]
                },
                q2: {
                    q: "Which AI models are supported?",
                    a: "Wright is powered by leading AI models:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "What are Custom AI Roles?",
                    a: "Custom Roles let you create specialized AI personas with their own system prompts. For example, you can set up a \"Code Reviewer\" role, a \"Copywriter\" role, or a \"Translator\" role — each behaves differently based on the instructions you define. Switch between roles instantly from the Quick View or Chat."
                },
                q4: {
                    q: "How does PopClip integration work?",
                    a: "If you have PopClip installed, Wright adds actions to PopClip's popup menu. Select text in any app, and PopClip will show options to rewrite, translate, or chat — no keyboard shortcut needed. You can download the PopClip extension from Wright's Settings."
                },
                q5: {
                    q: "Is my data secure?",
                    a: "Yes. Wright does not collect or store your personal data. Your text is processed by the AI and the result is returned directly — Wright does not log or retain your content. See our Privacy Policy for details."
                },
                q6: {
                    q: "What are the system requirements?",
                    a: "Wright requires macOS 14.0 (Sonoma) or later. It needs Accessibility permissions to read and replace selected text system-wide. The app is lightweight and runs as a menu bar app."
                },
                q7: {
                    q: "How do keyboard shortcuts work?",
                    a: "Wright uses global keyboard shortcuts that work in any app. The default shortcuts can be customized in Settings → Shortcuts. Select text anywhere, press the shortcut, and the result appears instantly — you can copy, insert, or expand into a Chat session."
                }
            },
            contact: {
                title: "Contact Us",
                email: "Email Support",
                response: "We typically respond within 24 hours."
            }
        },
        privacy: {
            title: "Privacy Policy",
            meta: {
                title: "Privacy Policy | Wright",
                desc: "Wright's Privacy Policy. We do not collect personal usage data."
            },
            lastUpdated: "Last Updated: February 2026",
            commitment: {
                title: "Our Commitment to Privacy",
                text: "Wright is designed with your privacy in mind. We believe in transparency and minimize data collection to the absolute essentials.",
                keyPoints: {
                    title: "Key Privacy Points:",
                    list: [
                        "We do not access or store your conversation content",
                        "We only collect your email for account management",
                        "We use minimum connections for service delivery"
                    ]
                }
            },
            dataCollection: {
                title: "Data Collection & Architecture",
                text: "Wright utilizes a secure backend API service to process your requests. We do not store your conversation history or content.",
                apiKeys: {
                    title: "Service Architecture",
                    text: "All interactions are processed through our secure API. Your content is passed through solely for generating responses and is never saved.",
                    list: [
                        "We collect only your account email",
                        "Minimum data used for troubleshooting",
                        "No retention of conversation data",
                        "Secure implementation"
                    ]
                }
            },
            thirdParty: {
                title: "Third-Party Services",
                text: "When you use Wright to interact with LLM services (such as OpenAI, Groq, etc.), your interactions are governed by the privacy policies of those services. We recommend reviewing the privacy policies of the LLM services you choose to use:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI Privacy Policy</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq Privacy Policy</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI Privacy Policy</a>"
                ]
            },
            security: {
                title: "Data Security",
                text: "Your account information is stored securely. We employ industry-standard security measures to protect your data."
            },
            changes: {
                title: "Changes to This Privacy Policy",
                text: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date."
            },
            contact: {
                title: "Contact Us",
                text: "If you have any questions about this Privacy Policy, please contact us at:"
            }
        },
        howItWorks: {
            title: "How It Works",
            subtitle: "Use keyboard shortcuts or integrate with PopClip for right-click access to all features.",
            step1: {
                title: "Select Text",
                description: "Highlight any text in any app on your Mac."
            },
            step2: {
                title: "Press Shortcut",
                description: "Hit your configured shortcut or use PopClip to trigger rewrite, translate, or chat."
            },
            step3: {
                title: "Get Result",
                description: "Your AI-enhanced text appears instantly in a floating window. Copy or replace with one click."
            }
        },
        features: {
            title: "Key Features",
            quickView: {
                title: "Start Quick, Go Deep",
                description: "Launch a quick query in the lightweight Quick View. When the conversation needs more depth, transition to the full Chat interface — your context carries over automatically."
            },
            rewrite: {
                title: "One-Key Text Polish",
                description: "Select text, press a shortcut, and get a polished version instantly. Wright fixes typos, grammar, and awkward phrasing while keeping your original meaning. It automatically detects the language you're writing in."
            },
            translate: {
                title: "Instant Translation",
                description: "Translate selected text between languages with a single shortcut. Wright detects the source language and translates it for you — no need to switch to a separate app or browser tab."
            },
            customRoles: {
                title: "Custom AI Roles",
                description: "Create your own AI roles - such as coding review, copywriting, email drafting, or anything else - each with its own system prompt and behavior."
            },
            setup: {
                title: "Your Setup, Your Way",
                description: "Configure shortcuts for each of your AI roles and customize the interface to suit your workflow. Wright supports multiple LLM providers, allowing you to select the one that best meets your requirements.",
                list: [
                    "Customizable Keyboard Shortcuts",
                    "Multiple AI Models (OpenAI, Gemini, Grok, Groq)",
                    "PopClip Integration"
                ]
            }
        },
        pricing: {
            title: "Choose Your Plan",
            free: {
                tier: "Free",
                tokens: "1,000 tokens / day",
                reset: "Daily reset (midnight UTC)",
                cta: "Get Started"
            },
            basic: {
                tier: "Basic",
                period: "/ year",
                tokens: "500,000 tokens / month",
                reset: "Resets 1st of each month",
                cta: "Subscribe"
            },
            pro: {
                badge: "Most Popular",
                tier: "Pro",
                period: "/ month",
                tokens: "10,000,000 tokens / month",
                reset: "Resets 1st of each month",
                cta: "Go Pro"
            }
        },
        benefits: {
            title: "Why Wright?",
            subtitle: "A native macOS assistant that stays out of your way until you need it",
            everywhere: {
                title: "Works Everywhere",
                description: "Global keyboard shortcuts and PopClip integration, works in any app — Mail, Notes, Slack, your browser, or any text field on your Mac."
            },
            free: {
                title: "Free to Start",
                description: "No API key, no configuration. A free plan is included so you can try every feature before upgrading."
            }
        },
        download: {
            title: "Get Started",
            description: "Download Wright for free and start using it right away.",
            cta: "Download for macOS",
            guide: "User Guide",
            note: "Free plan included · No configuration required"
        },
        footer: {
            rights: "© 2026 Wright. All rights reserved.",
            privacy: "Privacy Policy",
            support: "Support"
        }
    },
    zh: {
        meta: {
            title: "Wright - macOS 上的 AI 助手 | 润色、翻译与对话",
            description: "Wright 是一款可自定义的 macOS AI 助手。创建专属角色，轻松润色和翻译文本，以及进行对话——所有操作仅需一个快捷键或 PopClip。免费使用。"
        },
        nav: {
            features: "功能",
            download: "下载",
            support: "帮助",
            guide: "指南",
            toggle: "语言"
        },
        hero: {
            title: "macOS 上的专属 AI 助手",
            subtitle: "Wright 是一款可自定义的 macOS AI 助手。您可以创建专属角色，使用快捷键或 PopClip 快速完成文本润色、翻译与对话，全程轻松无缝。免费体验。",
            download: "下载 macOS 版本"
        },
        guide: {
            title: "Wright 用户指南",
            quickStart: {
                title: "快速开始",
                accessibility: {
                    title: "注意：需要辅助功能权限",
                    desc1: "Wright 需要辅助功能权限来监控全局键盘快捷键。安装应用程序后，会出现一个窗口，请求您的权限来配置 Wright 所需的辅助功能设置。",
                    desc2: "或者，您可以导航至 系统设置 > 隐私与安全性 > 辅助功能 并启用 Wright 来手动开启这些设置。",
                    desc3: "您可能需要退出应用程序并重新启动才能使设置生效。"
                },
                shortcuts: {
                    title: "使用键盘快捷键",
                    desc: "您可以使用键盘快捷键来使用 Wright 的润色、翻译和快速对话功能。默认快捷键如下所示，您可以在设置中自定义它们。"
                },
                menuBar: {
                    title: "通过 Apple 菜单栏使用",
                    desc: "您也可以通过菜单栏使用 Wright。"
                }
            },
            configureModels: {
                title: "如何配置 LLM 模型",
                step1: {
                    title: "1. 访问设置",
                    list: ["打开 Wright 应用", "点击应用菜单 → 设置"]
                },
                step2: {
                    title: "2. 配置 API 密钥",
                    list: ["在设置窗口中，进入“LLM 模型”选项卡", "选择您想要使用的 LLM 提供商", "在对应的字段中粘贴您的 API 密钥", "点击保存以安全存储您的密钥"]
                },
                step3: {
                    title: "3. 模型选择",
                    list: ["保存 API 密钥后，您可以选择您偏好的模型版本", "然后您的模型就可以使用了"]
                }
            },
            getApiKeys: {
                title: "如何获取 LLM API 密钥",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. 账户设置", list: ["访问 <a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI 平台</a>", "注册或登录"] },
                    step2: { title: "2. 生成密钥", list: ["导航至“API keys”", "点击“Create new secret key”", "为您的密钥命名（可选）", "立即复制密钥"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. 账户设置", list: ["访问 <a href=\"https://console.groq.com\" target=\"_blank\">Groq 控制台</a>", "注册或登录"] },
                    step2: { title: "2. 生成密钥", list: ["导航至“API Keys”", "点击“Create API Key”", "为您的密钥命名（推荐）", "立即复制密钥"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. 账户设置", list: ["访问 Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "使用 X (Twitter) 登录"] },
                    step2: { title: "2. 生成密钥", list: ["点击用户名 → “API Keys”", "点击“Create API Key”", "设置权限（例如 chat:write）", "立即复制密钥"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. 账户设置", list: ["访问 <a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek 平台</a>", "注册或登录"] },
                    step2: { title: "2. 生成密钥", list: ["导航至“API Keys”", "点击“Create new API key”", "命名密钥（可选）", "立即复制密钥"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. 账户设置", list: ["访问 <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "使用 Google 登录"] },
                    step2: { title: "2. 生成密钥", list: ["点击“Get API key”", "点击“Create API key”", "立即复制密钥", "如果提示，请配置项目"] }
                }
            },
            security: {
                title: "重要安全注意事项",
                list: [
                    "切勿分享您的 API 密钥或将其暴露在公共仓库中",
                    "安全存储 API 密钥",
                    "定期轮换密钥以提高安全性",
                    "监控 API 使用情况以避免意外费用"
                ]
            }
        },
        support: {
            title: "支持中心",
            subtitle: "查找答案，获取帮助，并联系我们。",
            links: {
                guide: {
                    title: "用户指南",
                    desc: "一步步的设置：辅助功能权限、键盘快捷键和自定义角色。",
                    cta: "查看指南"
                },
                issue: {
                    title: "报告问题",
                    desc: "发现了 bug 或有建议？请在 GitHub 上按要求提交问题反馈。",
                    cta: "提交问题"
                }
            },
            faq: {
                title: "常见问题",
                q1: {
                    q: "Wright 能做什么？",
                    a: "Wright 是一款 macOS 上的 AI 助手。它提供三个基本功能，您可以通过键盘快捷键或 PopClip 在任何应用程序中触发：",
                    list: [
                        "<strong>润色文本</strong> — 优化所选文本的语法、语气和清晰度，同时保持您的原意不变。",
                        "<strong>瞬时翻译</strong> — 提供多种语言之间的快速翻译。",
                        "<strong>快速对话</strong> — 提出问题并与 AI 对话，也支持从轻量级快速视图（Quick View）跳转到完整的聊天界面深入对话。"
                    ]
                },
                q2: {
                    q: "支持哪些 AI 模型？",
                    a: "目前版本内置并支持最领先的多种大语言模型（LLM）：",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "什么是自定义 AI 角色？",
                    a: "自定义角色让您可以创建具有自身系统提示词的专属 AI 角色。例如，您可以设置“代码审查员”角色、“文案编辑”角色或“翻译员”角色——每个角色将根据您的指令在运行时表现出不同的交互。您可以随时从快速视图或聊天界面切换不同角色。"
                },
                q4: {
                    q: "PopClip 集成是如何工作的？",
                    a: "如果您在 Mac 上安装了 PopClip 软件，Wright 支持在 PopClip 的弹出面板增加交互按钮（您可从系统设置页获取我们的官方插件下载渠道）。之后当您在任何应用中选中文本时，PopClip 会显示可使用 Wright 进行一键润色、翻译或聊天的选项——无需记忆快捷键即可快速操作。"
                },
                q5: {
                    q: "我的数据安全吗？",
                    a: "非常安全。Wright 承诺不会收集或存储您的个人数据。您的文本直接由系统转发请求至您选中的 AI 模型被处理，结果通过接口返回给应用组件解析——Wright 的任何产品均不留存或记录您的数据和对话内容。详情请参阅我们的《隐私政策》。"
                },
                q6: {
                    q: "系统要求是什么？",
                    a: "它是一个系统通知栏应用，不仅轻量级而且运行内存占用极低。由于应用需要捕获并替换任意程序中的选中文本功能，所以必须授权系统的“辅助功能权限（Accessibility）”。软件目前要求 macOS 14.0 (Sonoma) 或更高版本。"
                },
                q7: {
                    q: "键盘快捷键如何工作？",
                    a: "Wright 启用了全局键盘控制能力，因此可在任意应用程序中工作。您可以进入“设置”→“快捷键”模块自定义调整绑定的主控制键。其后只要在需要时选择文本，然后随时按下该快捷方式按键，AI 解析后优化的结果将立即呈现在快捷控制面板上——您可以复制、写入回原编辑框或带入完整的对话窗口展开。"
                }
            },
            contact: {
                title: "联系我们",
                email: "邮件支持",
                response: "我们通常会在 24 小时内回复您的问题。"
            }
        },
        privacy: {
            title: "隐私政策",
            meta: {
                title: "隐私政策 | Wright",
                desc: "Wright 隐私政策。我们不收集个人使用数据。"
            },
            lastUpdated: "最后更新：2026年2月",
            commitment: {
                title: "我们对隐私的承诺",
                text: "Wright 的设计充分考虑了您的隐私。我们坚信透明度，并将数据收集限制在绝对必要的范围内。",
                keyPoints: {
                    title: "关键隐私点：",
                    list: [
                        "我们不会访问或存储您的对话内容",
                        "我们仅收集您的邮箱用于账户管理",
                        "我们使用最少的连接来提供服务"
                    ]
                }
            },
            dataCollection: {
                title: "数据收集与架构",
                text: "Wright 使用安全的后端 API 服务来处理您的请求。我们不存储您的对话历史或内容。",
                apiKeys: {
                    title: "服务架构",
                    text: "所有交互均通过我们安全的 API 处理。您的内容仅用于生成回复，绝不会被保存。",
                    list: [
                        "我们只收集您的账户邮箱",
                        "用于故障排除的最少数据",
                        "不保留对话数据",
                        "安全可靠的实现"
                    ]
                }
            },
            thirdParty: {
                title: "第三方服务",
                text: "当您使用 Wright 与 LLM 服务（如 OpenAI、Groq 等）交互时，您的互动受这些服务的隐私政策管辖。我们建议您查看所选 LLM 服务的隐私政策：",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI 隐私政策</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq 隐私政策</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI 隐私政策</a>"
                ]
            },
            security: {
                title: "数据安全",
                text: "您的账户信息被安全存储。我们采用行业标准的安全措施来保护您的数据。"
            },
            changes: {
                title: "本隐私政策的变更",
                text: "我们可能会不时更新隐私政策。如有任何更改，我们将在本页发布新的隐私政策并更新“最后更新”日期以通知您。"
            },
            contact: {
                title: "联系我们",
                text: "如果您对本隐私政策有任何疑问，请联系我们："
            }
        },
        howItWorks: {
            title: "使用指南",
            subtitle: "只需快捷键或搭配 PopClip，即可右键一键调用全部功能。",
            step1: {
                title: "选中文本",
                description: "在 Mac 的任意应用中高亮选中您需要的文本。"
            },
            step2: {
                title: "轻按快捷键",
                description: "按下您设置的快捷键，或通过 PopClip 触发润色、翻译或对话功能。"
            },
            step3: {
                title: "获取结果",
                description: "AI 处理后的文本会以悬浮窗的形式立刻呈现，支持一键复制或替换原文。"
            }
        },
        features: {
            title: "核心功能一览",
            quickView: {
                title: "快速唤出，深度交流",
                description: "通过轻量级的快速视图（Quick View）发起查询。当对话需要更深入时，可无缝切换到完整聊天界面——上下文会自动保留。"
            },
            rewrite: {
                title: "一键润色文本",
                description: "选中文本并按下快捷键，即可获得润色版本。Wright 可修复错别字、语法及生硬的表达，同时保留您的原意。支持自动检测您当前写作的语言。"
            },
            translate: {
                title: "瞬时翻译",
                description: "通过简单的快捷键即可实现不同语言之间的即时翻译。Wright 自动检测原文语言并为您翻译——无需来回切换到翻译软件或浏览器应用。"
            },
            customRoles: {
                title: "自定义 AI 角色",
                description: "打造您自己的专属 AI 角色——例如代码审查员、文案编辑、邮件助理等功能各异的角色，每个角色均可配置独立的系统提示词和响应行为。"
            },
            setup: {
                title: "您的专属配置",
                description: "为不同 AI 角色配置不同的快捷键，根据您的工作流定制界面。Wright 支持多个领先的大语言模型（LLM）提供商，您可以自由选择最契合您需求的模型。",
                list: [
                    "支持全自定义键盘快捷键",
                    "内置多种顶级 AI 模型（OpenAI，Gemini，Grok，Groq）",
                    "无缝集成 PopClip"
                ]
            }
        },
        pricing: {
            title: "选择您的订阅计划",
            free: {
                tier: "免费版",
                tokens: "1,000 token / 天",
                reset: "每日重置（UTC 午夜）",
                cta: "开始免费使用"
            },
            basic: {
                tier: "基础版",
                period: "/ 年",
                tokens: "500,000 token / 月",
                reset: "每月 1 日重置",
                cta: "立即订阅"
            },
            pro: {
                badge: "最受欢迎",
                tier: "专业版",
                period: "/ 月",
                tokens: "10,000,000 token / 月",
                reset: "每月 1 日重置",
                cta: "升级至专业版"
            }
        },
        benefits: {
            title: "为什么选择 Wright？",
            subtitle: "我们是一款原生的 macOS 助手。不在您不需要时打扰，但在您需要时使命必达。",
            everywhere: {
                title: "随时随地可用",
                description: "得益于全局快捷键及 PopClip 融合，不管是邮件、备忘录、Slack 还是浏览器，Wright 可以在 Mac 的任何文本框中稳定运行。"
            },
            free: {
                title: "免费零门槛",
                description: "无需自备 API Key，无需繁杂配置。软件自带免费额度，供您在升级前完整体验全部功能。"
            }
        },
        download: {
            title: "开启您的体验",
            description: "无论是在工作还是学习中，现在就立刻免费下载并开始使用 Wright 吧。",
            cta: "下载 macOS 版本",
            guide: "查看使用指南",
            note: "自带免费计划 · 免除配置烦恼"
        },
        footer: {
            rights: "© 2026 Wright. 保留所有权利。",
            privacy: "隐私政策",
            support: "帮助"
        }
    }, es: {
        meta: {
            title: "Wright - Asistente de IA para macOS | Reescriba, Traduzca y Converse",
            description: "Wright es un asistente de IA personalizable para macOS. Cree roles a medida, reescriba y traduzca texto sin esfuerzo, y chatee, todo con un atajo de teclado o PopClip. Gratuito."
        },
        nav: {
            features: "Funciones",
            download: "Descargar",
            support: "Soporte",
            guide: "Guía",
            toggle: "Idioma"
        },
        hero: {
            title: "Tu Asistente de IA para macOS",
            subtitle: "Wright es un asistente de IA personalizable para macOS. Cree roles a medida, reescriba y traduzca textos sin esfuerzo, y converse, todo desde un atajo de teclado o PopClip. De uso gratuito.",
            download: "Descargar para macOS"
        },
        guide: {
            title: "Guía del Usuario de Wright",
            quickStart: {
                title: "Inicio Rápido",
                accessibility: {
                    title: "NOTA: Se Requieren Permisos de Accesibilidad",
                    desc1: "Wright necesita permisos de accesibilidad para monitorizar atajos de teclado globales. Después de instalar la aplicación, aparecerá una ventana solicitando su permiso para configurar los ajustes de accesibilidad necesarios para Wright.",
                    desc2: "Alternativamente, puede habilitar estos ajustes manualmente navegando a Ajustes del Sistema > Privacidad y Seguridad > Accesibilidad y activando Wright.",
                    desc3: "Es posible que necesite salir de la aplicación y reiniciarla para que los ajustes surtan efecto."
                },
                shortcuts: {
                    title: "Uso de Atajos de Teclado",
                    desc: "Puede utilizar las funciones de pulido, traducción y chat rápido de Wright con atajos de teclado. Los atajos predeterminados se enumeran a continuación, y puede personalizarlos en la Configuración."
                },
                menuBar: {
                    title: "Uso a través de la Barra de Menú de Apple",
                    desc: "También puede utilizar Wright desde su barra de menú"
                }
            },
            configureModels: {
                title: "Cómo Configurar Sus Modelos LLM",
                step1: {
                    title: "1. Acceder a Configuración",
                    list: ["Abrir aplicación Wright", "Clic en menú de la app → Configuración"]
                },
                step2: {
                    title: "2. Configurar Clave API",
                    list: ["En la ventana de Configuración, vaya a la pestaña \"Modelo LLM\"", "Seleccione su proveedor de LLM deseado", "Pegue su clave API en el campo correspondiente", "Clic en Guardar para almacenar su clave de forma segura"]
                },
                step3: {
                    title: "3. Selección de Modelo",
                    list: ["Después de guardar su clave API, puede seleccionar su versión de modelo preferida", "Entonces su modelo estará listo para usar"]
                }
            },
            getApiKeys: {
                title: "Cómo Obtener Claves API de LLM",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Configuración de Cuenta", list: ["Visite <a href=\"https://platform.openai.com\" target=\"_blank\">Plataforma OpenAI</a>", "Regístrese o inicie sesión"] },
                    step2: { title: "2. Generar Clave", list: ["Navegue a \"API keys\"", "Clic en \"Create new secret key\"", "Nombre su clave (opcional)", "Copie la clave inmediatamente"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Configuración de Cuenta", list: ["Visite <a href=\"https://console.groq.com\" target=\"_blank\">Consola Groq</a>", "Regístrese o inicie sesión"] },
                    step2: { title: "2. Generar Clave", list: ["Navegue a \"API Keys\"", "Clic en \"Create API Key\"", "Nombre su clave (recomendado)", "Copie la clave inmediatamente"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Configuración de Cuenta", list: ["Visite Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Inicie sesión con X (Twitter)"] },
                    step2: { title: "2. Generar Clave", list: ["Clic en nombre de usuario → \"API Keys\"", "Clic en \"Create API Key\"", "Establezca permisos (ej. chat:write)", "Copie la clave inmediatamente"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Configuración de Cuenta", list: ["Visite <a href=\"https://platform.deepseek.com\" target=\"_blank\">Plataforma DeepSeek</a>", "Regístrese o inicie sesión"] },
                    step2: { title: "2. Generar Clave", list: ["Navegue a \"API Keys\"", "Clic en \"Create new API key\"", "Nombre la clave (opcional)", "Copie la clave inmediatamente"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Configuración de Cuenta", list: ["Visite <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Inicie sesión con Google"] },
                    step2: { title: "2. Generar Clave", list: ["Clic en \"Get API key\"", "Clic en \"Create API key\"", "Copie la clave inmediatamente", "Configure proyecto si se solicita"] }
                }
            },
            security: {
                title: "Notas de Seguridad Importantes",
                list: [
                    "Nunca comparta su clave API ni la exponga en repositorios públicos",
                    "Guarde las claves API de forma segura",
                    "Rote las claves periódicamente para mayor seguridad",
                    "Monitoree el uso de la API para evitar cargos inesperados"
                ]
            }
        },
        support: {
            title: "Centro de Soporte",
            subtitle: "Encuentre respuestas, obtenga ayuda y contáctenos.",
            links: {
                guide: {
                    title: "Guía del Usuario",
                    desc: "Configuración paso a paso: permisos de accesibilidad, atajos de teclado y roles personalizados.",
                    cta: "Ver Guía"
                },
                issue: {
                    title: "Reportar un Problema",
                    desc: "¿Ha encontrado un error o tiene una sugerencia? Abra un informe de problema en GitHub.",
                    cta: "Enviar Problema"
                }
            },
            faq: {
                title: "Preguntas Frecuentes",
                q1: {
                    q: "¿Qué puede hacer Wright?",
                    a: "Wright es un asistente de IA para macOS. Proporciona tres funciones básicas que puede activar desde cualquier aplicación mediante atajos de teclado o PopClip:",
                    list: [
                        "<strong>Reescribir</strong> — Perfeccione el texto seleccionado en cuanto a gramática, tono y claridad manteniendo su significado original.",
                        "<strong>Traducir</strong> — Traduzca el texto seleccionado entre idiomas al instante.",
                        "<strong>Chat</strong> — Haga preguntas y tenga una conversación con la IA, con la opción de pasar de una Vista Rápida a una interfaz de Chat completa."
                    ]
                },
                q2: {
                    q: "¿Qué modelos de IA son compatibles?",
                    a: "Wright está impulsado por los principales modelos de IA:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "¿Qué son los Roles de IA Personalizados?",
                    a: "Los Roles Personalizados le permiten crear perfiles de IA especializados con sus propios prompts del sistema. Por ejemplo, puede configurar un rol de \"Revisor de Código\", un rol de \"Redactor\" o un rol de \"Traductor\" — cada uno se comporta de forma diferente según las instrucciones que defina. Cambie entre roles al instante desde la Vista Rápida o el Chat."
                },
                q4: {
                    q: "¿Cómo funciona la integración con PopClip?",
                    a: "Si tiene PopClip instalado, Wright agrega acciones al menú emergente de PopClip. Seleccione texto en cualquier aplicación y PopClip mostrará opciones para reescribir, traducir o chatear — no se requiere atajo de teclado. Puede descargar la extensión de PopClip desde la Configuración de Wright."
                },
                q5: {
                    q: "¿Están seguros mis datos?",
                    a: "Sí. Wright no recopila ni almacena sus datos personales. Su texto es procesado por la IA y el resultado se devuelve directamente — Wright no registra ni retiene su contenido. Consulte nuestra Política de Privacidad para más detalles."
                },
                q6: {
                    q: "¿Cuáles son los requisitos del sistema?",
                    a: "Wright requiere macOS 14.0 (Sonoma) o superior. Necesita permisos de Accesibilidad para leer y reemplazar texto seleccionado en todo el sistema. La aplicación es liviana y se ejecuta como una aplicación de la barra de menú."
                },
                q7: {
                    q: "¿Cómo funcionan los atajos de teclado?",
                    a: "Wright utiliza atajos de teclado globales que funcionan en cualquier aplicación. Los atajos predeterminados se pueden personalizar en Configuración → Atajos. Seleccione texto en cualquier lugar, presione el atajo y el resultado aparece al instante — puede copiar, insertar o expandir a una sesión de Chat."
                }
            },
            contact: {
                title: "Contáctenos",
                email: "Soporte por Correo Electrónico",
                response: "Por lo general, respondemos dentro de las 24 horas."
            }
        },
        privacy: {
            title: "Política de Privacidad",
            meta: {
                title: "Política de Privacidad | Wright",
                desc: "Política de Privacidad de Wright. No recopilamos datos de uso personal."
            },
            lastUpdated: "Última Actualización: Febrero 2026",
            commitment: {
                title: "Nuestro Compromiso con la Privacidad",
                text: "Wright está diseñado pensando en su privacidad. Creemos en la transparencia y minimizamos la recopilación de datos a lo absolutamente esencial.",
                keyPoints: {
                    title: "Puntos Clave de Privacidad:",
                    list: [
                        "No accedemos ni almacenamos el contenido de sus conversaciones",
                        "Solo recopilamos su correo electrónico para la gestión de su cuenta",
                        "Utilizamos conexiones mínimas para la prestación del servicio"
                    ]
                }
            },
            dataCollection: {
                title: "Recopilación de Datos y Arquitectura",
                text: "Wright utiliza un servicio de API backend seguro para procesar sus solicitudes. No almacenamos su historial de conversaciones ni su contenido.",
                apiKeys: {
                    title: "Arquitectura del Servicio",
                    text: "Todas las interacciones se procesan a través de nuestra API segura. Su contenido pasa por ella únicamente para generar respuestas y nunca se guarda.",
                    list: [
                        "Recopilamos únicamente el correo asociado a su cuenta",
                        "Mínimos datos utilizados para la resolución de problemas",
                        "Sin retención de datos de conversación",
                        "Implementación segura"
                    ]
                }
            },
            thirdParty: {
                title: "Servicios de Terceros",
                text: "Cuando utiliza Wright para interactuar con servicios de LLM (como OpenAI, Groq, etc.), sus interacciones se rigen por las políticas de privacidad de esos servicios. Recomendamos revisar las políticas de privacidad de los servicios que decida utilizar:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Política de Privacidad de OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Política de Privacidad de Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Política de Privacidad de xAI</a>"
                ]
            },
            security: {
                title: "Seguridad de Datos",
                text: "La información de su cuenta se almacena de forma segura. Empleamos medidas de seguridad estándar de la industria para proteger sus datos."
            },
            changes: {
                title: "Cambios en esta Política de Privacidad",
                text: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva versión en esta página y actualizando la fecha de \"Última Actualización\"."
            },
            contact: {
                title: "Contáctenos",
                text: "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en:"
            }
        },
        howItWorks: {
            title: "Cómo Funciona",
            subtitle: "Utilice atajos de teclado o intégrelo con PopClip para acceder a todas las funciones con un clic derecho.",
            step1: {
                title: "Seleccionar Texto",
                description: "Resalte cualquier texto en cualquier aplicación en su Mac."
            },
            step2: {
                title: "Presionar Atajo",
                description: "Presione el atajo configurado o use PopClip para activar funciones de reescritura, traducción o chat."
            },
            step3: {
                title: "Obtener Resultado",
                description: "Su texto mejorado por IA aparecerá al instante en una ventana flotante. Puede copiarlo o insertarlo con un solo clic."
            }
        },
        features: {
            title: "Características Principales",
            quickView: {
                title: "Inicio Rápido, Funciones Profundas",
                description: "Inicie una consulta rápida con la ágil Vista Rápida. Cuando la conversación requiera de más profundidad, haga la transición a la interfaz de Chat completa; su contexto se trasladará automáticamente."
            },
            rewrite: {
                title: "Pulido de Texto en un Clic",
                description: "Seleccione un texto, presione un atajo y obtenga una versión revisada al instante. Wright corrige errores tipográficos, gramaticales y frases difíciles manteniendo su significado original. Detecta automáticamente el idioma en el que está escribiendo."
            },
            translate: {
                title: "Traducción Instantánea",
                description: "Traduzca cualquier texto seleccionado entre numerosos idiomas con un solo atajo. Wright detecta el idioma origen y lo traduce por usted — sin necesidad de cambiar a otra app o buscar en navegador."
            },
            customRoles: {
                title: "Roles de IA Personalizados",
                description: "Cree sus propios roles de IA (p. ej. un revisor de código fuente, un redactor publicitario, o lo que necesite) cada uno con su propia instrucción (prompt) y comportamiento específico."
            },
            setup: {
                title: "Tu Configuración, a tu Manera",
                description: "Configure atajos para cada uno de sus roles de IA y personalice la interfaz según su flujo de trabajo. Wright soporta múltiples proveedores de LLM, permitiéndole elegir el que mejor se ajuste a sus necesidades.",
                list: [
                    "Atajos de Teclado Personalizables",
                    "Múltiples Modelos de IA (OpenAI, Gemini, Grok, Groq)",
                    "Integración total con PopClip"
                ]
            }
        },
        pricing: {
            title: "Elige Tu Plan",
            free: {
                tier: "Gratis",
                tokens: "1.000 tokens / día",
                reset: "Reinicio diario (medianoche UTC)",
                cta: "Comenzar"
            },
            basic: {
                tier: "Básico",
                period: "/ año",
                tokens: "500.000 tokens / mes",
                reset: "Reinicio el 1º de cada mes",
                cta: "Suscribirse"
            },
            pro: {
                badge: "Más Popular",
                tier: "Pro",
                period: "/ mes",
                tokens: "10.000.000 tokens / mes",
                reset: "Reinicio el 1º de cada mes",
                cta: "Pasar a Pro"
            }
        },
        benefits: {
            title: "¿Por qué Wright?",
            subtitle: "Un asistente nativo de macOS que no molesta hasta que lo necesita.",
            everywhere: {
                title: "Funciona en Todas Partes",
                description: "Atajos de teclado globales y soporte con PopClip. Funciona en cualquier aplicación: Mail, Notes, Slack, tu navegador o cualquier campo de texto en tu Mac."
            },
            free: {
                title: "Empiece Gratis",
                description: "Sin necesidad de clave de API, sin configuración complicada. Hay un plan gratuito activo para que puedas probar cualquier característica de las anteriores antes de decidir mejorar tu plan."
            }
        },
        download: {
            title: "Empieza Ahora",
            description: "Descargue Wright gratis y comience a usarlo de inmediato.",
            cta: "Descargar para macOS",
            guide: "Guía de Usuario",
            note: "Plan gratuito incluido · No requiere configuración extra"
        },
        footer: {
            rights: "© 2026 Wright. Todos los derechos reservados.",
            privacy: "Política de Privacidad",
            support: "Soporte"
        }
    },
    fr: {
        meta: {
            title: "Wright - Assistant IA pour macOS | Réécriture, Traduction & Chat",
            description: "Wright est un assistant IA sur-mesure pour macOS. Créez des rôles personnalisés, réécrivez et traduisez des textes, et discutez d'un seul raccourci ou PopClip. Gratuit."
        },
        nav: {
            features: "Fonctionnalités",
            download: "Télécharger",
            support: "Support",
            guide: "Guide",
            toggle: "Langue"
        },
        hero: {
            title: "Votre Assistant IA pour macOS",
            subtitle: "Wright est un assistant IA personnalisable. Créez des rôles sur mesure, réécrivez ou traduisez du texte en un clin d'œil, et discutez via un simple raccourci clavier ou un clic droit PopClip. Utilisation gratuite.",
            download: "Télécharger pour macOS"
        },
        guide: {
            title: "Guide Utilisateur Wright",
            quickStart: {
                title: "Démarrage Rapide",
                accessibility: {
                    title: "NOTE : Permissions d'Accessibilité Requises",
                    desc1: "Wright a besoin de permissions d'accessibilité pour surveiller les raccourcis clavier globaux.",
                    desc2: "Vous pouvez activer ces paramètres manuellement dans Réglages Système.",
                    desc3: "Vous devrez peut-être redémarrer l'application."
                },
                shortcuts: {
                    title: "Utilisation des Raccourcis Clavier",
                    desc: "Utilisez les fonctions de polissage, traduction et chat avec des raccourcis."
                },
                menuBar: {
                    title: "Utilisation via la Barre de Menus",
                    desc: "Vous pouvez aussi utiliser Wright depuis votre barre de menus."
                }
            },
            configureModels: {
                title: "Configurer Vos Modèles LLM",
                step1: {
                    title: "1. Accéder aux Réglages",
                    list: ["Ouvrir l'app Wright", "Menu de l'app → Réglages"]
                },
                step2: {
                    title: "2. Configurer la Clé API",
                    list: ["Onglet \"Modèle LLM\"", "Sélectionner le fournisseur", "Coller la clé API", "Enregistrer"]
                },
                step3: {
                    title: "3. Sélection du Modèle",
                    list: ["Sélectionner la version du modèle", "Prêt à utiliser"]
                }
            },
            getApiKeys: {
                title: "Obtenir des Clés API LLM",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Compte", list: ["Visiter <a href=\"https://platform.openai.com\" target=\"_blank\">Plateforme OpenAI</a>", "S'inscrire"] },
                    step2: { title: "2. Générer Clé", list: ["\"API keys\"", "\"Create new secret key\"", "Copier la clé"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Compte", list: ["Visiter <a href=\"https://console.groq.com\" target=\"_blank\">Console Groq</a>", "S'inscrire"] },
                    step2: { title: "2. Générer Clé", list: ["\"API Keys\"", "\"Create API Key\"", "Copier la clé"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Compte", list: ["Visiter Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Connexion X"] },
                    step2: { title: "2. Générer Clé", list: ["Nom d'utilisateur → \"API Keys\"", "\"Create API Key\"", "Copier la clé"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Compte", list: ["Visiter <a href=\"https://platform.deepseek.com\" target=\"_blank\">Plateforme DeepSeek</a>", "S'inscrire"] },
                    step2: { title: "2. Générer Clé", list: ["\"API Keys\"", "\"Create new API key\"", "Copier la clé"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Compte", list: ["Visiter <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Connexion Google"] },
                    step2: { title: "2. Générer Clé", list: ["\"Get API key\"", "\"Create API key\"", "Copier la clé"] }
                }
            },
            security: {
                title: "Notes de Sécurité",
                list: [
                    "Ne partagez jamais votre clé API",
                    "Stockez les clés en sécurité",
                    "Tournez les clés périodiquement",
                    "Surveillez l'utilisation"
                ]
            }
        },
        support: {
            title: "Centre d'Aide",
            subtitle: "Trouvez des réponses et obtenez de l'aide.",
            links: {
                guide: {
                    title: "Guide Utilisateur",
                    desc: "Configuration étape par étape : autorisations d'accessibilité, raccourcis clavier et rôles personnalisés.",
                    cta: "Voir le Guide"
                },
                issue: {
                    title: "Signaler un Problème",
                    desc: "Vous avez trouvé un bug ou avez une suggestion ? Signalez-le sur GitHub.",
                    cta: "Soumettre un Problème"
                }
            },
            faq: {
                title: "Foire Aux Questions",
                q1: {
                    q: "Que peut faire Wright ?",
                    a: "Wright est un assistant IA pour macOS. Il offre trois fonctions de base que vous pouvez déclencher à partir de n'importe quelle application via des raccourcis clavier ou PopClip :",
                    list: [
                        "<strong>Réécriture</strong> — Améliorez la grammaire, le ton et la clarté du texte sélectionné tout en conservant votre sens original.",
                        "<strong>Traduction</strong> — Traduisez instantanément le texte sélectionné entre plusieurs langues.",
                        "<strong>Chat</strong> — Posez des questions et discutez avec l'IA, avec la possibilité de passer d'un simple Aperçu Rapide (Quick View) à une interface de Chat complète."
                    ]
                },
                q2: {
                    q: "Quels modèles d'IA sont pris en charge ?",
                    a: "Wright est alimenté par les meilleurs modèles d'IA :",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "Que sont les rôles d'IA personnalisés ?",
                    a: "Les rôles personnalisés vous permettent de créer des personas IA spécifiques avec leurs propres invites système. Par exemple, vous pouvez configurer un rôle de « Réviseur de Code », un rôle de « Rédacteur » ou un rôle de « Traducteur » — chacun se comportant différemment selon les instructions que vous définissez. Alternez entre les rôles instantanément depuis l'Aperçu Rapide ou le Chat."
                },
                q4: {
                    q: "Comment fonctionne l'intégration de PopClip ?",
                    a: "Si vous avez installé PopClip, Wright ajoute ses actions au menu contextuel de PopClip. Sélectionnez du texte dans n'importe quelle application, et PopClip affichera les options pour réécrire, traduire ou discuter — aucun raccourci clavier requis. Vous pouvez télécharger l'extension PopClip depuis les Paramètres de Wright."
                },
                q5: {
                    q: "Mes données sont-elles en sécurité ?",
                    a: "Oui. Wright ne collecte ni ne stocke vos données personnelles. Votre texte est traité par l'IA et le résultat est renvoyé de manière directe — Wright ne journalise ni ne conserve votre contenu. Consultez notre Politique de Confidentialité pour plus de détails."
                },
                q6: {
                    q: "Quels sont les prérequis système ?",
                    a: "Wright nécessite macOS 14.0 (Sonoma) ou version ultérieure. Il a besoin des permissions d'Accessibilité pour lire et remplacer le texte sélectionné à l'échelle du système. L'application est légère et s'exécute dans la barre de menus."
                },
                q7: {
                    q: "Comment fonctionnent les raccourcis clavier ?",
                    a: "Wright utilise des raccourcis clavier globaux qui fonctionnent dans n'importe quelle application. Les raccourcis par défaut peuvent être modifiés dans Paramètres → Raccourcis. Sélectionnez du texte n'importe où, appuyez sur le raccourci et le résultat apparaît instantanément — vous pouvez le copier, l'insérer ou l'agrandir en une session de Chat."
                }
            },
            contact: {
                title: "Nous Contacter",
                email: "Support par Email",
                response: "Nous répondons généralement sous 24 heures."
            }
        },
        privacy: {
            title: "Politique de Confidentialité",
            meta: {
                title: "Politique de Confidentialité | Wright",
                desc: "Politique de confidentialité de Wright. Nous ne collectons pas de données d'utilisation personnelles."
            },
            lastUpdated: "Dernière Mise à Jour : Février 2026",
            commitment: {
                title: "Notre Engagement pour la Confidentialité",
                text: "Wright est conçu en pensant à votre vie privée. Nous croyons en la transparence et réduisons la collecte de données au strict nécessaire.",
                keyPoints: {
                    title: "Points Clés de Confidentialité :",
                    list: [
                        "Nous n'accédons pas ni ne stockons le contenu de vos conversations",
                        "Nous collectons uniquement votre e-mail pour la gestion du compte",
                        "Nous utilisons des connexions minimales pour la fourniture de services"
                    ]
                }
            },
            dataCollection: {
                title: "Collecte de Données & Architecture",
                text: "Wright utilise un service API backend sécurisé pour traiter vos requêtes. Nous ne stockons ni l'historique de vos conversations ni leur contenu.",
                apiKeys: {
                    title: "Architecture de Service",
                    text: "Toutes les interactions sont traitées via notre API sécurisée. Votre contenu ne transite que pour la génération des réponses et n'est jamais sauvegardé.",
                    list: [
                        "Nous collectons uniquement l'e-mail de votre compte",
                        "Données minimales utilisées pour le dépannage",
                        "Aucune rétention des données de conversation",
                        "Implémentation sécurisée"
                    ]
                }
            },
            thirdParty: {
                title: "Services Tiers",
                text: "Lorsque vous utilisez Wright pour interagir avec des services LLM (tels que OpenAI, Groq, etc.), vos interactions sont régies par les politiques de confidentialité de ces services. Nous vous recommandons de consulter les politiques de confidentialité des services LLM que vous choisissez d'utiliser :",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Politique de confidentialité d'OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Politique de confidentialité de Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Politique de confidentialité de xAI</a>"
                ]
            },
            security: {
                title: "Sécurité des Données",
                text: "Les informations de votre compte sont stockées en toute sécurité. Nous employons les mesures de sécurité standard de l'industrie pour protéger vos données."
            },
            changes: {
                title: "Modifications de cette Politique de Confidentialité",
                text: "Nous pouvons mettre à jour notre Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique sur cette page et en mettant à jour la date de \"Dernière Mise à Jour\"."
            },
            contact: {
                title: "Nous Contacter",
                text: "Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à :"
            }
        },
        howItWorks: {
            title: "Comment Çap Fonctionne",
            subtitle: "Utilisez des raccourcis clavier ou PopClip pour accéder à tout grâce au clic droit.",
            step1: {
                title: "Sélectionner du Texte",
                description: "Surlignez n'importe quel texte dans n'importe quelle application de votre Mac."
            },
            step2: {
                title: "Appuyer sur le Raccourci",
                description: "Appuyez sur votre raccourci configuré ou utilisez PopClip pour déclencher la réécriture, la traduction ou le chat."
            },
            step3: {
                title: "Obtenir le Résultat",
                description: "Le texte enrichi par l'IA apparaît instantanément dans une fenêtre flottante. Copiez-le ou remplacez la source en seul clic."
            }
        },
        features: {
            title: "Fonctionnalités Clés",
            quickView: {
                title: "Lancez Rapide, Explorez en Profondeur",
                description: "Lancez une requête avec la vue rapide (Quick View). Si la conversation nécessite plus de profondeur, basculez vers l'interface de Chat complète : le contexte est automatiquement conservé."
            },
            rewrite: {
                title: "Amélioration de Texte en 1 Touche",
                description: "Sélectionnez le texte, appuyez sur un raccourci et obtenez instantanément une version soignée. Wright corrige les fautes de frappe et la grammaire en conservant l'esprit d'origine, et détecte automatiquement votre langue."
            },
            translate: {
                title: "Traduction Instantanée",
                description: "Traduisez le texte sélectionné entre plusieurs langues par un seul raccourci. Wright détecte la langue source et la traduit pour vous, évitant les passages fatiguants d'une app à l'autre."
            },
            customRoles: {
                title: "Rôles d'IA Personnalisables",
                description: "Créez vos propres rôles d'IA, tels qu'un réviseur de code source, copywriter, concepteur d'e-mails — chacun muni de son propre prompt système."
            },
            setup: {
                title: "Votre Configuration, Vos Choix",
                description: "Paramétrez vos raccourcis pour chacun des rôles IA et adaptez l'interface à votre goût. Wright prend en charge différents fournisseurs de LLM pour répondre au mieux à vos exigences.",
                list: [
                    "Raccourcis Clavier Flexibles",
                    "Assortiment de Modèles IA (OpenAI, Gemini, Grok, Groq)",
                    "Intégration via PopClip"
                ]
            }
        },
        pricing: {
            title: "Choisissez Votre Offre",
            free: {
                tier: "Gratuit",
                tokens: "1 000 jetons / jour",
                reset: "Remise à zéro quotidienne",
                cta: "Démarrer"
            },
            basic: {
                tier: "Basique",
                period: "/ an",
                tokens: "500 000 jetons / mois",
                reset: "Renouvelé le 1er du mois",
                cta: "S'abonner"
            },
            pro: {
                badge: "Le Plus Populaire",
                tier: "Pro",
                period: "/ mois",
                tokens: "10 000 000 jetons / mois",
                reset: "Renouvelé le 1er du mois",
                cta: "Passer en Pro"
            }
        },
        benefits: {
            title: "Pourquoi Wright ?",
            subtitle: "Un assistant macOS natif qui ne vous encombre pas tant que vous ne l'appelez pas.",
            everywhere: {
                title: "Fonctionne Partout",
                description: "Doté de raccourcis globaux et d'une intégration PopClip, Wright agit dans l'App de votre choix — Mail, Notes, Slack, le navigateur web, ou tout champ texte macOS."
            },
            free: {
                title: "Démarrage Gratuit",
                description: "Aucune clé API requise pour tester, et pas de setup requis. Ce forfait gratuit permet d'essayer tout avant de passer au stade supérieur."
            }
        },
        download: {
            title: "Démarrer Dès Maintenant",
            description: "Téléchargez Wright gratuitement et commencez à l'utiliser dès aujourd'hui.",
            cta: "Télécharger pour macOS",
            guide: "Guide d'Utilisation",
            note: "Plan gratuit inclus · Pas de configuration nécessaire"
        },
        footer: {
            rights: "© 2026 Wright. Tous droits réservés.",
            privacy: "Politique de Confidentialité",
            support: "Support"
        }
    }, de: {
        meta: {
            title: "Wright - KI-Assistent für macOS | Umschreiben, Übersetzen & Chatten",
            description: "Wright ist ein anpassbarer KI-Assistent für macOS. Erstellen Sie maßgeschneiderte Rollen, lassen Sie Texte mühelos umschreiben und übersetzen und chatten Sie direkt über ein Tastaturkürzel oder PopClip. Kostenlos nutzen."
        },
        nav: {
            features: "Funktionen",
            download: "Herunterladen",
            support: "Support",
            guide: "Handbuch",
            toggle: "Sprache"
        },
        hero: {
            title: "Ihr KI-Assistent für macOS",
            subtitle: "Wright ist ein voll anpassbarer KI-Assistent. Erstellen Sie bestimmte Akteur-Rollen, lassen Sie unleserliche Texte kinderleicht umschreiben oder chatten Sie nahtlos—alle über PopClip oder einen einfachen Shortcut auf Ihrer Tastatur. Kostenlose Nutzung.",
            download: "Für macOS herunterladen"
        },
        guide: {
            title: "Wright Benutzerhandbuch",
            quickStart: {
                title: "Schnellstart",
                accessibility: {
                    title: "HINWEIS: Bedienungshilfen-Berechtigung erforderlich",
                    desc1: "Wright benötigt Bedienungshilfen-Berechtigungen, um globale Tastaturkurzbefehle zu überwachen.",
                    desc2: "Sie können diese Einstellungen auch manuell unter Systemeinstellungen > Datenschutz & Sicherheit > Bedienungshilfen aktivieren.",
                    desc3: "Möglicherweise müssen Sie die App beenden und neu starten."
                },
                shortcuts: {
                    title: "Tastaturkurzbefehle verwenden",
                    desc: "Nutzen Sie Wrights Funktionen zum Polieren, Übersetzen und Chatten per Kurzbefehl."
                },
                menuBar: {
                    title: "Verwendung über die Apple-Menüleiste",
                    desc: "Sie können Wright auch über Ihre Menüleiste verwenden."
                }
            },
            configureModels: {
                title: "LLM-Modelle konfigurieren",
                step1: {
                    title: "1. Einstellungen öffnen",
                    list: ["Wright App öffnen", "App-Menü → Einstellungen"]
                },
                step2: {
                    title: "2. API-Key konfigurieren",
                    list: ["Im Einstellungsfenster zum Tab \"LLM-Modell\" gehen", "Gewünschten LLM-Anbieter wählen", "API-Key in das entsprechende Feld einfügen", "Auf Speichern klicken"]
                },
                step3: {
                    title: "3. Modellauswahl",
                    list: ["Nach dem Speichern des API-Keys können Sie Ihre bevorzugte Modellversion wählen", "Dann ist Ihr Modell einsatzbereit"]
                }
            },
            getApiKeys: {
                title: "LLM-API-Keys erhalten",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Konto einrichten", list: ["<a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI Plattform</a> besuchen", "Registrieren oder anmelden"] },
                    step2: { title: "2. Key generieren", list: ["Zu \"API keys\" navigieren", "\"Create new secret key\" klicken", "Key kopieren"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Konto einrichten", list: ["<a href=\"https://console.groq.com\" target=\"_blank\">Groq Console</a> besuchen", "Registrieren"] },
                    step2: { title: "2. Key generieren", list: ["Zu \"API Keys\" navigieren", "\"Create API Key\" klicken", "Key kopieren"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Konto einrichten", list: ["Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a> besuchen", "Mit X anmelden"] },
                    step2: { title: "2. Key generieren", list: ["Benutzername → \"API Keys\"", "\"Create API Key\" klicken", "Key kopieren"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Konto einrichten", list: ["<a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek Plattform</a> besuchen", "Registrieren"] },
                    step2: { title: "2. Key generieren", list: ["Zu \"API Keys\" navigieren", "\"Create new API key\" klicken", "Key kopieren"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Konto einrichten", list: ["<a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a> besuchen", "Mit Google anmelden"] },
                    step2: { title: "2. Key generieren", list: ["\"Get API key\" klicken", "\"Create API key\" klicken", "Key kopieren"] }
                }
            },
            security: {
                title: "Wichtige Sicherheitshinweise",
                list: [
                    "Teilen Sie niemals Ihren API-Key",
                    "Speichern Sie Keys sicher",
                    "Wechseln Sie Keys regelmäßig",
                    "Überwachen Sie die Nutzung"
                ]
            }
        },
        support: {
            title: "Support-Center",
            subtitle: "Antworten finden und Hilfe erhalten.",
            links: {
                guide: {
                    title: "Benutzerhandbuch",
                    desc: "Schritt-für-Schritt-Einrichtung: Tastaturkürzel, individuelle Rollen und Zugriffsrechte.",
                    cta: "Handbuch lesen"
                },
                issue: {
                    title: "Problem Melden",
                    desc: "Sie haben einen Fehler entdeckt oder Vorschläge? Eröffnen Sie ein GitHub-Issue.",
                    cta: "Fehler senden"
                }
            },
            faq: {
                title: "Häufig gestellte Fragen (FAQ)",
                q1: {
                    q: "Was kann Wright?",
                    a: "Wright ist ein KI-Assistent für macOS. Er bietet drei grundlegende Funktionen, die Sie aus jeder App heraus per Tastenkürzel oder PopClip auslösen können:",
                    list: [
                        "<strong>Umschreiben</strong> — Polieren Sie den ausgewählten Text hinsichtlich Grammatik, Tonfall und Klarheit und bewahren Sie dabei die ursprüngliche Bedeutung.",
                        "<strong>Übersetzen</strong> — Übersetzen Sie die Auswahl augenblicklich zwischen verschiedenen Sprachen.",
                        "<strong>Chat</strong> — Stellen Sie Fragen und chatten Sie mit der KI, bei Bedarf kann aus einem simplen 'Quick View' sofort ein umfangreicher Chat aufgerufen werden."
                    ]
                },
                q2: {
                    q: "Welche KI-Modelle werden unterstützt?",
                    a: "Wright wird von den führenden KI-Modellen angetrieben:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "Was sind benutzerdefinierte KI-Rollen?",
                    a: "Individuelle Rollen lassen Sie eigene KI-Akteure aufbauen, hinterlegt mit eigenen System-Prompts. Sie könnten einen \"Code Reviewer\", einen \"Copywriter\" oder einen \"Übersetzer\" kreieren — alle handeln nach der jeweiligen Arbeitsanweisung unterschiedlich. Der Rollenwechsel in Quick View oder Chat erfolgt sofort."
                },
                q4: {
                    q: "Wie funktioniert die Integration mit PopClip?",
                    a: "Wenn PopClip installiert ist, blendet sich Wright dem dortigen Menü ein. Sie wählen einen Text aus, PopClip blendet automatisch Wrights Umschreib- oder Chatoption ein — dann benötigt es keine Tastenkürzel mehr. Das Plugin zu PopClip laden Sie in den Wright-Einstellungen herunter."
                },
                q5: {
                    q: "Sind meine Daten sicher?",
                    a: "Ja. Wright erhebt oder protokolliert niemals persönliche Daten. Textauswahlen werden von der KI verarbeitet und zurückgeliefert — Wright selbst verwahrt ihre Texte keinesfalls auf oder sammelt sie an. Näheres dazu in unseren Datenschutzbestimmungen."
                },
                q6: {
                    q: "Wie lauten die Systemvoraussetzungen?",
                    a: "Wright erfordert macOS 14.0 (Sonoma) oder neuer. Es erfordert die Berechtigungen für Bedienungshilfen um das Lesen und Ersetzen ihres Textes aus der jeweiligen Fremdapp vornehmen zu können. Es handelt sich um eine speicherfreundliche Menüleisten-App."
                },
                q7: {
                    q: "Wie funktionieren Tastaturkürzel?",
                    a: "Wright operiert mittels globaler Kürzel. So funktionieren diese ungeachtet der gerade offenen App auf macOS. Anpassbar im Menü unter Einstellungen → Verknüpfungen. Nach Markierung des Texts kann das Ausführen mittels Shortcuts ausgelöst werden und zeigt sofort Treffer an — diese lassen sich fortan in einen weitreichenden Chat ausdehnen."
                }
            },
            contact: {
                title: "Nehmen Sie Kontakt zu uns auf",
                email: "Support-Email",
                response: "Die übliche Responsezeit beträgt zirka 24 Stunden."
            }
        },
        privacy: {
            title: "Datenschutzrichtlinie",
            meta: {
                title: "Datenschutzrichtlinie | Wright",
                desc: "Datenschutzrichtlinie von Wright. Wir sammeln keine persönlichen Nutzungsdaten."
            },
            lastUpdated: "Zuletzt Aktualisiert: Februar 2026",
            commitment: {
                title: "Unser Engagement für den Datenschutz",
                text: "Wright ist so konzipiert, dass Ihre Privatsphäre geschützt wird. Wir glauben an Transparenz und beschränken die Datenerfassung auf das absolut Notwendigste.",
                keyPoints: {
                    title: "Zentrale Datenschutzpunkte:",
                    list: [
                        "Wir haben keinen Zugriff auf den Inhalt Ihrer Gespräche und speichern diesen nicht",
                        "Wir erfassen lediglich Ihre E-Mail zur Kontoverwaltung",
                        "Wir nutzen nur essenzielle Verbindungen zur Bereitstellung der Dienste"
                    ]
                }
            },
            dataCollection: {
                title: "Datenerfassung & Architektur",
                text: "Wright nutzt einen sicheren Backend-API-Dienst zur Verarbeitung Ihrer Anfragen. Weder Ihr Gesprächsverlauf noch dessen Inhalte werden von uns gespeichert.",
                apiKeys: {
                    title: "Dienstarchitektur",
                    text: "Sämtliche Interaktionen werden über unsere sichere API abgewickelt. Ihre Inhalte werden ausschließlich zur Erstellung von Antworten durchgeleitet und niemals gespeichert.",
                    list: [
                        "Wir erfassen lediglich die E-Mail Ihres Kontos",
                        "Minimal notwendige Daten für die Fehlerbehebung",
                        "Keine Speicherung von Gesprächsdaten",
                        "Sichere Implementierung"
                    ]
                }
            },
            thirdParty: {
                title: "Drittanbieterdienste",
                text: "Wenn Sie Wright nutzen, um mit LLM-Diensten (wie z.B. OpenAI, Groq usw.) zu interagieren, unterliegen Ihre Interaktionen den Datenschutzrichtlinien der jeweiligen Anbieter. Wir empfehlen, sich die Datenschutzbestimmungen der von Ihnen gewählten LLM-Dienste durchzulesen:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI Datenschutzrichtlinie</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq Datenschutzrichtlinie</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI Datenschutzrichtlinie</a>"
                ]
            },
            security: {
                title: "Datensicherheit",
                text: "Ihre Kontoinformationen werden sicher gespeichert. Wir setzen branchenübliche Sicherheitsmaßnahmen ein, um Ihre Daten zu schützen."
            },
            changes: {
                title: "Änderungen dieser Datenschutzrichtlinie",
                text: "Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Über solche Änderungen werden wir Sie in Kenntnis setzen, indem wir die neue Version auf dieser Seite veröffentlichen und das Datum \"Zuletzt Aktualisiert\" anpassen."
            },
            contact: {
                title: "Kontaktiere Uns",
                text: "Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, wenden Sie sich bitte an:"
            }
        },
        howItWorks: {
            title: "Wie Es Funktioniert",
            subtitle: "Nutzen Sie Tastenkürzel oder interagieren Sie über den Rechtsklick mit PopClip.",
            step1: {
                title: "Text Auswählen",
                description: "Markieren Sie einen beliebigen Text auf einer beliebigen Applikation über den Mac."
            },
            step2: {
                title: "Tastenkürzel Nutzen",
                description: "Drücken Sie Ihr konfiguriertes Kürzel oder steuern Sie einfach per PopClip ins Rewrite, Translate und den Chat Modus."
            },
            step3: {
                title: "Ergebnis Erhalten",
                description: "Die durch KI bearbeitete Version erscheint in Windeseile in einem schmalen Float-Fenster. Sie können alles in die Zwischenablage übertragen oder direkt austauschen."
            }
        },
        features: {
            title: "Kernfunktionen",
            quickView: {
                title: "Schneller Start, Tiefgehende Details",
                description: "Erstellen Sie schnelle Anfragen im Quick-View Format. Wenn Sie tiefer blicken möchten, gelangen Sie stets unkompliziert zur vollständigen Chat-Schnittstelle. Es wird jeglicher Kontext beibehalten."
            },
            rewrite: {
                title: "Text auf Hochglanz Polieren",
                description: "Markieren, Kürzel bedienen, bessere Ausfertigung abrufen. Wright filtert Kommas, Grammatik, Tippfehler oder merkwürdige Redewendungen unmerklich ab, während der eigentliche Kern des Inhalts verbleibt. Erkennt natürlich alle Schreib-Sprachen automatisch."
            },
            translate: {
                title: "Sofortige Übersetzung",
                description: "Wir übersetzen Ihre erfassten Texte anhand eines einzigen Shortcuts ohne Verzögerung in die gwünschte Sprache. Wright ermittelt Ausgangssprache selbstständig und liefert die Version zurück—sodass Applikations- und Browserwechsel verschwinden."
            },
            customRoles: {
                title: "Personalisierte Rollen",
                description: "Erstellen Sie Ihre KI-Akteure — ob es darum geht Codepassagen zu rezensieren, einen Werbetext zu verfassen oder Mails als Entwurf anzulegen. Steuern Sie den Befehl der Basis von innen."
            },
            setup: {
                title: "Alles nach Ihrem Geschmack",
                description: "Passen Sie die Tastenanschläge Ihren AI Agenten ganz einfach den eigenen Routinen an. Wright ist mit allen gängigen Modellen von LLM Anbietern kombinierbar und ermöglicht absolute Passgenauigkeit nach Wunsch.",
                list: [
                    "Anpassbare und flexible Tastaturkürzel",
                    "Unterstützte Modelle wie OpenAI, Gemini, Grok, Groq",
                    "PopClip ist stark integriert"
                ]
            }
        },
        pricing: {
            title: "Wählen Sie Ihren Plan",
            free: {
                tier: "Kostenlos",
                tokens: "1.000 Token / Tag",
                reset: "Täglicher Reset (Mitternacht UTC)",
                cta: "Loslegen"
            },
            basic: {
                tier: "Basic",
                period: "/ Jahr",
                tokens: "500.000 Token / Monat",
                reset: "Reset am 1. jedes Monats",
                cta: "Abonnieren"
            },
            pro: {
                badge: "Am Beliebtesten",
                tier: "Pro",
                period: "/ Monat",
                tokens: "10.000.000 Token / Monat",
                reset: "Reset am 1. jedes Monats",
                cta: "Pro Holen"
            }
        },
        benefits: {
            title: "Warum Wright?",
            subtitle: "Es ist eine rein konzipierte Applikation auf macOS Architektur, die stets unauffällig arbeitet und nie zur Plage wird.",
            everywhere: {
                title: "Funktioniert Überall",
                description: "Die globalen Funktionen interagieren dank Apples Popclip mit Mail, Notizen, im Web, Slack oder auf all den denkbaren Anzeigemasken."
            },
            free: {
                title: "Kostenfreier Start",
                description: "Es gibt weder Schlüsselanforderung von APIs oder verwirrendes Startsetup. Wright inkludiert bereits kostenlos alles um vor der Entscheidung ins Detail zu blicken."
            }
        },
        download: {
            title: "Jetzt Starten",
            description: "Installieren Sie Wright kostenfrei um sofort Ihre Gewinne und das Level in die nächste Stufe zu skalieren.",
            cta: "Herunterladen für macOS",
            guide: "Benutzerhandbuch",
            note: "Kostennloses Testen mit inbegriffen · Kein Setup zwingend"
        },
        footer: {
            rights: "© 2026 Wright. Alle Rechte vorbehalten.",
            privacy: "Datenschutzrichtlinie",
            support: "Support"
        }
    },
    ja: {
        meta: {
            title: "Wright - macOS用 AIアシスタント | リライト、翻訳、チャット",
            description: "Wrightはカスタマイズ可能なmacOS用AIアシスタントです。独自の役割を作成し、キーボードショートカットやPopClipからテキストのリライト、翻訳、チャットが簡単に行えます。無料でご利用いただけます。"
        },
        nav: {
            features: "機能",
            download: "ダウンロード",
            support: "サポート",
            guide: "ガイド",
            toggle: "言語"
        },
        hero: {
            title: "あなたのmacOS用AIアシスタント",
            subtitle: "Wrightはカスタマイズ可能なmacOS用AIアシスタントです。専用の役割の作成、テキストの簡単なリライトや翻訳、チャットまで—キーボードショートカットやPopClipからすべて操作可能です。無料でご利用いただけます。",
            download: "macOS版をダウンロード"
        },
        guide: {
            title: "Wright ユーザーガイド",
            quickStart: {
                title: "クイックスタート",
                accessibility: {
                    title: "注意：アクセシビリティ権限が必要です",
                    desc1: "Wrightはグローバルキーボードショートカットを監視するためにアクセシビリティ権限を必要とします。",
                    desc2: "システム設定 > プライバシーとセキュリティ > アクセシビリティ から手動で有効にすることもできます。",
                    desc3: "設定を反映させるにはアプリを再起動する必要がある場合があります。"
                },
                shortcuts: {
                    title: "キーボードショートカットの使用",
                    desc: "ショートカットを使ってWrightの機能を利用できます。"
                },
                menuBar: {
                    title: "メニューバーからの使用",
                    desc: "メニューバーからもWrightを使用できます。"
                }
            },
            configureModels: {
                title: "LLMモデルの設定方法",
                step1: {
                    title: "1. 設定にアクセス",
                    list: ["Wrightアプリを開く", "アプリメニュー → 設定"]
                },
                step2: {
                    title: "2. APIキーの設定",
                    list: ["「LLMモデル」タブへ移動", "プロバイダーを選択", "APIキーを貼り付け", "保存をクリック"]
                },
                step3: {
                    title: "3. モデルの選択",
                    list: ["APIキー保存後、モデルバージョンを選択", "これで準備完了です"]
                }
            },
            getApiKeys: {
                title: "LLM APIキーの取得方法",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. アカウント設定", list: ["<a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI Platform</a>へ", "登録またはログイン"] },
                    step2: { title: "2. キー生成", list: ["\"API keys\"へ", "\"Create new secret key\"をクリック", "キーをコピー"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. アカウント設定", list: [" <a href=\"https://console.groq.com\" target=\"_blank\">Groq Console</a>へ", "登録"] },
                    step2: { title: "2. キー生成", list: ["\"API Keys\"へ", "\"Create API Key\"をクリック", "キーをコピー"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. アカウント設定", list: ["Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>へ", "Xでログイン"] },
                    step2: { title: "2. キー生成", list: ["ユーザー名 → \"API Keys\"", "\"Create API Key\"をクリック", "キーをコピー"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. アカウント設定", list: ["<a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek Platform</a>へ", "登録"] },
                    step2: { title: "2. キー生成", list: ["\"API Keys\"へ", "\"Create new API key\"をクリック", "キーをコピー"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. アカウント設定", list: [" <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>へ", "Googleでログイン"] },
                    step2: { title: "2. キー生成", list: ["\"Get API key\"をクリック", "\"Create API key\"をクリック", "キーをコピー"] }
                }
            },
            security: {
                title: "重要なセキュリティ上の注意",
                list: [
                    "APIキーを共有しないでください",
                    "キーを安全に保管してください",
                    "定期的にキーを変更してください",
                    "使用状況を監視してください"
                ]
            }
        },
        support: {
            title: "サポートセンター",
            subtitle: "回答を検索し、支援を受ける。",
            links: {
                guide: {
                    title: "ユーザーガイド",
                    desc: "アクセシビリティの許可、キーボードショートカット、カスタムロールなどの手順。",
                    cta: "ガイドを表示"
                },
                issue: {
                    title: "問題を報告する",
                    desc: "バグや提案はありますか？ GitHub で Issue を開いてください。",
                    cta: "問題を報告"
                }
            },
            faq: {
                title: "よくある質問",
                q1: {
                    q: "Wright は何ができますか？",
                    a: "Wright は macOS 用の AI アシスタントです。どのアプリからでも、キーボードショートカットや PopClip を使って起動できる 3 つの基本機能を提供します：",
                    list: [
                        "<strong>リライト</strong> — 元の意味を保ったまま、選択したテキストの文法、トーン、明確さを推敲します。",
                        "<strong>翻訳</strong> — 選択したテキストを瞬時に言語間で翻訳します。",
                        "<strong>チャット</strong> — AI に質問したり会話したりでき、軽量な Quick View からフルチャットインターフェースへの移行も可能です。"
                    ]
                },
                q2: {
                    q: "どの AI モデルがサポートされていますか？",
                    a: "Wright はトップクラスの AI モデルによって駆動されています：",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "カスタム AI ロールとは何ですか？",
                    a: "カスタムロールを使用すると、独自のシステムプロンプトを持つ特化した AI のペルソナを作成できます。たとえば、「コードレビュアー」、「コピーライター」、「翻訳者」のロールを設定でき、それぞれがあなたが定義した指示に基づいて異なる振る舞いをします。Quick View やチャットから瞬時にロールを切り替えられます。"
                },
                q4: {
                    q: "PopClip の統合はどのように機能しますか？",
                    a: "PopClip がインストールされている場合、Wright は PopClip のポップアップメニューにアクションを追加します。どのアプリでもテキストを選択すると、PopClip がリライト、翻訳、またはチャットのオプションを表示します（キーボードショートカットは不要です）。PopClip の拡張機能は Wright の設定からダウンロードできます。"
                },
                q5: {
                    q: "データは安全ですか？",
                    a: "はい。Wright がお客様の個人データを収集または保存することはありません。テキストは AI によって処理され、結果は直接返されます。Wright がコンテンツをログに記録したり保持したりすることはありません。詳細はプライバシーポリシーをご覧ください。"
                },
                q6: {
                    q: "システム要件は何ですか？",
                    a: "Wright は macOS 14.0 (Sonoma) 以降を必要とします。システム全体で選択したテキストを読み込み、置換するためにアクセシビリティの許可が必要です。アプリは軽量で、メニューバーアプリとして動作します。"
                },
                q7: {
                    q: "キーボードショートカットはどのように機能しますか？",
                    a: "Wright は、どのアプリでも機能するグローバルキーボードショートカットを使用します。デフォルトのショートカットは [設定] → [ショートカット] でカスタマイズできます。どこでもテキストを選択してショートカットを押すと、結果がすぐに表示されます。コピー、挿入、またはチャットセッションへの展開が可能です。"
                }
            },
            contact: {
                title: "お問い合わせ",
                email: "メールサポート",
                response: "通常 24 時間以内に返信いたします。"
            }
        },
        privacy: {
            title: "プライバシーポリシー",
            meta: {
                title: "プライバシーポリシー | Wright",
                desc: "Wrightのプライバシーポリシーです。個人利用データの収集は行いません。"
            },
            lastUpdated: "最終更新日：2026年2月",
            commitment: {
                title: "プライバシーへの取り組み",
                text: "Wrightはお客様のプライバシーを念頭に置いて設計されています。私たちは透明性を重視し、データ収集を必要最小限に抑えています。",
                keyPoints: {
                    title: "プライバシーに関する重要ポイント：",
                    list: [
                        "お客様の会話内容へのアクセスや保存は行いません",
                        "アカウント管理のためにお客様のメールアドレスのみを収集します",
                        "サービス提供のために必要最小限の接続を使用します"
                    ]
                }
            },
            dataCollection: {
                title: "データ収集とアーキテクチャ",
                text: "Wrightは、お客様のリクエストを処理するために安全なバックエンドAPIサービスを利用しています。会話履歴や内容は一切保存されません。",
                apiKeys: {
                    title: "サービスアーキテクチャ",
                    text: "すべてのやり取りは、当社の安全なAPIを介して処理されます。お客様のコンテンツは応答の生成にのみ使用され、保存されることはありません。",
                    list: [
                        "アカウントのメールアドレスのみを収集します",
                        "トラブルシューティングに使用されるデータは最小限です",
                        "会話データの保持は行いません",
                        "安全性の高い実装"
                    ]
                }
            },
            thirdParty: {
                title: "サードパーティサービス",
                text: "Wrightを使用してLLMサービス（OpenAI、Groqなど）と対話する場合、それらのやり取りは該当サービスのプライバシーポリシーに準拠します。ご利用になるLLMサービスのプライバシーポリシーを確認することをお勧めします：",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI プライバシーポリシー</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq プライバシーポリシー</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI プライバシーポリシー</a>"
                ]
            },
            security: {
                title: "データセキュリティ",
                text: "お客様のアカウント情報は安全に保存されます。業界標準のセキュリティ対策を用いてお客様のデータを保護します。"
            },
            changes: {
                title: "本プライバシーポリシーの変更について",
                text: "当社は、本プライバシーポリシーを随時更新することがあります。変更があった場合は、このページに新しいプライバシーポリシーを掲載し、「最終更新日」を更新することでお知らせします。"
            },
            contact: {
                title: "お問い合わせ",
                text: "本プライバシーポリシーについてご質問がある場合は、以下までお問い合わせください："
            }
        },
        howItWorks: {
            title: "使い方",
            subtitle: "キーボードショートカットを利用するか、PopClipと連携して右クリックから全機能にアクセスできます。",
            step1: {
                title: "テキストの選択",
                description: "Mac上のあらゆるアプリでテキストをハイライトします。"
            },
            step2: {
                title: "ショートカットを押す",
                description: "設定したショートカットを押すか、PopClipを使用してリライト、翻訳、またはチャットを起動します。"
            },
            step3: {
                title: "結果を取得",
                description: "AIによって強化されたテキストがフローティングウィンドウに瞬時に表示されます。ワンクリックでコピーまたは置き換えが可能です。"
            }
        },
        features: {
            title: "主な機能",
            quickView: {
                title: "素早く始め、深く掘り下げる",
                description: "軽量なQuick Viewでサッと質問を開始します。会話の深掘りが必要なときは、完全なチャットインターフェースに移行でき、コンテキストは自動的に引き継がれます。"
            },
            rewrite: {
                title: "ワンキーで文章を推敲",
                description: "テキストを選択してショートカットを押すだけで、洗練されたバージョンがすぐに得られます。Wrightは元の意味を保ちつつ、誤字や文法、不自然な言い回しを修正します。入力言語も自動検出します。"
            },
            translate: {
                title: "瞬間翻訳",
                description: "ワンショートカットで選択したテキストを言語間で翻訳します。Wrightは原文の言語を検出して翻訳するため、別のアプリやブラウザのタブに切り替える必要はありません。"
            },
            customRoles: {
                title: "カスタムAIロール",
                description: "コードレビュー、コピーライティング、メールの起草など、それぞれに独自のシステムプロンプトと振る舞いを持つ自分専用のAIロールを作成できます。"
            },
            setup: {
                title: "あなた好みの設定",
                description: "各AIロールのショートカットを設定し、ワークフローに合わせてインターフェースをカスタマイズできます。Wrightは複数のLLMプロバイダーをサポートしており、ニーズに最適なものを選択できます。",
                list: [
                    "カスタマイズ可能なキーボードショートカット",
                    "複数のAIモデル（OpenAI、Gemini、Grok、Groq）",
                    "PopClipとの統合"
                ]
            }
        },
        pricing: {
            title: "プランの選択",
            free: {
                tier: "無料",
                tokens: "1,000 トークン / 日",
                reset: "毎日リセット (UTC 0時)",
                cta: "はじめる"
            },
            basic: {
                tier: "ベーシック",
                period: " / 年",
                tokens: "500,000 トークン / 月",
                reset: "毎月1日にリセット",
                cta: "登録する"
            },
            pro: {
                badge: "一番人気",
                tier: "プロ",
                period: " / 月",
                tokens: "10,000,000 トークン / 月",
                reset: "毎月1日にリセット",
                cta: "プロにアップグレード"
            }
        },
        benefits: {
            title: "なぜWrightなのか？",
            subtitle: "必要な時まで邪魔をしない、ネイティブなmacOSアシスタントです。",
            everywhere: {
                title: "どこでも動作",
                description: "グローバルなキーボードショートカットとPopClip統合により、メール、メモ、Slack、お使いのブラウザなど、Macのあらゆるアプリやテキスト入力欄で利用可能です。"
            },
            free: {
                title: "無料で開始",
                description: "APIキーも設定も不要です。無料プランが用意されており、アップグレードする前にすべての機能を試すことができます。"
            }
        },
        download: {
            title: "すぐにはじめる",
            description: "Wrightを無料でダウンロードして、今すぐ使い始めましょう。",
            cta: "macOS版をダウンロード",
            guide: "ユーザーガイド",
            note: "無料プランが含まれています · 設定不要"
        },
        footer: {
            rights: "© 2026 Wright. 無断複写・転載を禁じます。",
            privacy: "プライバシーポリシー",
            support: "サポート"
        }
    }, ko: {
        meta: {
            title: "Wright - macOS용 AI 어시스턴트 | 윤문, 번역 및 채팅",
            description: "Wright는 사용자 정의 가능한 macOS용 AI 어시스턴트입니다. 맞춤형 역할을 만들고 텍스트를 손쉽게 윤문하거나 번역하며 채팅해 보세요—키보드 단축키나 PopClip으로 모든 작업이 가능합니다. 무료 이용."
        },
        nav: {
            features: "기능",
            download: "다운로드",
            support: "고객지원",
            guide: "가이드",
            toggle: "언어"
        },
        hero: {
            title: "당신을 위한 macOS AI 어시스턴트",
            subtitle: "Wright는 사용자 정의 가능한 macOS용 AI 어시스턴트입니다. 맞춤형 역할을 만들고, 텍스트를 손쉽게 다시 쓰거나 번역하고, 채팅을 즐겨보세요—이 모든 것이 키보드 단축키나 PopClip에서 가능합니다. 무료로 사용하세요.",
            download: "macOS용 다운로드"
        },
        guide: {
            title: "Wright 사용자 가이드",
            quickStart: {
                title: "빠른 시작",
                accessibility: {
                    title: "참고: 손쉬운 사용 권한 필요",
                    desc1: "Wright는 전체 키보드 단축키를 모니터링하기 위해 손쉬운 사용 권한이 필요합니다.",
                    desc2: "시스템 설정 > 개인정보 보호 및 보안 > 손쉬운 사용으로 이동하여 Wright를 활성화하여 수동으로 설정할 수도 있습니다.",
                    desc3: "설정을 적용하려면 앱을 종료하고 다시 시작해야 할 수 있습니다."
                },
                shortcuts: {
                    title: "키보드 단축키 사용",
                    desc: "단축키를 사용하여 Wright의 윤문, 번역 및 빠른 채팅 기능을 사용할 수 있습니다."
                },
                menuBar: {
                    title: "Apple 메뉴 막대 사용",
                    desc: "메뉴 막대에서도 Wright를 사용할 수 있습니다."
                }
            },
            configureModels: {
                title: "LLM 모델 구성 방법",
                step1: {
                    title: "1. 설정 액세스",
                    list: ["Wright 앱 열기", "앱 메뉴 → 설정"]
                },
                step2: {
                    title: "2. API 키 구성",
                    list: ["설정 창에서 \"LLM 모델\" 탭으로 이동", "원하는 LLM 제공업체 선택", "해당 필드에 API 키 붙여넣기", "저장을 클릭하여 키를 안전하게 저장"]
                },
                step3: {
                    title: "3. 모델 선택",
                    list: ["API 키 저장 후 선호하는 모델 버전 선택 가능", "이제 모델을 사용할 준비가 되었습니다"]
                }
            },
            getApiKeys: {
                title: "LLM API 키 발급 방법",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. 계정 설정", list: ["<a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI 플랫폼</a> 방문", "가입 또는 로그인"] },
                    step2: { title: "2. 키 생성", list: ["\"API keys\"로 이동", "\"Create new secret key\" 클릭", "키 복사"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. 계정 설정", list: ["<a href=\"https://console.groq.com\" target=\"_blank\">Groq 콘솔</a> 방문", "가입"] },
                    step2: { title: "2. 키 생성", list: ["\"API Keys\"로 이동", "\"Create API Key\" 클릭", "키 복사"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. 계정 설정", list: ["Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a> 방문", "X로 로그인"] },
                    step2: { title: "2. 키 생성", list: ["사용자 이름 → \"API Keys\"", "\"Create API Key\" 클릭", "키 복사"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. 계정 설정", list: ["<a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek 플랫폼</a> 방문", "가입"] },
                    step2: { title: "2. 키 생성", list: ["\"API Keys\"로 이동", "\"Create new API key\" 클릭", "키 복사"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. 계정 설정", list: ["<a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a> 방문", "Google로 로그인"] },
                    step2: { title: "2. 키 생성", list: ["\"Get API key\" 클릭", "\"Create API key\" 클릭", "키 복사"] }
                }
            },
            security: {
                title: "보안 중요 사항",
                list: [
                    "API 키를 공유하지 마세요",
                    "키를 안전하게 보관하세요",
                    "보안을 위해 주기적으로 키를 변경하세요",
                    "사용량을 모니터링하세요"
                ]
            }
        },
        support: {
            title: "고객 지원",
            subtitle: "답변을 찾고 도움을 받으세요.",
            links: {
                guide: {
                    title: "사용자 가이드",
                    desc: "단계별 설정: 접근성 권한, 키보드 단축키, 사용자 정의 역할 등.",
                    cta: "가이드 보기"
                },
                issue: {
                    title: "문제 보고",
                    desc: "버그를 발견하거나 제안이 있습니까? GitHub에서 이슈를 열어주세요.",
                    cta: "이슈 제출"
                }
            },
            faq: {
                title: "자주 묻는 질문",
                q1: {
                    q: "Wright는 무엇을 할 수 있나요?",
                    a: "Wright는 macOS용 AI 어시스턴트입니다. 키보드 단축키나 PopClip을 통해 어느 앱에서나 실행할 수 있는 세 가지 기본 기능을 제공합니다:",
                    list: [
                        "<strong>윤문</strong> — 원래의 의미를 유지하면서 선택한 텍스트의 문법, 어조, 명확성을 다듬습니다.",
                        "<strong>번역</strong> — 선택한 텍스트를 여러 언어 간에 즉시 번역합니다.",
                        "<strong>채팅</strong> — AI와 대화하며 질문할 수 있으며, 가벼운 Quick View에서 전체 채팅 인터페이스로 전환하는 옵션도 제공합니다."
                    ]
                },
                q2: {
                    q: "어떤 AI 모델이 지원되나요?",
                    a: "Wright는 최고의 AI 모델들로 구동됩니다:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "사용자 정의 AI 역할이란 무엇인가요?",
                    a: "사용자 정의 역할을 사용하면 자체 시스템 프롬프트를 가진 특화된 AI 페르소나를 만들 수 있습니다. 예를 들어, '코드 리뷰어', '카피라이터' 또는 '번역가' 역할을 설정할 수 있으며, 이들은 각각 설정한 지침에 따라 다르게 작동합니다. Quick View나 채팅에서 역할을 즉시 전환할 수 있습니다."
                },
                q4: {
                    q: "PopClip 통합은 어떻게 작동하나요?",
                    a: "PopClip이 설치되어 있으면 Wright가 PopClip의 팝업 메뉴에 작업을 추가합니다. 어떤 앱에서든 텍스트를 선택하면 PopClip이 윤문, 번역 또는 채팅 옵션을 표시합니다(단축키 불필요). PopClip 확장 프로그램은 Wright의 설정에서 다운로드할 수 있습니다."
                },
                q5: {
                    q: "제 데이터는 안전한가요?",
                    a: "네. Wright는 사용자의 개인 데이터를 수집하거나 저장하지 않습니다. 사용자의 텍스트는 AI에 의해 처리되고 결과가 직접 반환되며, Wright는 내용을 기록하거나 보관하지 않습니다. 자세한 내용은 개인정보 처리방침을 참조하세요."
                },
                q6: {
                    q: "시스템 요구 사항은 무엇인가요?",
                    a: "Wright는 macOS 14.0(Sonoma) 이상을 필요로 합니다. 시스템 전체에서 선택한 텍스트를 읽고 변경하려면 접근성 권한이 필요합니다. 앱은 가벼우며 메뉴 막대 앱으로 실행됩니다."
                },
                q7: {
                    q: "키보드 단축키는 어떻게 작동하나요?",
                    a: "Wright는 모든 앱에서 작동하는 전역 키보드 단축키를 사용합니다. 기본 단축키는 [설정] → [단축키]에서 사용자 지정할 수 있습니다. 어디서든 텍스트를 선택하고 단축키를 누르면 즉시 결과가 나타나며, 복사하거나 삽입하거나 채팅 세션으로 확장할 수 있습니다."
                }
            },
            contact: {
                title: "문의하기",
                email: "이메일 지원",
                response: "일반적으로 24시간 이내에 답변해 드립니다."
            }
        },
        privacy: {
            title: "개인정보 처리방침",
            meta: {
                title: "개인정보 처리방침 | Wright",
                desc: "Wright 개인정보 처리방침. 당사는 개인 사용 데이터를 수집하지 않습니다."
            },
            lastUpdated: "최근 업데이트: 2026년 2월",
            commitment: {
                title: "개인정보 보호에 대한 약속",
                text: "Wright는 귀하의 개인정보를 염두에 두고 설계되었습니다. 당사는 투명성을 중시하며 데이터 수집을 절대적으로 필요한 범위로 최소화합니다.",
                keyPoints: {
                    title: "주요 개인정보 보호 내용:",
                    list: [
                        "귀하의 대화 내용에 접근하거나 저장하지 않습니다",
                        "계정 관리를 위해 귀하의 이메일만 수집합니다",
                        "서비스 제공을 위해 최소한의 연결만 사용합니다"
                    ]
                }
            },
            dataCollection: {
                title: "데이터 수집 및 아키텍처",
                text: "Wright는 귀하의 요청을 처리하기 위해 안전한 백엔드 API 서비스를 이용합니다. 당사는 귀하의 대화 내역이나 내용을 저장하지 않습니다.",
                apiKeys: {
                    title: "서비스 아키텍처",
                    text: "모든 상호 작용은 안전한 API를 통해 처리됩니다. 귀하의 콘텐츠는 응답 생성을 위해서만 전달되며 절대 저장되지 않습니다.",
                    list: [
                        "귀하의 계정 이메일만 수집합니다",
                        "문제 해결을 위해 최소한의 데이터만 사용합니다",
                        "대화 데이터를 보관하지 않습니다",
                        "안전한 구현 방식"
                    ]
                }
            },
            thirdParty: {
                title: "타사 서비스",
                text: "Wright를 사용하여 LLM 서비스(예: OpenAI, Groq 등)와 상호 작용할 때 해당 상호 작용은 해당 서비스의 개인정보 처리방침을 따릅니다. 사용하기로 선택한 LLM 서비스의 개인정보 처리방침을 검토하는 것을 권장합니다:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI 개인정보 처리방침</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq 개인정보 처리방침</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI 개인정보 처리방침</a>"
                ]
            },
            security: {
                title: "데이터 보안",
                text: "귀하의 계정 정보는 안전하게 보관됩니다. 당사는 귀하의 데이터를 보호하기 위해 업계 표준 보안 조치를 적용합니다."
            },
            changes: {
                title: "본 개인정보 처리방침의 변경",
                text: "당사는 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 변경 사항이 있으면 이 페이지에 새로운 개인정보 처리방침을 게시하고 \"최근 업데이트\" 날짜를 갱신하여 알려 드립니다."
            },
            contact: {
                title: "문의하기",
                text: "본 개인정보 처리방침에 관해 질문이 있으시면 다음으로 연락해 주십시오:"
            }
        },
        howItWorks: {
            title: "사용 방법",
            subtitle: "키보드 단축키를 사용하거나 PopClip과 연동하여 우클릭으로 모든 기능에 액세스하세요.",
            step1: {
                title: "텍스트 선택",
                description: "Mac의 어떤 앱에서든 원하는 텍스트를 강조표시합니다."
            },
            step2: {
                title: "단축키 누르기",
                description: "설정한 단축키를 누르거나 PopClip을 사용하여 윤문, 번역 또는 채팅을 시작합니다."
            },
            step3: {
                title: "결과 확인",
                description: "AI가 개선한 텍스트가 즉시 플로팅 창에 나타납니다. 원클릭으로 복사하거나 원래 텍스트와 바꿀 수 있습니다."
            }
        },
        features: {
            title: "주요 기능",
            quickView: {
                title: "빠르게 시작, 깊이 있는 대화",
                description: "가벼운 퀵 뷰(Quick View)에서 빠른 질문을 시작해 보세요. 대화에 더 깊이가 필요할 땐 전체 채팅 인터페이스로 전환할 수 있습니다—맥락은 자동으로 유지됩니다."
            },
            rewrite: {
                title: "단축키 한 번으로 텍스트 다듬기",
                description: "텍스트를 선택하고 단축키를 누르면 즉시 세련된 버전을 얻을 수 있습니다. Wright는 원래 의미를 유지하면서 오탈자, 문법, 어색한 문구를 수정합니다. 사용하는 언어도 자동으로 감지합니다."
            },
            translate: {
                title: "즉각적인 번역",
                description: "단축키 하나로 선택한 텍스트를 다른 언어로 번역하세요. Wright가 원본 언어를 감지하여 번역해주므로 다른 앱이나 브라우저 탭으로 전환할 필요가 없습니다."
            },
            customRoles: {
                title: "사용자 지정 AI 역할",
                description: "코드 리뷰, 카피라이팅, 이메일 작성 등 사용자가 원하는 모든 역할의 AI를 만드세요. 각각 고유한 시스템 프롬프트와 동작을 가집니다."
            },
            setup: {
                title: "원하는 방식대로 설정",
                description: "각 AI 역할에 맞게 단축키를 구성하고 작업 흐름에 맞게 인터페이스를 개인화하세요. Wright는 여러 LLM 공급자를 지원하므로, 사용자 요구사항에 가장 잘 맞는 것을 선택할 수 있습니다.",
                list: [
                    "사용자 지정 가능한 키보드 단축키",
                    "다양한 AI 모델 (OpenAI, Gemini, Grok, Groq)",
                    "PopClip 통합"
                ]
            }
        },
        pricing: {
            title: "요금제 선택",
            free: {
                tier: "무료",
                tokens: "1,000 토큰 / 일",
                reset: "매일 초기화 (자정 UTC)",
                cta: "시작하기"
            },
            basic: {
                tier: "베이직",
                period: "/ 년",
                tokens: "500,000 토큰 / 월",
                reset: "매월 1일 초기화",
                cta: "구독하기"
            },
            pro: {
                badge: "가장 인기",
                tier: "프로",
                period: "/ 월",
                tokens: "10,000,000 토큰 / 월",
                reset: "매월 1일 초기화",
                cta: "프로로 업그레이드"
            }
        },
        benefits: {
            title: "왜 Wright인가요?",
            subtitle: "필요할 때까지 알아서 조용히 기다려주는 기본 macOS 어시스턴트",
            everywhere: {
                title: "어디서나 작동합니다",
                description: "전역 키보드 단축키와 PopClip 통합으로 Mail, Notes, Slack, 브라우저 또는 Mac의 어떠한 텍스트 필드에서든 작동합니다."
            },
            free: {
                title: "무료로 시작",
                description: "API 키도, 복잡한 구성도 필요 없습니다. 요금제를 업그레이드하기 전에 모든 기능을 시도해 볼 수 있도록 무료 플랜이 포함되어 있습니다."
            }
        },
        download: {
            title: "시작하기",
            description: "Wright를 무료로 다운로드하고 바로 사용해 보세요.",
            cta: "macOS용 다운로드",
            guide: "사용자 가이드",
            note: "무료 플랜 포함 · 별도 구성 필요 없음"
        },
        footer: {
            rights: "© 2026 Wright. 모든 권리 보유.",
            privacy: "개인정보 처리방침",
            support: "지원"
        }
    },
    ru: {
        meta: {
            title: "Wright - ИИ-Ассистент для macOS | Переписывание, Перевод и Чат",
            description: "Wright — настраиваемый ИИ-ассистент для macOS. Создавайте индивидуальные роли, легко переписывайте и переводите текст или общайтесь с помощью сочетания клавиш или PopClip. Бесплатно."
        },
        nav: {
            features: "Возможности",
            download: "Скачать",
            support: "Поддержка",
            guide: "Руководство",
            toggle: "Язык"
        },
        hero: {
            title: "Ваш ИИ-ассистент для macOS",
            subtitle: "Wright — настраиваемый ИИ-ассистент для macOS. Создавайте свои роли, легко переписывайте и переводите тексты и общайтесь с помощью горячих клавиш или PopClip. Полностью бесплатно.",
            download: "Скачать для macOS"
        },
        guide: {
            title: "Руководство пользователя Wright",
            quickStart: {
                title: "Быстрый старт",
                accessibility: {
                    title: "ПРИМЕЧАНИЕ: Нужен доступ к Универсальному доступу",
                    desc1: "Wright нужен доступ для мониторинга глобальных горячих клавиш.",
                    desc2: "Вы можете включить это в Системных настройках > Конфиденциальность и безопасность > Универсальный доступ.",
                    desc3: "Возможно, потребуется перезапуск приложения."
                },
                shortcuts: {
                    title: "Использование горячих клавиш",
                    desc: "Используйте шорткаты для переписывания, перевода и чата."
                },
                menuBar: {
                    title: "Использование через строку меню",
                    desc: "Вы также можете использовать Wright через строку меню."
                }
            },
            configureModels: {
                title: "Настройка LLM моделей",
                step1: {
                    title: "1. Открыть настройки",
                    list: ["Открыть Wright", "Меню приложения → Настройки"]
                },
                step2: {
                    title: "2. Настроить API ключ",
                    list: ["Вкладка \"LLM Model\"", "Выбрать провайдера", "Вставить API ключ", "Сохранить"]
                },
                step3: {
                    title: "3. Выбор модели",
                    list: ["Выбрать версию модели", "Готово к использованию"]
                }
            },
            getApiKeys: {
                title: "Как получить API ключи",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Аккаунт", list: ["Посетить <a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI Platform</a>", "Войти"] },
                    step2: { title: "2. Ключ", list: ["\"API keys\"", "\"Create new secret key\"", "Скопировать"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Аккаунт", list: ["Посетить <a href=\"https://console.groq.com\" target=\"_blank\">Groq Console</a>", "Регистрация"] },
                    step2: { title: "2. Ключ", list: ["\"API Keys\"", "\"Create API Key\"", "Скопировать"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Аккаунт", list: ["Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Войти через X"] },
                    step2: { title: "2. Ключ", list: ["Имя пользователя → \"API Keys\"", "\"Create API Key\"", "Скопировать"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Аккаунт", list: ["Посетить <a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek Platform</a>", "Регистрация"] },
                    step2: { title: "2. Ключ", list: ["\"API Keys\"", "\"Create new API key\"", "Скопировать"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Аккаунт", list: ["Посетить <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Войти через Google"] },
                    step2: { title: "2. Ключ", list: ["\"Get API key\"", "\"Create API key\"", "Скопировать"] }
                }
            },
            security: {
                title: "Безопасность",
                list: [
                    "Не делитесь ключом API",
                    "Храните ключи в безопасности",
                    "Меняйте ключи периодически",
                    "Следите за использованием"
                ]
            }
        },
        support: {
            title: "Центр поддержки",
            subtitle: "Найдите ответы и помощь.",
            links: {
                guide: {
                    title: "Руководство",
                    desc: "Пошаговая настройка: разрешения универсального доступа, сочетания клавиш, пользовательские роли.",
                    cta: "Смотреть Руководство"
                },
                issue: {
                    title: "Сообщить о проблеме",
                    desc: "Нашли ошибку или есть предложения? Откройте вопрос на GitHub.",
                    cta: "GitHub-сообщество"
                }
            },
            faq: {
                title: "Часто задаваемые вопросы (ЧЗВ)",
                q1: {
                    q: "Что умеет делать Wright?",
                    a: "Wright — это ИИ-ассистент для macOS. Он предоставляет три базовые функции, которые вы можете запускать из любого приложения с помощью горячих клавиш или PopClip:",
                    list: [
                        "<strong>Переписать</strong> — Улучшите грамматику, тон и ясность выделенного текста, сохранив первоначальный смысл.",
                        "<strong>Перевести</strong> — Мгновенно переведите выделенный текст на различные языки.",
                        "<strong>Чат</strong> — Задавайте вопросы и общайтесь с ИИ, с возможностью перехода от компактного Быстрого вида к полноценному интерфейсу Чата."
                    ]
                },
                q2: {
                    q: "Какие ИИ-модели поддерживаются?",
                    a: "Wright работает на базе ведущих ИИ-моделей:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "Что такое Пользовательские ИИ-роли?",
                    a: "Пользовательские роли позволяют создавать специализированные профили ИИ с собственными системными инструкциями. Например, вы можете настроить роль «Рецензент кода», роль «Копирайтер» или роль «Переводчик» — каждая из них ведет себя по-разному в зависимости от заданных вами команд. Переключайтесь между ролями мгновенно из Быстрого вида или Чата."
                },
                q4: {
                    q: "Как работает интеграция с PopClip?",
                    a: "Если у вас установлен PopClip, Wright добавляет свои действия во всплывающее меню PopClip. Выделите текст в любом приложении, и PopClip покажет опции для переписывания, перевода или чата — без необходимости в горячих клавишах. Скачать расширение можно в Настройках Wright."
                },
                q5: {
                    q: "В безопасности ли мои данные?",
                    a: "Да. Wright не собирает и не хранит ваши персональные данные. Ваш текст обрабатывается ИИ, и результат возвращается напрямую — Wright не ведет логи и не сохраняет ваш контент. Смотрите нашу Политику Конфиденциальности для деталей."
                },
                q6: {
                    q: "Каковы системные требования?",
                    a: "Для работы Wright требуется macOS 14.0 (Sonoma) или новее. Ему нужны разрешения Универсального доступа (Accessibility) для чтения и замены выделенного текста на уровне всей системы. Приложение легкое и работает в строке меню."
                },
                q7: {
                    q: "Как работают горячие клавиши?",
                    a: "Wright использует глобальные горячие клавиши, которые работают в любом приложении. Вы можете настроить их в Настройках → Горячие клавиши. Выделите текст где угодно, нажмите комбинацию клавиш, и результат мгновенно появится — вы сможете его скопировать, вставить или развернуть в сессию Чата."
                }
            },
            contact: {
                title: "Связаться с нами",
                email: "Поддержка по Email",
                response: "Обычно мы отвечаем в течение 24 часов."
            }
        },
        privacy: {
            title: "Политика конфиденциальности",
            meta: {
                title: "Политика конфиденциальности | Wright",
                desc: "Политика конфиденциальности Wright. Мы не собираем личные данные об использовании."
            },
            lastUpdated: "Последнее обновление: Февраль 2026",
            commitment: {
                title: "Наша приверженность конфиденциальности",
                text: "Wright разработан с учетом вашей конфиденциальности. Мы верим в прозрачность и минимизируем сбор данных до абсолютно необходимого.",
                keyPoints: {
                    title: "Ключевые пункты конфиденциальности:",
                    list: [
                        "Мы не получаем доступ к содержимому ваших бесед и не храним его",
                        "Мы собираем только вашу электронную почту для управления аккаунтом",
                        "Мы используем минимум соединений для предоставления услуг"
                    ]
                }
            },
            dataCollection: {
                title: "Сбор данных и архитектура",
                text: "Wright использует безопасную серверную службу API для обработки ваших запросов. Мы не храним историю или содержание ваших разговоров.",
                apiKeys: {
                    title: "Архитектура сервиса",
                    text: "Все взаимодействия обрабатываются через наш безопасный API. Ваш контент передается исключительно для создания ответов и никогда не сохраняется.",
                    list: [
                        "Мы собираем только электронную почту вашего аккаунта",
                        "Минимум данных, необходимых для устранения неполадок",
                        "Никакого хранения данных бесед",
                        "Безопасная реализация"
                    ]
                }
            },
            thirdParty: {
                title: "Сторонние сервисы",
                text: "Когда вы используете Wright для взаимодействия со службами LLM (такими как OpenAI, Groq и т.д.), ваши взаимодействия регулируются политиками конфиденциальности этих служб. Мы рекомендуем ознакомиться с политиками конфиденциальности выбранных вами сервисов:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Политика конфиденциальности OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Политика конфиденциальности Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Политика конфиденциальности xAI</a>"
                ]
            },
            security: {
                title: "Безопасность данных",
                text: "Информация о вашей учетной записи хранится в безопасности. Мы применяем стандартные в отрасли меры безопасности для защиты ваших данных."
            },
            changes: {
                title: "Изменения в Политике конфиденциальности",
                text: "Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы сообщим вам о любых изменениях, опубликовав новую политику на этой странице и обновив дату \"Последнее обновление\"."
            },
            contact: {
                title: "Свяжитесь с нами",
                text: "Если у вас есть какие-либо вопросы относительно этой Политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу:"
            }
        },
        howItWorks: {
            title: "Как Это Работает",
            subtitle: "Используйте горячие клавиши или интеграцию с PopClip, чтобы получать доступ ко всем функциям через правую кнопку мыши.",
            step1: {
                title: "Выберите Текст",
                description: "Выделите любой текст в любом приложении на вашем Mac."
            },
            step2: {
                title: "Нажмите Клавиши",
                description: "Воспользуйтесь настроенными горячими клавишами или PopClip, чтобы выполнить переписывание, перевод или открыть чат."
            },
            step3: {
                title: "Получите Результат",
                description: "Ваш текст, улучшенный ИИ, мгновенно появится в плавающем окне. Скопируйте или замените его в один клик."
            }
        },
        features: {
            title: "Основные Функции",
            quickView: {
                title: "Быстрый старт, Глубокое погружение",
                description: "Сделайте быстрый запрос в компактном Быстром виде (Quick View). Когда для разговора потребуется больше деталей, просто перейдите в полноценный интерфейс Чата — весь контекст сохранится автоматически."
            },
            rewrite: {
                title: "Доработка текста в Один Клик",
                description: "Выделите текст, нажмите горячую клавишу и мгновенно получите отполированную версию. Wright исправит опечатки, грамматику и неловкие формулировки, сохранив первоначальный смысл, а также автоматически определит язык, на котором вы пишете."
            },
            translate: {
                title: "Мгновенный Перевод",
                description: "Переводите выделенный текст между языками с помощью одного сочетания клавиш. Wright самостоятельно определяет исходный язык и переводит его — больше не нужно переключаться между отдельными приложениями или вкладками браузера."
            },
            customRoles: {
                title: "Пользовательские ИИ-роли",
                description: "Создавайте свои собственные ИИ-роли — такие как: ревьюер кода, копирайтер, составитель писем или кто угодно другой, наделяя их своими собственными системными промптами и поведением."
            },
            setup: {
                title: "Настройте под себя",
                description: "Настраивайте сочетания клавиш для каждой из ваших ИИ-ролей и изменяйте интерфейс, чтобы он подходил вашему рабочему процессу. Wright поддерживает нескольких провайдеров LLM, позволяя вам выбрать тот, который лучше всего соответствует вашим требованиям.",
                list: [
                    "Индивидуальные Горячие Клавиши",
                    "Различные ИИ-модели (OpenAI, Gemini, Grok, Groq)",
                    "Интеграция с PopClip"
                ]
            }
        },
        pricing: {
            title: "Выберите Ваш План",
            free: {
                tier: "Бесплатно",
                tokens: "1,000 токенов / день",
                reset: "Ежедневный сброс (Полночь UTC)",
                cta: "Начать Использовать"
            },
            basic: {
                tier: "Базовый",
                period: "/ год",
                tokens: "500,000 токенов / месяц",
                reset: "Сброс 1-го числа каждого месяца",
                cta: "Подписаться"
            },
            pro: {
                badge: "Самый Популярный",
                tier: "ПРО",
                period: "/ месяц",
                tokens: "10,000,000 токенов / месяц",
                reset: "Сброс 1-го числа каждого месяца",
                cta: "Перейти на ПРО"
            }
        },
        benefits: {
            title: "Почему именно Wright?",
            subtitle: "Нативный ассистент для macOS, который не мешает вам, пока не понадобится",
            everywhere: {
                title: "Работает Везде",
                description: "Глобальные горячие клавиши и интеграция с PopClip: работает в любом приложении — Mail, Notes, Slack, вашем браузере или любом текстовом поле в Mac."
            },
            free: {
                title: "Начать Бесплатно",
                description: "Не нужен API-ключ, не нужна настройка. Бесплатный план включён, так что вы можете попробовать каждую функцию перед тем, как улучшать версию."
            }
        },
        download: {
            title: "Начать",
            description: "Скачайте Wright бесплатно и начните использовать прямо сейчас.",
            cta: "Скачать для macOS",
            guide: "Руководство Пользователя",
            note: "Включает бесплатный тариф · Не требует настройки"
        },
        footer: {
            rights: "© 2026 Wright. Все права защищены.",
            privacy: "Политика Конфиденциальности",
            support: "Поддержка"
        }
    }, pt: {
        meta: {
            title: "Wright - Assistente de IA para macOS | Reescrever, Traduzir e Conversar",
            description: "Wright é um assistente de IA personalizável para macOS. Crie papéis sob medida, reescreva e traduza textos sem esforço e converse — tudo usando atalhos de teclado ou PopClip. Grátis para usar."
        },
        nav: {
            features: "Funcionalidades",
            download: "Baixar",
            support: "Suporte",
            guide: "Guia",
            toggle: "Idioma"
        },
        hero: {
            title: "O seu Assistente de IA para macOS",
            subtitle: "Wright é um assistente de IA personalizável para macOS. Crie papéis sob medida, reescreva e traduza textos sem esforço e converse – tudo partir de um atalho de teclado ou PopClip. Grátis para usar.",
            download: "Baixar para macOS"
        },
        guide: {
            title: "Guia do Usuário Wright",
            quickStart: {
                title: "Início Rápido",
                accessibility: {
                    title: "NOTA: Permissões de Acessibilidade Necessárias",
                    desc1: "O Wright precisa de permissões de acessibilidade para monitorar atalhos de teclado globais.",
                    desc2: "Você pode ativar essas configurações manualmente em Configurações do Sistema > Privacidade e Segurança > Acessibilidade.",
                    desc3: "Pode ser necessário reiniciar o aplicativo."
                },
                shortcuts: {
                    title: "Usando Atalhos de Teclado",
                    desc: "Use os atalhos para polimento, tradução e bate-papo."
                },
                menuBar: {
                    title: "Usando via Barra de Menu",
                    desc: "Você também pode usar o Wright na barra de menu."
                }
            },
            configureModels: {
                title: "Configurar Modelos LLM",
                step1: {
                    title: "1. Acessar Configurações",
                    list: ["Abrir o app Wright", "Menu do app → Configurações"]
                },
                step2: {
                    title: "2. Configurar Chave API",
                    list: ["Vá para a guia \"Modelo LLM\"", "Selecione o provedor", "Cole a chave API", "Salvar"]
                },
                step3: {
                    title: "3. Seleção de Modelo",
                    list: ["Selecione a versão do modelo", "Pronto para usar"]
                }
            },
            getApiKeys: {
                title: "Obter Chaves API LLM",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Conta", list: ["Visite <a href=\"https://platform.openai.com\" target=\"_blank\">Plataforma OpenAI</a>", "Entrar"] },
                    step2: { title: "2. Chave", list: ["\"API keys\"", "\"Create new secret key\"", "Copiar"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Conta", list: ["Visite <a href=\"https://console.groq.com\" target=\"_blank\">Console Groq</a>", "Cadastrar"] },
                    step2: { title: "2. Chave", list: ["\"API Keys\"", "\"Create API Key\"", "Copiar"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Conta", list: ["Visite Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Entrar com X"] },
                    step2: { title: "2. Chave", list: ["Nome de usuário → \"API Keys\"", "\"Create API Key\"", "Copiar"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Conta", list: ["Visite <a href=\"https://platform.deepseek.com\" target=\"_blank\">Plataforma DeepSeek</a>", "Cadastrar"] },
                    step2: { title: "2. Chave", list: ["\"API Keys\"", "\"Create new API key\"", "Copiar"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Conta", list: ["Visite <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Entrar com Google"] },
                    step2: { title: "2. Chave", list: ["\"Get API key\"", "\"Create API key\"", "Copiar"] }
                }
            },
            security: {
                title: "Notas de Segurança",
                list: [
                    "Nunca compartilhe sua chave API",
                    "Armazene as chaves com segurança",
                    "Altere as chaves periodicamente",
                    "Monitore o uso"
                ]
            }
        },
        support: {
            title: "Central de Suporte",
            subtitle: "Encontre respostas e obtenha ajuda.",
            links: {
                guide: {
                    title: "Guia do Usuário",
                    desc: "Configuração passo a passo: permissões de acessibilidade, atalhos de teclado e papéis.",
                    cta: "Exibir Guia"
                },
                issue: {
                    title: "Relatar um Problema",
                    desc: "Encontrou um erro ou tem sugestões? Abra uma \"issue\" no GitHub.",
                    cta: "Enviar Problema"
                }
            },
            faq: {
                title: "Perguntas Frequentes",
                q1: {
                    q: "O que o Wright pode fazer?",
                    a: "Wright é um assistente de IA para macOS. Ele oferece três funções básicas que você pode acionar de qualquer aplicativo usando atalhos de teclado ou PopClip:",
                    list: [
                        "<strong>Reescrever</strong> — Melhore o texto selecionado (gramática, tom e clareza) mantendo o significado original.",
                        "<strong>Traduzir</strong> — Traduza instantaneamente o texto selecionado entre vários idiomas.",
                        "<strong>Bate-papo</strong> — Faça perguntas e converse com a IA, com a opção de alternar do Quick View rápido para uma interface de chat completa."
                    ]
                },
                q2: {
                    q: "Quais modelos de IA são suportados?",
                    a: "Wright é movido pelos principais modelos de IA da atualidade:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "O que são papéis de IA personalizados?",
                    a: "Papéis Personalizados permitem que você crie personagens especialistas baseados em seus próprios comandos (prompts) de sistema. Configure um papel como \"Revisor de Código\", \"Redator\" ou \"Tradutor\", e observe cada um atuar conforme a instrução fornecida. Troque entre os papéis num piscar de olhos."
                },
                q4: {
                    q: "Como funciona a integração com o PopClip?",
                    a: "Se o PopClip estiver instalado, o assistente Wright anexa ações lá. Selecione palavras em qualquer programa que o PopClip lançará recursos para reescrever, traduzir ou iniciar diálogo sem necessidade de lembrar atalho. O respectivo módulo extensão deve ser obtido nas Definições do Wright."
                },
                q5: {
                    q: "Meus dados estão todos em segurança?",
                    a: "Tudo sim. Wright nunca guarda dados íntimos ou da ferramenta. Escritos da pessoa são transacionados pelo canal de inteligência virtual e a exibição recebida diretamente. Não geramos registro nem memorizamos conteúdo alheio, confira nossa Diretriz sobre Privacidade para confirmações exatas."
                },
                q6: {
                    q: "De quais requisitos se precisa em termos de sistema?",
                    a: "Requer versão macOS 14.0 (Sonoma) em diante. Requer os privilégios totais do painel Acessibilidades sob leitura e troca do manuscrito da máquina. Esse software é de peso baixo correndo sempre da barrinha."
                },
                q7: {
                    q: "Me dê detalhes sobre funções nos atalhos e teclado?",
                    a: "Recorremos a atalhos de impacto Global no Wright ativando sobre aplicações em paralelo sem atritos. É factível mudar na seção Configuração da Tela. Pegou marcação texto na tela aperte combo e a maravilha reage na ocasião para extrair, fixar em local da cópia ou desdobra num diálago alongado com o software."
                }
            },
            contact: {
                title: "Entre em Contato Conosco",
                email: "E-Mail Contato Assistencial",
                response: "Fato normal respondermos abaixo de 24 hs."
            }
        },
        privacy: {
            title: "Política de Privacidade",
            meta: {
                title: "Política de Privacidade | Wright",
                desc: "Política de Privacidade do Wright. Não coletamos dados pessoais de uso."
            },
            lastUpdated: "Última Atualização: Fevereiro de 2026",
            commitment: {
                title: "Nosso Compromisso com a Privacidade",
                text: "O Wright foi projetado pensando na sua privacidade. Acreditamos na transparência e minimizamos a coleta de dados apenas ao estritamente necessário.",
                keyPoints: {
                    title: "Pontos Chave da Privacidade:",
                    list: [
                        "Não acessamos nem armazenamos o conteúdo das suas conversas",
                        "Coletamos apenas o seu e-mail para a gestão da conta",
                        "Usamos conexões mínimas para a prestação do serviço"
                    ]
                }
            },
            dataCollection: {
                title: "Coleta de Dados e Arquitetura",
                text: "O Wright utiliza um serviço seguro de API backend para processar as suas solicitações. Não armazenamos o histórico nem o conteúdo das suas conversas.",
                apiKeys: {
                    title: "Arquitetura do Serviço",
                    text: "Todas as interações são processadas através da nossa API segura. O seu conteúdo é transmitido exclusivamente para a geração de respostas e nunca é guardado.",
                    list: [
                        "Coletamos apenas o e-mail associado à sua conta",
                        "Mínimo de dados utilizados para resolução de problemas",
                        "Sem retenção de dados de conversa",
                        "Implementação segura"
                    ]
                }
            },
            thirdParty: {
                title: "Serviços de Terceiros",
                text: "Quando você usa o Wright para interagir com serviços LLM (como OpenAI, Groq, etc.), suas interações são governadas pelas referidas políticas de privacidade. Recomendamos a revisão das políticas de privacidade dos serviços LLM que você escolher:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Política de Privacidade da OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Política de Privacidade da Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Política de Privacidade da xAI</a>"
                ]
            },
            security: {
                title: "Segurança de Dados",
                text: "As informações da sua conta são armazenadas de forma segura. Empregamos medidas de segurança padrão do setor para proteger os seus dados."
            },
            changes: {
                title: "Alterações a Esta Política de Privacidade",
                text: "Podemos atualizar a nossa Política de Privacidade de tempos em tempos. Notificaremos você de quaisquer alterações publicando a nova Política nesta página e atualizando a data de \"Última Atualização\"."
            },
            contact: {
                title: "Contate-nos",
                text: "Se tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em:"
            }
        },
        howItWorks: {
            title: "Como Funciona",
            subtitle: "Use atalhos de teclado ou integre com o PopClip para acessar todos os recursos com o clique direito.",
            step1: {
                title: "Selecionar Texto",
                description: "Selecione qualquer texto em qualquer aplicativo do seu Mac."
            },
            step2: {
                title: "Pressione o Atalho",
                description: "Aperte seu atalho configurado ou utilize o PopClip para ativar reescrita, tradução ou chat."
            },
            step3: {
                title: "Obter o Resultado",
                description: "Seu texto otimizado pela IA aparece instantaneamente em uma janela flutuante. Copie ou substitua com um único clique."
            }
        },
        features: {
            title: "Recursos Principais",
            quickView: {
                title: "Comece Rápido, Vá Longe",
                description: "Inicie uma consulta rapidamente na interface leve Quick View. Quando a conversa exigir mais profundidade, mude para a interface completa de Chat — seu contexto é transferido automaticamente."
            },
            rewrite: {
                title: "Polimento de Texto Com Uma Tecla",
                description: "Selecione um texto, pressione o atalho e obterá uma versão mais clara na hora. O Wright corrige falhas, erros de gramática e construções constrangedoras, mantendo seu sentido original. Ele detecta de forma automática o idioma."
            },
            translate: {
                title: "Tradução Imediata",
                description: "Traduza o conteúdo marcado entre diversas línguas usando um só atalho. O assistente encontra sozinho o idioma de origem e devolve o texto — não é precisso alterar a janela nem trocar de aba."
            },
            customRoles: {
                title: "Papéis de IA Personalizados",
                description: "Crie as próprias regras para seu assistente inteligente — tais quais auditor de programação, produtor de textos de venda, redator corporativos ou outras posições —, dando a eles comportamentos correspondentes."
            },
            setup: {
                title: "Do Seu Jeito",
                description: "Configurando as teclas para seus auxiliares de sistema de inteligência virtual e mudando a estética e modelo seguindo o estilo pessoal e empresarial que atende perfeitamente ao pedido.",
                list: [
                    "Atalhos Totalmente Reconfiguráveis",
                    "Muitos Modelos Artificiais à Vontade (OpenAI, Gemini, Grok, Groq)",
                    "Extensão para PopClip"
                ]
            }
        },
        pricing: {
            title: "Escolha Seu Plano",
            free: {
                tier: "Livre",
                tokens: "1.000 tokens / dia",
                reset: "Recarga todo dia (Meia Noite UTC)",
                cta: "Experimentar Agora"
            },
            basic: {
                tier: "Básico",
                period: "/ ano",
                tokens: "500.000 tokens / mês",
                reset: "Recarga todo dia primeiro do mês",
                cta: "Assinar"
            },
            pro: {
                badge: "O Mais Popular",
                tier: "Pro",
                period: "/ mês",
                tokens: "10.000.000 tokens / mês",
                reset: "Recarga todo dia primeiro do mês",
                cta: "Ser Membro Pro"
            }
        },
        benefits: {
            title: "Por que o Wright?",
            subtitle: "Um ajudante macOS genuíno preparado para dar tranquilidade, agindo quando houver solicitação.",
            everywhere: {
                title: "Onde Você Precisar",
                description: "Pode intervir pelo atalho de teclas de aplicação primária ou acionando pelo software PopClip. Ajuda sempre em campo de texto onde o Mac consegue intervir: Notas, E-mail, Browser, Slack..."
            },
            free: {
                title: "Grátis sem Custo",
                description: "Livre e pronto. Sem configurações desnecessárias ou API. Dá pra provar até os mais ocultos dos recursos pagando absolutamente nada pro início."
            }
        },
        download: {
            title: "Dê o Primeiro Passo",
            description: "Pegue para sí esta aplicação grátis no seu sistema Mac agora.",
            cta: "Download App para Sistema Mac",
            guide: "Como usar",
            note: "Período gratuito permanente incluso · Preparado na Cópia"
        },
        footer: {
            rights: "© 2026 Wright. Direitos intelectuais totalmente protegidos.",
            privacy: "Código de Privacidade",
            support: "Apoio"
        }
    },
    it: {
        meta: {
            title: "Wright - Assistente IA per macOS | Riscrivi, Traduci e Chatta",
            description: "Wright è un assistente IA personalizzabile per macOS. Crea ruoli su misura, riscrivi e traduci testi senza sforzo e chatta: tutto con una scorciatoia da tastiera o tramite PopClip. Gratuito."
        },
        nav: {
            features: "Funzionalità",
            download: "Scarica",
            support: "Supporto",
            guide: "Guida",
            toggle: "Lingua"
        },
        hero: {
            title: "Il tuo Assistente IA per macOS",
            subtitle: "Wright è un assistente IA personalizzabile per macOS. Puoi creare ruoli dedicati, riscrivere e tradurre testi con facilità, e conversare: tutto tramite una scorciatoia da tastiera o utilizzando PopClip. Uso gratuito.",
            download: "Scarica per macOS"
        },
        guide: {
            title: "Guida Utente Wright",
            quickStart: {
                title: "Avvio Rapido",
                accessibility: {
                    title: "NOTA: Permessi di Accessibilità Richiesti",
                    desc1: "Wright necessita di permessi di accessibilità per monitorare le scorciatoie da tastiera globali.",
                    desc2: "Puoi attivarli manualmente in Impostazioni di Sistema > Privacy e Sicurezza > Accessibilità.",
                    desc3: "Potrebbe essere necessario riavviare l'app."
                },
                shortcuts: {
                    title: "Uso delle Scorciatoie",
                    desc: "Usa le scorciatoie per rifinire, tradurre e chattare."
                },
                menuBar: {
                    title: "Uso via Barra dei Menu",
                    desc: "Puoi usare Wright anche dalla barra dei menu."
                }
            },
            configureModels: {
                title: "Configurare Modelli LLM",
                step1: {
                    title: "1. Accedi alle Impostazioni",
                    list: ["Apri app Wright", "Menu app → Impostazioni"]
                },
                step2: {
                    title: "2. Configura Chiave API",
                    list: ["Vai alla scheda \"Modello LLM\"", "Seleziona provider", "Incolla chiave API", "Salva"]
                },
                step3: {
                    title: "3. Selezione Modello",
                    list: ["Seleziona versione modello", "Pronto all'uso"]
                }
            },
            getApiKeys: {
                title: "Ottenere Chiavi API LLM",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Account", list: ["Visita <a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI Platform</a>", "Accedi"] },
                    step2: { title: "2. Chiave", list: ["\"API keys\"", "\"Create new secret key\"", "Copia"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Account", list: ["Visita <a href=\"https://console.groq.com\" target=\"_blank\">Groq Console</a>", "Registrati"] },
                    step2: { title: "2. Chiave", list: ["\"API Keys\"", "\"Create API Key\"", "Copia"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Account", list: ["Visita Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Accedi con X"] },
                    step2: { title: "2. Chiave", list: ["Nome utente → \"API Keys\"", "\"Create API Key\"", "Copia"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Account", list: ["Visita <a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek Platform</a>", "Registrati"] },
                    step2: { title: "2. Chiave", list: ["\"API Keys\"", "\"Create new API key\"", "Copia"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Account", list: ["Visita <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Accedi con Google"] },
                    step2: { title: "2. Chiave", list: ["\"Get API key\"", "\"Create API key\"", "Copia"] }
                }
            },
            security: {
                title: "Note di Sicurezza",
                list: [
                    "Non condividere la chiave API",
                    "Salva le chiavi al sicuro",
                    "Ruota le chiavi periodicamente",
                    "Monitora l'uso"
                ]
            }
        },
        support: {
            title: "Centro Supporto",
            subtitle: "Trova risposte e ottieni aiuto.",
            links: {
                guide: {
                    title: "Guida Utente",
                    desc: "Configurazione passo-passo: permessi, scorciatoie da tastiera e ruoli personalizzati.",
                    cta: "Vedi la Guida"
                },
                issue: {
                    title: "Segnala un Problema",
                    desc: "Hai trovato un bug o hai un suggerimento? Apri una issue su GitHub.",
                    cta: "Segnala Issue"
                }
            },
            faq: {
                title: "Domande Frequenti",
                q1: {
                    q: "Cosa può fare Wright?",
                    a: "Wright è un assistente IA per macOS. Fornisce tre funzioni di base che puoi attivare da qualsiasi applicazione usando le scorciatoie da tastiera o PopClip:",
                    list: [
                        "<strong>Riscrivi</strong> — Migliora il testo selezionato per grammatica, tono e chiarezza mantenendo il significato originale.",
                        "<strong>Traduci</strong> — Traduci all'istante il testo selezionato tra diverse lingue.",
                        "<strong>Chat</strong> — Fai domande e conversazioni con l'IA, con l'opzione di passare dalla Quick View (vista rapida) all'interfaccia completa."
                    ]
                },
                q2: {
                    q: "Quali modelli di IA sono supportati?",
                    a: "Wright è alimentato dai modelli IA più avanzati:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "Cosa sono i Ruoli IA Personalizzati?",
                    a: "I Ruoli Personalizzati ti consentono di creare specifiche 'personalità' di IA basandoti su determinati prompt. Ad esempio, potrai definire il profilo 'Revisore del Codice', 'Copywriter', 'Traduttore', in modo differente per le varie direttive date. Passa costantemente e velocemente da uno all'altro all'interno di un'unica app."
                },
                q4: {
                    q: "Come funziona l'integrazione di PopClip?",
                    a: "Qualora avessi attivato il client software PopClip Wright s'introduce in aggiunta nel proprio menu interno dell'utenza fornendo servizi d'opera veloci senza pulsanti da ricordare! Il relativo plug in si scarica agilmente nelle Opzioni Setup Wright menù."
                },
                q5: {
                    q: "E' tutto gestito sotto totale protezione sicurezza dei files dati mie info?",
                    a: "Affermativo!! Non avviene l'accumulo né registrazione sulle stazioni operative da parte dell'App stessa verso data-center su tuoi dati individuali diretti o di input, ogni azione avviane al solo fine erogatorio tramite i servizi terzi di terzi AI, consulta volentieri le regole sulla Protezione Infromazioni Policy."
                },
                q6: {
                    q: "Quali i parametri di hardware OS da far fronte?",
                    a: "Solo macOS alla versione 14(Sonoma) oppure quelle seguenti, richiede un check per abilitare diritti totali Lettura & Op. Sostituzione(Accessibilità dal centro Mac) ed è leggerissima seduta su System Tray Toolbar."
                },
                q7: {
                    q: "Le shortcut della mia Keyboard?",
                    a: "La tecnologia opera per combinazioni di chiavi tasti Mac Generali con operatività fluida costante in tutte le schermate attive delle finestre del mac osx, Settaggi Custom visibili nell'area → \"Scorciatoie\". A selezione campo testuale avvenuta basterà una macro combo da te voluta e voilà..."
                }
            },
            contact: {
                title: "Vieni a trovarci & Scrivici Subito",
                email: "Emaile Reparto Consulenza Guasti Ticket",
                response: "Evadiamo risposte di base entro i limiti delle prossimi 24H ore piene."
            }
        },
        privacy: {
            title: "Informativa sulla Privacy",
            meta: {
                title: "Informativa sulla Privacy | Wright",
                desc: "Informativa sulla Privacy di Wright. Non raccogliamo dati di utilizzo personali."
            },
            lastUpdated: "Ultimo Aggiornamento: Febbraio 2026",
            commitment: {
                title: "Il nostro Impegno per la Privacy",
                text: "Wright è stato progettato tenendo a mente la tua privacy. Crediamo nella trasparenza e riduciamo al minimo assoluto la raccolta dei dati.",
                keyPoints: {
                    title: "Punti Chiave sulla Privacy:",
                    list: [
                        "Non accediamo e non memorizziamo il contenuto delle tue conversazioni",
                        "Raccogliamo esclusivamente la tua email per la gestione dell'account",
                        "Limitiamo al minimo le connessioni per l'erogazione del servizio"
                    ]
                }
            },
            dataCollection: {
                title: "Raccolta Dati e Architettura",
                text: "Wright utilizza un servizio API backend sicuro per elaborare le tue richieste. Non salviamo la cronologia né il contenuto delle tue conversazioni.",
                apiKeys: {
                    title: "Architettura di Servizio",
                    text: "Tutte le interazioni vengono gestite tramite la nostra API sicura. I tuoi contenuti ci passano attraverso solo per generare le risposte e non vengono mai salvati.",
                    list: [
                        "Raccogliamo solo la tua email",
                        "Dati minimi utilizzati per la risoluzione dei problemi",
                        "Nessuna conservazione dei dati delle conversazioni",
                        "Implementazione sicura"
                    ]
                }
            },
            thirdParty: {
                title: "Servizi di Terze Parti",
                text: "Quando usi Wright per interagire con servizi LLM (come OpenAI, Groq, ecc.), tali interazioni sono disciplinate dalle loro informative sulla privacy. Si consiglia di leggere le informative sulla privacy dei servizi scelti:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Informativa sulla Privacy OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Informativa sulla Privacy Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Informativa sulla Privacy xAI</a>"
                ]
            },
            security: {
                title: "Sicurezza dei Dati",
                text: "Le informazioni del tuo account vengono conservate in modo sicuro. Adottiamo misure di sicurezza standard del settore per proteggere i tuoi dati."
            },
            changes: {
                title: "Modifiche a questa Informativa sulla Privacy",
                text: "Potremmo aggiornare di tanto in tanto la nostra Informativa sulla Privacy. Ti informeremo di qualsiasi modifica pubblicando la nuova Informativa su questa pagina e aggiornando la data dell'ultimo aggiornamento."
            },
            contact: {
                title: "Contattaci",
                text: "In caso di domande in merito a questa Informativa sulla Privacy, puoi contattarci a:"
            }
        },
        howItWorks: {
            title: "Come Funziona",
            subtitle: "Usa le scorciatoie da tastiera o l'integrazione con PopClip per accedere a tutte le funzionalità con un semplice clic.",
            step1: {
                title: "Seleziona il Testo",
                description: "Evidenzia qualsiasi testo in una qualsiasi app sul tuo Mac."
            },
            step2: {
                title: "Premi la Scorciatoia",
                description: "Usa la tua scorciatoia configurata o usa PopClip per attivare la riscrittura, la traduzione o la chat."
            },
            step3: {
                title: "Ottieni il Risultato",
                description: "Il tuo testo migliorato dall'IA appare istantaneamente in una finestra fluttuante. Copia o sostituisci con un solo clic."
            }
        },
        features: {
            title: "Caratteristiche Principali",
            quickView: {
                title: "Inizia Velocemente, Vai in Profondità",
                description: "Lancia una rapida query nella leggera Quick View. Quando la conversazione richiede più spazio, passa all'interfaccia completa della Chat: il contesto viene trasferito automaticamente."
            },
            rewrite: {
                title: "Migliora Testi in un Clic",
                description: "Seleziona il testo, premi una scorciatoia ed ottieni subito una versione revisionata. Wright corregge gli errori di battitura, la grammatica e le frasi poco chiare senza alterare il significato originale. Rileva automaticamente la lingua."
            },
            translate: {
                title: "Traduzione Istantanea",
                description: "Traduci il testo selezionato tra varie lingue con una singola scorciatoia. Wright rileva la lingua di partenza e traduce per te: non c'è bisogno di passare a un'altra app o a una scheda del browser."
            },
            customRoles: {
                title: "Ruoli IA Personalizzati",
                description: "Crea i tuoi ruoli IA — come revisore di codice, copywriter, addetto alle e-mail o qualsiasi altra cosa — ognuno con i propri prompt e comportamenti di sistema."
            },
            setup: {
                title: "Il tuo Setup, a Modo Tuo",
                description: "Configura le scorciatoie per ciascuno dei tuoi ruoli IA e personalizza l'interfaccia per adattarla al tuo flusso di lavoro. Wright supporta più provider LLM, consentendoti di scegliere quello che meglio si adatta alle tue esigenze.",
                list: [
                    "Scorciatoie da Tastiera Personalizzabili",
                    "Diversi Modelli di IA (OpenAI, Gemini, Grok, Groq)",
                    "Integrazione con PopClip"
                ]
            }
        },
        pricing: {
            title: "Scegli il tuo Piano",
            free: {
                tier: "Gratuito",
                tokens: "1.000 token / giorno",
                reset: "Reset giornaliero (mezzanotte UTC)",
                cta: "Inizia"
            },
            basic: {
                tier: "Base",
                period: "/ anno",
                tokens: "500.000 token / mese",
                reset: "Reset il 1° di ogni mese",
                cta: "Abbonati"
            },
            pro: {
                badge: "Più Popolare",
                tier: "Pro",
                period: "/ mese",
                tokens: "10.000.000 token / mese",
                reset: "Reset il 1° di ogni mese",
                cta: "Passa a Pro"
            }
        },
        benefits: {
            title: "Perché Wright?",
            subtitle: "Un assistente macOS nativo che resta in disparte finché non ne hai bisogno.",
            everywhere: {
                title: "Funziona Ovunque",
                description: "Scorciatoie da tastiera globali e integrazione con PopClip: funziona in qualsiasi app (Mail, Note, Slack, il tuo browser o qualsiasi campo di testo sul tuo Mac)."
            },
            free: {
                title: "Inizia Gratis",
                description: "Nessuna chiave API necessaria, nessuna configurazione. Include un piano gratuito per provare ogni funzionalità prima di passare alla versione Pro."
            }
        },
        download: {
            title: "Inizia Ora",
            description: "Scarica Wright gratuitamente e inizia a usarlo subito.",
            cta: "Scarica per macOS",
            guide: "Guida Utente",
            note: "Piano gratuito incluso · Nessuna configurazione richiesta"
        },
        footer: {
            rights: "© 2026 Wright. Tutti i diritti riservati.",
            privacy: "Informativa sulla Privacy",
            support: "Supporto"
        }
    },
    hi: {
        meta: {
            title: "Wright - macOS के लिए AI असिस्टेंट | पुनः लिखें, अनुवाद करें और चैट करें",
            description: "Wright macOS के लिए एक अनुकूलन योग्य AI सहायक है। अनुकूलित भूमिकाएँ बनाएँ, सहजता से टेक्स्ट को फिर से लिखें और उसका अनुवाद करें, और चैट करें - यह सब एक कीबोर्ड शॉर्टकट या PopClip से। उपयोग करने के लिए मुफ़्त।"
        },
        nav: {
            features: "विशेषताएं",
            download: "डाउनलोड",
            support: "सहायता",
            guide: "मार्गदर्शिका",
            toggle: "भाषा"
        },
        hero: {
            title: "macOS के लिए आपका AI असिस्टेंट",
            subtitle: "Wright macOS के लिए एक अनुकूलन योग्य AI सहायक है। अनुकूलित एआई भूमिकाएँ बनाएँ, सरलता से टेक्स्ट को फिर से लिखें और अनुवाद करें, और चैट करें—यह सब एक कीबोर्ड शॉर्टकट या PopClip से। उपयोग निःशुल्क है।",
            download: "macOS के लिए डाउनलोड करें"
        },
        guide: {
            title: "Wright उपयोगकर्ता गाइड",
            quickStart: {
                title: "त्वरित शुरुआत",
                accessibility: {
                    title: "नोट: एक्सेसिबिलिटी अनुमति आवश्यक",
                    desc1: "ग्लोबल कीबोर्ड शॉर्टकट की निगरानी के लिए Wright को एक्सेसिबिलिटी अनुमति की आवश्यकता होती है।",
                    desc2: "आप इसे सिस्टम सेटिंग्स > गोपनीयता और सुरक्षा > एक्सेसिबिलिटी में जाकर मैन्युअल रूप से सक्षम कर सकते हैं।",
                    desc3: "सेटिंग्स लागू करने के लिए आपको ऐप को पुनरारंभ करना पड़ सकता है।"
                },
                shortcuts: {
                    title: "कीबोर्ड शॉर्टकट का उपयोग",
                    desc: "पॉलिशिंग, अनुवाद और चैट के लिए शॉर्टकट का उपयोग करें।"
                },
                menuBar: {
                    title: "मेनू बार के माध्यम से उपयोग",
                    desc: "आप मेनू बार से भी Wright का उपयोग कर सकते हैं।"
                }
            },
            configureModels: {
                title: "LLM मॉडल कॉन्फ़िगर करें",
                step1: {
                    title: "1. सेटिंग्स खोलें",
                    list: ["Wright ऐप खोलें", "ऐप मेनू → सेटिंग्स"]
                },
                step2: {
                    title: "2. API कुंजी कॉन्फ़िगर करें",
                    list: ["\"LLM मॉडल\" टैब पर जाएँ", "प्रदाता चुनें", "API कुंजी पेस्ट करें", "सहेजें पर क्लिक करें"]
                },
                step3: {
                    title: "3. मॉडल चयन",
                    list: ["API कुंजी सहेजने के बाद, मॉडल संस्करण चुनें", "अब यह उपयोग के लिए तैयार है"]
                }
            },
            getApiKeys: {
                title: "LLM API कुंजी प्राप्त करें",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. खाता", list: ["<a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI प्लेटफ़ॉर्म</a> पर जाएँ", "साइन अप या लॉग इन करें"] },
                    step2: { title: "2. कुंजी", list: ["\"API keys\" पर जाएँ", "\"Create new secret key\" पर क्लिक करें", "कुंजी कॉपी करें"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. खाता", list: ["<a href=\"https://console.groq.com\" target=\"_blank\">Groq कंसोल</a> पर जाएँ", "साइन अप करें"] },
                    step2: { title: "2. कुंजी", list: ["\"API Keys\" पर जाएँ", "\"Create API Key\" पर क्लिक करें", "कुंजी कॉपी करें"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. खाता", list: ["Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a> पर जाएँ", "X के साथ लॉग इन करें"] },
                    step2: { title: "2. कुंजी", list: ["उपयोगकर्ता नाम → \"API Keys\"", "\"Create API Key\" पर क्लिक करें", "कुंजी कॉपी करें"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. खाता", list: ["<a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek प्लेटफ़ॉर्म</a> पर जाएँ", "साइन अप करें"] },
                    step2: { title: "2. कुंजी", list: ["\"API Keys\" पर जाएँ", "\"Create new API key\" पर क्लिक करें", "कुंजी कॉपी करें"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. खाता", list: ["<a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI स्टूडियो</a> पर जाएँ", "Google के साथ लॉग इन करें"] },
                    step2: { title: "2. कुंजी", list: ["\"Get API key\" पर क्लिक करें", "\"Create API key\" पर क्लिक करें", "कुंजी कॉपी करें"] }
                }
            },
            security: {
                title: "सुरक्षा नोट",
                list: [
                    "अपनी API कुंजी साझा न करें",
                    "कुंजियों को सुरक्षित रखें",
                    "समय-समय पर कुंजियाँ बदलें",
                    "उपयोग की निगरानी करें"
                ]
            }
        },
        support: {
            title: "सहायता केंद्र",
            subtitle: "उत्तर खोजें और मदद पाएँ।",
            links: {
                guide: {
                    title: "उपयोगकर्ता गाइड",
                    desc: "चरण-दर-चरण सेटअप: अभिगम्यता अनुमतियाँ, कीबोर्ड शॉर्टकट और कस्टम भूमिकाएँ।",
                    cta: "गाइड देखें"
                },
                issue: {
                    title: "किसी समस्या की रिपोर्ट करें",
                    desc: "कोई बग मिला या कोई सुझाव है? GitHub पर रिपोर्ट करें।",
                    cta: "समस्या सबमिट करें"
                }
            },
            faq: {
                title: "अक्सर पूछे जाने वाले प्रश्न",
                q1: {
                    q: "Wright क्या कर सकता है?",
                    a: "Wright macOS के लिए एक AI असिस्टेंट है। यह तीन बुनियादी कार्य प्रदान करता है जिन्हें आप किसी भी ऐप से कीबोर्ड शॉर्टकट या PopClip के माध्यम से ट्रिगर कर सकते हैं:",
                    list: [
                        "<strong>पुनः लिखें</strong> — अपने मूल अर्थ को बनाए रखते हुए व्याकरण, स्वर और स्पष्टता के लिए चयनित टेक्स्ट को पॉलिश करें।",
                        "<strong>अनुवाद करें</strong> — चयनित टेक्स्ट का तुरंत भाषाओं के बीच अनुवाद करें।",
                        "<strong>चैट</strong> — प्रश्न पूछें और AI के साथ बातचीत करें, त्वरित व्यू से पूर्ण चैट इंटरफ़ेस में जाने के विकल्प के साथ।"
                    ]
                },
                q2: {
                    q: "कौन से AI मॉडल समर्थित हैं?",
                    a: "Wright अग्रणी AI मॉडल द्वारा संचालित है:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "कस्टम AI भूमिकाएँ क्या हैं?",
                    a: "कस्टम भूमिकाएँ आपको उनके स्वयं के सिस्टम संकेतों के साथ विशिष्ट AI व्यक्तित्व बनाने देती हैं। उदाहरण के लिए, आप 'कोड समीक्षक' भूमिका, 'कॉपीराइटर' भूमिका या 'अनुवादक' भूमिका सेट कर सकते हैं - आपके द्वारा निर्दिष्ट निर्देशों के आधार पर प्रत्येक का व्यवहार अलग-अलग होता है।"
                },
                q4: {
                    q: "PopClip एकीकरण कैसे काम करता है?",
                    a: "यदि आपने PopClip इंस्टॉल किया है, तो Wright PopClip के पॉपअप मेनू में क्रियाएँ जोड़ता है। बस टेक्स्ट चुनें और यह अनुवाद या चैट के विकल्प दिखाएगा। आप Wright सेटिंग्स से इसका एक्सटेंशन डाउनलोड कर सकते हैं।"
                },
                q5: {
                    q: "क्या मेरा डेटा सुरक्षित है?",
                    a: "हाँ। Wright आपका व्यक्तिगत डेटा एकत्र या संगृहीत नहीं करता है। आपका टेक्स्ट AI द्वारा संसाधित किया जाता है और परिणाम सीधे वापस किया जाता है। अधिक जानकारी के लिए हमारी गोपनीयता नीति देखें।"
                },
                q6: {
                    q: "सिस्टम आवश्यकताएँ क्या हैं?",
                    a: "Wright के लिए macOS 14.0 (Sonoma) या इसके बाद का संस्करण आवश्यक है। इसे टेक्स्ट पढ़ने के लिए सिस्टम एक्सेसिबिलिटी अनुमतियों की आवश्यकता है। ऐप हल्का है और मेनू बार से काम करता है।"
                },
                q7: {
                    q: "कीबोर्ड शॉर्टकट कैसे काम करते हैं?",
                    a: "Wright वैश्विक कीबोर्ड शॉर्टकट का उपयोग करता है जो किसी भी ऐप में काम करते हैं। आप सेटिंग्स में इन्हें कस्टमाइज़ कर सकते हैं। बस टेक्स्ट चुनें, और परिणाम तुरंत उपयोग के लिए उपलब्ध होता है।"
                }
            },
            contact: {
                title: "हमसे संपर्क करें",
                email: "ईमेल सहायता",
                response: "हम आम तौर पर 24 घंटे के भीतर जबाव देते हैं।"
            }
        },
        privacy: {
            title: "गोपनीयता नीति",
            meta: {
                title: "गोपनीयता नीति | Wright",
                desc: "Wright की गोपनीयता नीति। हम व्यक्तिगत उपयोग डेटा एकत्र नहीं करते हैं।"
            },
            lastUpdated: "अंतिम अद्यतन: फ़रवरी 2026",
            commitment: {
                title: "गोपनीयता के प्रति हमारी प्रतिबद्धता",
                text: "Wright आपकी गोपनीयता को ध्यान में रखकर तैयार किया गया है। हम पारदर्शिता में विश्वास करते हैं और डेटा संग्रह को केवल अनिवार्य चीजों तक सीमित रखते हैं।",
                keyPoints: {
                    title: "प्रमुख गोपनीयता बिंदु:",
                    list: [
                        "हम आपकी वार्तालाप सामग्री तक नहीं पहुंचते या उसे संग्रहीत नहीं करते हैं",
                        "हम केवल खाता प्रबंधन के लिए आपका ईमेल एकत्र करते हैं",
                        "हम सेवा वितरण के लिए न्यूनतम कनेक्शन का उपयोग करते हैं"
                    ]
                }
            },
            dataCollection: {
                title: "डेटा संग्रहण एवं आर्किटेक्चर",
                text: "Wright आपके अनुरोधों को संसाधित करने के लिए एक सुरक्षित बैकएंड API सेवा का उपयोग करता है। हम आपके वार्तालाप का इतिहास या सामग्री संग्रहीत नहीं करते हैं।",
                apiKeys: {
                    title: "सेवा आर्किटेक्चर",
                    text: "सभी इंटरैक्शन हमारे सुरक्षित API के माध्यम से संसाधित किए जाते हैं। आपकी सामग्री को केवल प्रतिक्रियाएं उत्पन्न करने के लिए पारित किया जाता है और कभी भी सहेजा नहीं जाता है।",
                    list: [
                        "हम केवल आपका खाता ईमेल एकत्र करते हैं",
                        "समस्या निवारण के लिए प्रयुक्त न्यूनतम डेटा",
                        "वार्तालाप डेटा का कोई प्रतिधारण नहीं",
                        "सुरक्षित कार्यान्वयन"
                    ]
                }
            },
            thirdParty: {
                title: "थर्ड-पार्टी सेवाएं",
                text: "जब आप LLM सेवाओं (जैसे कि OpenAI, Groq, आदि) के साथ इंटरैक्ट करने के लिए Wright का उपयोग करते हैं, तो आपके इंटरैक्शन उन सेवाओं की गोपनीयता नीतियों द्वारा शासित होते हैं। हम आपको अपने द्वारा चुनी गई LLM सेवाओं की गोपनीयता नीतियों की समीक्षा करने की सलाह देते हैं:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI गोपनीयता नीति</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq गोपनीयता नीति</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI गोपनीयता नीति</a>"
                ]
            },
            security: {
                title: "डेटा सुरक्षा",
                text: "आपके खाते की जानकारी सुरक्षित रूप से संग्रहीत की जाती है। हम आपके डेटा की सुरक्षा के लिए उद्योग-मानक सुरक्षा उपायों को अपनाते हैं।"
            },
            changes: {
                title: "इस गोपनीयता नीति में परिवर्तन",
                text: "हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पृष्ठ पर नई नीति पोस्ट करके और \"अंतिम अद्यतन\" तिथि को बताकर आपको किसी भी बदलाव के बारे में सूचित करेंगे।"
            },
            contact: {
                title: "संपर्क करें",
                text: "यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:"
            }
        },
        howItWorks: {
            title: "यह कैसे काम करता है",
            subtitle: "कीबोर्ड शॉर्टकट का उपयोग करें या सभी सुविधाओं तक पहुंच के लिए PopClip के साथ एकीकृत करें।",
            step1: {
                title: "टेक्स्ट चुनें",
                description: "अपने Mac पर किसी भी ऐप में किसी भी टेक्स्ट को हाइलाइट करें।"
            },
            step2: {
                title: "शॉर्टकट दबाएं",
                description: "रीराइट, अनुवाद या चैट ट्रिगर करने के लिए अपने कॉन्फ़िगर किए गए शॉर्टकट को हिट करें या PopClip का उपयोग करें।"
            },
            step3: {
                title: "परिणाम प्राप्त करें",
                description: "आपका AI-संवर्धित टेक्स्ट तुरंत एक फ्लोटिंग विंडो में दिखाई देता है। एक क्लिक से कॉपी करें या बदलें।"
            }
        },
        features: {
            title: "मुख्य विशेषताएं",
            quickView: {
                title: "तेजी से आरंभ करें, गहराई में जाएं",
                description: "हल्के क्विक व्यू में एक त्वरित क्वेरी लॉन्च करें। जब बातचीत को अधिक गहराई की आवश्यकता हो, तो पूर्ण चैट इंटरफ़ेस में ट्रांज़िशन करें—आपका संदर्भ स्वचालित रूप से आ जाता है।"
            },
            rewrite: {
                title: "वन-की टेक्स्ट पॉलिश",
                description: "टेक्स्ट चुनें, एक शॉर्टकट दबाएं, और तुरंत एक पॉलिश किया हुआ संस्करण प्राप्त करें। Wright आपके मूल अर्थ को बनाए रखते हुए टाइपो, व्याकरण और अजीब वाक्यांशों को ठीक करता है। यह स्वचालित रूप से उस भाषा का पता लगाता है जिसे आप लिख रहे हैं।"
            },
            translate: {
                title: "त्वरित अनुवाद",
                description: "एक शॉर्टकट के साथ भाषाओं के बीच चयनित टेक्स्ट का अनुवाद करें। Wright स्रोत भाषा का पता लगाता है और आपके लिए इसका अनुवाद करता है—किसी अलग ऐप या ब्राउज़र टैब पर स्विच करने की आवश्यकता नहीं है।"
            },
            customRoles: {
                title: "कस्टम AI भूमिकाएं",
                description: "अपनी स्वयं की AI भूमिकाएं बनाएं - जैसे कि कोडिंग समीक्षा, कॉपी राइटिंग, ईमेल ड्राफ्टिंग, या कुछ और - प्रत्येक के अपने सिस्टम संकेत और व्यवहार के साथ।"
            },
            setup: {
                title: "आपका सेटअप, आपका तरीका",
                description: "अपनी प्रत्येक AI भूमिका के लिए शॉर्टकट कॉन्फ़िगर करें और अपने वर्कफ़्लो के अनुरूप इंटरफ़ेस को कस्टमाइज़ करें। Wright कई LLM प्रदाताओं का समर्थन करता है, जिससे आप अपनी आवश्यकताओं को सबसे अच्छी तरह पूरा करने वाले को चुन सकते हैं।",
                list: [
                    "अनुकूलन योग्य कीबोर्ड शॉर्टकट",
                    "एकाधिक AI मॉडल (OpenAI, Gemini, Grok, Groq)",
                    "PopClip एकीकरण"
                ]
            }
        },
        pricing: {
            title: "अपनी योजना चुनें",
            free: {
                tier: "नि: शुल्क",
                tokens: "1,000 टोकन / दिन",
                reset: "दैनिक रीसेट (मध्यरात्रि UTC)",
                cta: "आरंभ करें"
            },
            basic: {
                tier: "मूल",
                period: "/ वर्ष",
                tokens: "500,000 टोकन / महीना",
                reset: "हर महीने की 1 तारीख को रीसेट होता है",
                cta: "सदस्यता लें"
            },
            pro: {
                badge: "सबसे लोकप्रिय",
                tier: "प्रो",
                period: "/ महीना",
                tokens: "10,000,000 टोकन / महीना",
                reset: "हर महीने की 1 तारीख को रीसेट होता है",
                cta: "प्रो प्राप्त करें"
            }
        },
        benefits: {
            title: "Wright क्यों?",
            subtitle: "एक मूल macOS सहायक जब तक आपको इसकी आवश्यकता न हो तब तक आपके रास्ते से दूर रहता है",
            everywhere: {
                title: "हर जगह काम करता है",
                description: "वैश्विक कीबोर्ड शॉर्टकट और PopClip एकीकरण, किसी भी ऐप में काम करता है - मेल, नोट्स, स्लैक, आपका ब्राउज़र, या आपके Mac पर कोई भी टेक्स्ट फ़ील्ड।"
            },
            free: {
                title: "आरंभ करने के लिए निःशुल्क",
                description: "कोई API कुंजी नहीं, कोई कॉन्फ़िगरेशन नहीं। एक निःशुल्क योजना शामिल है ताकि आप अपग्रेड करने से पहले हर सुविधा को आज़मा सकें।"
            }
        },
        download: {
            title: "आरंभ करें",
            description: "Wright को मुफ़्त में डाउनलोड करें और तुरंत इसका उपयोग शुरू करें।",
            cta: "macOS के लिए डाउनलोड करें",
            guide: "उपयोगकर्ता मार्गदर्शिका",
            note: "निःशुल्क योजना शामिल है · कोई कॉन्फ़िगरेशन आवश्यक नहीं है"
        },
        footer: {
            rights: "© 2026 Wright। सर्वाधिकार सुरक्षित।",
            privacy: "गोपनीयता नीति",
            support: "सहायता"
        }
    },
    ar: {
        meta: {
            title: "Wright - مساعد الذكاء الاصطناعي لنظام macOS | إعادة كتابة، ترجمة ومحادثة",
            description: "Wright هو مساعد ذكاء اصطناعي قابل للتخصيص لنظام macOS. أنشئ أدوارًا مخصصة، أعد كتابة النصوص وترجمها بسهولة، وتحدث — كل ذلك من خلال اختصار لوحة مفاتيح أو PopClip. مجاني للاستخدام."
        },
        nav: {
            features: "الميزات",
            download: "تنزيل",
            support: "الدعم",
            guide: "الدليل",
            toggle: "اللغة"
        },
        hero: {
            title: "مساعد الذكاء الاصطناعي الخاص بك لنظام macOS",
            subtitle: "Wright هو مساعد ذكاء اصطناعي قابل للتخصيص لنظام macOS. أنشئ أدوارًا مخصصة، أعد صياغة وترجمة النصوص بسهولة، وتحدث — كل ذلك باستخدام اختصار لوحة مفاتيح أو PopClip. استخدمه مجانًا.",
            download: "تنزيل لنظام macOS"
        },
        guide: {
            title: "دليل مستخدم Wright",
            quickStart: {
                title: "البداية السريعة",
                accessibility: {
                    title: "ملاحظة: إذن الوصول مطلوب",
                    desc1: "يحتاج Wright إلى أذونات الوصول لمراقبة اختصارات لوحة المفاتيح العالمية.",
                    desc2: "يمكنك تمكين ذلك يدويًا في إعدادات النظام > الخصوصية والأمان > إمكانية الوصول.",
                    desc3: "قد تحتاج إلى إنهاء التطبيق وإعادة تشغيله لتطبيق الإعدادات."
                },
                shortcuts: {
                    title: "استخدام اختصارات لوحة المفاتيح",
                    desc: "استخدم الاختصارات للتلميع والترجمة والدردشة."
                },
                menuBar: {
                    title: "الاستخدام عبر شريط القوائم",
                    desc: "يمكنك أيضًا استخدام Wright من شريط القوائم."
                }
            },
            configureModels: {
                title: "تكوين نماذج LLM",
                step1: {
                    title: "1. فتح الإعدادات",
                    list: ["افتح تطبيق Wright", "قائمة التطبيق ← الإعدادات"]
                },
                step2: {
                    title: "2. تكوين مفتاح API",
                    list: ["انتقل إلى تبويب \"نموذج LLM\"", "اختر المزود", "الصق مفتاح API", "انقر فوق حفظ"]
                },
                step3: {
                    title: "3. اختيار النموذج",
                    list: ["بعد حفظ المفتاح، اختر إصدار النموذج", "الآن أصبح جاهزًا للاستخدام"]
                }
            },
            getApiKeys: {
                title: "الحصول على مفاتيح API",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. الحساب", list: ["زر <a href=\"https://platform.openai.com\" target=\"_blank\">منصة OpenAI</a>", "سجل الدخول"] },
                    step2: { title: "2. المفتاح", list: ["\"API keys\"", "\"Create new secret key\"", "نسخ المفتاح"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. الحساب", list: ["زر <a href=\"https://console.groq.com\" target=\"_blank\">وحدة تحكم Groq</a>", "تسيجل"] },
                    step2: { title: "2. المفتاح", list: ["\"API Keys\"", "\"Create API Key\"", "نسخ المفتاح"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. الحساب", list: ["زر Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "سجل الدخول بـ X"] },
                    step2: { title: "2. المفتاح", list: ["اسم المستخدم → \"API Keys\"", "\"Create API Key\"", "نسخ المفتاح"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. الحساب", list: ["زر <a href=\"https://platform.deepseek.com\" target=\"_blank\">منصة DeepSeek</a>", "تسجيل"] },
                    step2: { title: "2. المفتاح", list: ["\"API Keys\"", "\"Create new API key\"", "نسخ المفتاح"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. الحساب", list: ["زر <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">استوديو Google AI</a>", "سجل الدخول بـ Google"] },
                    step2: { title: "2. المفتاح", list: ["\"Get API key\"", "\"Create API key\"", "نسخ المفتاح"] }
                }
            },
            security: {
                title: "ملاحظات الأمان",
                list: [
                    "لا تشارك مفتاح API الخاص بك",
                    "احفظ المفاتيح بأمان",
                    "غير المفاتيح دوريًا",
                    "راقب الاستخدام"
                ]
            }
        },
        support: {
            title: "مركز الدعم",
            subtitle: "اعثر على إجابات واحصل على مساعدة.",
            links: {
                guide: {
                    title: "دليل المستخدم",
                    desc: "الإعداد خطوة بخطوة: أذونات إمكانية الوصول واختصارات لوحة المفاتيح والأدوار المخصصة.",
                    cta: "تصفح الدليل"
                },
                issue: {
                    title: "الإبلاغ عن مشكلة",
                    desc: "هل عثرت على خطأ أو لديك اقتراح؟ افتح مشكلة على GitHub.",
                    cta: "إرسال المشكلة"
                }
            },
            faq: {
                title: "الأسئلة المتداولة",
                q1: {
                    q: "ما الذي يمكن لـ Wright فعله؟",
                    a: "Wright هو مساعد ذكاء اصطناعي لنظام macOS. وهو يوفر ثلاث وظائف أساسية يمكنك تشغيلها من أي تطبيق عبر اختصارات لوحة المفاتيح أو PopClip:",
                    list: [
                        "<strong>إعادة الكتابة</strong> — صقل النص المحدد القواعد النحوية والأسلوب والوضوح مع الحفاظ على المعنى الأصلي.",
                        "<strong>الترجمة</strong> — ترجمة النص المحدد بين اللغات على الفور.",
                        "<strong>الدردشة</strong> — طرح الأسئلة وإجراء محادثة مع الذكاء الاصطناعي، مع خيار الانتقال من العرض السريع المدمج إلى واجهة الدردشة الكاملة."
                    ]
                },
                q2: {
                    q: "ما هي نماذج الذكاء الاصطناعي المدعومة؟",
                    a: "يتم تشغيل Wright بواسطة نماذج ذكاء اصطناعي رائدة:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "ما هي أدوار الذكاء الاصطناعي المخصصة؟",
                    a: "تتيح لك الأدوار المخصصة إنشاء شخصيات ذكاء اصطناعي متخصصة باستخدام تلقينات النظام الخاصة بك. يمكنك، على سبيل المثال، إعداد دور \"مراجع الكود\" أو \"كتابة الإعلانات\"."
                },
                q4: {
                    q: "كيف يعمل دمج PopClip؟",
                    a: "إذا قمت بتثبيت PopClip، يضيف Wright إجراءات إلى خياراته، فلا حاجة لاختصارات لوحة المفاتيح. يمكنك تنزيل الإضافة من خلال الإعدادات."
                },
                q5: {
                    q: "هل بياناتي آمنة؟",
                    a: "نعم. لا يجمع Wright أو يخزن بياناتك. تتم معالجة النص الخاص بك ويُعاد بطريقة مباشرة دون حفظ المحتوى. راجع سياسة الخصوصية الخاصة بنا."
                },
                q6: {
                    q: "ما هي متطلبات النظام؟",
                    a: "يتطلب Wright نظام التشغيل macOS 14.0 أو الأحدث منه، كما يحتاج لأذونات قراءة واستبدال النصوص المحددة عبر النظام. وهو تطبيق خفيف يعمل من خلال شريط القوائم."
                },
                q7: {
                    q: "كيف تعمل اختصارات لوحة المفاتيح؟",
                    a: "يستخدم Wright اختصارات عالمية جاهزة وقابلة للتخصيص من الإعدادات للعمل في أي تطبيق على نظامك."
                }
            },
            contact: {
                title: "اتصل بنا",
                email: "دعم البريد الإلكتروني",
                response: "نرد عادة في غضون 24 ساعة."
            }
        },
        privacy: {
            title: "سياسة الخصوصية",
            meta: {
                title: "سياسة الخصوصية | Wright",
                desc: "سياسة خصوصية Wright. نحن لا نجمع بيانات الاستخدام الشخصية."
            },
            lastUpdated: "آخر تحديث: فبراير ٢٠٢٦",
            commitment: {
                title: "التزامنا بالخصوصية",
                text: "تم تصميم Wright واضعين خصوصيتك في الاعتبار. نحن نؤمن بالشفافية ونقلل من جمع البيانات إلى الحد الأدنى الضروري.",
                keyPoints: {
                    title: "النقاط الرئيسية للخصوصية:",
                    list: [
                        "نحن لا نصل إلى أو نخزن محتوى محادثاتك",
                        "نحن نجمع فقط بريدك الإلكتروني لإدارة الحساب",
                        "نحن نستخدم الحد الأدنى من الاتصالات لتقديم الخدمة"
                    ]
                }
            },
            dataCollection: {
                title: "جمع البيانات وهندسية النظام",
                text: "يستخدم Wright خدمة واجهة برمجة تطبيقات خلفية آمنة لمعالجة طلباتك. نحن لا نخزن سجل محادثاتك أو محتواها.",
                apiKeys: {
                    title: "هيكلية الخدمة",
                    text: "تتم معالجة جميع التفاعلات من خلال واجهة برمجة التطبيقات الآمنة لدينا. يتم تمرير محتواك فقط لتوليد الردود ولا يتم حفظه أبدًا.",
                    list: [
                        "نحن نجمع فقط البريد الإلكتروني الخاص بحسابك",
                        "الحد الأدنى من البيانات المستخدمة لاستكشاف الأخطاء",
                        "لا يتم الاحتفاظ ببيانات المحادثات",
                        "تنفيذ آمن"
                    ]
                }
            },
            thirdParty: {
                title: "خدمات الطرف الثالث",
                text: "عندما تستخدم Wright للتفاعل مع خدمات LLM (مثل OpenAI، Groq، وما إلى ذلك)، فإن تفاعلاتك تخضع لسياسات الخصوصية الخاصة بتلك الخدمات. نوصي بمراجعة سياسات الخصوصية لخدمات LLM التي تختار استخدامها:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">سياسة خصوصية OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">سياسة خصوصية Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">سياسة خصوصية xAI</a>"
                ]
            },
            security: {
                title: "أمن البيانات",
                text: "يتم تخزين معلومات حسابك بشكل آمن. نحن نطبق تدابير أمنية متوافقة مع معايير الصناعة لحماية بياناتك."
            },
            changes: {
                title: "التغييرات على سياسة الخصوصية هذه",
                text: "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنقوم بإعلامك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة وتحديث تاريخ \"آخر تحديث\"."
            },
            contact: {
                title: "اتصل بنا",
                text: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يُرجى الاتصال بنا على:"
            }
        },
        howItWorks: {
            title: "كيف يعمل",
            subtitle: "استخدم اختصارات لوحة المفاتيح أو ادمجه مع PopClip للوصول إلى كافة الميزات بضغطة زر أيمن.",
            step1: {
                title: "حدد النص",
                description: "قم بتحديد أي نص في أي تطبيق على جهاز Mac الخاص بك."
            },
            step2: {
                title: "اضغط على الاختصار",
                description: "اضغط على اختصارك الذي قمت بإعداده أو استخدم PopClip لتشغيل إعادة الكتابة أو الترجمة أو الدردشة."
            },
            step3: {
                title: "احصل على النتيجة",
                description: "يظهر النص المُحسّن بواسطة الذكاء الاصطناعي على الفور في نافذة عائمة. يمكنك نسخه أو استبداله بنقرة واحدة."
            }
        },
        features: {
            title: "الميزات الرئيسية",
            quickView: {
                title: "بدء سريع، تعمق لاحقًا",
                description: "أطلق استعلامًا سريعًا في العرض السريع (Quick View) الخفيف. عندما تحتاج المحادثة إلى مزيد من التعمق، انتقل إلى واجهة الدردشة الكاملة — وسينتقل سياقك تلقائيًا."
            },
            rewrite: {
                title: "تحسين النص بزر واحد",
                description: "حدد نصًا، واضغط على اختصار، واحصل على نسخة منقحة على الفور. يعمل Wright على إصلاح الأخطاء المطبعية، والقواعد النحوية، والعبارات الركيكة مع الحفاظ على المعنى الأصلي. وهو يكتشف اللغة التي تكتب بها تلقائيًا."
            },
            translate: {
                title: "ترجمة فورية",
                description: "ترجم النص المحدد بين اللغات عبر اختصار واحد. يكتشف Wright لغة المصدر ويترجمها لك — لا حاجة للتبديل إلى تطبيق آخر أو علامة تبويب للمتصفح."
            },
            customRoles: {
                title: "أدوار ذكاء اصطناعي مخصصة",
                description: "أنشئ أدوار الذكاء الاصطناعي الخاصة بك - مثل مراجعة الأكواد، أو كتابة الإعلانات، أو صياغة رسائل البريد الإلكتروني، أو أي شيء آخر - ولكل منها تلقيناته وسلوكياته النظامية الخاصة."
            },
            setup: {
                title: "إعدادك، طريقتك",
                description: "قم بتهيئة الاختصارات لكل دور من أدوار الذكاء الاصطناعي الخاصة بك وقم بتخصيص الواجهة لتناسب سير عملك. يدعم Wright العديد من موفري LLM، مما يسمح لك باختيار المزود الذي يلبي متطلباتك بشكل أفضل.",
                list: [
                    "اختصارات لوحة مفاتيح قابلة للتخصيص",
                    "متعدد نماذج الذكاء الاصطناعي (OpenAI و Gemini و Grok و Groq)",
                    "تكامل كامل مع PopClip"
                ]
            }
        },
        pricing: {
            title: "اختر خطتك",
            free: {
                tier: "مجانًا",
                tokens: "1,000 توكن / يوم",
                reset: "إعادة تعيين يومية (منتصف الليل بالتوقيت العالمي)",
                cta: "ابدأ الآن"
            },
            basic: {
                tier: "أساسي",
                period: "/ سنة",
                tokens: "500,000 توكن / شهر",
                reset: "يُعاد التعيين في اليوم الأول من كل شهر",
                cta: "اشترك"
            },
            pro: {
                badge: "الأكثر شيوعًا",
                tier: "احترافي",
                period: "/ شهر",
                tokens: "10,000,000 توكن / شهر",
                reset: "يُعاد التعيين في اليوم الأول من كل شهر",
                cta: "احصل على الاحترافي"
            }
        },
        benefits: {
            title: "لماذا Wright؟",
            subtitle: "مساعد macOS أصلي يبقى بعيدًا عن طريقك حتى تحتاج إليه",
            everywhere: {
                title: "يعمل في كل مكان",
                description: "اختصارات لوحة المفاتيح العامة وتكامل PopClip، يعمل في أي تطبيق — البريد، الملاحظات، Slack، متصفحك، أو أي حقل إدخال نصي على جهاز Mac الخاص بك."
            },
            free: {
                title: "بدء مجاني",
                description: "بدون مفتاح API، بدون تعقيدات الإعداد. يتم تضمين خطة مجانية لتتمكن من تجربة كل ميزة قبل اتخاذ قرار الترقية."
            }
        },
        download: {
            title: "ابدأ الآن",
            description: "قم بتنزيل Wright مجانًا وابدأ في استخدامه على الفور.",
            cta: "تنزيل لنظام macOS",
            guide: "دليل المستخدم",
            note: "تم تضمين خطة مجانية · لا يتطلب أي إعداد"
        },
        footer: {
            rights: "© ٢٠٢٦ Wright. جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            support: "الدعم"
        }
    }, tr: {
        meta: {
            title: "Wright - macOS için Yapay Zeka Asistanı | Yeniden Yaz, Çevir & Sohbet Et",
            description: "Wright, macOS için özelleştirilebilir bir yapay zeka asistanıdır. İstediğiniz rolleri oluşturun, zahmetsizce metinleri yeniden yazın, çeviri yapın ve sohbet edin — tümü klavye kısayolları veya PopClip ile. Kullanımı ücretsizdir."
        },
        nav: {
            features: "Özellikler",
            download: "İndir",
            support: "Destek",
            guide: "Rehber",
            toggle: "Dil"
        },
        hero: {
            title: "macOS için Kendi Yapay Zeka Asistanınız",
            subtitle: "Wright, macOS için özelleştirilebilir bir yapay zeka asistanıdır. İstediğiniz rolleri oluşturun, zahmetsizce metinleri yeniden yazın ve çevirin, aynı zamanda sohbet edin — tamamını tek bir klavye kısayolu veya PopClip üzerinden yönetin. Ücretsiz kullanın.",
            download: "macOS için İndir"
        },
        guide: {
            title: "Wright Kullanıcı Kılavuzu",
            quickStart: {
                title: "Hızlı Başlangıç",
                accessibility: {
                    title: "NOT: Erişilebilirlik İzni Gerekli",
                    desc1: "Wright'ın genel klavye kısayollarını izlemek için Erişilebilirlik izinlerine ihtiyacı vardır.",
                    desc2: "Bunu Sistem Ayarları > Gizlilik ve Güvenlik > Erişilebilirlik bölümünden manuel olarak etkinleştirebilirsiniz.",
                    desc3: "Ayarları uygulamak için uygulamadan çıkıp yeniden başlatmanız gerekebilir."
                },
                shortcuts: {
                    title: "Klavye Kısayollarını Kullanma",
                    desc: "Parlatma, çeviri ve sohbet için kısayolları kullanın."
                },
                menuBar: {
                    title: "Menü Çubuğu Üzerinden Kullanım",
                    desc: "Wright'ı menü çubuğunuzdan da kullanabilirsiniz."
                }
            },
            configureModels: {
                title: "LLM Modellerini Yapılandırma",
                step1: {
                    title: "1. Ayarlara Erişim",
                    list: ["Wright uygulamasını açın", "Uygulama menüsü → Ayarlar"]
                },
                step2: {
                    title: "2. API Anahtarını Yapılandırın",
                    list: ["\"LLM Modeli\" sekmesine gidin", "Sağlayıcıyı seçin", "API anahtarını yapıştırın", "Kaydet'e tıklayın"]
                },
                step3: {
                    title: "3. Model Seçimi",
                    list: ["API anahtarını kaydettikten sonra model sürümünü seçin", "Artık kullanıma hazırsınız"]
                }
            },
            getApiKeys: {
                title: "LLM API Anahtarlarını Alın",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Hesap", list: ["<a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI Platformunu</a> ziyaret edin", "Kayıt olun veya giriş yapın"] },
                    step2: { title: "2. Anahtar", list: ["\"API keys\"e gidin", "\"Create new secret key\"e tıklayın", "Anahtarı kopyalayın"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Hesap", list: ["<a href=\"https://console.groq.com\" target=\"_blank\">Groq Konsolunu</a> ziyaret edin", "Kayıt olun"] },
                    step2: { title: "2. Anahtar", list: ["\"API Keys\"e gidin", "\"Create API Key\"e tıklayın", "Anahtarı kopyalayın"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Hesap", list: ["Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a> ziyaret edin", "X ile giriş yapın"] },
                    step2: { title: "2. Anahtar", list: ["Kullanıcı adı → \"API Keys\"", "\"Create API Key\"e tıklayın", "Anahtarı kopyalayın"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Hesap", list: ["<a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek Platformunu</a> ziyaret edin", "Kayıt olun"] },
                    step2: { title: "2. Anahtar", list: ["\"API Keys\"e gidin", "\"Create new API key\"e tıklayın", "Anahtarı kopyalayın"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Hesap", list: ["<a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio'yu</a> ziyaret edin", "Google ile giriş yapın"] },
                    step2: { title: "2. Anahtar", list: ["\"Get API key\"e tıklayın", "\"Create API key\"e tıklayın", "Anahtarı kopyalayın"] }
                }
            },
            security: {
                title: "Güvenlik Notları",
                list: [
                    "API anahtarınızı paylaşmayın",
                    "Anahtarları güvenli bir şekilde saklayın",
                    "Anahtarları periyodik olarak değiştirin",
                    "Kullanımı izleyin"
                ]
            }
        },
        support: {
            title: "Destek Merkezi",
            subtitle: "Cevapları bulun ve yardım alın.",
            links: {
                guide: {
                    title: "Kullanıcı Kılavuzu",
                    desc: "Kurulum adımları: erişilebilirlik izinleri, klavye kısayolları ve özel roller.",
                    cta: "Kılavuzu Görüntüle"
                },
                issue: {
                    title: "Sorun Bildir",
                    desc: "Bir hata mı buldunuz veya öneriniz mi var? GitHub üzerinden bir sorun açın.",
                    cta: "Sorun Bildir"
                }
            },
            faq: {
                title: "Sıkça Sorulan Sorular",
                q1: {
                    q: "Wright ne yapabilir?",
                    a: "Wright macOS için bir yapay zeka asistanıdır. Klavye kısayolları veya PopClip aracılığıyla herhangi bir uygulamadan tetikleyebileceğiniz üç temel işlev sunar:",
                    list: [
                        "<strong>Yeniden Yazma</strong> — Orijinal anlamını koruyarak seçili metni dil bilgisi, ifade tarzı ve netlik açısından iyileştirin.",
                        "<strong>Çeviri</strong> — Seçili metni anında diller arasında çevirin.",
                        "<strong>Sohbet</strong> — Yapay Zeka ile sohbet edin, soru sorun ve hafif bir Hızlı Görünümden (Quick View) tam Sohbet arayüzüne geçiş yapma seçeneğiyle diyalog kurun."
                    ]
                },
                q2: {
                    q: "Hangi yapay zeka modelleri desteklenmektedir?",
                    a: "Wright önde gelen yapay zeka modelleri tarafından desteklenmektedir:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "Özel Yapay Zeka Rolleri nedir?",
                    a: "Özel Roller kendi yapılandırdığınız yönergelerle uzman yapay zeka kişilikleri oluşturmanızı sağlar. Örneğin, bir \"Kod İnceleyici\" veya \"Metin Yazarı\" oluşturabilirsiniz. Quick View veya Sohbet kısmında anında bu roller arasında geçiş yapabilirsiniz."
                },
                q4: {
                    q: "PopClip entegrasyonu nasıl çalışıyor?",
                    a: "Eğer PopClip yüklü ise, Wright kendi kısayol seçeneklerini uygulamanın menüsüne ekler. Herhangi bir programda bir yeri seçtiğinizde yazım ve tercüme fonksiyonlarına direkt tıklar ulaşabilirsiniz - tuş hatırlamaya gerek kalmaz. Wright'ın Ayarlar ekranından gerekli eklentiyi yükleyebilirsiniz."
                },
                q5: {
                    q: "Verilerim güvende mi?",
                    a: "Kesinlikle evet. Wright tarafınızdan kişisel kullanım analiz verisi toplamaz veya kaydetmez. İstekler aracı sunuculardan direkt modellere gönderilir ve gelen cevap sizin ekranınıza iletilir. Konuşmalarınız tutulmaz. Detaylar için Gizlilik Politikasından bilgilenin."
                },
                q6: {
                    q: "Sistem gereksinimleri neler?",
                    a: "Uygulamanın düzgünce çalışması ve her alandaki yazıları işlemek için Sistem Ayarlarında Erişebilirlik kısmından izin gerektirir. Uygulama sadece macOS 14.0 (Sonoma) sürümü ve bu sürümün üstündeki Apple bilgisayarlarda çalışabilen küçük boyutlu bir Menü çubuğu yazılımıdır."
                },
                q7: {
                    q: "Klavye kısayolları ile nasıl işlemler yapıyoruz?",
                    a: "Program çalışırken Global Klavye dinleme sistemi aktiftir. Yani istediğiniz yazılımdaki içerik üzerinde ayarlanan tuş kombinasyonunu yaptığınız anda penceremiz beliriverir. Bu kısayolları Ayarlar → Kısayollar kısmından özgürce kişiselleştirin."
                }
            },
            contact: {
                title: "İletişime Geçin",
                email: "E-posta Desteği",
                response: "Genellikle 24 saat içerisinde yanıt veririz."
            }
        },
        privacy: {
            title: "Gizlilik Politikası",
            meta: {
                title: "Gizlilik Politikası | Wright",
                desc: "Wright Gizlilik Politikası. Kişisel kullanım verilerinizi toplamıyoruz."
            },
            lastUpdated: "Son Güncelleme: Şubat 2026",
            commitment: {
                title: "Gizlilik Taahhüdümüz",
                text: "Wright, gizliliğiniz göz önünde bulundurularak tasarlanmıştır. Şeffaflığa inanıyor ve veri toplamayı sadece gerekli olan en az seviyeye indiriyoruz.",
                keyPoints: {
                    title: "Temel Gizlilik Noktaları:",
                    list: [
                        "Konuşma içeriklerinize erişmiyor ve bunları saklamıyoruz",
                        "Hesap yönetimi için sadece e-postanızı topluyoruz",
                        "Hizmet sunumu için asgari bağlantılar kullanıyoruz"
                    ]
                }
            },
            dataCollection: {
                title: "Veri Toplama ve Mimari",
                text: "Wright, taleplerinizi işlemek için güvenli bir backend API hizmeti kullanır. Konuşma geçmişinizi veya içeriğinizi depolamıyoruz.",
                apiKeys: {
                    title: "Hizmet Mimarisi",
                    text: "Tüm etkileşimler güvenli API'miz üzerinden işlenir. İçeriğiniz yalnızca yanıt üretmek amacıyla iletilir ve hiçbir zaman kaydedilmez.",
                    list: [
                        "Sadece hesabınızın e-postası toplanır",
                        "Sorun giderme için minimum veri kullanılır",
                        "Konuşma verileri elde tutulmaz",
                        "Güvenli uygulama"
                    ]
                }
            },
            thirdParty: {
                title: "Üçüncü Taraf Hizmetleri",
                text: "Wright'ı LLM hizmetleriyle (OpenAI, Groq vb.) etkileşim kurmak için kullandığınızda, etkileşimleriniz bu hizmetlerin gizlilik politikalarına tabidir. Kullanmayı seçtiğiniz LLM hizmetlerinin gizlilik politikalarını incelemenizi öneririz:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI Gizlilik Politikası</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq Gizlilik Politikası</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI Gizlilik Politikası</a>"
                ]
            },
            security: {
                title: "Veri Güvenliği",
                text: "Hesap bilgileriniz güvenli bir şekilde saklanır. Verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz."
            },
            changes: {
                title: "Bu Gizlilik Politikasındaki Değişiklikler",
                text: "Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Değişiklikleri, bu sayfada yeni politikayı yayınlayarak ve \"Son Güncelleme\" tarihini değiştirerek size bildireceğiz."
            },
            contact: {
                title: "Bize Ulaşın",
                text: "Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:"
            }
        },
        howItWorks: {
            title: "Nasıl Çalışır?",
            subtitle: "Tüm özelliklere sağ tıklayarak erişmek için klavye kısayollarını kullanın veya PopClip ile entegre edin.",
            step1: {
                title: "Metni Seçin",
                description: "Mac'inizdeki herhangi bir uygulamada herhangi bir metni vurgulayın."
            },
            step2: {
                title: "Kısayolu Tuşlayın",
                description: "Yapılandırdığınız kısayolu tuşlayın veya yeniden yazma, çeviri veya sohbeti tetiklemek için PopClip'i kullanın."
            },
            step3: {
                title: "Sonucu Alın",
                description: "Yapay zeka ile geliştirilmiş metniniz, yüzen bir pencerede anında görüntülenir. Sadece tek bir tıklamayla metninizi kopyalayın veya değiştirin."
            }
        },
        features: {
            title: "Önemli Özellikler",
            quickView: {
                title: "Hızlı Başla, Derine İn",
                description: "Hafifletilmiş Quick View ekranında hızlı bir sorgu başlatın. Konuşmanın derinleşmesi gerektiğinde, metin içeriği otomatik olarak korunarak eksiksiz Sohbet arayüzüne geçiş yapın."
            },
            rewrite: {
                title: "Tek Tuşla Metni Toparlayın",
                description: "Metni seçin, bir kısayola basın ve anında düzenlenmiş bir versiyon elde edin. Wright, asıl anlamınızı kaybetmeden yazım hatalarını, dilbilgisi sorunlarını ve tuhaf cümleleri düzeltir. Yazdığınız dili otomatik olarak algılar."
            },
            translate: {
                title: "Anında Çeviri",
                description: "Seçili metni tek bir kısayolla diller arasında çevirin. Wright kaynak metni algılar ve sizin için çevirir — başka bir uygulamaya veya tarayıcı sekmesine geçmenize hiç gerek kalmaz."
            },
            customRoles: {
                title: "Özel Yapay Zeka Rolleri",
                description: "Kod incelemesi, reklam yazarlığı, e-posta taslağı veya başka herhangi bir şey gibi kendi yapay zeka rollerinizi oluşturun - her birinin kendi sistem yönlendirmeleri ve karakteristik bir çalışma stili vardır."
            },
            setup: {
                title: "Senin Kurulumun, Senin Yöntemin",
                description: "Yapay zeka rollerinizin her biri için kısayollarınızı yapılandırın ve arayüzü çalışma akışınıza uyacak şekilde özelleştirin. Wright birden fazla LLM sağlayıcısını destekleyerek gereksinimlerinizi en iyi karşılayanı seçmenize olanak tanır.",
                list: [
                    "Özelleştirilebilir Klavye Kısayolları",
                    "Çeşitli Yapay Zeka Modelleri (OpenAI, Gemini, Grok, Groq)",
                    "Tam PopClip Entegrasyonu"
                ]
            }
        },
        pricing: {
            title: "Planınızı Seçin",
            free: {
                tier: "Ücretsiz",
                tokens: "1.000 token / gün",
                reset: "Günlük yenileme (Gece Yarısı UTC)",
                cta: "Başlayın"
            },
            basic: {
                tier: "Temel",
                period: "/ yıl",
                tokens: "500.000 token / ay",
                reset: "Her ayın 1'inde yenilenir",
                cta: "Abone Ol"
            },
            pro: {
                badge: "En Popüler",
                tier: "Pro",
                period: "/ ay",
                tokens: "10.000.000 token / ay",
                reset: "Her ayın 1'inde yenilenir",
                cta: "Pro'yu Alın"
            }
        },
        benefits: {
            title: "Neden Wright?",
            subtitle: "Siz ona ihtiyaç duyana kadar yolunuza hiç çıkmayan, yerel bir macOS asistanı",
            everywhere: {
                title: "Her Yerde Çalışır",
                description: "Küresel klavye kısayolları ve PopClip entegrasyonu sayesinde herhangi bir uygulamada — Mail, Notlar, Slack, tarayıcınız veya Mac'inizdeki tüm metin alanları."
            },
            free: {
                title: "Başlamak Ücretsiz",
                description: "API anahtarı yok, yapılandırma çabası yok. Yükseltmeye karar vermeden önce her bir özelliği deneyebilmeniz için ücretsiz bir plan mevcuttur."
            }
        },
        download: {
            title: "Yola Çıkın",
            description: "Wright'ı ücretsiz olarak indirin ve hemen kullanmaya başlayın.",
            cta: "macOS için İndir",
            guide: "Kullanım Kılavuzu",
            note: "Ücretsiz plan dahildir · Sıfır yapılandırma"
        },
        footer: {
            rights: "© 2026 Wright. Tüm hakları saklıdır.",
            privacy: "Gizlilik Politikası",
            support: "Destek"
        }
    },
    vi: {
        meta: {
            title: "Wright - Trợ Lý AI cho macOS | Viết lại, Dịch & Trò Chuyện",
            description: "Wright là trợ lý AI tùy chỉnh cho macOS. Tạo các vai trò riêng biệt, dễ dàng viết lại hoặc dịch văn bản và trò chuyện — tất cả chỉ bằng một phím tắt hoặc PopClip. Sử dụng miễn phí."
        },
        nav: {
            features: "Tính Năng",
            download: "Tải Về",
            support: "Hỗ Trợ",
            guide: "Hướng Dẫn",
            toggle: "Ngôn Ngữ"
        },
        hero: {
            title: "Trợ Lý AI Dành Cho macOS Của Bạn",
            subtitle: "Wright là trợ lý AI tùy biến cho macOS. Tạo các vai trò tùy chỉnh, dễ dàng viết lại, dịch văn bản, và trò chuyện — tất cả chỉ từ phím tắt hoặc PopClip. Hoàn toàn miễn phí sử dụng.",
            download: "Tải về cho macOS"
        },
        guide: {
            title: "Hướng dẫn Sử dụng Wright",
            quickStart: {
                title: "Bắt đầu Nhanh",
                accessibility: {
                    title: "LƯU Ý: Cần Quyền Trợ năng",
                    desc1: "Wright cần quyền Trợ năng để theo dõi phím tắt toàn cầu.",
                    desc2: "Bạn có thể bật thủ công trong Cài đặt hệ thống > Quyền riêng tư & Bảo mật > Trợ năng.",
                    desc3: "Bạn có thể cần thoát và khởi động lại ứng dụng để áp dụng cài đặt."
                },
                shortcuts: {
                    title: "Sử dụng Phím tắt",
                    desc: "Sử dụng phím tắt để chỉnh sửa, dịch và trò chuyện."
                },
                menuBar: {
                    title: "Sử dụng qua Thanh menu",
                    desc: "Bạn cũng có thể sử dụng Wright từ thanh menu."
                }
            },
            configureModels: {
                title: "Cấu hình Mô hình LLM",
                step1: {
                    title: "1. Truy cập Cài đặt",
                    list: ["Mở ứng dụng Wright", "Menu ứng dụng → Cài đặt"]
                },
                step2: {
                    title: "2. Cấu hình Khóa API",
                    list: ["Vào tab \"Mô hình LLM\"", "Chọn nhà cung cấp", "Dán khóa API", "Nhấp Lưu"]
                },
                step3: {
                    title: "3. Chọn Mô hình",
                    list: ["Sau khi lưu khóa API, chọn phiên bản mô hình", "Bây giờ đã sẵn sàng sử dụng"]
                }
            },
            getApiKeys: {
                title: "Lấy Khóa API LLM",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Tài khoản", list: ["Truy cập <a href=\"https://platform.openai.com\" target=\"_blank\">Nền tảng OpenAI</a>", "Đăng ký hoặc đăng nhập"] },
                    step2: { title: "2. Khóa", list: ["Vào \"API keys\"", "Nhấp \"Create new secret key\"", "Sao chép khóa"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Tài khoản", list: ["Truy cập <a href=\"https://console.groq.com\" target=\"_blank\">Bảng điều khiển Groq</a>", "Đăng ký"] },
                    step2: { title: "2. Khóa", list: ["Vào \"API Keys\"", "Nhấp \"Create API Key\"", "Sao chép khóa"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Tài khoản", list: ["Truy cập Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Đăng nhập bằng X"] },
                    step2: { title: "2. Khóa", list: ["Tên người dùng → \"API Keys\"", "Nhấp \"Create API Key\"", "Sao chép khóa"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Tài khoản", list: ["Truy cập <a href=\"https://platform.deepseek.com\" target=\"_blank\">Nền tảng DeepSeek</a>", "Đăng ký"] },
                    step2: { title: "2. Khóa", list: ["Vào \"API Keys\"", "Nhấp \"Create new API key\"", "Sao chép khóa"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Tài khoản", list: ["Truy cập <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Đăng nhập bằng Google"] },
                    step2: { title: "2. Khóa", list: ["Nhấp \"Get API key\"", "Nhấp \"Create API key\"", "Sao chép khóa"] }
                }
            },
            security: {
                title: "Lưu ý Bảo mật",
                list: [
                    "Không chia sẻ khóa API của bạn",
                    "Lưu trữ khóa an toàn",
                    "Thay đổi khóa định kỳ",
                    "Theo dõi việc sử dụng"
                ]
            }
        },
        support: {
            title: "Trung tâm Hỗ trợ",
            subtitle: "Tìm câu trả lời và nhận trợ giúp.",
            links: {
                guide: {
                    title: "Hướng dẫn Người dùng",
                    desc: "Thiết lập từng bước: cấp quyền trợ năng, phím tắt cũng như các vai trò tuỳ chỉnh.",
                    cta: "Xem hướng dẫn"
                },
                issue: {
                    title: "Báo cáo lỗi",
                    desc: "Tìm thấy một lỗi hoặc có gợi ý? Hãy mở một truy vấn trong Github.",
                    cta: "Gửi vấn đề"
                }
            },
            faq: {
                title: "Các câu hỏi thường gặp",
                q1: {
                    q: "Wright có thể làm gì?",
                    a: "Wright là một trợ lý ảo (AI) dành cho macOS. Cung cấp nhanh ba tính năng chính hữu dụng qua bàn phím tắt hoặc thanh PopClip tại bất kỳ phần mềm nào:",
                    list: [
                        "<strong>Chỉnh văn</strong> — Trau chuốt lại câu từ văn phạm đã lựa chọn nhưng giữ lại hàm ý ban đầu của tác giả.",
                        "<strong>Dịch Đoạn</strong> — Đem lại ngôn ngữ bản địa chuyển ngữ cực lẹ từ nội dung bạn vừa quét khối.",
                        "<strong>Nhắn Hỏi</strong> — Hỏi nhanh với AI và nó sẽ đưa câu trả cho bạn với cửa sổ nhỏ, hay cũng có thể nhảy luôn sang bảng giao tiếp to hơn để hỏi nhiều hơn."
                    ]
                },
                q2: {
                    q: "Các hệ thống AI nào hiện đang được tương thích có thể sử dụng?",
                    a: "Wright nạp đầy sức mạnh đến từ hàng loạt những AI thông minh và nổi tiếng nhất:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "Custom AI Roles là tính năng gì vậy?",
                    a: "Chế độ vai trò tuỳ biến (Custom roles) cho phép rèn luyện kĩ năng giải quyết riêng rẽ cho từng mục đích người dùng để hoạt động chuẩn nhất. Khởi tạo một AI 'Chuyên ngành lập trình' hay 'người làm Content Writer', AI sẽ ngoan ngoãn hoạt động theo đúng yêu cầu mà bạn cài. Bạn cũng dễ dàng đổi sang AI này để làm việc trong 1 cú click ngay tại màn Hình Nhanh lúc đó."
                },
                q4: {
                    q: "Quá trình giao tiếp tích hợp với PopClip diễn ra như thế nào?",
                    a: "Miễn là bạn có phần mềm PopClip được chạy sẵn trên máy. Wright sẻ có thể liên kết tự tạo thêm menu rút gọn sau thao tác bạn Chọn bôi đen (highlight) chữ trên màn. Thao tác gọi trực tiếp này sẽ lướt qua luôn bàn phím - không cần nhớ bấm tổ hợp Phím rườm rà. Tìm link tải plugin popclip trong giao diện Settings của Wright nhé!"
                },
                q5: {
                    q: "Dữ kiện máy của tôi có an toàn tuyệt đối không?",
                    a: "Chắc chắn là an toàn! Nó là tiêu chí hàng đầu của tôi. Ứng dụng Wright sẽ không tự động cào bất kỳ dữ liệu cá nhân hay thói quen nào của bạn! Những con chữ bạn gắp đều được đẩy qua hạ tầng đám mây máy chủ xử lý rồi trả tận kết quả cuối vào tay bạn thôi - Chúng tôi xin không trộm hay ghi chép chúng. Chào mừng xem kỹ trang Bảo Mật dữ liệu."
                },
                q6: {
                    q: "Bao gồm những yêu cầu phần cứng lẫn hệ điều hành ra sao để chạy được ư?",
                    a: "Để ứng dụng Wright cất cánh cần macOS mã 14.0 (Tên bản Sonoma) hoặc đời kế mới hơn. Wright cần uỷ quyền 'Hỗ trợ nâng cao - Accessibility' để Wright thay mặt đọc vùng mã hay xoá ghi đè kết quả mới của toàn máy tính giúp bạn một cách liền mạch. App rất siêu nhẹ đặt mình tại thanh Trạng Thái (Menu bar app)."
                },
                q7: {
                    q: "Vậy làm sao thiết lập thao tác nhanh của Shortcut?",
                    a: "Chắc chắn rồi. Global Keyboard Shortcuts (Nút Lệnh Cầu Toàn Cục) chạy đa luồng mọi phần mềm trên một máy MacOS giúp việc làm trở nên tiện lợi. Lựa và bấm sẽ ra giao diện nổi lẹ nhất để có luôn copy hay chuyển tiếp. Điều chuyển nó ở trang Cài Đặt (Settings) -> Kéo sang Menu Của Shortcut nhé!"
                }
            },
            contact: {
                title: "Địa Chỉ Yêu Cầu Gặp Mặt/ Liên Lạc",
                email: "Kết Nối bằng Hòm Thư",
                response: "Email phản phồi theo tiêu chuẩn dưới mức 1 ngày (24 giờ)."
            }
        },
        privacy: {
            title: "Chính Sách Bảo Mật",
            meta: {
                title: "Chính Sách Bảo Mật | Wright",
                desc: "Chính sách bảo mật của Wright. Chúng tôi không thu thập dữ liệu sử dụng cá nhân."
            },
            lastUpdated: "Cập nhật lần cuối: Tháng 2 năm 2026",
            commitment: {
                title: "Cam Kết Của Chúng Tôi Về Quyền Riêng Tư",
                text: "Wright được thiết kế với tiêu chí bảo vệ quyền riêng tư của bạn. Chúng tôi tin vào sự minh bạch và giảm thiểu việc thu thập dữ liệu chỉ trong mức thực sự cần thiết.",
                keyPoints: {
                    title: "Các Điểm Chính Về Quyền Riêng Tư:",
                    list: [
                        "Chúng tôi không truy cập hoặc lưu trữ nội dung cuộc trò chuyện của bạn",
                        "Chúng tôi chỉ thu thập email của bạn để quản lý tài khoản",
                        "Chúng tôi sử dụng lượng kết nối tối thiểu để cung cấp dịch vụ"
                    ]
                }
            },
            dataCollection: {
                title: "Thu Thập Dữ Liệu & Kiến Trúc",
                text: "Wright sử dụng API dịch vụ backend bảo mật để xử lý các yêu cầu của bạn. Chúng tôi không lưu trữ lịch sử trò chuyện hay nội dung của bạn.",
                apiKeys: {
                    title: "Kiến Trúc Dịch Vụ",
                    text: "Mọi tương tác được xử lý qua API bảo mật của chúng tôi. Nội dung của bạn chỉ đi qua hệ thống nhằm tạo ra câu trả lời và không bao giờ được lưu lại.",
                    list: [
                        "Chúng tôi chỉ lấy email tài khoản của bạn",
                        "Sử dụng mức dữ liệu tối thiểu cho mục đích gỡ lỗi",
                        "Không lưu lại các dữ liệu trò chuyện",
                        "Triển khai đảm bảo an toàn"
                    ]
                }
            },
            thirdParty: {
                title: "Dịch Vụ Của Bên Thứ Ba",
                text: "Khi bạn sử dụng Wright để tương tác với các dịch vụ LLM (như OpenAI, Groq, v.v.), tương tác của bạn sẽ bị chi phối bởi các chính sách bảo mật của những dịch vụ đó. Chúng tôi khuyên bạn nên xem qua chính sách bảo mật của các dịch vụ LLM mà bạn chọn sử dụng:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Chính sách Bảo mật của OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Chính sách Bảo mật của Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Chính sách Bảo mật của xAI</a>"
                ]
            },
            security: {
                title: "Bảo Mật Dữ Liệu",
                text: "Thông tin tài khoản của bạn được lưu trữ an toàn. Chúng tôi áp dụng các biện pháp bảo mật theo tiêu chuẩn ngành để bảo vệ dữ liệu của bạn."
            },
            changes: {
                title: "Thay Đổi Đối Với Chính Sách Bảo Mật Này",
                text: "Chúng tôi có thể cập nhật Chính Sách Bảo Mật theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng việc đăng chính sách mới lên trang này và sửa ngày \"Cập nhật lần cuối\"."
            },
            contact: {
                title: "Liên Hệ Với Chúng Tôi",
                text: "Nếu bạn có bất kỳ câu hỏi nào về Chính Sách Bảo Mật này, vui lòng liên hệ với chúng tôi tại:"
            }
        },
        howItWorks: {
            title: "Cách Thức Hoạt Động",
            subtitle: "Sử dụng các phím tắt bàn phím hoặc tích hợp với PopClip để truy cập tất cả các tính năng thông qua menu chuột phải.",
            step1: {
                title: "Chọn Văn Bản",
                description: "Bôi đen bất kỳ văn bản nào trong mọi ứng dụng trên Mac của bạn."
            },
            step2: {
                title: "Nhấn Phím Tắt",
                description: "Bấm phím tắt bạn đã cấu hình hoặc dùng PopClip để kích hoạt tính năng viết lại, dịch hoặc trò chuyện."
            },
            step3: {
                title: "Nhận Kết Quả",
                description: "Văn bản được AI xử lý sẽ xuất hiện ngay lập tức trong cửa sổ nổi. Sao chép hoặc thay thế trong một cú nhấp chuột."
            }
        },
        features: {
            title: "Các Tính Năng Chính",
            quickView: {
                title: "Bắt Đầu Nhanh, Đào Sâu Hơn",
                description: "Khởi tạo truy vấn nhanh ngay từ Quick View nhẹ gọn. Khi câu chuyện cần đi vào chiều sâu, hãy chuyển đổi liền mạch sang giao diện Chat đầy đủ — mọi ngữ cảnh của bạn đều được chuyển sang tự động."
            },
            rewrite: {
                title: "Trau Chuốt Văn Bản Một Phím",
                description: "Chọn đoạn văn, bấm một phím tắt, và nhập ngay một phiên bản tinh tế hơn. Wright rà soát các lỗi chính tả, ngữ pháp, các cụm từ khó chịu và giữ lại nguyên ý nói của bạn. Tính năng tự tự xác định bằng ngôn ngữ của bạn tự động."
            },
            translate: {
                title: "Dịch Tức Thì",
                description: "Dịch phần chữ qua lại giữa mọi ngôn ngữ với chỉ một phím tắc duy nhất. Không cần dùng những phần mềm khác vì Wright chủ động biết ngôn ngữ của nguồn và giúp dịch được ra cho bạn."
            },
            customRoles: {
                title: "Những Vai Trò AI Riêng Biệt",
                description: "Xây dựng AI roles — chuyên gia rà soát kĩ thuật, sáng tác viên nội dung công tu, người chuyên môn của một lĩnh vực. — mỗi AI đều tùy biến qua những prompt đặc biệt của mỗi người."
            },
            setup: {
                title: "Cấu Hình Tuỳ Ý Thích",
                description: "Đặt những tổ phím tắt theo cấu hình khác nhau của những AI, chỉnh lý cho phù hợp với cách bạn làm việc. Dùng các nguồn nhà cung cấp AI mạnh vì Wright đang trang bị (LLMs), bạn được phép tùy chọn bất cứ bên nào hợp nhu cầu.",
                list: [
                    "Keyboard Shortcuts tùy chỉnh riêng biệt",
                    "Đa AI models (OpenAI, Gemini, Grok, Groq)",
                    "Phối hợp hoàn hảo chung với PopClip"
                ]
            }
        },
        pricing: {
            title: "Chọn Gói Của Bạn",
            free: {
                tier: "Miễn Phí",
                tokens: "1.000 token / ngày",
                reset: "Làm mới mỗi ngày (Nửa đêm UTC)",
                cta: "Bắt Đầu Ngay"
            },
            basic: {
                tier: "Cơ Bản",
                period: "/ năm",
                tokens: "500.000 token / tháng",
                reset: "Làm mới vào ngày 1 hàng tháng",
                cta: "Đăng Ký"
            },
            pro: {
                badge: "Phổ Biến Nhất",
                tier: "Pro",
                period: "/ tháng",
                tokens: "10.000.000 token / tháng",
                reset: "Làm mới vào ngày 1 hàng tháng",
                cta: "Nâng Cấp Pro"
            }
        },
        benefits: {
            title: "Tại Sao Nên Chọn Wright?",
            subtitle: "Trợ lý thiết kế mượt mà ngay trên máy sẽ không làm mất diện điểm gì trừ đi lúc thật sự được kêu tên.",
            everywhere: {
                title: "Chạy Ở Mọi Nơi Bước Chân Bạn Đến",
                description: "Global keyboard shortcuts / PopClip tự động hóa tích luỹ giúp ứng dụng có mặt và thực hiện tốt mọi nơi trên mọi văn bản từ app điện như Mail, Notes, Safari, Slack."
            },
            free: {
                title: "Trải Nghiệm Trọn Miễn Phí",
                description: "Không cần làm mất thiết lập API khóa đầu. Wright có trang bị mọi thử ngay lập tức cho mục định giá Không đồng, đảm bảo mọi chi phí trải nghiệm tính năng là Miễn phí."
            }
        },
        download: {
            title: "Bước vào Hành Trình Khám Phá",
            description: "Truyển ngay tại bước dùng sau thao tác cài đặp ứng phầm Mac.",
            cta: "Trải Nghiệm Dành Cho MacOS",
            guide: "Chỉ Dẫn Người Dùng",
            note: "Hạng Free Mãi Mãi · Thiết kể mở mà ngay"
        },
        footer: {
            rights: "© 2026 Wright. Mọi quyển đều đã được nắm bảo quyền.",
            privacy: "Nghi Thức Chính Sách Dữ Liệu",
            support: "Yêu Cầu Hỗ Trợ Mọi Nơi"
        }
    }, nl: {
        meta: {
            title: "Wright - AI-assistent voor macOS | Herschrijven, Vertalen & Chatten",
            description: "Wright is een aanpasbare AI-assistent voor macOS. Creëer eigen rollen, herschrijf en vertaal eenvoudig tekst en chat — allemaal via een sneltoets of PopClip. Gratis te gebruiken."
        },
        nav: {
            features: "Functies",
            download: "Downloaden",
            support: "Ondersteuning",
            guide: "Gids",
            toggle: "Taal"
        },
        hero: {
            title: "Jouw AI-assistent voor macOS",
            subtitle: "Wright is een aanpasbare AI-assistent voor macOS. Creëer eigen rollen, herschrijf of vertaal zonder moeite teksten en chat direct — allemaal via een toetscombinatie of PopClip. Gratis in gebruik.",
            download: "Download voor macOS"
        },
        guide: {
            title: "Wright Gebruikershandleiding",
            quickStart: {
                title: "Snelstart",
                accessibility: {
                    title: "LET OP: Toegankelijkheidsrechten Vereist",
                    desc1: "Wright heeft toegankelijkheidsrechten nodig om globale sneltoetsen te controleren.",
                    desc2: "U kunt dit handmatig inschakelen in Systeeminstellingen > Privacy & Beveiliging > Toegankelijkheid.",
                    desc3: "Mogelijk moet u de app afsluiten en opnieuw starten om de instellingen toe te passen."
                },
                shortcuts: {
                    title: "Sneltoetsen Gebruiken",
                    desc: "Gebruik de sneltoetsen voor polijsten, vertalen en chatten."
                },
                menuBar: {
                    title: "Gebruik via Menubalk",
                    desc: "U kunt Wright ook via uw menubalk gebruiken."
                }
            },
            configureModels: {
                title: "LLM-modellen Configureren",
                step1: {
                    title: "1. Ga naar Instellingen",
                    list: ["Open Wright-app", "App-menu → Instellingen"]
                },
                step2: {
                    title: "2. API-sleutel Configureren",
                    list: ["Ga naar tabblad \"LLM-model\"", "Selecteer provider", "Plak API-sleutel", "Klik op Opslaan"]
                },
                step3: {
                    title: "3. Model Selectie",
                    list: ["Selecteer modelversie na opslaan van API-sleutel", "Nu klaar voor gebruik"]
                }
            },
            getApiKeys: {
                title: "LLM API-sleutels Verkrijgen",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Account", list: ["Bezoek <a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI Platform</a>", "Aanmelden of Inloggen"] },
                    step2: { title: "2. Sleutel", list: ["Ga naar \"API keys\"", "Klik op \"Create new secret key\"", "Kopieer sleutel"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Account", list: ["Bezoek <a href=\"https://console.groq.com\" target=\"_blank\">Groq Console</a>", "Aanmelden"] },
                    step2: { title: "2. Sleutel", list: ["Ga naar \"API Keys\"", "Klik op \"Create API Key\"", "Kopieer sleutel"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Account", list: ["Bezoek Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Inloggen met X"] },
                    step2: { title: "2. Sleutel", list: ["Gebruikersnaam → \"API Keys\"", "Klik op \"Create API Key\"", "Kopieer sleutel"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Account", list: ["Bezoek <a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek Platform</a>", "Aanmelden"] },
                    step2: { title: "2. Sleutel", list: ["Ga naar \"API Keys\"", "Klik op \"Create new API key\"", "Kopieer sleutel"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Account", list: ["Bezoek <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Inloggen met Google"] },
                    step2: { title: "2. Sleutel", list: ["Klik op \"Get API key\"", "Klik op \"Create API key\"", "Kopieer sleutel"] }
                }
            },
            security: {
                title: "Beveiligingsnotities",
                list: [
                    "Deel uw API-sleutel niet",
                    "Bewaar sleutels veilig",
                    "Roteer sleutels periodiek",
                    "Monitor gebruik"
                ]
            }
        },
        support: {
            title: "Ondersteuningscentrum",
            subtitle: "Vind antwoorden en krijg hulp.",
            links: {
                guide: {
                    title: "Gebruikershandleiding",
                    desc: "Stapsgewijze installatie en permissies, snelkoppelingen en aangepaste AI-rollen instellen.",
                    cta: "Bekijk Gids"
                },
                issue: {
                    title: "Rapporteer Eigenaardigheid (Bug) of Klachtensupport",
                    desc: "Fout gezien? Stel 'm gelijk gerust voor op ons portal van Github of geef ons nieuwe raad.",
                    cta: "Probleem Melden"
                }
            },
            faq: {
                title: "Veelgestelde Vragen En Antwoorden (FAQ)",
                q1: {
                    q: "Wat heeft lokaal het product Wright ons speciaal in voordeel in het aanbod te voorzien?",
                    a: "Wright is je intelligente Artificial bot-software tool direct ingebouwd op Mac. Je hebt 3 hoofdfacetten die globaal uit welke applicatie dat men het ook maar in aanroept, aansturing doorgeeft per popclip of per knoppensetup:",
                    list: [
                        "<strong>Herschrijven</strong> — Verbeter je blok textuele selectie omtrent grammatica fouten of toon zettingen puur net zonder maar ook echt de oorspronkelijke visie de nek af te leggen.",
                        "<strong>Vertalen</strong> — Tolk op abrupte en preciese snelheid woorden vanuit en tussen verscheidinde vreemde dialecten.",
                        "<strong>Chat/Conversatie</strong> — Draag de verantwoording naar buiten, of ga het babbelen of discussiëren rechtstreeks met de bot te lijf. Als de snelvenstermodus is gesloten kan men makkelijk ook doorspringen naat een hele uitgebreidere UI om langer aanhorende dialoog voortdurend achteraf te evalueren."
                    ]
                },
                q2: {
                    q: "Welke A.I. modules worden precies door jullie actief geacht op dit model?",
                    a: "Wright haalt kracht recht uit alle van de meest toonaangevende AI giganten technologie:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "De op maat toegewezen zogenaamde A I bot rollen - de Custom AI Roles, de waarheid wat houdt dit nu in?",
                    a: "Maatwerk Personage Rollen laat jullie speciale A I zielen opbouwen gedreven in specifieke eigen system prompt instructie commandos in zogeheten prompt tekst velden. Concretiseer eens bijvoorbeeld het als \"De Coderings Inspecteur\" taakanroep, of je \"Reclame Maker Copywriter\", of simpelwaarts op \"Tolk\".  Zij acteren elk zo totaal andermaal via de ingevulde parameters van jou wensen in de instelliingen. Makkelijke verzeiling tuusen deze karakters in een omgang van Quick view is perfect!"
                },
                q4: {
                    q: "In verband gesteld tot PopClip integraties. Hoe werkt het nou precies bij jullie integratie daarmee met PopClip in het algemeen?",
                    a: "Wanneer meneer/mevrouw voorzien in installaties van app PopCLip op de Mac zelf, laat hierbij WRight er extra actie aanbieden per the Popcilp uitschuivend kleine balkje zodra er tekst is doorgeselecteerd aan gegaan van muiskoek! Vraag op de popcilp de wright herziening commando of praat commando's dan ook af via de muis alleen is ook makkelijker om zodoende de onthoudde insteling en shortcuts achter zich laten te vervliegen! Importeer the PopClip script configuratie via de Setting pagina recht vanuit je WRight interface."
                },
                q5: {
                    q: "Data beveiligingen - blijft dit eigenlijk nog stiekem privé tussen mij of komt t openbaar ?",
                    a: "Klok helder; Natuurlijk veilig ! Wright haalt of steelt nooit informatie die jullie prive behoren in bestanden dezer Mac en doet dat pertinent nooit onafgezien het geselecteerd text gebied dan. Na aamvraag de bot word dan en enkel uitsluitend en voor niks doorgevoerd vanuit je acties via the cloude servers! WRight verzameld echt 0 van jou inhoud bij de logs in!! Graag een verwijzing doen op documentatiie genaamd Privacy Beleid pagina om in full text detail verder op de de hoogte in ingelezen gezet the raaken"
                },
                q6: {
                    q: "Wats dit op te lossen minimaal van het Mac operationele systeem kwa prestatie (System Reqs)?",
                    a: "In feite om WRight ten gehore werkend vlot toe gepast ter laten reageren vraagt zich voor Wright dit; MacOS the softwareversie versie minimaal de v14.00 die te samen bekent als we (The Macos OS Sonoma Editie) of nieuwren versies!. Om je text gebied buiten WRIght ui interface of scherm globaal de oppakking mee te maken dient de veiligsheids vergunningen binnen Toegankelijkheid en controle ingeschakeld the hooft er zijn. App groote is niks waard te zwaar en zit er puur als lte en onmerkbaar te draaien met the Menu Bar bovenscherm op The MaC ."
                },
                q7: {
                    q: "Wat gaat dit met het globaal inzet van dit keyboard Toesen commando regels en short-keys te keer ?",
                    a: "Doormiddel met Global Keyboards (Wereldijd system command) werkten u en men de combinaties voor commandos binnen een app die een mac runt prima!. En dus past deze instel commandos ook aan The Setting ->  Shortcuts! Ga er wat highlight overheen doen de op de teskt the een mac and en raak dan uw sleutels via sneltoets naar voorkeuren dan tikt et Wright uit z'n schuil plaats de weergaven de paneel Quick View naar zicht vvooruit sneller openbaart het met the return verzoek.. van hier u verder in je keus kopieer dat of pas het tekst of stap er met t zelf en op the Full de Chat sessie op gang!"
                }
            },
            contact: {
                title: "Een moment in de communicatie op nemen - Contact Center",
                email: "Onze Suppord Ticket per email afdeling en help desk mails",
                response: "Gemiddeldes aan tijdslimieten van onze terug rapport is binenn the volle een klok 24 urige omzetten."
            }
        },
        privacy: {
            title: "Privacybeleid",
            meta: {
                title: "Privacybeleid | Wright",
                desc: "Wright's Privacybeleid. Wij verzamelen geen persoonlijke gebruiksgegevens."
            },
            lastUpdated: "Laatst Bijgewerkt: Februari 2026",
            commitment: {
                title: "Onze Toewijding aan Privacy",
                text: "Wright is ontworper met uw privacy in gedachten. Wij geloven in transparantie en minimaliseren gegevensverzameling tot het absolute minimum.",
                keyPoints: {
                    title: "Belangrijkste Privacypunten:",
                    list: [
                        "Wij hebben geen toegang tot uw gesprek-inhoud en slaan deze niet op",
                        "We verzamelen alleen uw e-mailadres voor accountbeheer",
                        "We gebruiken een minimum aan verbindingen voor de levering van diensten"
                    ]
                }
            },
            dataCollection: {
                title: "Gegevensverzameling & Architectuur",
                text: "Wright maakt gebruik van een beveiligde back-end API-service om uw verzoeken te verwerken. We slaan uw gespreksgeschiedenis of inhoud niet op.",
                apiKeys: {
                    title: "Service Architectuur",
                    text: "Alle interacties worden verwerkt via onze beveiligde API. Uw inhoud wordt alleen doorgegeven voor het genereren van reacties en wordt nooit bewaard.",
                    list: [
                        "We verzamelen alleen het e-mailadres van uw account",
                        "Minimale gegevens gebruikt voor probleemoplossing",
                        "Geen bewaring van gespreksgegevens",
                        "Beveiligde implementatie"
                    ]
                }
            },
            thirdParty: {
                title: "Diensten van Derden",
                text: "Wanneer u Wright gebruikt om te communiceren met LLM-services (zoals OpenAI, Groq, enz.), vallen uw interacties onder de privacybeleidsregels van die services. We raden u aan het privacybeleid te bekijken van de LLM-services die u verkiest te gebruiken:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI Privacybeleid</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq Privacybeleid</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI Privacybeleid</a>"
                ]
            },
            security: {
                title: "Databeveiliging",
                text: "Uw accountgegevens worden veilig opgeslagen. We hanteren de standaard veiligheidsmaatregelen van de sector om uw gegevens te beschermen."
            },
            changes: {
                title: "Wijzigingen in Dit Privacybeleid",
                text: "We kunnen ons Privacybeleid van tijd tot tijd bijwerken. We zullen u op de hoogte stellen van eventuele wijzigingen door het nieuwe beleid op deze pagina te plaatsen en de datum van \"Laatst Bijgewerkt\" aan te passen."
            },
            contact: {
                title: "Neem Contact op",
                text: "Als u vragen heeft over dit Privacybeleid, neem dan contact met ons op via:"
            }
        },
        howItWorks: {
            title: "Hoe Het Werkt",
            subtitle: "Gebruik sneltoetsen of PopClip-integratie om overal via een rechtermuisklik toegang te krijgen tot alle functies.",
            step1: {
                title: "Selecteer Tekst",
                description: "Markeer willekeurige tekst in elke app op je Mac."
            },
            step2: {
                title: "Druk op de Sneltoets",
                description: "Druk op je geconfigureerde sneltoets of gebruik PopClip om herschrijven, vertalen of de chat te starten."
            },
            step3: {
                title: "Ontvang Resultaat",
                description: "De AI-verbeterde tekst verschijnt direct in een zwevend venster. Kopieer of vervang via een enkele klik."
            }
        },
        features: {
            title: "Belangrijkste Functies",
            quickView: {
                title: "Snelle Start, Diepgaande Invalshoek",
                description: "Plaats een snelle zoekopdracht in de lichtgewichte Quick View. Wanneer een gesprek meer diepte vereist, ga je naadloos over in de volledige Chat-omgeving. De hele context wordt automatisch meegenomen."
            },
            rewrite: {
                title: "One-Key Tekstverbetering",
                description: "Selecteer de passage, druk in met één sneltoets, en krijg meteen een fraaie en correcte output gepresenteerd. Wright repareert typfouten, gekke constructies, en rare zinsbouw zonder dat ook maar een hint van het origneel de deur verlaat. Binnen elke taal."
            },
            translate: {
                title: "Instant Vertalen",
                description: "Vertaal gekozen teksten over taalbarrières met een enkel commando. Er komt van een browser of een web-applicatie hier niets voor in te pas aangezien de technologie en het inspringen hier ter plekke ontstaat en het allemaal door een shortcut geregeld kan wezen."
            },
            customRoles: {
                title: "Op Maat Gemaakte AI-Rollen",
                description: "Plaats uw eigen figuren in regie als copywriter, proeflezer of email-designer, en leg ieder van deze ontwerpen zijn specifieke systeemvereisten op voor optimale resultaten."
            },
            setup: {
                title: "Jouw Setup, Jouw Manier",
                description: "Creëer combinaties om je agent-shortcuts te organiseren zodat de layout bij het ontworpen traject perfect mee in is. Laat alle moderne kunstmatige intelligentie je verder helpen naadloos (o.a de grote groepen op het net).",
                list: [
                    "Flexibele keyboard combinaties open en toegankelijk",
                    "Meerdere modellen in ondersteuning (OpenAI, Gemini, Grok, Groq)",
                    "Volledige integratie op PopClip software"
                ]
            }
        },
        pricing: {
            title: "Kies Jouw Plan",
            free: {
                tier: "Gratis",
                tokens: "1.000 tokens / dag",
                reset: "Dagelijks vernieuwd (Middernacht UTC)",
                cta: "Beleef de Ervaring"
            },
            basic: {
                tier: "Basis",
                period: "/ jaar",
                tokens: "500.000 tokens / maand",
                reset: "Maandelijks elke 1e dag van de maand vernieuwd",
                cta: "Abonneren"
            },
            pro: {
                badge: "Meest Gekozen",
                tier: "Pro",
                period: "/ maand",
                tokens: "10.000.000 tokens / maand",
                reset: "Maandelijks elke 1e dag van de maand vernieuwd",
                cta: "Pro Nemen"
            }
        },
        benefits: {
            title: "Waarom Wright?",
            subtitle: "De unieke en authentieke Mac hulp software waar men onverstoord zijn rust kan voltooien, met ingrijpen pas wanneer u besluit in te hoppen.",
            everywhere: {
                title: "Handig Overal Om Ons Heen",
                description: "Deze commando's lopen gewoon goed dwars via en tussen elk text programma en Safari, e-mail box of enigerlei scherm en notitie, alles onder je vingertoppen."
            },
            free: {
                title: "Begin met Testen, 0 Kosten",
                description: "Verdere lastige zaken als Keys of aanpassingen in code? Nee hoor de test van elke individuele techniek wordt u om niets overhandigd zodat we overgegaan."
            }
        },
        download: {
            title: "Nu Inzetten",
            description: "Laad de applicatie geheel gratis neer om in testperiode direct in actie en op prestatie te beginnen op uw Mac terminal.",
            cta: "Download App Voor macOS",
            guide: "Installatie Support Gids",
            note: "Kostbare gratis toetreding al present · Onmiddelijk van pas in actie te halen"
        },
        footer: {
            rights: "© 2026 Wright. Exclusieve rechten allemaal voorbehouden in registratie.",
            privacy: "Beleid met betrekking tot Privacy",
            support: "Steun"
        }
    },
    pl: {
        meta: {
            title: "Wright - Asystent AI dla macOS | Przepisuj, Tłumacz i Rozmawiaj",
            description: "Wright to konfigurowalny asystent AI dla macOS. Twórz niestandardowe role, łatwo przepisuj i tłumacz teks, i prowadź czat — wszystko z poziomu skrótu klawiszowego lub PopClip. Za darmo."
        },
        nav: {
            features: "Funkcje",
            download: "Pobierz",
            support: "Wsparcie",
            guide: "Poradnik",
            toggle: "Język"
        },
        hero: {
            title: "Twój Asystent AI na macOS",
            subtitle: "Wright to konfigurowalny asystent AI dla macOS. Twórz dedykowane role, bez problemu przepisuj oraz tłumacz teks i prowadź rozmowy używając skrótu klawiaturowego na PopClipa z użyciem tej bezpłatnej aplikacji.",
            download: "Pobierz na macOS"
        },
        guide: {
            title: "Przewodnik Użytkownika Wright",
            quickStart: {
                title: "Szybki Start",
                accessibility: {
                    title: "UWAGA: Wymagane Uprawnienia Dostępności",
                    desc1: "Wright potrzebuje uprawnień Dostępności do monitorowania globalnych skrótów klawiszowych.",
                    desc2: "Możesz włączyć to ręcznie w Ustawienia systemowe > Prywatność i ochrona > Dostępność.",
                    desc3: "Może być konieczne zamknięcie i ponowne uruchomienie aplikacji, aby zastosować ustawienia."
                },
                shortcuts: {
                    title: "Używanie Skrótów Klawiszowych",
                    desc: "Używaj skrótów do polerowania, tłumaczenia i czatowania."
                },
                menuBar: {
                    title: "Używanie przez Pasek Menu",
                    desc: "Możesz również używać Wright z paska menu."
                }
            },
            configureModels: {
                title: "Konfiguracja Modeli LLM",
                step1: {
                    title: "1. Wejdź w Ustawienia",
                    list: ["Otwórz aplikację Wright", "Menu aplikacji → Ustawienia"]
                },
                step2: {
                    title: "2. Skonfiguruj Klucz API",
                    list: ["Przejdź do zakładki \"Model LLM\"", "Wybierz dostawcę", "Wklej klucz API", "Kliknij Zapisz"]
                },
                step3: {
                    title: "3. Wybór Modelu",
                    list: ["Po zapisaniu klucza API wybierz wersję modelu", "Teraz gotowe do użycia"]
                }
            },
            getApiKeys: {
                title: "Uzyskaj Klucze API LLM",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Konto", list: ["Odwiedź <a href=\"https://platform.openai.com\" target=\"_blank\">Platformę OpenAI</a>", "Zarejestruj się lub Zaloguj"] },
                    step2: { title: "2. Klucz", list: ["Przejdź do \"API keys\"", "Kliknij \"Create new secret key\"", "Kopiuj klucz"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Konto", list: ["Odwiedź <a href=\"https://console.groq.com\" target=\"_blank\">Konsolę Groq</a>", "Zarejestruj się"] },
                    step2: { title: "2. Klucz", list: ["Przejdź do \"API Keys\"", "Kliknij \"Create API Key\"", "Kopiuj klucz"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Konto", list: ["Odwiedź Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Zaloguj się przez X"] },
                    step2: { title: "2. Klucz", list: ["Nazwa użytkownika → \"API Keys\"", "Kliknij \"Create API Key\"", "Kopiuj klucz"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Konto", list: ["Odwiedź <a href=\"https://platform.deepseek.com\" target=\"_blank\">Platformę DeepSeek</a>", "Zarejestruj się"] },
                    step2: { title: "2. Klucz", list: ["Przejdź do \"API Keys\"", "Kliknij \"Create new API key\"", "Kopiuj klucz"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Konto", list: ["Odwiedź <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Zaloguj się przez Google"] },
                    step2: { title: "2. Klucz", list: ["Kliknij \"Get API key\"", "Kliknij \"Create API key\"", "Kopiuj klucz"] }
                }
            },
            security: {
                title: "Uwagi dotyczące Bezpieczeństwa",
                list: [
                    "Nie udostępniaj klucza API",
                    "Przechowuj klucze bezpiecznie",
                    "Okresowo zmieniaj klucze",
                    "Monitoruj użycie"
                ]
            }
        },
        support: {
            title: "Centrum Wsparcia",
            subtitle: "Znajdź odpowiedzi i uzyskaj pomoc.",
            links: {
                guide: {
                    title: "Przewodnik Użytkownika",
                    desc: "Konfiguracja krok po kroku: uprawnienia dostępności, skróty klawiszowe i niestandardowe role.",
                    cta: "Zobacz Przewodnik"
                },
                issue: {
                    title: "Zgłoś Problem",
                    desc: "Znalazłeś błąd lub masz sugestię? Otwórz zgłoszenie na GitHub.",
                    cta: "Prześlij Zgłoszenie"
                }
            },
            faq: {
                title: "Często Zadawane Pytania",
                q1: {
                    q: "Co potrafi Wright?",
                    a: "Wright to asystent sztucznej inteligencji dla macOS. Posiada trzy podstawowe funkcje, które możesz wywołać z dowolnej aplikacji za pomocą skrótów klawiszowych lub narzędzia PopClip:",
                    list: [
                        "<strong>Przepisywanie</strong> — Popraw wybrany tekst pod kątem gramatyki, tonu i przejrzystości, zachowując pierwotne znaczenie.",
                        "<strong>Tłumaczenie</strong> — Błyskawicznie przetłumacz zaznaczony tekst między różnymi językami świata.",
                        "<strong>Czat</strong> — Zadawaj pytania i prowadź konwersację z AI z możliwością przejścia z małego panela Szybkiego podglądu (Quick View) do pełnego i okienkowego widoku konwersacji."
                    ]
                },
                q2: {
                    q: "Jakie modele sztucznej inteligencji są obsługiwane i obecne na ten moment pracy asystenta?",
                    a: "Aplikacja pod tytułem WRight ta jest wspierana systemem pod maską najnowszym generowaniem przodujących inteligencji:",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "Czym w ogóle polegają Custom AI Role czyli Osobiste i wybrane ramy od AI modela na czym on to ma i stoi?",
                    a: "Wybrane role jako Twoja nowa wytyczna pozwalają kreować spersonalizowaną twarz danego bohatera - profil z indywidualnymi promptami napisanymi w okna dla systemu baz. Stwórzże z wyboru profil o nazwie \"Wytrawny Inżynier Kodowania (Reviewer) \", by być to do tekstowych przekazów np, do reklamy na stronkach czy pod internet wpis profil nazwany jako to : \"Redaktor Copywright(Copywriter)\" a każdy zachowa zgoła inaczej twój zamysł poleceń za sprawa innych od was ujętych komend nakazow pod profil ten lub ów, Zmieniaj i skacz z opcji jakby z opcje jednego lub drugie przez to klik do na szybkiego po klikni w oknie i czatu w mgnieniu chwili lub w pod okienku bez opor."
                },
                q4: {
                    q: "Jak by działała integrcja wspolna Wrigta s programy pod od nazwy tego co jest PopClip? no wiec jak?",
                    a: "O jezeli masz ze Ty posiadasz po stronie twego kompa te Mac narzezedzy tak PopClip program wiec od juz Wright da w panelku tak mu dodtkowe menu ikony bez ustawów recznie pod guzki w tablice by i to by to na pisanie tak. Zakreśli czy wybieri u z Macu słowny czlon tak o w tym on mu wysuna mu obcje paska do opcji w tym czy w tam do na Tłum, Przpisywania o też w Rozmowę czate - z i bez uciażliwie co naciskania by tak kombinatorycznie reka klik, no by to na PopciP ze wziasc tu ze z srodek programów the pod aplikacja panel settingow tam tego link extension bedz"
                },
                q5: {
                    q: "Czy me no te tu informacje o no tu u wpisó u mni z macu sa bezbieczy bo prywatnos mam mie a mam jak to jest u nas w tej z tego WRighta to jest ok z no bo te prawne bezpieczestwa czy te ma pan to?",
                    a: "Bezzwątpi.! No on bez nie nie groman czy i on to no nie trzyma żadnych bo żadne dane prywaci we osob z was do serwera, Wright a ten do z na tak do tlu pod do robienie tamte na siec pod ruc pod was od u was ten tylko dla te by on wam za robic do w odpowiedzi na cel tam u siec o i nie no po u serwe tak w to u niego. I nie by z zapisku bez z pamien na the o w historie. W to pod czytaj ta pod pism po nazwe z Privacy Policies by pod w deetal to i tu sie dowi. tak o te wiecej w tym po tak z tego!"
                },
                q6: {
                    q: "Czym i w tym od tu z na wymagań z no dla systemowe ma od me po czym by byo dla kompatera do mac tego aby działa z tym we?",
                    a: "Użytkować w tej pełnu z to po by móc używasz Wrigtu program tego by to było wymag ze pod wersjowe mCOS The s Sonoma po w gór na Mac 14 no w o czy ze tam tak dal. On z tak z w by mus u opcji the z dostępe Ułwatien tak ze Accessibility the do praw w po przez aby dla cał do chwyt z słow tekte no tego by o. Wright leki we u 1 rzede bez ma no u paseku we gore od Mac do a po na by u no u boku po tchu do pra we ciagu w bez z tam zakóc do dzialy ze cichy z no ukryty od tyu."
                },
                q7: {
                    q: "Wyjasni bo o The Skrotow to z klawi we ten w Global o we The Keyboard jak ma ze no użyte dzila ta ta no opcja we o tym we w?",
                    a: "Do pracy to tu u Wright we tych z u no the Globally z dla o co the by klawisch po klawi we po wszy w dzia on on we w aplkack. To by na z tymi po po we the Skróto no z do Ustaw (The SETTINGS ) na po te tam na -> Shortcut po co w kon w zak o zmiane dla was we w jak z a jak co tam by. O no pod ze The wybierz u jak za po te skro po z nacic za no o w reka z no klik i te wys z wy niku po ze naty na the chwi powro - po the skopiuj the to i lub o ze dla tu the na no do czata na no rozw u koncza we ses the full z. do"
                }
            },
            contact: {
                title: "Stąd I Tu I Z Tego Do Kontakti Z I Pomoc Co No Od Nas",
                email: "Emaile pod tu Od Z Help do i Wsparce ze Nas i to Od Meile do the Z Help",
                response: "My z u nas co w zwrot po z na norm w czasie we 1 dniu co na u po the godzin do u 24 the g the. odpowied na o tym the to i od do!"
            }
        },
        privacy: {
            title: "Polityka Prywatności",
            meta: {
                title: "Polityka Prywatności | Wright",
                desc: "Polityka prywatności Wright. Nie gromadzimy osobistych danych dotyczących użytkowania."
            },
            lastUpdated: "Ostatnia Aktualizacja: Luty 2026",
            commitment: {
                title: "Nasze Zobowiązanie do Ochrony Prywatności",
                text: "Wright został zaprojektowany z myślą o Twojej prywatności. Wierzymy w transparentność i ograniczamy gromadzenie danych do absolutnego minimum.",
                keyPoints: {
                    title: "Kluczowe Punkty Polityki:",
                    list: [
                        "Nie mamy dostępu ani nie przechowujemy treści Twoich konwersacji",
                        "Pobieramy wyłącznie Twój adres e-mail do zarządzania kontem",
                        "Stosujemy minimum połączeń w celu świadczenia usług"
                    ]
                }
            },
            dataCollection: {
                title: "Gromadzenie Danych i Architektura",
                text: "Wright wykorzystuje bezpieczną usługę API backendu do przetwarzania Twoich żądań. Nie przechowujemy historii ani treści Twoich konwersacji.",
                apiKeys: {
                    title: "Architektura Usługi",
                    text: "Wszystkie interakcje są przetwarzane przez naszą bezpieczną stronę API. Twoje treści przechodzą wyłącznie w celu wygenerowania odpowiedzi i nigdy nie są zapisywane.",
                    list: [
                        "Zbieramy wyłącznie adres e-mail Twojego konta",
                        "Minimum danych wykorzystywane do rozwiązywania problemów",
                        "Brak przechowywania danych z konwersacji",
                        "Bezpieczna implementacja"
                    ]
                }
            },
            thirdParty: {
                title: "Usługi Stron Trzecich",
                text: "Kiedy wykorzystujesz Wright do interakcji z usługami LLM (takimi jak OpenAI, Groq itp.), Twoje działania podlegają politykom prywatności tych usług. Zalecamy zapoznanie się z polityką prywatności usług LLM, z których zdecydujesz się korzystać:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Polityka Prywatności OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Polityka Prywatności Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Polityka Prywatności xAI</a>"
                ]
            },
            security: {
                title: "Bezpieczeństwo Danych",
                text: "Informacje o Twoim koncie są bezpiecznie przechowywane. Stosujemy standardowe środki bezpieczeństwa w naszej branży, aby chronić Twoje dane."
            },
            changes: {
                title: "Zmiany w Polityce Prywatności",
                text: "Od czasu do czasu możemy aktualizować naszą Politykę prywatności. Zostaniesz powiadomiony o wszelkich zmianach poprzez umieszczenie nowej Polityki na tej stronie oraz aktualizację daty „Ostatnia Aktualizacja”."
            },
            contact: {
                title: "Skontaktuj Się",
                text: "Jeśli masz pytania dotyczące naszej Polityki Prywatności, skontaktuj się z nami na adres:"
            }
        },
        howItWorks: {
            title: "Jak to działa",
            subtitle: "Użyj skrótów klawiszowych lub połącz się z PopClip w celu dostępu prawym przyciskiem do niezbędnych operacji dla wszystkich funkcji w macOS.",
            step1: {
                title: "Wybierztekst",
                description: "Podkreśl czy obramuj na szaro tekst we wszystkich bez wyjątku oknach programów pod Mac."
            },
            step2: {
                title: "Wciśnij Komende",
                description: "Kliknij ustawione z góry preferencje czy uaktywnij opcję by użyć przepisz, czy zapytaj przez PopClip."
            },
            step3: {
                title: "Dostań Wynik z Powrotem",
                description: "Modyfikacje poddawane SI ukażą się nad polem twojego zdania za chwilę w bąblu pływającym; gdzie wystarczy podmienić całą złą frazę by kontynuować bezbłędnie i na czas."
            }
        },
        features: {
            title: "Kluczowe Opcje",
            quickView: {
                title: "Szybki Zryw W Prostotę Ale Głęboko do Rozmów",
                description: "Daj znać z lekkiego panelu Quick View czy wpisać nowe słowa do pytań. Chcąc zapytać szersze kwestie okienko konwersacyjne z czatem się zsynchronizuje żeby nie przechodzić problemów po kolei - z kontekstową logiką co poprzedzało wymiany słów do teraz."
            },
            rewrite: {
                title: "Narzędzie Perfekcyjnych Zdań Na Raz",
                description: "Dobierasz i jednym ruchem na palcach masz pod ręką oprawę językową gotową w całości. Wright podkręci literówki, złą ortografie o raz niewłaściwe zwroty mające mało ze stylu w każdym języku zachowując cel wywodu autora naturalnym sensie."
            },
            translate: {
                title: "Szybki Tłumacz By Przenieść Rozmowy Bez Blokady",
                description: "W ułamek chwile zmienić mowę dla tekstu który podświetliliśmy. Nie jest trzeba byś wykraczał kursorem dla Google Tłumacza kiedy program sam na Mac sam określa jaka mowa źródłowa wychodzi od autora po drugą stronę zdarzeń czy pism."
            },
            customRoles: {
                title: "Nowi Członkowie Osobistego Asystenta AI w Pracy (Persony)",
                description: "Dobierz dla siebie kogoś mądrego na dyżur dla programistów, do tworzenia copywritingu przy biznesie czy po co rano pisania emaili w relacjach służbowych gdzie ich prompterski system da ci profesjonalizm do rąk własnych i do zachowania w każdej ze spraw z osobna i prywatnie."
            },
            setup: {
                title: "Ty Organizujesz Środek Środowiska",
                description: "Dołóż i popraw własne ramy na panelu na swój format skrótów - wszystko ze szczegółem od klawiszy by wspierał twoje ruchy dla ulubionych modeli najpopularniejszych gigantów branży.",
                list: [
                    "Klawiatura Pełna Osobistych Komend Skrótowych W Systemie",
                    "Różne Niesamowite Uczestniki Modeli Jak OpenAI I Gemieni / Groq Z Większą Ilością Na Rezerwę Czekających Za Chwilę Do Obsługi Zadań",
                    "Rozszerozno Kompatybilność by Dołączyć W Pełni Przy Użyciu PopClip Oprogramowania Firmowego"
                ]
            }
        },
        pricing: {
            title: "Znajdź Plan Siebie Stosownie Przekonując Się i Sprawdzając Oferty Z Poniższej",
            free: {
                tier: "Podstawowy za Darmo Bez Zapłat Pieniędzy",
                tokens: "1.000 słów i tokenów z zasobów dnia dzisiejszego od rana bez wstrzyman dla testu na dzisiaj - 24 godziny",
                reset: "Zupełnie odnowiony ze szczodrej misy w środku ciemnej nocy gdzie załącza UTC",
                cta: "Działam od Zaraz"
            },
            basic: {
                tier: "Komfort Start Zawsze Gotowy",
                period: "w cenie przez okres roku uzytkowania tego konta z programu co miesiac abonamentowo",
                tokens: "500,000 znaków i tokena jako pakiet przez 30 dni w miesiac",
                reset: "Cofa użyte rezerwy do setki a także odbudowuje bank o cały tysiak dnia pierwszego wraz nadejściem cyklu świeżych 30 paru momentow życia każdego w tym miesiącu w cyklu roku całego o każdej z rzędu z cyferek rzymskich czy arabskojęzycznych zapisan w kalendarzach i zegarze na scianie bez znaczenia przy tej regule z oprogramowania i konta używan w programach aplikacjach firmy nasza to działa tu dla ciebie cały pełen czas by być bez zarzutów. A wiek o nowo włącza się i ładuje po same w czubeczki konta",
                cta: "Sube Zgłaszam Do Podjęcia Próby Abamentowej Przy Wykupach"
            },
            pro: {
                badge: "Wysoce Częsty I Na Tak U Nas Ze Wybrali Przez Klientelę Mimo Tej Wysokości",
                tier: "Masta Level Pełno Sił Pod Skrzydłami Zawsze Mianem Jako To Pro Pełny Pakiet Z Paskiem Plus Wersja Rozszerzona Maks",
                period: "płaci raz kwotowo przy przelewu dla opłat ze swojego salda - potem masz dostęp przez miesiąc cały od ręki na gotowo zaraz od momentu płatnośc co 4 tygodnie a nie inaczej za jeden równo w ciagłości 30 dobowej dla jednego rozliczeniowo do opłat dla rzędu comies. rozliczen firmowych za oprogramowaniu tymże za miesiąc abonment tak wpiszesz i bedzi - nie jest tak że rocznie jak dla reszty tanio jak by to zrobil",
                tokens: "10,000,000 w pełnych wartościach tych no ze znakami, słowkami na zasobie przy bankach zapasowanych całemu konta by używać to za całe swoje siły u was u nas na 30 tych tam dni w rozliczeniu każdego co 1 miesiąca w pełni czasu danego na korzystanie by być bez reszty pewny swojego wyboru co i jak i gdzie kiedy za po u nich ze wszystkimi tak by mieć uśmiech a tu aż dziw wielki u nich jest on po prostu z góry bo no bo tak a o do token / ten miesąc w mies.",
                reset: "Tak samo co od tam w mniejszym pakiecie i ta pule zeruje każdego kolejnego kalendarzowo - do jedynki przeskakuje a mianowicem od now. dnia na świeżo by napełnić pełno na całe konto od pierwszej połówki pełny u nas znów powraca gotowych zaprasza do pobrań ze zleceni",
                cta: "Dla Najwytrwaczlejśzych Biore Pakiecik Pełen - Tak Ten Biorę Idę Do Kasy"
            }
        },
        benefits: {
            title: "A czemuż ten u nas to właśnie dla pana ten Wright aplikacja tak?",
            subtitle: "Asystujący oprogramowanie u boku jako darmowe co u progi macowych drzwi sie układa by tak sobie czujny w pół śnie milczał i tak dając spokoj dla prac twoich dookoła aż sam z woli zapytasz on wyjdzie napotkawszy problem pomoc co podniesies paluszek a on stanie",
            everywhere: {
                title: "Jako Jeden Mały Do Wielkich Dla Wszyscy W Całym Środowisku Zostanie On z Nami Przy Gotowości Co Pracach Bytu Wszystkich",
                description: "Przy ujednoliconych o całą szeroko pod klawiszowych skrótow by mieć to o zintegrowac PopClip narzedze u ręki wszędz i co w pism do Notatni we Slaku a z groma do mailów do wszystku co o by mac wydało z tekstowych tam ram w całym polu jako narzędze u twardej deski dla systemowej tabli on sprośta no zadaniu u Macowego swego systemu na dysku twardem."
            },
            free: {
                title: "Start z Zerwowy Kapitał Jak Ty i Każdy Z Nimi Za Nic Na Sprawdzen Tu Przez Chwiley Czegoś Podarujem",
                description: "Tu u Wright brakuje na kark konieczno dla konfiguracja, też nimo tam wymogi API koda. Tu ma free start pod nogami by z prób w działaniu on był przed od podziałem za wpłaci aby on z funkcji z każdej za jedną na wpierw to na luzie widział zanim ty skojarz kupiec i klient bo zadowolo tak a to no w sum wiesz no zapłaty rusz, na lepsza wersje to tam z uśmechem to pójdz ze tak by o no był to git u wszystkich z stron dwóch u relacj no nie no z szczerosci za wpierw po na darmo a puż w biznes pakt żeby każda na swoim jak we wspierającej grze o zysk dla dusz dwóch o i portfelo by tak po proś i miedzy słowach bez tego."
            }
        },
        download: {
            title: "Jak Tu Od Raz Skoczyc Na Start Jako Zawsze Od Prawych Ludzi W Startu U Brzegi To Tu Tędy Także O Tą Strone Jak Się Zabierzesz Do Tei Zabawe Ze Chce Start",
            description: "Po zainstalowania u góry jak nacisze a z program z ciągn o nas ten bez za tam kas jako po rzu sie i tak uży w działanu to co do tu dla pan od natychmiasto u zarazu u rzeki o a co on na już to no jak bez żadnego w zwło. a start juz dla ci dla ci pan po co o od tu od te go moment z za tej lini co ci z tym ci co uśmehno rzec że dla my bez no że darmo z miła o i juz z miło tak pobrasz",
            cta: "Tutej Gusiol Poboru U Aplikacye W MaCos",
            guide: "Tu Księge Mam Z Poraday U Ręki Do Całe Nauka Bo O To Jest Obsuga Dla Pomocy Jak No Tu Jakie Co Do Tego To Masz Tu Bo No Instrukcją Się My W Pomoce A Nie W Te No To Wię To Obsługe Do Tego Kto Klito i Od To My z Tą U Ksiag Podpisalismy Przez Palc By To Na Karta Pod Da",
            note: "On Obejmuję Ta Częś Ceny Z Darmowe / Wolny Pod Konfigu Czego Nie Wymogu Nie Musowo Brak Z Na Trzeb Z Zero Z Tego Pod Ustawianie W Tej Z Na Te Czas Wię Byo Do Tyłu Że Od Wolny Pod O Tych Bylo"
        },
        footer: {
            rights: "© 2026 Wright Wszystkie Prawa Na Zlece i Własn Do Czego My W Tym I My Majstowie Mamy i Cene Ta Tyle. Chronie Bo Tak Ma Byc.",
            privacy: "Co Nas Czu W Prawek do Danych Żee Do Twe Dane to Polisa Tute",
            support: "Wspiarca W Słu Tute W Problemach W Kontakt O Dla Boku O Tego Tu My Stoi"
        }
    },
    id: {
        meta: {
            title: "Wright - Asisten AI untuk macOS | Tulis Ulang, Terjemahkan & Obrolan",
            description: "Wright adalah asisten AI yang dapat disesuaikan untuk macOS. Buat peran khusus, tulis ulang dan terjemahkan teks dengan mudah, serta mengobrol—semuanya hanya dengan pintasan keyboard atau PopClip. Gratis untuk digunakan."
        },
        nav: {
            features: "Fitur",
            download: "Unduh",
            support: "Dukungan",
            guide: "Panduan",
            toggle: "Bahasa"
        },
        hero: {
            title: "Asisten AI Pribadi Anda di macOS",
            subtitle: "Wright merupakan platform asisten AI custom pada perangkat komputer basis macOS. Mulai rancangan skenario bot dan model teks sesuai keahlian mu untuk menterjemah teks seketika sampai merombak paragraf—hanya dengan satu tombol perintah dari setelan mu sendiri ataupun plugin ekstensi PopClip pada Mac mu secara terpadu tanpa tagihan, hanya senyum kelegaan. ",
            download: "Segera Instal di Perangkat Mac"
        },
        guide: {
            title: "Panduan Pengguna Wright",
            quickStart: {
                title: "Mulai Cepat",
                accessibility: {
                    title: "CATATAN: Izin Aksesibilitas Diperlukan",
                    desc1: "Wright memerlukan izin Aksesibilitas untuk memantau pintasan keyboard global.",
                    desc2: "Anda dapat mengaktifkannya secara manual di Pengaturan Sistem > Privasi & Keamanan > Aksesibilitas.",
                    desc3: "Anda mungkin perlu keluar dan memulai ulang aplikasi untuk menerapkan pengaturan."
                },
                shortcuts: {
                    title: "Menggunakan Pintasan Keyboard",
                    desc: "Gunakan pintasan untuk memoles, menerjemahkan, dan mengobrol."
                },
                menuBar: {
                    title: "Menggunakan via Menu Bar",
                    desc: "Anda juga dapat menggunakan Wright dari menu bar Anda."
                }
            },
            configureModels: {
                title: "Konfigurasi Model LLM",
                step1: {
                    title: "1. Akses Pengaturan",
                    list: ["Buka aplikasi Wright", "Menu aplikasi → Pengaturan"]
                },
                step2: {
                    title: "2. Konfigurasi Kunci API",
                    list: ["Buka tab \"Model LLM\"", "Pilih penyedia", "Tempel kunci API", "Klik Simpan"]
                },
                step3: {
                    title: "3. Pemilihan Model",
                    list: ["Setelah menyimpan kunci API, pilih versi model", "Sekarang siap digunakan"]
                }
            },
            getApiKeys: {
                title: "Dapatkan Kunci API LLM",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. Akun", list: ["Kunjungi <a href=\"https://platform.openai.com\" target=\"_blank\">Platform OpenAI</a>", "Daftar atau Masuk"] },
                    step2: { title: "2. Kunci", list: ["Buka \"API keys\"", "Klik \"Create new secret key\"", "Salin kunci"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. Akun", list: ["Kunjungi <a href=\"https://console.groq.com\" target=\"_blank\">Konsol Groq</a>", "Daftar"] },
                    step2: { title: "2. Kunci", list: ["Buka \"API Keys\"", "Klik \"Create API Key\"", "Salin kunci"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. Akun", list: ["Kunjungi Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "Masuk dengan X"] },
                    step2: { title: "2. Kunci", list: ["Nama pengguna → \"API Keys\"", "Klik \"Create API Key\"", "Salin kunci"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. Akun", list: ["Kunjungi <a href=\"https://platform.deepseek.com\" target=\"_blank\">Platform DeepSeek</a>", "Daftar"] },
                    step2: { title: "2. Kunci", list: ["Buka \"API Keys\"", "Klik \"Create new API key\"", "Salin kunci"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. Akun", list: ["Kunjungi <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "Masuk dengan Google"] },
                    step2: { title: "2. Kunci", list: ["Klik \"Get API key\"", "Klik \"Create API key\"", "Salin kunci"] }
                }
            },
            security: {
                title: "Catatan Keamanan",
                list: [
                    "Jangan bagikan kunci API Anda",
                    "Simpan kunci dengan aman",
                    "Putar kunci secara berkala",
                    "Pantau penggunaan"
                ]
            }
        },
        support: {
            title: "Pusat Dukungan",
            subtitle: "Temukan jawaban dan dapatkan bantuan.",
            links: {
                guide: {
                    title: "Panduan Pengguna",
                    desc: "Setting pelan-pelan urutan persetujuan masuk mesin ijeksi OS, atur kombo tuts pada keyboard kompi dari role spesial",
                    cta: "Liat-liat buku panduan ini bro!"
                },
                issue: {
                    title: "Lapor dan Keluh Kesah Tentang Kutuan program (BUGS)",
                    desc: "Ketemu KUTU dan erot? Apa juga punya usul idaman saran? Buka lah keluh kesah di panggung GITHub ya..!",
                    cta: "Buka Keluhan Ticket Sekarang!"
                }
            },
            faq: {
                title: "Soalan yang lumrahnya diajukann orang disini (S.Y.L.D.H)",
                q1: {
                    q: "Lah Emang Ngapa wright Ini ? Bisa Ngapain si Die Di mac?",
                    a: "Wright itu pembantu beneran artificial intelligent (AI) orang-orang OS MAC OSX. Ada 3 fungsi lumrah pada aplikasi manajalah yg kalian tekan itu tuts shortcut nya juga dari si bantuan poppup the POpCllip :",
                    list: [
                        "<strong>Tulis Ulang Dari Jelek menjadi Ganteng (Rewritten)</strong> — Ganti grammar kacrut elu jadi elok rupa plus susunan katanya tanpa ngebuang maksud utama dari yg lu tuju didalam kalimat yg tadinya kurang kece tsb.",
                        "<strong>Translator Gila Secepat Kilat (TRanslate)</strong> — Langsung ngetranslet ga mikir 2 detik apa yg kalian blok didalem area layar kompi..",
                        "<strong>Nanyain dan ngbrl santai (chatterbox) </strong> — Nanya a-z pada Aii.. dari jendela layar transparan dan nembus nembus (Quic K ViEW) maupun nyemplung ngomong ke yg lebih gede panjang di Mode Chat Box Gedeeee penuuh layarnya!"
                    ]
                },
                q2: {
                    q: "Ota-kotak mesin yg ngebantun apaa aja dibelakang ni the Wright?",
                    a: "Wright punya amunisie dari vendor model kecerdasan raksasa pantes ngacir! :",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "Eemangnya KArkter asisten itu the Costoum AI apa an Maksudnya bro?",
                    a: "Tuh kan jadi lu dikasi kesempatan ngatur role - alias profesi dari tuh mbak robot untuk dijadiin apa keahliannya di ruang kendali prmot lu. Kaya misalkan disuru : 'LO jd programer buat koding gw yah - the reviewer \", atau lho tak suru lu jadi tukang penulis di majalah - tthe Copywriter, apalagilah bebas bbas bosskuu... Pokoe die berubah watak kek apa lu masukkin printah dari UI itu dlu . Bis tu di layar ngobrol lo ganti ganti dech sesuka hti.!"
                },
                q4: {
                    q: "Si aplikasi dari PopClip yg ada integrasinye apa nyambungnya dan apa caranya ini maslahnya nyambungnya begimane tuh ?",
                    a: "Lu ada app thePopCPli? yaudah install aja nanti Wright nempel dah ikutan nongkrong dideretan menu kalo lu klik mouse blok / ngelewatin sbuah kata d layar.. nah dstu ada pilihan mau ngapasin kata nya.. translate? apa di cakepin kata nya. Ga usa lu apalin combinasi key-press dilayout tuts mu.. cari instalannya di settinggan WRight juga dah trsedia The eXtenSIOn tuh popoclipp!"
                },
                q5: {
                    q: "Eeh privasi gw dan tulisan gwe itu bnr aman kaga , nnt lo jual lagih kerahasiaan kpd makelar2 yack data lu?",
                    a: "Ho Oh, Jangan takut bouss!! Wight anti ngumpulin data peribados user, gak dikoleksi ato disimpen juga ga dikantongginn!!. Cuma diambil dipikirin ama AI, The Wruight ga masukin databasa log.. di hapus saat dikasih lu hasil the endnya ajeee. Silakhken dibaca juga halamn policy kita yeuh kl kurank lega dah"
                },
                q6: {
                    q: "Apa saaj syarat kompi ku ni y buat jalan tuh Wright bosskU?, Ram n memory gawat gag?",
                    a: "Pokok nya kompi lu the Macintos Macnya yg OS The sonoma 14 , yg palingan atas lg itu os yg lbh muda lgi the sequoia itu oke smua broooo!! Lu suruh ke the Settings trs security lu idupin yg acessibility tuh biar die ada kuasa ngambil dan ngelempar hsil tulisan yg dia robah di dalem smua tempat layar kompilo. Ini ringan banget the lightweigt di dalem bar atas mac mu The meny bAR nya!!"
                },
                q7: {
                    q: "Tuu fungsi kombinasi pencetan keybord di komPiku begimana mas berkerja dan idup the shrtcut ?",
                    a: "Pencetan tombol Wright tuch jalan nya di level system boss kaga cuma jalan d dlam dia ajah The GLobL KEYBoad the shortcut gitu jalan dimana aaja app yg lu pke wkt itu. Ubh di setitng -> terus ke yg bagian shortcut .. kl lg di the mana bae lu block pencen cklik lu , Wright muncul tba2 ngekek lu.. terus die udang ngeluarin dah kopiin dstu.. bisa lu pencet klik ngulang / apa juts gae copy"
                }
            },
            contact: {
                title: "Call Gue Di Siennee (Contact) the Team",
                email: "SUUport The Email / Bantuan Ke Masalahan dr Emial the COntct!",
                response: "24 JM kta bisa balikin The Mail dari lo lu boss! the ResPns dlm weaktu normal tu 24 J M!"
            }
        },
        privacy: {
            title: "Kebijakan Privasi",
            meta: {
                title: "Kebijakan Privasi | Wright",
                desc: "Kebijakan Privasi Wright. Kami tidak mengumpulkan data penggunaan pribadi."
            },
            lastUpdated: "Terakhir Diperbarui: Februari 2026",
            commitment: {
                title: "Komitmen Kami Terhadap Privasi",
                text: "Wright dirancang dengan memikirkan privasi Anda. Kami percaya pada transparansi dan meniminalkan pengumpulan data hanya pada hal-hal yang absolut esensial.",
                keyPoints: {
                    title: "Poin-Poin Utama Privasi:",
                    list: [
                        "Kami tidak mengakses atau menyimpan isi percakapan Anda",
                        "Kami hanya mengumpulkan email Anda untuk manajemen akun",
                        "Kami menggunakan koneksi minimum untuk pengiriman layanan"
                    ]
                }
            },
            dataCollection: {
                title: "Pengumpulan Data & Arsitektur",
                text: "Wright menggunakan layanan API backend yang aman untuk memproses permintaan Anda. Kami tidak menyimpan riwayat atau konten percakapan Anda.",
                apiKeys: {
                    title: "Arsitektur Layanan",
                    text: "Semua interaksi diproses melalui API aman kami. Konten Anda melewati jaringan semata-mata untuk menghasilkan respons dan tidak pernah disimpan.",
                    list: [
                        "Kami hanya mengumpulkan email akun Anda",
                        "Data minimal yang digunakan untuk pemecahan masalah (troubleshooting)",
                        "Tidak ada penahanan data percakapan",
                        "Implementasi yang aman"
                    ]
                }
            },
            thirdParty: {
                title: "Layanan Pihak Ketiga",
                text: "Saat Anda menggunakan Wright untuk berinteraksi dengan layanan LLM (seperti OpenAI, Groq, dll.), interaksi Anda diatur oleh kebijakan privasi layanan tersebut. Kami sarankan Anda untuk meninjau kebijakan privasi layanan LLM yang Anda pilih untuk gunakan:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Kebijakan Privasi OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Kebijakan Privasi Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Kebijakan Privasi xAI</a>"
                ]
            },
            security: {
                title: "Keamanan Data",
                text: "Informasi akun Anda disimpan dengan aman. Kami menerapkan ukuran keamanan standar industri untuk melindungi data Anda."
            },
            changes: {
                title: "Perubahan Pada Kebijakan Privasi Ini",
                text: "Kami mungkin memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda mengenai perubahan apa pun dengan memposting Kebijakan yang baru di halaman ini dan memperbarui bagian \"Terakhir Diperbarui\"."
            },
            contact: {
                title: "Hubungi Kami",
                text: "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:"
            }
        },
        howItWorks: {
            title: "Cara Penggunaannya Bekerja di Keseharian Kamu",
            subtitle: "Dengan perintah singkat kombinasi shortcut keyboard dengan terintegrasi menggunakan perpaduan akses kontrol pop-up dari ekstens PopClip dalam menyorot area teks dengan mode langsung sekali jentit pada bagian kiri / kanan mouse mu secara mulus.",
            step1: {
                title: "Arsir Area Tulis",
                description: "Select dan blok tulisan mana saja pada kolom mana pun tanpa ragu dari dalam ruang di Mac kesayangan Anda."
            },
            step2: {
                title: "Ketik Perintah Shortcut",
                description: "Pencet kombinasi sesuai keingingan mu pada saat itu buat manggil sistem ataupun bantuan asisten PopClip agar masuk perintah rubah tulis mu / penterjemah kata-kata / memulai sesi bicara ringan (chatting) sampai intens bareng bot."
            },
            step3: {
                title: "Aplikasi Bekerja Secepat Kilat Merespon Inputan mu!",
                description: "Kolom jendela transparan ringan popup yang sudah ditenagai algoritma mutakhir pintar dari mesin bahasa AI berkapasitas daya tinggi bakal ngeluarin kata - kata rapi penuh arti instan mengoreksi yang salah dan ngeganti seketika dengan sentilan fitur kopi cepat dan jitu ganti teks asli pake teks si bot buat mu di depan layar cemerlang."
            }
        },
        features: {
            title: "Hal Hebat Dalam Fitur Utama Wright",
            quickView: {
                title: "Jendela Instan Beranda Penuh Pengetahuan Buat Menyelam",
                description: "Tanjoek baris kata-katamu kedalaam jendela cepat di pinggiran yang gak buat Mac mu meledak dari sisi kinerja. Nah kalok butuh interaksi tanya jawab yang ngedalam kaya anak sekolahan kuliah lagi sidang skripsi, masuk kelayar chatnya Wright besar agar nyaman dengan sisa jejak pikiran lu ga bakalan hilang melangkah maju ter-simpan dan kebawakan oleh aplikasi mulus ke step layar lebih kompleksnya dari Quick View. "
            },
            rewrite: {
                title: "Pembersih Kekotoran Susunan Frasa dengan Satu Tombol (Write-A-Go)",
                description: "Soroti tulisan loh... pencet kombinasi shortcut.. tada.. kelar tu tulisan hancur lebur jadi cantik yang bisa masuk buku best seller langsung tanpa ribet lagi mikir kata dan grammar / aturan kaidah bahasa EYD maupun English dengan rapi ngga merusak pesan dibalik ide otak mu pada awalnya. Si pintar wright tau lu lagi ngetik apa aja bahasanya - gak usah suruh milih pake mode Bahasa lagi!"
            },
            translate: {
                title: "Jurus Translet Dalam Semalam dan Sejenak Gak Kaya Google Translate Repot-nya",
                description: "Minta bot ngerubah kata dalam beda tata bahasa tanpa pusing tujuh keliling dengan satu aja tekan ke tombol sakti settingannya. WRight bakal ndeteksi apa asal bahasa ini terus mengolah terjemahan instan agar sesuai untuk kau, jadi bebas lepas lah keharusan kamu tuk ganti layar ngeklik Safari dll ngecek browser dengan buka tab segunung cuman cari alat terjemah murahan diluar sana."
            },
            customRoles: {
                title: "Asisten Yang Patuh Pake Keahlian Lu Sendiri-Sendiri Tergantung Minta Ber-Persona Jadi Apa! (Custom Prompts Aja Ya Bos!!)",
                description: "Bikin aja perpaduan tenaga kecerdasan artifisil khusus punya jatah skill sendiri dirumahmu. Kaya jadi pembedah kodingan skrip IT mu, apa pembuat ide ngarang bebas di buku, orang bayaran pembuater iklan surat elektronik (email draft), dll dah ah pokok bebas dah!! Pokoe, Masing2 ada prompt tersendiri nunggu di idupin lu punya perilaku robot."
            },
            setup: {
                title: "Semua Serba Ciptaan Mu, Atur Dah Sekehandak Hati Dari Setting (Aturan Mac-nya Wright)",
                description: "Dari tombol rahasia shortcut untuk setiap macam mode karakter asisten mu, bentuk antarmuka visual layout mu untuk masukkin selera pekerjaan agar lu suka mandanginnya!. Asisten Wright sudah support macam-macam otak otak terhebat dimuka bumi penyedia kecerdasan ini (LLM Provider).. bisa lu milih yang lu sukak biar kebutuhan mu yang spesifik keturutan dan lega tercover maksimal!",
                list: [
                    "Boleh setting shortcut pencetan tangan sesuka mu kaga fix mutlak dari pusat kami",
                    "Ada macem2 bahasa otaknya robot dari yang terkenal (Open AI, Gemini, Groq)",
                    "Pas banget dan manunggal dengan fiturnya PopCLip dari Appstore itu!!"
                ]
            }
        },
        pricing: {
            title: "Bayar? Coba liat Plan / Harganya Dahulu",
            free: {
                tier: "Jajalin Sekilas Gratis Ngga Apa Kok - Free-man!",
                tokens: "1 Ribu Token / dapet sehari jatahnya",
                reset: "Mbalik Ke Angka Ribuan Lagi pas Jam 12 Teng di UTC Pusat Sono",
                cta: "Udhah Ayo Join Mulaikan"
            },
            basic: {
                tier: "Plan Santai Mula-mula, Bayar Dulu Ya Buat Dapat Upgrade Kuotanya!",
                period: "/ Bayar pertahun aja",
                tokens: "Luar biasa 500ribu tokennn!! sebulan dikasi segitu ",
                reset: "Pas Jatuh tanggal satu di bulan berjalan di penuhin jatah lu ke angka maksimum setengah juta !!",
                cta: "Mulai Berlangganan dan Ikatan Janji Suci Pembayaran"
            },
            pro: {
                badge: "Terlaris Manis Kaya Kacang Goreng !! Recommended!!",
                tier: "Dewa PRO yang Memiliki Kekuatan Sultan Mac OSX !!",
                period: "Bayar nya tagihannya per bulan ke dompet mu.",
                tokens: "Sepuluh juta token bossqu sebulan bossqu !!",
                reset: "Bakal balik lagi 10 JT di tgl muda (tgl satu) / pertamas bulan .",
                cta: "Gaspol Upgrade Dah Ini Aja Biar Ga Nyesel Kesempitan Kuota "
            }
        },
        benefits: {
            title: "Kelebihannya Wright ini ngapa dah, dibanding yang lain?",
            subtitle: "Asisten Pribadi orang MAcbook (Mac os native application) yang sangat elegan , gak bakal ngganggu konsen pandangan mata layar kamu selama kerja eh tapii.. kalo dipencet nyala pas btuh doang!! Mesti ngertiin!!",
            everywhere: {
                title: "Keliling Terus Bisa Terus Aktif Di Sembarangan!",
                description: "Kehebatan Shortcut Global dan kombinasi aplikasi POpCLip buar integrasi mantab. Bikin si wright bekerja seolah-olah roh yg gentayangan disepanjang program yang lo pakai .. mulai dari aplikasi emailmu (MAil) / Notes untuk catetan harian, ngirim chat pekerjaan di apliKasi SLACK, nyari ilmu di perambah internet Safari Chrome Firefox.. bahkan diseluruh area dimannapun kau klik input ngetik keyboard!! Bisa nyala n bantu terus!!"
            },
            free: {
                title: "Mau masuk pake pintu geratis , silahkan bossqu!! Gak pelit!",
                description: "Lu KAgak usah ribet mikir nyarik apalagi nge-SET API KEYS , dan konfigurasi yang riweh. DAn paket nol rupiah (Gratis plan), udah di taro / di paket kedalam program jadi dari start nyoba aja u tau mantepnya semua fiturnya ga ngurangin sama yg PRO!! SEkalipun sebelum lu mutusin jadi pro!!"
            }
        },
        download: {
            title: "Gaspol Ayo Sekarang.. Nunggu Apaan Lg!",
            description: "Ambil dan download gratis Wright lalu gunakan segera tanpa mikir 2 kali !!",
            cta: "Download aplikasinya ke MAkOSX Mu!! Gas!",
            guide: "Tutor pemakaian dan bukunya!!",
            note: "Sudah termasuk plan / iuran Rp. 0 !!  (gratisan boss) · Lu kagak butuh config apapun , lsng pake! Lsng idup tancapp.."
        },
        footer: {
            rights: "© 2026 Wright. Sudah Dilindungi Oleh Undang_Undang dan Didaftarin Hak MArkNya Penuh.. Semua hak dilindungi!",
            privacy: "Persyaratan Keamanan , Data / Prifasi Lu",
            support: "Kolom Tolong / Hubungin Kite!"
        }
    },
    th: {
        meta: {
            title: "Wright - ผู้ช่วย AI สำหรับ macOS | เขียนใหม่ แปลภาษา และสนทนา",
            description: "Wright เป็นผู้ช่วย AI ที่ปรับแต่งได้สำหรับ macOS สร้างบทบาทที่ปรับให้เหมาะสม เขียนใหม่และแปลข้อความได้อย่างง่ายดาย พร้อมการใช้งานแบบสนทนา—ทั้งหมดนี้ทำได้ผ่านแป้นพิมพ์ลัดหรือ PopClip ใช้งานได้ฟรี"
        },
        nav: {
            features: "คุณลักษณะ",
            download: "ดาวน์โหลด",
            support: "ฝ่ายสนับสนุน",
            guide: "คู่มือการใช้งาน",
            toggle: "ภาษา"
        },
        hero: {
            title: "ผู้ช่วยส่วนตัว AI แห่งโลก macOS เพื่อคุณ",
            subtitle: "Wright ได้ยกระดับประสบการณ์ให้ระบบ macOS ของคุณด้วยผู้ช่วยอัจฉริยะ คุณสามารถที่จะทำการเซ็ตค่ากำหนดให้มีหน้าที่หลายๆด้านในสไตล์คุณ เช่นการเรียบเรียงตัวอักษรเพื่อลดความจำเจ พร้อมกันนั้นเราแปลด้วยประสิทธิภาพเพื่อคุณ หรือจะเป็นโหมดส่งข้อความ โดยที่คุณแค่แตะปุ่มลัด (Shortcut) เพียงนิดเดียว หรือการลากเมาส์พร้อมทั้งคลิกอย่างรวดเร็วเพื่อใช้คำสั่งของตัวแอปพลิเคชั่น PopClip ใช้งานของเราไม่มีจำกัดอย่างฟรีๆ เลยนะคุณรู้ไว้!!",
            download: "โหลดเลยตัว macOS"
        },
        guide: {
            title: "คู่มือผู้ใช้ Wright",
            quickStart: {
                title: "เริ่มต้นด่วน",
                accessibility: {
                    title: "หมายเหตุ: ต้องได้รับอนุญาตการเข้าถึง",
                    desc1: "Wright ต้องการสิทธิ์การเข้าถึงเพื่อตรวจสอบคีย์ลัดทั่วโลก",
                    desc2: "คุณสามารถเปิดใช้งานด้วยตนเองได้ใน การตั้งค่าระบบ > ความเป็นส่วนตัวและความปลอดภัย > การช่วยการเข้าถึง",
                    desc3: "คุณอาจต้องออกจากแอปและรีสตาร์ทเพื่อใช้การตั้งค่า"
                },
                shortcuts: {
                    title: "การใช้คีย์ลัด",
                    desc: "ใช้คีย์ลัดสำหรับการขัดเกลา แปลภาษา และแชท"
                },
                menuBar: {
                    title: "การใช้งานผ่านแถบเมนู",
                    desc: "คุณยังสามารถใช้ Wright จากแถบเมนูของคุณได้"
                }
            },
            configureModels: {
                title: "กำหนดค่าโมเดล LLM",
                step1: {
                    title: "1. เข้าถึงการตั้งค่า",
                    list: ["เปิดแอป Wright", "เมนูแอป → การตั้งค่า"]
                },
                step2: {
                    title: "2. กำหนดค่าคีย์ API",
                    list: ["ไปที่แท็บ \"โมเดล LLM\"", "เลือกผู้ให้บริการ", "วางคีย์ API", "คลิกบันทึก"]
                },
                step3: {
                    title: "3. การเลือกโมเดล",
                    list: ["หลังจากบันทึกคีย์ API แล้ว ให้เลือกรุ่นโมเดล", "ตอนนี้พร้อมใช้งานแล้ว"]
                }
            },
            getApiKeys: {
                title: "รับคีย์ API LLM",
                openai: {
                    title: "OpenAI (ChatGPT)",
                    step1: { title: "1. บัญชี", list: ["ไปที่ <a href=\"https://platform.openai.com\" target=\"_blank\">OpenAI Platform</a>", "ลงทะเบียนหรือเข้าสู่ระบบ"] },
                    step2: { title: "2. คีย์", list: ["ไปที่ \"API keys\"", "คลิก \"Create new secret key\"", "คัดลอกคีย์"] }
                },
                groq: {
                    title: "Groq",
                    step1: { title: "1. บัญชี", list: ["ไปที่ <a href=\"https://console.groq.com\" target=\"_blank\">Groq Console</a>", "ลงทะเบียน"] },
                    step2: { title: "2. คีย์", list: ["ไปที่ \"API Keys\"", "คลิก \"Create API Key\"", "คัดลอกคีย์"] }
                },
                grok: {
                    title: "Grok",
                    step1: { title: "1. บัญชี", list: ["ไปที่ Grok <a href=\"https://ide.x.ai\" target=\"_blank\">PromptIDE</a>", "เข้าสู่ระบบด้วย X"] },
                    step2: { title: "2. คีย์", list: ["ชื่อผู้ใช้ → \"API Keys\"", "คลิก \"Create API Key\"", "คัดลอกคีย์"] }
                },
                deepseek: {
                    title: "DeepSeek",
                    step1: { title: "1. บัญชี", list: ["ไปที่ <a href=\"https://platform.deepseek.com\" target=\"_blank\">DeepSeek Platform</a>", "ลงทะเบียน"] },
                    step2: { title: "2. คีย์", list: ["ไปที่ \"API Keys\"", "คลิก \"Create new API key\"", "คัดลอกคีย์"] }
                },
                gemini: {
                    title: "Google Gemini",
                    step1: { title: "1. บัญชี", list: ["ไปที่ <a href=\"https://ai.google.dev/aistudio\" target=\"_blank\">Google AI Studio</a>", "เข้าสู่ระบบด้วย Google"] },
                    step2: { title: "2. คีย์", list: ["คลิก \"Get API key\"", "คลิก \"Create API key\"", "คัดลอกคีย์"] }
                }
            },
            security: {
                title: "หมายเหตุด้านความปลอดภัย",
                list: [
                    "อย่าแชร์คีย์ API ของคุณ",
                    "เก็บคีย์ไว้อย่างปลอดภัย",
                    "หมุนเวียนคีย์เป็นระยะ",
                    "ตรวจสอบการใช้งาน"
                ]
            }
        },
        support: {
            title: "ศูนย์ช่วยเหลือ",
            subtitle: "ค้นหาคำตอบและรับความช่วยเหลือ",
            links: {
                guide: {
                    title: "คู่มือผู้ใช้",
                    desc: "ขั้นตอนสู่ระบบและการขอเข้าตั้งค่าและปุ่มตามทางของค่าตัวรวมไปจนระบบเซ็ตโปรตัวปลอมๆเพื่อรับบท AI ต่างๆ!",
                    cta: "พุ่งสู่การอ่านคู่มือของเรา"
                },
                issue: {
                    title: "เปิดรายการรับความผิดเพื่อทางแก้ไข",
                    desc: "คุณเจอปัญหาของของหรือป่าว ถ้าเจอละต้องการส่งเสนออะไร แวะหาเราเพื่อโพสสู่การแจ้งเตือนสิ",
                    cta: "ช่องส่งรายงานเข้าฐานของ The GiTub"
                }
            },
            faq: {
                title: "คลังไขคำตอบ",
                q1: {
                    q: "The แอพลิเคชชั่นระบบตัวนี้ WRight ช่วยแบ่งภาระเพื่อผมยังไงบ้างน้อ?",
                    a: "น้อนน Wright น่ะหรอเขาทำเพื่อชุดโปรมแกรม MAcos! จัดจ้างเพื่อหลักๆการเป็นระบบ AI ทั่วหน้าต่างการใช้งานคุณ เพียงคุณใช้คอมโบ The Keys ของเราบนหน้าต่างๆ กับเรียกใช้งาน The POPlcip บน Mac ",
                    list: [
                        "<strong>ปั่นและกรอกบทของข้อความของคุณให้จึ้ง (RewRittnn) </strong> — ตัวรับโหมดเพื่อขจัดปัดกวายความหยาบแบบเรียลเวลา พร้อมแต่งและทำสวยความสมูธทางหลักของการพิมพ์ ไม่ข้ามหน้าของใจควมจริงๆ",
                        "<strong>จัเสือไปเป็นแมว ทรา้นทเรตทันใด!!</strong> — ทะลวงกำแพงเพื่อให้แปลแบบเร็วในลากการครอบตัวบรรทัดตัวอกษาร ในไม่พริบใด",
                        "<strong>ทัดเทียมห้องถามหาและต่อเรื่องพูดและคุยให้จบบนระบบ </strong> — สงสัยและขยี้ต่ออย่างเมาท์มันๆด้วย AI จะโผล่และคอยช่วยต่อบนป๊อบกล่องที่ลอยไปลอยมาหรือจะไปนั่งแช่บนถังหน้าเดอะแชตและจบสิ้นด้วย The FUlL CHattinG!! "
                    ]
                },
                q2: {
                    q: "โมเดลดอะไรที่รับอยู่ในรุ่น WRight ของ The น้อนๆ พวกนี้ครับผม",
                    a: "ไร้วิรเกต ไซคิค! เราได้ดึงตัวตึงระดับเบ่งกล้ามคอยซัฟตัว Wrihgght เพัยบบบบๆ",
                    list: [
                        "OpenAI ChatGPT",
                        "Google Gemini",
                        "Grok (xAI)",
                        "Groq"
                    ]
                },
                q3: {
                    q: "ไอโหมดบทของแต่ละบุลคนตัวของ AI The CUSTOM บทพวกนี้ๆ AI Role มันก็คือหยังก่า!?",
                    a: "เป็นเรื่องของการให้ตังสมรสร่าง The PROmMt สั่งทิ้งให้เขานะรับร่างของความเป็นมืออาชีพใดๆ อย่างสวมการเป็นนักจับผิดโคงของนักเว็ปเดฟ \", หรือร่างThe โปปี้ไวท์ \"CopyWrtter\" ตัวจริง! หรือแปลจดหมาย... แต่ละการรับจะมีเอกลักษณ์แตกต่าง!! และคุณจะกระโดจาก A ไป b ของความคอยให้เปลี่ยนรับร่างที่เปลี่ยนในทันใดเลยเพื่อรองเรื่องตรงนั้ยได้รัดกุม"
                },
                q4: {
                    q: "รวมรวมความป๊อปปอละคลอป The PoPCLip มันจับยังไงนะ",
                    a: "มีโหมดตัวแอพท่ซื่อ PopCOCLip ลงในฝั่งเครื่ิงป่าวล่ะ? น้อนไรท์ตัตัว The WRitght เนี่ย มันจับคู่และเอาตัวเองใส่ลงสู่ The PöP CliP ขแองระบบบ๊อซ์อั้ฟเลย พอลากจิกดำมันก่อขึ้นทางเลือกเลยทันทีไม่ต้องตั่งนิ้วทาบปุ่มทางลัดด้วยซ่ำไปนะบอกเลย! หาโหลดที่ตัว The ExtenSion ที่การตั้งคำขอตัวปั๊กอนนนี้เลยที่ Setting ของตัวแอปเรา!"
                },
                q5: {
                    q: "ข้อมูลแสนทูนรักษานีของข้ายงจะหลับดีมีอะไรให้เสียหรือเปล่าน้อกับ แอพตัวนั้",
                    a: "แม่นแล่ว ไม่ต้องร้องห่มด้วย แอพจะไม่ได้ล้วงและเกบงำ หรือขโมยจับความนึกคิดใดๆบนการประมวนตัวอักษระ! เมื่อ AI จับรันแล้วตอบคุณผลคือล้างหาย และ เรา ไม่มีที่สะสมใดๆหรือคอลเลกของมูลล! โปดชะเง่อหมองตตามกฎขอตัว PöRIVaCy POLisCY!! เดอะข้อมูลได้!"
                },
                q6: {
                    q: "ชุดปูพร้อมรองการให้คอมแบนนี้เล่นก็อขไรในความมักงายน้ะ?",
                    a: "MacOS ที่ต้องการขั้นขอตัวระบบ MÀC Os 14 อย่างตัว เดอะโซโนม่า ! ขึ้นบน! แอพยังเรียกร้องคำสั่งจากโหมดการทไรับ AcceSSIbilty ของอแปเปิลพื่อมที่จะแบนให้แทนตัวคำของการประมวนสู่กระบานยอ! และของนี่น่ะเป็นโปรแรรมแอบบจิว้! The MENu BA R แอพนี่เองเบาอย่างขนนกเลยนะจะบอก"
                },
                q7: {
                    q: "กด The โชคัท (SörtCUts )ยังไงของมันและกานรับปุปนะ??",
                    a: "ของนี่มันสวม The GLOaBl l The CKEYBOA RD (เดอะโกบลองรับในตัวคียบอดทุกบานเกลด) ดังนั้นมันจึงออกรับในหน้าแอมทุกแอพบนเครื่ิงได้สบายๆ เปลี่ยนมันสิ ตรงการสลับที่ THe SeTTings ของเรมา! จากกนั้นไม่ว่าท่านจะไฮไรลที่ไดในปัฐพีแค่ใช้มือตบ The kE ys ของเราท่านก็จะได้การซํพและการเรียกงานที่เร็วปานลิงๆลอก แล้วจบเอาไแต่อการ The CopY ขิงคำเพื่อความเนียนต่อไปล"
                }
            },
            contact: {
                title: "โอมมาแวะนัดจับและพูดคุัยตามจดหมายของ THe Team M E MBERS!",
                email: "ศูนย์The emaiLL ทูThe SuPPPort ",
                response: "เราคูรตอบเมล์เร็วอยุ่ทีเดือและThe ทีม 24 ช้วมงในการรัน!ตอบจดหมาย"
            }
        },
        privacy: {
            title: "นโยบายความเป็นส่วนตัว",
            meta: {
                title: "นโยบายความเป็นส่วนตัว | Wright",
                desc: "นโยบายความเป็นส่วนตัวของ Wright เราไม่รวบรวมข้อมูลการใช้งานส่วนบุคคล"
            },
            lastUpdated: "อัปเดตล่าสุด: กุมภาพันธ์ 2026",
            commitment: {
                title: "ความมุ่งมั่นของเราที่มีต่อความเป็นส่วนตัว",
                text: "Wright ถูกออกแบบโดยคำนึงถึงความเป็นส่วนตัวของคุณเป็นสำคัญ เราเชื่อมั่นในความโปร่งใสและจำกัดการรวบรวมข้อมูลไว้เฉพาะสิ่งที่จำเป็นจริงๆ",
                keyPoints: {
                    title: "ประเด็นหลักด้านความเป็นส่วนตัว:",
                    list: [
                        "เราไม่เข้าถึงหรือจัดเก็บเนื้อหาการสนทนาของคุณ",
                        "เรารวบรวมเพียงแค่อีเมลของคุณเพื่อการจัดการบัญชี",
                        "เราใช้การเชื่อมต่อให้น้อยที่สุดในการให้บริการ"
                    ]
                }
            },
            dataCollection: {
                title: "การรวบรวมข้อมูล & สถาปัตยกรรม",
                text: "Wright ใช้บริการ API แบ็คเอนด์ที่ปลอดภัยเพื่อประมวลผลคำขอของคุณ เราไม่ได้จัดเก็บประวัติการสนทนาหรือเนื้อหาของคุณเลย",
                apiKeys: {
                    title: "สถาปัตยกรรมบริการ",
                    text: "การโต้ตอบทั้งหมดจะได้รับการประมวลผลผ่าน API ที่ปลอดภัยของเรา เนื้อหาของคุณจะผ่านไปเพียงแค่เพื่อสร้างคำตอบและจะไม่ถูกบันทึกไว้",
                    list: [
                        "เรารวบรวมแค่อีเมลบัญชีผู้ใช้ของคุณไว้",
                        "มีข้อมูลบางส่วนที่ถูกใช้เพื่อการแก้ไขข้อผิดพลาด",
                        "ไม่มีการเก็บรักษาข้อมูลการสนทนาใดๆ ไว้",
                        "การทำงานที่มีความปลอดภัย"
                    ]
                }
            },
            thirdParty: {
                title: "บริการของบุคคลที่สาม",
                text: "เมื่อคุณใช้ Wright เพื่อโต้ตอบกับบริการ LLM (เช่น OpenAI, Groq เป็นต้น) การโต้ตอบของคุณจะอยู่ภายใต้นโยบายความเป็นส่วนตัวของบริการเหล่านั้น เราขอแนะนำให้ตรวจทานนโยบายความเป็นส่วนตัวของบริการ LLM ที่คุณเลือกใช้:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">นโยบายความเป็นส่วนตัว OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">นโยบายความเป็นส่วนตัว Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">นโยบายความเป็นส่วนตัว xAI</a>"
                ]
            },
            security: {
                title: "ความปลอดภัยของข้อมูล",
                text: "ข้อมูลบัญชีของคุณจะถูกจัดเก็บไว้อย่างปลอดภัย เราใช้มาตรการรักษาความปลอดภัยที่เป็นมาตรฐานอุตสาหกรรมเพื่อปกป้องข้อมูลของคุณ"
            },
            changes: {
                title: "การเปลี่ยนแปลงนโยบายความเป็นส่วนตัวนี้",
                text: "เราอาจอัปเดตนโยบายความเป็นส่วนตัวของเราเป็นครั้งคราว เราจะแจ้งให้คุณทราบถึงการเปลี่ยนแปลงต่างๆ โดยการแจ้งนโยบายความเป็นส่วนตัวใหม่ในหน้านี้และทำการเปลี่ยนแปลงวันที่ \"อัปเดตล่าสุด\""
            },
            contact: {
                title: "ติดต่อเรา",
                text: "หากคุณมีคำถามใดๆ เกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเราที่:"
            }
        },
        howItWorks: {
            title: "กลไกวิธีการและระบบเราทำงานเป็นเพื่อการแก้ไข",
            subtitle: "เราสนับสนุนรูปแบบง่ายๆสำหรับการคีย์ปุ่มหรือทำการสร้างตัวกระตุ้นของตัวการนำเข้าแบบ Popup อย่างในซอฟต์แวร์สุดฮิตของเราคือ PöpClīp เพียงคุณลงกดในบริเวณด้านคลิกขวาก็เอาอยู่ทั้งหมดนี้อย่างครอบคลุมๆ ในบริการแห่งความสะดวกระดับขั้นของแอปนี้",
            step1: {
                title: "ไฮไลท์พื้นที่อักษรให้ระบบจำ",
                description: "ลากไปทางต่างๆในบนพื้นที่จอในจุดประสงค์ของคำ ใน Mac ให้เข้มเป็นเงาในโปรแกรมตามต้องการเพื่อครอบคลุมพื้นที่"
            },
            step2: {
                title: "เปิดปุ่มทางลัดตามเซ็ตด้วยรวดเร็ว",
                description: "จิกและสัมผัสจากชุดคุณได้ถูกลงทะเบียนอย่างพร้อมในการเข้าถึง เพื่อความอัจฉริยะด้านคถ้อยคำ รีไรท์หรือสั่งถามเพื่อตอบโตกับ AI สุดปังในระดับชั้นหนึ่งของตัวงาน"
            },
            step3: {
                title: "ผลตอบสนองแบบเสกขึ้นสู่มาเพื่อหน้าจอบ่งถึงความคลาดแคล้ว",
                description: "ประดุจงานรังสรรอย่างอัจฉริยะลอยตัวขึ้นล่อขึ้นที่ช่องบรรจุตอบกลับทันทีบนจอของงาน เราส่งเสริมปุ่มลัดเพื่อให้รับค่านำใช้ต่ออย่างทันทีทันใจ"
            }
        },
        features: {
            title: "จุดเด่งทรงเสน่ย์ของเราจากที่สร้างเราขึ้นมาเพื่อใช้ตอบความต้องการ",
            quickView: {
                title: "เริ่มต้นที่ไวกว่าและสู่โหมดระดับมือลึกซึ้งในการรับส่งผลความนึกคิด",
                description: "ความรวดเร็วถูกติดตั้งอย่างไม่กินหน้าเครื่องพร้อมให้การเข้าถึงสู่การดึงข้อมูลเพื่อโชว์ในกล่องหน้า Quick View โหมด.เมื่อจำเป็นเราจะให้ผู้ใช้งานได้ส่งข้อมูลไปเพื่อสลับหน้าใช้งานโดยรับมอบต่อจากงานหลักของการเปิดในลักษณะเต็มสูบในการติดต่อที่ไหลรื่นไปรับรู้ข้อมูลอันต่อเนื่องดั่งในครั้งเดียวกันอย่างสืบไปไม่จำกัดเวลาเลยล่ะ!!"
            },
            rewrite: {
                title: "เคลียและสะสางตัวคำอย่างความเรียบลื่นพร้อมทั้งขัดตกของมันได้หมดจด",
                description: "คลิกที่ตัวโหมดแล้วเปิดทัชกับพื้นที่ของการใช้งาน และผลงานอันละเอียดออของการตรวจสอบคำสะกดพร้อมช่วยจับโครงสร้างที่ถูกต้องมาแก้ไขอย่างมีใจความ เราตระหนักรวมถึงภาษาเพื่อรู้ค่าภาษาได้อย่างไม่ต้องร้องถามและตอบเลยนั่น!! ซึ่งนั่นก็จะช่วยคุณไม่ต้องคอยกดรับเลือกการใช้งานและหาเองด้วยความรวดเร็วและสมาร์ทๆไง"
            },
            translate: {
                title: "โหมดทราสแลตร้อนรับในทุกวิกฤตความรู้จากตัวสะกดข้ามพรมแดนโลก",
                description: "ใช้รับสิทธิเพื่อตัวแปลงที่แสนรวดเร็วด้วยการข้ามของหลากภาษาระดับโลกด้วยปลายนิ้วคุณเอง โดยโปรแกรมฉลาดเราคอยตามเพื่อเข้าใจอักษรแปลให้เองแบบทันการณ์... มันช่วยให้ผู้ที่สวมใช้งานไม่ได้คอยที่จะลดโหมดหาหน้าแท๊บเพื่อแปลด้วยเครื่องให้การอื่นอย่างเสียคาวมต่อเนื่องของจังหว่ะแห่งเนื้องานให้หยุดหายในสมอง"
            },
            customRoles: {
                title: "ชุดประดิษฐ์สวมปลอก AI ตามหน้าตางานที่ต้องพึงของแบบรับมืออย่างใจตามคัสตอมได้สุดของความสนุก",
                description: "ตัวตนความเก่งที่จับขึ้นและมาในโหมดผู้รู้ หรือร่างคำเพื่อเมล์ การประดิษฐ์เพื่อชุดคำของกอปปี้ไวท์ สำหรับงานแต่ละชุดและโหมดที่ได้รับจะมาด้วยกล่องเพื่อรันบทของผู้สั่งอย่างแม่นของการสร้างมันมาเพื่อส่งและสร้างความสำเร็จให้จบคามือของคุณ"
            },
            setup: {
                title: "โหมดเซ็ตติ้งสร้างในรูปแบบสุดของคามสไตร์ความเป็นตนที่เป็นนายและอิสระ",
                description: "ออกแบบช่องคำเพื่อผู้กำกับ AI ส่วนตัวของตัวด้วยฟิวที่เข้ามือของแต่ละบุคคลและตามลุคที่มองสบายและน่าทำงาน การสนับสนุนตัวหลักและประมวลหลักก็เลือกจาดชุดผู้ให้บริการ LLm ท๊อปๆระดับตัวเต็งในวงการเลย เพื่อคุณในที่สุดที่จะรองรัยได้อย่างมั่นคงจริงๆ",
                list: [
                    "สับเปลี่ยนตามจังหว่ะนิ้วให้ถนัดกับการปรับของช็อตทางการควบคุมของสวิตป์กดแป้นคียบอร์ดของคุณ",
                    "ผู้มอบความฉลาดพร้อมในสเตปของ AI มาล้นทะลักอย่างน่าตื่นเต้นเช่นพี่ใหญ่ในสายอย่าง OpenAPI รุ่น หรือจะ Gemini และพี่ใหญ่น้องใหม่ GroQ...",
                    "รวมความเข้าด้วยเครื่องรับคำสั่งปุ๊ปแบบเมาส์คู่ของตัว PopCLip อย่างสุดของระบบสมันใหม่เข้ากับแพลตฟอมนี้ละ!"
                ]
            }
        },
        pricing: {
            title: "เชคความเหมาะสมและเลือกแผนให้สุดที่ตอบโจทความกระหายผลลัพของการใช้",
            free: {
                tier: "แผนเล่นเพลินแบบรับตัวเปล่าและลุยโล้ด (ไม่คิดสักบาทเลย)",
                tokens: "คุณจะได้ถึงหนึ่งพันเพื่อต่อโทคนของหนึ่งวันที่ให้เต็มตลับ",
                reset: "เริ่มนับจำนวนทิ้งและเอามาเพิ่มเติมเข้ายอดแรกที่จุด 24.00 (รอบตัดตีเส้น UTC)",
                cta: "เปิดใช้งานอย่างเลยเพื่อรอยยิ้ม"
            },
            basic: {
                tier: "เลเวลง่ายขั้นเพื่อความสบายใจของจุดเพื่อคนที่ใช้ความสม่ำเสมอในการส่งรับ (ราคาแบบรายฐาน)",
                period: "ค่าใช้รับแบบของตัดต่อจำนวนรายจ่ายในแบบที่ตีวงครบรอบที่สิ้นปี 1 หน ต่อรอบ ( 1ปี/ยอด)",
                tokens: "ตุนจำนวนได้ถึงเลขห้าแสนเพื่อให้ใช้และเบิร์นไปกับการดึงผลในหน้าของรอบ 30วัน/เดือน!!",
                reset: "เริ่มให้มีใช้ใหม่ทั้งหมดเริ่มเลขของวันแรกทุกเมื่อเมื่อปฎิทินของแต่ละเดือนของจุดมาเริ่ม 1 ใหม่",
                cta: "จกตังมาหน่อยแล้วรีบจองไปใช้ด่วนเพื่อคุณ"
            },
            pro: {
                badge: "ระดับยอดนิยมสูงสุดเพื่อไม่ให้งานของสะดุดด้วยกำลังไฟที่ไม่เคยแผ่ว!! รับกันไปจนกระเดือกจะร้อน!!! แนะนำสำหรับเซียน!!",
                tier: "ซัฟไฟร์ ตัวมาตารความบ้าเดือดของการเรียกพลังเทพๆมาส่องในชุดหน้าแพลนแบบชั้นสูง",
                period: "ค่าคอร์สของระดับนี้ชำระและหักให้บิลรายจ๊อปที่คิดกันตกในหนึ่งดือนและต่อแบบเดิมนี้ๆ",
                tokens: "พลังแห่งคำสิบล้านๆ ตัวโทะเค่น เพื่อที่จะฟาดในร้อยเรื่องที่ถาโถมในความของรอบครบเดือน (รอบรันสิบล้าน)",
                reset: "เพิ่มความสดและสดของชุดโอนมาใหม่ในตระกร้าเพื่อเลขวันที่แรกในเริ่มเข้าโหมดรายของเดือนต่างๆมาแทนในจุดสตาร์ทของ 0 ",
                cta: "เปยืยอดและไปใช้ชุดขุมกำลังขั้นระดับสุดเพื่อเป็นเพอร์เฟครูปแห่งคน!! จัดการกดเพื่อโปร!!!"
            }
        },
        benefits: {
            title: "ด้วยที่ต้องเป็นแอพพลิเคชั่นนี่นะหรือวไรท์ (WrIght)!? ทำไมดีขนาดนั้น?",
            subtitle: "โปรเพศชันนั้งแห่งอัฉริบพมาจุติสู่ชุดงานระบบของผลไม้ (MAcOS) ซึ่งเนียนระดับสายลับจะออกหน้าตอนคุณอยากให้ยื่นใบสนองเท่านั้น ความไม่ก่อกวนคือสัญลัษของเรา!",
            everywhere: {
                title: "การเสกรันรับคำให้เกิดผลที่อยู่ได้เพื่อคุณในระดับโลกและทำงานทั่วทิศไร้เส้นแบ่งพื้นที่การใช้",
                description: "เข้ากันแบบรวมตัวและเข้าเป็นทีมป๊อปเพื่อแชร์ระดับทำงานในชุดคียบอรดที่มีความลงองค์เดียวกันอย่างเนี้ยบในงานกับแอบทั่วไปในชีวิตอย่างแอพรับจดดหมายอิเลกทรอนิกในแอป Mail หรือความทรงจำที่ Apple-NOte งานระบบทรามงานกลุ่ม SLacKS  เบราเซอร์หน้าจอก็ดี หรือทุกบ๊อคกล่องแห่งข้อความของ Mac เองด้วยก็เอาอยู่ไร้ปัญหา!"
            },
            free: {
                title: "สตาร์ทได้ฟรี ไม่ได้มีหมก!",
                description: "เรื่องค่ยวุ่นวายต่างๆในการเชื่องและจับรหสคั่ย์ของ API ให้ลืมไปเลยและคอนฟริกที่มีก็ปาลงทะเล! มาเพื่อให้ฟรีด้วยแผนระดับนี้เพื่อให้ทดสอบและการสร้างอัฉรรปะก็โครตสุดก่อนจะตีเงินไปกับค่าธรรมข้นสูงก่อนการยกระดับโปร!"
            }
        },
        download: {
            title: "สตาทความเริ่ม ณ จุดๆนี้ในบัดดลทันทีและอย่ารอ!! ",
            description: "โหลดในตัวซอฟแวรของเราและเปิดโหมดรันอย่างเต็มเหนี่ยวและกดเอาไปฟรีด้วยตัวมือของเครื่องคุณกันเลย.",
            cta: "ลิงค์ตัวหน้าเพื่อดาวน์สูแอปพลิเคชั้น",
            guide: "คู่หูของคู่มือในการรับและอ่านผู้รับงานไปแล้ว",
            note: "เซมบรรจุความคิด้พื่อให้และแจกรวมแบบให้เปล่า · และเรื่องจังตั้งข้ามทิ้งและเริ่มโลดและสนุก"
        },
        footer: {
            rights: "© สำหรับปิแห่งของงานคือ 2026 Wright เป็นของหมาบสงวลริขสิทธิ์โดยพร้อมเพรียงและรับความคุมครองด้วยรปกร.",
            privacy: "แผ่นภาพข้อแถลงการสิทธิ์การรักษและรับรองการรับข้อมูลของตัวคุณเอง (พอลีซิส)",
            support: "การหนุนความประสงและหาผู้มีส่วช่วยเพ่อถามติขัดเรามีบริการซัพ"
        }
    }
};


class I18n {
    constructor() {

        this.languages = {
            en: "English", zh: "中文", es: "Español", fr: "Français", de: "Deutsch",
            ja: "日本語", ko: "한국어", ru: "Русский", pt: "Português", it: "Italiano",
            hi: "हिन्दी", ar: "العربية", tr: "Türkçe", vi: "Tiếng Việt", nl: "Nederlands",
            pl: "Polski", id: "Bahasa Indonesia", th: "ไทย"
        };
        this.currentLang = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // 1. Check saved preference
        const savedLang = localStorage.getItem('language');
        if (savedLang && this.languages[savedLang]) {
            return savedLang;
        }

        // 2. Check browser languages
        const browserLangs = navigator.languages || [navigator.language];
        for (const lang of browserLangs) {
            // Get base language code (e.g., 'en-US' -> 'en', 'zh-CN' -> 'zh')
            const baseLang = lang.split('-')[0].toLowerCase();
            if (this.languages[baseLang]) {
                return baseLang;
            }
        }

        // 3. Fallback to English
        return 'en';
    }

    init() {
        this.updateContent();
        this.bindEvents();
    }

    setLanguage(lang) {
        if (this.languages[lang]) {
            this.currentLang = lang;
            localStorage.setItem('language', this.currentLang);
            this.updateContent();
            this.updateActiveState();
        }
    }

    updateContent() {
        document.documentElement.lang = this.currentLang;
        document.documentElement.dir = ['ar', 'he'].includes(this.currentLang) ? 'rtl' : 'ltr';

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        // Update list items specifically if they are managed by index
        document.querySelectorAll('[data-i18n-list]').forEach(element => {
            const key = element.getAttribute('data-i18n-list');
            const list = this.getTranslation(key);

            if (list && Array.isArray(list)) {
                // Case 1: The element itself has an index (single item)
                if (element.hasAttribute('data-i18n-index')) {
                    const index = parseInt(element.getAttribute('data-i18n-index'));
                    if (list[index]) {
                        element.innerHTML = list[index];
                    }
                }
                // Case 2: The element is a container (ul/ol) with children having indices
                else {
                    element.querySelectorAll('[data-i18n-index]').forEach(item => {
                        const index = parseInt(item.getAttribute('data-i18n-index'));
                        if (list[index]) {
                            item.innerHTML = list[index];
                        }
                    });
                }
            }
        });

        // Update meta tags
        document.title = this.getTranslation('meta.title');
        document.querySelector('meta[name="description"]')?.setAttribute('content', this.getTranslation('meta.description'));
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', this.getTranslation('meta.title'));
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', this.getTranslation('meta.description'));
        document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', this.getTranslation('meta.title'));
        document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', this.getTranslation('meta.description'));

        this.updateButtonText();
        this.updateActiveState();
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        // Fallback to English if translation missing
        if (!value) value = translations['en'];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                // Try fallback to en
                let enValue = translations['en'];
                for (const enK of keys) {
                    if (enValue && enValue[enK]) enValue = enValue[enK];
                    else return null;
                }
                return enValue;
            }
        }
        return value;
    }

    updateButtonText() {
        const toggleBtn = document.querySelector('.language-btn .text');
        if (toggleBtn) {
            toggleBtn.textContent = this.languages[this.currentLang];
        }
    }

    updateActiveState() {
        document.querySelectorAll('.language-option').forEach(opt => {
            if (opt.dataset.langSwitch === this.currentLang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });
    }

    bindEvents() {
        // Expose setLanguage globally
        window.setLanguage = (lang) => this.setLanguage(lang);

        // Delegate click for language switching
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-lang-switch]');
            if (btn) {
                e.preventDefault();
                this.setLanguage(btn.dataset.langSwitch);
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
