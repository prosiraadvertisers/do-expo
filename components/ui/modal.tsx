'use client'

import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
  labelledBy?: string
  className?: string
}

export function Modal({ open, onClose, children, labelledBy, className = '' }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-center overflow-y-auto sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
    >
      <button
        aria-label="Close dialog"
        onClick={onClose}
        className="fixed inset-0 h-full w-full cursor-default bg-[oklch(0.15_0.05_270_/_0.7)] backdrop-blur-sm"
        tabIndex={-1}
      />
      <div
        className={`relative z-10 flex w-full flex-col bg-card shadow-2xl sm:max-w-3xl sm:rounded-2xl sm:my-8 animate-fade-in-up ${className}`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 inline-flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm ring-1 ring-border transition hover:bg-muted"
        >
          <X className="size-5" />
        </button>
        {children}
      </div>
    </div>
  )
}
