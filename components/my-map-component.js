import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose"

const MyMapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + process.env.googleApiKey,
		loadingElement: <div style={{ width: `500px`, height: `500px`  }} />,
		containerElement: <div style={{ width: `500px`, height: `500px`  }} />,
		mapElement: <div style={{ width: `500px`, height: `500px`  }} />,
	}),
	withScriptjs,
	withGoogleMap)(({ isMarkerShown }) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: -34, lng: 150 }}
	>
		{isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
	</GoogleMap>
);

export default MyMapComponent;