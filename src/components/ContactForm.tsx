import React, { Fragment } from 'react'
import { Input, Field, Label } from '@headlessui/react'
import FormButton from './FormButton'
export default function ContactForm({
  handleSubmit,
  status,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  status: 'idle' | 'success' | 'error'
}): React.ReactElement {
  return (
    <div className="w-full">
      <div className="pt-20 p-4 max-w-3xl mx-auto">
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
          <Field className="flex flex-col space-y-2">
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
