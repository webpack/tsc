# 08/10/2026 Webpack TSC Meeting Transcript

**avivkeller:** <@&1180621696999358474> Please 👍 this message to indicate attendance to the meeting (starting now)
 * 👍 @evenstensberg, @alexander.akait

**avivkeller:** https://github.com/webpack/tsc/issues/142

**avivkeller:** First item: Extending our Claude access

**avivkeller:** @evenstensberg reached out to Anthropic, and I to another AI company, so is there anything we need to do now in this meeting?

**evenstensberg:** No not really. Waiting for our contact at Anthropic to reply

**avivkeller:** Great! Next item: https://github.com/webpack/tsc/issues/129

**avivkeller:** I gave Sebastian access to Bluesky, I have a meeting with Sean to get the access to the remaining platforms after Render
 * 👍 @alexander.akait

**evenstensberg:** ok great, then its on track

**avivkeller:** Next item: https://github.com/webpack/tsc/issues/99

**avivkeller:** I think we can resolve that issue in favor of CodeRabbit / Claude, we really don't need more than one agent provider

**evenstensberg:** Cant extend quota

**evenstensberg:** in openai

**alexander.akait:** I agree, when we have many agents they are going in the loop of re reviews

**evenstensberg:** I havent seen coderabbit yet, but based on the teams feedback it is good

**avivkeller:** Okay, I've closed that issue, @evenstensberg can you leave a comment?

**evenstensberg:** we can use claude locally and coderabbit everywhere else? or something similar?

**alexander.akait:** Code rabbit is good for us as the second AI reviewer

**avivkeller:** That's what we do currently, yes (although, "everywhere" is right now a subset of our repos, I'm yet to enable it globally)
 * 👍 @evenstensberg

**avivkeller:** Next item: https://github.com/webpack/tsc/issues/87

**avivkeller:** We should trial staged publishing on some repositories, before moving to it globally

**evenstensberg:** yes, wasnt that what we were supposed to do?

**avivkeller:** (staged publishing as in require a maintainer to love into npm and approve it with 2FA)

**avivkeller:** Yes, but i don't think we ever got around to it

**evenstensberg:** hmm ok

**evenstensberg:** thought sebastian was going to create a simple repo

**avivkeller:** Can I get some 👍s on this message to enable staged publishing on `webpack-dev-server` as a 'test'? We will see if it works and revert if needed
 * 👍 @evenstensberg

**alexander.akait:** I am doing a lot of release remotely and often when I am mobile, I should have ability to make it without computer

**evenstensberg:** @alexander.akait you can just ping me or aviv if needed

**avivkeller:** If you have your 2FA app on your phone you should be able to do it like that

**avivkeller:** this is the most secure option

**evenstensberg:** or that 😄

**alexander.akait:** No, I should have an option to make it without any pings

**evenstensberg:** I think we should implement this, because its a good procedure to have. A lot of incidents come out of bad tokens
 * 788618026060218399 @avivkeller

**avivkeller:** That's unsafe, however, a single action to publish

**alexander.akait:** Enabled, but our process should be very simple

**alexander.akait:** I don’t want to change any publishing process if it will create problems with releases

**evenstensberg:** @alexander.akait we can enable it on dev server and youll try to publish once to check

**avivkeller:** Even if it slightly changes the complexity of a release, it greatly increases security

**alexander.akait:** I don’t understand what is the real problem with our current process, it is work, it simple and fast, it is trusted publishing, why we need to make it more complex when we don’t have any problems

**evenstensberg:** Its an extra layer to be sure we cant be compromised. Better to be safe than to get hacked and the entire web ecosystem getting polluted

**avivkeller:** > it is trusted publishing

Trusted publishing is still insecure without 2FA. It makes the build attestable, not 100% safe

**evenstensberg:** you never know where people can hijack our packages

**avivkeller:** OIDC = Tokenless Auth, not a guarantee that the package is safe.

**alexander.akait:** Again - I should have ability to make releases when I am on phone, I am making a lot of small releases and often need to make it right now and right here, without this I am -1 on this

**avivkeller:** You can log in to npm and approve a release from your phone

**evenstensberg:** i vote that we try on dev server first. Should be easy to approve releasing on phone

**avivkeller:** There's also little reason why a release would need to be sent immediately, and cannot wait for someone to approve it securely

**evenstensberg:** @alexander.akait if we get the idea correctly you just need to type a 2FA token before publishing or something similar. can be done on phone

