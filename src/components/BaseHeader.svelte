<script lang="ts">
  import favicon from '@/assets/images/favicon.png'
  interface NavItem {
    text: string
    href: string
    outLink?: boolean
  }

  let navList: NavItem[] = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'GitHub',
      href: 'https://github.com/recallwei/',
      outLink: true
    }
  ]
</script>

<main class="flex w-screen items-center justify-center p-6">
  <div
    class="flex h-14 w-full select-none items-center justify-between rounded-lg bg-white p-4 shadow-md sm:w-2/3"
  >
    <a
      class="flex select-none items-center space-x-2"
      href="/"
    >
      <img
        src={favicon}
        alt=""
        width="40"
        height="40"
        loading="eager"
        class="cursor-pointer transition-all hover:scale-125 active:scale-100"
      />
      <span>What to eat?</span>
    </a>
    <ul class="flex h-full items-center justify-end space-x-4">
      {#each navList as navItem}
        <li
          class="-mb-2 pb-2 transition-transform hover:-translate-y-1 active:translate-y-0"
        >
          {#if navItem.outLink}
            <a
              target="_blank"
              rel="noreferrer"
              href={navItem.href}
            >
              {navItem.text}
            </a>
          {:else}
            <a
              target="_self"
              rel="noreferrer"
              href={navItem.href}
            >
              {navItem.text}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</main>
