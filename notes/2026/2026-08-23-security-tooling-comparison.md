# Security tooling comparison: GHAS/Dependabot vs Socket.dev

Context for issue [#153](https://github.com/webpack/tsc/issues/153).

## Summary

- This is not a strict 1:1 replacement decision.
- GitHub Advanced Security (GHAS) + Dependabot is strong for native alert/remediation workflows.
- Socket.dev adds behavioral supply-chain risk detection that can surface risk before CVE/GHSA publication.

## Side-by-side

| Area | GHAS + Dependabot | Socket.dev (GitHub integration) |
| --- | --- | --- |
| Core focus | Known vulnerabilities and remediation inside GitHub | Package behavior and supply-chain risk signals |
| Alert/remediation flow | Dependabot alerts and update PRs are native to GitHub workflows | Risk findings surfaced via Socket policies/integration |
| Platform coverage | Dependency graph, Dependabot, CodeQL, secret scanning in one platform | Strong package-risk posture for dependency intake |
| Potential strength | Tight governance, branch protection, and low operational overhead | Faster detection of suspicious package behavior and emerging 0-day risk patterns |

## Practical recommendation

- Keep GHAS/Dependabot as baseline.
- Run Socket.dev as a complementary pilot on critical JavaScript repositories.
- Measure signal quality (noise vs. actionable findings), detection lead time, and operational overhead before deciding on broader rollout.
