// Complete marketing copy for all six locales. Load before common.js.
(function () {
  "use strict";
  var messages = {
    en: {
      "scenes.all": "Explore all use cases",
      "flow.hero": "Your agent writes the code.<br>Powerduck handles the API.",
      "flow.sub":
        "Give Codex, Claude Code or Cursor the API contract. Turn code into docs, run business scenarios with AI, and check real results — from a local-first API workspace.",
      "flow.baseNote":
        "Local work needs no account. Remote AI uses your chosen model service; online hosting requires a Cloud account.",
      "flow.kicker": "DOES THIS SOUND FAMILIAR?",
      "flow.title": "Do you need a cloud login just to test a local API?",
      "flow.intro":
        "Keep your API files on your machine and start without an account. Connect AI or publish online when you choose to.",
      "flow.baseTitle": "A local workspace. Your files, under your control.",
      "flow.baseBody":
        "Your local API workspace starts without an account or an upload. Bring your requests, auth, environments and assertions with you. Choose Cloud when you want to publish online.",
      "flow.base0": "cURL / Postman / OpenAPI import",
      "flow.base1": "Auth & environments",
      "flow.base2": "Scripts & assertions",
      "flow.base3": "Collections & scenario tests",
      "flow.base4": "Local mock servers",
      "flow.base5": "7-protocol debugging",
      "flow.difference": "Do these problems keep interrupting your work?",
      "flow.all": "Explore all workflows",
      "flow.1.pain":
        "Do you still read the source code to find out whether the API docs are right?",
      "flow.1.title": "Stop documenting from a blank page.",
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
      "flow.2.title":
        "Give your agent the contract, not another guessing game.",
      "flow.2.body":
        "Connect your coding agent to Powerduck’s MCP. Let it read the actual paths, schemas and auth before implementing, then verify the running API.",
      "flow.2.result":
        "Implementation guided by the contract, checked against real responses.",
      "flow.2.prompt":
        "Implement this API from its definition, then run contract tests.",
      "flow.3.pain":
        "Do you manually repeat the same business flow after every API change?",
      "flow.3.title": "Describe the flow. Let AI run the checks.",
      "flow.3.body":
        "Describe a flow such as sign in → create an order → retrieve it. Let AI compose the scenario, pass values between steps and execute the test.",
      "flow.3.result":
        "Step-by-step results and failed assertions, not just a generated test script.",
      "flow.3.prompt":
        "Test sign in → create an order → retrieve it. Show which step fails.",
      "flow.4.pain":
        "Do you switch tools just because the next endpoint uses a different protocol?",
      "flow.4.title": "Keep the investigation in one workspace.",
      "flow.4.body":
        "Debug HTTP, GraphQL, WebSocket, SSE, gRPC, MCP and A2A. Inspect responses, streams and tool calls in the same workspace.",
      "flow.4.result":
        "Manual control when you need to inspect exactly what happened.",
      "flow.5.pain":
        "Do you copy requests and responses into chat every time you need AI’s help?",
      "flow.5.title": "Keep your assistant beside the failing request.",
      "flow.5.body":
        "Give the assistant the relevant API context. Ask it to send a request, inspect the response and help narrow down the failure.",
      "flow.5.result":
        "A diagnosis grounded in request results, with changes you can review.",
      "flow.5.prompt":
        "Investigate why this request fails. Check the response before suggesting a fix.",
      "flow.6.pain":
        "Do you maintain a separate hosting setup just to share API docs and MCP?",
      "flow.6.title": "Send the link. Skip the hosting setup.",
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
        "Explore the editor and docs with a sample or a public API definition. This is a browser preview, not Cloud hosting. Download the desktop app for your everyday workflow.",
      "flow.openWeb": "Open web app",
    },
    "zh-CN": {
      "scenes.all": "查看全部使用场景",
      "flow.hero": "代码交给编程助手。<br>API 交给 Powerduck。",
      "flow.sub":
        "让 Codex、Claude Code、Cursor 按接口定义写代码。扫描代码生成文档，让 AI 编排业务测试、执行并给出结果——都从本地优先的 API 工作台开始。",
      "flow.baseNote":
        "本地工作无需账号；远程 AI 使用你选择的模型服务，在线托管需要 Cloud 账号。",
      "flow.kicker": "你是否也遇到过这些问题？",
      "flow.title": "你是否只想调试本地接口，却得先登录一个云端账号？",
      "flow.intro":
        "API 文件留在自己的电脑上，无需账号即可开始。需要 AI 协助或在线发布时，再由你决定接入。",
      "flow.baseTitle": "本地工作台，文件由你掌握。",
      "flow.baseBody":
        "本地 API 工作台，无需账号，也不用先上传文件。请求、鉴权、环境、断言，熟悉的工作照常做。需要在线发布时，再选择 Cloud。",
      "flow.base0": "导入 cURL / Postman / OpenAPI",
      "flow.base1": "鉴权与环境变量",
      "flow.base2": "脚本与断言",
      "flow.base3": "请求集合与场景测试",
      "flow.base4": "本地 Mock 服务",
      "flow.base5": "七种协议调试",
      "flow.difference": "你是否还在为这些问题反复花时间？",
      "flow.all": "查看全部工作流",
      "flow.1.pain": "你是否拿到了接口文档，却还得翻源码才能确认它写得对不对？",
      "flow.1.title": "别再从空白页开始补文档。",
      "flow.1.body":
        "在编程助手里连接 Powerduck MCP，扫描已适配框架的项目，生成接口定义并打开文档。",
      "flow.result": "你得到的结果",
      "flow.1.result": "一份可审阅的接口定义，以及能打开的本机文档链接。",
      "flow.promptLabel": "可以直接这样说",
      "flow.1.prompt": "扫描这个项目，生成 API 文档，给我一个可以打开的链接。",
      "flow.try": "试试这个流程",
      "flow.2.pain": "你是否把文档给了 AI，生成的字段和路径却仍然对不上？",
      "flow.2.title": "让 AI 按约定写，别让你替它收拾。",
      "flow.2.body":
        "让编程助手通过 MCP 读取真实的路径、数据结构与鉴权要求，再按定义实现，最后对运行中的接口做验证。",
      "flow.2.result": "代码有定义可依，结果有真实响应可验。",
      "flow.2.prompt":
        "根据这份 API 定义实现接口，再运行契约测试，检查是否一致。",
      "flow.3.pain": "你是否每改一次接口，就得手动重跑一遍相同的业务流程？",
      "flow.3.title": "业务你来说，测试让 AI 跑。",
      "flow.3.body":
        "描述业务流程，让 AI 组织测试步骤、传递上一步的返回值，再运行整个场景。",
      "flow.3.result": "每一步的执行结果和失败断言，不是只给你一段测试代码。",
      "flow.3.prompt":
        "测试登录 → 创建订单 → 查询订单，告诉我哪一步失败、为什么。",
      "flow.4.pain": "你是否只是换了一种接口协议，就不得不换一个调试工具？",
      "flow.4.title": "换协议，不用换工作台。",
      "flow.4.body":
        "HTTP、GraphQL、WebSocket、SSE、gRPC、MCP、A2A，在同一工作区查看响应、消息流和工具调用。",
      "flow.4.result": "需要亲自排查时，每一次请求和返回都看得清。",
      "flow.5.pain": "你是否每次让 AI 排错，都得重新复制请求、响应和接口背景？",
      "flow.5.title": "别搬来搬去，让 AI 就在这里查。",
      "flow.5.body":
        "给助手相关接口上下文，让它发送请求、查看返回，结合实际结果定位问题，提出可审阅的修改建议。",
      "flow.5.result": "基于真实请求结果的排查，而不是凭空猜原因。",
      "flow.5.prompt": "帮我查这个请求为什么失败，先看响应，再给修改建议。",
      "flow.6.pain":
        "你是否只是想分享文档和 MCP，却还要单独搭建、维护托管服务？",
      "flow.6.title": "文档和 MCP 发出去，托管的事交给我们。",
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
        "用示例或公开接口定义，看看编辑器和文档长什么样。这是网页版体验，不是 Cloud 托管；日常开发，请下载桌面版。",
      "flow.openWeb": "打开网页版",
    },
    ja: {
      "scenes.all": "すべての活用シーンを見る",
      "flow.hero": "コードは AI エージェントに。<br>API は Powerduck に。",
      "flow.sub":
        "Codex、Claude Code、Cursor に API 定義を渡す。コードからドキュメントを生成し、AI で業務シナリオを実行して実際の結果を確かめる。ローカル優先の API ワークスペースで。",
      "flow.baseNote":
        "ローカル作業はアカウント不要。リモート AI は選択したモデルサービスを使用し、オンライン公開には Cloud アカウントが必要です。",
      "flow.kicker": "こんな経験はありませんか？",
      "flow.title":
        "ローカル API を試すだけなのに、クラウドへのログインが必要ですか？",
      "flow.intro":
        "API ファイルは自分のパソコンに置いたまま、アカウントなしで開始。AI への接続やオンライン公開は、必要なときに選べます。",
      "flow.baseTitle": "ローカルで作業。ファイルは自分で管理。",
      "flow.baseBody":
        "ローカルの API 作業はアカウントもアップロードも不要。リクエスト、認証、環境、アサーションをそのまま使い、オンライン公開が必要なときに Cloud を選べます。",
      "flow.base0": "cURL / Postman / OpenAPI のインポート",
      "flow.base1": "認証と環境変数",
      "flow.base2": "スクリプトとアサーション",
      "flow.base3": "コレクションとシナリオテスト",
      "flow.base4": "ローカル Mock サーバー",
      "flow.base5": "7 プロトコルのデバッグ",
      "flow.difference": "こんな問題に、何度も時間を使っていませんか？",
      "flow.all": "すべてのワークフローを見る",
      "flow.1.pain":
        "ドキュメントが正しいか確かめるために、ソースコードを読んでいませんか？",
      "flow.1.title": "白紙からドキュメントを書かない。",
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
      "flow.2.title": "AI に推測させず、定義を渡す。",
      "flow.2.body":
        "エージェントが MCP から実際のパス、スキーマ、認証要件を読んで実装。起動した API を検証します。",
      "flow.2.result": "定義に基づく実装と、実際のレスポンスによる確認。",
      "flow.2.prompt":
        "この API 定義に沿って実装し、契約テストで一致を確認してください。",
      "flow.3.pain":
        "API を変えるたびに、同じ業務フローを手動でテストしていませんか？",
      "flow.3.title": "業務フローを伝えたら、AI がテスト。",
      "flow.3.body":
        "ログイン → 注文作成 → 取得のような流れを伝えると、AI がステップを構成し、値を引き継いで実行します。",
      "flow.3.result":
        "生成コードだけでなく、各ステップの結果と失敗したアサーション。",
      "flow.3.prompt":
        "ログイン → 注文作成 → 取得をテストし、失敗したステップを教えてください。",
      "flow.4.pain":
        "プロトコルが変わるだけで、別のデバッグツールが必要ですか？",
      "flow.4.title": "調査を一つのワークスペースに。",
      "flow.4.body":
        "HTTP、GraphQL、WebSocket、SSE、gRPC、MCP、A2A。レスポンス、ストリーム、ツール呼び出しを同じ画面で確認。",
      "flow.4.result": "何が起きたかを自分で詳しく調べられる操作性。",
      "flow.5.pain":
        "AI に調査を頼むたびに、リクエストやレスポンスを貼り直していませんか？",
      "flow.5.title": "失敗したリクエストの隣に、AI を。",
      "flow.5.body":
        "関連する API 情報を助手に渡し、送信とレスポンス確認を依頼。実際の結果から原因を絞り込みます。",
      "flow.5.result": "リクエスト結果に基づく調査と、確認できる修正案。",
      "flow.5.prompt":
        "このリクエストの失敗を調べてください。修正案の前にレスポンスを確認してください。",
      "flow.6.pain":
        "ドキュメントと MCP を共有するだけなのに、別のホスティング環境を管理していませんか？",
      "flow.6.title": "リンクを送る。ホスティングは任せる。",
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
        "サンプルや公開 API 定義で編集画面とドキュメントを確認できます。Cloud ホスティングではなく、ブラウザー版の体験です。日々の作業にはデスクトップ版を。",
      "flow.openWeb": "ブラウザー版を開く",
    },
    de: {
      "scenes.all": "Alle Anwendungsfälle ansehen",
      "flow.hero":
        "Dein Agent schreibt den Code.<br>Powerduck übernimmt die API.",
      "flow.sub":
        "Gib Codex, Claude Code oder Cursor die API-Definition. Erzeuge Dokumentation aus Code, führe Geschäftsabläufe mit KI aus und prüfe echte Ergebnisse — in einem lokalen API-Arbeitsbereich.",
      "flow.baseNote":
        "Lokale Arbeit braucht kein Konto. Remote-KI nutzt deinen gewählten Modelldienst; Online-Hosting erfordert ein Cloud-Konto.",
      "flow.kicker": "KOMMT DIR DAS BEKANNT VOR?",
      "flow.title":
        "Brauchst du einen Cloud-Login, nur um eine lokale API zu testen?",
      "flow.intro":
        "Deine API-Dateien bleiben auf deinem Rechner. Starte ohne Konto und entscheide selbst, wann du KI verbindest oder online veröffentlichst.",
      "flow.baseTitle": "Lokal arbeiten. Deine Dateien selbst kontrollieren.",
      "flow.baseBody":
        "Dein lokaler API-Arbeitsbereich startet ohne Konto und Upload. Anfragen, Authentifizierung, Umgebungen und Assertions bleiben dabei. Cloud wählst du, wenn du online veröffentlichen willst.",
      "flow.base0": "cURL / Postman / OpenAPI importieren",
      "flow.base1": "Authentifizierung & Umgebungen",
      "flow.base2": "Skripte & Assertions",
      "flow.base3": "Sammlungen & Szenariotests",
      "flow.base4": "Lokale Mock-Server",
      "flow.base5": "7 Protokolle debuggen",
      "flow.difference": "Kosten dich diese Probleme immer wieder Zeit?",
      "flow.all": "Alle Workflows entdecken",
      "flow.1.pain":
        "Liest du noch den Quellcode, um herauszufinden, ob die API-Dokumentation stimmt?",
      "flow.1.title":
        "Dokumentation muss nicht mit einer leeren Seite anfangen.",
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
      "flow.2.title": "Gib deinem Agenten den Vertrag statt Raum zum Raten.",
      "flow.2.body":
        "Lass deinen Agenten per MCP die tatsächlichen Pfade, Schemas und Authentifizierung lesen, bevor er implementiert. Prüfe danach die laufende API.",
      "flow.2.result":
        "Implementierung nach Vertrag, geprüft an echten Antworten.",
      "flow.2.prompt":
        "Implementiere diese API nach ihrer Definition und führe Vertragstests aus.",
      "flow.3.pain":
        "Testest du nach jeder API-Änderung denselben Geschäftsablauf wieder von Hand?",
      "flow.3.title": "Beschreibe den Ablauf. Lass die KI prüfen.",
      "flow.3.body":
        "Beschreibe Anmeldung → Bestellung anlegen → abrufen. Die KI erstellt das Szenario, reicht Werte zwischen Schritten weiter und führt es aus.",
      "flow.3.result":
        "Ergebnisse je Schritt und fehlgeschlagene Assertions statt nur Testcode.",
      "flow.3.prompt":
        "Teste Anmeldung → Bestellung anlegen → abrufen. Zeige den fehlerhaften Schritt.",
      "flow.4.pain":
        "Wechselst du das Tool, nur weil der nächste Endpunkt ein anderes Protokoll nutzt?",
      "flow.4.title": "Untersuche das Problem in einem Arbeitsbereich.",
      "flow.4.body":
        "Debugge HTTP, GraphQL, WebSocket, SSE, gRPC, MCP und A2A. Prüfe Antworten, Streams und Tool-Aufrufe an einem Ort.",
      "flow.4.result":
        "Manuelle Kontrolle, wenn du genau verstehen willst, was passiert ist.",
      "flow.5.pain":
        "Kopierst du bei jeder KI-Fehlersuche Anfragen, Antworten und Kontext erneut in den Chat?",
      "flow.5.title": "Hol die KI direkt zur fehlerhaften Anfrage.",
      "flow.5.body":
        "Gib dem Assistenten den relevanten API-Kontext. Lass ihn eine Anfrage senden, die Antwort prüfen und den Fehler eingrenzen.",
      "flow.5.result":
        "Eine Analyse anhand echter Ergebnisse und prüfbare Änderungsvorschläge.",
      "flow.5.prompt":
        "Untersuche diesen Fehler. Prüfe die Antwort, bevor du eine Korrektur vorschlägst.",
      "flow.6.pain":
        "Betreibst du eigenes Hosting, nur um API-Dokumentation und MCP zu teilen?",
      "flow.6.title": "Link verschicken. Hosting-Einrichtung sparen.",
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
        "Erkunde Editor und Dokumentation mit einem Beispiel oder einer öffentlichen API-Definition. Das ist eine Browser-Vorschau, kein Cloud-Hosting. Für den Alltag gibt es die Desktop-App.",
      "flow.openWeb": "Web-App öffnen",
    },
    fr: {
      "scenes.all": "Voir tous les cas d’usage",
      "flow.hero": "Votre agent écrit le code.<br>Powerduck s’occupe de l’API.",
      "flow.sub":
        "Donnez le contrat API à Codex, Claude Code ou Cursor. Générez la documentation depuis le code, testez vos parcours métier avec l’IA et vérifiez les résultats réels, dans un espace API local.",
      "flow.baseNote":
        "Le travail local ne nécessite aucun compte. L’IA distante utilise le modèle choisi ; l’hébergement en ligne nécessite un compte Cloud.",
      "flow.kicker": "VOUS RECONNAISSEZ CES SITUATIONS ?",
      "flow.title":
        "Faut-il vous connecter au cloud pour tester une API locale ?",
      "flow.intro":
        "Gardez vos fichiers API sur votre machine et commencez sans compte. Connectez l’IA ou publiez en ligne quand vous le décidez.",
      "flow.baseTitle": "Un espace local. Vos fichiers sous votre contrôle.",
      "flow.baseBody":
        "Votre espace API local démarre sans compte ni import dans le cloud. Retrouvez requêtes, authentification, environnements et assertions. Choisissez Cloud quand vous souhaitez publier en ligne.",
      "flow.base0": "Import cURL / Postman / OpenAPI",
      "flow.base1": "Authentification et environnements",
      "flow.base2": "Scripts et assertions",
      "flow.base3": "Collections et tests de scénarios",
      "flow.base4": "Serveurs mock locaux",
      "flow.base5": "Débogage de 7 protocoles",
      "flow.difference": "Ces problèmes vous font-ils encore perdre du temps ?",
      "flow.all": "Découvrir tous les parcours",
      "flow.1.pain":
        "Lisez-vous encore le code source pour vérifier si la documentation API est correcte ?",
      "flow.1.title": "Ne repartez pas d’une page blanche pour documenter.",
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
      "flow.2.title":
        "Donnez le contrat à l’agent, au lieu de le laisser deviner.",
      "flow.2.body":
        "Votre agent lit les vrais chemins, schémas et règles d’authentification via MCP avant d’implémenter. Vérifiez ensuite l’API en cours d’exécution.",
      "flow.2.result":
        "Une implémentation guidée par le contrat, vérifiée sur les réponses réelles.",
      "flow.2.prompt":
        "Implémente cette API à partir de sa définition, puis exécute les tests de contrat.",
      "flow.3.pain":
        "Retestez-vous manuellement le même parcours métier après chaque modification de l’API ?",
      "flow.3.title": "Décrivez le parcours. Laissez l’IA le tester.",
      "flow.3.body":
        "Décrivez connexion → création de commande → consultation. L’IA compose le scénario, transmet les valeurs entre étapes et l’exécute.",
      "flow.3.result":
        "Les résultats de chaque étape et les assertions en échec, pas seulement un script.",
      "flow.3.prompt":
        "Teste connexion → création de commande → consultation. Montre l’étape qui échoue.",
      "flow.4.pain":
        "Changez-vous d’outil simplement parce que le prochain endpoint utilise un autre protocole ?",
      "flow.4.title": "Gardez l’enquête dans un seul espace.",
      "flow.4.body":
        "Déboguez HTTP, GraphQL, WebSocket, SSE, gRPC, MCP et A2A. Examinez réponses, flux et appels d’outils au même endroit.",
      "flow.4.result":
        "Le contrôle manuel pour comprendre précisément ce qui s’est passé.",
      "flow.5.pain":
        "Recopiez-vous requêtes, réponses et contexte à chaque demande d’aide à l’IA ?",
      "flow.5.title": "Gardez l’assistant près de la requête qui échoue.",
      "flow.5.body":
        "Fournissez le contexte API pertinent à l’assistant. Demandez-lui d’envoyer une requête, d’examiner la réponse et de cerner le problème.",
      "flow.5.result":
        "Un diagnostic fondé sur les résultats et des modifications à examiner.",
      "flow.5.prompt":
        "Cherche pourquoi cette requête échoue. Examine la réponse avant de proposer une correction.",
      "flow.6.pain":
        "Gérez-vous un hébergement séparé uniquement pour partager votre documentation API et votre MCP ?",
      "flow.6.title":
        "Envoyez le lien. Évitez la mise en place de l’hébergement.",
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
        "Explorez l’éditeur et la documentation avec un exemple ou une définition API publique. Il s’agit d’un aperçu web, pas d’hébergement Cloud. Pour le quotidien, téléchargez l’application.",
      "flow.openWeb": "Ouvrir l’application web",
    },
    es: {
      "scenes.all": "Ver todos los casos de uso",
      "flow.hero":
        "Tu agente escribe el código.<br>Powerduck se encarga de la API.",
      "flow.sub":
        "Dale el contrato de la API a Codex, Claude Code o Cursor. Genera documentación desde el código, ejecuta flujos de negocio con IA y comprueba resultados reales en un espacio de trabajo local.",
      "flow.baseNote":
        "El trabajo local no requiere cuenta. La IA remota usa el servicio de modelos que elijas; el alojamiento en línea requiere una cuenta Cloud.",
      "flow.kicker": "¿TE RESULTA FAMILIAR?",
      "flow.title":
        "¿Necesitas iniciar sesión en la nube solo para probar una API local?",
      "flow.intro":
        "Mantén tus archivos de API en tu equipo y empieza sin cuenta. Conecta la IA o publica en línea cuando tú decidas.",
      "flow.baseTitle": "Un espacio local. Tus archivos bajo tu control.",
      "flow.baseBody":
        "Tu espacio de API local arranca sin cuenta ni subida de archivos. Conserva tus peticiones, autenticación, entornos y aserciones. Elige Cloud cuando quieras publicar en línea.",
      "flow.base0": "Importar cURL / Postman / OpenAPI",
      "flow.base1": "Autenticación y entornos",
      "flow.base2": "Scripts y aserciones",
      "flow.base3": "Colecciones y pruebas de escenarios",
      "flow.base4": "Servidores mock locales",
      "flow.base5": "Depuración de 7 protocolos",
      "flow.difference": "¿Estos problemas siguen quitándote tiempo?",
      "flow.all": "Explorar todos los flujos",
      "flow.1.pain":
        "¿Todavía lees el código fuente para comprobar si la documentación de la API es correcta?",
      "flow.1.title":
        "No empieces la documentación desde una página en blanco.",
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
      "flow.2.title":
        "Dale el contrato al agente, no otra ocasión para adivinar.",
      "flow.2.body":
        "Tu agente lee las rutas, esquemas y requisitos de autenticación reales mediante MCP antes de implementar. Después verifica la API en ejecución.",
      "flow.2.result":
        "Una implementación guiada por el contrato y comprobada con respuestas reales.",
      "flow.2.prompt":
        "Implementa esta API según su definición y ejecuta pruebas de contrato.",
      "flow.3.pain":
        "¿Repites manualmente el mismo flujo de negocio tras cada cambio en la API?",
      "flow.3.title": "Describe el flujo. Deja que la IA lo pruebe.",
      "flow.3.body":
        "Describe iniciar sesión → crear pedido → consultarlo. La IA organiza el escenario, pasa valores entre pasos y lo ejecuta.",
      "flow.3.result":
        "Resultados por paso y aserciones fallidas, no solo un script de pruebas.",
      "flow.3.prompt":
        "Prueba iniciar sesión → crear pedido → consultarlo. Muéstrame qué paso falla.",
      "flow.4.pain":
        "¿Cambias de herramienta solo porque el siguiente endpoint usa otro protocolo?",
      "flow.4.title": "Investiga en un único espacio de trabajo.",
      "flow.4.body":
        "Depura HTTP, GraphQL, WebSocket, SSE, gRPC, MCP y A2A. Revisa respuestas, flujos y llamadas a herramientas en el mismo lugar.",
      "flow.4.result": "Control manual para entender exactamente qué ocurrió.",
      "flow.5.pain":
        "¿Vuelves a copiar peticiones, respuestas y contexto cada vez que pides ayuda a la IA?",
      "flow.5.title": "Mantén al asistente junto a la petición que falla.",
      "flow.5.body":
        "Dale al asistente el contexto relevante de la API. Pídele que envíe una petición, revise la respuesta y ayude a acotar el fallo.",
      "flow.5.result":
        "Un diagnóstico basado en resultados reales y cambios que puedes revisar.",
      "flow.5.prompt":
        "Investiga por qué falla esta petición. Revisa la respuesta antes de proponer un arreglo.",
      "flow.6.pain":
        "¿Mantienes un alojamiento aparte solo para compartir documentación de API y MCP?",
      "flow.6.title":
        "Envía el enlace. Ahorra la configuración del alojamiento.",
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
        "Explora el editor y la documentación con un ejemplo o una definición de API pública. Es una vista previa web, no alojamiento Cloud. Para el trabajo diario, descarga la aplicación.",
      "flow.openWeb": "Abrir aplicación web",
    },
  };
  Object.keys(messages).forEach(function (l) {
    Object.assign(window.POWERDUCK_I18N.messages[l], messages[l]);
  });
})();
