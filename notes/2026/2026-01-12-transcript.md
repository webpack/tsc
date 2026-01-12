# 01/12/2026 Webpack TSC Meeting Transcript

**evenstensberg:** PSA TSC meeting in 50 minutes (1800)
 * 👍 @wunderacle, @ulisesgascon

**wunderacle:** Hey <@&1180621696999358474> we're about to start our scheduled meeting. This is the agenda for today https://github.com/webpack/tsc/issues/85

**wunderacle:** So far only me and @evenstensberg 👍 for the meeting. Who else is going to participate?

**snitin315:** I’m available
 * 👍 @evenstensberg, @wunderacle, @ulisesgascon, @bjohansebas

**alexander.akait:** I am avaliable too

**wunderacle:** Cool, let's give 5 more minutes before starting the meeting.
 * 👍 @snitin315, @alexander.akait

**wunderacle:** Alrighty, let's start the meeting. Do we have any guests today? So we can add them to the channel.

**wunderacle:** Welcome everyone for today's TSC meeting. Does anyone has any announcement to share?

**snitin315:** no annoucements from my side
 * 👍 @wunderacle, @alexander.akait

**wunderacle:** Gotcha.

**wunderacle:** Same here, @alexander.akait anything on your side?

**alexander.akait:** No, let's start
 * 👍 @wunderacle

**wunderacle:** Let's start with https://github.com/webpack/tsc/issues/77, do we have any progress there? Is grunt-webpack still the last one requiring update? If so, can we make it a "help wanted" + "good first issue" sort of work?

**alexander.akait:** Only two repos left - webpack itself, but I want to make it after https://github.com/webpack/webpack/pull/20271 and grunt-webpack
 * 👍 @wunderacle

**alexander.akait:** I still think we don't need grunt-webpack into webpack org, it is not very popular, no one from core knows what is code where and we don't use grunt at all

**evenstensberg:** @alexander.akait did you migrate cli too? It had some ci issues

**alexander.akait:** Yes, webpack-cli using npm right now

**evenstensberg:** ok great

**wunderacle:** Ah then we can archive grunt-webpack to be honest ;)

**wunderacle:** Anyone against archiving the repo (and package)?

**snitin315:** Is grunt-webpack still in use? Do we need it?

**evenstensberg:** before doing that we need to speak to the maintainer

**alexander.akait:** So someone should write https://github.com/danez and ask to move it into own repos

**wunderacle:** There was a publish 2 months ago

**wunderacle:** So we don't own this package? Or?

**evenstensberg:** Yes he is currently working on it

**wunderacle:** If it is actively being used then we should archive it...

**alexander.akait:** I am fine that we have a speicial webpack module for grunt, but I think we really don't need it inside our org
 * 👍 @wunderacle

**wunderacle:** I'm neutral on keeping it on the org then

**evenstensberg:** Tbh I think it should stay in the org, because then the developers and users know it is usable

**evenstensberg:** outsourcing it means less trust

**alexander.akait:** Lately I've been trying to reduce the number of packages and move a lot to core/uion, as a large number of packages takes up a lot of time to maintain.

**evenstensberg:** it doesnt cost us anything to keep it within webpack

**alexander.akait:** If something will be broken inside grunt-webpack, core developers don't have time on it

**alexander.akait:** that is why we should not take response for this

**evenstensberg:** Danez is maintaining it Ive spoken to him

**evenstensberg:** so no need for core developers to be involved

**alexander.akait:** We can't rely on only one person, if Danez will be unavaliable (sometimes it happens) we can do nothing here and spend time on it instead core roadmap is not good

**evenstensberg:** Maybe find another maintainer that is interested in co-authoring?

**evenstensberg:** In case Danez leaves the project we will just archive the repo

**alexander.akait:** It can be done in any other repo instead core, even more Danez can invite us to own repo if he wants

**evenstensberg:** What if we archive the repo if it doesnt keep getting maintained? Does that make sense?

**evenstensberg:** So whenever Danez stops maintaining it we will no longer work on it, but it will still reside in /webpack

