# 09/07/2026 Webpack TSC Meeting Transcript

**evenstensberg:** Hello and welcome to our tsc meeting. I will be moderating today. I'll give you a few minutes to get settled. React here if you are ready 🙂
 * 👍 @evenstensberg, @ulisesgascon, @natsu_xiao, @alexander.akait, @_hai_x

**evenstensberg:** Starting in 3 minutes
 * 👍 @alexander.akait

**evenstensberg:** First issue of the day is <https://github.com/webpack/tsc/issues/157> -> we're checking in how v6 work is going. @alexander.akait could you write a bit about this?

**alexander.akait:** Still young, we are continue work in version 5 on js own parser, multi threading and incremental builds (plus some stabilizations around css and html), after this we can take deeply at bottlenecks and provide a roadmap

**alexander.akait:** I will update it when we close roadmap for 2026

**evenstensberg:** okay great. Would be nice if you keep the ticket up to date or modify + notify in the thread if there's changes so we can better support the work
 * 👍 @alexander.akait

**alexander.akait:** Yeah, will do it

**evenstensberg:** This issue is related, and is about collecting user feedback on areas we can improve:

<https://github.com/webpack/tsc/issues/156>

Aviv is assigned, but not present today. I have a draft I made in webpack/admin that I will link privately

**evenstensberg:** @alexander.akait could you provide input on this when you have time?

**alexander.akait:** How do we went to collect them?

**alexander.akait:** Any ideas?

**evenstensberg:** linux foundation has a platform where we can create feedback forms

**evenstensberg:** I dont think postinstall scripts are the way to go

**evenstensberg:** maybe in start of core/cli and dev server readme?

**alexander.akait:** Theoretically we have discussions on GitHub and it is a good place for it, maybe we should just highlight it in readme and doc site

**alexander.akait:** So people we see the place where they provide ideas and feedback

**evenstensberg:** lfx has a good interface, we should use or try this out

**alexander.akait:** Most of developers don’t have lfx account, extra registration can be a problem, but all of our developers have GitHub
 * 👍 @natsu_xiao

**evenstensberg:** oh i dont think we need to register an account to submit a form, but I'll put it on next steps / issue status. After we've figured that out, we can privately choose gh discussions or lfx. Im open to anything. About when to submit these forms, maybe January next year? So we can use this information to make feature development decisions?

**evenstensberg:** (i.e we open up for people to submit on 1st of January next year)

**alexander.akait:** I think we should collect them always, not always January

**alexander.akait:** Some of them can be really good and may shipped very fast

**evenstensberg:** okay! noted

**evenstensberg:** next is the offsite. Thanks for the good time last thursday, it was really fun!
 * 👍 @ulisesgascon, @natsu_xiao, @alexander.akait, @_hai_x

**evenstensberg:** ---

**evenstensberg:** <https://github.com/webpack/tsc/issues/153>

**evenstensberg:** This might be premature, but has socket security helped more than dependabot?

**evenstensberg:** IMO -> socket is great for overview, but doesnt really work well on a continous basis submitting vuln patches

**alexander.akait:** And yes and no, I like their reports about obfuscation and dangerous packages and dangerous code, but for updating deps dependabot is enough, so I think we can keep both of them

**evenstensberg:** we can use dependabot in sync with socket?

**alexander.akait:** We are already doing it, dependabot send PRs with updates, socket generates reports about updated packages and show dangerous packages or code

**evenstensberg:** ok great. closing! And for future adoption, have a quick heads up in the tsc chat when you enable socket for a repo would be nice, but not required

