# Changelog

## [v2.0.0] - Upcoming

### 🚀 Top Selling Points

-   **Revolutionary Unified Agent Interface**: We've completely reimagined the core experience. Unlike the previous version which was limited to fixed Rewriter and Translator tools, v2.0 introduces a flexible, expandable "Agent Role" system. Construct your own AI roles with virtually limitless functionality tailored to your specific needs.
-   **Limitless Customization**: Take full control of your workflow. Every prompt, shortcut, and AI persona is now fully customizable. Create specialized agents for coding, writing, data analysis, or any creative task you can imagine.
-   **Seamless Workflow Transition**: Start simple, go deep. Launch a quick query in the lightweight Agent View, then seamlessly transition to a full Chat Interface when the task demands more complexity—without losing context.
-   **Immersive "Liquid Glass" UI Experience**: A visually stunning, modern interface with smooth animations, better scrolling behavior, and a polished, professional aesthetic that feels alive.
-   **Enhanced Intelligence & Speed**: Lightning-fast asynchronous API calls for OpenAI, Grok, Gemini, and Groq significantly reduce latency. Includes smarter context-aware responses and automatic language detection.
-   **Advanced User Management**: Secure email registration, seamless multi-device synchronization, and tiered subscription plans (Basic, Pro, Ultra) to unlock premium AI capabilities.

---

### ✨ Detailed Upgrades

#### 🎨 User Experience & UI
-   **Unified Agent View**: Redesigned with a "liquid glass" aesthetic for a cleaner, unified look.
-   **Seamless Transition**: One-click expansion from the compact Agent View to the full-featured Chat View for deep-dive conversations.
-   **Chat Improvements**:
    -   Auto-scroll to the latest user message for better readability.
    -   Prevent saving of empty chat sessions.
    -   Animated send button on hover.
    -   Visual "thinking" indicators while waiting for API responses.
    -   Customizable font sizes for both input and output views.
-   **Settings & Customization**:
    -   **Custom Shortcuts**: Allow fully customizable shortcuts with user-defined AI roles and interface preferences (popup vs. chat).
    -   **Agent Roles**: New UI for creating and editing custom AI roles.
    -   **Toolbar**: Added a menu for selecting AI roles and LLM models directly in the toolbar.

#### ⚡ Performance & Backend
-   **True Streaming**: Implemented Lambda Web Adapter + FastAPI for genuine streaming support, providing a much faster perceived response time.
-   **Async Architecture**: Backend refactored to handle API calls asynchronously (OpenAI, Grok, Gemini, Groq), decoupling processing from user requests.
-   **Token Management**:
    -   Configurable token expiration for access and refresh tokens.
    -   Proactive token refresh logic to maintain session stability.
-   **Infrastructure**:
    -   New Telegram notification system with dedicated Lambda for async delivery.
    -   Enhanced backend usage logging with feature context.

#### 🛠 New Features
-   **Subscription System**:
    -   Three-tier subscription model (Basic, Pro, Ultra) with in-app purchases.
    -   Device-based free account registration.
    -   Robust receipt validation with Sandbox and StoreKit 2 support.
-   **Smart Rewrite**:
    -   Added language detection to maintain the source language during rewrites.
    -   Updated default rewrite shortcut to `R`.
-   **Grandfathering**:
    -   Automatic one-year basic subscription grant for existing paid users.
-   **Chat History**:
    -   Access past chats anytime with the new history sidebar.
    -   Includes filtering for empty sessions and improved navigation.

#### 🐛 Fixes & Improvements
-   **Bug Fixes**:
    -   Fixed chat transition errors and occasional crashes.
    -   Resolved layout recursion warnings (`-[NSView layoutSubtreeIfNeeded]`).
    -   Corrected account tier and usage display in settings.
    -   Fixed "vertical bright bar" glitch on chat launch.
    -   Address issue where input text box boundary visibility was poor.
    -   Fixed translated language manual change not working.
-   **Optimizations**:
    -   Removed redundant roles (e.g., 'News Verifier').
    -   Optimized API streaming handler for better stability.
    -   Improved auto-scroll behavior to align output to the top of the window when streaming.