**alexander.akait:** When we talk about switching to common configurations (eslint/prettier/cspell/etc) each repo takes the time, I don't want to spend time on it, really

**evenstensberg:** This configuration is standardized across the org, so Danez can just look at other repos for guidance

**snitin315:** Right now we should focus on webpack 6 road map, then we can work on standardizing tooling

**alexander.akait:** And lately I've been trying to reduce unnecessary repositories, I really don't see any compelling reason for this to be in the organization, it's not popular now, it requires knowledge of the code (nobody knows), it takes time to update

**evenstensberg:** Let me get in touch with Danez first to hear what he has to say.

- If he wants the project to be within the org
- If he needs another maintainer
- If he is ok with us archiving the repo if something happens
- If he will implement configurations that we update

**alexander.akait:** Why? What is the real reason to keep it in org? This package can be in Danez repos and can be maintenanced there

**alexander.akait:** For example we don't have gulp-webpack inside org, but it is almost the same tool

**evenstensberg:** From a outside perspective if I'm using grunt with webpack it will be a sign of quality and it will also make it easier to trust on this dep

**evenstensberg:** Ideally gulp webpack should also be in our org imo

**alexander.akait:** Sorry, we don't do it for all other tools, if you looking for connection webpack with non popular or very young tools you should write own wrapper

**evenstensberg:** haha ok

**evenstensberg:** thats my thoughts

**alexander.akait:** I don't want to have gulp/grunt/maven/etc build tools inside webpack org, it is out of scope
 * 👍🏾 @evenstensberg, @bjohansebas

**evenstensberg:** Let me reach out to Danez and we will come back to this next meeting, ok?

**alexander.akait:** Yes, but please ask to move this repository outside the organization first, we don't have the time for this package

**evenstensberg:** ok

**evenstensberg:** let move on
 * 👍 @snitin315, @alexander.akait

**wunderacle:** Can someone write the outcome/decision on said isue?

**wunderacle:** :)

**wunderacle:** Probably @alexander.akait?

**wunderacle:** Should the next issue be https://github.com/webpack/tsc/issues/76?

**evenstensberg:** ive sent mail to danez about this
 * 👍 @alexander.akait

**evenstensberg:** got a rejected email, I'll need to find another way of reaching out to him
 * 👍 @wunderacle

**alexander.akait:** @evenstensberg pinged him on github inside the issue or open a new issue in grunt-webpack

**evenstensberg:** yea i saw

**evenstensberg:** we can move on now, got a lot of issues to cover in this meeting

**alexander.akait:** Anyway I left comment so we can move to the next one

**alexander.akait:** From core development:
- Finish CSS (90% done)
- Finish universal target (98% done)
- Typescript built-in support (WIP)
- HTML support
- ESM fixes and improvements (we have an issue, there are more implements than fixes)
- Compile webpack to ensure we can compile own code to node and web target (less nodejs internals and no buffer) + adding playground on site
- Adding support for deno and bun (deno already work, I will add ci tests, bun not tested)
- Lazy-barrel (look at rspack solution, already WIP)
- Union webpack-dev-middleware and webpack-hot-middleware
- Major releases for webpack-cli and webpack-dev-server
- Multithreading API
- Less TODOs in webpack code

**alexander.akait:** Does anyone want to add anything?

**snitin315:** Let me know if you need any help for cli and dev-server

**alexander.akait:** For CLI, alomost issues resolved, we just need to make refactor more - https://github.com/webpack/webpack-cli/issues/4619 and drop old Nodejs versions

**evenstensberg:** We need to create a document best case in docs page with our 2026 roadmap @alexander.akait

**snitin315:** By union  webpack-dev-middleware and webpack-hot-middleware do you mean a single new package? or a monorepo with all these packages

**alexander.akait:** @snitin315 I think we don't need monorepo here, webpack-hot-middleware it is overlay + server events, in dev server we already have overlay + websockets, so we need to implement server event client then move overlay and client logic to webpack-dev-middleware and use it inside dev-server
 * 👍 @wunderacle, @snitin315, @bjohansebas

