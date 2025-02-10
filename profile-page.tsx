"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Music2 } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-950 via-blue-900 to-sky-950 text-white">
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden mb-6 shadow-2xl ring-1 ring-sky-500/20">
            <div className="relative h-[300px] group">
              <Image
                src="https://img2.pic.in.th/pic/sqeq.png"
                alt="Profile banner"
                width={1200}
                height={300}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 px-6">
            <div className="flex flex-col md:flex-row items-start gap-6 -mt-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="https://img2.pic.in.th/pic/yukito.png"
                  alt="Profile picture"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-sky-950 relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 space-y-6">
                <div className="backdrop-blur-sm bg-sky-950/50 p-6 rounded-2xl border border-sky-400/10">
                  <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
                      Yukita
                    </h1>
                    <span className="text-sky-200 text-sm px-3 py-1 rounded-full bg-sky-800/50 backdrop-blur-sm">
                      He / Him
                    </span>
                  </div>

                  <div className="space-y-4">
                    <Card className="bg-sky-800/30 border-0 backdrop-blur-md hover:bg-sky-800/40 transition-colors duration-300">
                      <CardContent className="p-4">
                        <p className="text-sky-300 mb-2 flex items-center gap-2">
                          <span className="animate-pulse">⭐</span>
                          คติประจำใจ
                        </p>
                        <p className="text-xl font-medium italic text-white leading-relaxed">
                          "ทุกสิ่งทุกอย่าง ล้วนแล้วแต่คือธุรกิจ"
                        </p>
                      </CardContent>
                    </Card>

                    <div className="text-sky-200 flex items-center gap-2">
                      <span className="text-sky-400">📅</span>
                      <span className="leading-relaxed">เป็นส่วนหนึ่งของโลกตั้งแต่</span>
                      <span className="text-white">26 กุมภาพันธ์ 2555</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-sky-500/10 py-6 mt-8 backdrop-blur-sm bg-sky-950/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-sky-200">
            <span>© 2025</span>
            <span className="text-sky-400">•</span>
            <span>Made with Yukita</span>
          </div>
        </div>
      </footer>

      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-t from-sky-950 to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
