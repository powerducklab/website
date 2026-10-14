// Complete workflow copy for all six marketing locales. Load before common.js.
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
      "flow.kicker": "MORE THAN A REQUEST CLIENT",
      "flow.title": "Sending a request is just the start.",
      "flow.intro":
        "You need APIs that work, docs that match, and an AI that knows what to build. Here’s how Powerduck connects the work.",
      "flow.baseTitle":
        "Your everyday API workbench. No account needed to start.",
      "flow.baseBody":
        "The essentials you expect from a Postman alternative: import requests, configure auth and environments, inspect responses, add assertions and run mocks. Keep your workspace local.",
      "flow.base0": "cURL / Postman / OpenAPI import",
      "flow.base1": "Auth & environments",
      "flow.base2": "Scripts & assertions",
      "flow.base3": "Collections & scenario tests",
      "flow.base4": "Local mock servers",
      "flow.base5": "7-protocol debugging",
      "flow.difference": "Now go beyond sending requests.",
      "flow.all": "Explore all workflows",
      "flow.1.pain": "Code exists. The API docs don’t.",
      "flow.1.title": "Code → API",
      "flow.1.body":
        "Scan a supported project from your coding agent through MCP. Generate an API definition and open it as documentation.",
      "flow.result": "WHAT YOU GET",
      "flow.1.result": "A reviewable API definition + a local docs link.",
      "flow.promptLabel": "Ask your agent",
      "flow.1.prompt":
        "Scan this project and give me an API documentation link.",
      "flow.try": "Try this workflow",
      "flow.2.pain": "AI writes endpoints that don’t match the spec.",
      "flow.2.title": "API → code",
      "flow.2.body":
        "Connect your coding agent to Powerduck’s MCP. Let it read the actual paths, schemas and auth before implementing, then verify the running API.",
      "flow.2.result":
        "Implementation guided by the contract, checked against real responses.",
      "flow.2.prompt":
        "Implement this API from its definition, then run contract tests.",
      "flow.3.pain": "The business flow works… until the next change.",
      "flow.3.title": "AI plans. AI tests. You see the results.",
      "flow.3.body":
        "Describe a flow such as sign in → create an order → retrieve it. Let AI compose the scenario, pass values between steps and execute the test.",
      "flow.3.result":
        "Step-by-step results and failed assertions, not just a generated test script.",
      "flow.3.prompt":
        "Test sign in → create an order → retrieve it. Show which step fails.",
      "flow.4.pain": "Seven protocols. Too many separate tools.",
      "flow.4.title": "One workspace. Seven protocols.",
      "flow.4.body":
        "Debug HTTP, GraphQL, WebSocket, SSE, gRPC, MCP and A2A. Inspect responses, streams and tool calls in the same workspace.",
      "flow.4.result":
        "Manual control when you need to inspect exactly what happened.",
      "flow.5.pain": "An API fails. Now you’re copying logs into chat.",
      "flow.5.title": "Debug with AI beside the request.",
      "flow.5.body":
        "Give the assistant the relevant API context. Ask it to send a request, inspect the response and help narrow down the failure.",
      "flow.5.result":
        "A diagnosis grounded in request results, with changes you can review.",
      "flow.5.prompt":
        "Investigate why this request fails. Check the response before suggesting a fix.",
      "flow.6.pain": "Sharing an API means setting up another service.",
      "flow.6.title": "Publish docs and an MCP endpoint.",
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
    },
    "zh-CN": {
      "scenes.all": "查看全部使用场景",
      "flow.hero": "代码交给编程助手。<br>API 交给 Powerduck。",
      "flow.sub":
        "让 Codex、Claude Code、Cursor 按接口定义写代码。扫描代码生成文档，让 AI 编排业务测试、执行并给出结果——都从本地优先的 API 工作台开始。",
      "flow.baseNote":
        "本地工作无需账号；远程 AI 使用你选择的模型服务，在线托管需要 Cloud 账号。",
      "flow.kicker": "不止是 POSTMAN 的替代品",
      "flow.title": "发出请求，只是起点。",
      "flow.intro":
        "你真正要的是：接口跑得通，文档跟得上，AI 写的代码不跑偏。把这些工作串起来，才是 Powerduck。",
      "flow.baseTitle": "日常 API 工作台，该有的都在。打开就用，无需注册。",
      "flow.baseBody":
        "导入请求、配置鉴权和环境、查看响应、编写断言、运行 Mock——熟悉的 Postman 核心工作流，在本地继续。",
      "flow.base0": "导入 cURL / Postman / OpenAPI",
      "flow.base1": "鉴权与环境变量",
      "flow.base2": "脚本与断言",
      "flow.base3": "请求集合与场景测试",
      "flow.base4": "本地 Mock 服务",
      "flow.base5": "七种协议调试",
      "flow.difference": "真正的差异，从这里开始。",
      "flow.all": "查看全部工作流",
      "flow.1.pain": "代码都写好了，接口文档还没开始。",
      "flow.1.title": "代码即接口",
      "flow.1.body":
        "在编程助手里连接 Powerduck MCP，扫描已适配框架的项目，生成接口定义并打开文档。",
      "flow.result": "你得到的结果",
      "flow.1.result": "一份可审阅的接口定义，以及能打开的本机文档链接。",
      "flow.promptLabel": "可以直接这样说",
      "flow.1.prompt": "扫描这个项目，生成 API 文档，给我一个可以打开的链接。",
      "flow.try": "试试这个流程",
      "flow.2.pain": "AI 写得很快，接口却和约定对不上。",
      "flow.2.title": "接口即代码",
      "flow.2.body":
        "让编程助手通过 MCP 读取真实的路径、数据结构与鉴权要求，再按定义实现，最后对运行中的接口做验证。",
      "flow.2.result": "代码有定义可依，结果有真实响应可验。",
      "flow.2.prompt":
        "根据这份 API 定义实现接口，再运行契约测试，检查是否一致。",
      "flow.3.pain": "登录、下单、查询……改一次就得手测一遍。",
      "flow.3.title": "AI 编排业务测试，执行后直接看结果。",
      "flow.3.body":
        "描述业务流程，让 AI 组织测试步骤、传递上一步的返回值，再运行整个场景。",
      "flow.3.result": "每一步的执行结果和失败断言，不是只给你一段测试代码。",
      "flow.3.prompt":
        "测试登录 → 创建订单 → 查询订单，告诉我哪一步失败、为什么。",
      "flow.4.pain": "HTTP、流式接口、MCP，调一个换一个工具。",
      "flow.4.title": "七种协议，一个调试工作台。",
      "flow.4.body":
        "HTTP、GraphQL、WebSocket、SSE、gRPC、MCP、A2A，在同一工作区查看响应、消息流和工具调用。",
      "flow.4.result": "需要亲自排查时，每一次请求和返回都看得清。",
      "flow.5.pain": "接口报错，还得把请求和响应搬到聊天框。",
      "flow.5.title": "让 AI 在请求旁边帮你排错。",
      "flow.5.body":
        "给助手相关接口上下文，让它发送请求、查看返回，结合实际结果定位问题，提出可审阅的修改建议。",
      "flow.5.result": "基于真实请求结果的排查，而不是凭空猜原因。",
      "flow.5.prompt": "帮我查这个请求为什么失败，先看响应，再给修改建议。",
      "flow.6.pain": "想把 API 给别人用，还得折腾文档站和服务。",
      "flow.6.title": "文档和 MCP 服务，直接托管。",
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
    },
    ja: {
      "scenes.all": "すべての活用シーンを見る",
      "flow.hero": "コードは AI エージェントに。<br>API は Powerduck に。",
      "flow.sub":
        "Codex、Claude Code、Cursor に API 定義を渡す。コードからドキュメントを生成し、AI で業務シナリオを実行して実際の結果を確かめる。ローカル優先の API ワークスペースで。",
      "flow.baseNote":
        "ローカル作業はアカウント不要。リモート AI は選択したモデルサービスを使用し、オンライン公開には Cloud アカウントが必要です。",
      "flow.kicker": "リクエスト送信の、その先へ",
      "flow.title": "リクエストを送って、終わりではない。",
      "flow.intro":
        "動く API、実装に合ったドキュメント、仕様を理解する AI。Powerduck は、その仕事をつなぎます。",
      "flow.baseTitle": "日々の API 作業に。アカウントなしで始められる。",
      "flow.baseBody":
        "リクエストのインポート、認証・環境設定、レスポンス確認、アサーション、Mock。Postman 代替に求める基本機能を、ローカルのワークスペースで。",
      "flow.base0": "cURL / Postman / OpenAPI のインポート",
      "flow.base1": "認証と環境変数",
      "flow.base2": "スクリプトとアサーション",
      "flow.base3": "コレクションとシナリオテスト",
      "flow.base4": "ローカル Mock サーバー",
      "flow.base5": "7 プロトコルのデバッグ",
      "flow.difference": "送信だけでは解決しない仕事に。",
      "flow.all": "すべてのワークフローを見る",
      "flow.1.pain": "コードはある。でも API ドキュメントがない。",
      "flow.1.title": "コード → API",
      "flow.1.body":
        "MCP 経由で対応フレームワークのプロジェクトを解析。API 定義を生成し、ドキュメントとして開きます。",
      "flow.result": "得られるもの",
      "flow.1.result": "確認できる API 定義とローカルのドキュメントリンク。",
      "flow.promptLabel": "エージェントへの依頼例",
      "flow.1.prompt":
        "このプロジェクトを解析して、API ドキュメントのリンクをください。",
      "flow.try": "この流れを試す",
      "flow.2.pain": "AI が作ったエンドポイントが仕様と違う。",
      "flow.2.title": "API → コード",
      "flow.2.body":
        "エージェントが MCP から実際のパス、スキーマ、認証要件を読んで実装。起動した API を検証します。",
      "flow.2.result": "定義に基づく実装と、実際のレスポンスによる確認。",
      "flow.2.prompt":
        "この API 定義に沿って実装し、契約テストで一致を確認してください。",
      "flow.3.pain": "業務フローを変更のたびに手動で確認している。",
      "flow.3.title": "AI が組み立て、実行。結果を確認。",
      "flow.3.body":
        "ログイン → 注文作成 → 取得のような流れを伝えると、AI がステップを構成し、値を引き継いで実行します。",
      "flow.3.result":
        "生成コードだけでなく、各ステップの結果と失敗したアサーション。",
      "flow.3.prompt":
        "ログイン → 注文作成 → 取得をテストし、失敗したステップを教えてください。",
      "flow.4.pain": "プロトコルが変わるたびにツールを切り替える。",
      "flow.4.title": "7 プロトコルを一つの場所で。",
      "flow.4.body":
        "HTTP、GraphQL、WebSocket、SSE、gRPC、MCP、A2A。レスポンス、ストリーム、ツール呼び出しを同じ画面で確認。",
      "flow.4.result": "何が起きたかを自分で詳しく調べられる操作性。",
      "flow.5.pain": "失敗のたびにログをチャットへ貼り付けている。",
      "flow.5.title": "リクエストの隣で AI とデバッグ。",
      "flow.5.body":
        "関連する API 情報を助手に渡し、送信とレスポンス確認を依頼。実際の結果から原因を絞り込みます。",
      "flow.5.result": "リクエスト結果に基づく調査と、確認できる修正案。",
      "flow.5.prompt":
        "このリクエストの失敗を調べてください。修正案の前にレスポンスを確認してください。",
      "flow.6.pain": "API を共有するために別のサーバーを用意している。",
      "flow.6.title": "ドキュメントと MCP を公開。",
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
    },
    de: {
      "scenes.all": "Alle Anwendungsfälle ansehen",
      "flow.hero":
        "Dein Agent schreibt den Code.<br>Powerduck übernimmt die API.",
      "flow.sub":
        "Gib Codex, Claude Code oder Cursor die API-Definition. Erzeuge Dokumentation aus Code, führe Geschäftsabläufe mit KI aus und prüfe echte Ergebnisse — in einem lokalen API-Arbeitsbereich.",
      "flow.baseNote":
        "Lokale Arbeit braucht kein Konto. Remote-KI nutzt deinen gewählten Modelldienst; Online-Hosting erfordert ein Cloud-Konto.",
      "flow.kicker": "MEHR ALS EIN REQUEST-CLIENT",
      "flow.title": "Eine Anfrage senden ist erst der Anfang.",
      "flow.intro":
        "Du brauchst APIs, die funktionieren, passende Dokumentation und eine KI, die weiß, was sie bauen soll. Powerduck verbindet diese Arbeit.",
      "flow.baseTitle": "Deine API-Werkbank für jeden Tag. Start ohne Konto.",
      "flow.baseBody":
        "Die Grundlagen einer Postman-Alternative: Anfragen importieren, Authentifizierung und Umgebungen einrichten, Antworten prüfen, Assertions hinzufügen und Mocks starten. Dein Arbeitsbereich bleibt lokal.",
      "flow.base0": "cURL / Postman / OpenAPI importieren",
      "flow.base1": "Authentifizierung & Umgebungen",
      "flow.base2": "Skripte & Assertions",
      "flow.base3": "Sammlungen & Szenariotests",
      "flow.base4": "Lokale Mock-Server",
      "flow.base5": "7 Protokolle debuggen",
      "flow.difference": "Hier geht es über Anfragen hinaus.",
      "flow.all": "Alle Workflows entdecken",
      "flow.1.pain": "Der Code ist fertig. Die API-Doku fehlt.",
      "flow.1.title": "Code → API",
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
        "Die KI baut Endpunkte, die nicht zur Spezifikation passen.",
      "flow.2.title": "API → Code",
      "flow.2.body":
        "Lass deinen Agenten per MCP die tatsächlichen Pfade, Schemas und Authentifizierung lesen, bevor er implementiert. Prüfe danach die laufende API.",
      "flow.2.result":
        "Implementierung nach Vertrag, geprüft an echten Antworten.",
      "flow.2.prompt":
        "Implementiere diese API nach ihrer Definition und führe Vertragstests aus.",
      "flow.3.pain":
        "Nach jeder Änderung wird der Geschäftsablauf von Hand getestet.",
      "flow.3.title": "KI plant und testet. Du siehst die Ergebnisse.",
      "flow.3.body":
        "Beschreibe Anmeldung → Bestellung anlegen → abrufen. Die KI erstellt das Szenario, reicht Werte zwischen Schritten weiter und führt es aus.",
      "flow.3.result":
        "Ergebnisse je Schritt und fehlgeschlagene Assertions statt nur Testcode.",
      "flow.3.prompt":
        "Teste Anmeldung → Bestellung anlegen → abrufen. Zeige den fehlerhaften Schritt.",
      "flow.4.pain": "Sieben Protokolle. Zu viele einzelne Tools.",
      "flow.4.title": "Ein Arbeitsbereich. Sieben Protokolle.",
      "flow.4.body":
        "Debugge HTTP, GraphQL, WebSocket, SSE, gRPC, MCP und A2A. Prüfe Antworten, Streams und Tool-Aufrufe an einem Ort.",
      "flow.4.result":
        "Manuelle Kontrolle, wenn du genau verstehen willst, was passiert ist.",
      "flow.5.pain": "Eine API scheitert. Du kopierst Logs in den Chat.",
      "flow.5.title": "KI-Debugging direkt bei der Anfrage.",
      "flow.5.body":
        "Gib dem Assistenten den relevanten API-Kontext. Lass ihn eine Anfrage senden, die Antwort prüfen und den Fehler eingrenzen.",
      "flow.5.result":
        "Eine Analyse anhand echter Ergebnisse und prüfbare Änderungsvorschläge.",
      "flow.5.prompt":
        "Untersuche diesen Fehler. Prüfe die Antwort, bevor du eine Korrektur vorschlägst.",
      "flow.6.pain":
        "Zum Teilen der API brauchst du noch einen Hosting-Dienst.",
      "flow.6.title": "Dokumentation und MCP veröffentlichen.",
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
    },
    fr: {
      "scenes.all": "Voir tous les cas d’usage",
      "flow.hero": "Votre agent écrit le code.<br>Powerduck s’occupe de l’API.",
      "flow.sub":
        "Donnez le contrat API à Codex, Claude Code ou Cursor. Générez la documentation depuis le code, testez vos parcours métier avec l’IA et vérifiez les résultats réels, dans un espace API local.",
      "flow.baseNote":
        "Le travail local ne nécessite aucun compte. L’IA distante utilise le modèle choisi ; l’hébergement en ligne nécessite un compte Cloud.",
      "flow.kicker": "BIEN PLUS QU’UN CLIENT DE REQUÊTES",
      "flow.title": "Envoyer une requête n’est que le début.",
      "flow.intro":
        "Des API qui fonctionnent, une documentation à jour, une IA qui sait quoi implémenter. Powerduck relie ces tâches.",
      "flow.baseTitle":
        "Votre atelier API quotidien. Sans compte pour commencer.",
      "flow.baseBody":
        "L’essentiel d’une alternative à Postman : importer des requêtes, configurer l’authentification et les environnements, examiner les réponses, ajouter des assertions et lancer des mocks. Le tout en local.",
      "flow.base0": "Import cURL / Postman / OpenAPI",
      "flow.base1": "Authentification et environnements",
      "flow.base2": "Scripts et assertions",
      "flow.base3": "Collections et tests de scénarios",
      "flow.base4": "Serveurs mock locaux",
      "flow.base5": "Débogage de 7 protocoles",
      "flow.difference": "Allez au-delà de l’envoi de requêtes.",
      "flow.all": "Découvrir tous les parcours",
      "flow.1.pain": "Le code existe. Pas la documentation API.",
      "flow.1.title": "Code → API",
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
        "L’IA crée des endpoints qui ne respectent pas la spécification.",
      "flow.2.title": "API → code",
      "flow.2.body":
        "Votre agent lit les vrais chemins, schémas et règles d’authentification via MCP avant d’implémenter. Vérifiez ensuite l’API en cours d’exécution.",
      "flow.2.result":
        "Une implémentation guidée par le contrat, vérifiée sur les réponses réelles.",
      "flow.2.prompt":
        "Implémente cette API à partir de sa définition, puis exécute les tests de contrat.",
      "flow.3.pain":
        "Chaque modification impose de retester le parcours à la main.",
      "flow.3.title": "L’IA prépare et teste. Vous voyez les résultats.",
      "flow.3.body":
        "Décrivez connexion → création de commande → consultation. L’IA compose le scénario, transmet les valeurs entre étapes et l’exécute.",
      "flow.3.result":
        "Les résultats de chaque étape et les assertions en échec, pas seulement un script.",
      "flow.3.prompt":
        "Teste connexion → création de commande → consultation. Montre l’étape qui échoue.",
      "flow.4.pain": "Sept protocoles. Trop d’outils séparés.",
      "flow.4.title": "Un espace. Sept protocoles.",
      "flow.4.body":
        "Déboguez HTTP, GraphQL, WebSocket, SSE, gRPC, MCP et A2A. Examinez réponses, flux et appels d’outils au même endroit.",
      "flow.4.result":
        "Le contrôle manuel pour comprendre précisément ce qui s’est passé.",
      "flow.5.pain": "L’API échoue. Vous copiez les logs dans un chat.",
      "flow.5.title": "L’IA débogue à côté de la requête.",
      "flow.5.body":
        "Fournissez le contexte API pertinent à l’assistant. Demandez-lui d’envoyer une requête, d’examiner la réponse et de cerner le problème.",
      "flow.5.result":
        "Un diagnostic fondé sur les résultats et des modifications à examiner.",
      "flow.5.prompt":
        "Cherche pourquoi cette requête échoue. Examine la réponse avant de proposer une correction.",
      "flow.6.pain": "Partager l’API oblige à monter un autre service.",
      "flow.6.title": "Publiez documentation et endpoint MCP.",
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
    },
    es: {
      "scenes.all": "Ver todos los casos de uso",
      "flow.hero":
        "Tu agente escribe el código.<br>Powerduck se encarga de la API.",
      "flow.sub":
        "Dale el contrato de la API a Codex, Claude Code o Cursor. Genera documentación desde el código, ejecuta flujos de negocio con IA y comprueba resultados reales en un espacio de trabajo local.",
      "flow.baseNote":
        "El trabajo local no requiere cuenta. La IA remota usa el servicio de modelos que elijas; el alojamiento en línea requiere una cuenta Cloud.",
      "flow.kicker": "MUCHO MÁS QUE UN CLIENTE DE PETICIONES",
      "flow.title": "Enviar una petición es solo el principio.",
      "flow.intro":
        "Necesitas API que funcionen, documentación fiel al código y una IA que sepa qué construir. Powerduck conecta ese trabajo.",
      "flow.baseTitle": "Tu banco de trabajo para API. Empieza sin cuenta.",
      "flow.baseBody":
        "Lo esencial de una alternativa a Postman: importar peticiones, configurar autenticación y entornos, revisar respuestas, añadir aserciones y ejecutar mocks. Todo en tu espacio local.",
      "flow.base0": "Importar cURL / Postman / OpenAPI",
      "flow.base1": "Autenticación y entornos",
      "flow.base2": "Scripts y aserciones",
      "flow.base3": "Colecciones y pruebas de escenarios",
      "flow.base4": "Servidores mock locales",
      "flow.base5": "Depuración de 7 protocolos",
      "flow.difference": "Ve más allá de enviar peticiones.",
      "flow.all": "Explorar todos los flujos",
      "flow.1.pain": "El código ya existe. La documentación de la API, no.",
      "flow.1.title": "Código → API",
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
        "La IA crea endpoints que no coinciden con la especificación.",
      "flow.2.title": "API → código",
      "flow.2.body":
        "Tu agente lee las rutas, esquemas y requisitos de autenticación reales mediante MCP antes de implementar. Después verifica la API en ejecución.",
      "flow.2.result":
        "Una implementación guiada por el contrato y comprobada con respuestas reales.",
      "flow.2.prompt":
        "Implementa esta API según su definición y ejecuta pruebas de contrato.",
      "flow.3.pain": "Cada cambio obliga a probar el flujo de negocio a mano.",
      "flow.3.title": "La IA planifica y prueba. Tú ves los resultados.",
      "flow.3.body":
        "Describe iniciar sesión → crear pedido → consultarlo. La IA organiza el escenario, pasa valores entre pasos y lo ejecuta.",
      "flow.3.result":
        "Resultados por paso y aserciones fallidas, no solo un script de pruebas.",
      "flow.3.prompt":
        "Prueba iniciar sesión → crear pedido → consultarlo. Muéstrame qué paso falla.",
      "flow.4.pain": "Siete protocolos. Demasiadas herramientas distintas.",
      "flow.4.title": "Un espacio. Siete protocolos.",
      "flow.4.body":
        "Depura HTTP, GraphQL, WebSocket, SSE, gRPC, MCP y A2A. Revisa respuestas, flujos y llamadas a herramientas en el mismo lugar.",
      "flow.4.result": "Control manual para entender exactamente qué ocurrió.",
      "flow.5.pain": "La API falla. Toca copiar registros al chat.",
      "flow.5.title": "Depura con IA junto a la petición.",
      "flow.5.body":
        "Dale al asistente el contexto relevante de la API. Pídele que envíe una petición, revise la respuesta y ayude a acotar el fallo.",
      "flow.5.result":
        "Un diagnóstico basado en resultados reales y cambios que puedes revisar.",
      "flow.5.prompt":
        "Investiga por qué falla esta petición. Revisa la respuesta antes de proponer un arreglo.",
      "flow.6.pain": "Compartir la API implica montar otro servicio.",
      "flow.6.title": "Publica documentación y un endpoint MCP.",
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
    },
  };
  Object.keys(messages).forEach(function (lang) {
    Object.assign(window.POWERDUCK_I18N.messages[lang], messages[lang]);
  });
})();
