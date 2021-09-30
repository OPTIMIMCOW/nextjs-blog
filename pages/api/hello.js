import axios from "axios";

export default async (req, res) => {
    const URL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    const response = await axios.get(URL);
    res.status(200).json({ data: response.data })
}