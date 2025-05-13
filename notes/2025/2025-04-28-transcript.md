# 04/28/2025 Webpack TSC Meeting Transcript

**evenstensberg:** [Redacted]

**evenstensberg:** So we will wait about 15-20mins. Grab a coffee meanwhile

**snitin315:** Sure

**snitin315:** What’s agenda today?

**alexander.akait:** I am here, but want to say - it can be unstable, so don’t lose me if I don’t answer immediately

**evenstensberg:** Introductory. So it’s about how these meetings will go, admin stuff and roadmap creation

- 👍 @snitin315, @alexander.akait

**evenstensberg:** It’s important for us that Claudio joins. He’s tasks are very much linked to how Webpack communicates with external orgs and also he’s good on meeting recording/repo sync with meeting invites et.al

**evenstensberg:** I'm creating a google docs atm

**evenstensberg:** You should have gotten an invite now

**snitin315:** Yup, got it

**evenstensberg:** @wunderacle you here?

**wunderacle:** 👋

**snitin315:** Heya 👋

**wunderacle:** Alrighty, we might want to integrate an agenda bot for our meeting agenda.

**wunderacle:** Node has a GitHub bot that does that, we can just fork it and repurpose for our own needs

- 👍 @snitin315, @alexander.akait

**evenstensberg:** @wunderacle your email?

**evenstensberg:** will inv u to the google docs

**wunderacle:** cwunder@gnome.org it is also listed on the webpack's readme xD

**evenstensberg:** faster for me to get your email here when i got ya 🙂

**wunderacle:** xD

**wunderacle:** Im teasing you :P

**evenstensberg:** https://tenor.com/view/husky-siberian-dog-cody-woof-gif-10159125698214328944

**evenstensberg:** We could create the agenda before the meeting but this is the first one

**evenstensberg:** so its better to get feedback from folks about your questions or stuff you wanna discuss

**wunderacle:** Noted

**evenstensberg:** next time we will do this before meeting

**evenstensberg:** fill your questions in the agenda numbered list

**snitin315:** Yeah, next time we will do it beforehand

**wunderacle:** The benefits from said bot is that it automates a bunch of things. Im talking with Michael Dawson from RedHat, he developed Node's ones which also handles OpenJS's meetings. https://github.com/nodejs/create-node-meeting-artifacts

**evenstensberg:** sec need to find my glasses

**evenstensberg:** great. put this link in the correct subject in the docs

**snitin315:** ESLint also hosts tsc meetings on discord and maintain notes in a public repo - https://github.com/eslint/tsc-meetings

**wunderacle:** This is cool https://github.com/eslint/tsc-meetings/blob/main/scripts/generate-transcript.js

**wunderacle:** Let's take notes of all of this on the initial Google doc

**snitin315:** https://eslint.org/docs/latest/contribute/governance#tsc-meetings

**evenstensberg:** @alexander.akait @snitin315 @wunderacle @thelarkinn react with thumbs if youre ready to start the meeting

- 👍 @wunderacle, @thelarkinn, @snitin315, @alexander.akait

**thelarkinn:** hiiii all

**thelarkinn:** Am here now

**snitin315:** Hi @thelarkinn

**evenstensberg:** Great! We've sent you a google docs invite Sean

**evenstensberg:** go there and put your name in

**snitin315:** Welcome 🙂 Long time no see

**evenstensberg:** Alex also needs to do this @alexander.akait

**thelarkinn:** Opening

**evenstensberg:** @alexander.akait put your name in

**evenstensberg:** FYI Sean, alex is on an unstable network so he might be delayed in responding

- 👍 @thelarkinn

**alexander.akait:** I am on phone, I will do it after meeting, is it ok?

**evenstensberg:** ok

**alexander.akait:** Typing on phone in Google docs is pain😀

**evenstensberg:** haha yes!

**evenstensberg:** ok bois

**evenstensberg:** lets start

- 👍 @alexander.akait

