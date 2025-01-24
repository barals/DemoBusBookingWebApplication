import '../styles/Booking.css'

function Booking() {
    return (
        <>
            <div id="container">
                <div id="content">
                    <div id="booking-view-section">
                        <div id="booking">
                            <div id="buttons-container">
                                <div id="booked-tickets">
                                    <input type="button" value="Book Ticket" id="book-ticket"/>
                                </div>
                                <div id="cancel-tickets">
                                    <input type="button" value="Cancel Ticket" id="cancel-ticket"/>
                                </div>
                                <div id="search-ticket">
                                    <input type="button" value="Search Ticket" id="search-tickets"/>
                                </div>
                                <div id="print-ticket">
                                    <input type="button" value="Print Ticket" id="print-tickets"/>
                                </div>
                            </div>
                        </div>
                        <div id="view">
                            <div id="view-container">
                                <div id="header-row">
                                    <div id="column-empty"></div>
                                    <div id="column-source">Source</div>
                                    <div id="column-destination">Destination</div>
                                    <div id="column-amount">Amount</div>
                                    <div id="column-travel-date">Travel Date</div>
                                    <div id="column-action"></div>
                                </div>
                                <div id="ticket-row-1">
                                    <div id="ticket-info-1">
                                        <input type="radio" name="ticket"/>
                                        <span>Ticket 1 - PNR Number</span>
                                    </div>
                                    <div id="source-1">Marathalli</div>
                                    <div id="destination-1">Whitefield</div>
                                    <div id="amount-1">25 Rs</div>
                                    <div id="travel-date-1">28 Sep 24</div>
                                    <div id="action-1">
                                        <button id="details-button-1">VIEW TICKET DETAILS</button>
                                    </div>
                                </div>
                                <div id="ticket-row-2">
                                    <div id="ticket-info-2">
                                        <input type="radio" name="ticket"/>
                                        <span>Ticket 2 - PNR Number</span>
                                    </div>
                                    <div id="source-2">Marathalli</div>
                                    <div id="destination-2">Whitefield</div>
                                    <div id="amount-2">25 Rs</div>
                                    <div id="travel-date-2">28 Sep 24</div>
                                    <div id="action-2">
                                        <button id="details-button-2">VIEW TICKET DETAILS</button>
                                    </div>
                                </div>
                                <div id="ticket-row-3">
                                    <div id="ticket-info-3">
                                        <input type="radio" name="ticket"/>
                                        <span>Ticket 3 - PNR Number</span>
                                    </div>
                                    <div id="source-3">Marathalli</div>
                                    <div id="destination-3">Whitefield</div>
                                    <div id="amount-3">25 Rs</div>
                                    <div id="travel-date-3">28 Sep 24</div>
                                    <div id="action-3">
                                        <button id="details-button-3">VIEW TICKET DETAILS</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Booking;
