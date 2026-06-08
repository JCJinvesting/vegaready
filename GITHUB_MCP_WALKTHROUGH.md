# GitHub MCP Plugin — Setup & Verification Walkthrough

> Audience: Claude agents in **new Cowork sessions** on this machine. This documents how the
> `github` MCP plugin was customized, why, and how to verify / repair / roll it back.
> Last updated: 2026-06-08. Machine: Windows (`Chris_Legion5`), Claude Desktop / Cowork mode.

---

## 1. TL;DR — Current State

- The `github` plugin (from the `claude-plugins-official` marketplace) is **installed and enabled** (user scope).
- It connects to GitHub's **remote, hosted MCP server** at `https://api.githubcopilot.com/mcp/`.
- It was **customized to expose ALL toolsets** by changing the URL to `…/mcp/x/all`.
  - Bare `/mcp/` = **44** tools (default subset).
  - `/mcp/x/all` = **90** tools (everything). ← now active.
- Auth is a **Windows User env var** `GITHUB_PERSONAL_ACCESS_TOKEN` (a fine‑grained `github_pat_…`,
  account **JCJinvesting**), injected via `${GITHUB_PERSONAL_ACCESS_TOKEN}` substitution.
- The token was tested live against both the GitHub REST API (HTTP 200) and the MCP endpoint
  (initialize + tools/list → 90 tools).

**Effect timing:** config changes are read when a **new session starts**. If a new session still
shows the old tool set, fully **quit and relaunch Claude Desktop**. MCP tools cannot be hot-added to
an already-running session.

---

## 2. How the GitHub plugin works in Cowork

The plugin is just a thin wrapper around GitHub's hosted MCP server — there is **no local process**
and nothing to `npm install`. Connection = one HTTP endpoint + one bearer token.

`.mcp.json` (the whole plugin config):

```json
{
  "github": {
    "type": "http",
    "url": "https://api.githubcopilot.com/mcp/x/all",
    "headers": {
      "Authorization": "Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}"
    }
  }
}
```

- `${GITHUB_PERSONAL_ACCESS_TOKEN}` is resolved from the environment of the **Claude.exe** process.
  Because the token is stored as a **User‑scope** Windows env var, Claude Desktop only sees it if it
  was **launched after** the variable was set. If auth fails, relaunching the app is the first fix.
- File must be **UTF‑8 without BOM** and valid JSON.

---

## 3. The key customization: enabling ALL tools

GitHub's remote server selects toolsets **by URL path** (or by header). This is the one knob that
matters for "use all tools":

| URL | Tools | Notes |
|-----|-------|-------|
| `https://api.githubcopilot.com/mcp/` | 44 | Default toolset only |
| `https://api.githubcopilot.com/mcp/x/all` | 90 | **All toolsets** (what we set) |
| `https://api.githubcopilot.com/mcp/readonly` | — | Default, read tools only |
| `https://api.githubcopilot.com/mcp/x/all/readonly` | — | All toolsets, read-only |
| `https://api.githubcopilot.com/mcp/x/{toolset}` | — | One toolset, e.g. `/x/issues` |

Available toolsets: `actions, code_security, copilot, dependabot, discussions, gists, git, issues,
labels, notifications, orgs, projects, pull_requests, repos, secret_protection, security_advisories,
stargazers, users` plus remote-only `copilot_spaces, github_support_docs_search`.

Optional headers (alternative to the path; equivalent to local-server env vars):
- `X-MCP-Toolsets: repos,issues` — comma list (empty ⇒ default). No `all` value; use `/x/all` path instead.
- `X-MCP-Tools: get_file_contents,issue_read` — exact tool allow-list.
- `X-MCP-Readonly: true` — read tools only.
- `X-MCP-Lockdown: true`, `X-MCP-Insiders: true`.

> Fine-grained PAT caveat: the server advertises all 90 tools, but a **call** only succeeds if the
> PAT actually grants that repo/permission. Write tools may return 403 if the token is read-only or
> the target repo isn't in the token's scope. This is a token-permission issue, not a config issue.

---

## 4. Exact file locations on this machine

Session-pair base (yours may differ — these IDs identify the Cowork install, not one chat):

```
C:\Users\cwm4t\AppData\Roaming\Claude\local-agent-mode-sessions\
  726137f6-bac0-44e6-9fb3-b99727a2a1fa\07a5977b-c3c6-4bb1-8e4a-af23753540d0\cowork_plugins\
```

Under `cowork_plugins\`:

| File | Role | Edited? |
|------|------|---------|
| `cache\claude-plugins-official\github\b36fd4b75301\.mcp.json` | **Live config** the app loads | ✅ → `/x/all` |
| `marketplaces\claude-plugins-official\external_plugins\github\.mcp.json` | Marketplace source (re-resolved on update) | ✅ → `/x/all` |
| `.install-manifests\github@claude-plugins-official.json` | SHA‑256 integrity manifest for the cache | ✅ hash updated |
| `installed_plugins.json` | Registry of installed plugins (confirms enabled) | read-only |

**Why all three:** the cache file is what loads now; the marketplace copy keeps the change if the
plugin is re-resolved; the manifest stores `sha256(.mcp.json)` — if integrity is verified on load, a
stale hash could reject the edit or trigger a re-copy. We updated the manifest so all three agree.

Backups (`.bak`) of every edited file sit next to the originals — see Rollback.

---

## 5. How this was done (reproducible procedure)

Use **Desktop Commander** (`mcp__Desktop_Commander__*`) — it runs on the Windows host with real
filesystem + process access. The sandbox Bash tool and the read-only session mount under
`/sessions/.../mnt/.local-plugins` **cannot** edit the live config.

> ⚠️ Two Desktop Commander gotchas learned here:
> 1. `read_process_output` often returns 0 lines for short one-shot processes — read the **stdout in
>    `start_process`'s initial output** instead, by having the command print results directly.
> 2. Pass PowerShell **directly** as the `command` (the default shell is `powershell.exe`). Avoid
>    nesting `powershell -Command "..."` (quoting breaks). For multi-line scripts use a single-quoted
>    here-string `@'…'@` and write with `[IO.File]::WriteAllText(path, text, UTF8Encoding($false))`
>    to avoid a BOM (`Set-Content -Encoding utf8` on Windows PowerShell 5.1 **adds a BOM**).

Steps:
1. Confirm the token: `[Environment]::GetEnvironmentVariable('GITHUB_PERSONAL_ACCESS_TOKEN','User')`
   (print only length + prefix, **never the full token**).
2. Validate it: `GET https://api.github.com/user` with `Authorization: Bearer <token>` → expect 200.
3. Back up each file to `*.bak` (only if no `.bak` exists yet).
4. Replace `https://api.githubcopilot.com/mcp/` → `https://api.githubcopilot.com/mcp/x/all` in both
   `.mcp.json` files; write UTF‑8 **no BOM**.