**evenstensberg:** Could you and nitin go together this week optimally and create a markdown doc in the docs page that explains what we are working on in 2026? It gives people transparency and also we can use it to pitch sponsors

**evenstensberg:** ☝🏾 very important

**alexander.akait:** I don't add here our doc site, because there are a lot of questions, I propose to make it as a separate issue for the next year

**evenstensberg:** If you create a higher level issue that points to lower ones Nitin can write some doc based on it
 * 👍 @snitin315

**alexander.akait:** Yeah, let's focus on discussion here first, we can get all points from here after meeting and update the issue

**evenstensberg:** great. @snitin315 can you follow up on this? High priority
 * 👍 @snitin315

**snitin315:** Sure, I'll take this

**evenstensberg:** I'll circle back in start of feb so we can use this to boost productivity etc etc

**alexander.akait:** And also we still continue to close fixes/features, also in our experiments - adding multithreading API

**alexander.akait:** And resolve TODOs in webpack as much as possible

**evenstensberg:** Yes, all of this needs to be in the doc @snitin315
 * 👍 @snitin315

**alexander.akait:** Updated the original comment

**evenstensberg:** got a link for reference?

**alexander.akait:** I meant this
 * 👍🏾 @evenstensberg

**alexander.akait:** Something else?

**wunderacle:** We have more iems in the agenda, yes.

**snitin315:** lets move on
 * 👍 @alexander.akait

**wunderacle:** Who's writing the ropadmap on the issue?

**evenstensberg:** higher level issue here https://github.com/webpack/tsc/issues/88

**wunderacle:** What about https://github.com/webpack/tsc/issues/76?

**evenstensberg:** Which will be populated from 
core -> sub issues in core
cli
devserver
etc

**wunderacle:** So https://github.com/webpack/tsc/issues/64

**alexander.akait:** I will create a list and pin opened issues

**wunderacle:** @evenstensberg I assume you're overseeing it?

**evenstensberg:** also add links in the tsc issue so we know
 * 👍 @alexander.akait

**evenstensberg:** yes, commented for reference

**alexander.akait:** Let's move to the next one

**snitin315:** yes, we need to move fast

**wunderacle:** This one right?
 * 👍🏾 @evenstensberg

**snitin315:** Yes

**wunderacle:** Apologies, juggling with incidents at work lol

**wunderacle:** As I asked, @evenstensberg you're overseeing it, right? xD

**evenstensberg:** ye
 * 👍 @alexander.akait

**wunderacle:** Any update? Or just what you shared on <#1371080839341019237> ?

**evenstensberg:** no update awaiting designer response

**wunderacle:** Designer would be Kylie or?

**evenstensberg:** kylie is my contact, she speaks to the designer based on my input
 * 👍 @wunderacle

**evenstensberg:** we started this process in december, already have progress fyi
 * 👍 @wunderacle

**wunderacle:** Right, can you keep us updated via issue comments? Hard to know what's going on xD

**evenstensberg:** aye already commented 🙂

**wunderacle:** Gotcha!

**wunderacle:** So now we have https://github.com/webpack/tsc/issues/63?

**evenstensberg:** fixed earlier today
 * 🎉 @avivkeller

**evenstensberg:** I have a util repo if anyone needs access

**wunderacle:** Right, do we need to manually remove them from the org?

**evenstensberg:** (using script from @avivkeller and added a script to remove people based on that)

**alexander.akait:** Let's add this script to webpack/.github maybe we will need it in future
 * 👍 @wunderacle

**evenstensberg:** its a nodejs project and the code is not that great. Prefer to have it on my personal user

**evenstensberg:** I'll give you access @alexander.akait
 * 👍 @alexander.akait

**alexander.akait:** In future for such tasks we should write scripts in our org repo so other developers can use it in future too, just note

**evenstensberg:** yea, optimally we should use shellscript and pipe outputs rather than my appraoch (writing to a txt file and the other script picks up via readfile)

**alexander.akait:** In anytime we can rewrite it, it is not hard
 * 788618026450419742 @evenstensberg

**alexander.akait:** So we can close this issue now?

