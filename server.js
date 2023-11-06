const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const availableTimes = {
  "Sat Nov 04 2023 00:00:00 GMT-0400 (Eastern Daylight Time)": [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "4:00 PM",
  ],
  "Sun Nov 05 2023 00:00:00 GMT-0400 (Eastern Daylight Time)": [
    "Our office is closed today",
  ],
  "Mon Nov 06 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "11:00 AM",
    "2:00 PM",
    "4:00 PM",
  ],
  "Tue Nov 07 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "3:00 PM",
  ],
  "Wed Nov 08 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "4:00 PM",
  ],
  "Thu Nov 09 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  "Fri Nov 10 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "1:00 PM",
    "2:00 PM",
    "4:00 PM",
  ],
  "Sat Nov 11 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "10:00 AM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  "Sun Nov 12 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "Our office is closed today",
  ],
  "Mon Nov 13 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  "Tue Nov 14 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  "Wed Nov 15 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  "Thu Nov 16 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  "Fri Nov 17 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  "Sat Nov 18 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
  "Sun Nov 19 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "Our office is closed today",
  ],
  "Mon Nov 20 2023 00:00:00 GMT-0500 (Eastern Standard Time)": [
    "9:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ],
};

app.get("/api/appointments", (req, res) => {
  const { date } = req.query;
  console.log(`Received request for date: ${date}`);
  const availableTimesForDate = availableTimes[date] || [];
  console.log(`Sending available times for ${date} ${availableTimesForDate}`);
  res.json({ times: availableTimesForDate });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
