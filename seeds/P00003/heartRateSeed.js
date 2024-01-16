const inputArray = [
  "8867-4;P00003;2023-11-22 12:00:00.000;;;74.0;1;81.0;67.0;UTC+0700;da5e8d64-707c-4801-87fb-b767bba4eaa8",
  "8867-4;P00003;2023-11-22 13:00:00.000;;;65.0;1;85.0;54.0;UTC+0700;dec923d8-2453-459f-a222-becbc813e0ea",
  "8867-4;P00003;2023-11-22 14:00:00.000;;;55.0;1;66.0;51.0;UTC+0700;1ef09984-7fd1-438e-8f53-c791a1379d9c",
  "8867-4;P00003;2023-11-22 15:00:00.000;;;55.0;1;63.0;49.0;UTC+0700;4d17e674-4517-4f23-8bd3-6b8c14a7f212",
  "8867-4;P00003;2023-11-22 16:00:00.000;;;54.0;1;62.0;49.0;UTC+0700;f459b563-7f7c-40e6-adbd-92f9bc3ab094",
  "8867-4;P00003;2023-11-22 17:00:00.000;;;55.0;1;67.0;50.0;UTC+0700;f0f60e6e-4542-42df-b4d1-5bb6d6c20683",
  "8867-4;P00003;2023-11-22 18:00:00.000;;;55.0;1;78.0;52.0;UTC+0700;f3e05035-91dc-43ed-bb00-d42e8a640fa0",
  "8867-4;P00003;2023-11-22 19:00:00.000;;;57.0;1;71.0;53.0;UTC+0700;1869225b-69dd-4ce3-8ae2-51163be6e207",
  "8867-4;P00003;2023-11-22 20:00:00.000;;;56.0;1;60.0;54.0;UTC+0700;9ae117ff-44ed-4a0e-852e-22afeeacc88e",
  "8867-4;P00003;2023-11-22 21:00:00.000;;;75.0;1;98.0;55.0;UTC+0700;9da4c754-835d-4b5c-9c68-49061e7768f5",
  "8867-4;P00003;2023-11-22 22:00:00.000;;;84.0;1;113.0;72.0;UTC+0700;d7c83986-cb87-4b45-8fa7-9fc860800a1f",
  "8867-4;P00003;2023-11-23 00:00:00.000;;;83.0;1;106.0;71.0;UTC+0700;c201d8a4-d02c-4e00-94db-0a30935197e6",
  "8867-4;P00003;2023-11-23 01:00:00.000;;;83.0;1;108.0;72.0;UTC+0700;3539723f-13bb-4d43-b3b1-9c52030415ca",
  "8867-4;P00003;2023-11-23 02:00:00.000;;;81.0;1;99.0;69.0;UTC+0700;06f76e2d-7844-41b1-98a2-caee8d389fa2",
  "8867-4;P00003;2023-11-23 03:00:00.000;;;71.0;1;97.0;63.0;UTC+0700;ffc3054a-5971-467e-88c0-63551ed4c68e",
  "8867-4;P00003;2023-11-23 04:00:00.000;;;71.0;1;99.0;58.0;UTC+0700;4b979c28-a7c7-40e8-acd6-e365dbdfa954",
  "8867-4;P00003;2023-11-23 05:00:00.000;;;71.0;1;88.0;60.0;UTC+0700;94b3a299-d04c-4a0c-8cbe-cce1f7ff962e",
  "8867-4;P00003;2023-11-23 06:00:00.000;;;68.0;1;87.0;61.0;UTC+0700;36cd8a16-5448-4c49-9b2c-fd2a4588104a",
  "8867-4;P00003;2023-11-23 07:00:00.000;;;67.0;1;92.0;57.0;UTC+0700;4406dae1-efbd-4a36-9121-c6bab79a3b45",
  "8867-4;P00003;2023-11-23 08:00:00.000;;;66.0;1;74.0;63.0;UTC+0700;d9e14fd6-f007-463f-a262-90ef19d9bd9b",
  "8867-4;P00003;2023-11-23 08:00:00.000;;;65.0;1;102.0;56.0;UTC+0700;0c3cf63e-04b4-403b-9472-745f95516957",
  "8867-4;P00003;2023-11-23 09:00:00.000;;;73.0;1;104.0;55.0;UTC+0700;74b1bc6f-7cca-49a1-9f1e-4040fd59dfd6",
  "8867-4;P00003;2023-11-23 10:00:00.000;;;77.0;1;96.0;65.0;UTC+0700;72b7a127-2de7-400e-b929-2b863ad8f16b",
  "8867-4;P00003;2023-11-23 11:00:00.000;;;68.0;1;71.0;66.0;UTC+0700;4e2867cf-63cd-4d24-aa25-68cd04b9c5fd",
  "8867-4;P00003;2023-11-23 11:00:00.000;;;66.0;1;90.0;56.0;UTC+0700;47799af2-b536-4ac7-aa05-e830e1c2c274",
  "8867-4;P00003;2023-11-23 11:14:43.358;;;59.0;1;92.0;52.0;UTC+0700;33884f65-3ade-423d-9f85-5b34f80cf40c",
  "8867-4;P00003;2023-11-23 12:00:00.000;;;64.0;1;92.0;53.0;UTC+0700;4bd8ee2a-534f-4608-94fc-b4e795934969",
  "8867-4;P00003;2023-11-23 13:00:00.000;;;53.0;1;67.0;50.0;UTC+0700;527f7069-40e5-4344-a60b-d0d3addeae40",
  "8867-4;P00003;2023-11-23 14:00:00.000;;;52.0;1;61.0;47.0;UTC+0700;2a96c420-fa12-4b90-889c-d9be4cd895ae",
  "8867-4;P00003;2023-11-23 15:00:00.000;;;51.0;1;71.0;46.0;UTC+0700;304daa9b-e5c5-48bf-9658-71f776cd98a5",
  "8867-4;P00003;2023-11-23 16:00:00.000;;;50.0;1;68.0;46.0;UTC+0700;4b76436c-0916-49fe-95ab-b9f778e1d1d4",
  "8867-4;P00003;2023-11-23 17:00:00.000;;;52.0;1;78.0;47.0;UTC+0700;616be7d1-0b10-4897-bbba-743e6a182272",
  "8867-4;P00003;2023-11-23 18:00:00.000;;;53.0;1;91.0;49.0;UTC+0700;8b63d275-8205-4f37-8ad8-00bd9e862392",
  "8867-4;P00003;2023-11-23 19:00:00.000;;;53.0;1;78.0;48.0;UTC+0700;3266172d-4c1f-4c02-8f77-6e1299a91085",
  "8867-4;P00003;2023-11-23 20:00:00.000;;;58.0;1;84.0;51.0;UTC+0700;0cf0eda7-aaed-4fa4-831e-2d3038f6eef9",
  "8867-4;P00003;2023-11-23 21:00:00.000;;;82.0;1;103.0;67.0;UTC+0700;347b679a-7b30-471a-bd88-edbbbe3010c9",
  "8867-4;P00003;2023-11-23 22:00:00.000;;;93.0;1;158.0;68.0;UTC+0700;d9d85f78-31a1-41ea-9795-6181c1f64c93",
  "8867-4;P00003;2023-11-23 23:00:00.000;;;84.0;1;105.0;52.0;UTC+0700;703b0c1c-4b00-4235-8007-cd91091ec5bd",
  "8867-4;P00003;2023-11-24 00:00:00.000;;;81.0;1;110.0;67.0;UTC+0700;6aac1c7e-ea68-41b1-8551-510bc8b46a26",
  "8867-4;P00003;2023-11-24 01:00:00.000;;;82.0;1;108.0;71.0;UTC+0700;2e10cb9a-b6c8-40ff-a0a5-d4f4c3f4063e",
  "8867-4;P00003;2023-11-24 02:00:00.000;;;78.0;1;110.0;67.0;UTC+0700;8cab3a8c-53aa-496a-9ce8-595cba7c991f",
  "8867-4;P00003;2023-11-24 03:00:00.000;;;69.0;1;91.0;57.0;UTC+0700;7f8d4ad9-5cf1-460b-aa16-154b3f184241",
  "8867-4;P00003;2023-11-24 04:00:00.000;;;74.0;1;96.0;60.0;UTC+0700;19a37e28-e92c-4113-bca3-062592da58f7",
  "8867-4;P00003;2023-11-24 05:00:00.000;;;72.0;1;94.0;62.0;UTC+0700;5d2c12fb-10e2-45b4-9edc-2c75eea4f8e4",
  "8867-4;P00003;2023-11-24 06:00:00.000;;;66.0;1;90.0;57.0;UTC+0700;ee8407ef-dac8-43a7-876c-af821a779e5c",
  "8867-4;P00003;2023-11-24 07:00:00.000;;;66.0;1;88.0;52.0;UTC+0700;786eb486-af35-4d9d-b214-593f2486be9a",
  "8867-4;P00003;2023-11-24 08:00:00.000;;;66.0;1;94.0;53.0;UTC+0700;aa3ba31c-2d3e-494d-bf01-9d4f01dabf26",
  "8867-4;P00003;2023-11-24 09:00:00.000;;;68.0;1;91.0;59.0;UTC+0700;ecc0aa31-727d-4409-a13b-ee77144b7894",
  "8867-4;P00003;2023-11-24 09:00:00.000;;;68.0;1;111.0;54.0;UTC+0700;8a3612b3-6e61-43b2-b56f-247320d79d36",
  "8867-4;P00003;2023-11-24 10:00:00.000;;;78.0;1;95.0;69.0;UTC+0700;34ae44f1-7b3e-4560-960c-765ca297467b",
  "8867-4;P00003;2023-11-24 11:00:00.000;;;74.0;1;100.0;64.0;UTC+0700;df144e42-e986-4473-9cd3-1099231297aa",
  "8867-4;P00003;2023-11-24 09:39:40.249;;;59.0;1;101.0;60.0;UTC+0700;c330f8a7-d468-4946-aded-1809e641c8a5",
  "8867-4;P00003;2023-11-24 12:00:00.000;;;64.0;1;90.0;55.0;UTC+0700;4fd83803-5489-4f62-88d6-49183deb093d",
  "8867-4;P00003;2023-11-24 13:00:00.000;;;60.0;1;82.0;54.0;UTC+0700;aad953df-2754-47ff-b3fd-144bbe53d206",
  "8867-4;P00003;2023-11-24 14:00:00.000;;;56.0;1;73.0;48.0;UTC+0700;a27b26b8-5638-4a2c-9018-a7c11a8e598e",
  "8867-4;P00003;2023-11-24 15:00:00.000;;;54.0;1;75.0;48.0;UTC+0700;563e5339-8238-4075-9572-ec496e8135a2",
  "8867-4;P00003;2023-11-24 16:00:00.000;;;51.0;1;64.0;46.0;UTC+0700;e21c7234-84cb-4adc-afbe-a1f7773b8af0",
  "8867-4;P00003;2023-11-24 17:00:00.000;;;52.0;1;72.0;48.0;UTC+0700;44e2b178-a145-447e-b83d-46b58be78f1d",
  "8867-4;P00003;2023-11-24 18:00:00.000;;;51.0;1;68.0;47.0;UTC+0700;26bf0970-7558-40e9-b236-5b61b201c06b",
  "8867-4;P00003;2023-11-24 19:00:00.000;;;52.0;1;88.0;48.0;UTC+0700;b4ff12bf-adfe-463a-9f61-8602bfa7ac93",
  "8867-4;P00003;2023-11-24 20:00:00.000;;;55.0;1;95.0;50.0;UTC+0700;e391aa09-545c-4315-a1b9-ff2840ad1f49",
  "8867-4;P00003;2023-11-24 21:00:00.000;;;75.0;1;98.0;62.0;UTC+0700;bd4fe940-19cc-4fab-8b74-b289a988c80a",
  "8867-4;P00003;2023-11-24 22:00:00.000;;;97.0;1;161.0;66.0;UTC+0700;2f0c1e36-6606-44f9-bd52-290c010cf3aa",
  "8867-4;P00003;2023-11-24 23:00:00.000;;;86.0;1;111.0;67.0;UTC+0700;5ae20267-31bd-4176-8e42-ab2ff2fb11b8",
  "8867-4;P00003;2023-11-25 00:00:00.000;;;83.0;1;102.0;68.0;UTC+0700;231f027b-bf0b-4aaf-93e9-89574287ea4d",
  "8867-4;P00003;2023-11-25 01:00:00.000;;;81.0;1;100.0;72.0;UTC+0700;0c10fdd2-8ce3-4e86-b806-e63be780b759",
  "8867-4;P00003;2023-11-25 02:00:00.000;;;78.0;1;93.0;68.0;UTC+0700;8632bab9-af31-4a85-b5eb-c5b32cfbc3e8",
  "8867-4;P00003;2023-11-25 03:00:00.000;;;81.0;1;111.0;65.0;UTC+0700;ec55ce75-aeb2-4bba-9ec1-0be0257e59e5",
  "8867-4;P00003;2023-11-25 04:00:00.000;;;73.0;1;93.0;61.0;UTC+0700;da264ef4-64f7-4f0e-9175-30491e2fe695",
  "8867-4;P00003;2023-11-25 05:00:00.000;;;74.0;1;90.0;60.0;UTC+0700;aa6c7712-5ad9-4eb2-b8d6-58612e02ba2e",
  "8867-4;P00003;2023-11-25 06:00:00.000;;;67.0;1;86.0;61.0;UTC+0700;fad77c31-b9b3-4840-b316-3de384bb9bd1",
  "8867-4;P00003;2023-11-25 07:00:00.000;;;71.0;1;113.0;58.0;UTC+0700;9a45ee90-691b-4f88-a40f-d1d94951ebdb",
  "8867-4;P00003;2023-11-25 08:00:00.000;;;69.0;1;103.0;55.0;UTC+0700;04ad6116-b22b-46ec-86b8-2463e01058f6",
  "8867-4;P00003;2023-11-25 14:00:00.000;;;53.0;1;72.0;48.0;UTC+0700;7d471ae9-5c92-47dc-b9ad-57b8e42e44c7",
  "8867-4;P00003;2023-11-25 09:00:00.000;;;73.0;1;117.0;56.0;UTC+0700;9bad54de-7ea3-4393-b012-2fbc6f10e0a5",
  "8867-4;P00003;2023-11-25 10:00:00.000;;;79.0;1;104.0;64.0;UTC+0700;23082da5-9b48-4315-a91f-0fc23a0b0971",
  "8867-4;P00003;2023-11-25 11:00:00.000;;;66.0;1;86.0;55.0;UTC+0700;612b0215-5f9e-411c-9d18-d213b691f95f",
  "8867-4;P00003;2023-11-25 12:00:00.000;;;71.0;1;83.0;61.0;UTC+0700;baf81e11-f3a9-443c-adcb-d5391a458a58",
  "8867-4;P00003;2023-11-25 13:00:00.000;;;61.0;1;89.0;51.0;UTC+0700;7d9a6cca-bcf7-46d3-bb33-c7ad59f4525d",
  "8867-4;P00003;2023-11-25 14:00:00.000;;;53.0;1;58.0;52.0;UTC+0700;dfc3fce9-4023-4e1c-85c0-94ecc6faefea",
  "8867-4;P00003;2023-11-25 15:00:00.000;;;52.0;1;79.0;47.0;UTC+0700;add887c9-0874-46e3-affc-ad3a116e6a3f",
  "8867-4;P00003;2023-11-25 16:00:00.000;;;51.0;1;64.0;48.0;UTC+0700;87b0a40d-a618-42b5-84a5-3e9b2c5b7120",
  "8867-4;P00003;2023-11-25 17:00:00.000;;;51.0;1;71.0;47.0;UTC+0700;640debba-330e-467e-b6da-f6aed3377c94",
  "8867-4;P00003;2023-11-25 18:00:00.000;;;53.0;1;73.0;48.0;UTC+0700;ad31993f-9f51-419d-a03f-db13d708a046",
  "8867-4;P00003;2023-11-25 19:00:00.000;;;54.0;1;69.0;52.0;UTC+0700;0a6554cd-cb87-4c53-836b-0c2fc3f8d5ae",
  "8867-4;P00003;2023-11-25 20:00:00.000;;;58.0;1;85.0;50.0;UTC+0700;ed1bb23f-c9d2-40c5-b57e-9e04fe7c7415",
  "8867-4;P00003;2023-11-25 21:00:00.000;;;76.0;1;94.0;53.0;UTC+0700;9515e04c-51d4-496a-90d2-7a95e8ece6b9",
  "8867-4;P00003;2023-11-25 22:00:00.000;;;83.0;1;159.0;67.0;UTC+0700;c76bfd9b-e7d7-432d-9578-68a88e24e465",
  "8867-4;P00003;2023-11-25 23:00:00.000;;;75.0;1;125.0;54.0;UTC+0700;3de32247-95cb-44b5-b3ef-7edaec24f9b2",
  "8867-4;P00003;2023-11-26 00:00:00.000;;;65.0;1;71.0;55.0;UTC+0700;7c47b79c-5014-4ed3-ad33-fa587c6f70db",
  "8867-4;P00003;2023-11-26 01:00:00.000;;;84.0;1;100.0;73.0;UTC+0700;4ef6c31d-603c-4289-b8d2-ce0973880a7b",
  "8867-4;P00003;2023-11-26 02:00:00.000;;;76.0;1;108.0;64.0;UTC+0700;1c28ed20-00c8-43f4-8bf9-9f1643708c4e",
  "8867-4;P00003;2023-11-26 03:00:00.000;;;71.0;1;90.0;59.0;UTC+0700;be3e4336-38d4-49e2-8db5-4198e8222f29",
  "8867-4;P00003;2023-11-25 23:54:00.556;;;59.0;1;95.0;62.0;UTC+0700;5cc63c96-3479-453d-986c-14b1e4954085",
  "8867-4;P00003;2023-11-26 04:00:00.000;;;71.0;1;91.0;62.0;UTC+0700;1781a6db-ef36-4727-b166-4e5fa3d71460",
  "8867-4;P00003;2023-11-26 05:00:00.000;;;68.0;1;93.0;60.0;UTC+0700;a9b440d6-26c3-46a4-9fd4-7d1373693e47",
  "8867-4;P00003;2023-11-26 06:00:00.000;;;68.0;1;83.0;60.0;UTC+0700;e7fb2158-6a39-41aa-b604-ba0a8dd6dafd",
  "8867-4;P00003;2023-11-26 07:00:00.000;;;66.0;1;87.0;56.0;UTC+0700;5a188a5a-6f0c-4745-ae7f-d44c5db557d8",
  "8867-4;P00003;2023-11-26 08:00:00.000;;;67.0;1;99.0;54.0;UTC+0700;b7f8b241-7a19-45f9-b375-9bd909b71b4a",
  "8867-4;P00003;2023-11-26 09:00:00.000;;;73.0;1;105.0;55.0;UTC+0700;2714c2eb-6d06-46c7-ac2a-55c0f4ee07c1",
  "8867-4;P00003;2023-11-26 10:00:00.000;;;79.0;1;94.0;67.0;UTC+0700;84d392ae-9b4f-4300-82c5-22769d863caf",
  "8867-4;P00003;2023-11-26 11:00:00.000;;;73.0;1;104.0;62.0;UTC+0700;1e667fd6-8a22-4ba1-9555-70390eafed49",
  "8867-4;P00003;2023-11-26 12:00:00.000;;;70.0;1;95.0;60.0;UTC+0700;264a6ebc-db52-4048-818a-8a21ee04c278",
  "8867-4;P00003;2023-11-26 13:00:00.000;;;61.0;1;93.0;51.0;UTC+0700;2de07cc4-72d0-447a-b577-6fc0c357fcb6",
  "8867-4;P00003;2023-11-26 14:00:00.000;;;54.0;1;65.0;48.0;UTC+0700;3d24069b-2675-4cee-a8b2-ce909056fc9f",
  "8867-4;P00003;2023-11-26 15:00:00.000;;;52.0;1;68.0;48.0;UTC+0700;a76f2c2a-f9df-4e6f-a4f5-e34e58be7235",
  "8867-4;P00003;2023-11-26 16:00:00.000;;;51.0;1;71.0;46.0;UTC+0700;b89a339c-b037-46f0-bf93-0067120bf8d4",
  "8867-4;P00003;2023-11-26 17:00:00.000;;;51.0;1;69.0;46.0;UTC+0700;62ebb047-3eb1-4445-895d-a7c84bfb0013",
  "8867-4;P00003;2023-11-26 18:00:00.000;;;50.0;1;71.0;46.0;UTC+0700;b86af8dd-2b92-419c-a938-0ff2db33df78",
  "8867-4;P00003;2023-11-26 19:00:00.000;;;53.0;1;79.0;48.0;UTC+0700;a6ac0cbc-afbc-4a4f-94cd-be9cdd31154f",
  "8867-4;P00003;2023-11-26 20:00:00.000;;;56.0;1;85.0;48.0;UTC+0700;874f423b-9cb3-4add-be07-530b1faace13",
  "8867-4;P00003;2023-11-26 21:00:00.000;;;76.0;1;102.0;54.0;UTC+0700;8d58b604-8bbd-46f2-a8df-44fcf7d78895",
  "8867-4;P00003;2023-11-26 23:00:00.000;;;84.0;1;109.0;72.0;UTC+0700;73de23b0-be03-42b6-86d7-b16aecaf7779",
  "8867-4;P00003;2023-11-27 00:00:00.000;;;85.0;1;120.0;63.0;UTC+0700;55556159-ad12-4553-afbc-3567adcf0820",
  "8867-4;P00003;2023-11-27 01:00:00.000;;;83.0;1;97.0;72.0;UTC+0700;bab92b17-1376-45bc-9a56-c6e1db9852bf",
  "8867-4;P00003;2023-11-27 02:00:00.000;;;79.0;1;109.0;63.0;UTC+0700;c93c597d-6dce-4e1b-b99a-3da294477404",
  "8867-4;P00003;2023-11-27 03:00:00.000;;;67.0;1;87.0;60.0;UTC+0700;ca084c5b-2260-4f08-9129-9a8f11437c86",
  "8867-4;P00003;2023-11-27 04:00:00.000;;;67.0;1;95.0;58.0;UTC+0700;caa6a0cf-e749-4612-b8d3-1d9f0002213d",
  "8867-4;P00003;2023-11-27 05:00:00.000;;;65.0;1;84.0;56.0;UTC+0700;202e729f-28e5-4d07-8111-e4225bc97bfb",
  "8867-4;P00003;2023-11-27 06:00:00.000;;;80.0;1;102.0;63.0;UTC+0700;ee1e9df9-93e2-4cd2-b76d-470c7e2e4fa1",
  "8867-4;P00003;2023-11-27 07:00:00.000;;;64.0;1;81.0;60.0;UTC+0700;c306cc3e-ba2f-423f-b476-021bce84af77",
  "8867-4;P00003;2023-11-27 08:00:00.000;;;69.0;1;113.0;58.0;UTC+0700;ecfe5c50-d051-46e7-96e7-d9134d2b0d88",
  "8867-4;P00003;2023-11-27 09:00:00.000;;;83.0;1;103.0;61.0;UTC+0700;66811665-7b54-4cc1-9b47-c7d927451235",
  "8867-4;P00003;2023-11-27 10:00:00.000;;;75.0;1;88.0;60.0;UTC+0700;895f264b-7a59-482c-99c6-98e11f695b11",
  "8867-4;P00003;2023-11-27 11:00:00.000;;;79.0;1;115.0;64.0;UTC+0700;a0ae5aee-7f75-48fb-8da4-94c33c552d3f",
  "8867-4;P00003;2023-11-27 12:00:00.000;;;70.0;1;95.0;59.0;UTC+0700;9f802ad5-1345-44be-a924-256a8e8eabda",
  "8867-4;P00003;2023-11-27 13:00:00.000;;;62.0;1;81.0;55.0;UTC+0700;d7663908-6904-42f6-87af-38b4a7440f24",
  "8867-4;P00003;2023-11-27 14:00:00.000;;;58.0;1;81.0;50.0;UTC+0700;9f46b1f2-6673-415f-9434-ed5ef5de755a",
  "8867-4;P00003;2023-11-27 15:00:00.000;;;51.0;1;64.0;46.0;UTC+0700;9db96db3-61db-4b10-acbe-83f054bb7958",
  "8867-4;P00003;2023-11-27 16:00:00.000;;;51.0;1;66.0;46.0;UTC+0700;5771e144-48ee-4fe2-b84a-f0d3382d223b",
  "8867-4;P00003;2023-11-27 17:00:00.000;;;51.0;1;78.0;47.0;UTC+0700;32c99419-87ed-4cc9-8e5e-943244854fa3",
  "8867-4;P00003;2023-11-27 18:00:00.000;;;50.0;1;76.0;46.0;UTC+0700;79895c3d-3b8a-4f68-88e3-fab241907ee8",
  "8867-4;P00003;2023-11-27 19:00:00.000;;;53.0;1;76.0;45.0;UTC+0700;478265ec-0503-448d-938a-59032d14ee4d",
  "8867-4;P00003;2023-11-27 20:00:00.000;;;60.0;1;88.0;52.0;UTC+0700;15a4dee0-820e-4dfe-b460-865be71f18b3",
  "8867-4;P00003;2023-11-27 21:00:00.000;;;86.0;1;86.0;86.0;UTC+0700;4d0e8e46-72af-4929-a236-cf5be12bd5fe",
  "8867-4;P00003;2023-11-28 00:00:00.000;;;70.0;1;100.0;49.0;UTC+0700;264e6920-9829-4c4b-acb2-8c056f770334",
  "8867-4;P00003;2023-11-28 01:00:00.000;;;77.0;1;97.0;52.0;UTC+0700;70679ea1-46a7-4569-a884-eade3103b037",
  "8867-4;P00003;2023-11-28 08:00:00.000;;;86.0;1;86.0;86.0;UTC+0700;e2f10b42-76e1-48b1-abad-4225b2b06f56",
  "8867-4;P00003;2023-11-29 09:00:00.000;;;87.0;1;87.0;87.0;UTC+0700;606c81a9-c80b-4013-bbcb-544648e0bb68",
  "8867-4;P00003;2023-11-30 01:00:00.000;;;78.0;1;81.0;73.0;UTC+0700;dd7f002a-b785-46af-a441-500b7fc00339",
  "8867-4;P00003;2023-11-30 02:00:00.000;;;76.0;1;86.0;71.0;UTC+0700;6f6c9cc9-a288-4f1a-99ab-621114b8982f",
  "8867-4;P00003;2023-11-30 07:00:00.000;;;74.0;1;88.0;63.0;UTC+0700;4bcb11f8-0b11-4ad8-ba83-ef1a48152944",
  "8867-4;P00003;2023-12-01 07:00:00.000;;;71.0;1;90.0;52.0;UTC+0700;a16c619b-18e6-40cd-865c-1185cf83b03c",
  "8867-4;P00003;2023-12-01 08:00:00.000;;;59.0;1;68.0;52.0;UTC+0700;3a64ceec-a9d6-48e8-ad43-cacf85303b11",
  "8867-4;P00003;2023-12-01 10:00:00.000;;;74.0;1;92.0;55.0;UTC+0700;2c49c710-36ea-4fa6-83cd-a89236bf3c22",
  "8867-4;P00003;2023-12-01 11:00:00.000;;;74.0;1;95.0;49.0;UTC+0700;9198389e-76e7-42da-8aa7-6132e89d323f",
  "8867-4;P00003;2023-12-01 12:00:00.000;;;67.0;1;77.0;53.0;UTC+0700;45f38ef6-2792-408a-8e15-b7219c381a4e",
];