**evenstensberg:** yep
 * 👍 @alexander.akait

**evenstensberg:** was waiting for claudio to get that dopamine boost 😄

**wunderacle:** lol

**evenstensberg:** there we go xD

**wunderacle:** https://github.com/webpack/tsc/issues/54

**wunderacle:** Do we need another WG?

**evenstensberg:** Ideally we should have a documentation wg, but the contributions are fragmented

**alexander.akait:** Where we have list of all wg?

**alexander.akait:** Which currenty we have

**alexander.akait:** Any docs?

**evenstensberg:** https://github.com/webpack/governance/blob/main/WORKING_GROUPS.md#current-working-groups

**evenstensberg:** We need to update it, on my todo
 * 👍 @ulisesgascon, @alexander.akait

**evenstensberg:** ATM:

- Security wg
- Perf wg
- Core wg

**alexander.akait:** For me documentation and media groups can be union into one, we don't have a lot of contributors so it is fine to have the only one

**avivkeller:** Can y’all make the security triage team security managers for the organization, so we can check out reports?

**avivkeller:** And design

**evenstensberg:** design is archived
 * 👍 @avivkeller

**evenstensberg:** as per this meeting

**wunderacle:** What even is media group?

**evenstensberg:** @alexander.akait yes agree, thats why the title is doc/media

**evenstensberg:** media as in blog posts etc

**evenstensberg:** I've sent out some feelers (ty for the grammar aviv :D) in our discord but many say "oh ye lets do this" and they go afk
 * 😂 @wunderacle, @avivkeller, @bjohansebas

**alexander.akait:** For me fine with: core/security/perf/documentation wg

**alexander.akait:** maybe perf can be union with core...

**alexander.akait:** because most of perf improvements inside webpack itself/dev server/cli/loaders and plugins mostly done by core developers

**evenstensberg:** perf work is fluid across plugins/loaders etc

**wunderacle:** Do we really need a media wg? O.o

**alexander.akait:** without core developers it is still impossible to do

**evenstensberg:** I think so. With media as in communication it is a good surface for us to boost engagement and information sharing

**alexander.akait:** I want to make wg as less as possible, a lot of issues/repos/etc take more times than helps

**wunderacle:** I mean it doesn't really need a WG

**avivkeller:** Wouldn’t the media team be identical to marketing for nodejs, like, it’s not a working group, just a group of Kylie and Robin?

**evenstensberg:** no thats why a union as alex says is good

**wunderacle:** It's not because some people are working on X that equals to needing a WG

**wunderacle:** WG is something that has lots of bureaucracy, see the charter

**wunderacle:** The least WGs we have the better it is actually
 * 👍 @alexander.akait

**evenstensberg:** yep, imo having a media wg will include blogs and documentation work. Thats the common ground

**evenstensberg:** we were very lucky earlier in webpack with a lot of people working on docs

**alexander.akait:** So let's union media and documentation, also let's union perf and core, and we will have three - core/security/documentation, that is enough for us
 * 👍 @evenstensberg, @avivkeller, @bjohansebas

**evenstensberg:** I'll delegate the perf wg for @avivkeller to mitiage, is that ok?

**alexander.akait:** I am fine with it, @avivkeller will you take care about it?

**avivkeller:** Yea, but I’m not sure what you want me to do, isn’t the perf team being disbanded and merged with core?

**evenstensberg:** aye

**alexander.akait:** All developers in the perf team will be in the core team now

**alexander.akait:** Also we need to union repos (move all issues in core-wg repo)

**avivkeller:** Ahh

**avivkeller:** Yes I’ll handle that
 * 👍 @evenstensberg, @snitin315, @alexander.akait, @bjohansebas

**alexander.akait:** I updated issue and @evenstensberg updated too, so we can move on
 * 👍 @snitin315

**evenstensberg:** @wunderacle

**wunderacle:** Alrighty, so have we decided in... ?

**wunderacle:** Keeping as it is?

**evenstensberg:** aviv will work on migrating perf wg to be included in core wg

**wunderacle:** Can someone comment what was the outcome for some of our WGs? What got merged?

