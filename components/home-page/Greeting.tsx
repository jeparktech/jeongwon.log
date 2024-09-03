import clsx from 'clsx'

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-r from-gray-500 to-slate-400 dark:bg-gradient-to-r dark:from-emerald-600 dark:to-emerald-400',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  )

  return <div className={className}>Welcome To My Blog!</div>
}

export default Greeting
