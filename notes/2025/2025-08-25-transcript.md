# 08/25/2025 Webpack TSC Meeting Transcript

**snitin315:** Cool, let’s start today’s meeting

**snitin315:** First agenda item is https://github.com/webpack/tsc/issues/32

**snitin315:** Use minify for the webpack 6 docs

**evenstensberg:** @wunderacle can start with his rationale. Me and Alex have some points we need to address after

**wunderacle:** Right, generally  speaking, Webpack docs need a refresh. Both in terms of structure (UX/DX) and content. It's a long-term goal, IMO, to come in with Webpack 6 as we intend to make some API deprecations and (general documentation changes)

**alexander.akait:** Yes, my biggest concern is the links, there is a lot of information with links to our site, if we change them, many will stop working, we need to pay close attention to this, the second rational question is whether we have enough time for such work, and the third point is that webpack itself has a schema in json format where there are all the types and a basic description of the properties, could we use this to generate the options structure?

**snitin315:** I think it makes sense to have versioning supported on the same URL, but i m not sure if we should change the underlying tool/framework. it might be a lot of work and we have tight resources

**evenstensberg:** Another thing is the use of money/resources on this. Ideally if we get everything free both from the contributing pov and using Mintlify then its a good thing. An update to next breaking version is acceptable to me, if its not much job or costly

**wunderacle:** Ah yes, we can guarantee links to keep working.

**evenstensberg:** DX wise the docs site is good, you create a markdown file and prefix with the appropriate path you want it to reside in. The cost of running the project locally takes time

**snitin315:** Why not use Docusauras?

**evenstensberg:** If we do agree on a change, this needs to be done at a markdown level

**evenstensberg:** re-creating the entire documentation site is time consuming

**snitin315:** https://docusaurus.io/ supports markdown, and we can re-use the existing content

**evenstensberg:** + it is free
 * ➕ @snitin315

**evenstensberg:** Maybe something worth considering @wunderacle ?

**evenstensberg:** I mean if Mintify can guuarantee 0 cost for us, then that is also good

**snitin315:** I can do a small POC to evaluate the effort for migrating to Docusauras.

**evenstensberg:** There's a contributor working on a POC @snitin315 , @augustinmauroy .  Talk to him about it
 * 👍 @snitin315

**evenstensberg:** I wanna hear what Claudio thinks tho

**snitin315:** Sure

**wunderacle:** Yeah, Docusaurus, also sounds great.

**snitin315:** We need to evaulte which one would be a good fit for us

**evenstensberg:** @wunderacle I've seen the Mintify docs and it is good. Can you reach out to them about providing their services for free? In return we can have ads for them in the docs page

**evenstensberg:** not aggresive ads, just mentioning them where they want

**wunderacle:** My +1 with Mintlify

**wunderacle:** Is the UX and DX

**wunderacle:** Also low maintenance effort.

**evenstensberg:** +1 there

**evenstensberg:** if its free

**snitin315:** let's reach out to the minify team and check if they can sponsor our website

**snitin315:** we have good traffic, it will be a good marketing for them as well

**snitin315:** Does anyone here has access to google analytics of webpack.js.org?

**evenstensberg:** I dont believe we have google analytics access

**alexander.akait:** Maybe Tobias or Sean have, I don't, so we need to ask them, or we can re setup (not sure will we lost previous data)

**evenstensberg:** recreating is ok for me

**evenstensberg:** we dont use the data for anything anyways

**alexander.akait:** Let's ask Sean firstly, I think he should

**snitin315:** yeah, let's ask Sean & tobias, then we can recreate if needed.

**wunderacle:** As I mentioned on https://discord.com/channels/1180618526436888586/1374043079425790082/1409565322771435652

**snitin315:** 1 year is not enough for us, we need long term solution
 * ⭐ @evenstensberg, @bjohansebas

**wunderacle:** Indeed

**evenstensberg:** @wunderacle can u reach out to them?

**wunderacle:** Yeah, I can also cc' you on them

**evenstensberg:** sounds good

**snitin315:** That would be great. I think we need an official email like webpack-tsc@openjsf.org something like that so that the whole TSC is looped in always

**wunderacle:** I'm also fine with placing them as supporters

**evenstensberg:** we have an email set up for contacting webpack

**evenstensberg:** currently the emails get forwarded to me and alex

**evenstensberg:** let me know if you want to get forwarded too

**snitin315:** Yes, let's forward them to each TSC member

**evenstensberg:** let me create an issue quick

**snitin315:** Cool, so the action items for this are:
- Evaluate docusarus
- Check with minify to get long term sponsorship
 * 👍🏾 @evenstensberg, @alexander.akait, @bjohansebas