**evenstensberg:** @wunderacle you ok with taking notes?

- 👍 @wunderacle

**evenstensberg:** Also, if there's some parts of the convo that you think is not meant for the public, prefix your message or suffix with [PRIVATE] or something

**evenstensberg:** I.e:

[Private]: I think we should choose gsoc candidate number 69

- 👍 @snitin315, @alexander.akait

**evenstensberg:** Some meeting points are private by nature so in the meeting doc we will just say "this is a closed session" or something in the notes

- 👍 @snitin315, @alexander.akait

**snitin315:** Let's start with first agenda item "Changing meeting platform (public)"?

**evenstensberg:** aye

**evenstensberg:** Just waiting for Claudio to verify hes taking notes

- 👍 @snitin315

**wunderacle:** [Private] What's the name of the candidate?

**wunderacle:** Ah

**wunderacle:** that was an example xD

**evenstensberg:** yes 🙂

**evenstensberg:** @wunderacle can u take notes?

**wunderacle:** I already reacted to the original message.

**evenstensberg:** aaah ok

**evenstensberg:** lets go then

**alexander.akait:** Yeah, it will be great, so I will have time to prepare environment, I am fine with discord, just need a time to find a good vpn🙂

**evenstensberg:** #1 - Changing meeting platform

**evenstensberg:** In our governance documenation we have stated we have meetings through slack, but because sean has some problems we need to change this to discord

**evenstensberg:** i can find the right place to make this change

**alexander.akait:** Alternative places - slack or zoom, but I found discord is more intuitive as was said before

- 👍 @snitin315

**snitin315:** I'm fine with discord too. We can update the governance docs

**evenstensberg:** let me quickly find the right place the code for this is

- 👍 @alexander.akait

**evenstensberg:** https://github.com/webpack/governance/blob/main/README.md#tsc-meetings

**evenstensberg:** Someone want to do a pr?

**snitin315:** I think we should move this information to webpack.js.org as well.

**evenstensberg:** free gh clout 😄

**evenstensberg:** i think the gov documentation is linked to this repo on our main documentation page

**snitin315:** Yes, sure. I'll update.

**wunderacle:** FYI I also gotta drop soon, the meeting started way late, I need to leave home around 19:00 but gotta first clean some stuff.

**evenstensberg:** ok we need to finish at least the #2 stuff about meeting admin

**evenstensberg:** important we discuss this before you leave

**evenstensberg:** lets continue

**evenstensberg:** nitin creates pr

- 👍 @snitin315

**evenstensberg:** # Information of how meetings will be done (public)

**evenstensberg:** Ok so in the gov charter (?) we have stated meetings will be hosted on discord (new). It is text based and initially I thought tsc meetings would be once a month

- 👍 @alexander.akait

**evenstensberg:** that's correct? 1ce a month not 2 times a month

**wunderacle:** Once a month?

**wunderacle:** I think biweekly makes sense (once every two weeks) and if there is nothing on the agenda we can just cancel it

**snitin315:** I think it should be 2 times for at least initial 2-3 months, then we can reduce the cadence

- 👍 @wunderacle

**evenstensberg:** okay im good with that

**alexander.akait:** Also I think we need to choose our next topic, currently we have 4 places to focus:

1. esm - universe target is almost the same because it is about loading and worlds on any runtimes/platforms
2. Finish css support - mostly about pure mode and finish small fixes, already done around 70-80%
3. Html support out of box - I already implement fast and good parser/printer/trandromers for swc, so we just can copy paste, hopefully we don’t have export import and html so it should be not hard, just need a time
4. Strict types, I have finish it, but we still have around 100 todos types, we need to fix it, types really helps, especially if we want to say about future major update

- 👍 @wunderacle, @snitin315

**evenstensberg:** I'll copy this to next meeting @alexander.akait

- 👍 @wunderacle, @alexander.akait

**evenstensberg:** in 14 days

