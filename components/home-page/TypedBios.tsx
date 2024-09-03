'use client'

import React from 'react'
import Typed from 'typed.js'

const TypedBios = () => {
  const el = React.useRef<HTMLSpanElement | null>(null)
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        stringsElement: '#bios',
        typeSpeed: 40,
        backSpeed: 10,
        loop: true,
        backDelay: 1000,
      })
    }
    return () => {
      if (typed.current) {
        typed.current.destroy()
      }
    }
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I work and live in <b className="font-semibold">Brooklyn, New York</b>.
        </li>
        <li>
          I was born and raised in <b className="font-semibold"> Incheon, South Korea</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-semibold">Java</b>.
        </li>
        <li>I like running and playing basketball.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
