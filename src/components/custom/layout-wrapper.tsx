
import { AnimatePresence, motion } from "framer-motion"
import { Home, Settings } from "lucide-react"
import { cn } from "../../lib/utils"
import { Outlet, Link } from "react-router-dom"
import { useState } from "react"

export default function LayoutWrapper() {
    const [pathname, setPathname] = useState('/')
    const navItems = [
        {
        name: "Home",
        href: "/",
        icon: Home,
        },
        {
        name: "Settings",
        href: "/settings",
        icon: Settings,
        },
    ]

  return (
    <div className="flex flex-col h-screen bg-background">
        <main className="flex-1 overflow-auto pb-16">
        <AnimatePresence mode="wait">
            <div key={pathname}><Outlet /></div>
        </AnimatePresence>
        </main>
        <nav className="fixed bottom-0 left-0 right-0 z-10 bg-background border-t">
        <div className="flex items-center justify-around h-16 px-4 max-w-md mx-auto">
            {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
                <Link
                to={item.href}
                key={item.name}
                onClick={() => setPathname(item.href)}
                className={cn(
                    "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                    isActive ? "text-blue-500" : "text-muted-foreground",
                )}
                >
                <div className="relative">
                    <item.icon className="w-5 h-5" />
                    {isActive && (
                    <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-0 right-0 mx-auto w-1 h-1 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    )}
                </div>
                <span className="text-xs">{item.name}</span>
                </Link>
            )
            })}
        </div>
        </nav>
    </div>
  )
}