**evenstensberg:** this is an intro meeting

**evenstensberg:** technical stuff later

- 👍 @alexander.akait

**alexander.akait:** I am fine with it

**evenstensberg:** Ok great. so biweekly,

**evenstensberg:** i would like to add that in beforehand, the week before next meeting, we create agenda

- 👍 @snitin315

**evenstensberg:** the agenda is a list of stuff we have discussed

**evenstensberg:** @wunderacle I wonder if there's a tool for creating agendas, hopefully through google docs?

**evenstensberg:** also I was wondering if we could automate meeting invitations

**wunderacle:** I mentioned before there is

**snitin315:** ESlint has some tooling for agenda as well - https://github.com/eslint/tsc-meetings/issues/579

**evenstensberg:** yep, this kinda touches that later bullet point

**wunderacle:** But it will generate a GH issue; we can just copy it to a Google doc at the time of the meeting

**evenstensberg:** Ok great

**evenstensberg:** Put it in

**thelarkinn:** A link with a GitHub discussion to the gdoc meeting notes could be helpful for feedback

**evenstensberg:** +1 to that

**evenstensberg:** for externals that read the minutes

- 👍 @snitin315, @alexander.akait

**evenstensberg:** for each meeting

**evenstensberg:** I'm kinda filling in as we go on the google doc now @wunderacle

**evenstensberg:** so we can go through the most important ones

**evenstensberg:** lets jump to # 8

**wunderacle:** Noted, although I dont mind filling the Google doc later

**wunderacle:** Once Im back

**evenstensberg:** ok great, you can do that if you see stuff missing

**evenstensberg:** so ive seen node

**evenstensberg:** they have a repo with the minutes

**evenstensberg:** can we get that?

**evenstensberg:** we have a place to host these:

**evenstensberg:** https://github.com/webpack/tsc

**evenstensberg:** meeting folder

**evenstensberg:** so we just export the minutes from the google doc to markdown

**snitin315:** Noice!

**wunderacle:** Yup we can get that no biggie

**evenstensberg:** I dont mind automating this, but can be done manually

**wunderacle:** I can work on the scripts and workflows

**evenstensberg:** ok great. I'll take note

**wunderacle:** I just need admin access to the server so I can make the bot

**alexander.akait:** Yeah, sounds good too, everything about tsc is in one place

- 👍 @snitin315

**evenstensberg:** which server?

**snitin315:** I think claudio means the webpack discord server

**evenstensberg:** You mean privelges to make changes to workflows etc?

**evenstensberg:** ok ill fix this

**evenstensberg:** Noted in the docs, will fix after meeting

**evenstensberg:** ok so now we've covered meeting note generation

**evenstensberg:** @clu

**evenstensberg:** @wunderacle you have a lengthy reply on # 8

**evenstensberg:** Anything you want to discuss there?

**evenstensberg:** or is this something you can do yourself? Me, Alex or Sean will give you correct acess within the org if you need

**evenstensberg:** For now I'll do 1 on 1 with you (later) to implement the stuff Michael from NodeJS has for cpc meetings, ok?

**snitin315:** [Redacted]

**evenstensberg:** [Redacted]

- 👍 @wunderacle, @snitin315

**evenstensberg:** [Redacted]

**evenstensberg:** WG + roadmapping firstd

**evenstensberg:** first\*

- 👍 @wunderacle, @thelarkinn, @snitin315, @alexander.akait

**thelarkinn:** Do we have a really detailed guide for how this intern will execute incrementally on the ESM output?

**snitin315:** Sounds good.

**wunderacle:** Yup

**wunderacle:** Yup I can do it myself

- 👍🏾 @evenstensberg

**evenstensberg:** Awesome

**evenstensberg:** @wunderacle we've covered the most critical now, so just let us know when you gotta leave

- 👍 @wunderacle

**evenstensberg:** I'd like you to stay for the Working Group part if you have time though

**evenstensberg:** You know this stuff better than us haha