**alexander.akait:** I don’t understand what do you mean? I want to merge a PR and nothing more, I can fill out tokens and I don’t understand how it will work

**avivkeller:** 1. Merge a PR -> Release reqeusted
2. Log in to npmjs.com and enter your 2FA code to approve the release
3. Release created

**evenstensberg:** @alexander.akait we **really** need this

**alexander.akait:** Npm supports this?

**avivkeller:** Yes

**avivkeller:** That's what this whole discussion is about 😅

**alexander.akait:** I mean I didn’t see such approaches before, because last time I write to npm about this feature they ask me it doesn’t supported

**evenstensberg:** lets enable it on dev server and try the flow

**evenstensberg:** we need to gradually roll it out anyways

**alexander.akait:** No, I should see how it works, if tomorrow we will have regressions or something else I should have ability to make a release

**avivkeller:** 👍 on enabling this on `dev-server` (via a PR)?
 * 👍 @evenstensberg, @avivkeller

**alexander.akait:** @avivkeller can you provide an example to look at this approach and how it works, i mean just create a sample repo in webpack org

**avivkeller:** not really, that would require creating a dummy npm package, which is against npm's terms of service

**alexander.akait:** In this case we can’t make it, without understand how it works and how it looks for me I can’t approve it, sorry

**evenstensberg:** what about trying it out on coffee loader?

**evenstensberg:** https://github.com/webpack/coffee-loader
 * 👀 @avivkeller

**alexander.akait:** We can do it on any deprecated loader or plugin, I am fine with it

**avivkeller:** Sure, 👍 on enabling this on coffee-loader?
 * 👍 @evenstensberg, @avivkeller, @alexander.akait

**evenstensberg:** breaks releasing if we publish a version that is depcriated 😅

**evenstensberg:** great, then we add this on coffee loader. aviv you also gotta react to the votes

**avivkeller:** I did...?

**evenstensberg:** i was too fast 😄

**avivkeller:** Next item: https://github.com/webpack/tsc/issues/64

**avivkeller:** Merch

**avivkeller:** I have access to Threadless, Sebastian spoke to Astro and they self host

**evenstensberg:** okay we need to ask about their vendors etc, who is producing these and how its run

**avivkeller:** They use Shopify

**evenstensberg:** and their vendor?

**avivkeller:** I don't remember off the top of my head but Sebastian posted it in one of our channels

**evenstensberg:** ok, lets keep it open and discuss privately

**avivkeller:** Regardless, we don't have designs

**evenstensberg:** first step would be to check if we can do like astro without a massive cost overhead

**avivkeller:** I made these?

**avivkeller:** It's not a massive overhead cost, it's just more work to maintain

**alexander.akait:** Looks good, but I am not good in design of merch 🙂

**evenstensberg:** okay. lets discuss privately later this week
 * 👍 @avivkeller, @alexander.akait

**avivkeller:** Next: https://github.com/webpack/tsc/issues/54

**avivkeller:** Create documentation/media working group

**evenstensberg:** still on hold until new site is up

**avivkeller:** Waiting for GSoC to conclude, I think

**evenstensberg:** yep

**avivkeller:** 👍 to skip item
 * 👍 @evenstensberg, @avivkeller, @alexander.akait

**avivkeller:** Also, 👍 to https://github.com/webpack/tsc/issues/48, ESP on hold until Webpack 6
 * 👍 @evenstensberg, @avivkeller, @alexander.akait

**avivkeller:** Next item: https://github.com/webpack/security-wg/issues/27, Security Audit

**alexander.akait:** Just for information, we almost finished css and html, only minification left, but SoA parser for js with hooks and analyzable js is still in work
 * 👀 @avivkeller

**evenstensberg:** reached out to Ulsyss in security wg channel
 * 👍 @avivkeller

**avivkeller:** On hold until @ulisesgascon responds, I guess?
 * 👍 @evenstensberg, @avivkeller

**avivkeller:** Ditto for https://github.com/webpack/security-wg/issues/4?

**avivkeller:** That's the entire agenda 🙂

**evenstensberg:** awesome! thanks for hosting Aviv 🙏

**avivkeller:** Meeting adjourned, unless someone has something to say?

**evenstensberg:** nothing from my end

**alexander.akait:** Nothing from my end too, feel free to ping/write me when we will ready to test our new release approach
 * ❤️ @evenstensberg
