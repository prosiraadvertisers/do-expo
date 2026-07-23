'use client'

import { Check } from 'lucide-react'
import type { ReactNode } from 'react'

export function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string
  htmlFor?: string
  required?: boolean
  error?: string
  hint?: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  )
}

const baseInput =
  'w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-4 focus:ring-ring/15 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20'

export function TextInput({
  error,
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return <input aria-invalid={error} className={`${baseInput} ${className}`} {...props} />
}

export function TextArea({
  error,
  className = '',
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) {
  return <textarea aria-invalid={error} className={`${baseInput} min-h-[84px] resize-y ${className}`} {...props} />
}

export function Select({
  error,
  className = '',
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean }) {
  return (
    <select aria-invalid={error} className={`${baseInput} appearance-none bg-[right_0.75rem_center] pr-9 ${className}`} {...props}>
      {children}
    </select>
  )
}

export function PhoneInput({
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <div
      className={`flex items-stretch overflow-hidden rounded-lg border border-input bg-background shadow-sm transition focus-within:border-ring focus-within:ring-4 focus-within:ring-ring/15 ${
        error ? 'border-destructive ring-destructive/20' : ''
      }`}
    >
      <span className="flex items-center border-r border-input bg-muted px-3.5 text-sm font-medium text-foreground">
        +91
      </span>
      <input
        inputMode="tel"
        className="w-full bg-transparent px-3.5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
        {...props}
      />
    </div>
  )
}

export function RadioCards({
  name,
  options,
  value,
  onChange,
}: {
  name: string
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      {options.map((opt) => {
        const selected = value === opt.value
        return (
          <label
            key={opt.value}
            className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3.5 py-3 text-sm transition ${
              selected
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                : 'border-input bg-background hover:border-primary/40'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <span
              className={`flex size-4 shrink-0 items-center justify-center rounded-full border-2 ${
                selected ? 'border-primary' : 'border-muted-foreground/40'
              }`}
            >
              {selected && <span className="size-2 rounded-full bg-primary" />}
            </span>
            <span className="font-medium text-foreground">{opt.label}</span>
          </label>
        )
      })}
    </div>
  )
}

export function MultiChips({
  options,
  values,
  onChange,
  max,
}: {
  options: string[]
  values: string[]
  onChange: (next: string[]) => void
  max?: number
}) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) {
      onChange(values.filter((v) => v !== opt))
    } else {
      if (max && values.length >= max) return
      onChange([...values, opt])
    }
  }
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = values.includes(opt)
        const disabled = !selected && !!max && values.length >= max
        return (
          <button
            type="button"
            key={opt}
            onClick={() => toggle(opt)}
            aria-pressed={selected}
            disabled={disabled}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
              selected
                ? 'border-primary bg-primary text-primary-foreground'
                : disabled
                  ? 'cursor-not-allowed border-input bg-muted text-muted-foreground/50'
                  : 'border-input bg-background text-foreground hover:border-primary/50'
            }`}
          >
            {selected && <Check className="size-3.5" />}
            {opt}
          </button>
        )
      })}
    </div>
  )
}
