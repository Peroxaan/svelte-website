<script>
    import Header from "../lib/components/Header.svelte";
</script>

<Header>
    <h1 class="px-gradient">Privacy Policy</h1>
    <p class="lead">Last Updated: June 19th, 2022</p>
</Header>
<div class="lead">
    <p>At Peroxaan Studios, we believe in user privacy, and we like to keep you in the loop about
        how your data may be collected and or utilized in our apps.</p>
    <p>First and foremost, majority of data is actually collected by third parties, and Peroxaan
        doesn’t have access to most of it. Whether this be your Webhook data sent over Discord in Talon,
        or the bookmark data stored in iCloud for Ruby on iOS, this is data handled by third parties,
        and you should reference their respective privacy policies for more information on that.</p>
    <p>There is a very limited amount of data we actually collect, which is mostly analytical data.
        We use TelemetryDeck in the latest version of Talon for iOS, and this will roll out to more apps over time.
        All of the analytical data collected is private and anonymous, and it mostly includes things like device
        type, OS version, app version, and what features of the app you use.</p>
    <p>In Talon, we’ve built a new in house Link Shortener, talon.link - which essentially only stores the data
        related to that link shortening request - such as the time it was made, the link being shortened -
        and the short code that was generated. Talon for iOS also stores data on iCloud which is handled
        by Apple. Talon has integrations with a large range of platforms, including Discord, Slack,
        IFTTT, and all of that data is stored by those respective platforms, not us. </p>
    <p>In Ruby, there is no data collected by Peroxaan as of now, however - Ruby uses the Microsoft News API,
        and data may be collected by Microsoft when sending requests to their API. In addition to that,
        user data such as Bookmarks and other user preferences may be stored in iCloud and on device.
        This data is not accessible by Peroxaan.</p>
    <p>As for unreleased projects, details on their data collection will not be mentioned here as it is rapidly
        evolving and subject to change, however - crash data and user feedback may be collected by Apple and Google
        if you’re participating in any testing programs.</p>
    <p>In addition, our apps may link to external sites, such as Twitter - and your data may be collected by
    those third parties. In an app like Ruby, where the content is primarily provided by third parties, since
    they’re news articles - it is imperative that you know that data may be collected by those websites.</p>
</div>

<style>
    p {
        margin-bottom: 1rem;
    }
</style>