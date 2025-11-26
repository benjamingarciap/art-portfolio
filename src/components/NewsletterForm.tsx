import React from 'react'
import FormButton from './FormButton'
import { Field, Label, Input } from '@headlessui/react'

export default function NewsletterForm(): React.ReactElement {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mb-0 pb-0">
        Subscribe to my Newsletter
      </h2>
      <p className="mb-4 font-light text-gray-900 text-[16px]">
        Stay updated with my latest artworks, exhibitions, and exclusive
      </p>

      <form
        action="https://beng-art.us19.list-manage.com/subscribe/post?u=14e11d2b5fb269de4c1594df4&id=a7dcdbcd6d&f_id=00a96de7f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className="space-y-4"
      >
        <Field>
          <Label htmlFor="mce-EMAIL" className="text-sm">
            Email Address
          </Label>

          <Input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            className="w-full border p-2 rounded"
            placeholder="you@example.com"
          />
        </Field>

        {/* Mailchimp hidden bot-field (keep this exactly as-is) */}
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_14e11d2b5fb269de4c1594df4_a7dcdbcd6d"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        <FormButton>Subscribe</FormButton>
      </form>
    </div>
  )
}
