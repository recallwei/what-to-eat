<script lang="ts">
  import { HomePage, AboutPage, NotFoundPage } from '@/pages'

  const pageMap = new Map([
    ['/', HomePage],
    ['/about', AboutPage],
    ['/404', NotFoundPage]
  ])

  let pathname = window.location.pathname
</script>

<main>
  {#if pageMap.has(pathname)}
    <svelte:component this={pageMap.get(pathname)} />
  {:else}
    <svelte:component this={pageMap.get('/404')} />
  {/if}
</main>
