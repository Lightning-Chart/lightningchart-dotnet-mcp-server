# LightningChart JS Trader MCP Server

Give AI coding agents the LightningChart .NET instructions they need before they
write charting code.

This MCP server is for developers using Claude Code, Cursor, Cline, Roo Code,
Codex, Windsurf, or any other MCP-compatible coding agent to build
LightningChart .NET charts, dashboards, and data visualizations.

**For latest user guides on LightningChart .NET and AI, please refer to the [Developer Documentation](https://lightningchart.com/net-charts/docs/lightningChart-and-ai/)**

## Why This Exists

AI agents can produce broken LightningChart .NET code because they mix LightningChart .NET library with LightningChart JS,
other charting libraries, old reference names, old API versions, or guessed method
signatures. This server gives the agent a reliable starting point:

- official LightningChart .NET agent instructions maintained by the LightningChart .NET maintainers
- current best practices for guiding agents toward LightningChart .NET documentation
- common mistakes and outdated assumptions agents should avoid
- validation guidance for confirming LightingChart .NET API usage locally

It loads the official LightningChart .NET Agent Skill guidance maintained by the
LightningChart .NET maintainers.

## Setup

Add this MCP server to Claude Code, Cursor, Cline, Roo Code, Windsurf, Codex, or
another MCP-compatible coding agent.

Many clients have a UI for adding a custom MCP server, so you do not necessarily
need to edit a JSON file manually. Use these values:

```text
Name: LightningChart
Transport: STDIO
Command: npx
Arguments: -y
Arguments: @lightningchart/dotnet-mcp-server
Environment variables: leave empty
Environment variable passthrough: leave empty
Working directory: your project folder
```

The client will run the package with `npx` when it starts the MCP server. If
your client uses a JSON config file instead of a UI, use the equivalent config:

```json
{
  "mcpServers": {
    "lightningchart": {
      "command": "npx",
      "args": ["-y", "@lightningchart/dotnet-mcp-server"]
    }
  }
}
```

Example via Claude Code CLI:
```claude
claude mcp add lightningchart-dotnet -- npx -y @lightningchart/dotnet-mcp-server@latest
```

Restart or reload your MCP client after adding the config. Then start a new
chat/session in a JavaScript or TypeScript project and ask for charting work
normally:

```text
Use $lightningchart-dotnet to add a XY-chart to this component.
```

```text
Use $lightningchart-dotnet to review this chart implementation for outdated or hallucinated LightingChart .NET APIs.
```

```text
Use $lightningchart-dotnet to migrate this existing chart to LightningChart .NET and verify the API usage with local type checks if possible.
```

In clients that show tool activity, you should see the agent call
`get_lightningchart_context` automatically when it decides it needs LightningChart .NET guidance.

If the client does not pick the tool automatically, add one sentence:

```text
Use the LightningChart MCP server for LightningChart .NET guidance.
```

## How To Verify It Helped

Good signs after the tool call:

- it follows the returned LightningChart .NET Agent Skill guidance
- it does not guess LightningChart .NET APIs from memory
- it instructs the correct license usage
- it runs local type checks when possible

## Troubleshooting

If the agent does not seem to use the server:

- confirm the MCP config was added to the correct client
- restart or reload the client after changing MCP config
- check that the client lists a `lightningchart` MCP server
- check that the tool `get_lightningchart_context` is available
- add `Use the LightningChart MCP server for LightningChart .NET guidance.` to the prompt

## License

This MCP server is licensed under the MIT License.

LightningChart .NET is separate proprietary software with its own licensing terms.
