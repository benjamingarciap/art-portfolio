import React from 'react'

export default function FormButton({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <button
      type="submit"
      className="bg-black text-white px-4 py-2 rounded hover:bg-neutral-800 cursor-pointer mb-[7px]"
    >
      {children}
    </button>
  )
}
