import React, { useState } from "react";
import "./Ticker.css";

function TicketBooking() {
  const [ticket, setTicket] = useState({
    event: "React Developer Conference",
    row: "A",
    seatNumber: "",
    isVIP: false
  });
  const { event, row, seatNumber, isVIP } = ticket;
  const handleSeatChange = (e) => {
    setTicket({
      ...ticket,
      seatNumber: e.target.value
    })
  }
  const handleVIPToggle = () => {
    setTicket({
      ...ticket,
      isVIP: !ticket.isVIP
    })
  }
  return(
    <div className="container">
      <h2>Book Your Ticket</h2>

      <input
        type="text"
        placeholder="Enter Seat Number"
        value={seatNumber}
        onChange={handleSeatChange}
      />

      <div className="vip-section">
        <input
          type="checkbox"
          checked={isVIP}
          onChange={handleVIPToggle}
        />
        <label>Make it a VIP Ticket</label>
      </div>
      <div className={isVIP ? "golden-border" : "regular-border"}>

        <h3>{event}</h3>

        <p>
          Row: {row} | Seat: {seatNumber || "Not selected"}
        </p>

        {isVIP && <p className="vip-text">VIP Access Granted</p>}

      </div>

    </div>
  )
}

export default TicketBooking;