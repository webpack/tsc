# 07/28/2025 Webpack TSC Meeting Transcript

**wunderacle:** Hey folks 👋 we''re starting today's TSC meeting. The meeting agenda is available here: https://github.com/webpack/tsc/issues/25

Please react with 👍 to acknowledge you're participating today ✨
 * 👍 @snitin315, @vipinalways, @porus_123, @bjohansebas, @thekavyashah

**wunderacle:** Alrighjty, let's give 3 more minutes for more people to join.
 * 👍 @snitin315, @vipinalways, @alexander.akait, @bjohansebas

**wunderacle:** I'd also like to emphasise you can subscribe on OpenJS's calendar for https://calendar.google.com/calendar/embed?src=linuxfoundation.org_fuop4ufv766f9avc517ujs4i0g%40group.calendar.google.com all calendar updates!
 * 👍 @vipinalways, @alexander.akait

**wunderacle:** Alrighty, welcome all to today's TSC meeting!

**wunderacle:** Before we start the items of our agenda, does anyone has an announcement they'd like to share or a topic to be discussed in private afterwards on <#1371080839341019237> ?

**wunderacle:** Alrighty, the first item of the agenda is https://github.com/webpack/tsc/issues/21

**wunderacle:** I've opened this issue to vote that we should streamline our comms. Our Slack is barely ever used and I feel it should be removed/disbanded. At most we could have Slack channels on OpenJS's slack as other projects do :)

**wunderacle:** This removes the need of supervising/monitoring more platforms. Discord feels sufficient for us.

**wunderacle:** TSC members: could you react with a thumbs up/down on the issue if you're in agreement and/or write a comment if you're -1 or if you have alternative suggestions?
 * 👍 @snitin315, @alexander.akait

**snitin315:** Yeah discord is sufficient IMO as well

**alexander.akait:** It would be nice to choose something that is available in all countries, yeah, we have VPN or other similar things, but such services sometimes are unstable, also now we have couple core developers from China, discord is blocked there too

**wunderacle:** Discord is not blocked on Russia, right?

**alexander.akait:** On the other hand, I understand that the number of such platforms is not so great these days.

**wunderacle:** I think folxs from China already need to use VPN for services like Slack, GitHub, Discord and others, unfortunately.
 * 👍 @alexander.akait, @bjohansebas

**snitin315:** Do we have any platform which works everywhere? 🤔

**alexander.akait:** In Russia it is slow, not banned

**alexander.akait:** Not all services are banned in Russia, but many of them just slow to force people use internal services

**alexander.akait:** Currently telegram is working everywhere, but not all people like it 😄
 * ➕ @snitin315

**alexander.akait:** So let's vote on this issue as was described above. If most decide to continue using discord I will be fine (hope other too).

**wunderacle:** Noted. And if issues arise, we can also address them as they come.
 * 👍 @alexander.akait

**wunderacle:** Maintaining a whole platform on the premise that it could cause issues... Isn't probably one that we should put much value into.
 * 👍 @alexander.akait

**wunderacle:** So far only I have reacted on the issue. Don't forget to react, y'all!

**snitin315:** Shall we move to the next item?

**alexander.akait:** One note about slack - let's keep the general channel, a lot of developers there and sometimes we have feedback there too, so we will avoid using slack for internal discussion/work/communication/etc
 * 👍 @snitin315

**wunderacle:** I mean, if we keep any channel, we still need to maintain the whole platform.

**wunderacle:** We can just redirect people towards here

**wunderacle:** (I barely ever see anyone asking questions there)

**wunderacle:** So consolidating all traffic to Discord makes sense imo

**alexander.akait:** We will pin a message like - we don't use it anymore if you need support/have questions/etc please visit here with link
 * 👍 @snitin315

**wunderacle:** Would that even be needed? But sure. We can make all channels read-only and disallow channel creation and stop accepting new people joining
 * 👍 @snitin315

**alexander.akait:** I am fine with read-only too, just give time for people to switch to our new platform, for example in 3 months we can just turn everything off

**wunderacle:** Sure. I can write a migration plan afterwards.
 * 👍 @snitin315, @alexander.akait

**wunderacle:** Let's move ton the next item: https://github.com/webpack/tsc/issues/16
 * 👍 @alexander.akait

**alexander.akait:** Will be great to see @evenstensberg for this issue, because he has ideas how to make it better and the plan 😄
 * ➕ @snitin315

**snitin315:** Were you able to discuss this in CPC?

**wunderacle:** So on this one, I chatted with the Foundation's CPC and they are more than happy to support us with marketing/branding/promotion and we're OK to organize it however we see fit and disburse funds however we see fit.

**wunderacle:** The real challenge here is: Indeed what's the format we want to run the Hackathon, how we're going to run, what are the prizes, etc.

**wunderacle:** So this require some more coordination. And to give us enough time, I'd believe the Hackathon should be around November.

**wunderacle:** We need to be very careful with guidelines and many other things (such as the format of the Hackathon, what sort of contributions are valid, etc) we don't want to create unfortunate situations where our own rules are used against us
 * ➕ @snitin315
 * 👍 @alexander.akait

**wunderacle:** Since anything involving money... People will want to take advantage of it.

**wunderacle:** Popular formats are:

1. Every contribution gives you points, in the end, the users with top points win prizes (either equally or based on position)
2. Bug Hunting. We have specific issues that are eligible for the Hackathon and folxs can work into them.
...

**snitin315:** We can start with a doc and put all of our ideas there, then we can finalise the strategy

**wunderacle:** Also, regarding the participation, teams or individual format. How to handle multiple people working on the same issue... Does the first opened PR receive points or the first merged PR? Will AI assisted code be allowed, etc

