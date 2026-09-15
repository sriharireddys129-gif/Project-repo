# Changes

## What I found

Motivation Mode rendered a random hardcoded quote from the server and refreshed it every five seconds. The widget was displayed beside the task list, but it did not read task state, change task behavior, or give the user a useful next action. The repeated polling also created unnecessary network requests for content that had no connection to productivity progress.

## What changed

I replaced Motivation Mode with a task progress tracker in the same dashboard sidebar. The new widget uses the tasks already loaded by the dashboard to show:

- The percentage of tasks completed
- Completed and remaining task counts
- A progress bar with accessible progress semantics
- A short status message that changes for empty, active, and complete task lists

The tracker updates immediately when a task is added or marked complete. No new API or database field was needed, and the quote polling path is no longer used by the UI.

## Why this is more useful

The original feature provided passive inspiration without evidence that it helped users finish work. The replacement provides direct feedback about actual progress and reinforces the existing completion workflow. It supports FocusForge's product goal with information users can act on, while reducing unnecessary background requests and keeping the implementation small.