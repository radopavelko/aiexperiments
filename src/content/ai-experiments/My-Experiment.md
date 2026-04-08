---
title: "My AI Experiment"
description: "This is my 1st Experiment"
date: "2026-04-10"
tags:
  - AI
  - VS Code
---

Story how I have build my website

## How

Process is simple. The hard parts are:
- Deciding when to stop
- Recovering from errors gracefully
- Keeping the context window from filling up with noise

## Conclusion

**The confidence spiral.** The model makes a wrong assumption early, then builds on it convincingly. By step 10, you're very far from where you wanted to be.

**Tool call loops.** Without explicit loop detection, agents will happily call the same tool with slightly different arguments 47 times.

**Context bloat.** Every tool call result goes into the context. After a few dozen steps, you're spending most of your token budget on history.

## What actually helps

Keep tools small and composable. A tool that does one thing is easier to reason about than a tool that does five.