**snitin315:** Sound good? Anything else for this issue?

**wunderacle:** Sounds good

**snitin315:** Cool, let's move on to the next item

**snitin315:** Webapck hackathon

https://github.com/webpack/tsc/issues/16

**evenstensberg:** Claudio has done some great progress here

**snitin315:** Nice, @wunderacle Can you share a quick update here?

**alexander.akait:** I think we need more issues and more simple or divided into smaller steps, some of them are very hard, even for me it is the big and hard work

**snitin315:** Hmm, I think we can also club this docs website migration as part of hackathon

**alexander.akait:** It would also be great if we found sponsors for this @evenstensberg  any feedback here?

**evenstensberg:** Asked nasa and google + microsoft none has replied, so we need to figure out other venues to get sponsors

**evenstensberg:** got a dm from another oss org that is interested in co-hosting the hackathon

**snitin315:** Can openjs foundation help us here?

**evenstensberg:** openjsf will help with marketing + coms
 * 👍 @snitin315

**snitin315:** Which oss org is interested in co-hosting?

**evenstensberg:** let me check

**alexander.akait:** My other suggestion is to abandon the idea of ​​different prices for them, since this will most likely result in competition where we will be overwhelmed with bad code, ideally, tasks of approximately equal complexity and time with the same prize, yes, this will require a little more preparation from us, but the result will be better, I think

**wunderacle:** Right, so the Hackathon at the moment we're opening issues

**evenstensberg:** i just have his linkedin, he hasent provided his org

**wunderacle:** And exploring work for it

**evenstensberg:** @alexander.akait we can decide on ranking later based on our allocated budget

**alexander.akait:** Yeah, we can

**evenstensberg:** I've spoken a bit with Alex @wunderacle , we are currently trying to figure out how much we can allocate from our open collective

**evenstensberg:** as a base budget

**evenstensberg:** sponsors will be added to the base budget
 * 👍 @snitin315

**snitin315:** Makes sense

**wunderacle:** Noted

**snitin315:** So the action items for this issues are:
- Get sponsors and finalize budget
- Create smalled issues for contributors to pick up
- Finalise hackathond timelines

**evenstensberg:** @avivkeller and @wunderacle works on issue generation, me and @alexander.akait will work on economics
 * 👍 @snitin315, @avivkeller, @alexander.akait

**evenstensberg:** Claudio got better networking skills than me so it would be great if you could relay that we needs sponsors if u find any
 * 👍 @snitin315

**evenstensberg:** another thing

**evenstensberg:** before we move to next

**evenstensberg:** we do not have a time frame for the hackathon

**evenstensberg:** So... I propose we can maybe estimate that the hackathon will be in february/march?

**evenstensberg:** this fall is somewhat ambigious

**snitin315:** yes, we need to finalise the timelines as well

**evenstensberg:** me and claudio have openjsf stuff we need to work on the rest of the fall

**snitin315:** Updated the action items

**alexander.akait:** Yeah, also migrations into webpack org is a big tasks for fall

**alexander.akait:** And we always have different fixes in webpack itself
 * 👍🏾 @evenstensberg, @snitin315

**snitin315:** Cool, let's move on to the next item

**snitin315:** Feature: allow to use custom parser and investigate using their to increase performance

https://github.com/webpack/webpack/issues/19412

**evenstensberg:** Not much from me here. Claudio has a friend that is working on ast node locations to the ast tree. We're waiting on that

**evenstensberg:** after that we can just add an experimental flag in core

**alexander.akait:** Here is more about using any estree compat parsers, I have two ideas - an option in webpack.config.js or implement a hook to override our default parse function

**alexander.akait:** Both solutions are not hard

**evenstensberg:** im for config option

**evenstensberg:** instead of overriding

**snitin315:** Yes, config option seems more easy to adopt for existing users

**alexander.akait:** Okay, noted, maybe this week, want to finish some internal work around types, trying to reduce todo and todos types into core

**evenstensberg:** btw @alexander.akait are you done with eslint migration?

**snitin315:** I think we have updated eslint in most of the repos

**evenstensberg:** good point to mention we're going to remove payouts for contributors that updates deps and ci's. That's a core/wg responsibility and will save us money

**evenstensberg:** so if u see a dep update pr

**evenstensberg:** say its internal, close it

**snitin315:** Noted, makes sense.

**alexander.akait:** Almost done - css-loader and thread-loader need to finish
 * ⭐ @evenstensberg, @snitin315

**evenstensberg:** we need to move on now haha

**alexander.akait:** Here another question - we have some repos which contributing and maintaining by external developers - webpack-bundle-analyzer and grunt-webpack

**alexander.akait:** The first is very main for us, the second can be moved out of webpack repos at all

