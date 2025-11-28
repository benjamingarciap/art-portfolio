import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import images from '../data/images.json'
import formatTitleAndDetailsWithYear from '../lib/formatTitleAndDetailsWithYear'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function MobileImageGrid({
  yearOfCreation,
}: {
  yearOfCreation: string | undefined
}): React.ReactElement {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="pt-20 h-screen flex w-full flex-col items-center">
      {/* Grid */}

      <h2 className="text-xl font-semibold mb-4">{yearOfCreation}</h2>
      <div className="grid grid-cols-2 gap-0.5 w-full">
        {images.map((img) => {
          const { title, details, year } = formatTitleAndDetailsWithYear(
            img.title
          )
          if (yearOfCreation && year.toString() !== yearOfCreation) {
            return null
          }
          return (
            <button
              key={img.url}
              onClick={() => setSelected(img.url)}
              className="relative h-fit w-full pb-[100%] overflow-hidden"
            >
              <img
                src={img.url}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          )
        })}
      </div>

      {/* Lightbox (Dialog) */}
      <Transition appear show={!!selected} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setSelected(null)}
        >
          <div className="fixed inset-0 bg-black/80" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel>
                <>
                  <img
                    src={selected ?? ''}
                    className="max-h-[90vh] max-w-[100vw]"
                  />
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
