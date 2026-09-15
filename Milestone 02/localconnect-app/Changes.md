# LocalConnect Product Improvements

## Existing feature review

LocalConnect already supported neighborhood posts and issue reporting through the Feed and Issues pages. It also contained Tasks and a Leaderboard. Tasks required assigning work to named people, and the Leaderboard ranked residents by points. Those features are technically functional, but they introduce workplace productivity concepts that are not necessary for lightweight neighborhood communication.

## Changes made

- Removed Tasks and Leaderboard from the application routes and navigation.
- Replaced the productivity-oriented Task data model with Community Events, allowing residents to share an event name, date, location, and details.
- Added Local Recommendations, allowing residents to recommend a trusted service or business with a category and explanation.
- Updated dashboard metrics and copy to describe posts, issues, events, and recommendations instead of productivity scores.
- Added API routes, controllers, Prisma models, seed data, and frontend forms/cards for both new features.

## Product impact

Events help neighbors coordinate cleanups, meetings, and gatherings. Recommendations help residents find trusted local services. Both workflows directly support the platform's purpose while keeping the interaction simpler than assigned tasks and point-based rankings.

## Validation

Run the frontend with `npm run lint` and `npm run build` from `client`. Start the backend after setting `DATABASE_URL`, then run the Prisma generate/migration commands described in the server README.

## Deployment links

- Frontend Deployment Link: Not deployed yet
- Backend Deployment Link: Not deployed yet