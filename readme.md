# Powerduck

Powerduck combines an API workspace with a local code-review workspace for people working with AI-generated code.

- **API workspace:** import OpenAPI YAML or JSON, design operations, send requests, run scenarios, use local mocks, explore data models and render API documentation.
- **Code review:** inspect complete files and precise differences, track review rounds, navigate resolvable Git/AST relationships and request AI findings at the relevant code location.
- **Project structure:** inspect references and conservative candidates for temporary, identical or unreferenced files. These signals do not authorize deletion.
- **Agent handoff:** select suspicions and export a bounded Markdown task package; returned JSON reports remain subject to human review.
- **Execution evidence:** explicitly run project checks and inspect commands, exit codes and output. Reading progress and AI suggestions do not mean tests passed.

The desktop app supports local files and commands. The browser app at `/app/` previews API workflows; it does not provide unrestricted desktop filesystem access. Google/GitHub sign-in and built-in AI are used; custom model keys and model selection are not offered.

New AI plans use separate conversation and review task allowances. Consult the [billing guide](https://www.powerduck.com/docs/cloud/billing/) and [pricing page](https://www.powerduck.com/pricing) for periods, settlement rules and any legacy entitlements. Upstream model tokens are internal usage telemetry, not the new customer billing unit.

[Website](https://www.powerduck.com) · [Download](https://www.powerduck.com/download.html) · [Documentation](https://www.powerduck.com/docs/) · [Browser app](https://www.powerduck.com/app/)

Marketing locale inputs live in `assets/messages/`; the Cloud frontend's SEO generator renders localized pages. Documentation source lives in the sibling `powerduck-docs` repository; do not edit generated `/docs/` HTML as the source. The browser app is staged by `powerduck-react/scripts/deploy-web-demo.sh`. All surfaces are published together by the existing Cloud frontend deployment pipeline.
