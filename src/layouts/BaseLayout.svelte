<script lang="ts">
  import { BaseHeader, BaseFooter } from '@/components'
</script>

<main>
  <div
    class="relative min-h-screen w-screen overflow-y-scroll bg-pink-100 pb-10"
  >
    <BaseHeader />
    <div class="mx-auto w-full px-6 sm:w-2/3">
      <slot />
    </div>
    <BaseFooter />
  </div>
</main>