**evenstensberg:** yes already done

**wunderacle:** What about the documentation/media one?

**evenstensberg:** > Action needed: Create a documentation wg that will cover docs page and also communication work as in writing blog posts, reaching out to people to promote webpack etc

**evenstensberg:** I will try to get a team together

**wunderacle:** @augustinmauroy would prob be interessted

**evenstensberg:** yep

**evenstensberg:** @augustinmauroy if you read this comment in the issue, we will start there 🙂

**wunderacle:** Now, what about https://github.com/webpack/tsc/issues/51, what do we want to do here?

**evenstensberg:** @alexander.akait has oc access and will need to to this issue

**alexander.akait:** @evenstensberg Note - we have https://github.com/orgs/webpack/teams/documentation-team, so maybe we can just rename and remove inactive
 * 👍 @wunderacle

**evenstensberg:** @alexander.akait yes many of the people in this team is gone now unfortunately
 * 😭 @wunderacle

**evenstensberg:** when i removed inactive people from the org there were many people working on early docs that were on the list
 * 👍 @alexander.akait

**alexander.akait:** I have the only one question - how we should implement this? Does someone looking for how other implemented this?

**evenstensberg:** aviv got a link

**evenstensberg:** and probably has guidance

**alexander.akait:** Will be great to see a link 😃

**evenstensberg:** Its in the issue

**evenstensberg:** coordinate with aviv

**alexander.akait:** I see, pinned to resolve soon

**evenstensberg:** ok

**alexander.akait:** What a channel we will use to post it?

**evenstensberg:** <#1435754997064142930>
 * ❤️ @alexander.akait

**alexander.akait:** Let's move to the next item

**wunderacle:** Okye!

**wunderacle:** So https://github.com/webpack/tsc/issues/50

**alexander.akait:** Resolved above

**evenstensberg:** ive commented, pushed dep notice to the github repo

**alexander.akait:** perf is union with core

**wunderacle:** Ah true, Aviv commented, cool

**wunderacle:** About https://github.com/webpack/tsc/issues/49, do we want to follow whatever OpenJS is planning to do?

**evenstensberg:** Lets create our own document that bans people from soloely relying on AI

**evenstensberg:** its very frustrating to use time and people dont use their brain to solve the issue

**evenstensberg:** sometimes its ok, but if 100% of the conversation with the other party is AI it should violate our policy

