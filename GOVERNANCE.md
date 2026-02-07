# Webpack TSC Governance

The Webpack Technical Steering Committee (TSC) oversees the technical direction and governance of the webpack project. This document outlines the governance processes for the TSC, including how new members are onboarded.

## TSC Membership

The TSC is composed of members who have demonstrated sustained, meaningful contributions to the webpack project. Members are responsible for:

- Guiding the technical direction of webpack
- Reviewing and approving significant changes
- Managing releases and maintenance
- Overseeing infrastructure and operational access
- Upholding the [Code of Conduct](https://github.com/webpack/webpack/blob/main/CODE_OF_CONDUCT.md)

## Onboarding: Trial Period with Limited Access

To safeguard the project's infrastructure and build trust gradually, all newly nominated TSC members undergo a **trial period** before receiving full permissions.

### Rationale

Infrastructure access carries significant responsibility. Misconfigurations or accidental changes can have a wide impact on the webpack ecosystem and its users. A trial period allows new members to:

- Familiarize themselves with the project's infrastructure and processes
- Demonstrate competence and reliability
- Build trust with existing TSC members

### Trial Period Details

- **Duration:** The trial period lasts a minimum of **90 days** from the date the member is added.
- **Early completion:** The TSC may vote to end the trial period early if the member has demonstrated sufficient competence and trust. This requires consensus (no objections within 7 days) among existing full-access TSC members.
- **Extension:** If concerns arise, the TSC may extend the trial period by an additional 90 days.

### Permissions During the Trial Period

During the trial period, new members receive **reduced permissions** on project infrastructure:

| Resource                | Trial Member Access | Full Member Access |
| ----------------------- | ------------------- | ------------------ |
| GitHub repositories     | Triage              | Write / Maintain   |
| CI/CD pipeline config   | Read-only           | Write              |
| Deployment (previews)   | Trigger             | Trigger            |
| Infrastructure hosting  | Read-only           | Admin              |
| npm publish             | None                | Publish            |
| Discord (TSC channels)  | Full                | Full               |

Trial members **can**:

- Attend and participate in all TSC meetings
- Review pull requests and triage issues
- Access logs, build output, and monitoring dashboards
- Trigger new deployments where the platform permits (e.g., preview deployments)

Trial members **cannot**:

- Modify production infrastructure settings
- Publish packages to npm
- Merge pull requests into release branches without approval from a full member
- Modify CI/CD pipeline configurations

### Graduating from the Trial Period

At the end of the trial period, the TSC evaluates the member's participation. Graduation to full membership requires:

1. No unresolved concerns from existing TSC members
2. Active and constructive participation during the trial period
3. A consensus vote (or no objections within 7 days) from existing full-access TSC members

If the member does not graduate, the TSC will communicate the reasons and may offer an extended trial or end the membership.

## Nominating New Members

New TSC members are nominated by existing members. The nomination process is:

1. An existing TSC member opens an issue in this repository proposing the nominee.
2. The issue should describe the nominee's contributions to the project and their qualifications.
3. The nomination is open for discussion for at least **14 days**.
4. Approval requires consensus (no objections within 7 days after the discussion period) among existing TSC members, or a two-thirds majority vote if consensus cannot be reached.
5. Once approved, the new member enters the **trial period** described above.

## Decision-Making

The TSC aims to reach decisions through **consensus**, defined as no objections from any active TSC member within a **7-day** comment period on the relevant issue or pull request. When consensus cannot be reached:

- A vote may be called, requiring a two-thirds majority of active TSC members.
- Any TSC member may call for a vote by opening an issue in this repository.
- Votes remain open for at least **7 days** to allow all members to participate.

## Meetings

- TSC meetings are held regularly and announced in advance via GitHub issues.
- Meeting notes are recorded in the [`notes/`](./notes) directory.
- Meetings are open for anyone to observe, subject to the [Code of Conduct](https://github.com/webpack/webpack/blob/main/CODE_OF_CONDUCT.md).

## Amendments

Changes to this governance document require a pull request to this repository and approval by a two-thirds majority of active TSC members. The pull request must remain open for at least **14 days** before merging.
