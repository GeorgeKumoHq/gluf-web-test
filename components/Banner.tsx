import { X } from "lucide-react"

interface BannerProps {
  onOpen: () => void
  onClose: () => void
}

export default function Banner({ onOpen, onClose }: BannerProps) {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          Experience Gluf on your device
        </p>
        <button
          onClick={onOpen}
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Open App
        </button>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          onClick={onClose}
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <X aria-hidden="true" className="h-5 w-5 text-gray-900" />
        </button>
      </div>
    </div>
  )
}