**snitin315:** do we still need grunt-webpack?

**snitin315:** bundle-analyzer is populer so it makes sense to maintain it

**evenstensberg:** many projects actually still use grunt

**evenstensberg:** so yea

**evenstensberg:** if we can, move the repos to the org

**evenstensberg:** we can onboard the contributors

**evenstensberg:** and is good for them too

**alexander.akait:** Yeah, I think we don’t need grunt in our repo, it is really very exotic in our time

**evenstensberg:** we could ask them to join the webpack org

**evenstensberg:** this way we can oversee the development and be better at communicating
 * 👍 @snitin315

**alexander.akait:** About webpack-bundle-analyzer, we need to apply our defaults - eslint, prettier and etc here too, someone should write to contributors and ask them that now it is required as a part of all repos

**evenstensberg:** makes more sense to incorporate the repos into webpack
 * 👍 @snitin315

**evenstensberg:** this way we have alignment

**snitin315:** I think we can also raise PR in bundle-analyzer and ask them to review/merge

**alexander.akait:** Someone will do it? I will support

**evenstensberg:** sure

**evenstensberg:** opening an issue
 * 👍 @alexander.akait

**evenstensberg:** https://github.com/webpack/tsc/issues/39

**evenstensberg:** I'll work on this
 * 👍 @snitin315

**evenstensberg:** next agenda item?

**snitin315:** Cool @evenstensberg , All yours

**snitin315:** Next up we have https://github.com/webpack/webpack/pull/19693

**evenstensberg:** lgtm

**evenstensberg:** this is the gsoc student work btw

**snitin315:** I think it makes sense to adopt the latest yml configuration, we should do it in all repos. it there any way we can keep it one place and reuse everywhere else?

**evenstensberg:** either you need to create a automation repo that has a gh access token

**evenstensberg:** or manually

**alexander.akait:** I have a couple questions here - I see we have two templates for bugs and features, will be great to add other, sometimes it is useful, and know we have discussions, but some questions or discussions can be useful as a part of issues, also we need improve our PR template and use the same templates everywhere in webpack repos

**evenstensberg:** to be more specific, you want a "question" template too alex?

**snitin315:** I'll work on it, will see if we can use AI for writing the script & creating the PRs

**evenstensberg:** @snitin315 +1, you got core access to you can finish this yourself
 * 👍 @snitin315

**alexander.akait:** About the same configurations and templates - I have idea to implement eslint rule and keep this template there, why? It will catch any changes which need to be updates, each our repo have eslint-config-webpack

**alexander.akait:** So I think it is the best place for this

**alexander.akait:** Yeah, it is something like question/other
 * ⭐ @evenstensberg, @wunderacle, @snitin315

**snitin315:** Sounds good to me

**evenstensberg:** https://github.com/webpack/tsc/issues/40

**snitin315:** let's move on to the next item:

https://github.com/webpack/webpack.js.org/issues/7626

**snitin315:** I'll work on this document, will raise a PR before next meeting.

**evenstensberg:** I havent worked on this, @wunderacle has done some good work with Aviv here, so I think he should do this. Have spoken to Claudio about this and he is writing onboarding notes
 * 👍 @wunderacle

**evenstensberg:** Co-ordinate with Claudio nitin

**evenstensberg:** aaah wait

**snitin315:** Cool, I'll connect with @wunderacle
 * ❤️ @wunderacle

**evenstensberg:** wrong issue

**alexander.akait:** I will write an issue with steps after finish eslint migrations, I want to do this for one repo and catch all problems, we can start with minimizes they are popular and using everyone

**evenstensberg:** the migration work is me + alex

**evenstensberg:** i meant that we have an issue about onboarding new collaborators

**snitin315:** that would implementation, we need a document first

**evenstensberg:** @snitin315 work with alex on this one

**snitin315:** Got it

**evenstensberg:** (https://github.com/webpack/tsc/issues/41)

**wunderacle:** Nice

**evenstensberg:** Just to be clear, sorry for the confusion
 * 👍 @snitin315

**evenstensberg:** Onboarding new collaborators/core: @snitin315  + @wunderacle 
Docs transition: @snitin315 + @alexander.akait

**snitin315:** Yes, that sound good to me

**snitin315:** I think all the agenda items are done, is there anything else someone wants to discuss?

**evenstensberg:** @wunderacle as you progress with the core onboarding documentation we will give u github privelleges

**evenstensberg:** i think thats it

**snitin315:** cool

**snitin315:** Thanks everyone for joining ⭐

**evenstensberg:** Pleasure ❤️

**alexander.akait:** Thanks everyone ⭐️

**snitin315:** bye 👋

**wunderacle:** Noice!

**wunderacle:** Bye y'all!
