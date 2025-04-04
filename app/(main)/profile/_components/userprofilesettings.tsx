"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { User, Lock, Bell, Globe, CreditCard, LogOut, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, FadeInUp } from "@/components/motionwrapper"

export function ProfileSettings() {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false)

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault()

        if (!currentPassword || !newPassword || !confirmPassword) {
            alert("Please fill in all password fields")
            return
        }

        if (newPassword !== confirmPassword) {
            alert("New passwords don't match")
            return
        }

        setPasswordResetSuccess(true)

        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")

        setTimeout(() => {
            setPasswordResetSuccess(false)
        }, 3000)
    }

    return (
        <FadeIn className="bg-white rounded-lg shadow-lg p-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <nav className="space-y-2">
                        {
                            [
                                { icon: <User size={18} />, label: "Account Information", active: true },
                                { icon: <Lock size={18} />, label: "Password & Security", active: false },
                                { icon: <Bell size={18} />, label: "Notifications", active: false },
                                { icon: <Globe size={18} />, label: "Privacy", active: false },
                                { icon: <CreditCard size={18} />, label: "Payment Methods", active: false },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Button
                                        variant={item.active ? "default" : "ghost"}
                                        className={`w-full justify-start ${item.active ? "bg-[#00A699] hover:bg-[#008b80]" : ""}`}
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))
                        }
                        <Separator className="my-4" />
                        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50">
                                <LogOut size={18} className="mr-2" />
                                Logout
                            </Button>
                        </motion.div>
                    </nav>
                </div>
                <div className="md:col-span-2">
                    <FadeInUp>
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Information</CardTitle>
                                <CardDescription>Update your personal details and preferences</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input id="fullName" defaultValue="Priya Sharma" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" defaultValue="priyatravels" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" defaultValue="priya.sharma@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input id="location" defaultValue="Mumbai, India" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bio">Bio</Label>
                                    <Input
                                        id="bio"
                                        defaultValue="Passionate traveler exploring the beauty of India. Love mountains, beaches, and everything in between!"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button className="bg-[#00A699] hover:bg-[#008b80]">Save Changes</Button>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeInUp>
                    <FadeInUp className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Reset Password</CardTitle>
                                <CardDescription>Change your password to keep your account secure</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleResetPassword} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="currentPassword">Current Password</Label>
                                        <Input
                                            id="currentPassword"
                                            type="password"
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <Input
                                            id="newPassword"
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    {
                                        passwordResetSuccess && (
                                            <motion.div
                                                className="bg-green-100 text-green-700 p-3 rounded-md flex items-center"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Check className="h-5 w-5 mr-2" />
                                                Password reset successfully!
                                            </motion.div>
                                        )
                                    }
                                    <div className="flex justify-end">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button type="submit" className="bg-[#00A699] hover:bg-[#008b80]">
                                                Reset Password
                                            </Button>
                                        </motion.div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </FadeInUp>
                    <FadeInUp className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Email Notifications</CardTitle>
                                <CardDescription>Manage your email notification preferences</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {
                                    [
                                        { label: "Travel deals and discounts", defaultChecked: true },
                                        { label: "Trip reminders", defaultChecked: true },
                                        { label: "New features and updates", defaultChecked: false },
                                        { label: "Travel tips and recommendations", defaultChecked: true },
                                        { label: "Marketing emails", defaultChecked: false },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <Label htmlFor={`notification-${index}`} className="cursor-pointer">
                                                {item.label}
                                            </Label>
                                            <Switch id={`notification-${index}`} defaultChecked={item.defaultChecked} />
                                        </div>
                                    ))
                                }
                                <div className="flex justify-end mt-4">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button className="bg-[#00A699] hover:bg-[#008b80]">Save Preferences</Button>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeInUp>
                </div>
            </div>
        </FadeIn>
    )
}