**alexander.akait:** Yeah, I have ideas, but need to discuss about it, let’s postpone it for next meetings

- 👍 @snitin315

**evenstensberg:** # 6 Working groups

**evenstensberg:** As far as I know, working groups are just a definition about teams that work on different areas of the org, like the CLI, different plugins and such

**evenstensberg:** the WG create a document in each repo that it belongs to, and it allows us to scope work to different parts of the org

**evenstensberg:** Claudio is more familar with this than I am, but in practise it will allow us to partition work done in the org better.

We can create local roadmaps for each WG (Working Group).

**snitin315:** I see node.js has https://github.com/nodejs/TSC/blob/main/WORKING_GROUPS.md, similarly we can have separate WG for CLI, webpack.js.org website, core webpack, devserver + dev-middleware, webpack-contrib

**evenstensberg:** yep!

**evenstensberg:** So in relation to the TSC, we can have goals on a higher level

**evenstensberg:** like "Bump new major of webpack-dev-server" and then we delegate the actual implementation to the working groups

**snitin315:** But we don't have a lot of contributors, I think right now only Alex & I are active

- 👍 @alexander.akait

**snitin315:** so we have to manage all repos. I think we can establish WG once we have more contributors.

**evenstensberg:** sec noting

**evenstensberg:** I'm thinking of ways we can keep the WG definition but more broadly

**evenstensberg:** like WG for infra

**evenstensberg:** or WG for core

**snitin315:** Sounds good. Also for releasing packages all TSC members should have npm access.

**evenstensberg:** TSC yep, but as we grow, the WG should only have npm access for the repos they manage

**snitin315:** yes, agree.

**evenstensberg:** @alexander.akait any input?

**alexander.akait:** Sounds good for me👍

**evenstensberg:** WG are roadmapping is kinda related so we can continue

**evenstensberg:** I think Claudio went afk so I'll take notes while we discuss

**evenstensberg:** # 7 Roadmapping

**evenstensberg:** Ok so this is a very important topic because a lot of the tsc work will be to roadmap

**snitin315:** For roadmap we have this board but i am not sure we are maintaing this actively https://github.com/orgs/webpack/projects/4

**alexander.akait:** We can do it on our meetings too, I am doing it, but not often, after minor releases mostly

**evenstensberg:** I see that this kanban is just for webpack/webpack

**evenstensberg:** Maybe we can have roadmaps org wide?

**evenstensberg:** like for all repos

**evenstensberg:** (that we think is important)

**evenstensberg:** it doesnt make sense to have dep bumps of some plugin in the roadmap, but you know what i mean

**snitin315:** For CLI we have -

- https://github.com/webpack/webpack-cli/issues/3768
- https://github.com/webpack/webpack-cli/issues/3747
- Improve create-webpack-app with latest templates using swc, etc.

**evenstensberg:** These are ticket

**evenstensberg:** tickets\*

**snitin315:** ESLint maintains a single board for all repos, see this -https://github.com/orgs/eslint/projects/3

**evenstensberg:** I was thinking more like eslint!

**evenstensberg:** @snitin315 you've worked with OKRs?

**snitin315:** Yes

**evenstensberg:** I think OKRs are a bit out of scope

**evenstensberg:** but github has milestones

**evenstensberg:** we can leverage that

**evenstensberg:** create an internal milestone board

**evenstensberg:** for all webpack repos

**evenstensberg:** (that we actively work on)

**snitin315:** Will have to check this milestones feature. I have not used it heavily.

**snitin315:** But we should definitely explore.

**evenstensberg:** We started with this on webpack-cli, but it got discontinued

**snitin315:** Ah!

**evenstensberg:** i know some projects use milestones for dev

**evenstensberg:** like for both versioning and quarters

**evenstensberg:** like: v6 pi 1

**evenstensberg:** where pi is month

**evenstensberg:** in this context we need to use webpack core to determine work on other repos, I dont know if that is what we want

