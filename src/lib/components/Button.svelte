<script>
    export let text;
    export let href;
    export let hrefNewTab = false;
    export let borderRadius = '25px';
    export let small = false;

    let padding = small ? '5px 8px' : '10px 16px';
</script>

<div class="{!small ? 'shadow' : ''}">
    <a target={hrefNewTab ? "_blank" : ""} href={href} style="border-radius: {borderRadius}; padding: {padding};">
        {text}
    </a>
</div>

<style>
    div {
        margin: 12px 2px 2px -2px;
    }

    a {
        text-decoration: none;
        border: 2px transparent solid;
        background-color: #ffd9dd;
        color: #400014;
        transition: border-color 150ms linear;
        -webkit-transition: border-color 150ms linear;
        background-clip: padding-box;
        -webkit-background-clip: padding-box;
    }

    a:hover {
        border-color: #fd8395;
    }

    @media (prefers-color-scheme: dark) {
        a {
            background-color: #43272b;
            color: #ffe7f1;
        }
    }
</style>