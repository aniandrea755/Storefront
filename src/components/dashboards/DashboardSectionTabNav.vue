<script setup lang="ts">
export type DashboardSectionTabValue = 'overview' | 'campaigns'

withDefaults(
  defineProps<{
    /** Parent row already applies horizontal page padding — drop duplicate inset. */
    inset?: boolean
  }>(),
  { inset: false },
)

const model = defineModel<DashboardSectionTabValue>({ required: true })

const tabs: Array<{ value: DashboardSectionTabValue; label: string }> = [
  { value: 'overview', label: 'Overview' },
  { value: 'campaigns', label: 'Campaigns' },
]

function selectTab(value: DashboardSectionTabValue) {
  model.value = value
}
</script>

<template>
  <nav
    class="dashboard-section-tab-nav"
    :class="{ 'dashboard-section-tab-nav--inset': inset }"
    aria-label="Dashboard sections"
  >
    <div class="dashboard-section-tab-nav__tabs" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        role="tab"
        class="dashboard-section-tab-nav__tab"
        :class="{ 'dashboard-section-tab-nav__tab--active': model === tab.value }"
        :aria-selected="model === tab.value"
        @click="selectTab(tab.value)"
      >
        <span class="dashboard-section-tab-nav__label">{{ tab.label }}</span>
        <span class="dashboard-section-tab-nav__indicator" aria-hidden="true" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
.dashboard-section-tab-nav {
  position: relative;
  border-bottom: 1px solid var(--border-subtle);
}

.dashboard-section-tab-nav__tabs {
  display: flex;
  align-items: flex-start;
  padding-inline: 36px;
}

@media (max-width: 1024px) {
  .dashboard-section-tab-nav__tabs {
    padding-inline: 28px;
  }
}

@media (max-width: 640px) {
  .dashboard-section-tab-nav__tabs {
    padding-inline: 22px;
  }
}

.dashboard-section-tab-nav--inset .dashboard-section-tab-nav__tabs {
  padding-inline: 0;
}

.dashboard-section-tab-nav__tab {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--mp-space-12);
  padding-top: var(--mp-space-14);
  padding-bottom: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  appearance: none;
  font: inherit;
  color: var(--text-secondary);
}

.dashboard-section-tab-nav__tab:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
  border-radius: var(--mp-radius-sm);
}

.dashboard-section-tab-nav__tab--active {
  color: rgb(var(--v-theme-primary));
}

.dashboard-section-tab-nav__label {
  padding-inline: var(--mp-space-24);
  font-size: var(--mp-fontSize-14);
  font-weight: 400;
  line-height: var(--mp-space-20);
  letter-spacing: 0.25px;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
}

.dashboard-section-tab-nav__indicator {
  display: block;
  height: 2px;
  width: 100%;
  background: transparent;
}

.dashboard-section-tab-nav__tab--active .dashboard-section-tab-nav__indicator {
  background: rgb(var(--v-theme-primary));
}
</style>
