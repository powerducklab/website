// Complete marketing copy for all six locales. Load before common.js.
(function () {
  "use strict";
  var messages = {
    en: {
      "scenes.all": "Scenario guides",
      "flow.hero": "Your agent writes the code.<br>Powerduck handles the API.",
      "flow.sub":
        "Give Codex, Claude Code or Cursor the API contract. Turn code into docs, run business scenarios with AI, and check real results — from a local-first API workspace.",
      "flow.baseNote":
        "Local work needs no account. Remote AI uses your chosen model service; online hosting requires a Cloud account.",
      "flow.kicker": "SEE IT IN A WORKFLOW",
      "flow.title":
        "Each familiar chore becomes a contract-driven flow.",
      "flow.intro":
        "Pick a task below. Powerduck runs it from the OpenAPI file on your machine — environments, tests and mocks included, with no account or upload required.",
      "flow.baseTitle": "Local work should not mean a stripped-down workspace.",
      "flow.baseBody":
        "Your local API workspace starts without an account or an upload. Bring your requests, auth, environments and assertions with you. Choose Cloud when you want to publish online.",
      "flow.base0": "cURL / Postman / OpenAPI import",
      "flow.base1": "Auth & environments",
      "flow.base2": "Scripts & assertions",
      "flow.base3": "Collections & scenario tests",
      "flow.base4": "Local mock servers",
      "flow.base5": "7-protocol debugging",
      "flow.difference": "What would you like to stop doing manually?",
      "flow.all": "Explore these scenarios",
      "flow.1.pain":
        "Do you still read the source code to find out whether the API docs are right?",
      "flow.1.title": "Generate docs from the project.",
      "flow.1.body":
        "Scan a supported project from your coding agent through MCP. Generate an API definition and open it as documentation.",
      "flow.result": "WHAT YOU GET",
      "flow.1.result": "A reviewable API definition + a local docs link.",
      "flow.promptLabel": "Ask your agent",
      "flow.1.prompt":
        "Scan this project and give me an API documentation link.",
      "flow.try": "Try this workflow",
      "flow.2.pain":
        "Have you given AI the spec, only to get different fields and paths back?",
      "flow.2.title": "Implement from the actual API contract.",
      "flow.2.body":
        "Connect your coding agent to Powerduck’s MCP. Let it read the actual paths, schemas and auth before implementing, then verify the running API.",
      "flow.2.result":
        "Implementation guided by the contract, checked against real responses.",
      "flow.2.prompt":
        "Implement this API from its definition, then run contract tests.",
      "flow.3.pain":
        "Do you manually repeat the same business flow after every API change?",
      "flow.3.title": "Run the whole business scenario.",
      "flow.3.body":
        "Describe a flow such as sign in → create an order → retrieve it. Let AI compose the scenario, pass values between steps and execute the test.",
      "flow.3.result":
        "Step-by-step results and failed assertions, not just a generated test script.",
      "flow.3.prompt":
        "Test sign in → create an order → retrieve it. Show which step fails.",
      "flow.4.pain":
        "Do you switch tools just because the next endpoint uses a different protocol?",
      "flow.4.title": "Inspect seven protocols in one place.",
      "flow.4.body":
        "Debug HTTP, GraphQL, WebSocket, SSE, gRPC, MCP and A2A. Inspect responses, streams and tool calls in the same workspace.",
      "flow.4.result":
        "Manual control when you need to inspect exactly what happened.",
      "flow.5.pain":
        "Do you copy requests and responses into chat every time you need AI’s help?",
      "flow.5.title": "Investigate with real request context.",
      "flow.5.body":
        "Give the assistant the relevant API context. Ask it to send a request, inspect the response and help narrow down the failure.",
      "flow.5.result":
        "A diagnosis grounded in request results, with changes you can review.",
      "flow.5.prompt":
        "Investigate why this request fails. Check the response before suggesting a fix.",
      "flow.6.pain":
        "Do you maintain a separate hosting setup just to share API docs and MCP?",
      "flow.6.title": "Publish docs and MCP from one API.",
      "flow.6.body":
        "Publish a version of your API to Powerduck Cloud. Give people readable docs and give AI clients an MCP endpoint.",
      "flow.6.result":
        "Hosted documentation and an MCP URL, without running your own hosting stack.",
      "scenes.metaTitle":
        "Powerduck use cases — From code to API docs, testing and mocks",
      "scenes.metaDescription":
        "Generate API documentation from your coding agent, debug real requests, check API contracts and mock endpoints before the backend is ready.",
      "scenes.back": "Back to home",
      "scenes.jump": "Find your use case",
      "flow.solution": "WITH POWERDUCK",
      "scenes.know": "Good to know",
      "scenes.s1.note":
        "Supported frameworks only. Review inferred fields and scan warnings. Local links work on the MCP host while its session is running.",
      "flow.boundary": "See setup & requirements",
      "scenes.s3.note":
        "Checks cover the operations, inputs and assertions you run. They do not prove every behavior of the backend is correct.",
      "scenes.s8.note":
        "Protocol support differs between desktop and browser. Use the desktop app for native transports such as gRPC.",
      "scenes.s5.note":
        "AI features require a configured model. Context sent to a remote provider leaves your device; manual editing does not require AI.",
      "scenes.s6.note":
        "Cloud hosting uses your account quota. The uploaded API definition may contain examples or internal details: review it before sharing.",
      "scenes.ready": "Try it on one API first.",
      "scenes.readyBody":
        "Open a specification you already have, or start with the built-in example. Explore the workflow before connecting your own project.",
      "scenes.download": "Download Powerduck",
      "scenes.example": "Try the browser workspace",
      "quick.kicker": "START ON YOUR MACHINE",
      "quick.title": "Download it. Get your work back.",
      "quick.deck":
        "Powerduck is a desktop API workspace. Open a local file, send your first request and connect your coding agent when you’re ready. No account needed to start.",
      "quick.desktopTag": "THE MAIN WORKSPACE",
      "quick.desktopTitle": "Make this your API workbench.",
      "quick.desktopBody":
        "Local files, code scanning and native protocol debugging belong here. Connect your chosen AI model when you want help designing, investigating or testing.",
      "quick.browserTag": "JUST LOOKING AROUND?",
      "quick.browserTitle": "Take a quick browser tour.",
      "quick.browserBody":
        "The web demo uses a shared cloud model and requires sign-in. For local work without an account, download the desktop app.",
      "flow.openWeb": "Open web app",
      "flow.diagramLabel": "Workflow example",
      "flow.tab1": "Writing API docs",
      "flow.tab2": "Correcting AI-generated code",
      "flow.tab3": "Repeating business tests",
      "flow.tab4": "Switching debugging tools",
      "flow.tab5": "Explaining failures to AI",
      "flow.tab6": "Managing hosting",

      "hv.local": "OpenAPI 3.1 · local file",
      "hv.contract": "One OpenAPI contract",
      "hv.compile": "Compiled into a runnable MCP server · 12 callable tools",
      "hv.agentTitle": "Your coding agent",
      "hv.out.ops": "12 operations found",
      "hv.out.mock": "Mock server live on :4010",
      "hv.out.tests": "orders.test.js written",
      "hv.out.call": "200 OK · verified against contract",
      "hv.out.docs": "Reference docs updated",
      "hv.foot": "One OpenAPI file compiles into tools <strong>your agent calls</strong> — mock, tests, API calls and docs, all verified against the same contract.",
      "why.kicker": "Why Powerduck",
      "why.title": "One local file replaces the API tool pile.",
      "why.deck": "A single OpenAPI YAML in your repo drives design, debugging, tests, mocks, docs and MCP — and your coding agents use that same file.",
      "why.old": "Others",
      "why.pd": "Powerduck",
      "why.1.title": "One file runs every surface",
      "why.1.body": "Design, debug, test, mock, document and expose MCP from the same OpenAPI spec, so nothing drifts apart.",
      "why.1.old": "Separate collection, docs, mock and test files",
      "why.1.new": "<strong>One YAML</strong> drives every tool and your agents",
      "why.2.title": "Every response is contract-verified",
      "why.2.body": "Each response is checked against the OpenAPI spec — not just displayed — so a wrong type or path is caught on the spot.",
      "why.2.old": "Sends the request and shows the 200 response",
      "why.2.new": "<strong>Spec drift is flagged</strong> the moment the response returns",
      "why.3.title": "Local-first, no account, agent-ready",
      "why.3.body": "Your files stay on your machine and work with no account or upload. Codex, Claude Code and Cursor read the same spec you do.",
      "why.3.old": "Cloud account and upload before you can start",
      "why.3.new": "<strong>Runs locally</strong>; your agents read the same file",
    },
    "zh-CN": {
      "scenes.all": "场景指南",
      "flow.hero": "代码交给编程助手。<br>API 交给 Powerduck。",
      "flow.sub":
        "让 Codex、Claude Code、Cursor 按接口定义写代码。扫描代码生成文档，让 AI 编排业务测试、执行并给出结果——都从本地优先的 API 工作台开始。",
      "flow.baseNote":
        "本地工作无需账号；远程 AI 使用你选择的模型服务，在线托管需要 Cloud 账号。",
      "flow.kicker": "在真实工作流中查看",
      "flow.title": "每个熟悉的繁琐工作，都变成契约驱动的流程。",
      "flow.intro":
        "选择下面的任务。Powerduck 直接用你机器上的 OpenAPI 文件运行——环境、测试与 mock 一应俱全，无需账号或上传。",
      "flow.baseTitle": "选择本地，不该意味着功能缩水。",
      "flow.baseBody":
        "本地 API 工作台，无需账号，也不用先上传文件。请求、鉴权、环境、断言，熟悉的工作照常做。需要在线发布时，再选择 Cloud。",
      "flow.base0": "导入 cURL / Postman / OpenAPI",
      "flow.base1": "鉴权与环境变量",
      "flow.base2": "脚本与断言",
      "flow.base3": "请求集合与场景测试",
      "flow.base4": "本地 Mock 服务",
      "flow.base5": "七种协议调试",
      "flow.difference": "哪些工作，你不想再手动重复？",
      "flow.all": "查看场景指南",
      "flow.1.pain": "你是否拿到了接口文档，却还得翻源码才能确认它写得对不对？",
      "flow.1.title": "从项目生成接口文档。",
      "flow.1.body":
        "在编程助手里连接 Powerduck MCP，扫描已适配框架的项目，生成接口定义并打开文档。",
      "flow.result": "你得到的结果",
      "flow.1.result": "一份可审阅的接口定义，以及能打开的本机文档链接。",
      "flow.promptLabel": "可以直接这样说",
      "flow.1.prompt": "扫描这个项目，生成 API 文档，给我一个可以打开的链接。",
      "flow.try": "试试这个流程",
      "flow.2.pain": "你是否把文档给了 AI，生成的字段和路径却仍然对不上？",
      "flow.2.title": "让编程助手读取真实接口定义。",
      "flow.2.body":
        "让编程助手通过 MCP 读取真实的路径、数据结构与鉴权要求，再按定义实现，最后对运行中的接口做验证。",
      "flow.2.result": "代码有定义可依，结果有真实响应可验。",
      "flow.2.prompt":
        "根据这份 API 定义实现接口，再运行契约测试，检查是否一致。",
      "flow.3.pain": "你是否每改一次接口，就得手动重跑一遍相同的业务流程？",
      "flow.3.title": "让 AI 编排并运行整个业务场景。",
      "flow.3.body":
        "描述业务流程，让 AI 组织测试步骤、传递上一步的返回值，再运行整个场景。",
      "flow.3.result": "每一步的执行结果和失败断言，不是只给你一段测试代码。",
      "flow.3.prompt":
        "测试登录 → 创建订单 → 查询订单，告诉我哪一步失败、为什么。",
      "flow.4.pain": "你是否只是换了一种接口协议，就不得不换一个调试工具？",
      "flow.4.title": "七种协议，在一个工作台排查。",
      "flow.4.body":
        "HTTP、GraphQL、WebSocket、SSE、gRPC、MCP、A2A，在同一工作区查看响应、消息流和工具调用。",
      "flow.4.result": "需要亲自排查时，每一次请求和返回都看得清。",
      "flow.5.pain": "你是否每次让 AI 排错，都得重新复制请求、响应和接口背景？",
      "flow.5.title": "带着真实请求上下文，让 AI 排错。",
      "flow.5.body":
        "给助手相关接口上下文，让它发送请求、查看返回，结合实际结果定位问题，提出可审阅的修改建议。",
      "flow.5.result": "基于真实请求结果的排查，而不是凭空猜原因。",
      "flow.5.prompt": "帮我查这个请求为什么失败，先看响应，再给修改建议。",
      "flow.6.pain":
        "你是否只是想分享文档和 MCP，却还要单独搭建、维护托管服务？",
      "flow.6.title": "一份 API，发布文档与 MCP。",
      "flow.6.body":
        "将一个 API 版本发布到 Powerduck Cloud：给人看文档，给 AI 客户端连 MCP。",
      "flow.6.result": "文档地址 + MCP 服务地址，不用自己搭建托管环境。",
      "scenes.metaTitle":
        "Powerduck 使用场景 — 从代码生成文档，到接口测试与 Mock",
      "scenes.metaDescription":
        "在编程助手里生成 API 文档链接，复现请求、检查接口是否符合文档，在后端完成前用 Mock 开始联调。",
      "scenes.back": "返回首页",
      "scenes.jump": "找到你的使用场景",
      "flow.solution": "POWERDUCK 的解法",
      "scenes.know": "使用前了解",
      "scenes.s1.note":
        "仅支持已适配的框架，请检查推断字段和扫描提示。本机链接在 MCP 所在电脑上访问，会话结束后失效。",
      "flow.boundary": "查看配置与使用条件",
      "scenes.s3.note":
        "检查范围取决于实际运行的接口、输入和断言，不代表后端所有行为都已验证。",
      "scenes.s8.note":
        "桌面版和网页版支持范围不同。gRPC 等原生传输请使用桌面版。",
      "scenes.s5.note":
        "AI 功能需要配置模型。使用远程模型时，相关上下文会发送给模型服务商；手动编辑不需要 AI。",
      "scenes.s6.note":
        "Cloud 托管受账户额度限制。接口定义可能包含示例或内部信息，分享前请检查内容。",
      "scenes.ready": "先拿一个接口试试。",
      "scenes.readyBody":
        "打开已有的接口定义，或者使用内置示例。先跑通流程，再接入自己的项目。",
      "scenes.download": "下载 Powerduck",
      "scenes.example": "体验网页版工作区",
      "quick.kicker": "从你自己的电脑开始",
      "quick.title": "下载，打开，把活干完。",
      "quick.deck":
        "Powerduck 的主场是桌面：打开本地文件，发出第一个请求，需要时再接上编程助手。开始工作，不需要先注册。",
      "quick.desktopTag": "日常工作的主力",
      "quick.desktopTitle": "把这里变成你的 API 工作台。",
      "quick.desktopBody":
        "本地文件、代码扫描、原生协议调试，都在桌面版。需要帮手时，接入你选择的 AI 模型，协助设计、排错和测试。",
      "quick.browserTag": "还想先看看？",
      "quick.browserTitle": "浏览器里，快速体验一下。",
      "quick.browserBody":
        "网页版演示使用共享云端模型，需要登录。无需账号的本地工作，请下载桌面版。",
      "flow.openWeb": "打开网页版",
      "flow.diagramLabel": "流程示意",
      "flow.tab1": "手动补文档",
      "flow.tab2": "纠正 AI 实现",
      "flow.tab3": "重复业务测试",
      "flow.tab4": "切换调试工具",
      "flow.tab5": "搬运排错上下文",
      "flow.tab6": "维护托管服务",

      "hv.local": "OpenAPI 3.1 · 本地文件",
      "hv.contract": "一份 OpenAPI 契约",
      "hv.compile": "编译为可运行的 MCP 服务器 · 12 个可调用工具",
      "hv.agentTitle": "你的编码 Agent",
      "hv.out.ops": "发现 12 个接口",
      "hv.out.mock": "Mock 服务已启动 :4010",
      "hv.out.tests": "已生成 orders.test.js",
      "hv.out.call": "200 OK · 已通过契约校验",
      "hv.out.docs": "参考文档已更新",
      "hv.foot": "一份 OpenAPI 文件直接编译为 <strong>Agent 可调用的工具</strong>——mock、测试、接口调用与文档，全部对照同一契约校验。",
      "why.kicker": "为什么选择 Powerduck",
      "why.title": "一个本地文件，取代整套 API 工具。",
      "why.deck": "仓库里的一份 OpenAPI YAML 即可驱动设计、调试、测试、mock、文档与 MCP——你的编程助手也使用同一份文件。",
      "why.old": "其他工具",
      "why.pd": "Powerduck",
      "why.1.title": "一份文件，贯穿所有环节",
      "why.1.body": "用同一份 OpenAPI 规范完成设计、调试、测试、mock、文档与 MCP 发布，任何环节都不会脱节。",
      "why.1.old": "集合、文档、mock、测试文件各自维护",
      "why.1.new": "<strong>一份 YAML</strong> 驱动所有工具和你的编程助手",
      "why.2.title": "每个响应都经过契约校验",
      "why.2.body": "每个响应都会对照 OpenAPI 规范检查，而不仅仅是显示——错误的类型或路径当场就能发现。",
      "why.2.old": "只发送请求并显示 200 响应",
      "why.2.new": "响应一返回，<strong>规范偏差立即被标记</strong>",
      "why.3.title": "本地优先，无需账号，适配编程助手",
      "why.3.body": "文件留在你的机器上，无需账号或上传即可使用。Codex、Claude Code 和 Cursor 读取的正是你手上的同一份规范。",
      "why.3.old": "开始前需要云账号并上传文件",
      "why.3.new": "<strong>本地运行</strong>；你的编程助手读取同一份文件",
    },
    ja: {
      "scenes.all": "活用ガイド",
      "flow.hero": "コードは AI エージェントに。<br>API は Powerduck に。",
      "flow.sub":
        "Codex、Claude Code、Cursor に API 定義を渡す。コードからドキュメントを生成し、AI で業務シナリオを実行して実際の結果を確かめる。ローカル優先の API ワークスペースで。",
      "flow.baseNote":
        "ローカル作業はアカウント不要。リモート AI は選択したモデルサービスを使用し、オンライン公開には Cloud アカウントが必要です。",
      "flow.kicker": "ワークフローで見る",
      "flow.title":
        "身近な手作業が、契約駆動のワークフローに変わります。",
      "flow.intro":
        "以下からタスクを選んでください。Powerduck はマシン上の OpenAPI ファイルから実行します。環境・テスト・モックを含み、アカウントやアップロードは不要です。",
      "flow.baseTitle": "ローカルを選んでも、機能を諦める必要はない。",
      "flow.baseBody":
        "ローカルの API 作業はアカウントもアップロードも不要。リクエスト、認証、環境、アサーションをそのまま使い、オンライン公開が必要なときに Cloud を選べます。",
      "flow.base0": "cURL / Postman / OpenAPI のインポート",
      "flow.base1": "認証と環境変数",
      "flow.base2": "スクリプトとアサーション",
      "flow.base3": "コレクションとシナリオテスト",
      "flow.base4": "ローカル Mock サーバー",
      "flow.base5": "7 プロトコルのデバッグ",
      "flow.difference": "手作業で繰り返したくないのは、どの仕事ですか？",
      "flow.all": "活用ガイドを見る",
      "flow.1.pain":
        "ドキュメントが正しいか確かめるために、ソースコードを読んでいませんか？",
      "flow.1.title": "プロジェクトから API ドキュメントを生成。",
      "flow.1.body":
        "MCP 経由で対応フレームワークのプロジェクトを解析。API 定義を生成し、ドキュメントとして開きます。",
      "flow.result": "得られるもの",
      "flow.1.result": "確認できる API 定義とローカルのドキュメントリンク。",
      "flow.promptLabel": "エージェントへの依頼例",
      "flow.1.prompt":
        "このプロジェクトを解析して、API ドキュメントのリンクをください。",
      "flow.try": "この流れを試す",
      "flow.2.pain":
        "AI に仕様を渡したのに、違うフィールドやパスが返ってきませんか？",
      "flow.2.title": "実際の API 定義をエージェントに渡す。",
      "flow.2.body":
        "エージェントが MCP から実際のパス、スキーマ、認証要件を読んで実装。起動した API を検証します。",
      "flow.2.result": "定義に基づく実装と、実際のレスポンスによる確認。",
      "flow.2.prompt":
        "この API 定義に沿って実装し、契約テストで一致を確認してください。",
      "flow.3.pain":
        "API を変えるたびに、同じ業務フローを手動でテストしていませんか？",
      "flow.3.title": "業務シナリオ全体を AI で実行。",
      "flow.3.body":
        "ログイン → 注文作成 → 取得のような流れを伝えると、AI がステップを構成し、値を引き継いで実行します。",
      "flow.3.result":
        "生成コードだけでなく、各ステップの結果と失敗したアサーション。",
      "flow.3.prompt":
        "ログイン → 注文作成 → 取得をテストし、失敗したステップを教えてください。",
      "flow.4.pain":
        "プロトコルが変わるだけで、別のデバッグツールが必要ですか？",
      "flow.4.title": "7 プロトコルを一つの場所で確認。",
      "flow.4.body":
        "HTTP、GraphQL、WebSocket、SSE、gRPC、MCP、A2A。レスポンス、ストリーム、ツール呼び出しを同じ画面で確認。",
      "flow.4.result": "何が起きたかを自分で詳しく調べられる操作性。",
      "flow.5.pain":
        "AI に調査を頼むたびに、リクエストやレスポンスを貼り直していませんか？",
      "flow.5.title": "実際のリクエスト情報で AI と調査。",
      "flow.5.body":
        "関連する API 情報を助手に渡し、送信とレスポンス確認を依頼。実際の結果から原因を絞り込みます。",
      "flow.5.result": "リクエスト結果に基づく調査と、確認できる修正案。",
      "flow.5.prompt":
        "このリクエストの失敗を調べてください。修正案の前にレスポンスを確認してください。",
      "flow.6.pain":
        "ドキュメントと MCP を共有するだけなのに、別のホスティング環境を管理していませんか？",
      "flow.6.title": "一つの API からドキュメントと MCP を公開。",
      "flow.6.body":
        "API のバージョンを Powerduck Cloud に公開。人にはドキュメントを、AI クライアントには MCP 接続先を渡せます。",
      "flow.6.result":
        "自前のホスティング環境なしで、ドキュメントと MCP の URL。",
      "scenes.metaTitle":
        "Powerduck の活用シーン — コードから API ドキュメント、テスト、モックまで",
      "scenes.metaDescription":
        "コーディングエージェントで API ドキュメントを生成し、リクエストをデバッグ、API 契約を検証。バックエンドの完成前にモックで開発を進められます。",
      "scenes.back": "ホームに戻る",
      "scenes.jump": "活用シーンを探す",
      "flow.solution": "POWERDUCK なら",
      "scenes.know": "知っておきたいこと",
      "scenes.s1.note":
        "対応フレームワークのみ利用できます。推定された項目や警告を確認してください。ローカルリンクは MCP の実行端末で、セッション中のみ有効です。",
      "flow.boundary": "設定と利用条件を見る",
      "scenes.s3.note":
        "検証対象は実行した操作、入力、アサーションの範囲です。バックエンドのすべての動作を保証するものではありません。",
      "scenes.s8.note":
        "対応範囲はデスクトップ版とブラウザー版で異なります。gRPC などのネイティブ通信にはデスクトップ版を使ってください。",
      "scenes.s5.note":
        "AI 機能にはモデル設定が必要です。リモートモデルへ送るコンテキストは端末の外に出ます。手動編集に AI は不要です。",
      "scenes.s6.note":
        "Cloud ホスティングにはアカウントの利用枠が適用されます。共有前に API 定義のサンプルや内部情報を確認してください。",
      "scenes.ready": "まずは1つの API で試してみましょう。",
      "scenes.readyBody":
        "既存の API 定義を開くか、組み込みのサンプルを使ってください。自分のプロジェクトを接続する前に、流れを確認できます。",
      "scenes.download": "Powerduck をダウンロード",
      "scenes.example": "ブラウザー版を試す",
      "quick.kicker": "自分のパソコンから始める",
      "quick.title": "ダウンロードして、本来の仕事へ。",
      "quick.deck":
        "Powerduck の中心はデスクトップ。ローカルファイルを開き、リクエストを送り、必要になったらエージェントを接続。開始にアカウントは不要です。",
      "quick.desktopTag": "毎日のメインワークスペース",
      "quick.desktopTitle": "ここを API 作業の拠点に。",
      "quick.desktopBody":
        "ローカルファイル、コード解析、ネイティブ通信のデバッグをデスクトップで。設計・調査・テストには、選んだ AI モデルを接続できます。",
      "quick.browserTag": "まずは見てみたい？",
      "quick.browserTitle": "ブラウザーで少し体験。",
      "quick.browserBody":
        "ブラウザー版デモは共有クラウドモデルを使用するため、ログインが必要です。アカウントなしのローカル作業にはデスクトップ版をご利用ください。",
      "flow.openWeb": "ブラウザー版を開く",
      "flow.diagramLabel": "ワークフロー例",
      "flow.tab1": "ドキュメント作成",
      "flow.tab2": "AI の実装を修正",
      "flow.tab3": "業務テストの反復",
      "flow.tab4": "調査ツールの切り替え",
      "flow.tab5": "AI への状況説明",
      "flow.tab6": "ホスティング管理",

      "hv.local": "OpenAPI 3.1 · ローカルファイル",
      "hv.contract": "1つの OpenAPI 契約",
      "hv.compile": "実行可能な MCP サーバーにコンパイル · 12個の呼び出し可能ツール",
      "hv.agentTitle": "あなたのコーディングエージェント",
      "hv.out.ops": "12個のオペレーションを検出",
      "hv.out.mock": "モックサーバー稼働 :4010",
      "hv.out.tests": "orders.test.js を生成",
      "hv.out.call": "200 OK · 契約に照らして検証済み",
      "hv.out.docs": "リファレンスドキュメントを更新",
      "hv.foot": "1つの OpenAPI ファイルは <strong>エージェントが呼び出すツール</strong>にコンパイルされます。モック・テスト・API呼び出し・ドキュメントはすべて同じ契約で検証されます。",
      "why.kicker": "Powerduck を選ぶ理由",
      "why.title": "1つのローカルファイルで、API ツールの山を置き換える。",
      "why.deck": "リポジトリ内の1つの OpenAPI YAML が設計・デバッグ・テスト・モック・ドキュメント・MCP を動かし、コーディングエージェントも同じファイルを使います。",
      "why.old": "他製品",
      "why.pd": "Powerduck",
      "why.1.title": "1つのファイルで全機能を実行",
      "why.1.body": "同じ OpenAPI 仕様から設計・デバッグ・テスト・モック・ドキュメント・MCP 公開まで行い、ズレを防ぎます。",
      "why.1.old": "コレクション・ドキュメント・モック・テストが別ファイル",
      "why.1.new": "<strong>1つの YAML</strong> が全ツールとエージェントを駆動",
      "why.2.title": "すべての応答を契約検証",
      "why.2.body": "各応答は OpenAPI 仕様と照合され、単に表示するだけでなく、型やパスの誤りをその場で検出します。",
      "why.2.old": "リクエストを送り 200 応答を表示するだけ",
      "why.2.new": "応答が返る瞬間に<strong>仕様のズレを警告</strong>",
      "why.3.title": "ローカルファースト、アカウント不要、エージェント対応",
      "why.3.body": "ファイルはマシン上に留まり、アカウントやアップロードなしで動作します。Codex、Claude Code、Cursor もあなたと同じ仕様を読みます。",
      "why.3.old": "始める前にクラウドアカウントとアップロードが必要",
      "why.3.new": "<strong>ローカルで実行</strong>。エージェントも同じファイルを参照",
    },
    de: {
      "scenes.all": "Szenarioanleitungen",
      "flow.hero":
        "Dein Agent schreibt den Code.<br>Powerduck übernimmt die API.",
      "flow.sub":
        "Gib Codex, Claude Code oder Cursor die API-Definition. Erzeuge Dokumentation aus Code, führe Geschäftsabläufe mit KI aus und prüfe echte Ergebnisse — in einem lokalen API-Arbeitsbereich.",
      "flow.baseNote":
        "Lokale Arbeit braucht kein Konto. Remote-KI nutzt deinen gewählten Modelldienst; Online-Hosting erfordert ein Cloud-Konto.",
      "flow.kicker": "IN EINEM WORKFLOW SEHEN",
      "flow.title":
        "Jede vertraute Routine wird zu einem vertragsgesteuerten Ablauf.",
      "flow.intro":
        "Wählen Sie unten eine Aufgabe. Powerduck führt sie direkt aus der OpenAPI-Datei auf Ihrem Rechner aus – inkl. Umgebungen, Tests und Mocks, ohne Konto oder Upload.",
      "flow.baseTitle":
        "Lokal arbeiten sollte nicht weniger Funktionen bedeuten.",
      "flow.baseBody":
        "Dein lokaler API-Arbeitsbereich startet ohne Konto und Upload. Anfragen, Authentifizierung, Umgebungen und Assertions bleiben dabei. Cloud wählst du, wenn du online veröffentlichen willst.",
      "flow.base0": "cURL / Postman / OpenAPI importieren",
      "flow.base1": "Authentifizierung & Umgebungen",
      "flow.base2": "Skripte & Assertions",
      "flow.base3": "Sammlungen & Szenariotests",
      "flow.base4": "Lokale Mock-Server",
      "flow.base5": "7 Protokolle debuggen",
      "flow.difference":
        "Welche Arbeit möchtest du nicht mehr von Hand wiederholen?",
      "flow.all": "Szenarioanleitungen ansehen",
      "flow.1.pain":
        "Liest du noch den Quellcode, um herauszufinden, ob die API-Dokumentation stimmt?",
      "flow.1.title": "Dokumentation aus dem Projekt erzeugen.",
      "flow.1.body":
        "Analysiere ein unterstütztes Projekt über MCP mit deinem Coding-Agenten. Erzeuge eine API-Definition und öffne sie als Dokumentation.",
      "flow.result": "DAS ERGEBNIS",
      "flow.1.result":
        "Eine prüfbare API-Definition und ein lokaler Dokumentationslink.",
      "flow.promptLabel": "Auftrag an deinen Agenten",
      "flow.1.prompt":
        "Analysiere dieses Projekt und gib mir einen Link zur API-Dokumentation.",
      "flow.try": "Workflow ausprobieren",
      "flow.2.pain":
        "Hast du der KI die Spezifikation gegeben und trotzdem andere Felder und Pfade erhalten?",
      "flow.2.title": "Nach der tatsächlichen API-Definition implementieren.",
      "flow.2.body":
        "Lass deinen Agenten per MCP die tatsächlichen Pfade, Schemas und Authentifizierung lesen, bevor er implementiert. Prüfe danach die laufende API.",
      "flow.2.result":
        "Implementierung nach Vertrag, geprüft an echten Antworten.",
      "flow.2.prompt":
        "Implementiere diese API nach ihrer Definition und führe Vertragstests aus.",
      "flow.3.pain":
        "Testest du nach jeder API-Änderung denselben Geschäftsablauf wieder von Hand?",
      "flow.3.title": "Das gesamte Geschäftsszenario ausführen.",
      "flow.3.body":
        "Beschreibe Anmeldung → Bestellung anlegen → abrufen. Die KI erstellt das Szenario, reicht Werte zwischen Schritten weiter und führt es aus.",
      "flow.3.result":
        "Ergebnisse je Schritt und fehlgeschlagene Assertions statt nur Testcode.",
      "flow.3.prompt":
        "Teste Anmeldung → Bestellung anlegen → abrufen. Zeige den fehlerhaften Schritt.",
      "flow.4.pain":
        "Wechselst du das Tool, nur weil der nächste Endpunkt ein anderes Protokoll nutzt?",
      "flow.4.title": "Sieben Protokolle an einem Ort prüfen.",
      "flow.4.body":
        "Debugge HTTP, GraphQL, WebSocket, SSE, gRPC, MCP und A2A. Prüfe Antworten, Streams und Tool-Aufrufe an einem Ort.",
      "flow.4.result":
        "Manuelle Kontrolle, wenn du genau verstehen willst, was passiert ist.",
      "flow.5.pain":
        "Kopierst du bei jeder KI-Fehlersuche Anfragen, Antworten und Kontext erneut in den Chat?",
      "flow.5.title": "Mit echtem Anfragekontext untersuchen.",
      "flow.5.body":
        "Gib dem Assistenten den relevanten API-Kontext. Lass ihn eine Anfrage senden, die Antwort prüfen und den Fehler eingrenzen.",
      "flow.5.result":
        "Eine Analyse anhand echter Ergebnisse und prüfbare Änderungsvorschläge.",
      "flow.5.prompt":
        "Untersuche diesen Fehler. Prüfe die Antwort, bevor du eine Korrektur vorschlägst.",
      "flow.6.pain":
        "Betreibst du eigenes Hosting, nur um API-Dokumentation und MCP zu teilen?",
      "flow.6.title": "Doku und MCP aus einer API veröffentlichen.",
      "flow.6.body":
        "Veröffentliche eine API-Version in Powerduck Cloud. Menschen erhalten lesbare Dokumentation, KI-Clients einen MCP-Endpunkt.",
      "flow.6.result":
        "Dokumentations- und MCP-URL ohne eigene Hosting-Infrastruktur.",
      "scenes.metaTitle":
        "Powerduck-Anwendungsfälle — Von Code zu API-Dokumentation, Tests und Mocks",
      "scenes.metaDescription":
        "Erstelle API-Dokumentation mit deinem Coding-Agenten, debugge echte Anfragen, prüfe API-Verträge und simuliere Endpunkte vor Fertigstellung des Backends.",
      "scenes.back": "Zur Startseite",
      "scenes.jump": "Finde deinen Anwendungsfall",
      "flow.solution": "MIT POWERDUCK",
      "scenes.know": "Gut zu wissen",
      "scenes.s1.note":
        "Nur unterstützte Frameworks. Prüfe abgeleitete Felder und Analysehinweise. Lokale Links funktionieren auf dem MCP-Host, solange die Sitzung läuft.",
      "flow.boundary": "Einrichtung & Voraussetzungen",
      "scenes.s3.note":
        "Die Prüfung umfasst nur ausgeführte Operationen, Eingaben und Assertions. Sie bestätigt nicht das gesamte Verhalten des Backends.",
      "scenes.s8.note":
        "Desktop und Browser unterstützen unterschiedliche Funktionen. Native Transporte wie gRPC benötigen die Desktop-App.",
      "scenes.s5.note":
        "KI-Funktionen erfordern ein konfiguriertes Modell. Bei Remote-Anbietern verlässt der übermittelte Kontext dein Gerät. Manuelles Bearbeiten benötigt keine KI.",
      "scenes.s6.note":
        "Für Cloud-Hosting gilt dein Kontolimit. Prüfe die API-Definition vor dem Teilen auf Beispiele und interne Informationen.",
      "scenes.ready": "Probiere es zuerst mit einer API aus.",
      "scenes.readyBody":
        "Öffne eine vorhandene Spezifikation oder nutze das integrierte Beispiel. Lerne den Ablauf kennen, bevor du dein eigenes Projekt verbindest.",
      "scenes.download": "Powerduck herunterladen",
      "scenes.example": "Browser-Workspace ausprobieren",
      "quick.kicker": "AUF DEINEM RECHNER STARTEN",
      "quick.title": "Herunterladen. Zur eigentlichen Arbeit zurück.",
      "quick.deck":
        "Powerduck ist ein API-Arbeitsbereich für den Desktop. Öffne eine lokale Datei, sende die erste Anfrage und verbinde bei Bedarf deinen Coding-Agenten. Der Start braucht kein Konto.",
      "quick.desktopTag": "DEIN HAUPTARBEITSBEREICH",
      "quick.desktopTitle": "Mach ihn zu deiner API-Werkbank.",
      "quick.desktopBody":
        "Lokale Dateien, Codeanalyse und native Protokolldiagnose gehören hierher. Verbinde dein gewähltes KI-Modell für Hilfe beim Entwurf, bei der Fehlersuche oder beim Testen.",
      "quick.browserTag": "ERST EINMAL UMSCHAUEN?",
      "quick.browserTitle": "Eine kurze Tour im Browser.",
      "quick.browserBody":
        "Die Web-Demo nutzt ein gemeinsames Cloud-Modell und erfordert eine Anmeldung. Für lokale Arbeit ohne Konto lade die Desktop-App herunter.",
      "flow.openWeb": "Web-App öffnen",
      "flow.diagramLabel": "Beispielablauf",
      "flow.tab1": "API-Doku schreiben",
      "flow.tab2": "KI-Code korrigieren",
      "flow.tab3": "Geschäftsabläufe testen",
      "flow.tab4": "Debugging-Tools wechseln",
      "flow.tab5": "Fehler der KI erklären",
      "flow.tab6": "Hosting verwalten",

      "hv.local": "OpenAPI 3.1 · lokale Datei",
      "hv.contract": "Ein OpenAPI-Vertrag",
      "hv.compile": "Zu einem ausführbaren MCP-Server kompiliert · 12 aufrufbare Tools",
      "hv.agentTitle": "Dein Coding-Agent",
      "hv.out.ops": "12 Operationen gefunden",
      "hv.out.mock": "Mock-Server live auf :4010",
      "hv.out.tests": "orders.test.js erstellt",
      "hv.out.call": "200 OK · gegen den Vertrag verifiziert",
      "hv.out.docs": "Referenzdokumentation aktualisiert",
      "hv.foot": "Eine OpenAPI-Datei kompiliert zu Tools, <strong>die dein Agent aufruft</strong> – Mocks, Tests, API-Aufrufe und Doku, alle gegen denselben Vertrag verifiziert.",
      "why.kicker": "Warum Powerduck",
      "why.title": "Eine lokale Datei ersetzt den Werkzeugberg.",
      "why.deck": "Ein einziges OpenAPI-YAML in Ihrem Repository steuert Design, Debug, Tests, Mocks, Doku und MCP – und Ihre Coding-Agents nutzen dieselbe Datei.",
      "why.old": "Andere",
      "why.pd": "Powerduck",
      "why.1.title": "Eine Datei für alle Bereiche",
      "why.1.body": "Design, Debug, Test, Mock, Dokumentation und MCP aus derselben OpenAPI-Spezifikation – nichts läuft auseinander.",
      "why.1.old": "Getrennte Collection-, Doku-, Mock- und Testdateien",
      "why.1.new": "<strong>Ein YAML</strong> steuert alle Werkzeuge und Ihre Agents",
      "why.2.title": "Jede Antwort wird vertraglich geprüft",
      "why.2.body": "Jede Antwort wird mit der OpenAPI-Spezifikation abgeglichen, nicht nur angezeigt – falscher Typ oder Pfad fallen sofort auf.",
      "why.2.old": "Sendet die Anfrage und zeigt die 200-Antwort",
      "why.2.new": "<strong>Spezifikationsabweichung wird sofort markiert</strong>",
      "why.3.title": "Local-First, ohne Konto, Agenten-fähig",
      "why.3.body": "Ihre Dateien bleiben auf Ihrem Rechner und funktionieren ohne Konto oder Upload. Codex, Claude Code und Cursor lesen dasselbe Spezifikationsdokument.",
      "why.3.old": "Cloud-Konto und Upload vor dem Start nötig",
      "why.3.new": "<strong>Läuft lokal</strong>; Ihre Agents lesen dieselbe Datei",
      "start.privacy": "Lokale Arbeit, Remote-Dienste und Ihre Wahl",
    },
    fr: {
      "scenes.all": "Guides par scénario",
      "flow.hero": "Votre agent écrit le code.<br>Powerduck s’occupe de l’API.",
      "flow.sub":
        "Donnez le contrat API à Codex, Claude Code ou Cursor. Générez la documentation depuis le code, testez vos parcours métier avec l’IA et vérifiez les résultats réels, dans un espace API local.",
      "flow.baseNote":
        "Le travail local ne nécessite aucun compte. L’IA distante utilise le modèle choisi ; l’hébergement en ligne nécessite un compte Cloud.",
      "flow.kicker": "VOIR DANS UN WORKFLOW",
      "flow.title":
        "Chaque corvée familière devient un flux guidé par le contrat.",
      "flow.intro":
        "Choisissez une tâche ci-dessous. Powerduck l’exécute depuis le fichier OpenAPI sur votre machine — environnements, tests et mocks inclus, sans compte ni téléversement.",
      "flow.baseTitle":
        "Choisir le local ne devrait pas réduire vos possibilités.",
      "flow.baseBody":
        "Votre espace API local démarre sans compte ni import dans le cloud. Retrouvez requêtes, authentification, environnements et assertions. Choisissez Cloud quand vous souhaitez publier en ligne.",
      "flow.base0": "Import cURL / Postman / OpenAPI",
      "flow.base1": "Authentification et environnements",
      "flow.base2": "Scripts et assertions",
      "flow.base3": "Collections et tests de scénarios",
      "flow.base4": "Serveurs mock locaux",
      "flow.base5": "Débogage de 7 protocoles",
      "flow.difference": "Quelle tâche ne voulez-vous plus répéter à la main ?",
      "flow.all": "Voir les guides par scénario",
      "flow.1.pain":
        "Lisez-vous encore le code source pour vérifier si la documentation API est correcte ?",
      "flow.1.title": "Générez la documentation depuis le projet.",
      "flow.1.body":
        "Analysez un projet compatible depuis votre agent via MCP. Générez une définition API et ouvrez-la sous forme de documentation.",
      "flow.result": "LE RÉSULTAT",
      "flow.1.result":
        "Une définition à vérifier et un lien de documentation local.",
      "flow.promptLabel": "Demandez à votre agent",
      "flow.1.prompt":
        "Analyse ce projet et donne-moi un lien vers sa documentation API.",
      "flow.try": "Essayer ce parcours",
      "flow.2.pain":
        "Avez-vous donné la spécification à l’IA pour recevoir malgré tout d’autres champs et chemins ?",
      "flow.2.title": "Implémentez à partir du vrai contrat API.",
      "flow.2.body":
        "Votre agent lit les vrais chemins, schémas et règles d’authentification via MCP avant d’implémenter. Vérifiez ensuite l’API en cours d’exécution.",
      "flow.2.result":
        "Une implémentation guidée par le contrat, vérifiée sur les réponses réelles.",
      "flow.2.prompt":
        "Implémente cette API à partir de sa définition, puis exécute les tests de contrat.",
      "flow.3.pain":
        "Retestez-vous manuellement le même parcours métier après chaque modification de l’API ?",
      "flow.3.title": "Exécutez le scénario métier complet.",
      "flow.3.body":
        "Décrivez connexion → création de commande → consultation. L’IA compose le scénario, transmet les valeurs entre étapes et l’exécute.",
      "flow.3.result":
        "Les résultats de chaque étape et les assertions en échec, pas seulement un script.",
      "flow.3.prompt":
        "Teste connexion → création de commande → consultation. Montre l’étape qui échoue.",
      "flow.4.pain":
        "Changez-vous d’outil simplement parce que le prochain endpoint utilise un autre protocole ?",
      "flow.4.title": "Examinez sept protocoles au même endroit.",
      "flow.4.body":
        "Déboguez HTTP, GraphQL, WebSocket, SSE, gRPC, MCP et A2A. Examinez réponses, flux et appels d’outils au même endroit.",
      "flow.4.result":
        "Le contrôle manuel pour comprendre précisément ce qui s’est passé.",
      "flow.5.pain":
        "Recopiez-vous requêtes, réponses et contexte à chaque demande d’aide à l’IA ?",
      "flow.5.title": "Enquêtez avec le contexte réel de la requête.",
      "flow.5.body":
        "Fournissez le contexte API pertinent à l’assistant. Demandez-lui d’envoyer une requête, d’examiner la réponse et de cerner le problème.",
      "flow.5.result":
        "Un diagnostic fondé sur les résultats et des modifications à examiner.",
      "flow.5.prompt":
        "Cherche pourquoi cette requête échoue. Examine la réponse avant de proposer une correction.",
      "flow.6.pain":
        "Gérez-vous un hébergement séparé uniquement pour partager votre documentation API et votre MCP ?",
      "flow.6.title": "Publiez documentation et MCP depuis une API.",
      "flow.6.body":
        "Publiez une version de votre API sur Powerduck Cloud. Les personnes lisent la documentation, les clients IA se connectent au MCP.",
      "flow.6.result":
        "Des URL de documentation et de MCP, sans infrastructure d’hébergement à gérer.",
      "scenes.metaTitle":
        "Cas d’usage Powerduck — Du code à la documentation API, aux tests et aux mocks",
      "scenes.metaDescription":
        "Générez la documentation API avec votre assistant, déboguez les requêtes, vérifiez les contrats et simulez les endpoints avant que le backend soit prêt.",
      "scenes.back": "Retour à l’accueil",
      "scenes.jump": "Trouvez votre cas d’usage",
      "flow.solution": "AVEC POWERDUCK",
      "scenes.know": "À savoir",
      "scenes.s1.note":
        "Frameworks pris en charge uniquement. Vérifiez les champs déduits et les avertissements. Les liens locaux fonctionnent sur l’hôte MCP pendant la session.",
      "flow.boundary": "Configuration et conditions",
      "scenes.s3.note":
        "Les contrôles couvrent les opérations, entrées et assertions exécutées. Ils ne garantissent pas tous les comportements du backend.",
      "scenes.s8.note":
        "La prise en charge varie entre bureau et navigateur. Utilisez l’application de bureau pour les transports natifs comme gRPC.",
      "scenes.s5.note":
        "Les fonctions IA nécessitent un modèle configuré. Avec un fournisseur distant, le contexte transmis quitte votre appareil. L’édition manuelle ne nécessite pas d’IA.",
      "scenes.s6.note":
        "L’hébergement Cloud utilise le quota de votre compte. Vérifiez les exemples et les informations internes de la définition avant de la partager.",
      "scenes.ready": "Commencez par une seule API.",
      "scenes.readyBody":
        "Ouvrez une spécification existante ou essayez l’exemple intégré. Découvrez le parcours avant de connecter votre projet.",
      "scenes.download": "Télécharger Powerduck",
      "scenes.example": "Essayer l’espace de travail web",
      "quick.kicker": "COMMENCEZ SUR VOTRE MACHINE",
      "quick.title": "Téléchargez. Retrouvez votre vrai travail.",
      "quick.deck":
        "Powerduck est un espace API de bureau. Ouvrez un fichier local, envoyez une première requête, puis connectez votre agent quand vous le souhaitez. Sans compte pour commencer.",
      "quick.desktopTag": "VOTRE ESPACE PRINCIPAL",
      "quick.desktopTitle": "Faites-en votre atelier API.",
      "quick.desktopBody":
        "Fichiers locaux, analyse de code et débogage des protocoles natifs : tout se passe ici. Connectez le modèle IA choisi pour vous aider à concevoir, enquêter et tester.",
      "quick.browserTag": "VOUS VOULEZ D’ABORD VOIR ?",
      "quick.browserTitle": "Un aperçu rapide dans le navigateur.",
      "quick.browserBody":
        "La démo web utilise un modèle cloud partagé et nécessite une connexion. Pour travailler en local sans compte, téléchargez l’application de bureau.",
      "flow.openWeb": "Ouvrir l’application web",
      "flow.diagramLabel": "Exemple de parcours",
      "flow.tab1": "Rédiger la documentation",
      "flow.tab2": "Corriger le code de l’IA",
      "flow.tab3": "Retester les parcours",
      "flow.tab4": "Changer d’outil de débogage",
      "flow.tab5": "Expliquer les erreurs à l’IA",
      "flow.tab6": "Gérer l’hébergement",

      "hv.local": "OpenAPI 3.1 · fichier local",
      "hv.contract": "Un contrat OpenAPI",
      "hv.compile": "Compilé en un serveur MCP exécutable · 12 outils appelables",
      "hv.agentTitle": "Votre agent de code",
      "hv.out.ops": "12 opérations trouvées",
      "hv.out.mock": "Serveur mock actif sur :4010",
      "hv.out.tests": "orders.test.js généré",
      "hv.out.call": "200 OK · vérifié par rapport au contrat",
      "hv.out.docs": "Documentation de référence mise à jour",
      "hv.foot": "Un fichier OpenAPI se compile en outils <strong>appelés par votre agent</strong> — mocks, tests, appels d’API et docs, tous vérifiés par rapport au même contrat.",
      "why.kicker": "Pourquoi Powerduck",
      "why.title": "Un fichier local remplace l’empilement d’outils API.",
      "why.deck": "Un seul YAML OpenAPI dans votre dépôt pilote la conception, le débogage, les tests, les mocks, la docs et MCP — et vos agents utilisent ce même fichier.",
      "why.old": "Autres",
      "why.pd": "Powerduck",
      "why.1.title": "Un fichier pour chaque surface",
      "why.1.body": "Concevez, déboguez, testez, mockez, documentez et exposez MCP depuis la même spec OpenAPI : rien ne diverge.",
      "why.1.old": "Fichiers séparés de collection, docs, mocks et tests",
      "why.1.new": "<strong>Un YAML</strong> pilote tous les outils et vos agents",
      "why.2.title": "Chaque réponse est vérifiée par le contrat",
      "why.2.body": "Chaque réponse est contrôlée contre la spec OpenAPI, pas seulement affichée — un mauvais type ou chemin est repéré aussitôt.",
      "why.2.old": "Envoie la requête et affiche la réponse 200",
      "why.2.new": "<strong>L’écart de spec est signalé</strong> dès le retour de la réponse",
      "why.3.title": "Local-first, sans compte, prêt pour les agents",
      "why.3.body": "Vos fichiers restent sur votre machine et fonctionnent sans compte ni téléversement. Codex, Claude Code et Cursor lisent la même spec que vous.",
      "why.3.old": "Compte cloud et téléversement requis avant de démarrer",
      "why.3.new": "<strong>Fonctionne en local</strong> ; vos agents lisent le même fichier",
      "start.privacy": "Travail local, services distants et vos choix",
    },
    es: {
      "scenes.all": "Guías por escenario",
      "flow.hero":
        "Tu agente escribe el código.<br>Powerduck se encarga de la API.",
      "flow.sub":
        "Dale el contrato de la API a Codex, Claude Code o Cursor. Genera documentación desde el código, ejecuta flujos de negocio con IA y comprueba resultados reales en un espacio de trabajo local.",
      "flow.baseNote":
        "El trabajo local no requiere cuenta. La IA remota usa el servicio de modelos que elijas; el alojamiento en línea requiere una cuenta Cloud.",
      "flow.kicker": "VÉALO EN UN FLUJO",
      "flow.title":
        "Cada tarea familiar se convierte en un flujo basado en el contrato.",
      "flow.intro":
        "Elige una tarea a continuación. Powerduck la ejecuta desde el archivo OpenAPI en tu equipo — con entornos, pruebas y mocks, sin cuenta ni subida.",
      "flow.baseTitle":
        "Elegir lo local no debería significar perder funciones.",
      "flow.baseBody":
        "Tu espacio de API local arranca sin cuenta ni subida de archivos. Conserva tus peticiones, autenticación, entornos y aserciones. Elige Cloud cuando quieras publicar en línea.",
      "flow.base0": "Importar cURL / Postman / OpenAPI",
      "flow.base1": "Autenticación y entornos",
      "flow.base2": "Scripts y aserciones",
      "flow.base3": "Colecciones y pruebas de escenarios",
      "flow.base4": "Servidores mock locales",
      "flow.base5": "Depuración de 7 protocolos",
      "flow.difference": "¿Qué trabajo no quieres seguir repitiendo a mano?",
      "flow.all": "Ver guías por escenario",
      "flow.1.pain":
        "¿Todavía lees el código fuente para comprobar si la documentación de la API es correcta?",
      "flow.1.title": "Genera documentación desde el proyecto.",
      "flow.1.body":
        "Analiza un proyecto compatible desde tu agente mediante MCP. Genera una definición de API y ábrela como documentación.",
      "flow.result": "EL RESULTADO",
      "flow.1.result":
        "Una definición revisable y un enlace local a la documentación.",
      "flow.promptLabel": "Pídele a tu agente",
      "flow.1.prompt":
        "Analiza este proyecto y dame un enlace a la documentación de su API.",
      "flow.try": "Probar este flujo",
      "flow.2.pain":
        "¿Le has dado la especificación a la IA y aun así te devuelve otros campos y rutas?",
      "flow.2.title": "Implementa según el contrato real de la API.",
      "flow.2.body":
        "Tu agente lee las rutas, esquemas y requisitos de autenticación reales mediante MCP antes de implementar. Después verifica la API en ejecución.",
      "flow.2.result":
        "Una implementación guiada por el contrato y comprobada con respuestas reales.",
      "flow.2.prompt":
        "Implementa esta API según su definición y ejecuta pruebas de contrato.",
      "flow.3.pain":
        "¿Repites manualmente el mismo flujo de negocio tras cada cambio en la API?",
      "flow.3.title": "Ejecuta el escenario de negocio completo.",
      "flow.3.body":
        "Describe iniciar sesión → crear pedido → consultarlo. La IA organiza el escenario, pasa valores entre pasos y lo ejecuta.",
      "flow.3.result":
        "Resultados por paso y aserciones fallidas, no solo un script de pruebas.",
      "flow.3.prompt":
        "Prueba iniciar sesión → crear pedido → consultarlo. Muéstrame qué paso falla.",
      "flow.4.pain":
        "¿Cambias de herramienta solo porque el siguiente endpoint usa otro protocolo?",
      "flow.4.title": "Examina siete protocolos en un solo lugar.",
      "flow.4.body":
        "Depura HTTP, GraphQL, WebSocket, SSE, gRPC, MCP y A2A. Revisa respuestas, flujos y llamadas a herramientas en el mismo lugar.",
      "flow.4.result": "Control manual para entender exactamente qué ocurrió.",
      "flow.5.pain":
        "¿Vuelves a copiar peticiones, respuestas y contexto cada vez que pides ayuda a la IA?",
      "flow.5.title": "Investiga con el contexto real de la petición.",
      "flow.5.body":
        "Dale al asistente el contexto relevante de la API. Pídele que envíe una petición, revise la respuesta y ayude a acotar el fallo.",
      "flow.5.result":
        "Un diagnóstico basado en resultados reales y cambios que puedes revisar.",
      "flow.5.prompt":
        "Investiga por qué falla esta petición. Revisa la respuesta antes de proponer un arreglo.",
      "flow.6.pain":
        "¿Mantienes un alojamiento aparte solo para compartir documentación de API y MCP?",
      "flow.6.title": "Publica documentación y MCP desde una API.",
      "flow.6.body":
        "Publica una versión de tu API en Powerduck Cloud. Las personas reciben documentación legible y los clientes de IA, un endpoint MCP.",
      "flow.6.result":
        "URL de documentación y MCP sin mantener tu propia infraestructura de alojamiento.",
      "scenes.metaTitle":
        "Casos de uso de Powerduck — Del código a la documentación API, pruebas y mocks",
      "scenes.metaDescription":
        "Genera documentación API con tu asistente, depura solicitudes reales, verifica contratos y simula endpoints antes de que el backend esté listo.",
      "scenes.back": "Volver al inicio",
      "scenes.jump": "Encuentra tu caso de uso",
      "flow.solution": "CON POWERDUCK",
      "scenes.know": "Ten en cuenta",
      "scenes.s1.note":
        "Solo frameworks compatibles. Revisa los campos inferidos y las advertencias. Los enlaces locales funcionan en el equipo del servidor MCP mientras dure la sesión.",
      "flow.boundary": "Configuración y requisitos",
      "scenes.s3.note":
        "Las comprobaciones cubren las operaciones, entradas y aserciones ejecutadas. No garantizan todos los comportamientos del backend.",
      "scenes.s8.note":
        "La compatibilidad varía entre escritorio y navegador. Usa la aplicación de escritorio para transportes nativos como gRPC.",
      "scenes.s5.note":
        "Las funciones de IA necesitan un modelo configurado. Con un proveedor remoto, el contexto enviado sale de tu dispositivo. La edición manual no requiere IA.",
      "scenes.s6.note":
        "El alojamiento Cloud usa la cuota de tu cuenta. Revisa los ejemplos y la información interna de la definición antes de compartirla.",
      "scenes.ready": "Empieza probando una sola API.",
      "scenes.readyBody":
        "Abre una especificación existente o usa el ejemplo integrado. Conoce el flujo antes de conectar tu proyecto.",
      "scenes.download": "Descargar Powerduck",
      "scenes.example": "Probar el espacio web",
      "quick.kicker": "EMPIEZA EN TU EQUIPO",
      "quick.title": "Descarga. Recupera tu tiempo de trabajo.",
      "quick.deck":
        "Powerduck es un espacio de API de escritorio. Abre un archivo local, envía tu primera petición y conecta tu agente cuando lo necesites. Sin cuenta para empezar.",
      "quick.desktopTag": "TU ESPACIO PRINCIPAL",
      "quick.desktopTitle": "Haz de él tu banco de trabajo para API.",
      "quick.desktopBody":
        "Archivos locales, análisis de código y depuración de protocolos nativos, en el escritorio. Conecta el modelo de IA que elijas para ayudarte a diseñar, investigar o probar.",
      "quick.browserTag": "¿PRIMERO QUIERES ECHAR UN VISTAZO?",
      "quick.browserTitle": "Una visita rápida desde el navegador.",
      "quick.browserBody":
        "La demo web usa un modelo compartido en la nube y requiere iniciar sesión. Para trabajar en local sin cuenta, descarga la aplicación de escritorio.",
      "flow.openWeb": "Abrir aplicación web",
      "flow.diagramLabel": "Ejemplo de flujo",
      "flow.tab1": "Escribir documentación",
      "flow.tab2": "Corregir código de la IA",
      "flow.tab3": "Repetir pruebas de negocio",
      "flow.tab4": "Cambiar de depurador",
      "flow.tab5": "Explicar fallos a la IA",
      "flow.tab6": "Administrar alojamiento",

      "hv.local": "OpenAPI 3.1 · archivo local",
      "hv.contract": "Un contrato OpenAPI",
      "hv.compile": "Compilado en un servidor MCP ejecutable · 12 herramientas invocables",
      "hv.agentTitle": "Tu agente de programación",
      "hv.out.ops": "12 operaciones encontradas",
      "hv.out.mock": "Servidor mock activo en :4010",
      "hv.out.tests": "orders.test.js generado",
      "hv.out.call": "200 OK · verificado contra el contrato",
      "hv.out.docs": "Documentación de referencia actualizada",
      "hv.foot": "Un archivo OpenAPI se compila en herramientas que <strong>tu agente llama</strong>: mocks, pruebas, llamadas a la API y documentación, todo verificado contra el mismo contrato.",
      "why.kicker": "Por qué Powerduck",
      "why.title": "Un archivo local sustituye el montón de herramientas API.",
      "why.deck": "Un único YAML OpenAPI en tu repo impulsa diseño, depuración, pruebas, mocks, documentación y MCP, y tus agentes de código usan ese mismo archivo.",
      "why.old": "Otros",
      "why.pd": "Powerduck",
      "why.1.title": "Un archivo para todas las funciones",
      "why.1.body": "Diseña, depura, prueba, simula, documenta y expone MCP desde la misma especificación OpenAPI, para que nada se desincronice.",
      "why.1.old": "Archivos separados de colección, documentación, mocks y pruebas",
      "why.1.new": "<strong>Un YAML</strong> impulsa todas las herramientas y tus agentes",
      "why.2.title": "Cada respuesta se verifica con el contrato",
      "why.2.body": "Cada respuesta se comprueba con la especificación OpenAPI, no solo se muestra, de modo que un tipo o ruta incorrectos se detectan al instante.",
      "why.2.old": "Envía la solicitud y muestra la respuesta 200",
      "why.2.new": "<strong>La desviación de la spec se marca</strong> en cuanto llega la respuesta",
      "why.3.title": "Local-first, sin cuenta, listo para agentes",
      "why.3.body": "Tus archivos permanecen en tu equipo y funcionan sin cuenta ni subida. Codex, Claude Code y Cursor leen la misma especificación que tú.",
      "why.3.old": "Se requiere cuenta en la nube y subida para empezar",
      "why.3.new": "<strong>Se ejecuta en local</strong>; tus agentes leen el mismo archivo",
      "start.privacy": "Trabajo local, servicios remotos y tus decisiones",
    },
  };
  Object.keys(messages).forEach(function (l) {
    Object.assign(window.POWERDUCK_I18N.messages[l], messages[l]);
  });
})();
