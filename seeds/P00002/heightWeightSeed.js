const inputArray = [
  "29463-7;P00002;2023-11-22 07:50:05.355;;;UTC+0700;58.0;38.672.527;;26.932.455;0619f9e9-9284-491c-84cf-95a01883aad0;8302-2;P00002;2023-11-22 07:50:05.461;;;UTC+0700;159.0;4ff7aa58-7d3a-4677-99b4-044b4e178037",
  "29463-7;P00002;2023-11-22 13:34:29.162;;;UTC+0700;58.0;3.604.143;;2.809.641;ad3e4ae6-45af-46fc-9524-11591ae62a04;8302-2;P00002;2023-11-22 13:33:14.756;;;UTC+0700;159.0;189081b3-bc7d-4087-ba30-adc1096b04b6",
  "29463-7;P00002;2023-11-22 19:06:27.962;;;UTC+0700;58.0;3.787.515;;27.285.202;930de80e-b81e-4ee2-9296-aca48739d940;",
  "29463-7;P00002;2023-11-23 23:57:50.726;;;UTC+0700;59.0;36.754.356;;27.781.025;e370842e-23f1-4fec-bf2f-4992abefd883;",
  "29463-7;P00002;2023-11-25 04:15:04.619;;;UTC+0700;59.0;3.169.711;;29.514.158;1ce2385f-25f1-49d9-8f76-5fd7a7401cf8;",
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
  { patientId: "P00002" },
  {
    $push: {
      heightWeightHistory: {
        $each: [
          {
    date: '2023-11-22',
    time: [ '07:50:05.355', '13:34:29.162', '19:06:27.962' ],
    weight: [ 58, 58, 58 ],
    height: [ 159, 159, 159 ]
  },
  {
    date: '2023-11-23',
    time: [ '23:57:50.726' ],
    weight: [ 59 ],
    height: [ 159 ]
  },
  {
    date: '2023-11-25',
    time: [ '04:15:04.619' ],
    weight: [ 59 ],
    height: [ 159 ]
  }
        ],
      },
    },
  }
); */

console.log(resultArray);
