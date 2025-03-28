"use client"

import { useState } from "react"
import {
    Calendar, Clock, Plus, Trash2, ArrowUp, 
    ArrowDown, Save, Share2, Download, FileText, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn, FadeInUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/motionwrapper"

interface ItineraryItem {
    id: string
    activity: string
    time: string
    location: string
    notes: string
    category: string
}

interface ItineraryDay {
    date: string
    items: ItineraryItem[]
}

interface Itinerary {
    id: string
    name: string
    destination: string
    startDate: string
    endDate: string
    days: ItineraryDay[]
    notes: string
}

export function FullItineraryPlanner() {
    const [itineraries, setItineraries] = useState<Itinerary[]>([
        {
            id: "1",
            name: "Trip to Rajasthan",
            destination: "Rajasthan",
            startDate: "2023-10-15",
            endDate: "2023-10-22",
            days: [
                {
                    date: "2023-10-15",
                    items: [
                        {
                            id: "1",
                            activity: "Arrival in Jaipur",
                            time: "10:00",
                            location: "Jaipur International Airport",
                            notes: "Check in at hotel and rest",
                            category: "transport",
                        },
                        {
                            id: "2",
                            activity: "Visit Hawa Mahal",
                            time: "15:00",
                            location: "Hawa Mahal, Jaipur",
                            notes: "Spend about 2 hours exploring",
                            category: "sightseeing",
                        },
                    ],
                },
                {
                    date: "2023-10-16",
                    items: [
                        {
                            id: "3",
                            activity: "Amber Fort Tour",
                            time: "09:00",
                            location: "Amber Fort, Jaipur",
                            notes: "Book elephant ride in advance",
                            category: "sightseeing",
                        },
                    ],
                },
            ],
            notes: "Remember to pack light clothes and sunscreen",
        },
    ])

    const [activeItineraryId, setActiveItineraryId] = useState<string>(itineraries[0]?.id || "")
    const [newItineraryName, setNewItineraryName] = useState("")
    const [newItineraryDestination, setNewItineraryDestination] = useState("")
    const [newItineraryStartDate, setNewItineraryStartDate] = useState("")
    const [newItineraryEndDate, setNewItineraryEndDate] = useState("")

    const activeItinerary = itineraries.find((itin) => itin.id === activeItineraryId) || itineraries[0]

    // Create a new itinerary
    const createNewItinerary = () => {
        if (!newItineraryName || !newItineraryDestination || !newItineraryStartDate || !newItineraryEndDate) {
            alert("Please fill in all fields")
            return
        }

        const newItinerary: Itinerary = {
            id: Date.now().toString(),
            name: newItineraryName,
            destination: newItineraryDestination,
            startDate: newItineraryStartDate,
            endDate: newItineraryEndDate,
            days: [],
            notes: "",
        }

        // Generate days between start and end date
        const start = new Date(newItineraryStartDate)
        const end = new Date(newItineraryEndDate)
        const dayDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1

        for (let i = 0; i < dayDiff; i++) {
            const date = new Date(start)
            date.setDate(date.getDate() + i)
            newItinerary.days.push({
                date: date.toISOString().split("T")[0],
                items: [],
            })
        }

        setItineraries([...itineraries, newItinerary])
        setActiveItineraryId(newItinerary.id)

        // Reset form
        setNewItineraryName("")
        setNewItineraryDestination("")
        setNewItineraryStartDate("")
        setNewItineraryEndDate("")
    }

    // Delete an itinerary
    const deleteItinerary = (id: string) => {
        if (confirm("Are you sure you want to delete this itinerary?")) {
            const newItineraries = itineraries.filter((itin) => itin.id !== id)
            setItineraries(newItineraries)

            if (activeItineraryId === id) {
                setActiveItineraryId(newItineraries[0]?.id || "")
            }
        }
    }

    // Add a new day to the active itinerary
    const addDay = (date: string) => {
        if (!activeItinerary) return

        // Check if date already exists
        if (activeItinerary.days.some((day) => day.date === date)) {
            alert("This date already exists in your itinerary")
            return
        }

        const updatedItineraries = itineraries.map((itin) => {
            if (itin.id === activeItineraryId) {
                return {
                    ...itin,
                    days: [...itin.days, { date, items: [] }].sort(
                        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
                    ),
                }
            }
            return itin
        })

        setItineraries(updatedItineraries)
    }
    const addItem = (dayIndex: number) => {
        if (!activeItinerary) return

        const updatedItineraries = itineraries.map((itin) => {
            if (itin.id === activeItineraryId) {
                const updatedDays = [...itin.days]
                updatedDays[dayIndex] = {
                    ...updatedDays[dayIndex],
                    items: [
                        ...updatedDays[dayIndex].items,
                        {
                            id: Date.now().toString(),
                            activity: "",
                            time: "12:00",
                            location: "",
                            notes: "",
                            category: "activity",
                        },
                    ],
                }
                return { ...itin, days: updatedDays }
            }
            return itin
        })

        setItineraries(updatedItineraries)
    }
    const updateItem = (dayIndex: number, itemIndex: number, field: keyof ItineraryItem, value: string) => {
        if (!activeItinerary) return

        const updatedItineraries = itineraries.map((itin) => {
            if (itin.id === activeItineraryId) {
                const updatedDays = [...itin.days]
                const updatedItems = [...updatedDays[dayIndex].items]
                updatedItems[itemIndex] = {
                    ...updatedItems[itemIndex],
                    [field]: value,
                }
                updatedDays[dayIndex] = {
                    ...updatedDays[dayIndex],
                    items: updatedItems,
                }
                return { ...itin, days: updatedDays }
            }
            return itin
        })

        setItineraries(updatedItineraries)
    }
    const removeItem = (dayIndex: number, itemIndex: number) => {
        if (!activeItinerary) return

        const updatedItineraries = itineraries.map((itin) => {
            if (itin.id === activeItineraryId) {
                const updatedDays = [...itin.days]
                updatedDays[dayIndex] = {
                    ...updatedDays[dayIndex],
                    items: updatedDays[dayIndex].items.filter((_, i) => i !== itemIndex),
                }
                return { ...itin, days: updatedDays }
            }
            return itin
        })

        setItineraries(updatedItineraries)
    }
    const moveItem = (dayIndex: number, itemIndex: number, direction: "up" | "down") => {
        if (!activeItinerary) return

        const items = activeItinerary.days[dayIndex].items

        if ((direction === "up" && itemIndex === 0) || (direction === "down" && itemIndex === items.length - 1)) {
            return
        }

        const updatedItineraries = itineraries.map((itin) => {
            if (itin.id === activeItineraryId) {
                const updatedDays = [...itin.days]
                const updatedItems = [...updatedDays[dayIndex].items]
                const newIndex = direction === "up" ? itemIndex - 1 : itemIndex + 1
                    ;[updatedItems[itemIndex], updatedItems[newIndex]] = [updatedItems[newIndex], updatedItems[itemIndex]]

                updatedDays[dayIndex] = {
                    ...updatedDays[dayIndex],
                    items: updatedItems,
                }

                return { ...itin, days: updatedDays }
            }
            return itin
        })

        setItineraries(updatedItineraries)
    }
    const updateItineraryNotes = (notes: string) => {
        if (!activeItinerary) return

        const updatedItineraries = itineraries.map((itin) => {
            if (itin.id === activeItineraryId) {
                return { ...itin, notes }
            }
            return itin
        })

        setItineraries(updatedItineraries)
    }
    const saveItinerary = () => {
        alert("Itinerary saved successfully!")
        console.log(activeItinerary)
    }
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "transport":
                return <span className="bg-blue-100 text-blue-700 p-1 rounded">🚗</span>
            case "accommodation":
                return <span className="bg-purple-100 text-purple-700 p-1 rounded">🏨</span>
            case "food":
                return <span className="bg-yellow-100 text-yellow-700 p-1 rounded">🍽️</span>
            case "sightseeing":
                return <span className="bg-green-100 text-green-700 p-1 rounded">🏛️</span>
            default:
                return <span className="bg-gray-100 text-gray-700 p-1 rounded">📌</span>
        }
    }

    return (
        <div>
            <Tabs defaultValue="existing" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="existing">My Itineraries</TabsTrigger>
                    <TabsTrigger value="create">Create New Itinerary</TabsTrigger>
                </TabsList>
                <TabsContent value="existing">
                    {
                    itineraries.length === 0 ? (
                        <FadeIn className="text-center py-12">
                            <h3 className="text-xl font-medium mb-2">No Itineraries Yet</h3>
                            <p className="text-gray-500 mb-6">Create your first itinerary to get started</p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button onClick={() => document.querySelector('[data-value="create"]')?.click()}>
                                    Create New Itinerary
                                </Button>
                            </motion.div>
                        </FadeIn>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <SlideInLeft className="lg:col-span-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>My Itineraries</CardTitle>
                                        <CardDescription>Select an itinerary to edit</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <StaggerContainer className="space-y-2">
                                            {
                                            itineraries.map((itin, index) => (
                                                <StaggerItem key={itin.id} index={index}>
                                                    <motion.div
                                                        className={`p-3 rounded-md cursor-pointer transition-colors ${activeItineraryId === itin.id
                                                            ? "bg-[#00A699] text-white"
                                                            : "bg-gray-100 hover:bg-gray-200"
                                                            }`}
                                                        onClick={() => setActiveItineraryId(itin.id)}
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                                    >
                                                        <div className="font-medium">{itin.name}</div>
                                                        <div className="text-sm flex items-center">
                                                            <MapPin className="h-3 w-3 mr-1" />
                                                            {itin.destination}
                                                        </div>
                                                        <div className="text-sm mt-1">
                                                            {new Date(itin.startDate).toLocaleDateString()} -{" "}
                                                            {new Date(itin.endDate).toLocaleDateString()}
                                                        </div>
                                                        {
                                                        activeItineraryId === itin.id && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <Button
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    className="mt-2 text-white hover:bg-[#008b80] hover:text-white"
                                                                    onClick={() => deleteItinerary(itin.id)}
                                                                >
                                                                    <Trash2 className="h-4 w-4 mr-1" />
                                                                    Delete
                                                                </Button>
                                                            </motion.div>
                                                        )
                                                        }
                                                    </motion.div>
                                                </StaggerItem>
                                            ))
                                            }
                                        </StaggerContainer>
                                    </CardContent>
                                </Card>
                            </SlideInLeft>
                            <SlideInRight className="lg:col-span-3">
                                {
                                activeItinerary ? (
                                    <div className="space-y-6">
                                        <Card>
                                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                                <div>
                                                    <CardTitle className="text-2xl">{activeItinerary.name}</CardTitle>
                                                    <CardDescription>
                                                        {activeItinerary.destination} • {new Date(activeItinerary.startDate).toLocaleDateString()}{" "}
                                                        to {new Date(activeItinerary.endDate).toLocaleDateString()}
                                                    </CardDescription>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                        <Button variant="outline" size="sm">
                                                            <Share2 className="h-4 w-4 mr-1" />
                                                            Share
                                                        </Button>
                                                    </motion.div>
                                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                        <Button variant="outline" size="sm">
                                                            <Download className="h-4 w-4 mr-1" />
                                                            Export
                                                        </Button>
                                                    </motion.div>
                                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                        <Button size="sm" className="bg-[#00A699] hover:bg-[#008b80]" onClick={saveItinerary}>
                                                            <Save className="h-4 w-4 mr-1" />
                                                            Save
                                                        </Button>
                                                    </motion.div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <FadeIn className="mb-6">
                                                    <Label htmlFor="itinerary-notes">Trip Notes</Label>
                                                    <Textarea
                                                        id="itinerary-notes"
                                                        placeholder="Add general notes about your trip..."
                                                        className="mt-1"
                                                        value={activeItinerary.notes}
                                                        onChange={(e) => updateItineraryNotes(e.target.value)}
                                                    />
                                                </FadeIn>
                                                <FadeIn className="mb-6">
                                                    <Label htmlFor="new-day-date">Add a new day</Label>
                                                    <div className="flex gap-2 mt-1">
                                                        <Input
                                                            id="new-day-date"
                                                            type="date"
                                                            min={activeItinerary.startDate}
                                                            max={activeItinerary.endDate}
                                                            onChange={(e) => e.target.value && addDay(e.target.value)}
                                                        />
                                                    </div>
                                                </FadeIn>
                                                <StaggerContainer className="space-y-6">
                                                    {
                                                    activeItinerary.days.length === 0 ? (
                                                        <FadeIn className="text-center py-8 bg-gray-50 rounded-lg">
                                                            <p className="text-gray-500">Add a day to start planning your itinerary</p>
                                                        </FadeIn>
                                                    ) : (
                                                        activeItinerary.days.map((day, dayIndex) => (
                                                            <StaggerItem key={day.date} index={dayIndex}>
                                                                <motion.div
                                                                    whileHover={{ y: -5 }}
                                                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                                                >
                                                                    <Card className="border-l-4 border-l-[#00A699]">
                                                                        <CardHeader className="pb-3">
                                                                            <CardTitle className="text-lg flex items-center">
                                                                                <Calendar className="mr-2 h-5 w-5 text-[#00A699]" />
                                                                                {
                                                                                new Date(day.date).toLocaleDateString("en-US", {
                                                                                    weekday: "long",
                                                                                    year: "numeric",
                                                                                    month: "long",
                                                                                    day: "numeric",
                                                                                })
                                                                                }
                                                                            </CardTitle>
                                                                        </CardHeader>
                                                                        <CardContent>
                                                                            <div className="space-y-4">
                                                                                <AnimatePresence>
                                                                                    {
                                                                                    day.items.length === 0 ? (
                                                                                        <FadeIn className="text-center py-4 bg-gray-50 rounded-lg">
                                                                                            <p className="text-gray-500">No activities planned for this day</p>
                                                                                        </FadeIn>
                                                                                    ) : (
                                                                                        day.items.map((item, itemIndex) => (
                                                                                            <motion.div
                                                                                                key={item.id}
                                                                                                initial={{ opacity: 0, y: 20 }}
                                                                                                animate={{ opacity: 1, y: 0 }}
                                                                                                exit={{ opacity: 0, y: -20 }}
                                                                                                transition={{ duration: 0.3 }}
                                                                                                className="flex flex-col gap-3 p-4 bg-gray-50 rounded-md"
                                                                                            >
                                                                                                <div className="flex items-center justify-between">
                                                                                                    <div className="flex items-center">
                                                                                                        <motion.div
                                                                                                            className="mr-2"
                                                                                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                                                                                            transition={{ duration: 0.3 }}
                                                                                                        >
                                                                                                            {getCategoryIcon(item.category)}
                                                                                                        </motion.div>
                                                                                                        <div className="font-medium">
                                                                                                            {item.time} - {item.activity || "Untitled Activity"}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="flex space-x-1">
                                                                                                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                                                                                            <Button
                                                                                                                variant="ghost"
                                                                                                                size="icon"
                                                                                                                onClick={() => moveItem(dayIndex, itemIndex, "up")}
                                                                                                                disabled={itemIndex === 0}
                                                                                                                className="h-8 w-8 text-gray-500"
                                                                                                            >
                                                                                                                <ArrowUp className="h-4 w-4" />
                                                                                                            </Button>
                                                                                                        </motion.div>
                                                                                                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                                                                                            <Button
                                                                                                                variant="ghost"
                                                                                                                size="icon"
                                                                                                                onClick={() => moveItem(dayIndex, itemIndex, "down")}
                                                                                                                disabled={itemIndex === day.items.length - 1}
                                                                                                                className="h-8 w-8 text-gray-500"
                                                                                                            >
                                                                                                                <ArrowDown className="h-4 w-4" />
                                                                                                            </Button>
                                                                                                        </motion.div>
                                                                                                        <motion.div
                                                                                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                                                                                            whileTap={{ scale: 0.9 }}
                                                                                                        >
                                                                                                            <Button
                                                                                                                variant="ghost"
                                                                                                                size="icon"
                                                                                                                onClick={() => removeItem(dayIndex, itemIndex)}
                                                                                                                className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                                                                                                            >
                                                                                                                <Trash2 className="h-4 w-4" />
                                                                                                            </Button>
                                                                                                        </motion.div>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                                                    <div>
                                                                                                        <Label
                                                                                                            htmlFor={`time-${dayIndex}-${itemIndex}`}
                                                                                                            className="text-xs"
                                                                                                        >
                                                                                                            Time
                                                                                                        </Label>
                                                                                                        <Input
                                                                                                            id={`time-${dayIndex}-${itemIndex}`}
                                                                                                            type="time"
                                                                                                            value={item.time}
                                                                                                            onChange={(e) =>
                                                                                                                updateItem(dayIndex, itemIndex, "time", e.target.value)
                                                                                                            }
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <Label
                                                                                                            htmlFor={`category-${dayIndex}-${itemIndex}`}
                                                                                                            className="text-xs"
                                                                                                        >
                                                                                                            Category
                                                                                                        </Label>
                                                                                                        <Select
                                                                                                            value={item.category}
                                                                                                            onValueChange={(value) =>
                                                                                                                updateItem(dayIndex, itemIndex, "category", value)
                                                                                                            }
                                                                                                        >
                                                                                                            <SelectTrigger>
                                                                                                                <SelectValue placeholder="Select category" />
                                                                                                            </SelectTrigger>
                                                                                                            <SelectContent>
                                                                                                                <SelectItem value="transport">Transport</SelectItem>
                                                                                                                <SelectItem value="accommodation">Accommodation</SelectItem>
                                                                                                                <SelectItem value="food">Food & Dining</SelectItem>
                                                                                                                <SelectItem value="sightseeing">Sightseeing</SelectItem>
                                                                                                                <SelectItem value="activity">Activity</SelectItem>
                                                                                                            </SelectContent>
                                                                                                        </Select>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <Label
                                                                                                        htmlFor={`activity-${dayIndex}-${itemIndex}`}
                                                                                                        className="text-xs"
                                                                                                    >
                                                                                                        Activity
                                                                                                    </Label>
                                                                                                    <Input
                                                                                                        id={`activity-${dayIndex}-${itemIndex}`}
                                                                                                        value={item.activity}
                                                                                                        placeholder="What are you planning to do?"
                                                                                                        onChange={(e) =>
                                                                                                            updateItem(dayIndex, itemIndex, "activity", e.target.value)
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                                <div>
                                                                                                    <Label
                                                                                                        htmlFor={`location-${dayIndex}-${itemIndex}`}
                                                                                                        className="text-xs"
                                                                                                    >
                                                                                                        Location
                                                                                                    </Label>
                                                                                                    <Input
                                                                                                        id={`location-${dayIndex}-${itemIndex}`}
                                                                                                        value={item.location}
                                                                                                        placeholder="Where is this taking place?"
                                                                                                        onChange={(e) =>
                                                                                                            updateItem(dayIndex, itemIndex, "location", e.target.value)
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                                <div>
                                                                                                    <Label htmlFor={`notes-${dayIndex}-${itemIndex}`} className="text-xs">
                                                                                                        Notes
                                                                                                    </Label>
                                                                                                    <Textarea
                                                                                                        id={`notes-${dayIndex}-${itemIndex}`}
                                                                                                        value={item.notes}
                                                                                                        placeholder="Any additional details"
                                                                                                        onChange={(e) =>
                                                                                                            updateItem(dayIndex, itemIndex, "notes", e.target.value)
                                                                                                        }
                                                                                                        className="min-h-[80px]"
                                                                                                    />
                                                                                                </div>
                                                                                            </motion.div>
                                                                                        ))
                                                                                    )
                                                                                    }
                                                                                </AnimatePresence>
                                                                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                                                    <Button
                                                                                        variant="outline"
                                                                                        onClick={() => addItem(dayIndex)}
                                                                                        className="w-full border-dashed"
                                                                                    >
                                                                                        <Plus className="mr-2 h-4 w-4" />
                                                                                        Add Activity
                                                                                    </Button>
                                                                                </motion.div>
                                                                            </div>
                                                                        </CardContent>
                                                                    </Card>
                                                                </motion.div>
                                                            </StaggerItem>
                                                        ))
                                                    )
                                                    }
                                                </StaggerContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ) : (
                                    <FadeIn className="text-center py-12">
                                        <h3 className="text-xl font-medium mb-2">No Itinerary Selected</h3>
                                        <p className="text-gray-500">Select an itinerary from the list or create a new one</p>
                                    </FadeIn>
                                )
                                }
                            </SlideInRight>
                        </div>
                    )
                    }
                </TabsContent>
                <TabsContent value="create">
                    <FadeInUp>
                        <Card>
                            <CardHeader>
                                <CardTitle>Create New Itinerary</CardTitle>
                                <CardDescription>Fill in the details to start planning your trip</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="itinerary-name">Itinerary Name</Label>
                                            <Input
                                                id="itinerary-name"
                                                placeholder="e.g., Summer Vacation 2023"
                                                value={newItineraryName}
                                                onChange={(e) => setNewItineraryName(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="itinerary-destination">Destination</Label>
                                            <Select onValueChange={setNewItineraryDestination}>
                                                <SelectTrigger id="itinerary-destination">
                                                    <SelectValue placeholder="Select a destination" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                                                    <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                                                    <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                                                    <SelectItem value="Kerala">Kerala</SelectItem>
                                                    <SelectItem value="Goa">Goa</SelectItem>
                                                    <SelectItem value="Other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="start-date">Start Date</Label>
                                            <Input
                                                id="start-date"
                                                type="date"
                                                value={newItineraryStartDate}
                                                onChange={(e) => setNewItineraryStartDate(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="end-date">End Date</Label>
                                            <Input
                                                id="end-date"
                                                type="date"
                                                value={newItineraryEndDate}
                                                onChange={(e) => setNewItineraryEndDate(e.target.value)}
                                                min={newItineraryStartDate}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            className="bg-[#00A699] hover:bg-[#008b80]"
                                            onClick={createNewItinerary}
                                            disabled={
                                                !newItineraryName || !newItineraryDestination || !newItineraryStartDate || !newItineraryEndDate
                                            }
                                        >
                                            <FileText className="mr-2 h-4 w-4" />
                                            Create Itinerary
                                        </Button>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeInUp>
                    <FadeInUp className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">How Our AI Can Help You Plan</h3>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {
                            [
                                {
                                    icon: <MapPin className="h-6 w-6" />,
                                    title: "Destination Insights",
                                    description:
                                        "Our AI analyzes thousands of reviews to suggest the best attractions, restaurants, and activities for your destination.",
                                },
                                {
                                    icon: <Clock className="h-6 w-6" />,
                                    title: "Optimal Scheduling",
                                    description:
                                        "Our AI helps you create the perfect daily schedule, considering opening hours, travel times, and avoiding crowds.",
                                },
                                {
                                    icon: <Share2 className="h-6 w-6" />,
                                    title: "Collaborative Planning",
                                    description:
                                        "Share your itinerary with travel companions and let everyone contribute to the perfect trip plan.",
                                },
                            ].map((feature, index) => (
                                <StaggerItem key={index} index={index}>
                                    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                                        <Card>
                                            <CardContent className="pt-6">
                                                <div className="text-center mb-4">
                                                    <motion.div
                                                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f7f6] text-[#00A699] mb-3"
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.8 }}
                                                    >
                                                        {feature.icon}
                                                    </motion.div>
                                                    <h4 className="text-lg font-medium">{feature.title}</h4>
                                                </div>
                                                <p className="text-gray-600 text-center">{feature.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </StaggerItem>
                            ))
                            }
                        </StaggerContainer>
                    </FadeInUp>
                </TabsContent>
            </Tabs>
        </div>
    )
}