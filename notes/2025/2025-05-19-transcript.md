# 05/19/2025 Webpack TSC Meeting Transcript

**evenstensberg:** ready when you are
 * 👍 @wunderacle, @snitin315

**wunderacle:** Alrighty, welcome y’all to this meeting. Ill be recording later the name of the people that attended today.

**wunderacle:** First, is there any announcement anyone wishes to do?

**evenstensberg:** no from me

**snitin315:** No announcements from me either

**alexander.akait:** No too

**wunderacle:** Alrighty

**wunderacle:** None from my side either
 * 👍🏾 @evenstensberg, @snitin315

**wunderacle:** Besides of course, that we're still going around the setup of the automations of our bots here.

**wunderacle:** And the fact the first meeting agenda got successfully generated https://github.com/webpack/tsc/issues/8
 * 🚀 @snitin315

**wunderacle:** Without further ado, if no one opposes, let's go to the agenda topics. Per recommendation, private items are recommended _last_ regardless of their order; This allows us to easily remove private pieces of our meeting from the public hands.
 * 👍 @snitin315

**evenstensberg:** good idea

**wunderacle:** Let's talk about "Discuss a webpack Google Summer of Code repository", the first item of the agenda.

**evenstensberg:** So.. a bit background here

**evenstensberg:** we've had a bunch of people contacting the maintainers often they ask the same questions or need the same type of guidance

**evenstensberg:** it makes sense that we create a gsoc repo so that we can reduce amount of stress for the contributors

**snitin315:** Yeah, I think it is good idea to get all the resources in one place

**wunderacle:** Yeah I was going (still am) to create some material, FAQ, templates of how to write their submissions, what to do, what not to do, etc.

**snitin315:** Should we also add past sample proposals also to that repository for reference?
 * 👍 @wunderacle, @alexander.akait

**evenstensberg:** yea thats a good idea nitin

**evenstensberg:** but we need to ask them for permission first

**snitin315:** I can add mine for starting

**wunderacle:** We can make a template tho; But yeah, as much content to reduce duplication... and help them navigating on their own, helps definitely
 * 👍 @snitin315

**evenstensberg:** Awesome. Nitin you already have access to the repo on github. We need to figure out a structure (outside this meeting)

**snitin315:** Yeah, this time we got way too many AI generated proposals that too not even related to webpack at all.

**snitin315:** @evenstensberg Sure, I'll come up with a structure to help gsoc aspirants get started
 * 👍🏾 @evenstensberg, @wunderacle

**evenstensberg:** good stuff. That's the only thing imo that we need to discuss about gsoc

**evenstensberg:** can move on
 * 👍 @wunderacle, @snitin315

**wunderacle:** Alrighty, let's move to the next topic.

**evenstensberg:** tc39 is private btw

**wunderacle:** Right, what would be the next public topic?

**wunderacle:** I think you said 2,3 are private or?

**evenstensberg:** changelogs, issue tracking and github boards

**snitin315:** TC39 can be public because the tc39 meetings are also public

**wunderacle:** Okay, let's chat about "Automated changelogs"

**evenstensberg:** yea but our approach is private, we need to discuss that

**alexander.akait:** I think we should take changesets to make it, there is a bot for this and also we can setup commit linting

**alexander.akait:** I already used it for some repos and it works great

**wunderacle:** Are these automated changelogs about webpack releases?

**wunderacle:** We can use Commitizen here btw

**snitin315:** Yeah, regarding automated changelog I didn't get much time to explore but we have this action release-please usein in eslint https://github.com/eslint/markdown/blob/main/.github/workflows/release-please.yml and this seems useful

**evenstensberg:** same approach as google @alexander.akait ? Add patches to commits to build up the change?

**snitin315:** I guess we already do that and force conventional commits
 * 👍 @wunderacle

**alexander.akait:** Yeah, we will add them into PR
 * 👍 @wunderacle

**alexander.akait:** Bot will generate a link and before merge we will add required informations

**alexander.akait:** Then before release it will generate changelog file

