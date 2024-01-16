const inputArray = [
  "2708-6;P00003;2023-11-22 13:34:00.000;;;UTC+0700;93.0;97.0;88.0;65.0;f146a27c-fb7b-4cbc-9d01-0621926006b3",
  "2708-6;P00003;2023-11-23 12:56:00.000;;;UTC+0700;94.0;99.0;84.0;53.0;2b01e5a9-21dd-4133-b269-4fc3bfcbeaa7",
  "2708-6;P00003;2023-11-24 13:35:00.000;;;UTC+0700;94.0;99.0;84.0;60.0;e0ed343a-3987-4de0-b525-9fab9d8a27ed",
  "2708-6;P00003;2023-11-25 14:07:00.000;;;UTC+0700;94.0;99.0;83.0;53.0;3f55a2f8-adc5-45dc-8a94-d87aad7ad656",
  "2708-6;P00003;2023-11-26 13:34:00.000;;;UTC+0700;94.0;99.0;89.0;61.0;237ec32e-4a36-47d1-86d7-60696765b9e8",
  "2708-6;P00003;2023-11-27 07:12:00.000;;;UTC+0700;95.0;98.0;92.0;64.0;dba7df55-6c12-4fdc-b16b-57f8732cc64d",
  "2708-6;P00003;2023-11-27 15:02:00.000;;;UTC+0700;95.0;100.0;88.0;51.0;d2673eed-bb4c-4c75-9dc5-860ea2041eea",
];

const resultArray = [];

inputArray.forEach((entry) => {
  const [
    _,
    __,
    dateOld,
    ____,
    _____,
    ______,
    spo2,
    ________,
    _________,
    __________,
    ___________,
    ____________,
    _____________,
    ______________,
    _______________,
  ] = entry.split(";");

  const [date, time] = dateOld.split(" ");

  if (
    resultArray.length === 0 ||
    resultArray[resultArray.length - 1].date !== date
  ) {
    resultArray.push({
      date,
      time: [time],
      rr: [null],
      spo2: [parseInt(spo2)],
    });
  } else {
    resultArray.forEach((dateLoop) => {
      if (dateLoop.date === date) {
        dateLoop.time.push(time);
        dateLoop.rr.push(null);
        dateLoop.spo2.push(parseInt(spo2));
      }
    });
  }
});

/* db.patients.updateOne(
  { patientId: "P00003" },
  {
    $push: {
      rrSpo2History: {
        $each: [
          {
    date: '2023-11-22',
    time: [ '13:34:00.000' ],
    rr: [ null ],
    spo2: [ 93 ]
  },
  {
    date: '2023-11-23',
    time: [ '12:56:00.000' ],
    rr: [ null ],
    spo2: [ 94 ]
  },
  {
    date: '2023-11-24',
    time: [ '13:35:00.000' ],
    rr: [ null ],
    spo2: [ 94 ]
  },
  {
    date: '2023-11-25',
    time: [ '14:07:00.000' ],
    rr: [ null ],
    spo2: [ 94 ]
  },
  {
    date: '2023-11-26',
    time: [ '13:34:00.000' ],
    rr: [ null ],
    spo2: [ 94 ]
  },
  {
    date: '2023-11-27',
    time: [ '07:12:00.000', '15:02:00.000' ],
    rr: [ null, null ],
    spo2: [ 95, 95 ]
  }
        ],
      },
    },
  }
); */

console.log(resultArray);
