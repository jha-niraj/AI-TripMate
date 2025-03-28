"use client"

import { useState } from "react"
import { Calendar, Plus, Trash2, ArrowUp, ArrowDown, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ItineraryItem {
    id: string
    activity: string
    time: string
    notes: string
}
interface ItineraryDay {
    date: string
    items: ItineraryItem[]
}
interface ItineraryPlannerProps {
    destination: string
}
export function ItineraryPlanner({ destination }: ItineraryPlannerProps) {
    const [itinerary, setItinerary] = useState<ItineraryDay[]>([
        {
            date: new Date().toISOString().split("T")[0],
            items: [
                {
                    id: "1",
                    activity: "Breakfast at hotel",
                    time: "08:00",
                    notes: "",
                },
                {
                    id: "2",
                    activity: "Sightseeing",
                    time: "10:00",
                    notes: "",
                },
            ],
        },
    ])

    const [newDate, setNewDate] = useState("")

    const addDay = () => {
        if (!newDate) return

        // Check if date already exists
        if (itinerary.some((day) => day.date === newDate)) {
            alert("This date already exists in your itinerary")
            return
        }

        setItinerary([
            ...itinerary,
            {
                date: newDate,
                items: [],
            },
        ])
        setNewDate("")
    }

    const addItem = (dayIndex: number) => {
        const newItinerary = [...itinerary]
        newItinerary[dayIndex].items.push({
            id: Date.now().toString(),
            activity: "",
            time: "12:00",
            notes: "",
        })
        setItinerary(newItinerary)
    }

    const updateItem = (dayIndex: number, itemIndex: number, field: keyof ItineraryItem, value: string) => {
        const newItinerary = [...itinerary]
        newItinerary[dayIndex].items[itemIndex][field] = value
        setItinerary(newItinerary)
    }

    const removeItem = (dayIndex: number, itemIndex: number) => {
        const newItinerary = [...itinerary]
        newItinerary[dayIndex].items.splice(itemIndex, 1)
        setItinerary(newItinerary)
    }

    const moveItem = (dayIndex: number, itemIndex: number, direction: "up" | "down") => {
        if (
            (direction === "up" && itemIndex === 0) ||
            (direction === "down" && itemIndex === itinerary[dayIndex].items.length - 1)
        ) {
            return
        }

        const newItinerary = [...itinerary]
        const items = [...newItinerary[dayIndex].items]
        const newIndex = direction === "up" ? itemIndex - 1 : itemIndex + 1

            // Swap items
            ;[items[itemIndex], items[newIndex]] = [items[newIndex], items[itemIndex]]

        newItinerary[dayIndex].items = items
        setItinerary(newItinerary)
    }

    const saveItinerary = () => {
        // In a real app, this would save to a database
        alert("Itinerary saved successfully!")
        console.log(itinerary)
    }

    // Sort days by date
    const sortedItinerary = [...itinerary].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6">Plan Your Itinerary</h2>
            <Card className="mb-6">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-[#00A699]" />
                        Your {destination} Itinerary
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-end gap-4">
                            <div className="flex-1">
                                <Label htmlFor="new-date" className="text-sm">
                                    Add a new day
                                </Label>
                                <Input
                                    id="new-date"
                                    type="date"
                                    value={newDate}
                                    onChange={(e) => setNewDate(e.target.value)}
                                    min={new Date().toISOString().split("T")[0]}
                                />
                            </div>
                            <Button onClick={addDay} className="bg-[#00A699] hover:bg-[#008b80]">
                                <Plus className="mr-2 h-4 w-4" />
                                Add Day
                            </Button>
                        </div>
                        {
                            sortedItinerary.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">Add a day to start planning your itinerary</div>
                            ) : (
                                <div className="space-y-6 mt-4">
                                    {
                                        sortedItinerary.map((day, dayIndex) => (
                                            <div key={day.date} className="border rounded-lg p-4">
                                                <h3 className="font-medium mb-4">
                                                    {
                                                        new Date(day.date).toLocaleDateString("en-US", {
                                                            weekday: "long",
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        })
                                                    }
                                                </h3>
                                                <div className="space-y-4">
                                                    {
                                                        day.items.map((item, itemIndex) => (
                                                            <div key={item.id} className="flex flex-col sm:flex-row gap-3 p-3 bg-gray-50 rounded-md">
                                                                <div className="sm:w-1/4">
                                                                    <Label htmlFor={`time-${dayIndex}-${itemIndex}`} className="text-xs">
                                                                        Time
                                                                    </Label>
                                                                    <Input
                                                                        id={`time-${dayIndex}-${itemIndex}`}
                                                                        type="time"
                                                                        value={item.time}
                                                                        onChange={(e) => updateItem(dayIndex, itemIndex, "time", e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <Label htmlFor={`activity-${dayIndex}-${itemIndex}`} className="text-xs">
                                                                        Activity
                                                                    </Label>
                                                                    <Input
                                                                        id={`activity-${dayIndex}-${itemIndex}`}
                                                                        value={item.activity}
                                                                        placeholder="What are you planning to do?"
                                                                        onChange={(e) => updateItem(dayIndex, itemIndex, "activity", e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <Label htmlFor={`notes-${dayIndex}-${itemIndex}`} className="text-xs">
                                                                        Notes
                                                                    </Label>
                                                                    <Input
                                                                        id={`notes-${dayIndex}-${itemIndex}`}
                                                                        value={item.notes}
                                                                        placeholder="Any additional details"
                                                                        onChange={(e) => updateItem(dayIndex, itemIndex, "notes", e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="flex items-end space-x-1">
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        onClick={() => moveItem(dayIndex, itemIndex, "up")}
                                                                        disabled={itemIndex === 0}
                                                                        className="h-8 w-8"
                                                                    >
                                                                        <ArrowUp className="h-4 w-4" />
                                                                    </Button>
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        onClick={() => moveItem(dayIndex, itemIndex, "down")}
                                                                        disabled={itemIndex === day.items.length - 1}
                                                                        className="h-8 w-8"
                                                                    >
                                                                        <ArrowDown className="h-4 w-4" />
                                                                    </Button>
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        onClick={() => removeItem(dayIndex, itemIndex)}
                                                                        className="h-8 w-8 text-red-500 hover:text-red-700"
                                                                    >
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                    <Button variant="outline" onClick={() => addItem(dayIndex)} className="w-full border-dashed">
                                                        <Plus className="mr-2 h-4 w-4" />
                                                        Add Activity
                                                    </Button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                        {
                            sortedItinerary.length > 0 && (
                                <Button onClick={saveItinerary} className="bg-[#00A699] hover:bg-[#008b80] mt-4">
                                    <Save className="mr-2 h-4 w-4" />
                                    Save Itinerary
                                </Button>
                            )
                        }
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}