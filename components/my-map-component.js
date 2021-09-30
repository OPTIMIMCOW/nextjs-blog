import { useLoadScript, InfoWindow, GoogleMap, Marker } from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import { useState } from "react";

const libraries = ["places"];

const containerStyle = {
	width: '400px',
	height: '400px'
};

const center = {
	lat: 43.65,
	lng: -70.383,
};

export default function Map() {

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.googleApiKey,
		libraries,
	});

	if (loadError) return "error loading maps";
	if (!isLoaded) return "loading map";

	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			zoom={8}
			center={center}
		>
		</GoogleMap>
	);
}