const resultArray = [];

inputArray.forEach((entry) => {
  const [
    _,
    __,
    dateOld,
    ___,
    ____,
    heartRate,
    _______,
    heartBeatCount,
    ______,
  ] = entry.split(";");

  const [date, time] = dateOld.split(" ");

  if (
    resultArray.length === 0 ||
    resultArray[resultArray.length - 1].date !== date
  ) {
    resultArray.push({
      date,
      time: [time],
      heartRate: [parseInt(heartRate)],
      heartBeatCount: [parseInt(heartBeatCount)],
    });
  } else {
    resultArray.forEach((dateLoop) => {
      if (dateLoop.date === date) {
        dateLoop.time.push(time);
        dateLoop.heartRate.push(parseInt(heartRate));
        dateLoop.heartBeatCount.push(parseInt(heartBeatCount));
      }
    });
  }
});

/* db.patients.updateOne(
  { patientId: "P00003" },
  {
    $push: {
      heartRateHistory: {
        $each: [
          {
    date: '2023-11-22',
    time: [
      '12:00:00.000',
      '13:00:00.000',
      '14:00:00.000',
      '15:00:00.000',
      '16:00:00.000',
      '17:00:00.000',
      '18:00:00.000',
      '19:00:00.000',
      '20:00:00.000',
      '21:00:00.000',
      '22:00:00.000'
    ],
    heartRate: [
      74, 65, 55, 55, 54,
      55, 55, 57, 56, 75,
      84
    ],
    heartBeatCount: [
       81, 85, 66, 63, 62,
       67, 78, 71, 60, 98,
      113
    ]
  },
  {
    date: '2023-11-23',
    time: [
      '00:00:00.000', '01:00:00.000',
      '02:00:00.000', '03:00:00.000',
      '04:00:00.000', '05:00:00.000',
      '06:00:00.000', '07:00:00.000',
      '08:00:00.000', '08:00:00.000',
      '09:00:00.000', '10:00:00.000',
      '11:00:00.000', '11:00:00.000',
      '11:14:43.358', '12:00:00.000',
      '13:00:00.000', '14:00:00.000',
      '15:00:00.000', '16:00:00.000',
      '17:00:00.000', '18:00:00.000',
      '19:00:00.000', '20:00:00.000',
      '21:00:00.000', '22:00:00.000',
      '23:00:00.000'
    ],
    heartRate: [
      83, 83, 81, 71, 71, 71, 68, 67,
      66, 65, 73, 77, 68, 66, 59, 64,
      53, 52, 51, 50, 52, 53, 53, 58,
      82, 93, 84
    ],
    heartBeatCount: [
      106, 108,  99, 97, 99, 88, 87, 92,
       74, 102, 104, 96, 71, 90, 92, 92,
       67,  61,  71, 68, 78, 91, 78, 84,
      103, 158, 105
    ]
  },
  {
    date: '2023-11-24',
    time: [
      '00:00:00.000', '01:00:00.000',
      '02:00:00.000', '03:00:00.000',
      '04:00:00.000', '05:00:00.000',
      '06:00:00.000', '07:00:00.000',
      '08:00:00.000', '09:00:00.000',
      '09:00:00.000', '10:00:00.000',
      '11:00:00.000', '09:39:40.249',
      '12:00:00.000', '13:00:00.000',
      '14:00:00.000', '15:00:00.000',
      '16:00:00.000', '17:00:00.000',
      '18:00:00.000', '19:00:00.000',
      '20:00:00.000', '21:00:00.000',
      '22:00:00.000', '23:00:00.000'
    ],
    heartRate: [
      81, 82, 78, 69, 74, 72, 66, 66,
      66, 68, 68, 78, 74, 59, 64, 60,
      56, 54, 51, 52, 51, 52, 55, 75,
      97, 86
    ],
    heartBeatCount: [
      110, 108, 110,  91,  96,  94,  90,
       88,  94,  91, 111,  95, 100, 101,
       90,  82,  73,  75,  64,  72,  68,
       88,  95,  98, 161, 111
    ]
  },
  {
    date: '2023-11-25',
    time: [
      '00:00:00.000', '01:00:00.000',
      '02:00:00.000', '03:00:00.000',
      '04:00:00.000', '05:00:00.000',
      '06:00:00.000', '07:00:00.000',
      '08:00:00.000', '14:00:00.000',
      '09:00:00.000', '10:00:00.000',
      '11:00:00.000', '12:00:00.000',
      '13:00:00.000', '14:00:00.000',
      '15:00:00.000', '16:00:00.000',
      '17:00:00.000', '18:00:00.000',
      '19:00:00.000', '20:00:00.000',
      '21:00:00.000', '22:00:00.000',
      '23:00:00.000'
    ],
    heartRate: [
      83, 81, 78, 81, 73, 74, 67, 71,
      69, 53, 73, 79, 66, 71, 61, 53,
      52, 51, 51, 53, 54, 58, 76, 83,
      75
    ],
    heartBeatCount: [
      102, 100,  93, 111,  93, 90, 86,
      113, 103,  72, 117, 104, 86, 83,
       89,  58,  79,  64,  71, 73, 69,
       85,  94, 159, 125
    ]
  },
  {
    date: '2023-11-26',
    time: [
      '00:00:00.000', '01:00:00.000',
      '02:00:00.000', '03:00:00.000',
      '05:00:00.000', '06:00:00.000',
      '07:00:00.000', '08:00:00.000',
      '09:00:00.000', '10:00:00.000',
      '11:00:00.000', '12:00:00.000',
      '13:00:00.000', '14:00:00.000',
      '15:00:00.000', '16:00:00.000',
      '17:00:00.000', '18:00:00.000',
      '19:00:00.000', '20:00:00.000',
      '21:00:00.000', '23:00:00.000'
    ],
    heartRate: [
      65, 84, 76, 71, 68, 68, 66,
      67, 73, 79, 73, 70, 61, 54,
      52, 51, 51, 50, 53, 56, 76,
      84
    ],
    heartBeatCount: [
       71, 100, 108,  90, 93, 83,  87,
       99, 105,  94, 104, 95, 93,  65,
       68,  71,  69,  71, 79, 85, 102,
      109
    ]
  },
  {
    date: '2023-11-25',
    time: [ '23:54:00.556' ],
    heartRate: [ 59 ],
    heartBeatCount: [ 95 ]
  },
  {
    date: '2023-11-26',
    time: [
      '04:00:00.000', '05:00:00.000',
      '06:00:00.000', '07:00:00.000',
      '08:00:00.000', '09:00:00.000',
      '10:00:00.000', '11:00:00.000',
      '12:00:00.000', '13:00:00.000',
      '14:00:00.000', '15:00:00.000',
      '16:00:00.000', '17:00:00.000',
      '18:00:00.000', '19:00:00.000',
      '20:00:00.000', '21:00:00.000',
      '23:00:00.000'
    ],
    heartRate: [
      71, 68, 68, 66, 67, 73, 79,
      73, 70, 61, 54, 52, 51, 51,
      50, 53, 56, 76, 84
    ],
    heartBeatCount: [
       91, 93, 83,  87,  99, 105, 94,
      104, 95, 93,  65,  68,  71, 69,
       71, 79, 85, 102, 109
    ]
  },
  {
    date: '2023-11-27',
    time: [
      '00:00:00.000', '01:00:00.000',
      '02:00:00.000', '03:00:00.000',
      '04:00:00.000', '05:00:00.000',
      '06:00:00.000', '07:00:00.000',
      '08:00:00.000', '09:00:00.000',
      '10:00:00.000', '11:00:00.000',
      '12:00:00.000', '13:00:00.000',
      '14:00:00.000', '15:00:00.000',
      '16:00:00.000', '17:00:00.000',
      '18:00:00.000', '19:00:00.000',
      '20:00:00.000', '21:00:00.000'
    ],
    heartRate: [
      85, 83, 79, 67, 67, 65, 80,
      64, 69, 83, 75, 79, 70, 62,
      58, 51, 51, 51, 50, 53, 60,
      86
    ],
    heartBeatCount: [
      120,  97, 109, 87,  95, 84, 102,
       81, 113, 103, 88, 115, 95,  81,
       81,  64,  66, 78,  76, 76,  88,
       86
    ]
  },
  {
    date: '2023-11-28',
    time: [ '00:00:00.000', '01:00:00.000', '08:00:00.000' ],
    heartRate: [ 70, 77, 86 ],
    heartBeatCount: [ 100, 97, 86 ]
  },
  {
    date: '2023-11-29',
    time: [ '09:00:00.000' ],
    heartRate: [ 87 ],
    heartBeatCount: [ 87 ]
  },
  {
    date: '2023-11-30',
    time: [ '01:00:00.000', '02:00:00.000', '07:00:00.000' ],
    heartRate: [ 78, 76, 74 ],
    heartBeatCount: [ 81, 86, 88 ]
  },
  {
    date: '2023-12-01',
    time: [
      '07:00:00.000',
      '08:00:00.000',
      '10:00:00.000',
      '11:00:00.000',
      '12:00:00.000'
    ],
    heartRate: [ 71, 59, 74, 74, 67 ],
    heartBeatCount: [ 90, 68, 92, 95, 77 ]
  }
        ],
      },
    },
  }
); */

console.log(resultArray);
