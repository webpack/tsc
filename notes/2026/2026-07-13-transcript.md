# 07/13/2026 Webpack TSC Meeting Transcript

**wunderacle:** 👀

**evenstensberg:** Hi everyone. Even here! I will be todays moderator for the monthly tsc meeting that starts in about 15 minutes. To avoid a long meeting we will try to answer quickly so that we can move through the entire issue list we have.
 * 👍 @avivkeller, @alexander.akait, @bjohansebas

**evenstensberg:** 👋🏾 react with thumbs up if you are ready. we're starting in 2 minutes.
 * 👍 @avivkeller, @bjohansebas

**avivkeller:** ( ping <@&1180621696999358474> )

**wunderacle:** Im having strong headaches and almost vomiting, might be late

**evenstensberg:** ok

**evenstensberg:** @alexander.akait hop on

**alexander.akait:** I am here

**evenstensberg:** great

**evenstensberg:** welcome!

**evenstensberg:** first issue for today is webpack's social media

**evenstensberg:** https://github.com/webpack/tsc/issues/129

**avivkeller:** I added it to the agenda since we should put that in the 1Password

**avivkeller:** Then we can manage access to it via 1P

**alexander.akait:** I am fine with it

**alexander.akait:** Agree about using 1password

**evenstensberg:** I'm fine with it too, but we dont have a lot of sm accounts

**avivkeller:** https://webpack.1password.com/

**evenstensberg:** we got twitter, github, medium and thats about it. At the moment we need to contact twitter to get some ownership changes to the email associated with our twitter account
 * 👍 @alexander.akait, @bjohansebas

**avivkeller:** Our accounts should probably have their email set as `webpack-tsc@lists.openjsf.org`

**evenstensberg:** agreed. let me comment on the issue

**alexander.akait:** Agree too

**bjohansebas:** But if you want to give me access as well, I should be there too, right?

**avivkeller:** hmmm

**avivkeller:** I don't think you need the email to access accounts associated with it

**evenstensberg:** React with thumbs up if you are ok with @bjohansebas access to our social media **as well** as having all our passwords managed externally through 1pwd
 * 👍 @evenstensberg, @avivkeller, @alexander.akait

**evenstensberg:** consensus, great

**evenstensberg:** lets move on

**evenstensberg:** https://github.com/webpack/tsc/issues/99

**evenstensberg:** I think we need to reach out to the foundation to get an updated answer for this. the issue is that the foundation needs to enable copilot for us, right?

**alexander.akait:** It is enabled by default but limits are too low, so you can open an any pr and see the message

**alexander.akait:** Copilot was unable to review this pull request because the user who requested the review has reached their quota limit.

**avivkeller:** i have no preference on the matter, however, if this costs money, -1, since we don't _really_ need it.

**evenstensberg:** Ok, so lets ask the foundation for:

1) to update quota
2) ask if there's a cost for webpack on this.
 * 👀 @avivkeller

**evenstensberg:** copilot is very handy if youre reviewing alone

**alexander.akait:** To be honestly I like how Claude and copilot work together, but if it will cost a lot of money I am -1 too

**avivkeller:** FWIW OpenJS has a partnership with Cursor, if we want cursor reviews instead, which are free w/ the partnership

**alexander.akait:** I am fine with it too, extra review is good

**evenstensberg:** ok so to summarize:

1) We ask foundation for pricing and quota
2) we ask foundation to enable cursor

**avivkeller:** Well for Node.js, having both Cursor _and_ Copilot is inefficient, since they often contradict each other in the reviews
 * 👍 @alexander.akait

**avivkeller:** I think we ask for Copilot, and if it's expensive we move to Cursor
 * 👍 @alexander.akait

**evenstensberg:** sounds good
 * 👍 @avivkeller, @alexander.akait, @bjohansebas

**evenstensberg:** I've commented on the issue. React with thumbs if you agree to ask the foundation for quota increasing and cursor enabling
 * 👍 @evenstensberg, @avivkeller, @bjohansebas

**evenstensberg:** react on the last message please

**evenstensberg:** smooth!

**evenstensberg:** next up

**evenstensberg:** https://github.com/webpack/tsc/issues/87

**evenstensberg:** This issue is about publication which I think alex has the best input on. I'm pretty happy with changesets and OCID

**avivkeller:** IMO we should OIDC -> Staging, Staging -> 2FA -> Release

**evenstensberg:** Hmmm

**evenstensberg:** Maybe we should try this out in a sample repo before we implement it org wide?
 * 👍 @avivkeller

