import clsx from 'clsx'

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-r from-emerald-600 to-emerald-400 dark:bg-gradient-to-r dark:from-emerald-700 dark:to-emerald-600',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  )

  return <div className={className}>Welcome To My Blog!</div>
}

export default Greeting
