---
title: "Prompting Patterns That Actually Work"
description: "A practical collection of prompting techniques I've tested and use regularly — with real examples and honest notes on when they fail."
date: "2026-02-20"
tags:
  - prompting
  - llm
  - productivity
---

Good prompting is half technical, half editorial. Here are the patterns I keep coming back to.

## Role + context + task

The most reliable structure I've found is: **who** you want the model to be, **what context** it needs, then **what you want**.

> You are a senior product designer reviewing a mobile app for accessibility. Here is the screen description: [description]. List the top 3 accessibility issues and suggest fixes.

## Chain of thought for complex reasoning

When accuracy matters, ask the model to think out loud before answering.

> Before giving me the answer, walk through your reasoning step by step.

This adds tokens but dramatically reduces confident-sounding wrong answers.

## Constraints as guardrails

Explicit constraints reduce output variance. Be specific about format, length, and what to exclude.

> Summarise this article in exactly 3 bullet points. Each bullet should start with a verb. Do not include any statistics.

## Few-shot examples

When tone or format is hard to describe, show instead of tell. Three examples are usually enough.

## When these patterns fail

None of these are magic. Complex multi-step reasoning still goes off the rails. Factual accuracy on obscure topics remains unreliable. The model is a very good editor and synthesizer — treat it as that, not as a database.