**alexander.akait:** Yeah, we have a lot of them inside webpack(

**alexander.akait:** Many of them can be closed, they are AI generated, no tests, no undesrsting the problem, no good response

**snitin315:** Yeah, AI should be used to solve issues fast but should not rely 100% on AI output
 * 👍 @wunderacle

**evenstensberg:** Someone here using ai a lot that want to shape the ai policy doc? If not we will add it to our backlog for next meeting

**evenstensberg:** also fyi, this document should be added to our CI checks like a CLA where the user needs to sign the document

**snitin315:** I am using a lot of AI recently I can write the policy
 * ❤️ @evenstensberg, @wunderacle, @alexander.akait

**evenstensberg:** super!

**alexander.akait:** Great, let's go to the next item

**evenstensberg:** @wunderacle

**wunderacle:** Apologies, as I said, I'm in the mid of a work incident
 * 👍 @alexander.akait

**wunderacle:** Will you create a task? Do we want to use any existing doc as reference?

**evenstensberg:** yes already done and nitin is assigned
 * 👍 @wunderacle

**wunderacle:** something inside me tells me you'll also use AI to proofread the policy hahaha
 * 😂 @snitin315
 * 1437930547136692365 @evenstensberg

**wunderacle:** https://github.com/webpack/tsc/issues/48

**wunderacle:** So this one is a bit tricky, I'm waiting for Joe Eames to provide us a document

**wunderacle:** Of what we need to do in order to adopt the ESP

**evenstensberg:** okay, I think we can combine this with the codemod issue

**wunderacle:** He also mentioned he would pay us for making such changes
 * 👍 @alexander.akait

**evenstensberg:** codemod for migration and herodevs for maintainance

**wunderacle:** Plus, 10% of revenue of the ESP goes straight to Webpack

**evenstensberg:** daym

**wunderacle:** I think they should be separate imo

**evenstensberg:** ok ok

**wunderacle:** I would also probably believe Codemod folks could give us a % of their marketing gains

**wunderacle:** They are literally profitting from direct links.

**wunderacle:** Btw, @avivkeller for FYI, I'm also going to propose that on Node
 * 👍 @avivkeller

**wunderacle:** I know a lot of the work there is volunteering by @augustinmauroy and Jacob Smith, and it annoys me the fact they're absolutely getting free marketing.

**wunderacle:** I recall OpenJS was going to do a partnership with Codemod...

**wunderacle:** Hmmm... https://openjsf.org/blog/codemod-openjs-foundation-partner

**evenstensberg:** okay, so for this issue claudio will coordinate with openjsf/externals

**wunderacle:** If they are a partner then I doubt we can individually request funds without asking Robin.

**evenstensberg:** lets move to mintify (next issue) and we can take the codemod stuff in issue

**wunderacle:** https://github.com/webpack/tsc/issues/32

**snitin315:** I wanted to start adding docs to mintlify repo, should I just start creating PR?

**snitin315:** We can create the landing pages later once we have finalised new designs but the docs content remain same mostly

**wunderacle:** We need to do mintlify init

**wunderacle:** Also @augustinmauroy wanted to take care of the designs?

**wunderacle:** I have no idea what's their availability

**alexander.akait:** @snitin315 Regarding to content we really should think how automate generation content from webpack schema

**alexander.akait:** Adding new options takes extra time

**wunderacle:** Would be funny if we used nodejs/doc-kit here instead of mintlify lol but that tooling is far from being able to be fully generic

**snitin315:** Yes, I will look into it how to auto generate the config options docs from schema

**snitin315:** Not sure about the API and hooks usage docs

**wunderacle:** But I think the mintlify instance is both the main page + download + actual api docs

**avivkeller:** I can fast track that effort, but it would still take a while

**alexander.akait:** @snitin315 We can update our description to be align with docs site, also we can add more properties to our schema and plus we can update typescript description, typescript has API to get them

**alexander.akait:** So many we can take a lot of things from schema and typescript jsdocs

**alexander.akait:** So we will have less update for new releases

**snitin315:** Sure, I’ll look into it

**alexander.akait:** @snitin315 Yeah, feel free to ping me in the issue when you start a work here, we will think about it together

**snitin315:** Sure
 * 👍 @alexander.akait

**evenstensberg:** FYI @snitin315 your tasking priority should be:

1. Roadmap issues
2. AI policy
3. Other

Roadmap is very valueable for us and we need it done by end of feb
 * 👍 @wunderacle, @snitin315, @alexander.akait

**snitin315:** Got it

**alexander.akait:** Let's move to the next one

**wunderacle:** https://github.com/webpack/tsc/issues/16

**evenstensberg:** I think we should drop hackathon for now and focus on a summit/conference for bundlers
 * 👍 @wunderacle, @snitin315, @alexander.akait

**evenstensberg:** for both hackathon and summit we need sponsors

**evenstensberg:** better to channel resources into a community effort

**wunderacle:** Are we going to participate on any future conference?

**evenstensberg:** organize, yes

**evenstensberg:** even if virtual it has more value to the ecosystem

**alexander.akait:** I think we can close it now and open a new issue if we will have conference where we can participate

**evenstensberg:** +1

**wunderacle:** organize?

**wunderacle:** Hmm

**wunderacle:** Not sure about that...

**wunderacle:** I really wish we could do the hackathon, @avivkeller created some really cool issues.
 * 1351230024610746459 @avivkeller

**wunderacle:** Or we could just straight make a bug bounty for them'

**wunderacle:** instead of hackathons

**evenstensberg:** yes it would be cool but summit better
 * 👍 @wunderacle

**wunderacle:** I unfortunately gotta go :(

**wunderacle:** @evenstensberg can you moderate?

**evenstensberg:** we got 2 more issues

**evenstensberg:** yes

**wunderacle:** Summit is more meant for existing collaborators to meet

**evenstensberg:** cya around 🩵

**wunderacle:** and talk about future plans

**wunderacle:** that are complex and require in-person

**wunderacle:** I think we wanted to do the Bundler Collab Summit?

**evenstensberg:** yes

**evenstensberg:** thats what i meant haha

**wunderacle:** Okay, let's close the hackathon one, Ill open an issue on openjsf for the bundler collab summit discussion
 * 👍🏾 @evenstensberg

**wunderacle:** Seeya!

**evenstensberg:** Ok so next issue is https://github.com/webpack/webpack/issues/19412

**alexander.akait:** oxc is still not ready, nothing to do here right now

**evenstensberg:** ok

**evenstensberg:** moving along

**evenstensberg:** line range feature is blocker, right?

**avivkeller:** Yes

**evenstensberg:** Second to last issue: https://github.com/webpack/webpack.js.org/issues/7625

**evenstensberg:** This is mine, the repo is done and the link is here -> https://github.com/webpack/maintainer-onboarding

**evenstensberg:** Lastly @bjohansebas wanted us to discuss https://github.com/webpack/tsc/issues/86

**evenstensberg:** any thoughts?

**alexander.akait:** @evenstensberg Let's remove `GitHub Sponsors` from list

**alexander.akait:** There are a lot of taxes problems here

**alexander.akait:** Regarding to https://github.com/webpack/tsc/issues/86, I am fine with it, let's dicussion more about it on the next meeting, I will look how to make it

**alexander.akait:** Also I think we need to add a link on https://github.com/webpack/maintainer-onboarding in our webpack/.github contributing guide

**evenstensberg:** yes I've tried to communicate interally that we use Open Collective because:

a) its transparent
b) it is a good process
c) we really dont wanna go through 2-3 cycles of donation sources because we're not interested in having tax problems

