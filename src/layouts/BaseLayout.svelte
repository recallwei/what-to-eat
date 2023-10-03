<script lang="ts">
  import { BaseHeader, BaseFooter } from '@/components'
</script>

<main>
  <div class="h-screen w-screen bg-pink-100">
    <BaseHeader />
    <div class="p-4">
      <slot />
    </div>
    <BaseFooter />
  </div>
</main>