**bjohansebas:** Hmm, but that wouldn't let me publish dev-server. Although I guess having that level of access would be useful too

**avivkeller:** we would, in theory, grant you that access if needed

**evenstensberg:** Whats the change for us with this issue? Because it seems it is similar to how we do it now with the exception being that we stage our releases

**avivkeller:** We don't use 2FA currently, I don't think

**alexander.akait:** We already use oidc in most of repos, only old loaders and some plugins were not migrated

**evenstensberg:** We have 2FA requirement to be in the org so we kinda have

**bjohansebas:** Also, does anyone know how Changesets behaves with the staging workflow?

**avivkeller:** Right now, a compromised github token, for instance, would allow an attacker to push a commit -> create a release -> publish.

This requires a _seperate 2FA notification_ before release

**evenstensberg:** Thats not good

**evenstensberg:** From experience you many times create tokens without remembering to delete them

**alexander.akait:** But we don’t use GitHub token in webpack and many other repos

**evenstensberg:** @alexander.akait i believe people with org access can allow tokens to be used in the org
 * 👍 @avivkeller

**bjohansebas:** By the way, npm tokens are no longer long-lived. They only last a few hours now

**avivkeller:** Say I create a `public_repo` token, that token has write access to all my repos, including `webpack/webpack`

**alexander.akait:** But npm will not allow to make a release, yes you can send and merge bad commit, but not release it

**avivkeller:** WDYM? My token is used to create a new webpack release, which triggers the publish workflow?

**avivkeller:** If we enforced 2FA staging, that release would require a 2FA code to go from staging -> publish

**alexander.akait:** We don’t use tokens to make releases, we use trusted publishers

**bjohansebas:** But Changesets won't publish anything until you merge the release PR, which either requires an approval or, if you're an admin, you can bypass the workflow

**bjohansebas:** @avivkeller, it's the same approach we used for dev-server

**avivkeller:** Same difference, my token pushes a commit, changesets creates a pr, i approve the PR, a release is created, webpack is published

**avivkeller:** The point is we don't want a compromised GitHub account to compromise the npm publishing

**avivkeller:** 2FA prevents that

**alexander.akait:** 2FA makes the release process harder, extra actions and still a lot of vectors to attack

**evenstensberg:** I propose we try this out on a seperate repo, and if it works we can discuss implementing this org wide. Alex is concerned about development speed. Right now we have good progress on releases
 * 👍 @avivkeller, @alexander.akait, @bjohansebas

**evenstensberg:** React thumbs up if you agree
 * 👍 @evenstensberg, @avivkeller, @bjohansebas

**evenstensberg:** I ask for thumbs up on a seperate comment because our governance states we need consensus and explicit consens. to react to those messages too

**evenstensberg:** next

**evenstensberg:** https://github.com/webpack/tsc/issues/64

**avivkeller:** I recovered the Threadless account
 * ❤️ @evenstensberg, @alexander.akait, @bjohansebas

**alexander.akait:** What we should do the next?

**evenstensberg:** @avivkeller in threadless is there some sort of stats panel that lets us see if items are bought?

**evenstensberg:** would be interesting to see if people still buy merch

**avivkeller:** I think we've made very few sales

**evenstensberg:** suspected thast

**evenstensberg:** that*

**evenstensberg:** we need new designs that doesnt suck

**avivkeller:** last two sales

**evenstensberg:** but... it is very expensive for us to create a new webshop with feedback from the foundation marketing team.

**avivkeller:** i made some in my free time

**avivkeller:** not sure how good they are, im not a designer

**evenstensberg:** tbf logo only looks bad

**evenstensberg:** we want some theme or similar

**evenstensberg:** but then we need a designer and set up an unique webshop with these designs, which is more constly than the value we get back

**evenstensberg:** costly*

**bjohansebas:** for example see https://shop.astro.build
 * 👀 @avivkeller

**evenstensberg:** @bjohansebas maybe you want to ask astro about this and get back to us with more information?

**bjohansebas:** Yep, I know some people there, so I can help with that too
 * 👍 @avivkeller

**evenstensberg:** great!

**wunderacle:** I'm here btw

**wunderacle:** What have I missed?

**evenstensberg:** action item: @bjohansebas will speak with the astro team to get more input if we can get the same for webpack but remain cheap. thumbs up if u agree
 * 👍 @evenstensberg, @wunderacle, @avivkeller, @alexander.akait

**evenstensberg:** Our next issue is: https://github.com/webpack/tsc/issues/54

