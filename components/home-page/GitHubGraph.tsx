'use client'

import GitHubCalendar from 'react-github-calendar'
import { useTheme } from 'next-themes'

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const shownMonths = 6

  return contributions.filter((activity) => {
    const date = new Date(activity.date)
    const monthOfDay = date.getMonth()

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    )
  })
}

const GitHubGraph = () => {
  const { resolvedTheme } = useTheme()

  return (
    <div>
      <GitHubCalendar
        username="jeparktech"
        transformData={selectLastHalfYear}
        hideColorLegend
        colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        labels={{
          totalCount: '{{count}} contributions in the last half year',
        }}
      />
    </div>
  )
}

export default GitHubGraph
