interface GoogleMapProps {
    destination: string
}
export function GoogleMap({ destination }: GoogleMapProps) {
    // This is a placeholder for a real Google Maps integration
    // In a real application, you would use the Google Maps API
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Map</h2>
            <div className="border rounded-lg overflow-hidden h-[400px] bg-gray-100 flex items-center justify-center">
                <div className="text-center p-6">
                    <h3 className="text-xl font-medium mb-2">Google Map</h3>
                    <p className="text-gray-600 mb-4">Interactive map of {destination}</p>
                    <p className="text-sm text-gray-500">(This is a placeholder for Google Maps integration)</p>
                </div>
            </div>
        </div>
    )
}

