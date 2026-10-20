import type { SubscriptionKey } from '@/stores/useAccounts'

export function dashboardIdForSlug(accountId: string, slug: string): string {
  return `${accountId}-${slug}`
}

function dashboardPath(accountId: string, slug: string): string {
  return `/accounts/${accountId}/dashboard/${dashboardIdForSlug(accountId, slug)}`
}

/** Sidebar destinations for the Dashboards group (Navigation v3 — no duplicate in-page tabs). */
export function dashboardSidebarItems(accountId: string, subscriptions: SubscriptionKey[]) {
  const hasCommerce = subscriptions.includes('commerce') || subscriptions.includes('retail')
  const hasMarketing = subscriptions.includes('marketing')

  const items: Array<{ title: string; route: string }> = []

  if (hasCommerce) {
    items.push({ title: 'Commerce', route: dashboardPath(accountId, 'commerce-overview') })
  }
  if (hasMarketing) {
    const slug = hasCommerce ? 'marketing-performance' : 'campaign-analytics'
    items.push({ title: 'Campaign analytics', route: dashboardPath(accountId, slug) })
  }
  if (!hasCommerce && !hasMarketing) {
    items.push({ title: 'Overview', route: `/accounts/${accountId}/dashboard` })
  }

  items.push(
    { title: 'Manage', route: `/accounts/${accountId}/dashboards` },
    { title: 'Live', route: `/accounts/${accountId}/analytics/live_view` },
  )

  return items
}

/** Default dashboard when visiting `/accounts/:id/dashboard` with no dashboard id. */
export function defaultDashboardRoute(accountId: string, subscriptions: SubscriptionKey[]): string {
  const hasCommerce = subscriptions.includes('commerce') || subscriptions.includes('retail')
  const hasMarketing = subscriptions.includes('marketing')

  if (hasCommerce) return dashboardPath(accountId, 'commerce-overview')
  if (hasMarketing) return dashboardPath(accountId, 'campaign-analytics')
  return `/accounts/${accountId}/dashboard`
}