**evenstensberg:** (or in <#1415441097122906192> )

**evenstensberg:** ---

**evenstensberg:** <https://github.com/webpack/tsc/issues/142> this issue is about getting new claude max, which is finished next week

**alexander.akait:** Yeah, we should resolve it asap, claude max is very great for us

**evenstensberg:** I've contacted Lydia and Antonhy from antrophic, but they havent replied. I've also sent a formal request through their website. I suggest that you all do that too after the meeting

**evenstensberg:** <https://claude.com/contact-sales/claude-for-oss>

**alexander.akait:** Did you use email?

**evenstensberg:** twitter

**alexander.akait:** Do you have emails? Will be great if all our command gets promo code

**evenstensberg:** to Lydia and Anthony? No, but maybe I could mention them in the tsc issue on github?

**alexander.akait:** Let’s try it too, we have time

**evenstensberg:** give me 2 sec
 * 👍 @alexander.akait

**evenstensberg:** done!
 * 🎉 @ulisesgascon, @natsu_xiao, @alexander.akait, @_hai_x

**evenstensberg:** Next: <https://github.com/webpack/tsc/issues/129>

**alexander.akait:** @bjohansebas are you here?

**evenstensberg:** I think we need to figure out a way in our governance functioning smoothly before we give any more access. Social media should be fine, but we need to take one step at a time

**alexander.akait:** I think tsc voting is enough to grand/remove

**evenstensberg:** yes, but this isnt anything critical, can discuss privately too

**evenstensberg:** when Sebastian is present
 * 👍 @alexander.akait

**evenstensberg:** <https://github.com/webpack/tsc/issues/87>

**evenstensberg:** For this, @alexander.akait is going to test OCID publishing in coffee loader when he has time, have you tried it out yet?

**alexander.akait:** No, this week was for housekeeping, deprecate old loaders and plugins, moving some popular things to core to reduce future work around setup publishing workflow

**evenstensberg:** I suggest you try it out, our related documentation on token issuing depends on this (<https://github.com/webpack/admin/pull/10>)

**alexander.akait:** Still on it, but soon will finish

**ulisesgascon:** If you need help I can help, we did a recent setup on some express libraries like multer (https://github.com/expressjs/multer/blob/main/.github/workflows/npm-publish.yml). The npm ux for this is not very obvious 😅
 * 👍 @evenstensberg, @alexander.akait, @_hai_x

**evenstensberg:** @alexander.akait put it on your tasking, its an important thing, even if it doesnt seem practical it's related to how we govern how people will issue tokens in the org
 * 👍 @alexander.akait

**alexander.akait:** In my todo
 * 🙌 @ulisesgascon
 * 👍 @evenstensberg

**evenstensberg:** <https://github.com/webpack/tsc/issues/64>

**evenstensberg:** this is stale, and to be honest I dont think we can do anything about our merch because it will cost a lot of money to put in place

**evenstensberg:** if there's designes that could be direclty put in threadless, then sure, but if not we shouldnt use any more time on it

**evenstensberg:** So lets check if we can import some designs that @bjohansebas showed us, and if we cant, then we close the issue. all in favour?

---
 * 👍 @alexander.akait

**evenstensberg:** <https://github.com/webpack/tsc/issues/54>

**alexander.akait:** Looks like we already created

**evenstensberg:** Yes, but we need to bootstrap it properly with people understanding their scope

**evenstensberg:** I'll put "wip" on this
 * 👍 @alexander.akait

**alexander.akait:** We can open issues in their repo
 * 👍 @evenstensberg

**evenstensberg:** Next issue: <https://github.com/webpack/webpack.js.org/pull/8252>

**evenstensberg:** there's some interest in translating our docs to arabic, which is ok with me, but it requires some effort w.r.t domains

**alexander.akait:** I think we should return to this after new site

**alexander.akait:** Maybe we can introduce switcher to languages and keep translation into our site and create duplication with other, but I prefer 1
 * 👍 @evenstensberg, @_hai_x

**alexander.akait:** More languages - more developers - more popular tool

**evenstensberg:** commented on it, there's a lot of maint job on landing it anyway
 * 👍 @alexander.akait

**evenstensberg:** Next issue: <https://github.com/webpack/governance/pull/18>

**evenstensberg:** WIP on new funding structure, so we can close this?

**alexander.akait:** Yes

**evenstensberg:** <https://github.com/webpack/security-wg/issues/27> -> This is a stale issue, but it seems very hard to get an external audit

**alexander.akait:** I am not sure how we should do it, technically we can ask Claude to make it

**ulisesgascon:** Yep... so far no response. But as an alternative the Andrew and the Alpha Omega team had being investing quite long time into https://github.com/alpha-omega-security/scrutineer.

**ulisesgascon:** The tool is good and there are quite few CNAs using it to scan and patch, we can try it if you want. Is using IA under the hood (we provide the tokens)
 * 👍 @evenstensberg, @natsu_xiao, @alexander.akait

**evenstensberg:** sure go for it!

**ulisesgascon:** It can be used with the subscriptions AFAIK

**ulisesgascon:** I can setup a VM for this probably after the collab summit and share the findings 🙂

**evenstensberg:** sounds good, keep @bjohansebas from the sec wg in the loop too
 * 💯 @ulisesgascon

**evenstensberg:** Next is <https://github.com/webpack/security-wg/issues/4>

**evenstensberg:** My opinion: We have a policy to only fund our most critical parts of webpack, but we've seen an increase of donations lately, which might make it that we can have a very small budget on security, if everyone agrees and that the core people agree to it
 * 👍 @ulisesgascon

**alexander.akait:** Agree

**evenstensberg:** Smooth. I'll put this as "awaiting private comms"

**ulisesgascon:** In Alpha Omega we are exploring a reward program for people that do the patch in state of people that find them (pilot idea) but no news just yet. We might ask for specific support from OpenJS but requires a bit of planning (what we need to pay, etc...) if we want to do specfici rewards is fine, but I will suggest to avoid making big announcements as we don't want to suffer the same as the bounty programs (burnout by low quality reports looking for rwards)

**evenstensberg:** yep, and there's more to this too. If we announce a bug bounty, it will be bott-ed pretty hard
 * 💯 @ulisesgascon

**evenstensberg:** seen this in other projects

**evenstensberg:** even if we dont have a bounty people have been "fake invited" to claim their bounty

**evenstensberg:** we'll discuss privately more about this in <#1410007575012970617> and from a management pov in <#1371080839341019237>
 * 👍 @ulisesgascon, @alexander.akait

**evenstensberg:** okay! so the agenda is done, and I'd like to have a few minutes of your time to nominate two new tsc members. 

- @_hai_x has provided a lot of value internally on core over the years and I think it would be natural to invite him and @natsu_xiao to the tsc. They both have worked very hard on webpack, and I've done the courtesy of vetting them to make sure they upheld our culture and standards (which they have!). I will submit two formal PRs for all tsc members to vote, because I'm not sure if we can +1 it with less than half the current tsc in this meeting.

Anyway, react +1 if you agree, and I'll submit a PR to add them, which will be the more **formal** vote.
 * 👍 @evenstensberg, @natsu_xiao, @alexander.akait

**evenstensberg:** Smooth! Thanks for your time today, and let's continue the good work. We've got a lot of traction in core, infra and in general all over the organization these days. 💞
 * 🙌 @ulisesgascon, @natsu_xiao, @alexander.akait, @_hai_x

**alexander.akait:** @evenstensberg will you update our docs with new members?

**evenstensberg:** yes, but wait for all people to approve it before merging, as its our formal vote
 * 👍 @natsu_xiao, @alexander.akait
