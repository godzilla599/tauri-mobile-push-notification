import { motion } from "framer-motion"
import { Switch } from "../../components/ui/switch"
import { Label } from "../../components/ui/label"
import { Separator } from "../../components/ui/separator"
import { Bell, Moon, Smartphone, Wifi } from "lucide-react"

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex flex-col h-full p-4"
    >
      <div className="w-full max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Settings</h1>

        <div className="space-y-4">
          <h2 className="text-sm font-medium text-muted-foreground">Preferences</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Moon className="w-5 h-5 text-primary" />
                </div>
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
              <Switch id="dark-mode" />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <Label htmlFor="notifications">Notifications</Label>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Wifi className="w-5 h-5 text-primary" />
                </div>
                <Label htmlFor="wifi-only">Download on Wi-Fi only</Label>
              </div>
              <Switch id="wifi-only" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <Label htmlFor="haptic-feedback">Haptic Feedback</Label>
              </div>
              <Switch id="haptic-feedback" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