**avivkeller:** 1. social media accounts are going in 1Password, @bjohansebas is being granted access to the Social Media 1P vault
2. We are going to test out 2FA publishing in a repo before deploying globally
3. I recovered Threadless, but it's useless without new designs.
 * 👍 @wunderacle

**evenstensberg:** I think this issue is important but right now the gsoc work superseeds it
 * 👍 @avivkeller

**avivkeller:** as a part of GSoC, we (mentors) will likely change a lot of documents and modernize them
 * 👍 @wunderacle

**avivkeller:** following that, we can establish a team

**evenstensberg:** +1
 * 👍 @wunderacle, @alexander.akait

**evenstensberg:** @avivkeller for outstanders what is the recap on type generation?

**bjohansebas:** We're still publishing a blog post for every release, and we also update the information in the repository with each release

**avivkeller:** Type Generation is almost complete, we are missing generation on one file (module)
 * 👍 @alexander.akait

**evenstensberg:** great, ive been following the gsoc work a bit, good progress and nice super work by both mentors and students

**avivkeller:** We need to rewrite some links (24 of them, i think), but after that, the new site will be complete
 * 👍🏾 @evenstensberg, @bjohansebas

**avivkeller:** My "ETA" is that the new site will be ready within the week, pending any changes that come up

**evenstensberg:** Its important that the work is complete by the summer and that people that actively maintain this has a good handover. even better if the students stay contributing to the project, which google also states is ideal

**alexander.akait:** Ideally will be focus on site after the new minor release of webpack, eta within 2 weeks

**evenstensberg:** action item: we will come back to this after gsoc. thumbs up if you agree
 * 👍 @evenstensberg, @avivkeller, @alexander.akait

**evenstensberg:** https://github.com/webpack/tsc/issues/48

**evenstensberg:** I have no input here, feel free to take the baton

**alexander.akait:** Looks like this task is freeze

**evenstensberg:** quickly skimmed the issue

**bjohansebas:** What are the remaining tasks?

**evenstensberg:** looks like this can be delayed until webpack@6
 * 👍 @avivkeller

**evenstensberg:** after @6 we can ask the openjsf to maintain our previous versions
 * 👍 @avivkeller

**alexander.akait:** I don’t know😀

**evenstensberg:** https://github.com/webpack/tsc/issues/48#issuecomment-3267711967

**evenstensberg:** action item: consider after we've published v6x
 * 👍 @wunderacle, @avivkeller, @bjohansebas

**evenstensberg:** thumbs up if you agree
 * 👍 @evenstensberg, @wunderacle, @avivkeller, @alexander.akait, @bjohansebas

**evenstensberg:** > https://github.com/webpack/tsc/issues/121

**avivkeller:** I think maintenance would be easier if `examples` had it's own repo

**avivkeller:** Then we could have more complex examples and have them follow different lint rules, etc

**alexander.akait:** I don’t like it, I often change and add examples, especially with new api and features, extra repos - extra PRs review time

**bjohansebas:** I think it's better to keep the examples in the webpack repository

**avivkeller:** Sure! If you think it's best

**alexander.akait:** What we really need to do here is migrate them to ecma modules

**alexander.akait:** Configurations, maybe provide new API like import defer and etc

**avivkeller:** I think that should be a goal for webpack 6

**evenstensberg:** ok great

**evenstensberg:** so

**avivkeller:** When we move everything to ECMAScript modules, we do the examples

**evenstensberg:** alex/aviv can you create a new issue updating the examples to ecma

**avivkeller:** I don't think we need a seperate issue
 * 👍 @wunderacle

**avivkeller:** it's a known goal of webpack to move to ECMAScript modules

**alexander.akait:** Agree, let’s do in this issue

**avivkeller:** that's part of the umbrella of moving to ESM

**evenstensberg:** as long as there is an issue to migrate the examples to ecma im happy haha

**evenstensberg:** otherwise it might get forgotten

**alexander.akait:** I can ask Claude makes it right now😀

**avivkeller:** I'll make a general issue for the migration to ESM, unless we already have one, and put _all_ of these sub-tasks under it, sounds good?
 * 👍 @alexander.akait

**evenstensberg:** yep

**evenstensberg:** action items: webpack examples stay in the core repo, we will migrate examples to ecma when we are ready. thumbs up if you agree, down if you disagree
 * 👍 @evenstensberg, @avivkeller, @alexander.akait, @bjohansebas

**evenstensberg:** https://github.com/webpack/webpack/issues/19412

**evenstensberg:** I've extracted this logic to its own repo but for larger projects they fail to compile

**wunderacle:** lol

**wunderacle:** sad our sponsorship from Anthropic ends September

