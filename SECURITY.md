# SECURITY.md

# Security Policy

## 🔐 Overview

Security is important to **A.B.I.R | Beyond Ordinary**.

Although this is primarily a frontend portfolio project, security issues can still occur through dependencies, client-side code, third-party services, configuration, or accidental exposure of sensitive information.

If you discover a security vulnerability, please report it responsibly rather than publicly disclosing it.

---

## 🛡️ Supported Versions

Security fixes are generally applied to the latest version of the project.

| Version               | Supported  |
| --------------------- | ---------- |
| Latest                | ✅ Yes      |
| Older versions        | ⚠️ Limited |
| Unmaintained versions | ❌ No       |

If you are using an older version, please update to the latest available version before reporting an issue whenever possible.

---

## 🚨 Reporting a Vulnerability

**Please do not publicly disclose security vulnerabilities through GitHub Issues, Discussions, pull requests, or other public channels.**

Instead, report security issues privately to the project maintainer.

When reporting a vulnerability, please include:

* A clear description of the vulnerability.
* The affected component, file, or feature.
* Steps required to reproduce the issue.
* The potential impact.
* Screenshots, logs, or proof-of-concept material when appropriate.
* Any suggested mitigation, if you have one.

Please provide enough information to reproduce and understand the issue without exposing unnecessary sensitive information.

---

## ⏱️ Response Process

After receiving a security report, the maintainer will:

1. Review the report.
2. Determine whether the issue is a valid security vulnerability.
3. Assess its severity and potential impact.
4. Work on a fix or mitigation where appropriate.
5. Release the necessary changes.
6. Credit the reporter when appropriate and with their permission.

Response times may vary depending on the complexity and severity of the issue.

---

## 🔒 Sensitive Information

Never commit sensitive information to the repository, including:

* API keys
* Passwords
* Authentication tokens
* Private credentials
* Personal access tokens
* Private configuration files
* Database credentials
* Private certificates or keys

If sensitive information is accidentally committed, simply deleting it from the latest commit may **not** be enough because Git history can retain it.

In such cases, immediately revoke or rotate the exposed credential and report the situation privately.

---

## 🌐 Client-Side Security

Because this project is primarily frontend-based, remember that anything included in publicly served HTML, CSS, or JavaScript should be considered visible to users.

**Never place secrets in frontend code.**

Client-side code should not contain:

```text
API secrets
Private keys
Passwords
Authentication credentials
Server-side secrets
```

If a feature requires confidential credentials, it should be handled through an appropriate server-side or backend solution.

---

## 📦 Dependencies

Third-party dependencies should be kept reasonably up to date.

Before adding a dependency:

* Verify that it is necessary.
* Use a reputable source.
* Check its maintenance status.
* Review its permissions and behavior.
* Avoid unnecessary dependencies.

Known vulnerabilities in dependencies should be investigated and addressed when practical.

---

## 🔗 Third-Party Services

This project may interact with external services such as hosting providers, form services, analytics tools, APIs, or other third-party platforms.

Security issues originating entirely within a third-party service should generally be reported to that service's security team.

However, if the integration itself introduces a vulnerability in this project, please report it privately to the project maintainer.

---

## 🚫 Responsible Disclosure

Please allow reasonable time for a vulnerability to be investigated and addressed before publicly disclosing technical details.

Do not exploit a vulnerability beyond what is reasonably necessary to demonstrate the issue.

Avoid:

* Accessing data that does not belong to you.
* Modifying or deleting other people's data.
* Disrupting services.
* Performing denial-of-service attacks.
* Social engineering.
* Spam.
* Destructive testing.

Security research should be conducted responsibly and with minimal impact.

---

## 🙏 Thank You

Thank you for helping keep **A.B.I.R | Beyond Ordinary** safe.

Responsible security reports help improve the project for everyone.

**Build responsibly. Stay secure. Go beyond ordinary.**
