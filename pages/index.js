import MyMapComponent from '../components/my-map-component';
import axios from "axios";

export default function Home() {
    
    return (
        <div className="container">
            <MyMapComponent
                isMarkerShown={true}
            />
        </div>
    )
}