**evenstensberg:** @wunderacle we can ask for extention

**evenstensberg:** ill open an issue

**alexander.akait:** Honestly - we already ready to do it, maybe even all test helpers and etc things can moved to, we still use jest (in future will not) so we can transpile then to old NodeJS

**alexander.akait:** Maybe we can ask them to provide more time😀

**avivkeller:** I saw that they renewed the problem for another 6 months

**avivkeller:** So I say that In September we ask for a re-up
 * 👍🏾 @evenstensberg, @wunderacle, @alexander.akait

**evenstensberg:** im speaking to lydia because they keep blocking some of our core members due geography

**bjohansebas:** Yep, I applied again, but I still haven't heard back. 🙁

**avivkeller:** Same

**alexander.akait:** What was the answer?

**alexander.akait:** We should unblock them

**evenstensberg:** havent answered. sent a new message now
 * ❤️ @alexander.akait

**evenstensberg:** anyways we drifted of topic a bit haha

**evenstensberg:** about the new parsing option, is there any progress on loc ranges? if not the issue can stay open

**alexander.akait:** No options, maybe we can rewrite our code to avoid using locations and use start and end to calculate first/second and etc

**wunderacle:** ty!

**avivkeller:** correct me if i'm wrong, but using locations requires a second pass of the AST, so rewriting our code would be faster, right?

**wunderacle:** yea!

**wunderacle:** We need to re-apply or?

**evenstensberg:** with the new parsing experiment we need to parse twice once to get source in swc then emulating ranges in js. If we can do better natively thats better
 * 👀 @wunderacle, @avivkeller

**evenstensberg:** correction: oxc

**alexander.akait:** To be goes fly I start to override acorn methods to make acorn faster and consume less memory, I am planning to send these fixes to acorn too master (not sure they accept them), but now we are faster acorn around 20-25 percents, and consume less memory, still working on it

**alexander.akait:** Can make locations as a part of this

**evenstensberg:** Thanks alex. Then i think we can close this issue and you'll follow up.
 * 👍 @avivkeller, @alexander.akait

**evenstensberg:** react with thumbs if you agree
 * 👍 @evenstensberg, @avivkeller, @bjohansebas

**evenstensberg:** consensus again sweet. Moving on

**evenstensberg:** https://github.com/webpack/webpack/pull/20972

**avivkeller:** The question I have for the TSC is:
Does our benchmarker need to self report changes

**avivkeller:** I don't think it does, I think our benchmarker should be a wrapper around CodSpeed's, and we rely on CodSpeed to report changes

**avivkeller:** we don't need to have a CLI that reports changes when we are sponsored by a service that does that for us

**wunderacle:** Can y'all summarize at the end issues I should give an eye?

**evenstensberg:** im already doing that claudio
 * ❤️ @wunderacle

**evenstensberg:** just look at the comments of each issue in the agenda

**alexander.akait:** My idea around benchmarks - write more them, parallelism them to make it faster and more stable, run them by cron and generate the page like we have for https://webpack.github.io/benchmark/

**alexander.akait:** Also in future I want to add unit benchmarks - for parser, generator and serializers to see real improvements

**avivkeller:** I think we should have our benchmarker itself just be a wrapper around a tool we don't maintain, so we don't incur any perf issues with the benchmarker itself. Then, we have a seperate tool to analyze that data, it doesn't need to be in the benchmarker itself

**avivkeller:** We could also re-write the entire benchmarker from scratch and categorize it

**avivkeller:** e.g. `e2e` benchmarks, then benchmarks for each item

**alexander.akait:** I thought about it, but codspeed makes a lot of good stuff, so it is a plan b if we can’t stabilize them or will face with unresolved problems for us

**alexander.akait:** Making the own solution takes time

**avivkeller:** I think we should:
- Replace our benchmarker with CodSpeeds, which my PR does
- Then open an issue discussing potential benchmark improvements, such as a CLI comparator, more cases, etc

**wunderacle:** What agenda? :D

**avivkeller:** I don't think the comparator should be in the benchmark itself, like it is currently

**evenstensberg:** https://github.com/webpack/tsc/issues/139
 * 🫶 @wunderacle

**avivkeller:** we don't want the comparator to interfere with the benchmarks. The benchmarker should have miminal-to-no overhead, IMO

**alexander.akait:** But it doesn’t solve something, make benches more unstable and have more problems, I don’t see the real improvements there

**avivkeller:** I think it'll make benchmarks _more_ stable

**avivkeller:** more accurate, at least

