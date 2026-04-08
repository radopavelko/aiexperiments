---
title: "Building with the Claude API: First Impressions"
description: "What I learned after spending a week building small tools with Anthropic's Claude API — what works, what surprises you, and where to start."
date: "2026-03-15"
tags:
  - claude
  - api
  - llm
---

After a week of tinkering with the Claude API I have some thoughts worth sharing.

## Getting started

The API is refreshingly simple to set up. A few lines of Python or TypeScript and you have a working chat loop. The SDK handles retries and streaming out of the box.

```python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain how a transformer works in plain English."}
    ]
)
print(message.content)
```

## What surprised me

The context window is genuinely large. You can dump an entire codebase in and ask questions about it — something that felt like science fiction two years ago.

Structured outputs via tool use are reliable enough to build on. When you define a schema and ask Claude to return JSON matching it, it does so consistently.

## What to watch out for

Latency on longer inputs can be noticeable. For interactive apps, stream the response rather than waiting for the full completion.

Cost scales quickly if you're not careful with context management. Think of each API call as a taxi ride — the longer the trip (context), the more it costs.

## What I'm building next

A personal knowledge base assistant that reads my notes and surfaces relevant connections when I'm writing. The goal is less search, more serendipity.
