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
                    desc: "You can use Wright's polishing, translation, and quick chat functions with keyboard shortcuts. The default shortcuts are listed below, and you can customize them in the Settings."
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
                    a: "Wright is an AI writing assistant for macOS. It provides three core functions you can trigger from any app via keyboard shortcuts or PopClip:",
                    list: [
                        "<strong>Rewrite</strong> — Polish selected text for grammar, tone, and clarity while keeping your original meaning.",
                        "<strong>Translate</strong> — Translate selected text between languages instantly.",
                        "<strong>Chat</strong> — Ask questions and have a conversation with AI, with the option to transition from a quick Quick View to a full Chat interface."
                    ]
                },
                q2: {
                    q: "Which AI models are supported?",
                    a: "Wright is powered by leading AI models:",
                    list: ["OpenAI (GPT-4o, GPT-4o mini, etc.)", "Google Gemini", "Groq", "Grok (xAI)"]
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
                    a: "Wright requires macOS 14.0 (Sonoma) or later. It needs Accessibility permissions to read and replace selected text system-wide. The app is lightweight (~2.4 MB) and runs as a menu bar app."
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
                desc: "Wright's privacy policy. We do not collect personal usage data."
            },
            lastUpdated: "Last Updated: March 2024",
            commitment: {
                title: "Our Commitment to Privacy",
                text: "Wright is designed with your privacy in mind. We believe in transparency and are committed to protecting your privacy and personal information.",
                keyPoints: {
                    title: "Key Privacy Points:",
                    list: [
                        "We do not collect any personal information",
                        "We do not track your usage",
                        "We do not store any of your data"
                    ]
                }
            },
            dataCollection: {
                title: "Data Collection and Storage",
                text: "Wright does not collect, store, or transmit any personal information about our users. The app operates entirely on your local device.",
                apiKeys: {
                    title: "API Keys",
                    text: "The only data you need to provide is your API key for the Language Learning Model (LLM) services you wish to use. These API keys are:",
                    list: [
                        "Stored securely in your macOS Keychain",
                        "Never transmitted to our servers",
                        "Only used to communicate directly with your chosen LLM services",
                        "Can be removed at any time through the app or your Keychain Access"
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
                text: "Your API keys are stored securely in the macOS Keychain, which provides encrypted storage for sensitive data. This is the same system that macOS uses to store passwords and other secure information."
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
                description: "Global keyboard shortcuts and PopClip integration mean Wright works in any app — Mail, Notes, Slack, your browser, or any text field on your Mac."
            },
            free: {
                title: "Free to Start",
                description: "Download and start using Wright immediately — no API key, no configuration. A free plan is included so you can try every feature before upgrading."
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
            title: "macOS 上的 AI 助手",
            subtitle: "Wright 是一款可自定义的 macOS AI 助手。创建专属角色，轻松润色和翻译文本，以及进行对话——所有操作仅需一个快捷键或 PopClip。免费使用。",
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
                    desc: "分步设置：辅助功能权限、键盘快捷键和自定义角色。",
                    cta: "查看指南"
                },
                issue: {
                    title: "报告问题",
                    desc: "发现 Bug 或有建议？在 GitHub 上提交 Issue。",
                    cta: "提交问题"
                }
            },
            faq: {
                title: "常见问题",
                q1: {
                    q: "Wright 能做什么？",
                    a: "Wright 是 macOS 上的 AI 写作助手。它提供三个核心功能，可通过键盘快捷键或 PopClip 在任何应用中触发：",
                    list: [
                        "<strong>润色</strong> — 改善选中文本的语法、语气和清晰度，同时保留原意。",
                        "<strong>翻译</strong> — 即时翻译选中文本。",
                        "<strong>对话</strong> — 向 AI 提问并进行对话，可选择从快速视图切换到完整聊天界面。"
                    ]
                },
                q2: {
                    q: "支持哪些 AI 模型？",
                    a: "Wright 由领先的 AI 模型驱动：",
                    list: ["OpenAI (GPT-4o, GPT-4o mini 等)", "Google Gemini", "Groq", "Grok (xAI)"]
                },
                q3: {
                    q: "什么是自定义 AI 角色？",
                    a: "自定义角色允许您创建具有自己系统提示的专业 AI 人格。例如，您可以设置“代码审查员”、“文案撰写人”或“翻译员”角色——每个角色都会根据您定义的指令进行不同的操作。从快速视图或聊天中即时切换角色。"
                },
                q4: {
                    q: "PopClip 集成如何工作？",
                    a: "如果您安装了 PopClip，Wright 会向 PopClip 的弹出菜单添加操作。在任何应用中选择文本，PopClip 将显示润色、翻译或聊天选项——无需键盘快捷键。您可以从 Wright 的设置中下载 PopClip 扩展。"
                },
                q5: {
                    q: "我的数据安全吗？",
                    a: "是的。Wright 不会收集或存储您的个人数据。您的文本由 AI 处理，结果直接返回——Wright 不会记录或保留您的内容。详情请参阅我们的隐私政策。"
                },
                q6: {
                    q: "系统要求是什么？",
                    a: "Wright 需要 macOS 14.0 (Sonoma) 或更高版本。它需要辅助功能权限来在系统范围内读取和替换选定的文本。该应用程序很轻量（~2.4 MB），并作为菜单栏应用程序运行。"
                },
                q7: {
                    q: "键盘快捷键如何工作？",
                    a: "Wright 使用可在任何应用中工作的全局键盘快捷键。默认快捷键可以在 设置 → 快捷键 中自定义。在任何地方选择文本，按下快捷键，结果即时出现——您可以复制、插入或扩展到聊天会话。"
                }
            },
            contact: {
                title: "联系我们",
                email: "邮件支持",
                response: "我们通常在 24 小时内回复。"
            }
        },
        privacy: {
            title: "隐私政策",
            meta: {
                title: "隐私政策 | Wright",
                desc: "Wright 的隐私政策。我们不收集个人使用数据。"
            },
            lastUpdated: "最后更新：2024年3月",
            commitment: {
                title: "我们对隐私的承诺",
                text: "Wright 的设计充分考虑了您的隐私。我们相信透明度，并致力于保护您的隐私和个人信息。",
                keyPoints: {
                    title: "主要隐私点：",
                    list: [
                        "我们不收集任何个人信息",
                        "我们不跟踪您的使用情况",
                        "我们不存储您的任何数据"
                    ]
                }
            },
            dataCollection: {
                title: "数据收集与存储",
                text: "Wright 不会收集、存储或传输关于用户的任何个人信息。该应用程序完全在您的本地设备上运行。",
                apiKeys: {
                    title: "API 密钥",
                    text: "您唯一需要提供的数据是您希望使用的 LLM 服务的 API 密钥。这些 API 密钥：",
                    list: [
                        "安全地存储在您的 macOS 钥匙串中",
                        "从未传输到我们的服务器",
                        "仅用于直接与您选择的 LLM 服务通信",
                        "随时可以通过应用程序或钥匙串访问移除"
                    ]
                }
            },
            thirdParty: {
                title: "第三方服务",
                text: "当您使用 Wright 与 LLM 服务（如 OpenAI、Groq 等）交互时，您的互动受这些服务的隐私政策管辖。我们建议查看您选择使用的 LLM 服务的隐私政策：",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI 隐私政策</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq 隐私政策</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI 隐私政策</a>"
                ]
            },
            security: {
                title: "数据安全",
                text: "您的 API 密钥安全地存储在 macOS 钥匙串中，该钥匙串为敏感数据提供加密存储。这是 macOS 用于存储密码和其他安全信息的同一系统。"
            },
            changes: {
                title: "本隐私政策的变更",
                text: "我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策并更新“最后更新”日期来通知您任何变更。"
            },
            contact: {
                title: "联系我们",
                text: "如果您对本隐私政策有任何疑问，请联系我们："
            }
        },
        howItWorks: {
            title: "工作原理",
            subtitle: "使用键盘快捷键或集成 PopClip 以右键访问所有功能。",
            step1: {
                title: "选择文本",
                description: "在 Mac 上的任何应用中高亮显示任何文本。"
            },
            step2: {
                title: "按下快捷键",
                description: "按下您配置的快捷键或使用 PopClip 触发润色、翻译或聊天。"
            },
            step3: {
                title: "获取结果",
                description: "AI 增强的文本即时出现在浮动窗口中。一键复制或替换。"
            }
        },
        features: {
            title: "主要功能",
            quickView: {
                title: "快速启动，深入交流",
                description: "在轻量级快速视图中启动快速查询。当对话需要更深入时，切换到完整聊天界面——您的上下文会自动保留。"
            },
            rewrite: {
                title: "一键文本润色",
                description: "选择文本，按下快捷键，即时获得润色版本。Wright 修复错别字、语法和尴尬的措辞，同时保持您的原意。它会自动检测您正在使用的语言。"
            },
            translate: {
                title: "即时翻译",
                description: "通过单个快捷键在语言之间翻译选定的文本。Wright 检测源语言并为您翻译——无需切换到单独的应用或浏览器标签页。"
            },
            customRoles: {
                title: "自定义 AI 角色",
                description: "创建您自己的 AI 角色——例如代码审查、文案撰写、邮件起草或其他任何角色——每个角色都有自己的系统提示和行为。"
            },
            setup: {
                title: "您的设置，随心所欲",
                description: "为每个 AI 角色配置快捷键，并自定义界面以适应您的工作流程。Wright 支持多个 LLM 提供商，允许您选择最符合您要求的提供商。",
                list: [
                    "可自定义的键盘快捷键",
                    "多个 AI 模型 (OpenAI, Gemini, Grok, Groq)",
                    "PopClip 集成"
                ]
            }
        },
        pricing: {
            title: "选择您的计划",
            free: {
                tier: "免费",
                tokens: "1,000 tokens / 天",
                reset: "每日重置 (UTC 午夜)",
                cta: "开始使用"
            },
            basic: {
                tier: "基础版",
                period: "/ 年",
                tokens: "500,000 tokens / 月",
                reset: "每月1日重置",
                cta: "订阅"
            },
            pro: {
                badge: "最受欢迎",
                tier: "专业版",
                period: "/ 月",
                tokens: "10,000,000 tokens / 月",
                reset: "每月1日重置",
                cta: "成为专业版"
            }
        },
        benefits: {
            title: "为什么选择 Wright？",
            subtitle: "原生 macOS 助手，在您需要之前绝不打扰",
            everywhere: {
                title: "随处可用",
                description: "全局键盘快捷键和 PopClip 集成意味着 Wright 可在任何应用中工作——邮件、备忘录、Slack、浏览器或您 Mac 上的任何文本字段。"
            },
            free: {
                title: "免费开始",
                description: "立即下载并开始使用 Wright——无需 API 密钥，无需配置。包含免费计划，因此您可以在升级前试用每个功能。"
            }
        },
        download: {
            title: "开始使用",
            description: "免费下载 Wright 并立即开始使用。",
            cta: "下载 macOS 版本",
            guide: "用户指南",
            note: "包含免费计划 · 无需配置"
        },
        footer: {
            rights: "© 2026 Wright. 保留所有权利。",
            privacy: "隐私政策",
            support: "支持"
        }
    }, es: {
        meta: {
            title: "Wright - Asistente de IA para macOS | Reescribir, Traducir y Charlar",
            description: "Wright es un asistente de IA personalizable para macOS. Cree roles personalizados, reescriba y traduzca textos sin esfuerzo, y charle, todo desde un atajo de teclado o PopClip. Uso gratuito."
        },
        nav: {
            features: "Características",
            download: "Descargar",
            support: "Ayuda",
            guide: "Guía",
            toggle: "Idioma"
        },
        hero: {
            title: "Tu Asistente de IA para macOS",
            subtitle: "Wright es un asistente de IA personalizable para macOS. Cree roles personalizados, reescriba y traduzca textos sin esfuerzo, y charle, todo desde un atajo de teclado o PopClip. Uso gratuito.",
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
                    desc: "Configuración paso a paso: permisos de accesibilidad, atajos y roles personalizados.",
                    cta: "Ver Guía"
                },
                issue: {
                    title: "Reportar un Problema",
                    desc: "¿Encontró un error o tiene una sugerencia? Abra un issue en GitHub.",
                    cta: "Enviar Problema"
                }
            },
            faq: {
                title: "Preguntas Frecuentes",
                q1: {
                    q: "¿Qué puede hacer Wright?",
                    a: "Wright es un asistente de escritura IA para macOS. Ofrece tres funciones principales que puede activar desde cualquier app vía atajos:",
                    list: [
                        "<strong>Reescribir</strong> — Pula el texto seleccionado para mejorar gramática, tono y claridad manteniendo el significado original.",
                        "<strong>Traducir</strong> — Traduzca texto seleccionado entre idiomas al instante.",
                        "<strong>Chat</strong> — Haga preguntas y tenga una conversación con IA, con la opción de pasar de una Vista Rápida a una interfaz de Chat completa."
                    ]
                },
                q2: {
                    q: "¿Qué modelos de IA son compatibles?",
                    a: "Wright funciona con los principales modelos de IA:",
                    list: ["OpenAI (GPT-4o, GPT-4o mini, etc.)", "Google Gemini", "Groq", "Grok (xAI)"]
                },
                q3: {
                    q: "¿Qué son los Roles de IA Personalizados?",
                    a: "Los Roles Personalizados le permiten crear personalidades de IA especializadas con sus propios prompts de sistema. Por ejemplo, un rol de \"Revisor de Código\", \"Redactor\" o \"Traductor\" — cada uno se comporta diferente según sus instrucciones."
                },
                q4: {
                    q: "¿Cómo funciona la integración con PopClip?",
                    a: "Si tiene PopClip instalado, Wright añade acciones a su menú emergente. Seleccione texto y PopClip mostrará opciones para reescribir, traducir o charlar — sin atajos de teclado needed."
                },
                q5: {
                    q: "¿Están seguros mis datos?",
                    a: "Sí. Wright no recopila ni almacena sus datos personales. Su texto es procesado por la IA y el resultado se devuelve directamente — Wright no registra ni retiene su contenido."
                },
                q6: {
                    q: "¿Cuáles son los requisitos del sistema?",
                    a: "Wright requiere macOS 14.0 (Sonoma) o posterior. Necesita permisos de Accesibilidad para leer y reemplazar texto seleccionado en todo el sistema."
                },
                q7: {
                    q: "¿Cómo funcionan los atajos de teclado?",
                    a: "Wright utiliza atajos globales que funcionan en cualquier app. Los atajos predeterminados se pueden personalizar en Configuración → Atajos."
                }
            },
            contact: {
                title: "Contáctenos",
                email: "Soporte por Email",
                response: "Normalmente respondemos en 24 horas."
            }
        },
        privacy: {
            title: "Política de Privacidad",
            meta: {
                title: "Política de Privacidad | Wright",
                desc: "Política de privacidad de Wright. No recopilamos datos de uso personal."
            },
            lastUpdated: "Última Actualización: Marzo 2024",
            commitment: {
                title: "Nuestro Compromiso con la Privacidad",
                text: "Wright está diseñado pensando en su privacidad. Creemos en la transparencia y estamos comprometidos a proteger su privacidad e información personal.",
                keyPoints: {
                    title: "Puntos Clave de Privacidad:",
                    list: [
                        "No recopilamos información personal",
                        "No rastreamos su uso",
                        "No almacenamos ninguno de sus datos"
                    ]
                }
            },
            dataCollection: {
                title: "Recopilación y Almacenamiento de Datos",
                text: "Wright no recopila, almacena ni transmite ninguna información personal sobre nuestros usuarios. La aplicación opera completamente en su dispositivo local.",
                apiKeys: {
                    title: "Claves API",
                    text: "El único dato que necesita proporcionar es su clave API para los servicios LLM. Estas claves:",
                    list: [
                        "Se guardan seguramente en su Llavero de macOS",
                        "Nunca se transmiten a nuestros servidores",
                        "Solo se usan para comunicar directamente con sus servicios LLM",
                        "Se pueden eliminar en cualquier momento"
                    ]
                }
            },
            thirdParty: {
                title: "Servicios de Terceros",
                text: "Cuando usa Wright para interactuar con servicios LLM, sus interacciones se rigen por las políticas de esos servicios. Recomendamos revisar sus políticas:",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">Política de Privacidad OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Política de Privacidad Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">Política de Privacidad xAI</a>"
                ]
            },
            security: {
                title: "Seguridad de Datos",
                text: "Sus claves API se almacenan de forma segura en el Llavero de macOS, que proporciona almacenamiento encriptado."
            },
            changes: {
                title: "Cambios en Esta Política",
                text: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva política aquí."
            },
            contact: {
                title: "Contáctenos",
                text: "Si tiene preguntas sobre esta política, contáctenos en:"
            }
        },
        howItWorks: {
            title: "Cómo Funciona",
            subtitle: "Use atajos o integre con PopClip.",
            step1: {
                title: "Seleccionar Texto",
                description: "Resalte cualquier texto en cualquier app en su Mac."
            },
            step2: {
                title: "Presionar Atajo",
                description: "Pulse su atajo configurado o use PopClip para activar funciones."
            },
            step3: {
                title: "Obtener Resultado",
                description: "Su texto mejorado por IA aparece al instante."
            }
        },
        features: {
            title: "Características Clave",
            quickView: {
                title: "Inicio Rápido",
                description: "Lance una consulta rápida. Transición a chat completo cuando necesite más profundidad."
            },
            rewrite: {
                title: "Pulido de Texto",
                description: "Seleccione texto, presione un atajo y obtenga una versión pulida al instante. Wright corrige errores y mejora la redacción."
            },
            translate: {
                title: "Traducción Instantánea",
                description: "Traduzca texto seleccionado entre idiomas con un solo atajo."
            },
            customRoles: {
                title: "Roles de IA Personalizados",
                description: "Cree sus propios roles de IA con prompts personalizados."
            },
            setup: {
                title: "Su Configuración",
                description: "Configure atajos y personalice la interfaz.",
                list: [
                    "Atajos Personalizables",
                    "Múltiples Modelos de IA",
                    "Integración PopClip"
                ]
            }
        },
        pricing: {
            title: "Elija Su Plan",
            free: {
                tier: "Gratis",
                tokens: "1,000 tokens / día",
                reset: "Reinicio diario",
                cta: "Empezar"
            },
            basic: {
                tier: "Básico",
                period: "/ año",
                tokens: "500,000 tokens / mes",
                reset: "Reinicio mensual",
                cta: "Suscribirse"
            },
            pro: {
                badge: "Más Popular",
                tier: "Pro",
                period: "/ mes",
                tokens: "10,000,000 tokens / mes",
                reset: "Reinicio mensual",
                cta: "Ir a Pro"
            }
        },
        benefits: {
            title: "¿Por qué Wright?",
            subtitle: "Un asistente nativo de macOS",
            everywhere: {
                title: "Funciona en Todas Partes",
                description: "Atajos globales e integración PopClip significan que Wright funciona en cualquier app."
            },
            free: {
                title: "Gratis para Empezar",
                description: "Descargue y comience a usar Wright inmediatamente."
            }
        },
        download: {
            title: "Empezar",
            description: "Descargue Wright gratis.",
            cta: "Descargar para macOS",
            guide: "Guía de Usuario",
            note: "Plan gratuito incluido"
        },
        footer: {
            rights: "© 2026 Wright. Todos los derechos reservados.",
            privacy: "Política de Privacidad",
            support: "Soporte"
        }
    },
    fr: {
        meta: {
            title: "Wright - Assistant IA pour macOS | Réécrire, Traduire & Discuter",
            description: "Wright est un assistant IA personnalisable pour macOS. Créez des rôles personnalisés, réécrivez et traduisez du texte sans effort."
        },
        nav: {
            features: "Fonctionnalités",
            download: "Télécharger",
            support: "Aide",
            guide: "Guide",
            toggle: "Langue"
        },
        hero: {
            title: "Votre Assistant IA pour macOS",
            subtitle: "Wright est un assistant IA personnalisable pour macOS. Créez des rôles personnalisés, réécrivez et traduisez du texte sans effort.",
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
                    desc: "Configuration étape par étape.",
                    cta: "Voir le Guide"
                },
                issue: {
                    title: "Signaler un Problème",
                    desc: "Trouvé un bug ?",
                    cta: "Soumettre"
                }
            },
            faq: {
                title: "FAQ",
                q1: {
                    q: "Que peut faire Wright ?",
                    a: "Wright est un assistant d'écriture IA pour macOS.",
                    list: [
                        "<strong>Réécrire</strong> — Polir le texte.",
                        "<strong>Traduire</strong> — Traduire le texte.",
                        "<strong>Discuter</strong> — Discuter avec l'IA."
                    ]
                },
                q2: {
                    q: "Quels modèles sont supportés ?",
                    a: "Wright est propulsé par :",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Rôles IA Personnalisés ?",
                    a: "Créez des personnalités IA spécialisées."
                },
                q4: {
                    q: "Intégration PopClip ?",
                    a: "Actions directes dans le menu PopClip."
                },
                q5: {
                    q: "Données sécurisées ?",
                    a: "Oui. Wright ne collecte ni ne stocke vos données."
                },
                q6: {
                    q: "Configuration requise ?",
                    a: "macOS 14.0 (Sonoma) ou plus récent."
                },
                q7: {
                    q: "Raccourcis clavier ?",
                    a: "Raccourcis globaux personnalisables."
                }
            },
            contact: {
                title: "Contactez-nous",
                email: "Support Email",
                response: "Réponse sous 24h."
            }
        },
        privacy: {
            title: "Politique de Confidentialité",
            meta: {
                title: "Confidentialité | Wright",
                desc: "Politique de confidentialité de Wright."
            },
            lastUpdated: "Dernière MAJ : Mars 2024",
            commitment: {
                title: "Notre Engagement",
                text: "Nous protégeons votre vie privée.",
                keyPoints: {
                    title: "Points Clés :",
                    list: [
                        "Pas de collecte de données personnelles",
                        "Pas de suivi d'utilisation",
                        "Pas de stockage de vos données"
                    ]
                }
            },
            dataCollection: {
                title: "Collecte de Données",
                text: "Wright ne collecte aucune information personnelle.",
                apiKeys: {
                    title: "Clés API",
                    text: "Seules les clés API sont nécessaires.",
                    list: [
                        "Stockées dans le Trousseau macOS",
                        "Jamais transmises à nos serveurs",
                        "Communication directe avec les LLM",
                        "Supprimables à tout moment"
                    ]
                }
            },
            thirdParty: {
                title: "Services Tiers",
                text: "Vos interactions avec les LLM dépendent de leurs politiques.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Sécurité des Données",
                text: "Clés stockées dans le Trousseau macOS chiffré."
            },
            changes: {
                title: "Changements",
                text: "Nous notifierons des mises à jour."
            },
            contact: {
                title: "Contact",
                text: "Questions ?"
            }
        },
        howItWorks: {
            title: "Comment ça marche",
            subtitle: "Raccourcis ou PopClip.",
            step1: {
                title: "Sélectionner",
                description: "Surligner du texte."
            },
            step2: {
                title: "Raccourci",
                description: "Appuyer sur le raccourci."
            },
            step3: {
                title: "Résultat",
                description: "Le texte amélioré apparaît."
            }
        },
        features: {
            title: "Fonctionnalités",
            quickView: {
                title: "Vue Rapide",
                description: "Requêtes rapides."
            },
            rewrite: {
                title: "Polissage",
                description: "Améliorer le texte instantanément."
            },
            translate: {
                title: "Traduction",
                description: "Traduire instantanément."
            },
            customRoles: {
                title: "Rôles Personnalisés",
                description: "Créer vos propres IA."
            },
            setup: {
                title: "Configuration",
                description: "Personnaliser tout.",
                list: [
                    "Raccourcis",
                    "Modèles Multiples",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Prix",
            free: {
                tier: "Gratuit",
                tokens: "1 000 jetons / jour",
                reset: "Reset quotidien",
                cta: "Commencer"
            },
            basic: {
                tier: "Basique",
                period: "/ an",
                tokens: "500 000 jetons / mois",
                reset: "Reset mensuel",
                cta: "S'abonner"
            },
            pro: {
                badge: "Populaire",
                tier: "Pro",
                period: "/ mois",
                tokens: "10 000 000 jetons / mois",
                reset: "Reset mensuel",
                cta: "Passer Pro"
            }
        },
        benefits: {
            title: "Pourquoi Wright ?",
            subtitle: "Natif macOS.",
            everywhere: {
                title: "Partout",
                description: "Fonctionne dans toutes les apps."
            },
            free: {
                title: "Gratuit",
                description: "Télécharger et utiliser."
            }
        },
        download: {
            title: "Commencer",
            description: "Télécharger gratuitement.",
            cta: "Télécharger pour macOS",
            guide: "Guide",
            note: "Plan gratuit inclus"
        },
        footer: {
            rights: "© 2026 Wright. Tous droits réservés.",
            privacy: "Confidentialité",
            support: "Support"
        }
    }, de: {
        meta: {
            title: "Wright - KI-Assistent für macOS | Umschreiben, Übersetzen & Chatten",
            description: "Wright ist ein anpassbarer KI-Assistent für macOS. Erstellen Sie eigene Rollen, schreiben und übersetzen Sie Texte mühelos und chatten Sie – alles über einen Tastaturkurzbefehl oder PopClip. Kostenlos nutzbar."
        },
        nav: {
            features: "Funktionen",
            download: "Download",
            support: "Hilfe",
            guide: "Anleitung",
            toggle: "Sprache"
        },
        hero: {
            title: "Ihr KI-Assistent für macOS",
            subtitle: "Wright ist ein anpassbarer KI-Assistent für macOS. Erstellen Sie eigene Rollen, schreiben und übersetzen Sie Texte mühelos und chatten Sie – alles über einen Tastaturkurzbefehl oder PopClip. Kostenlos nutzbar.",
            download: "Download für macOS"
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
                    desc: "Schritt-für-Schritt-Einrichtung.",
                    cta: "Handbuch ansehen"
                },
                issue: {
                    title: "Problem melden",
                    desc: "Fehler gefunden?",
                    cta: "Einreichen"
                }
            },
            faq: {
                title: "Häufig gestellte Fragen",
                q1: {
                    q: "Was kann Wright tun?",
                    a: "Wright ist ein KI-Schreibassistent für macOS.",
                    list: [
                        "<strong>Umschreiben</strong> — Texte polieren.",
                        "<strong>Übersetzen</strong> — Texte sofort übersetzen.",
                        "<strong>Chatten</strong> — Mit KI unterhalten."
                    ]
                },
                q2: {
                    q: "Welche Modelle werden unterstützt?",
                    a: "Wright wird betrieben von:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Benutzerdefinierte KI-Rollen?",
                    a: "Erstellen Sie spezialisierte KI-Persönlichkeiten."
                },
                q4: {
                    q: "PopClip-Integration?",
                    a: "Aktionen direkt im PopClip-Menü."
                },
                q5: {
                    q: "Sind meine Daten sicher?",
                    a: "Ja. Wright sammelt oder speichert Ihre Daten nicht."
                },
                q6: {
                    q: "Systemanforderungen?",
                    a: "macOS 14.0 (Sonoma) oder neuer."
                },
                q7: {
                    q: "Tastaturkurzbefehle?",
                    a: "Globale, anpassbare Kurzbefehle."
                }
            },
            contact: {
                title: "Kontakt",
                email: "E-Mail-Support",
                response: "Antwort innerhalb von 24 Std."
            }
        },
        privacy: {
            title: "Datenschutzerklärung",
            meta: {
                title: "Datenschutz | Wright",
                desc: "Datenschutzerklärung von Wright."
            },
            lastUpdated: "Zuletzt aktualisiert: März 2024",
            commitment: {
                title: "Unser Versprechen",
                text: "Wir schützen Ihre Privatsphäre.",
                keyPoints: {
                    title: "Wichtige Punkte:",
                    list: [
                        "Keine Sammlung persönlicher Daten",
                        "Kein Tracking",
                        "Keine Datenspeicherung"
                    ]
                }
            },
            dataCollection: {
                title: "Datenerfassung",
                text: "Wright sammelt keine persönlichen Informationen.",
                apiKeys: {
                    title: "API-Keys",
                    text: "Nur API-Keys sind erforderlich.",
                    list: [
                        "Sicher im macOS-Schlüsselbund gespeichert",
                        "Niemals an unsere Server übertragen",
                        "Direkte Kommunikation mit LLMs",
                        "Jederzeit entfernbar"
                    ]
                }
            },
            thirdParty: {
                title: "Drittanbieter-Dienste",
                text: "Interaktionen unterliegen deren Richtlinien.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Datensicherheit",
                text: "Keys verschlüsselt im macOS-Schlüsselbund."
            },
            changes: {
                title: "Änderungen",
                text: "Wir informieren über Updates."
            },
            contact: {
                title: "Kontakt",
                text: "Fragen?"
            }
        },
        howItWorks: {
            title: "So funktioniert's",
            subtitle: "Kurzbefehle oder PopClip.",
            step1: {
                title: "Text auswählen",
                description: "Text markieren."
            },
            step2: {
                title: "Kurzbefehl drücken",
                description: "Funktion auslösen."
            },
            step3: {
                title: "Ergebnis erhalten",
                description: "Verbesserter Text erscheint."
            }
        },
        features: {
            title: "Hauptfunktionen",
            quickView: {
                title: "Schnellansicht",
                description: "Schnelle Abfragen."
            },
            rewrite: {
                title: "Umschreiben",
                description: "Text sofort verbessern."
            },
            translate: {
                title: "Übersetzen",
                description: "Sofort übersetzen."
            },
            customRoles: {
                title: "Eigene Rollen",
                description: "Eigene KI erstellen."
            },
            setup: {
                title: "Einrichtung",
                description: "Alles anpassen.",
                list: [
                    "Kurzbefehle",
                    "Mehrere Modelle",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Preise",
            free: {
                tier: "Kostenlos",
                tokens: "1.000 Tokens / Tag",
                reset: "Täglicher Reset",
                cta: "Starten"
            },
            basic: {
                tier: "Basis",
                period: "/ Jahr",
                tokens: "500.000 Tokens / Monat",
                reset: "Monatlicher Reset",
                cta: "Abonnieren"
            },
            pro: {
                badge: "Beliebt",
                tier: "Pro",
                period: "/ Monat",
                tokens: "10.000.000 Tokens / Monat",
                reset: "Monatlicher Reset",
                cta: "Zu Pro wechseln"
            }
        },
        benefits: {
            title: "Warum Wright?",
            subtitle: "Nativ für macOS.",
            everywhere: {
                title: "Überall",
                description: "Funktioniert in jeder App."
            },
            free: {
                title: "Kostenlos",
                description: "Einfach herunterladen."
            }
        },
        download: {
            title: "Loslegen",
            description: "Kostenlos herunterladen.",
            cta: "Download für macOS",
            guide: "Handbuch",
            note: "Kostenloser Plan inklusive"
        },
        footer: {
            rights: "© 2026 Wright. Alle Rechte vorbehalten.",
            privacy: "Datenschutz",
            support: "Support"
        }
    },
    ja: {
        meta: {
            title: "Wright - macOS向けAIアシスタント | リライト、翻訳、チャット",
            description: "WrightはmacOS向けのカスタマイズ可能なAIアシスタントです。独自の役割を作成し、テキストを簡単にリライト・翻訳し、チャットも可能です—すべてキーボードショートカットまたはPopClipから。無料で使用できます。"
        },
        nav: {
            features: "機能",
            download: "ダウンロード",
            support: "サポート",
            guide: "ガイド",
            toggle: "言語"
        },
        hero: {
            title: "macOSのためのAIアシスタント",
            subtitle: "WrightはmacOS向けのカスタマイズ可能なAIアシスタントです。独自の役割を作成し、テキストを簡単にリライト・翻訳し、チャットも可能です—すべてキーボードショートカットまたはPopClipから。無料で使用できます。",
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
                    desc: "ステップバイステップ設定。",
                    cta: "ガイドを見る"
                },
                issue: {
                    title: "問題を報告",
                    desc: "バグを見つけましたか？",
                    cta: "送信"
                }
            },
            faq: {
                title: "よくある質問",
                q1: {
                    q: "Wrightは何ができますか？",
                    a: "WrightはmacOS用のAIライティングアシスタントです。",
                    list: [
                        "<strong>リライト</strong> — 文章を磨き上げます。",
                        "<strong>翻訳</strong> — 即座に翻訳します。",
                        "<strong>チャット</strong> — AIと会話します。"
                    ]
                },
                q2: {
                    q: "対応モデルは？",
                    a: "Wrightは主要なAIモデルで動作します：",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "カスタムAIロールとは？",
                    a: "特定の目的のためのAI人格を作成できます。"
                },
                q4: {
                    q: "PopClip連携？",
                    a: "PopClipメニューにアクションを追加します。"
                },
                q5: {
                    q: "データは安全ですか？",
                    a: "はい。個人データを収集または保存しません。"
                },
                q6: {
                    q: "システム要件は？",
                    a: "macOS 14.0 (Sonoma) 以降。"
                },
                q7: {
                    q: "キーボードショートカット？",
                    a: "グローバルでカスタマイズ可能なショートカット。"
                }
            },
            contact: {
                title: "お問い合わせ",
                email: "メールサポート",
                response: "24時間以内に応答します。"
            }
        },
        privacy: {
            title: "プライバシーポリシー",
            meta: {
                title: "プライバシー | Wright",
                desc: "Wrightのプライバシーポリシー。"
            },
            lastUpdated: "最終更新：2024年3月",
            commitment: {
                title: "私たちの約束",
                text: "プライバシーを保護します。",
                keyPoints: {
                    title: "キーポイント：",
                    list: [
                        "個人情報を収集しません",
                        "使用状況を追跡しません",
                        "データを保存しません"
                    ]
                }
            },
            dataCollection: {
                title: "データ収集",
                text: "Wrightは個人情報を収集しません。",
                apiKeys: {
                    title: "APIキー",
                    text: "APIキーのみ必要です。",
                    list: [
                        "macOSキーチェーンに安全に保存",
                        "サーバーに送信されません",
                        "LLMと直接通信",
                        "いつでも削除可能"
                    ]
                }
            },
            thirdParty: {
                title: "サードパーティサービス",
                text: "LLMとのやり取りは各社のポリシーに従います。",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "データセキュリティ",
                text: "キーは暗号化されたmacOSキーチェーンに保存されます。"
            },
            changes: {
                title: "変更",
                text: "更新をお知らせします。"
            },
            contact: {
                title: "お問い合わせ",
                text: "質問がありますか？"
            }
        },
        howItWorks: {
            title: "仕組み",
            subtitle: "ショートカットまたはPopClip。",
            step1: {
                title: "テキスト選択",
                description: "テキストをハイライト。"
            },
            step2: {
                title: "ショートカット",
                description: "ショートカットを押す。"
            },
            step3: {
                title: "結果",
                description: "改善されたテキストが表示されます。"
            }
        },
        features: {
            title: "主な機能",
            quickView: {
                title: "クイックビュー",
                description: "素早い検索。"
            },
            rewrite: {
                title: "リライト",
                description: "文章を即座に改善。"
            },
            translate: {
                title: "翻訳",
                description: "即座に翻訳。"
            },
            customRoles: {
                title: "カスタムロール",
                description: "独自のAIを作成。"
            },
            setup: {
                title: "設定",
                description: "全てをカスタマイズ。",
                list: [
                    "ショートカット",
                    "複数のモデル",
                    "PopClip連携"
                ]
            }
        },
        pricing: {
            title: "料金",
            free: {
                tier: "無料",
                tokens: "1,000トークン / 日",
                reset: "毎日リセット",
                cta: "開始"
            },
            basic: {
                tier: "ベーシック",
                period: "/ 年",
                tokens: "500,000トークン / 月",
                reset: "毎月リセット",
                cta: "購読"
            },
            pro: {
                badge: "人気",
                tier: "プロ",
                period: "/ 月",
                tokens: "10,000,000トークン / 月",
                reset: "毎月リセット",
                cta: "プロへアップグレード"
            }
        },
        benefits: {
            title: "なぜWright？",
            subtitle: "macOSネイティブ。",
            everywhere: {
                title: "どこでも",
                description: "全アプリで動作。"
            },
            free: {
                title: "無料",
                description: "ダウンロードして使用。"
            }
        },
        download: {
            title: "開始",
            description: "無料でダウンロード。",
            cta: "macOS版をダウンロード",
            guide: "ガイド",
            note: "無料プラン込み"
        },
        footer: {
            rights: "© 2026 Wright. 無断複写・転載を禁じます。",
            privacy: "プライバシー",
            support: "サポート"
        }
    }, ko: {
        meta: {
            title: "Wright - macOS용 AI 어시스턴트 | 윤문, 번역 & 채팅",
            description: "Wright는 macOS용 맞춤형 AI 어시스턴트입니다. 사용자 지정 역할을 생성하고, 텍스트를 손쉽게 윤문 및 번역하며, 대화할 수 있습니다. 키보드 단축키나 PopClip으로 모든 기능을 무료로 이용하세요."
        },
        nav: {
            features: "기능",
            download: "다운로드",
            support: "지원",
            guide: "가이드",
            toggle: "언어"
        },
        hero: {
            title: "macOS용 AI 어시스턴트",
            subtitle: "Wright는 macOS용 맞춤형 AI 어시스턴트입니다. 사용자 지정 역할을 생성하고, 텍스트를 손쉽게 윤문 및 번역하며, 대화할 수 있습니다. 키보드 단축키나 PopClip으로 모든 기능을 무료로 이용하세요.",
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
                    desc: "단계별 설정 가이드.",
                    cta: "가이드 보기"
                },
                issue: {
                    title: "문제 신고",
                    desc: "버그를 발견하셨나요?",
                    cta: "제출하기"
                }
            },
            faq: {
                title: "자주 묻는 질문",
                q1: {
                    q: "Wright는 무엇을 할 수 있나요?",
                    a: "Wright는 macOS용 AI 작문 도우미입니다.",
                    list: [
                        "<strong>윤문</strong> — 텍스트 다듬기.",
                        "<strong>번역</strong> — 즉시 번역.",
                        "<strong>채팅</strong> — AI와 대화."
                    ]
                },
                q2: {
                    q: "지원되는 모델은?",
                    a: "Wright는 주요 AI 모델을 지원합니다:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "사용자 지정 AI 역할?",
                    a: "특수 AI 페르소나를 만드세요."
                },
                q4: {
                    q: "PopClip 통합?",
                    a: "PopClip 메뉴에 액션 추가."
                },
                q5: {
                    q: "데이터는 안전한가요?",
                    a: "네. 개인 데이터를 수집하거나 저장하지 않습니다."
                },
                q6: {
                    q: "시스템 요구 사항?",
                    a: "macOS 14.0 (Sonoma) 이상."
                },
                q7: {
                    q: "키보드 단축키?",
                    a: "글로벌 사용자 지정 단축키."
                }
            },
            contact: {
                title: "문의하기",
                email: "이메일 지원",
                response: "24시간 이내 응답."
            }
        },
        privacy: {
            title: "개인정보 처리방침",
            meta: {
                title: "개인정보 | Wright",
                desc: "Wright의 개인정보 처리방침."
            },
            lastUpdated: "최종 업데이트: 2024년 3월",
            commitment: {
                title: "우리의 약속",
                text: "저희는 귀하의 개인정보를 보호합니다.",
                keyPoints: {
                    title: "주요 사항:",
                    list: [
                        "개인정보 수집 안 함",
                        "사용 추적 안 함",
                        "데이터 저장 안 함"
                    ]
                }
            },
            dataCollection: {
                title: "데이터 수집",
                text: "Wright는 개인정보를 수집하지 않습니다.",
                apiKeys: {
                    title: "API 키",
                    text: "API 키만 필요합니다.",
                    list: [
                        "macOS 키체인에 안전하게 저장",
                        "서버로 전송되지 않음",
                        "LLM과 직접 통신",
                        "언제든지 삭제 가능"
                    ]
                }
            },
            thirdParty: {
                title: "타사 서비스",
                text: "LLM과의 상호작용은 해당 정책을 따릅니다.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "데이터 보안",
                text: "키는 암호화된 macOS 키체인에 저장됩니다."
            },
            changes: {
                title: "변경 사항",
                text: "업데이트 시 알림."
            },
            contact: {
                title: "문의",
                text: "질문이 있으신가요?"
            }
        },
        howItWorks: {
            title: "작동 방식",
            subtitle: "단축키 또는 PopClip.",
            step1: {
                title: "텍스트 선택",
                description: "텍스트 강조 표시."
            },
            step2: {
                title: "단축키",
                description: "단축키 누르기."
            },
            step3: {
                title: "결과",
                description: "향상된 텍스트 표시."
            }
        },
        features: {
            title: "주요 기능",
            quickView: {
                title: "빠른 보기",
                description: "빠른 쿼리."
            },
            rewrite: {
                title: "윤문",
                description: "즉시 텍스트 개선."
            },
            translate: {
                title: "번역",
                description: "즉시 번역."
            },
            customRoles: {
                title: "사용자 지정 역할",
                description: "나만의 AI 만들기."
            },
            setup: {
                title: "설정",
                description: "모두 사용자 지정.",
                list: [
                    "단축키",
                    "다중 모델",
                    "PopClip 통합"
                ]
            }
        },
        pricing: {
            title: "요금제",
            free: {
                tier: "무료",
                tokens: "1,000 토큰 / 일",
                reset: "매일 초기화",
                cta: "시작하기"
            },
            basic: {
                tier: "베이직",
                period: "/ 년",
                tokens: "500,000 토큰 / 월",
                reset: "매월 초기화",
                cta: "구독하기"
            },
            pro: {
                badge: "인기",
                tier: "프로",
                period: "/ 월",
                tokens: "10,000,000 토큰 / 월",
                reset: "매월 초기화",
                cta: "프로로 업그레이드"
            }
        },
        benefits: {
            title: "왜 Wright인가요?",
            subtitle: "macOS 네이티브.",
            everywhere: {
                title: "어디서나",
                description: "모든 앱에서 작동."
            },
            free: {
                title: "무료",
                description: "다운로드하여 사용."
            }
        },
        download: {
            title: "시작하기",
            description: "무료 다운로드.",
            cta: "macOS용 다운로드",
            guide: "가이드",
            note: "무료 플랜 포함"
        },
        footer: {
            rights: "© 2026 Wright. All rights reserved.",
            privacy: "개인정보",
            support: "지원"
        }
    },
    ru: {
        meta: {
            title: "Wright - ИИ-ассистент для macOS | Переписывание, Перевод и Чат",
            description: "Wright — это настраиваемый ИИ-ассистент для macOS. Создавайте роли, переписывайте и переводите текст, общайтесь — все с клавиатуры или PopClip. Бесплатно."
        },
        nav: {
            features: "Функции",
            download: "Скачать",
            support: "Поддержка",
            guide: "Гайд",
            toggle: "Язык"
        },
        hero: {
            title: "Ваш ИИ-ассистент для macOS",
            subtitle: "Wright — это настраиваемый ИИ-ассистент для macOS. Создавайте роли, переписывайте и переводите текст, общайтесь — все с клавиатуры или PopClip. Бесплатно.",
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
                    desc: "Пошаговая настройка.",
                    cta: "Открыть"
                },
                issue: {
                    title: "Сообщить о проблеме",
                    desc: "Нашли баг?",
                    cta: "Отправить"
                }
            },
            faq: {
                title: "FAQ",
                q1: {
                    q: "Что умеет Wright?",
                    a: "Wright — ИИ-ассистент для macOS.",
                    list: [
                        "<strong>Переписывние</strong> — Улучшение текста.",
                        "<strong>Перевод</strong> — Мгновенный перевод.",
                        "<strong>Чат</strong> — Общение с ИИ."
                    ]
                },
                q2: {
                    q: "Какие модели поддерживаются?",
                    a: "Wright работает с:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Кастомные роли?",
                    a: "Создавайте своих ИИ-персонажей."
                },
                q4: {
                    q: "PopClip?",
                    a: "Действия прямо в меню PopClip."
                },
                q5: {
                    q: "Данные в безопасности?",
                    a: "Да. Мы не собираем и не храним ваши данные."
                },
                q6: {
                    q: "Требования?",
                    a: "macOS 14.0 (Sonoma) или новее."
                },
                q7: {
                    q: "Горячие клавиши?",
                    a: "Глобальные настраиваемые шорткаты."
                }
            },
            contact: {
                title: "Связаться",
                email: "Email поддержки",
                response: "Ответ в течение 24ч."
            }
        },
        privacy: {
            title: "Политика конфиденциальности",
            meta: {
                title: "Конфиденциальность | Wright",
                desc: "Политика конфиденциальности Wright."
            },
            lastUpdated: "Обновлено: Март 2024",
            commitment: {
                title: "Наши обязательства",
                text: "Мы защищаем вашу приватность.",
                keyPoints: {
                    title: "Главное:",
                    list: [
                        "Не собираем личные данные",
                        "Не отслеживаем использование",
                        "Не храним данные"
                    ]
                }
            },
            dataCollection: {
                title: "Сбор данных",
                text: "Wright не собирает личную информацию.",
                apiKeys: {
                    title: "API ключи",
                    text: "Нужны только ключи API.",
                    list: [
                        "Хранятся в Связке ключей macOS",
                        "Не передаются на наши серверы",
                        "Прямая связь с LLM",
                        "Удаление в любой момент"
                    ]
                }
            },
            thirdParty: {
                title: "Сторонние сервисы",
                text: "Взаимодействие с LLM регулируется их политиками.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Безопасность данных",
                text: "Ключи зашифрованы в Связке ключей macOS."
            },
            changes: {
                title: "Изменения",
                text: "Мы уведомим об обновлениях."
            },
            contact: {
                title: "Контакт",
                text: "Вопросы?"
            }
        },
        howItWorks: {
            title: "Как это работает",
            subtitle: "Шорткаты или PopClip.",
            step1: {
                title: "Выбрать",
                description: "Выделите текст."
            },
            step2: {
                title: "Нажать",
                description: "Нажмите шорткат."
            },
            step3: {
                title: "Результат",
                description: "Улучшенный текст появится."
            }
        },
        features: {
            title: "Функции",
            quickView: {
                title: "Быстрый просмотр",
                description: "Быстрые запросы."
            },
            rewrite: {
                title: "Улучшение",
                description: "Мгновенное улучшение текста."
            },
            translate: {
                title: "Перевод",
                description: "Мгновенный перевод."
            },
            customRoles: {
                title: "Роли",
                description: "Свои ИИ-персонажи."
            },
            setup: {
                title: "Настройка",
                description: "Кастомизация всего.",
                list: [
                    "Шорткаты",
                    "Разные модели",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Цены",
            free: {
                tier: "Бесплатно",
                tokens: "1,000 токенов / день",
                reset: "Ежедневный сброс",
                cta: "Начать"
            },
            basic: {
                tier: "Базовый",
                period: "/ год",
                tokens: "500,000 токенов / месяц",
                reset: "Ежемесячный сброс",
                cta: "Подписаться"
            },
            pro: {
                badge: "Популярный",
                tier: "Про",
                period: "/ месяц",
                tokens: "10,000,000 токенов / месяц",
                reset: "Ежемесячный сброс",
                cta: "Перейти на Про"
            }
        },
        benefits: {
            title: "Почему Wright?",
            subtitle: "Нативно для macOS.",
            everywhere: {
                title: "Везде",
                description: "Работает во всех приложениях."
            },
            free: {
                title: "Бесплатно",
                description: "Скачать и использовать."
            }
        },
        download: {
            title: "Начать",
            description: "Скачать бесплатно.",
            cta: "Скачать для macOS",
            guide: "Гайд",
            note: "Бесплатный план включен"
        },
        footer: {
            rights: "© 2026 Wright. Все права защищены.",
            privacy: "Конфиденциальность",
            support: "Поддержка"
        }
    }, pt: {
        meta: {
            title: "Wright - Assistente de IA para macOS | Reescrever, Traduzir e Conversar",
            description: "Wright é um assistente de IA personalizável para macOS. Crie funções personalizadas, reescreva e traduza textos sem esforço e converse — tudo a partir de um atalho de teclado ou PopClip. Gratuito para usar."
        },
        nav: {
            features: "Recursos",
            download: "Baixar",
            support: "Suporte",
            guide: "Guia",
            toggle: "Idioma"
        },
        hero: {
            title: "Seu Assistente de IA para macOS",
            subtitle: "Wright é um assistente de IA personalizável para macOS. Crie funções personalizadas, reescreva e traduza textos sem esforço e converse — tudo a partir de um atalho de teclado ou PopClip. Gratuito para usar.",
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
                    desc: "Configuração passo a passo.",
                    cta: "Ver Guia"
                },
                issue: {
                    title: "Relatar Problema",
                    desc: "Encontrou um erro?",
                    cta: "Enviar"
                }
            },
            faq: {
                title: "Perguntas Frequentes",
                q1: {
                    q: "O que o Wright faz?",
                    a: "Wright é um assistente de escrita IA para macOS.",
                    list: [
                        "<strong>Reescrever</strong> — Polir texto.",
                        "<strong>Traduzir</strong> — Tradução instantânea.",
                        "<strong>Conversar</strong> — Bate-papo com IA."
                    ]
                },
                q2: {
                    q: "Quais modelos?",
                    a: "Wright suporta:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Funções Personalizadas?",
                    a: "Crie personas de IA."
                },
                q4: {
                    q: "PopClip?",
                    a: "Ações no menu PopClip."
                },
                q5: {
                    q: "Dados seguros?",
                    a: "Sim. Não coletamos seus dados."
                },
                q6: {
                    q: "Requisitos?",
                    a: "macOS 14.0 (Sonoma) ou superior."
                },
                q7: {
                    q: "Atalhos?",
                    a: "Atalhos globais personalizáveis."
                }
            },
            contact: {
                title: "Contato",
                email: "Email de Suporte",
                response: "Resposta em 24h."
            }
        },
        privacy: {
            title: "Política de Privacidade",
            meta: {
                title: "Privacidade | Wright",
                desc: "Política de privacidade do Wright."
            },
            lastUpdated: "Atualizado: Março 2024",
            commitment: {
                title: "Compromisso",
                text: "Protegemos sua privacidade.",
                keyPoints: {
                    title: "Pontos Chave:",
                    list: [
                        "Sem coleta de dados pessoais",
                        "Sem rastreamento",
                        "Sem armazenamento de dados"
                    ]
                }
            },
            dataCollection: {
                title: "Coleta de Dados",
                text: "Wright não coleta informações pessoais.",
                apiKeys: {
                    title: "Chaves API",
                    text: "Apenas chaves API.",
                    list: [
                        "Armazenadas no Keychain do macOS",
                        "Nunca transmitidas aos nossos servidores",
                        "Comunicação direta com LLM",
                        "Removíveis a qualquer momento"
                    ]
                }
            },
            thirdParty: {
                title: "Serviços de Terceiros",
                text: "Interações regidas por suas políticas.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Segurança de Dados",
                text: "Chaves criptografadas no Keychain."
            },
            changes: {
                title: "Mudanças",
                text: "Notificaremos atualizações."
            },
            contact: {
                title: "Contato",
                text: "Dúvidas?"
            }
        },
        howItWorks: {
            title: "Como Funciona",
            subtitle: "Atalhos ou PopClip.",
            step1: {
                title: "Selecionar",
                description: "Destaque o texto."
            },
            step2: {
                title: "Atalho",
                description: "Pressione o atalho."
            },
            step3: {
                title: "Resultado",
                description: "Texto aprimorado aparece."
            }
        },
        features: {
            title: "Recursos",
            quickView: {
                title: "Visualização Rápida",
                description: "Consultas rápidas."
            },
            rewrite: {
                title: "Reescrever",
                description: "Melhorar texto instantaneamente."
            },
            translate: {
                title: "Traduzir",
                description: "Tradução instantânea."
            },
            customRoles: {
                title: "Funções Personalizadas",
                description: "Crie sua própria IA."
            },
            setup: {
                title: "Configuração",
                description: "Personalize tudo.",
                list: [
                    "Atalhos",
                    "Múltiplos Modelos",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Preços",
            free: {
                tier: "Grátis",
                tokens: "1.000 tokens / dia",
                reset: "Reset diário",
                cta: "Começar"
            },
            basic: {
                tier: "Básico",
                period: "/ ano",
                tokens: "500.000 tokens / mês",
                reset: "Reset mensal",
                cta: "Assinar"
            },
            pro: {
                badge: "Popular",
                tier: "Pro",
                period: "/ mês",
                tokens: "10.000.000 tokens / mês",
                reset: "Reset mensal",
                cta: "Ir para Pro"
            }
        },
        benefits: {
            title: "Por que Wright?",
            subtitle: "Nativo do macOS.",
            everywhere: {
                title: "Em todo lugar",
                description: "Funciona em todos os apps."
            },
            free: {
                title: "Grátis",
                description: "Baixe e use."
            }
        },
        download: {
            title: "Começar",
            description: "Baixe gratuitamente.",
            cta: "Baixar para macOS",
            guide: "Guia",
            note: "Plano grátis incluído"
        },
        footer: {
            rights: "© 2026 Wright. Todos os direitos reservados.",
            privacy: "Privacidade",
            support: "Suporte"
        }
    },
    it: {
        meta: {
            title: "Wright - Assistente AI per macOS | Riscrivi, Traduci e Chatta",
            description: "Wright è un assistente AI personalizzabile per macOS. Crea ruoli personalizzati, riscrivi e traduci testi senza sforzo e chatta: tutto da una scorciatoia da tastiera o PopClip. Gratuito."
        },
        nav: {
            features: "Funzionalità",
            download: "Scarica",
            support: "Supporto",
            guide: "Guida",
            toggle: "Lingua"
        },
        hero: {
            title: "Il tuo Assistente AI per macOS",
            subtitle: "Wright è un assistente AI personalizzabile per macOS. Crea ruoli personalizzati, riscrivi e traduci testi senza sforzo e chatta: tutto da una scorciatoia da tastiera o PopClip. Gratuito.",
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
                    desc: "Configurazione passo-passo.",
                    cta: "Vedi Guida"
                },
                issue: {
                    title: "Segnala Problema",
                    desc: "Trovato un bug?",
                    cta: "Invia"
                }
            },
            faq: {
                title: "FAQ",
                q1: {
                    q: "Cosa può fare Wright?",
                    a: "Wright è un assistente di scrittura AI per macOS.",
                    list: [
                        "<strong>Riscrivere</strong> — Rifinire il testo.",
                        "<strong>Tradurre</strong> — Traduzione istantanea.",
                        "<strong>Chattare</strong> — Chatta con l'AI."
                    ]
                },
                q2: {
                    q: "Quali modelli?",
                    a: "Wright supporta:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Ruoli Personalizzati?",
                    a: "Crea personalità AI."
                },
                q4: {
                    q: "PopClip?",
                    a: "Azioni nel menu PopClip."
                },
                q5: {
                    q: "Dati sicuri?",
                    a: "Sì. Non raccogliamo i tuoi dati."
                },
                q6: {
                    q: "Requisiti?",
                    a: "macOS 14.0 (Sonoma) o successivo."
                },
                q7: {
                    q: "Scorciatoie?",
                    a: "Scorciatoie globali personalizzabili."
                }
            },
            contact: {
                title: "Contatti",
                email: "Email Supporto",
                response: "Risposta in 24h."
            }
        },
        privacy: {
            title: "Privacy Policy",
            meta: {
                title: "Privacy | Wright",
                desc: "Privacy policy di Wright."
            },
            lastUpdated: "Aggiornato: Marzo 2024",
            commitment: {
                title: "Impegno",
                text: "Proteggiamo la tua privacy.",
                keyPoints: {
                    title: "Punti Chiave:",
                    list: [
                        "Niente dati personali",
                        "Niente tracciamento",
                        "Niente archiviazione dati"
                    ]
                }
            },
            dataCollection: {
                title: "Raccolta Dati",
                text: "Wright non raccoglie informazioni personali.",
                apiKeys: {
                    title: "Chiavi API",
                    text: "Solo chiavi API.",
                    list: [
                        "Salvate nel Portachiavi macOS",
                        "Mai trasmesse ai nostri server",
                        "Comunicazione diretta con LLM",
                        "Rimuovibili sempre"
                    ]
                }
            },
            thirdParty: {
                title: "Servizi Terzi",
                text: "Interazioni regolate dalle loro policy.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Sicurezza Dati",
                text: "Chiavi criptate nel Portachiavi."
            },
            changes: {
                title: "Modifiche",
                text: "Notificheremo aggiornamenti."
            },
            contact: {
                title: "Contatti",
                text: "Domande?"
            }
        },
        howItWorks: {
            title: "Come Funziona",
            subtitle: "Scorciatoie o PopClip.",
            step1: {
                title: "Seleziona",
                description: "Evidenzia testo."
            },
            step2: {
                title: "Scorciatoia",
                description: "Premi scorciatoia."
            },
            step3: {
                title: "Risultato",
                description: "Il testo migliorato appare."
            }
        },
        features: {
            title: "Funzionalità",
            quickView: {
                title: "Vista Rapida",
                description: "Query veloci."
            },
            rewrite: {
                title: "Riscrivi",
                description: "Migliora testo istantaneamente."
            },
            translate: {
                title: "Traduci",
                description: "Traduzione istantanea."
            },
            customRoles: {
                title: "Ruoli Personalizzati",
                description: "Crea la tua AI."
            },
            setup: {
                title: "Configurazione",
                description: "Personalizza tutto.",
                list: [
                    "Scorciatoie",
                    "Modelli Multipli",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Prezzi",
            free: {
                tier: "Gratis",
                tokens: "1.000 token / giorno",
                reset: "Reset giornaliero",
                cta: "Inizia"
            },
            basic: {
                tier: "Base",
                period: "/ anno",
                tokens: "500.000 token / mese",
                reset: "Reset mensile",
                cta: "Abbonati"
            },
            pro: {
                badge: "Popolare",
                tier: "Pro",
                period: "/ mese",
                tokens: "10.000.000 token / mese",
                reset: "Reset mensile",
                cta: "Passa a Pro"
            }
        },
        benefits: {
            title: "Perché Wright?",
            subtitle: "Nativo per macOS.",
            everywhere: {
                title: "Ovunque",
                description: "Funziona in tutte le app."
            },
            free: {
                title: "Gratis",
                description: "Scarica e usa."
            }
        },
        download: {
            title: "Inizia",
            description: "Scarica gratis.",
            cta: "Scarica per macOS",
            guide: "Guida",
            note: "Piano gratuito incluso"
        },
        footer: {
            rights: "© 2026 Wright. Tutti i diritti riservati.",
            privacy: "Privacy",
            support: "Supporto"
        }
    },
    hi: {
        meta: {
            title: "Wright - macOS के लिए AI सहायक | रिराइट, अनुवाद और चैट",
            description: "Wright macOS के लिए एक कस्टमाइज़ेबल AI सहायक है। कस्टम रोल बनाएँ, टेक्स्ट को आसानी से रिराइट और अनुवाद करें, और चैट करें — सब कुछ कीबोर्ड शॉर्टकट या PopClip से। उपयोग करने के लिए मुफ़्त।"
        },
        nav: {
            features: "विशेषताएँ",
            download: "डाउनलोड",
            support: "सहायता",
            guide: "गाइड",
            toggle: "भाषा"
        },
        hero: {
            title: "macOS के लिए आपका AI सहायक",
            subtitle: "Wright macOS के लिए एक कस्टमाइज़ेबल AI सहायक है। कस्टम रोल बनाएँ, टेक्स्ट को आसानी से रिराइट और अनुवाद करें, और चैट करें — सब कुछ कीबोर्ड शॉर्टकट या PopClip से। उपयोग करने के लिए मुफ़्त।",
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
                    desc: "चरण-दर-चरण सेटअप।",
                    cta: "गाइड देखें"
                },
                issue: {
                    title: "समस्या रिपोर्ट करें",
                    desc: "कोई बग मिला?",
                    cta: "जमा करें"
                }
            },
            faq: {
                title: "अक्सर पूछे जाने वाले प्रश्न",
                q1: {
                    q: "Wright क्या कर सकता है?",
                    a: "Wright macOS के लिए एक AI लेखन सहायक है।",
                    list: [
                        "<strong>रिराइट</strong> — टेक्स्ट को पॉलिश करें।",
                        "<strong>अनुवाद</strong> — तत्काल अनुवाद।",
                        "<strong>चैट</strong> — AI के साथ चैट।",
                    ]
                },
                q2: {
                    q: "कौन से मॉडल समर्थित हैं?",
                    a: "Wright इनका समर्थन करता है:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "कस्टम AI रोल?",
                    a: "विशिष्ट AI व्यक्तित्व बनाएँ।"
                },
                q4: {
                    q: "PopClip एकीकरण?",
                    a: "PopClip मेनू में क्रियाएँ जोड़ें।"
                },
                q5: {
                    q: "क्या डेटा सुरक्षित है?",
                    a: "हाँ। हम डेटा एकत्र या संग्रहीत नहीं करते हैं।"
                },
                q6: {
                    q: "सिस्टम आवश्यकताएँ?",
                    a: "macOS 14.0 (Sonoma) या नया।"
                },
                q7: {
                    q: "कीबोर्ड शॉर्टकट?",
                    a: "ग्लोबल कस्टमाइज़ेबल शॉर्टकट।"
                }
            },
            contact: {
                title: "संपर्क",
                email: "ईमेल सहायता",
                response: "24 घंटे में उत्तर।"
            }
        },
        privacy: {
            title: "गोपनीयता नीति",
            meta: {
                title: "गोपनीयता | Wright",
                desc: "Wright की गोपनीयता नीति।"
            },
            lastUpdated: "अंतिम अपडेट: मार्च 2024",
            commitment: {
                title: "हमारा वादा",
                text: "हम आपकी गोपनीयता की रक्षा करते हैं।",
                keyPoints: {
                    title: "मुख्य बिंदु:",
                    list: [
                        "कोई व्यक्तिगत डेटा संग्रह नहीं",
                        "कोई ट्रैकिंग नहीं",
                        "कोई डेटा संग्रहण नहीं"
                    ]
                }
            },
            dataCollection: {
                title: "डेटा संग्रह",
                text: "Wright व्यक्तिगत जानकारी एकत्र नहीं करता है।",
                apiKeys: {
                    title: "API कुंजियाँ",
                    text: "केवल API कुंजियाँ आवश्यक हैं।",
                    list: [
                        "macOS कीचेन में सुरक्षित",
                        "सर्वर पर कभी नहीं भेजी जातीं",
                        "LLM के साथ सीधा संचार",
                        "कभी भी हटा सकते हैं"
                    ]
                }
            },
            thirdParty: {
                title: "तीसरे पक्ष की सेवाएँ",
                text: "LLM इंटरैक्शन उनकी नीतियों द्वारा शासित होते हैं।",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "डेटा सुरक्षा",
                text: "कीचेन में एन्क्रिप्टेड कुंजियाँ।"
            },
            changes: {
                title: "परिवर्तन",
                text: "हम अपडेट के बारे में सूचित करेंगे।"
            },
            contact: {
                title: "संपर्क",
                text: "कोई प्रश्न?"
            }
        },
        howItWorks: {
            title: "यह कैसे काम करता है",
            subtitle: "शॉर्टकट या PopClip।",
            step1: {
                title: "चुनें",
                description: "टेक्स्ट हाइलाइट करें।"
            },
            step2: {
                title: "शॉर्टकट",
                description: "शॉर्टकट दबाएँ।"
            },
            step3: {
                title: "परिणाम",
                description: "बेहतर टेक्स्ट दिखाई देता है।"
            }
        },
        features: {
            title: "विशेषताएँ",
            quickView: {
                title: "त्वरित दृश्य",
                description: "त्वरित प्रश्न।"
            },
            rewrite: {
                title: "रिराइट",
                description: "टेक्स्ट को तुरंत सुधारें।"
            },
            translate: {
                title: "अनुवाद",
                description: "तत्काल अनुवाद।"
            },
            customRoles: {
                title: "कस्टम रोल",
                description: "अपना खुद का AI बनाएँ।"
            },
            setup: {
                title: "सेटअप",
                description: "सब कुछ कस्टमाइज़ करें।",
                list: [
                    "शॉर्टकट",
                    "एकाधिक मॉडल",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "मूल्य निर्धारण",
            free: {
                tier: "मुफ़्त",
                tokens: "1,000 टोकन / दिन",
                reset: "दैनिक रीसेट",
                cta: "शुरू करें"
            },
            basic: {
                tier: "बेसिक",
                period: "/ वर्ष",
                tokens: "500,000 टोकन / महीना",
                reset: "मासिक रीसेट",
                cta: "सब्सक्राइब करें"
            },
            pro: {
                badge: "लोकप्रिय",
                tier: "प्रो",
                period: "/ महीना",
                tokens: "10,000,000 टोकन / महीना",
                reset: "मासिक रीसेट",
                cta: "प्रो में अपग्रेड करें"
            }
        },
        benefits: {
            title: "Wright क्यों?",
            subtitle: "macOS के लिए नेटिव।",
            everywhere: {
                title: "हर जगह",
                description: "सभी ऐप्स में काम करता है।"
            },
            free: {
                title: "मुफ़्त",
                description: "डाउनलोड करें और उपयोग करें।"
            }
        },
        download: {
            title: "शुरू करें",
            description: "मुफ़्त डाउनलोड करें।",
            cta: "macOS के लिए डाउनलोड करें",
            guide: "गाइड",
            note: "मुफ़्त प्लान शामिल"
        },
        footer: {
            rights: "© 2026 Wright. सर्वाधिकार सुरक्षित।",
            privacy: "गोपनीयता",
            support: "सहायता"
        }
    },
    ar: {
        meta: {
            title: "Wright - مساعد الذكاء الاصطناعي لنظام macOS | إعادة صياغة، ترجمة ودردشة",
            description: "Wright هو مساعد ذكاء اصطناعي قابل للتخصيص لنظام macOS. أنشئ أدوارًا مخصصة، وأعد صياغة النصوص وترجمها بسهولة، ودردش — كل ذلك من اختصار لوحة المفاتيح أو PopClip. مجاني للاستخدام."
        },
        nav: {
            features: "الميزات",
            download: "تحميل",
            support: "الدعم",
            guide: "الدليل",
            toggle: "اللغة"
        },
        hero: {
            title: "مساعد الذكاء الاصطناعي لنظام macOS",
            subtitle: "Wright هو مساعد ذكاء اصطناعي قابل للتخصيص لنظام macOS. أنشئ أدوارًا مخصصة، وأعد صياغة النصوص وترجمها بسهولة، ودردش — كل ذلك من اختصار لوحة المفاتيح أو PopClip. مجاني للاستخدام.",
            download: "تحميل لنظام macOS"
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
                    step2: { title: "2. المفتاح", list: ["اسم المستخدم ← \"API Keys\"", "\"Create API Key\"", "نسخ المفتاح"] }
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
                    desc: "إعداد خطوة بخطوة.",
                    cta: "عرض الدليل"
                },
                issue: {
                    title: "الإبلاغ عن مشكلة",
                    desc: "هل وجدت خطأ؟",
                    cta: "إرسال"
                }
            },
            faq: {
                title: "الأسئلة الشائعة",
                q1: {
                    q: "ماذا يمكن لـ Wright أن يفعل؟",
                    a: "Wright هو مساعد كتابة بالذكاء الاصطناعي لنظام macOS.",
                    list: [
                        "<strong>إعادة صياغة</strong> — تلميع النصوص.",
                        "<strong>ترجمة</strong> — ترجمة فورية.",
                        "<strong>دردشة</strong> — محادثة مع الذكاء الاصطناعي."
                    ]
                },
                q2: {
                    q: "ما هي النماذج المدعومة؟",
                    a: "يدعم Wright:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "أدوار مخصصة؟",
                    a: "أنشئ شخصيات ذكاء اصطناعي خاصة."
                },
                q4: {
                    q: "تكامل PopClip؟",
                    a: "إجراءات في قائمة PopClip."
                },
                q5: {
                    q: "هل بياناتي آمنة؟",
                    a: "نعم. نحن لا نجمع بياناتك."
                },
                q6: {
                    q: "متطلبات النظام؟",
                    a: "macOS 14.0 (Sonoma) أو أحدث."
                },
                q7: {
                    q: "اختصارات لوحة المفاتيح؟",
                    a: "اختصارات عالمية قابلة للتخصيص."
                }
            },
            contact: {
                title: "اتصل بنا",
                email: "دعم البريد الإلكتروني",
                response: "الرد خلال 24 ساعة."
            }
        },
        privacy: {
            title: "سياسة الخصوصية",
            meta: {
                title: "الخصوصية | Wright",
                desc: "سياسة خصوصية Wright."
            },
            lastUpdated: "آخر تحديث: مارس 2024",
            commitment: {
                title: "التزامنا",
                text: "نحمي خصوصيتك.",
                keyPoints: {
                    title: "نقاط رئيسية:",
                    list: [
                        "لا نجمع بيانات شخصية",
                        "لا نتتبع الاستخدام",
                        "لا نخزن البيانات"
                    ]
                }
            },
            dataCollection: {
                title: "جمع البيانات",
                text: "لا يجمع Wright معلومات شخصية.",
                apiKeys: {
                    title: "مفاتيح API",
                    text: "مفاتيح API فقط مطلوبة.",
                    list: [
                        "محفوظة في سلسلة مفاتيح macOS",
                        "لا ترسل أبدًا إلى خوادمنا",
                        "اتصال مباشر مع LLM",
                        "يمكن إزالتها في أي وقت"
                    ]
                }
            },
            thirdParty: {
                title: "خدمات الطرف الثالث",
                text: "تخضع التفاعلات لسياساتهم.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "أمان البيانات",
                text: "المفاتيح مشفرة في سلسلة المفاتيح."
            },
            changes: {
                title: "التغييرات",
                text: "سنبلغ عن التحديثات."
            },
            contact: {
                title: "اتصال",
                text: "أسئلة؟"
            }
        },
        howItWorks: {
            title: "كيف يعمل",
            subtitle: "اختصارات أو PopClip.",
            step1: {
                title: "تحديد",
                description: "ظلل النص."
            },
            step2: {
                title: "اختصار",
                description: "اضغط الاختصار."
            },
            step3: {
                title: "النتيجة",
                description: "يظهر النص المحسن."
            }
        },
        features: {
            title: "الميزات",
            quickView: {
                title: "نظرة سريعة",
                description: "استعلامات سريعة."
            },
            rewrite: {
                title: "إعادة صياغة",
                description: "تحسين النص فورًا."
            },
            translate: {
                title: "ترجمة",
                description: "ترجمة فورية."
            },
            customRoles: {
                title: "أدوار مخصصة",
                description: "اصنع الذكاء الاصطناعي الخاص بك."
            },
            setup: {
                title: "إعداد",
                description: "خصص كل شيء.",
                list: [
                    "اختصارات",
                    "نماذج متعددة",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "الأسعار",
            free: {
                tier: "مجاني",
                tokens: "1,000 رمز / يوم",
                reset: "إعادة تعيين يومي",
                cta: "بدء"
            },
            basic: {
                tier: "أساسي",
                period: "/ سنة",
                tokens: "500,000 رمز / شهر",
                reset: "إعادة تعيين شهري",
                cta: "اشتراك"
            },
            pro: {
                badge: "شائع",
                tier: "احترافي",
                period: "/ شهر",
                tokens: "10,000,000 رمز / شهر",
                reset: "إعادة تعيين شهري",
                cta: "ترقية إلى Pro"
            }
        },
        benefits: {
            title: "لماذا Wright؟",
            subtitle: "أصلي لـ macOS.",
            everywhere: {
                title: "في كل مكان",
                description: "يعمل في كل التطبيقات."
            },
            free: {
                title: "مجاني",
                description: "حمل واستخدم."
            }
        },
        download: {
            title: "ابدأ",
            description: "تحميل مجاني.",
            cta: "تحميل لنظام macOS",
            guide: "الدليل",
            note: "الخطة المجانية مشمولة"
        },
        footer: {
            rights: "© 2026 Wright. جميع الحقوق محفوظة.",
            privacy: "الخصوصية",
            support: "الدعم"
        }
    }, tr: {
        meta: {
            title: "Wright - macOS için Yapay Zeka Asistanı | Yeniden Yaz, Çevir ve Sohbet Et",
            description: "Wright, macOS için özelleştirilebilir bir yapay zeka asistanıdır. Özel roller oluşturun, metni zahmetsizce yeniden yazın ve çevirin ve sohbet edin - hepsi bir klavye kısayolu veya PopClip ile. Kullanımı ücretsiz."
        },
        nav: {
            features: "Özellikler",
            download: "İndir",
            support: "Destek",
            guide: "Kılavuz",
            toggle: "Dil"
        },
        hero: {
            title: "macOS için Yapay Zeka Asistanınız",
            subtitle: "Wright, macOS için özelleştirilebilir bir yapay zeka asistanıdır. Özel roller oluşturun, metni zahmetsizce yeniden yazın ve çevirin ve sohbet edin - hepsi bir klavye kısayolu veya PopClip ile. Kullanımı ücretsiz.",
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
                    desc: "Adım adım kurulum.",
                    cta: "Kılavuzu Görüntüle"
                },
                issue: {
                    title: "Sorun Bildir",
                    desc: "Hata mı buldunuz?",
                    cta: "Gönder"
                }
            },
            faq: {
                title: "SSS",
                q1: {
                    q: "Wright neler yapabilir?",
                    a: "Wright, macOS için bir yapay zeka yazma asistanıdır.",
                    list: [
                        "<strong>Yeniden Yaz</strong> — Metni parlatın.",
                        "<strong>Çevir</strong> — Anında çeviri.",
                        "<strong>Sohbet</strong> — Yapay zeka ile sohbet edin."
                    ]
                },
                q2: {
                    q: "Hangi modeller destekleniyor?",
                    a: "Wright şunları destekler:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Özel Roller?",
                    a: "Yapay zeka kişilikleri oluşturun."
                },
                q4: {
                    q: "PopClip entegrasyonu?",
                    a: "PopClip menüsüne eylemler ekleyin."
                },
                q5: {
                    q: "Verilerim güvende mi?",
                    a: "Evet. Verilerinizi toplamıyoruz veya saklamıyoruz."
                },
                q6: {
                    q: "Sistem gereksinimleri?",
                    a: "macOS 14.0 (Sonoma) veya daha yenisi."
                },
                q7: {
                    q: "Klavye kısayolları?",
                    a: "Genel özelleştirilebilir kısayollar."
                }
            },
            contact: {
                title: "İletişim",
                email: "E-posta Desteği",
                response: "24 saat içinde yanıt."
            }
        },
        privacy: {
            title: "Gizlilik Politikası",
            meta: {
                title: "Gizlilik | Wright",
                desc: "Wright gizlilik politikası."
            },
            lastUpdated: "Son güncelleme: Mart 2024",
            commitment: {
                title: "Taahhüdümüz",
                text: "Gizliliğinizi koruyoruz.",
                keyPoints: {
                    title: "Önemli Noktalar:",
                    list: [
                        "Kişisel veri toplama yok",
                        "İzleme yok",
                        "Veri depolama yok"
                    ]
                }
            },
            dataCollection: {
                title: "Veri Toplama",
                text: "Wright kişisel bilgileri toplamaz.",
                apiKeys: {
                    title: "API Anahtarları",
                    text: "Yalnızca API anahtarları gereklidir.",
                    list: [
                        "macOS Anahtar Zincirinde saklanır",
                        "Asla sunucularımıza iletilmez",
                        "LLM ile doğrudan iletişim",
                        "İstediğiniz zaman kaldırılabilir"
                    ]
                }
            },
            thirdParty: {
                title: "Üçüncü Taraf Hizmetleri",
                text: "Etkileşimler onların politikalarına tabidir.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Veri Güvenliği",
                text: "Anahtarlar Anahtar Zincirinde şifrelenir."
            },
            changes: {
                title: "Değişiklikler",
                text: "Güncellemeleri bildireceğiz."
            },
            contact: {
                title: "İletişim",
                text: "Sorularınız mı var?"
            }
        },
        howItWorks: {
            title: "Nasıl Çalışır",
            subtitle: "Kısayollar veya PopClip.",
            step1: {
                title: "Seç",
                description: "Metni vurgulayın."
            },
            step2: {
                title: "Kısayol",
                description: "Kısayola basın."
            },
            step3: {
                title: "Sonuç",
                description: "Geliştirilmiş metin görünür."
            }
        },
        features: {
            title: "Özellikler",
            quickView: {
                title: "Hızlı Görünüm",
                description: "Hızlı sorgular."
            },
            rewrite: {
                title: "Yeniden Yaz",
                description: "Metni anında iyileştirin."
            },
            translate: {
                title: "Çevir",
                description: "Anında çeviri."
            },
            customRoles: {
                title: "Özel Roller",
                description: "Kendi yapay zekanızı yapın."
            },
            setup: {
                title: "Kurulum",
                description: "Her şeyi özelleştirin.",
                list: [
                    "Kısayollar",
                    "Çoklu Modeller",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Fiyatlandırma",
            free: {
                tier: "Ücretsiz",
                tokens: "1,000 jeton / gün",
                reset: "Günlük sıfırlama",
                cta: "Başla"
            },
            basic: {
                tier: "Temel",
                period: "/ yıl",
                tokens: "500,000 jeton / ay",
                reset: "Aylık sıfırlama",
                cta: "Abone Ol"
            },
            pro: {
                badge: "Popüler",
                tier: "Pro",
                period: "/ ay",
                tokens: "10,000,000 jeton / ay",
                reset: "Aylık sıfırlama",
                cta: "Pro'ya Yükselt"
            }
        },
        benefits: {
            title: "Neden Wright?",
            subtitle: "macOS için yerel.",
            everywhere: {
                title: "Her Yerde",
                description: "Tüm uygulamalarda çalışır."
            },
            free: {
                title: "Ücretsiz",
                description: "İndirin ve kullanın."
            }
        },
        download: {
            title: "Başla",
            description: "Ücretsiz indirin.",
            cta: "macOS için İndir",
            guide: "Kılavuz",
            note: "Ücretsiz plan dahil"
        },
        footer: {
            rights: "© 2026 Wright. Tüm hakları saklıdır.",
            privacy: "Gizlilik",
            support: "Destek"
        }
    },
    vi: {
        meta: {
            title: "Wright - Trợ lý AI cho macOS | Viết lại, Dịch & Trò chuyện",
            description: "Wright là trợ lý AI tùy chỉnh cho macOS. Tạo vai trò tùy chỉnh, viết lại và dịch văn bản dễ dàng, và trò chuyện — tất cả từ phím tắt hoặc PopClip. Miễn phí sử dụng."
        },
        nav: {
            features: "Tính năng",
            download: "Tải xuống",
            support: "Hỗ trợ",
            guide: "Hướng dẫn",
            toggle: "Ngôn ngữ"
        },
        hero: {
            title: "Trợ lý AI của bạn cho macOS",
            subtitle: "Wright là trợ lý AI tùy chỉnh cho macOS. Tạo vai trò tùy chỉnh, viết lại và dịch văn bản dễ dàng, và trò chuyện — tất cả từ phím tắt hoặc PopClip. Miễn phí sử dụng.",
            download: "Tải xuống cho macOS"
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
                    desc: "Thiết lập từng bước.",
                    cta: "Xem Hướng dẫn"
                },
                issue: {
                    title: "Báo cáo Vấn đề",
                    desc: "Tìm thấy lỗi?",
                    cta: "Gửi"
                }
            },
            faq: {
                title: "Câu hỏi thường gặp",
                q1: {
                    q: "Wright có thể làm gì?",
                    a: "Wright là trợ lý viết AI cho macOS.",
                    list: [
                        "<strong>Viết lại</strong> — Chỉnh sửa văn bản.",
                        "<strong>Dịch</strong> — Dịch tức thì.",
                        "<strong>Trò chuyện</strong> — Trò chuyện với AI."
                    ]
                },
                q2: {
                    q: "Mô hình nào được hỗ trợ?",
                    a: "Wright hỗ trợ:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Vai trò Tùy chỉnh?",
                    a: "Tạo nhân cách AI."
                },
                q4: {
                    q: "Tích hợp PopClip?",
                    a: "Thêm hành động vào menu PopClip."
                },
                q5: {
                    q: "Dữ liệu có an toàn không?",
                    a: "Có. Chúng tôi không thu thập dữ liệu của bạn."
                },
                q6: {
                    q: "Yêu cầu hệ thống?",
                    a: "macOS 14.0 (Sonoma) hoặc mới hơn."
                },
                q7: {
                    q: "Phím tắt?",
                    a: "Phím tắt toàn cầu có thể tùy chỉnh."
                }
            },
            contact: {
                title: "Liên hệ",
                email: "Hỗ trợ Email",
                response: "Phản hồi trong 24 giờ."
            }
        },
        privacy: {
            title: "Chính sách Quyền riêng tư",
            meta: {
                title: "Quyền riêng tư | Wright",
                desc: "Chính sách quyền riêng tư của Wright."
            },
            lastUpdated: "Cập nhật lần cuối: Tháng 3 2024",
            commitment: {
                title: "Cam kết của chúng tôi",
                text: "Chúng tôi bảo vệ quyền riêng tư của bạn.",
                keyPoints: {
                    title: "Điểm chính:",
                    list: [
                        "Không thu thập dữ liệu cá nhân",
                        "Không theo dõi",
                        "Không lưu trữ dữ liệu"
                    ]
                }
            },
            dataCollection: {
                title: "Thu thập Dữ liệu",
                text: "Wright không thu thập thông tin cá nhân.",
                apiKeys: {
                    title: "Khóa API",
                    text: "Chỉ cần khóa API.",
                    list: [
                        "Lưu trữ trong Keychain macOS",
                        "Không bao giờ gửi đến máy chủ của chúng tôi",
                        "Giao tiếp trực tiếp với LLM",
                        "Có thể xóa bất cứ lúc nào"
                    ]
                }
            },
            thirdParty: {
                title: "Dịch vụ của Bên thứ ba",
                text: "Tương tác tuân theo chính sách của họ.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Bảo mật Dữ liệu",
                text: "Khóa được mã hóa trong Keychain."
            },
            changes: {
                title: "Thay đổi",
                text: "Chúng tôi sẽ thông báo cập nhật."
            },
            contact: {
                title: "Liên hệ",
                text: "Câu hỏi?"
            }
        },
        howItWorks: {
            title: "Cách hoạt động",
            subtitle: "Phím tắt hoặc PopClip.",
            step1: {
                title: "Chọn",
                description: "Bôi đen văn bản."
            },
            step2: {
                title: "Phím tắt",
                description: "Nhấn phím tắt."
            },
            step3: {
                title: "Kết quả",
                description: "Văn bản cải tiến xuất hiện."
            }
        },
        features: {
            title: "Tính năng",
            quickView: {
                title: "Xem Nhanh",
                description: "Truy vấn nhanh."
            },
            rewrite: {
                title: "Viết lại",
                description: "Cải thiện văn bản ngay lập tức."
            },
            translate: {
                title: "Dịch",
                description: "Dịch tức thì."
            },
            customRoles: {
                title: "Vai trò Tùy chỉnh",
                description: "Tạo AI của riêng bạn."
            },
            setup: {
                title: "Thiết lập",
                description: "Tùy chỉnh mọi thứ.",
                list: [
                    "Phím tắt",
                    "Nhiều Mô hình",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Giá cả",
            free: {
                tier: "Miễn phí",
                tokens: "1,000 token / ngày",
                reset: "Đặt lại hàng ngày",
                cta: "Bắt đầu"
            },
            basic: {
                tier: "Cơ bản",
                period: "/ năm",
                tokens: "500,000 token / tháng",
                reset: "Đặt lại hàng tháng",
                cta: "Đăng ký"
            },
            pro: {
                badge: "Phổ biến",
                tier: "Pro",
                period: "/ tháng",
                tokens: "10,000,000 token / tháng",
                reset: "Đặt lại hàng tháng",
                cta: "Nâng cấp lên Pro"
            }
        },
        benefits: {
            title: "Tại sao chọn Wright?",
            subtitle: "Gốc cho macOS.",
            everywhere: {
                title: "Mọi nơi",
                description: "Hoạt động trong mọi ứng dụng."
            },
            free: {
                title: "Miễn phí",
                description: "Tải xuống và sử dụng."
            }
        },
        download: {
            title: "Bắt đầu",
            description: "Tải xuống miễn phí.",
            cta: "Tải xuống cho macOS",
            guide: "Hướng dẫn",
            note: "Bao gồm gói miễn phí"
        },
        footer: {
            rights: "© 2026 Wright. Mọi quyền được bảo lưu.",
            privacy: "Quyền riêng tư",
            support: "Hỗ trợ"
        }
    }, nl: {
        meta: {
            title: "Wright - AI-assistent voor macOS | Herschrijven, Vertalen & Chatten",
            description: "Wright is een aanpasbare AI-assistent voor macOS. Creëer aangepaste rollen, herschrijf en vertaal tekst moeiteloos, en chat — allemaal via een sneltoets of PopClip. Gratis te gebruiken."
        },
        nav: {
            features: "Functies",
            download: "Downloaden",
            support: "Ondersteuning",
            guide: "Gids",
            toggle: "Taal"
        },
        hero: {
            title: "Uw AI-assistent voor macOS",
            subtitle: "Wright is een aanpasbare AI-assistent voor macOS. Creëer aangepaste rollen, herschrijf en vertaal tekst moeiteloos, en chat — allemaal via een sneltoets of PopClip. Gratis te gebruiken.",
            download: "Downloaden voor macOS"
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
                    desc: "Stap-voor-stap installatie.",
                    cta: "Bekijk Gids"
                },
                issue: {
                    title: "Probleem Melden",
                    desc: "Bug gevonden?",
                    cta: "Verzenden"
                }
            },
            faq: {
                title: "Veelgestelde Vragen",
                q1: {
                    q: "Wat kan Wright doen?",
                    a: "Wright is een AI-schrijfassistent voor macOS.",
                    list: [
                        "<strong>Herschrijven</strong> — Tekst polijsten.",
                        "<strong>Vertalen</strong> — Directe vertaling.",
                        "<strong>Chatten</strong> — Chat met AI."
                    ]
                },
                q2: {
                    q: "Welke modellen worden ondersteund?",
                    a: "Wright ondersteunt:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Aangepaste Rollen?",
                    a: "Creëer AI-persoonlijkheden."
                },
                q4: {
                    q: "PopClip-integratie?",
                    a: "Acties toevoegen aan PopClip-menu."
                },
                q5: {
                    q: "Zijn mijn gegevens veilig?",
                    a: "Ja. We verzamelen uw gegevens niet."
                },
                q6: {
                    q: "Systeemvereisten?",
                    a: "macOS 14.0 (Sonoma) of nieuwer."
                },
                q7: {
                    q: "Sneltoetsen?",
                    a: "Globale aanpasbare sneltoetsen."
                }
            },
            contact: {
                title: "Contact",
                email: "E-mailondersteuning",
                response: "Reactie binnen 24u."
            }
        },
        privacy: {
            title: "Privacybeleid",
            meta: {
                title: "Privacy | Wright",
                desc: "Wright privacybeleid."
            },
            lastUpdated: "Laatst bigewerkt: Maart 2024",
            commitment: {
                title: "Onze Belofte",
                text: "Wij beschermen uw privacy.",
                keyPoints: {
                    title: "Belangrijkste Punten:",
                    list: [
                        "Geen verzameling van persoonlijke gegevens",
                        "Geen tracking",
                        "Geen gegevensopslag"
                    ]
                }
            },
            dataCollection: {
                title: "Gegevensverzameling",
                text: "Wright verzamelt geen persoonlijke informatie.",
                apiKeys: {
                    title: "API-sleutels",
                    text: "Alleen API-sleutels nodig.",
                    list: [
                        "Opgeslagen in macOS Sleutelhanger",
                        "Nooit verzonden naar onze servers",
                        "Directe communicatie met LLM",
                        "Op elk moment te verwijderen"
                    ]
                }
            },
            thirdParty: {
                title: "Diensten van Derden",
                text: "Interacties vallen onder hun beleid.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Gegevensbeveiliging",
                text: "Sleutels versleuteld in Sleutelhanger."
            },
            changes: {
                title: "Wijzigingen",
                text: "We zullen updates melden."
            },
            contact: {
                title: "Contact",
                text: "Vragen?"
            }
        },
        howItWorks: {
            title: "Hoe het Werkt",
            subtitle: "Sneltoetsen of PopClip.",
            step1: {
                title: "Selecteren",
                description: "Markeer tekst."
            },
            step2: {
                title: "Sneltoets",
                description: "Druk op sneltoets."
            },
            step3: {
                title: "Resultaat",
                description: "Verbeterde tekst verschijnt."
            }
        },
        features: {
            title: "Functies",
            quickView: {
                title: "Snel Bekijken",
                description: "Snelle vragen."
            },
            rewrite: {
                title: "Herschrijven",
                description: "Tekst direct verbeteren."
            },
            translate: {
                title: "Vertalen",
                description: "Directe vertaling."
            },
            customRoles: {
                title: "Aangepaste Rollen",
                description: "Maak uw eigen AI."
            },
            setup: {
                title: "Installatie",
                description: "Pas alles aan.",
                list: [
                    "Sneltoetsen",
                    "Meerdere Modellen",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Prijzen",
            free: {
                tier: "Gratis",
                tokens: "1.000 tokens / dag",
                reset: "Dagelijkse reset",
                cta: "Starten"
            },
            basic: {
                tier: "Basis",
                period: "/ jaar",
                tokens: "500.000 tokens / maand",
                reset: "Maandelijkse reset",
                cta: "Abonneren"
            },
            pro: {
                badge: "Populair",
                tier: "Pro",
                period: "/ maand",
                tokens: "10.000.000 tokens / maand",
                reset: "Maandelijkse reset",
                cta: "Upgrade naar Pro"
            }
        },
        benefits: {
            title: "Waarom Wright?",
            subtitle: "Native voor macOS.",
            everywhere: {
                title: "Overal",
                description: "Werkt in alle apps."
            },
            free: {
                title: "Gratis",
                description: "Downloaden en gebruiken."
            }
        },
        download: {
            title: "Starten",
            description: "Gratis downloaden.",
            cta: "Downloaden voor macOS",
            guide: "Gids",
            note: "Gratis abonnement inbegrepen"
        },
        footer: {
            rights: "© 2026 Wright. Alle rechten voorbehouden.",
            privacy: "Privacy",
            support: "Ondersteuning"
        }
    },
    pl: {
        meta: {
            title: "Wright - Asystent AI dla macOS | Przeredaguj, Tłumacz i Czatuj",
            description: "Wright to konfigurowalny asystent AI dla macOS. Twórz własne role, bez wysiłku przeredagowuj i tłumacż tekst oraz czatuj — wszystko za pomocą skrótu klawiszowego lub PopClip. Darmowy w użyciu."
        },
        nav: {
            features: "Funkcje",
            download: "Pobierz",
            support: "Wsparcie",
            guide: "Przewodnik",
            toggle: "Język"
        },
        hero: {
            title: "Twój Asystent AI dla macOS",
            subtitle: "Wright to konfigurowalny asystent AI dla macOS. Twórz własne role, bez wysiłku przeredagowuj i tłumacż tekst oraz czatuj — wszystko za pomocą skrótu klawiszowego lub PopClip. Darmowy w użyciu.",
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
                    desc: "Konfiguracja krok po kroku.",
                    cta: "Zobacz Przewodnik"
                },
                issue: {
                    title: "Zgłoś Problem",
                    desc: "Znalazłeś błąd?",
                    cta: "Wyślij"
                }
            },
            faq: {
                title: "FAQ",
                q1: {
                    q: "Co może robić Wright?",
                    a: "Wright to asystent pisania AI dla macOS.",
                    list: [
                        "<strong>Przeredaguj</strong> — Polerowanie tekstu.",
                        "<strong>Tłumacz</strong> — Tłumaczenie natychmiastowe.",
                        "<strong>Czatuj</strong> — Czat z AI."
                    ]
                },
                q2: {
                    q: "Jakie modele są obsługiwane?",
                    a: "Wright obsługuje:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Własne Role?",
                    a: "Twórz osobowości AI."
                },
                q4: {
                    q: "Integracja z PopClip?",
                    a: "Dodaj akcje do menu PopClip."
                },
                q5: {
                    q: "Czy moje dane są bezpieczne?",
                    a: "Tak. Nie zbieramy Twoich danych."
                },
                q6: {
                    q: "Wymagania systemowe?",
                    a: "macOS 14.0 (Sonoma) lub nowszy."
                },
                q7: {
                    q: "Skróty klawiszowe?",
                    a: "Globalne konfigurowalne skróty."
                }
            },
            contact: {
                title: "Kontakt",
                email: "Wsparcie Email",
                response: "Odpowiedź w 24h."
            }
        },
        privacy: {
            title: "Polityka Prywatności",
            meta: {
                title: "Prywatność | Wright",
                desc: "Polityka prywatności Wright."
            },
            lastUpdated: "Ostatnia aktualizacja: Marzec 2024",
            commitment: {
                title: "Nasze Zobowiązanie",
                text: "Chronimy Twoją prywatność.",
                keyPoints: {
                    title: "Kluczowe Punkty:",
                    list: [
                        "Brak zbierania danych osobowych",
                        "Brak śledzenia",
                        "Brak przechowywania danych"
                    ]
                }
            },
            dataCollection: {
                title: "Zbieranie Danych",
                text: "Wright nie zbiera danych osobowych.",
                apiKeys: {
                    title: "Klucze API",
                    text: "Tylko klucze API są wymagane.",
                    list: [
                        "Przechowywane w pęku kluczy macOS",
                        "Nigdy nie wysyłane na nasze serwery",
                        "Bezpośrednia komunikacja z LLM",
                        "Możliwość usunięcia w każdej chwili"
                    ]
                }
            },
            thirdParty: {
                title: "Usługi Stron Trzecich",
                text: "Interakcje podlegają ich politykom.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Bezpieczeństwo Danych",
                text: "Klucze szyfrowane w pęku kluczy."
            },
            changes: {
                title: "Zmiany",
                text: "Powiadomimy o aktualizacjach."
            },
            contact: {
                title: "Kontakt",
                text: "Pytania?"
            }
        },
        howItWorks: {
            title: "Jak to Działa",
            subtitle: "Skróty lub PopClip.",
            step1: {
                title: "Wybierz",
                description: "Zaznacz tekst."
            },
            step2: {
                title: "Skrót",
                description: "Naciśnij skrót."
            },
            step3: {
                title: "Wynik",
                description: "Pojawia się ulepszony tekst."
            }
        },
        features: {
            title: "Funkcje",
            quickView: {
                title: "Szybki Podgląd",
                description: "Szybkie zapytania."
            },
            rewrite: {
                title: "Przeredaguj",
                description: "Natychmiast ulepsz tekst."
            },
            translate: {
                title: "Tłumacz",
                description: "Tłumaczenie natychmiastowe."
            },
            customRoles: {
                title: "Własne Role",
                description: "Stwórz własne AI."
            },
            setup: {
                title: "Konfiguracja",
                description: "Dostosuj wszystko.",
                list: [
                    "Skróty",
                    "Wiele Modeli",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Cennik",
            free: {
                tier: "Darmowy",
                tokens: "1,000 tokenów / dzień",
                reset: "Reset codzienny",
                cta: "Zacznij"
            },
            basic: {
                tier: "Podstawowy",
                period: "/ rok",
                tokens: "500,000 tokenów / miesiąc",
                reset: "Reset miesięczny",
                cta: "Subskrybuj"
            },
            pro: {
                badge: "Popularny",
                tier: "Pro",
                period: "/ miesiąc",
                tokens: "10,000,000 tokenów / miesiąc",
                reset: "Reset miesięczny",
                cta: "Ulepsz do Pro"
            }
        },
        benefits: {
            title: "Dlaczego Wright?",
            subtitle: "Natywny dla macOS.",
            everywhere: {
                title: "Wszędzie",
                description: "Działa w każdej aplikacji."
            },
            free: {
                title: "Darmowy",
                description: "Pobierz i używaj."
            }
        },
        download: {
            title: "Zacznij",
            description: "Pobierz za darmo.",
            cta: "Pobierz na macOS",
            guide: "Przewodnik",
            note: "Darmowy plan w cenie"
        },
        footer: {
            rights: "© 2026 Wright. Wszelkie prawa zastrzeżone.",
            privacy: "Prywatność",
            support: "Wsparcie"
        }
    },
    id: {
        meta: {
            title: "Wright - Asisten AI untuk macOS | Tulis Ulang, Terjemahkan & Obrolan",
            description: "Wright adalah asisten AI yang dapat disesuaikan untuk macOS. Buat peran khusus, tulis ulang dan terjemahkan teks dengan mudah, dan lakukan obrolan — semua dari pintasan keyboard atau PopClip. Gratis untuk digunakan."
        },
        nav: {
            features: "Fitur",
            download: "Unduh",
            support: "Dukungan",
            guide: "Panduan",
            toggle: "Bahasa"
        },
        hero: {
            title: "Asisten AI Anda untuk macOS",
            subtitle: "Wright adalah asisten AI yang dapat disesuaikan untuk macOS. Buat peran khusus, tulis ulang dan terjemahkan teks dengan mudah, dan lakukan obrolan — semua dari pintasan keyboard atau PopClip. Gratis untuk digunakan.",
            download: "Unduh untuk macOS"
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
                    desc: "Penyiapan langkah demi langkah.",
                    cta: "Lihat Panduan"
                },
                issue: {
                    title: "Laporkan Masalah",
                    desc: "Menemukan bug?",
                    cta: "Kirim"
                }
            },
            faq: {
                title: "FAQ",
                q1: {
                    q: "Apa yang bisa dilakukan Wright?",
                    a: "Wright adalah asisten penulis AI untuk macOS.",
                    list: [
                        "<strong>Tulis Ulang</strong> — Poles teks.",
                        "<strong>Terjemahkan</strong> — Terjemahan instan.",
                        "<strong>Obrolan</strong> — Mengobrol dengan AI."
                    ]
                },
                q2: {
                    q: "Model apa yang didukung?",
                    a: "Wright mendukung:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "Peran Khusus?",
                    a: "Buat persona AI."
                },
                q4: {
                    q: "Integrasi PopClip?",
                    a: "Tambahkan tindakan ke menu PopClip."
                },
                q5: {
                    q: "Apakah data saya aman?",
                    a: "Ya. Kami tidak mengumpulkan data Anda."
                },
                q6: {
                    q: "Persyaratan sistem?",
                    a: "macOS 14.0 (Sonoma) atau lebih baru."
                },
                q7: {
                    q: "Pintasan keyboard?",
                    a: "Pintasan global yang dapat disesuaikan."
                }
            },
            contact: {
                title: "Kontak",
                email: "Dukungan Email",
                response: "Respon dalam 24 jam."
            }
        },
        privacy: {
            title: "Kebijakan Privasi",
            meta: {
                title: "Privasi | Wright",
                desc: "Kebijakan privasi Wright."
            },
            lastUpdated: "Terakhir diperbarui: Maret 2024",
            commitment: {
                title: "Komitmen Kami",
                text: "Kami melindungi privasi Anda.",
                keyPoints: {
                    title: "Poin Utama:",
                    list: [
                        "Tidak ada pengumpulan data pribadi",
                        "Tidak ada pelacakan",
                        "Tidak ada penyimpanan data"
                    ]
                }
            },
            dataCollection: {
                title: "Pengumpulan Data",
                text: "Wright tidak mengumpulkan informasi pribadi.",
                apiKeys: {
                    title: "Kunci API",
                    text: "Hanya kunci API yang diperlukan.",
                    list: [
                        "Disimpan di Rantai Kunci macOS",
                        "Tidak pernah dikirim ke server kami",
                        "Komunikasi langsung dengan LLM",
                        "Dapat dihapus kapan saja"
                    ]
                }
            },
            thirdParty: {
                title: "Layanan Pihak Ketiga",
                text: "Interaksi diatur oleh kebijakan mereka.",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "Keamanan Data",
                text: "Kunci dienkripsi dalam Rantai Kunci."
            },
            changes: {
                title: "Perubahan",
                text: "Kami akan memberitahukan pembaruan."
            },
            contact: {
                title: "Kontak",
                text: "Pertanyaan?"
            }
        },
        howItWorks: {
            title: "Cara Kerja",
            subtitle: "Pintasan atau PopClip.",
            step1: {
                title: "Pilih",
                description: "Sorot teks."
            },
            step2: {
                title: "Pintasan",
                description: "Tekan pintasan."
            },
            step3: {
                title: "Hasil",
                description: "Teks yang ditingkatkan muncul."
            }
        },
        features: {
            title: "Fitur",
            quickView: {
                title: "Tampilan Cepat",
                description: "Kueri cepat."
            },
            rewrite: {
                title: "Tulis Ulang",
                description: "Tingkatkan teks secara instan."
            },
            translate: {
                title: "Terjemahkan",
                description: "Terjemahan instan."
            },
            customRoles: {
                title: "Peran Khusus",
                description: "Buat AI Anda sendiri."
            },
            setup: {
                title: "Penyiapan",
                description: "Sesuaikan semuanya.",
                list: [
                    "Pintasan",
                    "Banyak Model",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "Harga",
            free: {
                tier: "Gratis",
                tokens: "1,000 token / hari",
                reset: "Reset harian",
                cta: "Mulai"
            },
            basic: {
                tier: "Dasar",
                period: "/ tahun",
                tokens: "500,000 token / bulan",
                reset: "Reset bulanan",
                cta: "Berlangganan"
            },
            pro: {
                badge: "Populer",
                tier: "Pro",
                period: "/ bulan",
                tokens: "10,000,000 token / bulan",
                reset: "Reset bulanan",
                cta: "Tingkatkan ke Pro"
            }
        },
        benefits: {
            title: "Mengapa Wright?",
            subtitle: "Bawaan untuk macOS.",
            everywhere: {
                title: "Di Mana Saja",
                description: "Bekerja di semua aplikasi."
            },
            free: {
                title: "Gratis",
                description: "Unduh dan gunakan."
            }
        },
        download: {
            title: "Mulai",
            description: "Unduh gratis.",
            cta: "Unduh untuk macOS",
            guide: "Panduan",
            note: "Termasuk paket gratis"
        },
        footer: {
            rights: "© 2026 Wright. Hak cipta dilindungi undang-undang.",
            privacy: "Privasi",
            support: "Dukungan"
        }
    },
    th: {
        meta: {
            title: "Wright - ผู้ช่วย AI สำหรับ macOS | เขียนใหม่ แปลภาษา & แชท",
            description: "Wright คือผู้ช่วย AI ที่ปรับแต่งได้สำหรับ macOS สร้างบทบาทที่กำหนดเอง เขียนใหม่และแปลข้อความได้อย่างง่ายดาย และแชท — ทั้งหมดนี้ทำได้จากคีย์ลัดหรือ PopClip ใช้งานฟรี"
        },
        nav: {
            features: "ฟีเจอร์",
            download: "ดาวน์โหลด",
            support: "ช่วยเหลือ",
            guide: "คู่มือ",
            toggle: "ภาษา"
        },
        hero: {
            title: "ผู้ช่วย AI ของคุณสำหรับ macOS",
            subtitle: "Wright คือผู้ช่วย AI ที่ปรับแต่งได้สำหรับ macOS สร้างบทบาทที่กำหนดเอง เขียนใหม่และแปลข้อความได้อย่างง่ายดาย และแชท — ทั้งหมดนี้ทำได้จากคีย์ลัดหรือ PopClip ใช้งานฟรี",
            download: "ดาวน์โหลดสำหรับ macOS"
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
                    desc: "การตั้งค่าทีละขั้นตอน",
                    cta: "ดูแลคู่มือ"
                },
                issue: {
                    title: "รายงานปัญหา",
                    desc: "พบข้อบกพร่อง?",
                    cta: "ส่ง"
                }
            },
            faq: {
                title: "คำถามที่พบบ่อย",
                q1: {
                    q: "Wright ทำอะไรได้บ้าง?",
                    a: "Wright คือผู้ช่วยเขียน AI สำหรับ macOS",
                    list: [
                        "<strong>เขียนใหม่</strong> — ขัดเกลาข้อความ",
                        "<strong>แปลภาษา</strong> — แปลทันที",
                        "<strong>แชท</strong> — แชทกับ AI"
                    ]
                },
                q2: {
                    q: "รองรับโมเดลใดบ้าง?",
                    a: "Wright รองรับ:",
                    list: ["OpenAI", "Google Gemini", "Groq", "Grok"]
                },
                q3: {
                    q: "บทบาทที่กำหนดเอง?",
                    a: "สร้างบุคลิก AI"
                },
                q4: {
                    q: "การรวม PopClip?",
                    a: "เพิ่มการกระทำในเมนู PopClip"
                },
                q5: {
                    q: "ข้อมูลของฉันปลอดภัยไหม?",
                    a: "ใช่ เราไม่เก็บรวบรวมข้อมูลของคุณ"
                },
                q6: {
                    q: "ความต้องการของระบบ?",
                    a: "macOS 14.0 (Sonoma) หรือใหม่กว่า"
                },
                q7: {
                    q: "คีย์ลัด?",
                    a: "คีย์ลัดทั่วโลกที่ปรับแต่งได้"
                }
            },
            contact: {
                title: "ติดต่อ",
                email: "อีเมลช่วยเหลือ",
                response: "ตอบกลับภายใน 24 ชม."
            }
        },
        privacy: {
            title: "นโยบายความเป็นส่วนตัว",
            meta: {
                title: "ความเป็นส่วนตัว | Wright",
                desc: "นโยบายความเป็นส่วนตัวของ Wright"
            },
            lastUpdated: "อัปเดตล่าสุด: มีนาคม 2024",
            commitment: {
                title: "ความมุ่งมั่นของเรา",
                text: "เราปกป้องความเป็นส่วนตัวของคุณ",
                keyPoints: {
                    title: "จุดสำคัญ:",
                    list: [
                        "ไม่มีการเก็บรวบรวมข้อมูลส่วนบุคคล",
                        "ไม่มีการติดตาม",
                        "ไม่มีการจัดเก็บข้อมูล"
                    ]
                }
            },
            dataCollection: {
                title: "การเก็บรวบรวมข้อมูล",
                text: "Wright ไม่เก็บรวบรวมข้อมูลส่วนบุคคล",
                apiKeys: {
                    title: "คีย์ API",
                    text: "ต้องใช้คีย์ API เท่านั้น",
                    list: [
                        "เก็บไว้ใน macOS Keychain",
                        "ไม่เคยส่งไปยังเซิร์ฟเวอร์ของเรา",
                        "การสื่อสารโดยตรงกับ LLM",
                        "ลบได้ตลอดเวลา"
                    ]
                }
            },
            thirdParty: {
                title: "บริการของบุคคลที่สาม",
                text: "การโต้ตอบอยู่ภายใต้นโยบายของพวกเขา",
                list: [
                    "<a href=\"https://openai.com/privacy\" target=\"_blank\">OpenAI</a>",
                    "<a href=\"https://wow.groq.com/privacy-policy/\" target=\"_blank\">Groq</a>",
                    "<a href=\"https://x.ai/privacy\" target=\"_blank\">xAI</a>"
                ]
            },
            security: {
                title: "ความปลอดภัยของข้อมูล",
                text: "คีย์ถูกเข้ารหัสใน Keychain"
            },
            changes: {
                title: "การเปลี่ยนแปลง",
                text: "เราจะแจ้งการอัปเดตให้ทราบ"
            },
            contact: {
                title: "ติดต่อ",
                text: "คำถาม?"
            }
        },
        howItWorks: {
            title: "วิธีการทำงาน",
            subtitle: "คีย์ลัด หรือ PopClip",
            step1: {
                title: "เลือก",
                description: "ไฮไลต์ข้อความ"
            },
            step2: {
                title: "คีย์ลัด",
                description: "กดคีย์ลัด"
            },
            step3: {
                title: "ผลลัพธ์",
                description: "ข้อความที่ปรับปรุงแล้วปรากฏขึ้น"
            }
        },
        features: {
            title: "ฟีเจอร์",
            quickView: {
                title: "ดูด่วน",
                description: "สอบถามด่วน"
            },
            rewrite: {
                title: "เขียนใหม่",
                description: "ปรับปรุงข้อความทันที"
            },
            translate: {
                title: "แปลภาษา",
                description: "แปลทันที"
            },
            customRoles: {
                title: "บทบาทที่กำหนดเอง",
                description: "สร้าง AI ของคุณเอง"
            },
            setup: {
                title: "การตั้งค่า",
                description: "ปรับแต่งทุกอย่าง",
                list: [
                    "คีย์ลัด",
                    "หลายโมเดล",
                    "PopClip"
                ]
            }
        },
        pricing: {
            title: "ราคา",
            free: {
                tier: "ฟรี",
                tokens: "1,000 โทเค็น / วัน",
                reset: "รีเซ็ตรายวัน",
                cta: "เริ่มเลย"
            },
            basic: {
                tier: "พื้นฐาน",
                period: "/ ปี",
                tokens: "500,000 โทเค็น / เดือน",
                reset: "รีเซ็ตรายเดือน",
                cta: "สมัครสมาชิก"
            },
            pro: {
                badge: "ยอดนิยม",
                tier: "โปร",
                period: "/ เดือน",
                tokens: "10,000,000 โทเค็น / เดือน",
                reset: "รีเซ็ตรายเดือน",
                cta: "อัปเกรดเป็น Pro"
            }
        },
        benefits: {
            title: "ทำไมต้อง Wright?",
            subtitle: "เนทีฟสำหรับ macOS",
            everywhere: {
                title: "ทุกที่",
                description: "ทำงานได้ในทุกแอป"
            },
            free: {
                title: "ฟรี",
                description: "ดาวน์โหลดและใช้งาน"
            }
        },
        download: {
            title: "เริ่มเลย",
            description: "ดาวน์โหลดฟรี",
            cta: "ดาวน์โหลดสำหรับ macOS",
            guide: "คู่มือ",
            note: "รวมแผนฟรี"
        },
        footer: {
            rights: "© 2026 Wright. สงวนลิขสิทธิ์",
            privacy: "ความเป็นส่วนตัว",
            support: "ช่วยเหลือ"
        }
    }
};


class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.languages = {
            en: "English", zh: "中文", es: "Español", fr: "Français", de: "Deutsch",
            ja: "日本語", ko: "한국어", ru: "Русский", pt: "Português", it: "Italiano",
            hi: "हिन्दी", ar: "العربية", tr: "Türkçe", vi: "Tiếng Việt", nl: "Nederlands",
            pl: "Polski", id: "Bahasa Indonesia", th: "ไทย"
        };
        this.init();
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