**snitin315:** >I think we should take changesets to make it, there is a bot for this and also we can setup commit linting

changesets are also good to have

**snitin315:** we need to setup a global npm access token also for publishing releases with changesets

**alexander.akait:** Yeah, before it I want to finish integration of changesets firstly and try it with webpack, so we will understand any bottlenecks
 * 👍 @snitin315

**snitin315:** Also does anyone here has access to https://github.com/webpack-bot ?  I think maybe we can use it for publishing packages & creating version bump PRs automatically

**evenstensberg:** I dont

**alexander.akait:** Yeah, we need this bot, @evenstensberg can you write to Tobias or Sean to understand where we store access for this bot and how to setup and how it works?

**evenstensberg:** Yep noted
 * ❤️ @wunderacle, @snitin315, @alexander.akait

**evenstensberg:** I think we can start with that

**evenstensberg:** then see if we want to implement changepatches in a dummy repo

**evenstensberg:** i know the issue with patching changes/change sets are that it becomes very hard to be consistent when theres a lot of projects within one repo

**snitin315:** Yeah, we can start with any loader/plugin repo as well
 * 👍🏾 @evenstensberg

**evenstensberg:** but luckily our code isnt a big cake where you put everything in one repo like chrome

**evenstensberg:** @wunderacle i think we can move on, we got action points we can act on
 * 👍 @wunderacle

**wunderacle:** Noted.

**wunderacle:** Let's move to the next topic, "Issue tracking"

**wunderacle:** To begin with, what are we referring here? What is this topic about?

**snitin315:** I think we just need to make this board active https://github.com/orgs/webpack/projects/4
 * 🔥 @evenstensberg

**snitin315:** And increase the scope to all webpack repos
 * 👍 @alexander.akait

**snitin315:** RIght now we track issues only specefic to webpack

**alexander.akait:** I agree

**alexander.akait:** And automatically move closed issues to shipped to avoid noise of resolved problems

**evenstensberg:** Yep. and then we can add issues a cross repos

**snitin315:** ESLint has also documented there triage process - https://eslint.org/docs/latest/maintain/manage-issues#triaging-process

**evenstensberg:** please highlight this in the meeting notes

**evenstensberg:** I think this also touches the next (and last) meeting point about project boards

**snitin315:** Yeah, I think we can have something similar and also document the process.

**evenstensberg:** should we have a project board for each of the critical repos we have?

**evenstensberg:** we can still cross-reference issues

**snitin315:** Yeah, we should have project boards for major milestones like webpack-6, gsoc-esm, webpack-cli v6, etc.

**wunderacle:** Hmmm; I think we can create an issue to discuss our project boards tbh

**evenstensberg:** was thinking the same

**evenstensberg:** i think for now its very clear?

**evenstensberg:** we create boards for core repos, and we have one big board for webpack v6+
 * 👌 @snitin315

**snitin315:** Sounds good to me.

**evenstensberg:** highlight this also 🙂

**evenstensberg:** @alexander.akait wdyt?

**alexander.akait:** I think better to have one, because most of issues for webpack@6 can be solved for webpack 5 too, they postpone just because we have more priority issues right now
 * 👍 @wunderacle, @snitin315

**alexander.akait:** So one board will be better to track than two/three/etc

**evenstensberg:** Imo it makes sense to have an extra board for webpack-cli, dev server etc

**evenstensberg:** but if thats cumbersome then ok

**snitin315:** Hmm, let's start with one board for now for webpack-6. We don't have many items for cli/dev-server as of now.

**evenstensberg:** 👍🏾

**evenstensberg:** To summarize project boards/issue tracking: one project for webpack v6+
 * 👍 @snitin315

**evenstensberg:** agenda ++ 😄

**alexander.akait:** I am afraid it comes to outdated boards, as we have before

**alexander.akait:** Just from my experience

**evenstensberg:** yea and if we use milestone labels it gets messy really fast

**evenstensberg:** unless the implementation is consistent across repos

**alexander.akait:** Sometimes I am thinking to move all repos from webpack org to webpack itself for better control everything

