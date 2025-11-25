import React from 'react'
import NewsletterForm from '../components/NewsletterForm'
export default function Newsletter(): React.ReactElement {
  return (
    <div className="flex h-screen w-full justify-center items-center py-4 px-10 max-w-3xl mx-auto">
      <NewsletterForm />
    </div>
  )
}
