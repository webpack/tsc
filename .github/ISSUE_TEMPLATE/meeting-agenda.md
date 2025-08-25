<% const timezones = [
  'America/Los_Angeles',
  'America/Denver',
  'America/Chicago',
  'America/New_York',
  'Europe/London',
  'Europe/Amsterdam',
  'Europe/Moscow',
  'Asia/Kolkata',
  'Asia/Shanghai',
  'Asia/Tokyo',
  'Australia/Sydney'
]; %>

## Date/Time

| Timezone | Date/Time |
|----------|-----------|
<%= timezones.map((zone) => {
  const zonedDate = date.toZonedDateTimeISO(zone)
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: zone
  })
  const formattedDate = formatter.format(new Date(zonedDate.epochMilliseconds))
  return `| ${zone} | ${formattedDate} |`
}).join('\n') %>

Or in your local time:

* https://www.timeanddate.com/worldclock/fixedtime.html?msg=<%= encodeURIComponent(title) %>&iso=<%= date.toZonedDateTimeISO('UTC').toPlainDateTime().toString().slice(0, 16).replace(/[-:]/g, '') %>&p1=1440&ah=1

## Agenda

Extracted from **<%= agendaLabel %>** labelled issues and pull requests from **<%= owner %>/<%= repo %>** prior to the meeting.

<%= agendaIssues.map((i) => {
  return `* ${i.html_url}`
}).join('\n') %>

## Invited

* Webpack TSC (@webpack/tsc)

### Observers/Guests

This meeting is open for anyone who wants to attend. Reminder to follow our [Code of Conduct](https://github.com/webpack/webpack/blob/main/CODE_OF_CONDUCT.md).

### Joining the meeting

* Join [Webpack's Discord server](https://discord.gg/5sxFZPdx2k) then the [#tsc-meetings](https://discord.com/channels/1180618526436888586/1374060261576540170) channel

---

Please use the following emoji reactions in this post to indicate your
availability.

* 👍 - Attending
* 👎 - Not attending
* 😕 - Not sure yet
