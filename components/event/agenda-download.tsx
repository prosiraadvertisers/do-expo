"use client"

import { Download } from "lucide-react"
import { AGENDA, EVENT } from "@/lib/event-data"

export function AgendaDownload() {
  const handleDownload = () => {
    const lines = [
      `${EVENT.name} — Full Agenda`,
      `${EVENT.dateLabel} · ${EVENT.venue}`,
      "",
    ]
    for (const day of AGENDA) {
      lines.push(`== ${day.label} — ${day.date} (Theme: ${day.theme}) ==`)
      for (const s of day.sessions) {
        lines.push(`${s.time}  |  ${s.title}`)
        lines.push(`            ${s.speaker}, ${s.role} — ${s.hall} [${s.track}]`)
      }
      lines.push("")
    }
    const blob = new Blob([lines.join("\n")], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "automation-expo-2026-agenda.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-lg transition hover:brightness-105"
    >
      <Download className="size-4" /> Download Agenda
    </button>
  )
}
