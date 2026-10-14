// Scenario copy: all six marketing locales. Load before common.js.
(function () {
  "use strict";
  var messages = {
    en: {
      "scenes.kicker": "WHAT CAN YOU DO WITH POWERDUCK?",
      "scenes.title": "Less API busywork. More working software.",
      "scenes.intro":
        "Start with the job you need to get done. Keep your code, API docs and real responses connected.",
      "scenes.all": "Explore all use cases",
      "scenes.learn": "See how it works",
      "scenes.agent": "Cursor · Claude Code · Codex",
      "scenes.promptLabel": "Ask your coding agent",
      "scenes.prompt":
        "Use Powerduck to generate API docs for this project and give me a link.",
      "scenes.result": "Code → API specification → readable docs",
      "scenes.local":
        "Local preview by default. Share online after Cloud sign-in and confirmation.",
      "scenes.pageTitle": "What will you build with Powerduck?",
      "scenes.pageIntro":
        "Eight practical ways to go from an API idea or an existing project to something you can inspect, test and share.",
      "scenes.back": "Back to home",
      "scenes.jump": "Find your use case",
      "scenes.start": "How to get started",
      "scenes.know": "Good to know",
      "scenes.guide": "Read the guide",
      "scenes.ready": "Try it on one API first.",
      "scenes.readyBody":
        "Open a specification you already have, or start with the built-in example. Explore the workflow before connecting your own project.",
      "scenes.download": "Download Powerduck",
      "scenes.example": "Try the browser workspace",
      "scenes.metaTitle":
        "Powerduck use cases — From code to API docs, testing and mocks",
      "scenes.metaDescription":
        "Generate API documentation from your coding agent, debug real requests, check API contracts and mock endpoints before the backend is ready.",
      "scenes.s1.title": "Turn your code into API docs — from your editor.",
      "scenes.s1.body":
        "Connect Powerduck’s MCP to Cursor, Claude Code or Codex. Ask it to scan your project and return a documentation link, without switching to a separate docs-writing workflow.",
      "scenes.s1.start":
        "Configure the developer MCP server with your project folder, then ask your agent to generate a local documentation link.",
      "scenes.s1.note":
        "Supported frameworks only. Review inferred fields and scan warnings. Local links work on the MCP host while its session is running.",
      "scenes.s2.title":
        "Reproduce an API problem without rebuilding the request.",
      "scenes.s2.body":
        "Bring in a cURL command, Postman collection or OpenAPI file. Fill in your environment and credentials, send the request, and inspect what actually came back.",
      "scenes.s2.start":
        "Import your request, select a server, then inspect the status, headers and response body in the debugger.",
      "scenes.s2.note":
        "Use the desktop app for local services and requests that browser restrictions block. Request scripts and credentials need review.",
      "scenes.s3.title": "Catch API changes before they break the frontend.",
      "scenes.s3.body":
        "A request can return 200 and still return the wrong data. Check actual responses against your OpenAPI definition and run multi-step scenarios after a change.",
      "scenes.s3.start":
        "Start your backend, choose the operations or scenario to test, and review failed checks. Your coding agent can also run contract tests through MCP.",
      "scenes.s3.note":
        "Checks cover the operations, inputs and assertions you run. They do not prove every behavior of the backend is correct.",
      "scenes.s4.title": "Build the frontend before the backend is ready.",
      "scenes.s4.body":
        "Start a local mock server from your API definition. Give the frontend predictable sample responses while the real endpoints are still being built.",
      "scenes.s4.start":
        "Open an OpenAPI file, start a mock server, and point your frontend at its local base URL.",
      "scenes.s4.note":
        "Mocks return sample data from the definition. They do not replace your real authentication, database or business logic.",
      "scenes.s5.title":
        "Describe an API change. Review it before applying it.",
      "scenes.s5.body":
        "Ask Powerduck’s AI assistant to add an endpoint or adjust a schema. Review the proposed changes, then keep the visual editor and YAML in sync.",
      "scenes.s5.start":
        "Open a specification, describe what should change, and inspect the proposed patch before accepting it.",
      "scenes.s5.note":
        "AI features require a configured model. Context sent to a remote provider leaves your device; manual editing does not require AI.",
      "scenes.s6.title":
        "Give your teammates a documentation link, not another file.",
      "scenes.s6.body":
        "Publish your API definition to Powerduck Cloud so teammates can read it in a browser. Your coding agent can start this workflow through MCP too.",
      "scenes.s6.start":
        "Choose Cloud publishing, sign in and confirm the upload. Share the final documentation URL once publishing finishes.",
      "scenes.s6.note":
        "Cloud hosting uses your account quota. The uploaded API definition may contain examples or internal details: review it before sharing.",
      "scenes.s7.title": "See what your API means for the database.",
      "scenes.s7.body":
        "Turn API schemas into tables and relationships. Compare them with existing database evidence and review suggested SQL and a model report.",
      "scenes.s7.start":
        "Open Data model, inspect the ER diagram and differences, then generate SQL or a report for review.",
      "scenes.s7.note":
        "Powerduck generates SQL; it does not execute DDL. Check the proposed changes and unresolved mappings before applying anything yourself.",
      "scenes.s8.title": "Debug more than REST without changing tools.",
      "scenes.s8.body":
        "Work with HTTP, GraphQL, WebSocket, SSE, gRPC and MCP in the same workspace. Inspect responses, messages or tool results where you sent them.",
      "scenes.s8.start":
        "Choose the protocol, configure its connection and authentication, then send a request or inspect the stream.",
      "scenes.s8.note":
        "Protocol support differs between desktop and browser. Use the desktop app for native transports such as gRPC.",
    },
    "zh-CN": {
      "scenes.kicker": "POWERDUCK 能帮你做什么？",
      "scenes.title": "少一点接口杂活，多一点开发进展。",
      "scenes.intro": "从你手头的问题出发，让代码、接口文档和真实响应连起来。",
      "scenes.all": "查看全部使用场景",
      "scenes.learn": "看看怎么用",
      "scenes.agent": "Cursor · Claude Code · Codex",
      "scenes.promptLabel": "对你的编程助手说",
      "scenes.prompt":
        "用 Powerduck 为这个项目生成 API 文档，给我一个可以打开的链接。",
      "scenes.result": "项目代码 → 接口定义 → 可阅读的文档",
      "scenes.local":
        "默认生成本机预览；登录 Cloud 并确认后，可发布为共享链接。",
      "scenes.pageTitle": "你想用 Powerduck 解决什么问题？",
      "scenes.pageIntro":
        "八个实际场景：从一个 API 想法或现有项目，走到能查看、能测试、能分享的结果。",
      "scenes.back": "返回首页",
      "scenes.jump": "找到你的使用场景",
      "scenes.start": "怎么开始",
      "scenes.know": "使用前了解",
      "scenes.guide": "查看操作指南",
      "scenes.ready": "先拿一个接口试试。",
      "scenes.readyBody":
        "打开已有的接口定义，或者使用内置示例。先跑通流程，再接入自己的项目。",
      "scenes.download": "下载 Powerduck",
      "scenes.example": "体验网页版工作区",
      "scenes.metaTitle":
        "Powerduck 使用场景 — 从代码生成文档，到接口测试与 Mock",
      "scenes.metaDescription":
        "在编程助手里生成 API 文档链接，复现请求、检查接口是否符合文档，在后端完成前用 Mock 开始联调。",
      "scenes.s1.title": "在编程工具里，把项目代码变成接口文档。",
      "scenes.s1.body":
        "在 Cursor、Claude Code 或 Codex 中连接 Powerduck 的 MCP，让助手扫描项目并给出文档链接，不用再切换到另一套流程手写文档。",
      "scenes.s1.start":
        "为开发者 MCP 配置项目目录，然后让编程助手生成本机文档链接。",
      "scenes.s1.note":
        "仅支持已适配的框架，请检查推断字段和扫描提示。本机链接在 MCP 所在电脑上访问，会话结束后失效。",
      "scenes.s2.title": "接口出了问题，不用从头拼请求。",
      "scenes.s2.body":
        "导入 cURL、Postman 集合或 OpenAPI 文件，填好环境和鉴权，直接发送请求，看看服务端到底返回了什么。",
      "scenes.s2.start":
        "导入请求、选择服务器，在调试界面查看状态码、响应头和响应内容。",
      "scenes.s2.note":
        "访问本地服务或遇到浏览器限制时使用桌面版。运行前检查请求脚本和凭据。",
      "scenes.s3.title": "接口改坏了，在前端报错之前发现。",
      "scenes.s3.body":
        "返回 200，不代表数据就对。用 OpenAPI 定义检查真实响应，改完代码后再跑一遍多步骤业务测试。",
      "scenes.s3.start":
        "启动后端，选择接口或业务场景运行测试，查看失败项；也可以让编程助手通过 MCP 执行契约测试。",
      "scenes.s3.note":
        "检查范围取决于实际运行的接口、输入和断言，不代表后端所有行为都已验证。",
      "scenes.s4.title": "后端还没写好，前端也能开始联调。",
      "scenes.s4.body":
        "从接口定义启动本地 Mock 服务，给前端提供可预期的示例响应，不必等真实接口全部完成。",
      "scenes.s4.start":
        "打开 OpenAPI 文件、启动 Mock 服务，将前端请求地址指向本地 Mock URL。",
      "scenes.s4.note":
        "Mock 按接口定义返回示例数据，不能替代真实鉴权、数据库和业务逻辑。",
      "scenes.s5.title": "说清想改什么，确认后再更新接口。",
      "scenes.s5.body":
        "让 Powerduck 的 AI 助手新增接口或调整数据结构。先看清具体改动，再应用到文档，图形编辑与 YAML 保持同步。",
      "scenes.s5.start":
        "打开接口定义，描述需要的变化，审阅助手提出的补丁后再接受。",
      "scenes.s5.note":
        "AI 功能需要配置模型。使用远程模型时，相关上下文会发送给模型服务商；手动编辑不需要 AI。",
      "scenes.s6.title": "给同事一个文档链接，不用反复传文件。",
      "scenes.s6.body":
        "把接口定义发布到 Powerduck Cloud，让同事在浏览器里阅读；也能从编程助手通过 MCP 发起发布。",
      "scenes.s6.start":
        "选择 Cloud 发布，登录并确认上传，完成后分享最终的文档地址。",
      "scenes.s6.note":
        "Cloud 托管受账户额度限制。接口定义可能包含示例或内部信息，分享前请检查内容。",
      "scenes.s7.title": "接口设计好了，数据库该怎么建？",
      "scenes.s7.body":
        "从 API 数据结构推导表和关联关系，与已有数据库信息对比，生成可审阅的 SQL 和模型报告。",
      "scenes.s7.start":
        "打开数据模型，检查 ER 图和差异，再生成 SQL 或报告供审阅。",
      "scenes.s7.note":
        "Powerduck 只生成 SQL，不执行 DDL。请自行确认变更和待解决的映射，再决定是否执行。",
      "scenes.s8.title": "不止 REST，换协议也不用换工具。",
      "scenes.s8.body":
        "在同一工作区调试 HTTP、GraphQL、WebSocket、SSE、gRPC 和 MCP，在发送请求的地方查看响应、消息或工具结果。",
      "scenes.s8.start":
        "选择协议，配置连接与鉴权，然后发送请求或查看流式消息。",
      "scenes.s8.note":
        "桌面版和网页版支持范围不同。gRPC 等原生传输请使用桌面版。",
    },
    de: {
      "scenes.kicker": "WAS KANN POWERDUCK FÜR DICH TUN?",
      "scenes.title": "Weniger API-Kleinarbeit. Mehr funktionierende Software.",
      "scenes.intro":
        "Beginne mit deiner konkreten Aufgabe. Verbinde Code, API-Dokumentation und echte Antworten.",
      "scenes.all": "Alle Anwendungsfälle ansehen",
      "scenes.learn": "So funktioniert es",
      "scenes.agent": "Cursor · Claude Code · Codex",
      "scenes.promptLabel": "Frag deinen Coding-Agenten",
      "scenes.prompt":
        "Erstelle mit Powerduck eine API-Dokumentation für dieses Projekt und gib mir einen Link.",
      "scenes.result": "Projektcode → API-Definition → lesbare Dokumentation",
      "scenes.local":
        "Standardmäßig lokale Vorschau. Online teilen nach Cloud-Anmeldung und Bestätigung.",
      "scenes.pageTitle": "Was möchtest du mit Powerduck erreichen?",
      "scenes.pageIntro":
        "Acht praktische Wege von einer API-Idee oder einem bestehenden Projekt zu Ergebnissen, die du prüfen, testen und teilen kannst.",
      "scenes.back": "Zur Startseite",
      "scenes.jump": "Finde deinen Anwendungsfall",
      "scenes.start": "So startest du",
      "scenes.know": "Gut zu wissen",
      "scenes.guide": "Anleitung lesen",
      "scenes.ready": "Probiere es zuerst mit einer API aus.",
      "scenes.readyBody":
        "Öffne eine vorhandene Spezifikation oder nutze das integrierte Beispiel. Lerne den Ablauf kennen, bevor du dein eigenes Projekt verbindest.",
      "scenes.download": "Powerduck herunterladen",
      "scenes.example": "Browser-Workspace ausprobieren",
      "scenes.metaTitle":
        "Powerduck-Anwendungsfälle — Von Code zu API-Dokumentation, Tests und Mocks",
      "scenes.metaDescription":
        "Erstelle API-Dokumentation mit deinem Coding-Agenten, debugge echte Anfragen, prüfe API-Verträge und simuliere Endpunkte vor Fertigstellung des Backends.",
      "scenes.s1.title": "Vom Code zur API-Dokumentation — direkt im Editor.",
      "scenes.s1.body":
        "Verbinde Powerducks MCP mit Cursor, Claude Code oder Codex. Lass den Agenten dein Projekt analysieren und einen Dokumentationslink liefern, statt Dokumentation separat zu schreiben.",
      "scenes.s1.start":
        "Konfiguriere den Entwickler-MCP-Server mit deinem Projektordner und bitte den Agenten um einen lokalen Dokumentationslink.",
      "scenes.s1.note":
        "Nur unterstützte Frameworks. Prüfe abgeleitete Felder und Analysehinweise. Lokale Links funktionieren auf dem MCP-Host, solange die Sitzung läuft.",
      "scenes.s2.title":
        "API-Probleme reproduzieren, ohne Anfragen neu aufzubauen.",
      "scenes.s2.body":
        "Importiere cURL-Befehle, Postman-Sammlungen oder OpenAPI-Dateien. Ergänze Umgebung und Zugangsdaten, sende die Anfrage und prüfe die tatsächliche Antwort.",
      "scenes.s2.start":
        "Importiere die Anfrage, wähle einen Server und prüfe Status, Header und Antwortinhalt im Debugger.",
      "scenes.s2.note":
        "Nutze die Desktop-App für lokale Dienste und Anfragen, die der Browser blockiert. Prüfe zuvor Skripte und Zugangsdaten.",
      "scenes.s3.title":
        "API-Änderungen erkennen, bevor das Frontend ausfällt.",
      "scenes.s3.body":
        "Status 200 bedeutet nicht, dass die Daten stimmen. Prüfe echte Antworten gegen deine OpenAPI-Definition und führe nach Änderungen mehrstufige Szenarien aus.",
      "scenes.s3.start":
        "Starte das Backend, wähle Operationen oder Testszenarien und prüfe fehlgeschlagene Tests. Auch dein Coding-Agent kann Vertragstests über MCP ausführen.",
      "scenes.s3.note":
        "Die Prüfung umfasst nur ausgeführte Operationen, Eingaben und Assertions. Sie bestätigt nicht das gesamte Verhalten des Backends.",
      "scenes.s4.title": "Das Frontend bauen, bevor das Backend fertig ist.",
      "scenes.s4.body":
        "Starte einen lokalen Mock-Server aus deiner API-Definition. Das Frontend erhält vorhersehbare Beispielantworten, während echte Endpunkte noch entstehen.",
      "scenes.s4.start":
        "Öffne eine OpenAPI-Datei, starte den Mock-Server und verwende dessen lokale Basis-URL im Frontend.",
      "scenes.s4.note":
        "Mocks liefern Beispieldaten aus der Definition. Sie ersetzen weder echte Authentifizierung noch Datenbank oder Geschäftslogik.",
      "scenes.s5.title": "API-Änderungen beschreiben. Vor dem Anwenden prüfen.",
      "scenes.s5.body":
        "Bitte Powerducks KI-Assistenten, einen Endpunkt hinzuzufügen oder ein Schema anzupassen. Prüfe die Vorschläge; visueller Editor und YAML bleiben synchron.",
      "scenes.s5.start":
        "Öffne eine Spezifikation, beschreibe die Änderung und prüfe den vorgeschlagenen Patch vor dem Übernehmen.",
      "scenes.s5.note":
        "KI-Funktionen erfordern ein konfiguriertes Modell. Bei Remote-Anbietern verlässt der übermittelte Kontext dein Gerät. Manuelles Bearbeiten benötigt keine KI.",
      "scenes.s6.title":
        "Teile einen Dokumentationslink statt weiterer Dateien.",
      "scenes.s6.body":
        "Veröffentliche deine API-Definition in Powerduck Cloud, damit das Team sie im Browser lesen kann. Dein Coding-Agent kann diesen Ablauf auch über MCP starten.",
      "scenes.s6.start":
        "Wähle Cloud-Veröffentlichung, melde dich an und bestätige den Upload. Teile nach Abschluss die endgültige Dokumentations-URL.",
      "scenes.s6.note":
        "Für Cloud-Hosting gilt dein Kontolimit. Prüfe die API-Definition vor dem Teilen auf Beispiele und interne Informationen.",
      "scenes.s7.title": "Verstehen, was deine API für die Datenbank bedeutet.",
      "scenes.s7.body":
        "Leite Tabellen und Beziehungen aus API-Schemas ab. Vergleiche sie mit vorhandenen Datenbankinformationen und prüfe SQL-Vorschläge und Modellberichte.",
      "scenes.s7.start":
        "Öffne das Datenmodell, prüfe ER-Diagramm und Unterschiede und erzeuge SQL oder einen Bericht zur Durchsicht.",
      "scenes.s7.note":
        "Powerduck erzeugt SQL, führt aber kein DDL aus. Prüfe Änderungen und offene Zuordnungen, bevor du selbst etwas ausführst.",
      "scenes.s8.title": "Mehr als REST debuggen — ohne Werkzeugwechsel.",
      "scenes.s8.body":
        "Arbeite mit HTTP, GraphQL, WebSocket, SSE, gRPC und MCP im selben Workspace. Prüfe Antworten, Nachrichten und Tool-Ergebnisse direkt dort.",
      "scenes.s8.start":
        "Wähle ein Protokoll, konfiguriere Verbindung und Authentifizierung und sende Anfragen oder untersuche den Stream.",
      "scenes.s8.note":
        "Desktop und Browser unterstützen unterschiedliche Funktionen. Native Transporte wie gRPC benötigen die Desktop-App.",
    },
    fr: {
      "scenes.kicker": "QUE POUVEZ-VOUS FAIRE AVEC POWERDUCK ?",
      "scenes.title":
        "Moins de tâches répétitives. Plus de logiciel qui fonctionne.",
      "scenes.intro":
        "Partez du problème à résoudre. Reliez votre code, votre documentation API et les réponses réelles.",
      "scenes.all": "Voir tous les cas d’usage",
      "scenes.learn": "Voir comment faire",
      "scenes.agent": "Cursor · Claude Code · Codex",
      "scenes.promptLabel": "Demandez à votre assistant de programmation",
      "scenes.prompt":
        "Utilise Powerduck pour générer la documentation API de ce projet et donne-moi un lien.",
      "scenes.result":
        "Code du projet → définition API → documentation lisible",
      "scenes.local":
        "Aperçu local par défaut. Partage en ligne après connexion au Cloud et confirmation.",
      "scenes.pageTitle": "Que voulez-vous accomplir avec Powerduck ?",
      "scenes.pageIntro":
        "Huit façons concrètes de passer d’une idée d’API ou d’un projet existant à un résultat à consulter, tester et partager.",
      "scenes.back": "Retour à l’accueil",
      "scenes.jump": "Trouvez votre cas d’usage",
      "scenes.start": "Pour commencer",
      "scenes.know": "À savoir",
      "scenes.guide": "Lire le guide",
      "scenes.ready": "Commencez par une seule API.",
      "scenes.readyBody":
        "Ouvrez une spécification existante ou essayez l’exemple intégré. Découvrez le parcours avant de connecter votre projet.",
      "scenes.download": "Télécharger Powerduck",
      "scenes.example": "Essayer l’espace de travail web",
      "scenes.metaTitle":
        "Cas d’usage Powerduck — Du code à la documentation API, aux tests et aux mocks",
      "scenes.metaDescription":
        "Générez la documentation API avec votre assistant, déboguez les requêtes, vérifiez les contrats et simulez les endpoints avant que le backend soit prêt.",
      "scenes.s1.title":
        "Transformez votre code en documentation API, depuis l’éditeur.",
      "scenes.s1.body":
        "Connectez le MCP de Powerduck à Cursor, Claude Code ou Codex. Demandez à l’assistant d’analyser votre projet et de fournir un lien, sans rédiger la documentation à part.",
      "scenes.s1.start":
        "Configurez le serveur MCP développeur avec le dossier du projet, puis demandez un lien vers la documentation locale.",
      "scenes.s1.note":
        "Frameworks pris en charge uniquement. Vérifiez les champs déduits et les avertissements. Les liens locaux fonctionnent sur l’hôte MCP pendant la session.",
      "scenes.s2.title":
        "Reproduisez un problème d’API sans recréer la requête.",
      "scenes.s2.body":
        "Importez une commande cURL, une collection Postman ou un fichier OpenAPI. Renseignez l’environnement et les identifiants, puis examinez la réponse réelle.",
      "scenes.s2.start":
        "Importez la requête, choisissez un serveur et consultez le statut, les en-têtes et le corps de la réponse dans le débogueur.",
      "scenes.s2.note":
        "Utilisez l’application de bureau pour les services locaux et les requêtes bloquées par le navigateur. Vérifiez les scripts et les identifiants.",
      "scenes.s3.title":
        "Repérez les changements d’API avant qu’ils ne cassent le frontend.",
      "scenes.s3.body":
        "Un statut 200 ne garantit pas des données correctes. Vérifiez les réponses avec votre définition OpenAPI et exécutez des scénarios à plusieurs étapes après chaque changement.",
      "scenes.s3.start":
        "Démarrez le backend, choisissez les opérations ou scénarios à tester et examinez les échecs. Votre assistant peut aussi lancer les tests de contrat via MCP.",
      "scenes.s3.note":
        "Les contrôles couvrent les opérations, entrées et assertions exécutées. Ils ne garantissent pas tous les comportements du backend.",
      "scenes.s4.title":
        "Développez le frontend avant que le backend soit prêt.",
      "scenes.s4.body":
        "Lancez un serveur mock local à partir de votre définition API. Le frontend reçoit des exemples prévisibles pendant que les vrais endpoints sont en développement.",
      "scenes.s4.start":
        "Ouvrez un fichier OpenAPI, lancez le serveur mock et utilisez son URL locale comme adresse de base du frontend.",
      "scenes.s4.note":
        "Les mocks renvoient les exemples de la définition. Ils ne remplacent ni l’authentification réelle, ni la base de données, ni la logique métier.",
      "scenes.s5.title":
        "Décrivez une modification d’API. Vérifiez-la avant de l’appliquer.",
      "scenes.s5.body":
        "Demandez à l’assistant IA de Powerduck d’ajouter un endpoint ou de modifier un schéma. Examinez les propositions en gardant l’éditeur visuel et le YAML synchronisés.",
      "scenes.s5.start":
        "Ouvrez une spécification, décrivez le changement et examinez le correctif proposé avant de l’accepter.",
      "scenes.s5.note":
        "Les fonctions IA nécessitent un modèle configuré. Avec un fournisseur distant, le contexte transmis quitte votre appareil. L’édition manuelle ne nécessite pas d’IA.",
      "scenes.s6.title":
        "Partagez un lien de documentation plutôt qu’un autre fichier.",
      "scenes.s6.body":
        "Publiez votre définition API sur Powerduck Cloud pour que votre équipe la consulte dans un navigateur. Votre assistant peut aussi lancer la publication via MCP.",
      "scenes.s6.start":
        "Choisissez la publication Cloud, connectez-vous et confirmez l’envoi. Partagez l’URL finale une fois la publication terminée.",
      "scenes.s6.note":
        "L’hébergement Cloud utilise le quota de votre compte. Vérifiez les exemples et les informations internes de la définition avant de la partager.",
      "scenes.s7.title":
        "Voyez ce que votre API implique pour la base de données.",
      "scenes.s7.body":
        "Déduisez des tables et des relations à partir des schémas API. Comparez-les aux informations de votre base existante et examinez le SQL proposé et le rapport de modèle.",
      "scenes.s7.start":
        "Ouvrez le modèle de données, examinez le diagramme ER et les différences, puis générez du SQL ou un rapport à relire.",
      "scenes.s7.note":
        "Powerduck génère du SQL mais n’exécute pas de DDL. Vérifiez les changements et les correspondances non résolues avant toute exécution manuelle.",
      "scenes.s8.title": "Déboguez au-delà de REST sans changer d’outil.",
      "scenes.s8.body":
        "Travaillez avec HTTP, GraphQL, WebSocket, SSE, gRPC et MCP dans le même espace. Consultez les réponses, messages et résultats des outils là où vous les avez envoyés.",
      "scenes.s8.start":
        "Choisissez le protocole, configurez la connexion et l’authentification, puis envoyez une requête ou examinez le flux.",
      "scenes.s8.note":
        "La prise en charge varie entre bureau et navigateur. Utilisez l’application de bureau pour les transports natifs comme gRPC.",
    },
    es: {
      "scenes.kicker": "¿QUÉ PUEDES HACER CON POWERDUCK?",
      "scenes.title": "Menos tareas repetitivas. Más software que funciona.",
      "scenes.intro":
        "Empieza por lo que necesitas resolver. Conecta el código, la documentación de la API y las respuestas reales.",
      "scenes.all": "Ver todos los casos de uso",
      "scenes.learn": "Descubre cómo funciona",
      "scenes.agent": "Cursor · Claude Code · Codex",
      "scenes.promptLabel": "Pídeselo a tu asistente de programación",
      "scenes.prompt":
        "Usa Powerduck para generar la documentación API de este proyecto y dame un enlace.",
      "scenes.result":
        "Código del proyecto → definición API → documentación legible",
      "scenes.local":
        "Vista previa local por defecto. Comparte en línea tras iniciar sesión en Cloud y confirmar.",
      "scenes.pageTitle": "¿Qué quieres hacer con Powerduck?",
      "scenes.pageIntro":
        "Ocho formas prácticas de pasar de una idea de API o un proyecto existente a algo que puedas consultar, probar y compartir.",
      "scenes.back": "Volver al inicio",
      "scenes.jump": "Encuentra tu caso de uso",
      "scenes.start": "Cómo empezar",
      "scenes.know": "Ten en cuenta",
      "scenes.guide": "Leer la guía",
      "scenes.ready": "Empieza probando una sola API.",
      "scenes.readyBody":
        "Abre una especificación existente o usa el ejemplo integrado. Conoce el flujo antes de conectar tu proyecto.",
      "scenes.download": "Descargar Powerduck",
      "scenes.example": "Probar el espacio web",
      "scenes.metaTitle":
        "Casos de uso de Powerduck — Del código a la documentación API, pruebas y mocks",
      "scenes.metaDescription":
        "Genera documentación API con tu asistente, depura solicitudes reales, verifica contratos y simula endpoints antes de que el backend esté listo.",
      "scenes.s1.title":
        "Convierte tu código en documentación API desde el editor.",
      "scenes.s1.body":
        "Conecta el MCP de Powerduck a Cursor, Claude Code o Codex. Pide al asistente que analice tu proyecto y devuelva un enlace, sin escribir la documentación por separado.",
      "scenes.s1.start":
        "Configura el servidor MCP para desarrolladores con la carpeta del proyecto y pide un enlace a la documentación local.",
      "scenes.s1.note":
        "Solo frameworks compatibles. Revisa los campos inferidos y las advertencias. Los enlaces locales funcionan en el equipo del servidor MCP mientras dure la sesión.",
      "scenes.s2.title":
        "Reproduce un fallo de API sin reconstruir la solicitud.",
      "scenes.s2.body":
        "Importa un comando cURL, una colección Postman o un archivo OpenAPI. Configura el entorno y las credenciales, envía la solicitud y examina la respuesta real.",
      "scenes.s2.start":
        "Importa la solicitud, selecciona un servidor y revisa el estado, las cabeceras y el cuerpo de la respuesta en el depurador.",
      "scenes.s2.note":
        "Usa la aplicación de escritorio para servicios locales y solicitudes bloqueadas por el navegador. Revisa los scripts y las credenciales.",
      "scenes.s3.title":
        "Detecta cambios de API antes de que rompan el frontend.",
      "scenes.s3.body":
        "Un estado 200 no garantiza que los datos sean correctos. Comprueba las respuestas con tu definición OpenAPI y ejecuta escenarios de varios pasos después de cada cambio.",
      "scenes.s3.start":
        "Inicia el backend, elige las operaciones o escenarios que quieras probar y revisa los fallos. Tu asistente también puede ejecutar pruebas de contrato por MCP.",
      "scenes.s3.note":
        "Las comprobaciones cubren las operaciones, entradas y aserciones ejecutadas. No garantizan todos los comportamientos del backend.",
      "scenes.s4.title":
        "Desarrolla el frontend antes de que el backend esté listo.",
      "scenes.s4.body":
        "Inicia un servidor mock local a partir de tu definición API. Ofrece al frontend respuestas de ejemplo predecibles mientras se construyen los endpoints reales.",
      "scenes.s4.start":
        "Abre un archivo OpenAPI, inicia el servidor mock y utiliza su URL local como dirección base del frontend.",
      "scenes.s4.note":
        "Los mocks devuelven ejemplos de la definición. No sustituyen la autenticación real, la base de datos ni la lógica de negocio.",
      "scenes.s5.title":
        "Describe un cambio de API. Revísalo antes de aplicarlo.",
      "scenes.s5.body":
        "Pide al asistente de IA de Powerduck que añada un endpoint o ajuste un esquema. Revisa las propuestas y mantén sincronizados el editor visual y el YAML.",
      "scenes.s5.start":
        "Abre una especificación, describe el cambio y revisa el parche propuesto antes de aceptarlo.",
      "scenes.s5.note":
        "Las funciones de IA necesitan un modelo configurado. Con un proveedor remoto, el contexto enviado sale de tu dispositivo. La edición manual no requiere IA.",
      "scenes.s6.title":
        "Comparte un enlace de documentación, no otro archivo.",
      "scenes.s6.body":
        "Publica tu definición API en Powerduck Cloud para que el equipo la lea en el navegador. Tu asistente también puede iniciar este proceso mediante MCP.",
      "scenes.s6.start":
        "Elige publicar en Cloud, inicia sesión y confirma la carga. Comparte la URL final cuando termine la publicación.",
      "scenes.s6.note":
        "El alojamiento Cloud usa la cuota de tu cuenta. Revisa los ejemplos y la información interna de la definición antes de compartirla.",
      "scenes.s7.title": "Descubre qué implica tu API para la base de datos.",
      "scenes.s7.body":
        "Obtén tablas y relaciones a partir de esquemas API. Compáralas con la información de una base existente y revisa el SQL propuesto y el informe del modelo.",
      "scenes.s7.start":
        "Abre el modelo de datos, inspecciona el diagrama ER y las diferencias, y genera SQL o un informe para revisar.",
      "scenes.s7.note":
        "Powerduck genera SQL, pero no ejecuta DDL. Revisa los cambios y las correspondencias pendientes antes de ejecutar nada por tu cuenta.",
      "scenes.s8.title": "Depura más que REST sin cambiar de herramienta.",
      "scenes.s8.body":
        "Trabaja con HTTP, GraphQL, WebSocket, SSE, gRPC y MCP en el mismo espacio. Inspecciona respuestas, mensajes y resultados donde los solicitaste.",
      "scenes.s8.start":
        "Elige el protocolo, configura la conexión y la autenticación, y envía una solicitud o inspecciona el flujo.",
      "scenes.s8.note":
        "La compatibilidad varía entre escritorio y navegador. Usa la aplicación de escritorio para transportes nativos como gRPC.",
    },
    ja: {
      "scenes.kicker": "POWERDUCK でできること",
      "scenes.title": "API の手間を減らして、開発を前へ。",
      "scenes.intro":
        "いま解決したい課題から始めましょう。コード、API ドキュメント、実際のレスポンスをつなぎます。",
      "scenes.all": "すべての活用シーンを見る",
      "scenes.learn": "使い方を見る",
      "scenes.agent": "Cursor · Claude Code · Codex",
      "scenes.promptLabel": "コーディングエージェントに依頼",
      "scenes.prompt":
        "Powerduck でこのプロジェクトの API ドキュメントを生成して、開けるリンクをください。",
      "scenes.result": "プロジェクトのコード → API 定義 → 読めるドキュメント",
      "scenes.local":
        "既定ではローカルプレビュー。Cloud にログインして確認すると、オンラインで共有できます。",
      "scenes.pageTitle": "Powerduck で何を解決しますか？",
      "scenes.pageIntro":
        "API のアイデアや既存プロジェクトから、確認・テスト・共有できる成果につなげる8つの活用シーン。",
      "scenes.back": "ホームに戻る",
      "scenes.jump": "活用シーンを探す",
      "scenes.start": "始め方",
      "scenes.know": "知っておきたいこと",
      "scenes.guide": "ガイドを読む",
      "scenes.ready": "まずは1つの API で試してみましょう。",
      "scenes.readyBody":
        "既存の API 定義を開くか、組み込みのサンプルを使ってください。自分のプロジェクトを接続する前に、流れを確認できます。",
      "scenes.download": "Powerduck をダウンロード",
      "scenes.example": "ブラウザー版を試す",
      "scenes.metaTitle":
        "Powerduck の活用シーン — コードから API ドキュメント、テスト、モックまで",
      "scenes.metaDescription":
        "コーディングエージェントで API ドキュメントを生成し、リクエストをデバッグ、API 契約を検証。バックエンドの完成前にモックで開発を進められます。",
      "scenes.s1.title": "エディターから、コードを API ドキュメントに。",
      "scenes.s1.body":
        "Cursor、Claude Code、Codex に Powerduck の MCP を接続。エージェントにプロジェクトの解析とドキュメントリンクの生成を頼めるので、別途ドキュメントを書く手間を減らせます。",
      "scenes.s1.start":
        "開発者向け MCP サーバーにプロジェクトのフォルダーを設定し、ローカルのドキュメントリンクを生成するよう依頼します。",
      "scenes.s1.note":
        "対応フレームワークのみ利用できます。推定された項目や警告を確認してください。ローカルリンクは MCP の実行端末で、セッション中のみ有効です。",
      "scenes.s2.title": "リクエストを組み直さずに、API の問題を再現。",
      "scenes.s2.body":
        "cURL、Postman コレクション、OpenAPI ファイルをインポート。環境と認証情報を設定して送信し、サーバーが実際に返した内容を確認できます。",
      "scenes.s2.start":
        "リクエストを取り込み、サーバーを選び、デバッガーでステータス、ヘッダー、レスポンス本文を確認します。",
      "scenes.s2.note":
        "ローカルサービスやブラウザーに制限されるリクエストにはデスクトップ版を使います。スクリプトと認証情報は実行前に確認してください。",
      "scenes.s3.title": "フロントエンドが壊れる前に、API の変更を検出。",
      "scenes.s3.body":
        "200 が返っても、データが正しいとは限りません。実際のレスポンスを OpenAPI 定義と照合し、変更後に複数ステップのシナリオを実行できます。",
      "scenes.s3.start":
        "バックエンドを起動し、対象の操作やシナリオを実行して失敗項目を確認します。エージェントから MCP 経由で契約テストを実行することもできます。",
      "scenes.s3.note":
        "検証対象は実行した操作、入力、アサーションの範囲です。バックエンドのすべての動作を保証するものではありません。",
      "scenes.s4.title": "バックエンドが未完成でも、フロントエンドを進める。",
      "scenes.s4.body":
        "API 定義からローカルのモックサーバーを起動。実際のエンドポイントができる前に、予測できるサンプルレスポンスで開発できます。",
      "scenes.s4.start":
        "OpenAPI ファイルを開いてモックサーバーを起動し、フロントエンドの接続先をローカルのベース URL にします。",
      "scenes.s4.note":
        "モックは定義に基づくサンプルを返します。実際の認証、データベース、業務ロジックの代わりにはなりません。",
      "scenes.s5.title": "API の変更を言葉で伝え、確認してから反映。",
      "scenes.s5.body":
        "Powerduck の AI アシスタントにエンドポイント追加やスキーマ変更を依頼。提案を確認して反映し、ビジュアルエディターと YAML を同期できます。",
      "scenes.s5.start":
        "API 定義を開き、変更内容を伝え、提案されたパッチを確認してから受け入れます。",
      "scenes.s5.note":
        "AI 機能にはモデル設定が必要です。リモートモデルへ送るコンテキストは端末の外に出ます。手動編集に AI は不要です。",
      "scenes.s6.title": "ファイルを送り直さず、ドキュメントリンクを共有。",
      "scenes.s6.body":
        "API 定義を Powerduck Cloud に公開すると、チームがブラウザーで読めます。エージェントから MCP 経由で公開を開始することもできます。",
      "scenes.s6.start":
        "Cloud 公開を選び、ログインしてアップロードを確認。公開が完了したら最終的なドキュメント URL を共有します。",
      "scenes.s6.note":
        "Cloud ホスティングにはアカウントの利用枠が適用されます。共有前に API 定義のサンプルや内部情報を確認してください。",
      "scenes.s7.title": "API の設計から、必要なデータベースを見通す。",
      "scenes.s7.body":
        "API スキーマからテーブルと関連を導き、既存のデータベース情報と比較。SQL の提案やモデルレポートを確認できます。",
      "scenes.s7.start":
        "データモデルを開き、ER 図と差分を確認して、レビュー用の SQL やレポートを生成します。",
      "scenes.s7.note":
        "Powerduck は SQL を生成しますが、DDL は実行しません。変更案と未解決の対応関係を確認してから、自分で実行してください。",
      "scenes.s8.title": "REST 以外も、ツールを切り替えずにデバッグ。",
      "scenes.s8.body":
        "HTTP、GraphQL、WebSocket、SSE、gRPC、MCP を同じワークスペースで扱えます。送信した場所でレスポンス、メッセージ、ツールの結果を確認できます。",
      "scenes.s8.start":
        "プロトコルを選び、接続と認証を設定して、リクエストを送信するかストリームを確認します。",
      "scenes.s8.note":
        "対応範囲はデスクトップ版とブラウザー版で異なります。gRPC などのネイティブ通信にはデスクトップ版を使ってください。",
    },
  };
  Object.keys(messages).forEach(function (lang) {
    Object.assign(window.POWERDUCK_I18N.messages[lang], messages[lang]);
  });
})();