5. Recompute `sha256` of the cache `.mcp.json` and write it into the manifest's `files[".mcp.json"]`.
6. Verify all three files are valid JSON.
7. Start a new session (or relaunch the app) and confirm `mcp__github__*` tools appear.

---

## 6. Verify connectivity (live MCP handshake)

This Node script proves the endpoint + token work end-to-end and counts tools. It reads the token
from `$env:GH` so the token never appears in the script or output. Run via Desktop Commander:

```powershell
$script = @'
const TOKEN = process.env.GH;
const URL = "https://api.githubcopilot.com/mcp/x/all";
const H = {Authorization:"Bearer "+TOKEN,"Content-Type":"application/json",
  "Accept":"application/json, text/event-stream","MCP-Protocol-Version":"2025-06-18"};
const last = t => { const d=t.split(/\r?\n/).filter(l=>l.startsWith("data:")).map(l=>l.slice(5).trim()); return d.length?d[d.length-1]:t.trim(); };
(async()=>{
  let r=await fetch(URL,{method:"POST",headers:H,body:JSON.stringify({jsonrpc:"2.0",id:1,method:"initialize",params:{protocolVersion:"2025-06-18",capabilities:{},clientInfo:{name:"verify",version:"1"}}})});
  const sid=r.headers.get("mcp-session-id"); await r.text();
  console.log("INIT="+r.status+" SESSION="+(sid||"none"));
  const H2=Object.assign({},H); if(sid)H2["Mcp-Session-Id"]=sid;
  await fetch(URL,{method:"POST",headers:H2,body:JSON.stringify({jsonrpc:"2.0",method:"notifications/initialized"})});
  let r3=await fetch(URL,{method:"POST",headers:H2,body:JSON.stringify({jsonrpc:"2.0",id:2,method:"tools/list"})});
  const o=JSON.parse(last(await r3.text())); const t=(o.result&&o.result.tools)||[];
  console.log("TOOLS="+r3.status+" COUNT="+t.length);
})().catch(e=>console.log("ERR="+e.message));
'@
Set-Content "$env:TEMP\verify.js" $script -Encoding utf8
$env:GH=[Environment]::GetEnvironmentVariable('GITHUB_PERSONAL_ACCESS_TOKEN','User')
node "$env:TEMP\verify.js"
```

Expected: `INIT=200 …`, `TOOLS=200 COUNT=90`. Inside an actual session, just confirm tools like
`mcp__github__search_repositories` / `mcp__github__create_issue` are callable.

---

## 7. Troubleshooting

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| No `mcp__github__*` tools in a new session | App was running before the edit | Quit & relaunch Claude Desktop |
| Only ~44 tools available | URL still bare `/mcp/` | Set URL to `/mcp/x/all` (Section 4) |
| 401 Unauthorized on handshake | Token missing/expired, or app launched before env var set | Re-set the User env var; relaunch app; rotate PAT if expired |
| Config "reverts" after a plugin update | Only the cache was edited | Marketplace copy is also patched here; if it still reverts, re-apply Section 5 |
| Plugin won't load after edit | BOM added, invalid JSON, or manifest hash mismatch | Rewrite UTF‑8 **no BOM**, validate JSON, update manifest hash |
| A specific tool returns 403 | Fine‑grained PAT lacks that repo/permission | Grant the permission on the PAT at github.com/settings — not a config problem |

---

## 8. Rollback

Restore the originals (bare `/mcp/`, 44 tools) from the backups:

```powershell
$f=@(
 "…\cowork_plugins\cache\claude-plugins-official\github\b36fd4b75301\.mcp.json",
 "…\cowork_plugins\marketplaces\claude-plugins-official\external_plugins\github\.mcp.json",
 "…\cowork_plugins\.install-manifests\github@claude-plugins-official.json"
)
foreach($p in $f){ if(Test-Path "$p.bak"){ Copy-Item "$p.bak" $p -Force } }
```

(Replace `…` with the session-pair base in Section 4.) Then relaunch the app.

---

## 9. Security notes

- The PAT is a credential. Never print it, never write it into a file, never put it in a URL. Read it
  only as length/prefix when checking presence.
- Storing the token as a Windows env var (not in `.mcp.json`) is the right pattern — `.mcp.json` keeps
  only the `${GITHUB_PERSONAL_ACCESS_TOKEN}` placeholder, so the config is safe to copy/commit.
- Prefer the **least-privilege** PAT that still covers the work; `/x/all` exposes write/admin tools,
  but the token's grants are the real boundary.