**evenstensberg:** It will make work on other repos dependent on webpack, but its a nice thing to look into

**snitin315:** Hmm, got it. Can't we leverage GitHub projects instead of milestones?

**evenstensberg:** yea

**evenstensberg:** For now, we can set roadmapping to github projects, it makes sense

**thelarkinn:** Yup

**evenstensberg:** and then move to other techniques if we decide its not a way to go

**snitin315:** I think it should be fine for now. Once we get more contributors we can look into it.

- 👍🏾 @evenstensberg

**evenstensberg:** @alexander.akait if you have any input here let us know. This is going to impact the way you work

**evenstensberg:** Not only on core, but also for smaller repos

**evenstensberg:** I think this section of maintainance is very interesting because if we had more contributors this is where WG + Github projects would be amazing

**alexander.akait:** I am fine with everything, we already done it before, just stop it because I mostly was only one

**alexander.akait:** And to avoid losing time I stopped to do some things

**snitin315:** We also need to automate release notes generation as well, I think right now @alexander.akait writes them manually.

**evenstensberg:** noted

**thelarkinn:** I would love to see just releases become automatic also

**snitin315:** I can look into the automations.

- 👍🏾 @evenstensberg

**thelarkinn:** This would be a great GSOC task if we needed to take something else on

**evenstensberg:** Ideas phase of gsoc is over, students have already submitted their proposals and we are about to choose which one to mentor

**alexander.akait:** Automatic release and changelog generation already in my todo, just focus on perf tests right now, already initially implemented, just need to rewrite old benchmarks, it is the next step in my todo

- 👍 @evenstensberg, @snitin315

**evenstensberg:** Ok so to summarize:

1. We will look into github projects in a larger scale than currrent
2. Nitin + Alex will look into automated releases

- 👍 @snitin315, @alexander.akait

**evenstensberg:** I think for now, we will first need to create a larger WG

**evenstensberg:** like webpack/infra, webpack/core (which already is present)

**evenstensberg:** each of these WG have their own project boards

- 👍 @snitin315

**alexander.akait:** Maybe we don’t need to deeply split our tasks between repos, most of tasks can be done together, for example - env support, u think we main plugin should be implemented in webpack itself, but flags to enable it should be added in webpack-cli

**alexander.akait:** So one board for our tasks is good, the same for eslint, we need to migrate on 9 version, but we need to do it eslint-wepack repo, than update it in other repos

**evenstensberg:** ok ill note this

**evenstensberg:** then we have 1 board for all the main tasks

**snitin315:** Yeah, I can pick the ESLint upgrade.

- 👍 @alexander.akait

**evenstensberg:** great, I'll assign this work to you nitin

- 👍 @snitin315

**evenstensberg:** you got access?

**snitin315:** Yes, i think I do have access to the required repos.

**evenstensberg:** great

**evenstensberg:** we can move on

**evenstensberg:** [Redacted]

**evenstensberg:** Ok so meetings over. I just wanna summarize the actionable stuff we will to until next time:

1. Me and claudio will set up meeting infra
2. Nitin will send PR to update meeting platform
3. Nitin will look into automated releases
4. Claudio, Even, Alex, Nitin will add points (and doc) to discuss in next TSC meeting

- 👍 @snitin315, @alexander.akait

**evenstensberg:** The most important takeaway is that we need to add stuff to discuss next meeting

**evenstensberg:** I will create a google doc for next meeting agenda later

**evenstensberg:** + Will be in touch with y'all if you have any feedback

**snitin315:** sounds good!

**alexander.akait:** Yeah, thanks for everyone, I think we can have small discussions on slack or here for small tasks or where we need to update/change information

- ❤️ @evenstensberg

**evenstensberg:** ok thanks all!

**evenstensberg:** cya later

**snitin315:** byee folks!

**alexander.akait:** Bye⭐️

**thelarkinn:** Perfect thanks all!