**wunderacle:** We can use the issue itself for initial convos and then also for drafting it, and then transfer it to a draft doc over time.
 * 👍 @alexander.akait

**wunderacle:** In the end we will need the Foundation's help with copywriting, legal, branding and marketing support.
 * 👍 @snitin315

**snitin315:** It should be individual i feel also it should be first come first serve, contributors are expected to comment on the issue they want to work on with a time like “I will work on this and raise a pr in 2 days” then if there is no significant progress after 2 days other contributors can ask to work on it

**alexander.akait:** I'll be honest, I'm afraid I won't be able to find time to help with this issue (but I am ready to review and give hints on PRs/issues), I'm not against it, but I'm afraid I personally won't be able to find that much time, we already have a lot of tasks on our list, as a main developer I would like to focus on them
 * 👍 @wunderacle

**wunderacle:** First-come-first serve as PR merged?

**snitin315:** Right, we will be able to prioritise reviews but won’t be able to help contribute by explaining code or writing tests

**wunderacle:** Yeah the Hackathon is meant to a certain degree alleviate the burden on us of developing code, but it will for a brief period of time increase the amount of PRs we need to review.

**snitin315:** First to claim an issue by commenting on it

**wunderacle:** Hence strict policies against AI PRs, spam PRs, etc.

**wunderacle:** > First to claim an issue by commenting on it
That's usually discouraged in Open Source

**wunderacle:** https://www.redhat.com/zh-cn/blog/stop-licking-cookie

**wunderacle:** Give this a read 😉

**snitin315:** Otherwise multiple contributors will end up sending prs to same issue leading to duplicate efforts

**snitin315:** We follow similar approach in Eslint

**snitin315:** https://eslint.org/docs/latest/contribute/work-on-issue

**snitin315:** I think for hackathon we can have some restrictions

**snitin315:** Contributors might also argue over whose PR should be merged

**wunderacle:** > Otherwise multiple contributors will end up sending prs to same issue leading to duplicate efforts
The issue of first come first serve is that if a person claims the issue and then doesn't work on it it prevents anyone to contribute on it :)

**wunderacle:** The first PR to get merged is pretty much the first one to get all the concerns resolved and all approvals and pass the contribution timelines

**wunderacle:** Maybe for this Hackathon it _could_ be first come first served, but there must be then an adherence or enforcement.

**snitin315:** Yes that’s why we should have a strict deadline of 2 days maybe. We can think more on this

**wunderacle:** Like if you claim to work on X and don't end up working on it, get disqualified. IDK. The thing is that these deadlines will vastly depend on how long shuld the hackathon run for?

**wunderacle:** I was thinking a whole month, which removes the rush of the usual hackathon, making the Hackathon itself become something similar as an Hacktoberfest
 * 👍 @snitin315

**snitin315:** Hmm true, we should start preparing a document and put all our ideas there
 * 👍 @alexander.akait

**wunderacle:** I think we can start writing straight to the issue. I will first have the meeting notes being generated after this meeting.

**wunderacle:** And then Ill write some minimal/initial stuff on the issue and we can go from there 👀

**wunderacle:** Is that alrighty by all?

**snitin315:** Sounds good to me 👌

**wunderacle:** Alrighty, let's move to the last issue for this meeting as we're nearing our time limit

**wunderacle:** https://github.com/webpack/tsc/issues/17

**wunderacle:** Does anyone has info on this one?

**alexander.akait:** We don't have a lot of issues for webpack-cli, there are three things:
- Fix broken cache when filesystem cache enabled - we already have a PR to fix it, just need a rebase and I want to merge it for the next major release
- Plugin support webpack-dev-server inside webpack-cli, but it is more about webpack-dev-server and only after this we should fix it on webpack-cli side
- New major release, again it should be after the webpack-dev-server plugin support

That is all, but updates above already in WIP, no ETA currently, but maybe autumn (early)
 * 👍 @wunderacle, @snitin315

**wunderacle:** Do you mind writing those updates on the issue?

**wunderacle:** Is there any other CTA needed here? Do we want to have these issues part of the Hackathon too?

**alexander.akait:** I don't think at all we need an issue for this, it is just a regular job for any our repo...
 * 👍 @wunderacle

**alexander.akait:** So I think it can be closed, because it is already in our roadmap, we already have discussion to have dashboard for tracking fixes/features for next releases
 * 👍 @wunderacle

**wunderacle:** Feel free to close it then :)
 * 👍 @alexander.akait

**alexander.akait:** Done
 * 👍 @snitin315

**alexander.akait:** I think we will focus on the dashboard after migration webpack-contrib into webpack, it's easier to keep everything in one place, also we are already working on the migration, currently - update eslint and jest in our repos, the next step is common repo for configuration files like - prettier/eslint/babel/package json commands/etc, I will work on it this week, so I think we will start migration next week (maybe after next week) and then we will make our dashboard
 * ➕ @snitin315

**wunderacle:** Noted. Is there an issue for that?

**alexander.akait:** I think it is all

**alexander.akait:** Anyway else we have?

**snitin315:** I think that’s all
 * 👍 @alexander.akait

**wunderacle:** That's all indeed.

**wunderacle:** Apologies, got a small emergency and work
 * 👍 @alexander.akait

**wunderacle:** Then, thank you all for attending this TSC's meeting. I'll be following up with https://github.com/webpack/tsc/issues/21, https://github.com/webpack/tsc/issues/16 and removing the first one from our agenda.
 * 👍 @snitin315, @alexander.akait

**wunderacle:** Take care, y'all!

**alexander.akait:** Thank you all!

**snitin315:** Thanks, byee everyone
