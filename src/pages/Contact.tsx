import React, { useState } from 'react'

import ContactForm from '../components/ContactForm'

export default function Contact(): React.ReactElement {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch('https://formspree.io/f/meonyqoj', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="flex h-screen w-full justify-center items-center p-9 pb-20 max-w-3xl mx-auto">
      <ContactForm handleSubmit={handleSubmit} status={status} />
    </div>
  )
}
