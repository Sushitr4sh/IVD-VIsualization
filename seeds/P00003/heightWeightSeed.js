const inputArray = [
  "29463-7;P00003;2023-11-22 13:00:10.108;;;UTC+0700;62.0;31.430.317;;31.145.145;3e9f3211-542d-4ea5-a6e0-8849cb92489d;8302-2;P00003;2023-11-22 13:00:10.314;;;UTC+0700;168.0;d337c115-8fb9-4faa-bb16-1dd9891a8126",
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
    weight,
    ________,
    _________,
    __________,
    ___________,
    ____________,
    _____________,
    ______________,
    _______________,
    ________________,
    _________________,
    height = 159,
    ___________________,
  ] = entry.split(";");

  const [date, time] = dateOld.split(" ");

  if (
    resultArray.length === 0 ||
    resultArray[resultArray.length - 1].date !== date
  ) {
    resultArray.push({
      date,
      time: [time],
      weight: [parseInt(weight)],
      height: [parseInt(height)],
    });
  } else {
    resultArray.forEach((dateLoop) => {
      if (dateLoop.date === date) {
        dateLoop.time.push(time);
        dateLoop.weight.push(parseInt(weight));
        dateLoop.height.push(parseInt(height));
      }
    });
  }
});

/* db.patients.updateOne(
  { patientId: "P00003" },
  {
    $push: {
      heightWeightHistory: {
        $each: [
          {
    date: '2023-11-22',
    time: [ '13:00:10.108' ],
    weight: [ 62 ],
    height: [ 168 ]
  }
        ],
      },
    },
  }
); */

console.log(resultArray);