**snitin315:** hmm, let's try to use projects properly this time with automations like creating an issue automatically adds it to the triage board and adding some specific labels like "accepted" moves it to the correct column automatically.

**wunderacle:** Like a monorepo? 😅

**wunderacle:** We don't really neeed that

**alexander.akait:** We don’t have a lot of active repos and soon most of old loaders will deprecated

**wunderacle:** With GitHub projects we can have one board even across-orgs

**alexander.akait:** No, not monorepo

**wunderacle:** and across repositories

**alexander.akait:** Just in one org

**snitin315:** I think @alexander.akait meant all the webpack-contrib repos

**alexander.akait:** Yeah

**wunderacle:** GitHub can do this through something they call Enterprises

**snitin315:** right now we have two orgs, webpack & webpack-contrib
 * 👍 @alexander.akait

**alexander.akait:** And it hard to control and setup some things between all repos

**alexander.akait:** And control permissions too

**snitin315:** Yeah, true. +1 for one single org. I think we can transfer ownership of repos accross org via settings

**alexander.akait:** For example changesets can be configured for all public repos in org
 * 👍 @snitin315

**snitin315:** But we will need admin permissions to webpack org for that i guess

**wunderacle:** Won't moving things from webpack-contrib break the flow of maybe anything existing?

**snitin315:** https://github.com/webpack-contrib/css-loader/transfer

**evenstensberg:** We can just depreciate stuff in the docs it will be fine

**alexander.akait:** The main problems after moving is links

**snitin315:** More info here - https://docs.github.com/repositories/creating-and-managing-repositories/transferring-a-repository

**alexander.akait:** In our docs and package jsons

**snitin315:** Yeah, we also have automated scripts that loads the readme files of these repo's on webpack.js.org, example https://webpack.js.org/loaders/css-loader/

**alexander.akait:** I can transfer or can give permissions for that, we need just decide will we do it and plan it

**evenstensberg:** This is a pretty big decision so first we need to communicate this well within the org, get a thumbs up from a general consensus and document the change + reason
 * 👍 @snitin315, @alexander.akait

**snitin315:** Yeah, correct.

**evenstensberg:** Its not done in an hour is what i try to communicate

**snitin315:** I agree.

**evenstensberg:** First, lets open an issue in webpack/webpack

**evenstensberg:** or as a discussion

**evenstensberg:** after that, we need to create a document stating why we move to one org

**evenstensberg:** it will make a lot of stuff easier admin-wise

**evenstensberg:** fyi

**alexander.akait:** I think we can plan this discussion for the next meeting, currently we need to setup changelog generation and automatic releases for webpack and we can make the same then for all repos when moving them
 * 👍 @snitin315

**alexander.akait:** So firstly let’s try it on webpack itself

**evenstensberg:** +1
 * 👍 @snitin315

**alexander.akait:** And look at result

**evenstensberg:** I mean, if the main reason for moving to one org is changesets we need to try it and see if that is good for us
 * 👍 @alexander.akait

**evenstensberg:** its not only for releasing + changelogs its good for moving into one org

**evenstensberg:** payouts are calculated in one org, we can automate dependabot prs, etc etc
 * 👍 @snitin315, @alexander.akait

**snitin315:** I think we can move on ?

**evenstensberg:** yes
 * 👍 @snitin315, @alexander.akait

**evenstensberg:** https://github.com/webpack/webpack/discussions/19548
 * 👍 @snitin315, @alexander.akait

**evenstensberg:** @wunderacle I think thats a wrap?

**wunderacle:** For the public part, yes?
 * 👍 @evenstensberg, @snitin315

**snitin315:** I think private topics are still left. tc39 & core devs
 * ❤️ @evenstensberg

**evenstensberg:** I have dinner now so g2g

**evenstensberg:** but nice speeking to yall

**evenstensberg:** Next meeting in 2 weeks
 * 👌 @snitin315

**snitin315:** see yaa

**snitin315:** bye folks 👋

**evenstensberg:** cya ❤️

**alexander.akait:** Bye ✌️
