import './Home.css';


function Home () {
    return (
        <div id="container">
            <div id="content">
                <div id="radio-button-content">
                    <div id="radio-button-one-way">
                        <label><input type="radio" name="trip_type" value="one_way"/> One-way Trip</label>
                    </div>
                    <div id="radio-button-return">
                        <label><input type="radio" name="trip_type" value="return"/> Return Trip</label>
                    </div>
                </div>
                <div id="container-fare-distance">
                    <div id="fare-data">
                        <div id="fare_display">
                            <label htmlFor="Fare">Fare:</label>
                            <input type="text" name="fare" id="fare" value="fare value in INR"/>
                        </div>
                    </div>
                    <div id="distance-data">
                        <div id="distance_display">
                            <label htmlFor="Distance">Distance:</label>
                            <input type="text" name="distance" id="distance" value="distance in KM"/>
                        </div>
                    </div>
                </div>
                <div id="container-calendar-travelling-class">
                    <div id="one-way-trip">
                        <label htmlFor="trip_date">Calendar of Oneway Date:</label>
                        <br/>
                        <input type="date" id="trip_date"/>
                    </div>
                    <div id="return-trip">
                        <label htmlFor="return_date">Calendar of Return Date:</label>
                        <br/>
                        <input type="date" id="return_date"/>
                    </div>
                    <div id="travelling-class">
                        <label htmlFor="travel-class">Dropdown list of Traveling Class:</label>
                        <br/>
                        <select id="travel-class">
                            <option value="ac-sleeper">AC Sleeper</option>
                            <option value="non-ac-sleeper">Non AC Sleeper</option>
                            <option value="semi-sleeper">Semi Sleeper</option>
                        </select>
                    </div>
                </div>
                <div id="container-stn-src-dst-button-search-book">
                    <div id="container-search-back-button">
                        <div id="search-button">
                            <input type="Button" value="SEARCH"/>
                        </div>
                    </div>
                    <div id="container-stn-src-dst-button">
                        <div id="stn-src-button">
                            <label>Dropdown list of Source Stations:</label>
                            <select id="source_station">
                                <option value="Marathahalli">Marathahalli</option>
                                <option value="Varthur">Varthur</option>
                                <option value="Shanthinagar">Shanthinagar</option>
                                <option value="Jayanagar">Jayanagar</option>
                                <option value="Kengeri">Kengeri</option>
                                <option value="Marathahalli-2">Marathahalli-2</option>
                                <option value="Banashankari">Banashankari</option>
                                <option value="Koramangala">Koramangala</option>
                                <option value="Yeshawanthapura">Yeshawanthapura</option>
                                <option value="Vijayanagar">Vijayanagar</option>
                                <option value="Domlur">Domlur</option>
                                <option value="Whitefield">Whitefield</option>
                                <option value="Shivajinagar">Shivajinagar</option>
                                <option value="Austin Town">Austin Town</option>
                                <option value="Kempegowda Bus Station">Kempegowda Bus Station</option>
                            </select>
                        </div>
                        <div id="stn-dst-button">
                            <label>Dropdown list of Destination Stations:</label>
                            <select id="destination_station">
                                <option value="Marathahalli">Marathahalli</option>
                                <option value="Varthur">Varthur</option>
                                <option value="Shanthinagar">Shanthinagar</option>
                                <option value="Jayanagar">Jayanagar</option>
                                <option value="Kengeri">Kengeri</option>
                                <option value="Marathahalli-2">Marathahalli-2</option>
                                <option value="Banashankari">Banashankari</option>
                                <option value="Koramangala">Koramangala</option>
                                <option value="Yeshawanthapura">Yeshawanthapura</option>
                                <option value="Vijayanagar">Vijayanagar</option>
                                <option value="Domlur">Domlur</option>
                                <option value="Whitefield">Whitefield</option>
                                <option value="Shivajinagar">Shivajinagar</option>
                                <option value="Austin Town">Austin Town</option>
                                <option value="Kempegowda Bus Station">Kempegowda Bus Station</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
