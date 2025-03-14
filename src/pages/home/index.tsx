import { motion } from "framer-motion"
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from '@tauri-apps/plugin-notification';
import { useEffect } from "react";
import { Button } from "../../components/ui/button";

export default function HomePage() {
  const checkPermission = async () => {
    let permissionGranted = await isPermissionGranted();

      // If not we need to request it
      if (!permissionGranted) {
        const permission = await requestPermission();
        permissionGranted = permission === 'granted';
      }
  }
  const handleSendNotification = () => {
      sendNotification({ title: 'Tauri Notification', body: 'Tauri is sending something' });
  } 

  useEffect(() => {
    checkPermission()
  },[])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex flex-col items-center justify-center h-full p-4"
    >
      <div className="w-full max-w-md mx-auto text-center space-y-6">
        <h1 className="text-2xl font-bold">Home Screen</h1>
        <p className="text-muted-foreground">
          Welcome to your dashboard. Here you can view your recent activity and manage your account.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <h3 className="font-medium">12</h3>
            <p className="text-xs text-muted-foreground">New notifications</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <h3 className="font-medium">3</h3>
            <p className="text-xs text-muted-foreground">Pending tasks</p>
          </div>
        </div>
        <Button onClick={handleSendNotification}>
        Send Notification
        </Button>
      </div>
    </motion.div>
  )
}