**evenstensberg:** the repo is private because it includes information that is meant as private
 * 👍 @alexander.akait

**alexander.akait:** Will we made it public in future?

**evenstensberg:** I need to read it to see if theres any information that needs to be redacted

**alexander.akait:** Good, will you take care about it?

**evenstensberg:** from my pov our maintainer onboarding process could be used for adversaries to find loopholes

**evenstensberg:** yes

**evenstensberg:** we gotta discuss https://github.com/webpack/tsc/issues/86

**evenstensberg:** before end of meeting 😄

**evenstensberg:** maybe @bjohansebas can explain a bit to us why this is needed?

**bjohansebas:** The organization is only to avoid a bus factor, in case @alexander.akait  or someone else leaves the project .

**alexander.akait:** We need it to manage npm access, in any day I can unavailable and any from core wg should have ability to make a release

**alexander.akait:** That is why we need to create npm organization

**bjohansebas:** I used @alexander.akait  as an example because I know you have access to all the packages; I’m not sure who else has full access to them.

**alexander.akait:** I asked about to move it to the next meeting because I want to see how to setup it better and assing all repos to this org

**evenstensberg:** To me it makes sense. Because it will involve a lot of configuration for our existing deps (npm packages)

**evenstensberg:** so maybe commenting our initial takes on the issue and lets come back to this in next meeting?
 * 👍🏾 @evenstensberg, @snitin315, @alexander.akait, @bjohansebas

**evenstensberg:** Alright! That concludes the tsc meeting. Thanks a lot guys for attending, it was a long one but we got a lot done 🤩 Have a lovely evening 💙
 * ❤️ @snitin315, @avivkeller, @alexander.akait

**snitin315:** Bye everyone

**alexander.akait:** Thanks to everyone and bye

**bjohansebas:** I can help you with that, in Express everything is managed through teams, and the teams would be the only ones with access to the package. We’d need to manually remove everyone who currently has access.

**bjohansebas:** bye!

**avivkeller:** I think, like I said prior, we should told a security + TSC meeting to discuss all of this

**alexander.akait:** @bjohansebas Yeah, I will ping your in the issue
