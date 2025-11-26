import React, { Fragment, useEffect, useState } from 'react'
import { Input, Field, Label } from '@headlessui/react'
import FormButton from './FormButton'
import clsx from 'clsx'

export default function ContactForm({
  handleSubmit,
  status,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  status: 'idle' | 'success' | 'error'
}): React.ReactElement {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    function checkHeight() {
      const small = window.innerHeight <= 667 || window.innerHeight === 740
      setIsSmallScreen(small)
      console.log('Height check:', window.innerHeight, small)
    }
    checkHeight()
    window.addEventListener('resize', checkHeight)
    return () => window.removeEventListener('resize', checkHeight)
  }, [])
  return (
    <div className={clsx(isSmallScreen && 'pt-[50px]', 'w-full')}>
      <div className={clsx('pt-20 mx-auto', isSmallScreen && 'h-screen')}>
        <h2 className="text-3xl font-semibold mb-10">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* NAME */}
          <Field className="flex flex-col space-y-2">
            <Label className="text-sm">Full name</Label>
            <Input
              type="text"
              name="full_name"
              required
              className="w-full border p-2 rounded bg-white transition"
              placeholder="Your name"
            />
          </Field>

          {/* EMAIL */}
          <Field className="flex flex-col space-y-2">
            <Label className="text-sm">Email</Label>

            <Input
              type="email"
              name="email"
              required
              className="w-full border p-2 rounded bg-white transition"
              placeholder="you@example.com"
            />
          </Field>

          {/* MESSAGE */}
          <Field className="flex flex-col space-y-2 mb-3">
            <Label className="text-sm">Message</Label>

            <Input as={Fragment}>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full border p-2 rounded bg-white transition"
                placeholder="Write your message..."
              />
            </Input>
          </Field>

          {/* SUBMIT */}
          <FormButton>Send Message</FormButton>

          {/* FEEDBACK */}
          {status === 'success' && (
            <p className="text-green-600 text-sm">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