**avivkeller:** Look at https://github.com/webpack/webpack/pull/20972#issuecomment-4471791630

**evenstensberg:** Another aspect is that we get less ownership of code which allows us to move faster

**alexander.akait:** Try it using fork and you will see

**evenstensberg:** I'm on the fence here because im not the one interacting the most with the benchmarks

**avivkeller:** I did, on my fork, I ran the benchmark 15 times and got similar outputs each time

**avivkeller:** "each time" being that they showed a major regression from core

**alexander.akait:** We literally have the same code before and it doesn’t work, also we lost memory checks in your pr

**avivkeller:** it was still very wobbly

**evenstensberg:** about the memory check

**evenstensberg:** adding it as a explicit script would be good instead of inline in the workflow

**avivkeller:** base/head on memory for one of the benchmarks

**avivkeller:** steadily growing over time makes more sense than spiking

**evenstensberg:** maybe we can do this discussion privately later+
 * 👀 @avivkeller, @bjohansebas
 * 👍 @wunderacle

**evenstensberg:** ?

**avivkeller:** @alexander.akait How about this:
1. I investigate writing new test cases that are stable with any benchmarker
2. I investigate replacing our benchmarker with CodSpeed's benchmarker, running on these stable test cases, and see if there's a regression
3. These stable cases create a baseline in which we can write comparisons and such around them?

**avivkeller:** Then everyone's happy?

**alexander.akait:** Let’s postpone benchmarks right now, currently we have a solution, not good, but it works and Claude recheck them to make sure it is due other hardware, and not a regressions, honestly I don’t see improvements here, so I am -1 right now on it, benchmarks and parallelization is a part of the next major release, not this
 * 👍 @evenstensberg, @avivkeller

**alexander.akait:** Anyway you can try it and to do it if you have time

**evenstensberg:** keep the pr aviv so we got it for reference
 * 👍 @avivkeller

**evenstensberg:** thumbs up if you agree that we can postphone this to later
 * 👍 @evenstensberg, @avivkeller, @alexander.akait, @bjohansebas

**avivkeller:** postpone to later + aviv investigates adding benchmarks that are more stable at their root
 * 👍 @evenstensberg, @avivkeller, @alexander.akait

**evenstensberg:** https://github.com/webpack/security-wg/issues/27

**bjohansebas:** I'm not sure if Ulises is here, but we can continue this discussion in the security group since we haven't received a response from the STA program yet

**evenstensberg:** ok @bjohansebas delegating this to you

**evenstensberg:** https://github.com/webpack/security-wg/issues/4

**avivkeller:** IBB is shutting down, so they can't give us a budget

**evenstensberg:** aw ok

**evenstensberg:** what about soverign tech fund?

**bjohansebas:** -1 on this for now. Node.js has stepped away from the security bounty program, and Express has as well
 * 👀 @avivkeller

**evenstensberg:** may i ask why?

**bjohansebas:** The only thing this would do now is generate even more AI-generated security reports if we have a security bounty program

**avivkeller:** My guess is that it's expensive

**avivkeller:** We could replace a "bounty" with some special webpack swag, which then also promotes our new merch store, once it exists

**evenstensberg:** @avivkeller If its externally sponsored that sounds good

**evenstensberg:** anyway we need external funding on the sec wg

**evenstensberg:** I'll try to investigate a bit here

**evenstensberg:** thumbs up if you agree
 * 👍 @evenstensberg, @avivkeller, @bjohansebas

**evenstensberg:** Ok so that's it. We've cleaned the issue list 🙌🏾

**evenstensberg:** Thanks for the meeting guys, and I wish you all a good month

**avivkeller:** oh i have one impromptu thing

**bjohansebas:** It's mostly about the reports. Express already gets quite a lot of them, even without a bounty program

**alexander.akait:** Recently I closed around 5 reports around what using webpack comments to change chuck location in filesystem is not a security problem, and all of them were ai generated

**avivkeller:** wdyt about a workflow that takes PRs to a repo, e.g. `webpack/social-media` and posts them on all socials

**avivkeller:** Node.js does this for Bluesky

**avivkeller:** then we don't need to log in to a bunch of socials each time we want to make a post

**bjohansebas:** Twitter doesn't have a free API anymore, so we can't do that. Bluesky does, but we don't have an account there yet
 * 👍 @avivkeller

**avivkeller:** 😖 ugh twitter why why

**evenstensberg:** musky cash machine youknow

**evenstensberg:** i gotta hop of now, thanks for the meeting guys
 * 👍 @avivkeller, @bjohansebas

**bjohansebas:** bye!
