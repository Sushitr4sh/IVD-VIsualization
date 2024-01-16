const inputArray = [
  "8867-4;P00002;2023-11-22 07:00:00.000;;;74.0;1;87.0;68.0;UTC+0700;4bff7c3e-be0f-4540-99f8-796d1648e9e6",
  "8867-4;P00002;2023-11-22 07:50:58.456;;;71.0;1;88.0;70.0;UTC+0700;571bdd90-a23c-48ef-a721-9c9b7f5f842e",
  "8867-4;P00002;2023-11-22 08:00:00.000;;;80.0;1;130.0;60.0;UTC+0700;71164923-ec8c-42cf-9985-da30db5891a3",
  "8867-4;P00002;2023-11-22 09:00:00.000;;;79.0;1;119.0;64.0;UTC+0700;346ccfc0-bb36-4c62-9bd8-28807451e742",
  "8867-4;P00002;2023-11-22 10:00:00.000;;;89.0;1;117.0;68.0;UTC+0700;c30afdbc-6401-4b14-a917-d1991109ea95",
  "8867-4;P00002;2023-11-22 11:00:00.000;;;91.0;1;129.0;77.0;UTC+0700;c6ac9909-d162-4296-b5b5-c30fc86adb46",
  "8867-4;P00002;2023-11-22 13:00:00.000;;;81.0;1;95.0;61.0;UTC+0700;ac203f44-6365-49ea-adec-e03c97cf17cb",
  "8867-4;P00002;2023-11-22 14:00:00.000;;;72.0;1;90.0;55.0;UTC+0700;aec52ae9-5a81-4ed1-b747-029b52797bbc",
  "8867-4;P00002;2023-11-22 15:45:49.724;;;59.0;1;82.0;70.0;UTC+0700;7763372e-56ab-42b2-98d9-f8cbc2e9b596",
  "8867-4;P00002;2023-11-22 15:00:00.000;;;67.0;1;105.0;52.0;UTC+0700;e11073e3-6314-4964-97a3-8962b838301e",
  "8867-4;P00002;2023-11-22 16:00:00.000;;;62.0;1;88.0;52.0;UTC+0700;65e0c873-f34e-4ea8-9c2d-ec33c0a2923a",
  "8867-4;P00002;2023-11-22 17:00:00.000;;;65.0;1;89.0;51.0;UTC+0700;3ebe01ee-aaad-428f-be8e-dfa9019f27bf",
  "8867-4;P00002;2023-11-22 17:50:30.501;;;60.0;1;100.0;70.0;UTC+0700;0f0a0283-7904-4519-a31a-067a0d1a938c",
  "8867-4;P00002;2023-11-22 18:00:00.000;;;70.0;1;95.0;59.0;UTC+0700;1a6f79e4-2751-4eaa-9d25-8c9dca1d527c",
  "8867-4;P00002;2023-11-22 19:00:00.000;;;70.0;1;87.0;55.0;UTC+0700;abfa4f21-db1e-434d-af32-d40f6ea7ab43",
  "8867-4;P00002;2023-11-22 20:00:00.000;;;73.0;1;95.0;62.0;UTC+0700;22bc7a5d-f4fc-4b80-b218-a0331c1837c8",
  "8867-4;P00002;2023-11-22 21:00:00.000;;;65.0;1;93.0;51.0;UTC+0700;8aeb5bf9-1ec3-4328-a945-864d6867ae0c",
  "8867-4;P00002;2023-11-22 22:00:00.000;;;60.0;1;81.0;48.0;UTC+0700;fc396728-f342-495c-9618-a75dacf51175",
  "8867-4;P00002;2023-11-23 00:00:00.000;;;91.0;1;133.0;75.0;UTC+0700;5b5f5a3a-f48d-490b-9a4e-938bfebc45cd",
  "8867-4;P00002;2023-11-23 01:00:00.000;;;91.0;1;114.0;69.0;UTC+0700;abfc57d3-eb9f-452a-81ac-6ba0a0cc5bee",
  "8867-4;P00002;2023-11-23 02:00:00.000;;;68.0;1;95.0;55.0;UTC+0700;7046b9ea-1834-46bd-8254-573a9c4f74d8",
  "8867-4;P00002;2023-11-23 03:00:00.000;;;69.0;1;87.0;57.0;UTC+0700;b433fd55-f2e7-404a-ab72-dd77a0c5d927",
  "8867-4;P00002;2023-11-23 04:00:00.000;;;73.0;1;101.0;55.0;UTC+0700;6cb69a08-8ab8-4040-9ab0-be5dbea89cf3",
  "8867-4;P00002;2023-11-23 05:00:00.000;;;84.0;1;112.0;62.0;UTC+0700;182e0413-c447-44ea-9c13-6072921f8f85",
  "8867-4;P00002;2023-11-23 06:00:00.000;;;83.0;1;106.0;64.0;UTC+0700;c4464c7f-b9b1-45cc-af06-39e251a6ae1a",
  "8867-4;P00002;2023-11-23 07:00:00.000;;;74.0;1;92.0;57.0;UTC+0700;d5def411-ca76-4dbc-8e29-75d71c2d99fe",
  "8867-4;P00002;2023-11-23 08:00:00.000;;;70.0;1;94.0;70.0;UTC+0700;2efba434-9299-4a5e-a130-461a63ab3087",
  "8867-4;P00002;2023-11-23 09:00:00.000;;;67.0;1;88.0;47.0;UTC+0700;a16e84b3-63d9-4069-b7f6-7f23c52157ad",
  "8867-4;P00002;2023-11-23 10:00:00.000;;;81.0;1;125.0;56.0;UTC+0700;bdafc8a1-d9c3-4b3d-8879-2ede42e7582a",
  "8867-4;P00002;2023-11-23 11:00:00.000;;;88.0;1;132.0;49.0;UTC+0700;e0f40e77-e539-4185-9a96-4f5ae63b7642",
  "8867-4;P00002;2023-11-23 15:00:00.000;;;61.0;1;84.0;52.0;UTC+0700;b23c9641-8fd8-4922-a552-8f6e7495ff39",
  "8867-4;P00002;2023-11-23 16:00:00.000;;;61.0;1;83.0;50.0;UTC+0700;f2889239-dbcc-4163-b187-3e3664a02731",
  "8867-4;P00002;2023-11-23 17:00:00.000;;;65.0;1;72.0;54.0;UTC+0700;47791bf7-8c07-4628-b035-48e4ca60bfe8",
  "8867-4;P00002;2023-11-23 18:00:00.000;;;60.0;1;78.0;46.0;UTC+0700;99762443-2638-49af-864c-c7289f216bda",
  "8867-4;P00002;2023-11-23 19:00:00.000;;;60.0;1;69.0;51.0;UTC+0700;dab21212-a1fe-4506-b51c-b9ec836f9ad0",
  "8867-4;P00002;2023-11-23 20:00:00.000;;;57.0;1;82.0;47.0;UTC+0700;3deb4f8c-d41c-4c8c-97d8-69ab30f1d5ba",
  "8867-4;P00002;2023-11-23 21:00:00.000;;;62.0;1;103.0;52.0;UTC+0700;ac251c4e-2d44-4eef-849b-1023feb445e7",
  "8867-4;P00002;2023-11-23 22:22:59.355;;;59.0;1;101.0;72.0;UTC+0700;d805909c-04f5-4924-8439-29a0f0a496e9",
  "8867-4;P00002;2023-11-23 22:00:00.000;;;60.0;1;83.0;49.0;UTC+0700;bc37371b-8fe1-43be-9424-9f21a4596369",
  "8867-4;P00002;2023-11-23 23:00:00.000;;;63.0;1;87.0;51.0;UTC+0700;3873b85c-9f37-4cdf-8536-aea9ebab39f6",
  "8867-4;P00002;2023-11-24 00:00:00.000;;;80.0;1;116.0;53.0;UTC+0700;41b64837-ef4e-4964-9f97-566eeeba7059",
  "8867-4;P00002;2023-11-24 01:00:00.000;;;96.0;1;137.0;81.0;UTC+0700;aaefbf60-7d73-4145-985d-656778ceced0",
  "8867-4;P00002;2023-11-24 02:00:00.000;;;77.0;1;108.0;55.0;UTC+0700;6c27fd9c-e182-43a7-829d-7952e90a4130",
  "8867-4;P00002;2023-11-24 03:00:00.000;;;73.0;1;89.0;56.0;UTC+0700;3a6db16e-4325-4cfc-b8a9-8df6ff1892c4",
  "8867-4;P00002;2023-11-24 04:00:00.000;;;69.0;1;96.0;55.0;UTC+0700;c7a8317e-1f4c-4d6b-9800-4bc83967d999",
  "8867-4;P00002;2023-11-24 05:00:00.000;;;66.0;1;90.0;54.0;UTC+0700;b0a00c10-b225-4a08-9170-a8d8291f4c7d",
  "8867-4;P00002;2023-11-24 06:00:00.000;;;68.0;1;102.0;55.0;UTC+0700;5b3bbe91-2510-4271-b56e-0e88e66c8d64",
  "8867-4;P00002;2023-11-24 07:00:00.000;;;79.0;1;99.0;60.0;UTC+0700;fc1e2fb2-8e29-41f5-a30c-41acc46aadc4",
  "8867-4;P00002;2023-11-24 08:00:00.000;;;81.0;1;108.0;61.0;UTC+0700;659a9b04-3039-4ba9-93f7-7112481438a1",
  "8867-4;P00002;2023-11-24 09:00:00.000;;;79.0;1;99.0;65.0;UTC+0700;8f5036a7-a5ee-4029-b439-36cf2cc5f0c5",
  "8867-4;P00002;2023-11-24 10:00:00.000;;;78.0;1;103.0;65.0;UTC+0700;acc3548f-d3b5-404e-b163-b464070bc71f",
  "8867-4;P00002;2023-11-24 11:00:00.000;;;79.0;1;117.0;64.0;UTC+0700;161b120f-3955-4b05-b461-17346eaec989",
  "8867-4;P00002;2023-11-24 13:00:00.000;;;67.0;1;97.0;57.0;UTC+0700;3e77485f-3091-4d26-a2be-e56dfe272db2",
  "8867-4;P00002;2023-11-24 14:00:00.000;;;72.0;1;94.0;57.0;UTC+0700;a2dbd33a-8b59-491e-b5ca-cbdeb05aec78",
  "8867-4;P00002;2023-11-24 15:00:00.000;;;66.0;1;85.0;52.0;UTC+0700;662384f3-28c5-4223-8d70-7faa17d7c95d",
  "8867-4;P00002;2023-11-24 16:00:00.000;;;77.0;1;96.0;58.0;UTC+0700;a846037e-de42-463e-8ee8-224d69157873",
  "8867-4;P00002;2023-11-24 17:00:00.000;;;73.0;1;94.0;54.0;UTC+0700;2446524f-3ea6-455b-befc-c1211fc06dff",
  "8867-4;P00002;2023-11-24 18:00:00.000;;;69.0;1;98.0;58.0;UTC+0700;0ed390fd-f824-41fd-b15b-f77063ec9799",
  "8867-4;P00002;2023-11-24 19:00:00.000;;;66.0;1;75.0;62.0;UTC+0700;978555c6-376a-45d5-ab27-d0805631b6f4",
  "8867-4;P00002;2023-11-24 20:00:00.000;;;57.0;1;89.0;49.0;UTC+0700;84193cd9-7db3-4eb5-af76-1f99080d52cb",
  "8867-4;P00002;2023-11-24 21:00:00.000;;;58.0;1;85.0;50.0;UTC+0700;f3e86f21-3449-48be-9c5a-5c862ce1f3a4",
  "8867-4;P00002;2023-11-24 22:00:00.000;;;59.0;1;80.0;49.0;UTC+0700;2000c8b8-6ab5-435a-b840-eb15d9850f23",
  "8867-4;P00002;2023-11-24 23:00:00.000;;;58.0;1;91.0;48.0;UTC+0700;04f0d787-bbab-4e76-af83-f1a3065dc714",
  "8867-4;P00002;2023-11-25 00:00:00.000;;;85.0;1;109.0;53.0;UTC+0700;f76fbc3a-a0ed-4189-88be-209933cab911",
  "8867-4;P00002;2023-11-25 01:00:00.000;;;97.0;1;126.0;63.0;UTC+0700;1ff3de6e-8ffd-49f8-ab89-ec4a0a4071d3",
  "8867-4;P00002;2023-11-25 15:00:00.000;;;60.0;1;89.0;51.0;UTC+0700;3b18c69f-4396-4cd5-98ea-5ddfd896f6a5",
  "8867-4;P00002;2023-11-25 02:00:00.000;;;74.0;1;96.0;58.0;UTC+0700;46cc472d-9a41-4b65-8bfb-5b69feeb529e",
  "8867-4;P00002;2023-11-25 03:00:00.000;;;75.0;1;104.0;54.0;UTC+0700;86ee0b75-ede3-4da3-b03f-c043c888b7e0",
  "8867-4;P00002;2023-11-25 04:00:00.000;;;81.0;1;103.0;69.0;UTC+0700;2049d749-dcfb-485a-a147-400518a21e53",
  "8867-4;P00002;2023-11-25 07:00:00.000;;;67.0;1;92.0;56.0;UTC+0700;736d37d8-4720-42f4-af1d-f4c3508f449e",
  "8867-4;P00002;2023-11-25 08:00:00.000;;;67.0;1;99.0;56.0;UTC+0700;cde5b4d1-6748-47fe-bde0-87d0c19e7ea5",
  "8867-4;P00002;2023-11-25 09:00:00.000;;;70.0;1;103.0;58.0;UTC+0700;ab31a785-92f8-4119-be81-e8379ac550d7",
  "8867-4;P00002;2023-11-25 10:00:00.000;;;74.0;1;104.0;57.0;UTC+0700;eae2ba78-4e3e-4140-b529-d4711d147e59",
  "8867-4;P00002;2023-11-25 11:00:00.000;;;77.0;1;103.0;54.0;UTC+0700;1ba5a2ab-6fe2-43fb-81f3-ff850acb2b69",
  "8867-4;P00002;2023-11-25 12:00:00.000;;;77.0;1;95.0;64.0;UTC+0700;062f4c61-7bd3-4768-89ea-9b5a7738ed2e",
  "8867-4;P00002;2023-11-25 13:00:00.000;;;71.0;1;92.0;60.0;UTC+0700;de1557c5-39c7-48ef-bc20-91b53b4682b9",
  "8867-4;P00002;2023-11-25 14:00:00.000;;;69.0;1;85.0;53.0;UTC+0700;f2da9c34-425f-4497-9bf2-d680e93e3c03",
  "8867-4;P00002;2023-11-25 15:00:00.000;;;67.0;1;89.0;55.0;UTC+0700;1f472291-df25-4a0b-99f3-87200f067a89",
  "8867-4;P00002;2023-11-25 15:33:35.015;;;55.0;1;82.0;50.0;UTC+0700;15f9f76f-05d9-4e43-83dd-1c3df5d393b3",
  "8867-4;P00002;2023-11-25 16:00:00.000;;;62.0;1;87.0;53.0;UTC+0700;dcb44f9c-b42a-4662-80d4-f0ec1e6e94ee",
  "8867-4;P00002;2023-11-25 17:00:00.000;;;65.0;1;93.0;55.0;UTC+0700;08197bb6-830f-424c-9675-92de0d75db3d",
  "8867-4;P00002;2023-11-25 18:00:00.000;;;66.0;1;95.0;54.0;UTC+0700;fcba38a3-f341-4884-b1e9-03efa7c97d3c",
  "8867-4;P00002;2023-11-25 18:44:07.388;;;60.0;1;83.0;52.0;UTC+0700;699297db-8382-4332-a637-85c19c867a9c",
  "8867-4;P00002;2023-11-26 00:00:00.000;;;93.0;1;113.0;67.0;UTC+0700;901a6545-1553-4630-a9be-2a1ff814bc5c",
  "8867-4;P00002;2023-11-26 01:00:00.000;;;105.0;1;124.0;78.0;UTC+0700;33cf76f8-28d7-4c1c-9360-732b18a41af9",
  "8867-4;P00002;2023-11-26 02:00:00.000;;;80.0;1;132.0;57.0;UTC+0700;9aded75d-9d46-438b-9019-9cef7d3a6279",
  "8867-4;P00002;2023-11-26 03:00:00.000;;;69.0;1;85.0;53.0;UTC+0700;96d6b031-4044-4a79-8842-ba2336ec8dc2",
  "8867-4;P00002;2023-11-26 04:00:00.000;;;65.0;1;93.0;57.0;UTC+0700;1190b8ee-f687-4274-b983-ec83d279aba5",
  "8867-4;P00002;2023-11-26 08:00:00.000;;;72.0;1;107.0;54.0;UTC+0700;84f60ee2-abc6-4148-ac9c-f2ce219d379c",
  "8867-4;P00002;2023-11-26 09:00:00.000;;;71.0;1;99.0;60.0;UTC+0700;d1a1c49d-fbd8-40a8-9346-a9c693d61f04",
  "8867-4;P00002;2023-11-26 10:00:00.000;;;95.0;1;118.0;75.0;UTC+0700;ec2dc1a4-0819-4cf3-8310-de47cecc6510",
  "8867-4;P00002;2023-11-26 12:00:00.000;;;72.0;1;99.0;61.0;UTC+0700;83ff3d5d-e1d4-46bb-93cb-0ede01edc796",
  "8867-4;P00002;2023-11-26 13:00:00.000;;;76.0;1;96.0;54.0;UTC+0700;b027f257-a8d3-4717-aeaf-939470a5b210",
  "8867-4;P00002;2023-11-27 00:00:00.000;;;95.0;1;125.0;55.0;UTC+0700;9c50e529-6fa7-4265-a5aa-3e287548b409",
  "8867-4;P00002;2023-11-27 01:00:00.000;;;95.0;1;127.0;69.0;UTC+0700;a3d7725a-b7df-464f-8aa2-663a346b08cc",
  "8867-4;P00002;2023-11-27 02:00:00.000;;;75.0;1;92.0;60.0;UTC+0700;761c4b15-aa37-422f-8dab-fe73cabb8255",
  "8867-4;P00002;2023-11-27 03:00:00.000;;;73.0;1;90.0;63.0;UTC+0700;011534e4-92d4-4458-8315-deb68d8e157c",
  "8867-4;P00002;2023-11-27 04:00:00.000;;;78.0;1;100.0;60.0;UTC+0700;1569f68d-1646-42fb-bba1-be41c1948dfa",
  "8867-4;P00002;2023-11-27 05:00:00.000;;;84.0;1;103.0;69.0;UTC+0700;2d526300-5be3-4e4f-8b89-93bb9cde7230",
  "8867-4;P00002;2023-11-27 06:00:00.000;;;80.0;1;104.0;68.0;UTC+0700;4d5b6cdc-1d4d-4053-b8ce-258dddac4c08",
  "8867-4;P00002;2023-11-27 07:00:00.000;;;71.0;1;90.0;57.0;UTC+0700;f3b50fba-4471-4c38-b9ca-aaddfedc9f2d",
  "8867-4;P00002;2023-11-27 08:00:00.000;;;73.0;1;91.0;60.0;UTC+0700;4e98515f-e786-481a-b25a-a6c19d30ac4d",
  "8867-4;P00002;2023-11-27 09:00:00.000;;;72.0;1;94.0;60.0;UTC+0700;525bab58-fe80-492c-b6cb-c333cfc8b1c6",
  "8867-4;P00002;2023-11-27 10:00:00.000;;;81.0;1;104.0;62.0;UTC+0700;352572da-5d30-4765-a055-f8eecbff6741",
  "8867-4;P00002;2023-11-27 11:00:00.000;;;80.0;1;125.0;61.0;UTC+0700;9d51339e-f695-4dbd-bcbf-6ad9f3816620",
  "8867-4;P00002;2023-11-27 12:00:00.000;;;82.0;1;98.0;72.0;UTC+0700;e3a010ac-d742-477b-a2c4-94fa7ef649ef",
  "8867-4;P00002;2023-11-27 13:00:00.000;;;76.0;1;94.0;63.0;UTC+0700;f155d85f-90c4-48d6-954e-90346fa5db4f",
  "8867-4;P00002;2023-11-27 14:00:00.000;;;73.0;1;88.0;63.0;UTC+0700;edc80f09-0c87-4856-b43e-77a1a3aa33de",
  "8867-4;P00002;2023-11-27 15:00:00.000;;;72.0;1;96.0;59.0;UTC+0700;2b6d60a2-548e-4edb-a757-8086ad8100e2",
  "8867-4;P00002;2023-11-27 16:00:00.000;;;70.0;1;91.0;53.0;UTC+0700;3039eca8-735e-4983-9028-a708f297c886",
  "8867-4;P00002;2023-11-27 17:00:00.000;;;70.0;1;92.0;51.0;UTC+0700;81ced8ff-f096-434e-bb2e-2d87ad843ee3",
  "8867-4;P00002;2023-11-27 17:07:26.461;;;57.0;1;90.0;58.0;UTC+0700;f2fad9fd-277b-4e20-8f92-2c8cc304c5d8",
  "8867-4;P00002;2023-11-27 18:00:00.000;;;74.0;1;92.0;60.0;UTC+0700;d3bd5e1d-9085-4d63-8cd3-6fa19c1ab317",
  "8867-4;P00002;2023-11-27 19:00:00.000;;;72.0;1;97.0;55.0;UTC+0700;41215e92-5640-4505-a1c8-2c64df1c2045",
  "8867-4;P00002;2023-11-27 20:00:00.000;;;61.0;1;84.0;51.0;UTC+0700;0fcd0831-e83a-4376-9692-94ca68ea2452",
  "8867-4;P00002;2023-11-27 21:00:00.000;;;58.0;1;83.0;48.0;UTC+0700;20981e2e-5edd-46d1-ba8a-2c6077912000",
  "8867-4;P00002;2023-11-27 22:00:00.000;;;73.0;1;90.0;55.0;UTC+0700;3ff627c3-4e82-4302-9c11-8822b3365bf8",
  "8867-4;P00002;2023-11-27 23:00:00.000;;;66.0;1;87.0;54.0;UTC+0700;f2167c1c-16d7-4c85-ad9c-d31c82ba072c",
  "8867-4;P00002;2023-11-28 00:00:00.000;;;99.0;1;149.0;70.0;UTC+0700;fad131f2-2f17-472a-94e8-ea13462509a4",
  "8867-4;P00002;2023-11-28 01:00:00.000;;;100.0;1;123.0;73.0;UTC+0700;2731014f-d420-4b9a-9df1-4a929b408ab0",
  "8867-4;P00002;2023-11-28 02:00:00.000;;;80.0;1;95.0;65.0;UTC+0700;3e74b42f-a139-4cf7-8674-784355b0fd0b",
  "8867-4;P00002;2023-11-28 03:00:00.000;;;79.0;1;92.0;61.0;UTC+0700;090ca743-4549-4a0a-b51a-e0bf1c5b9b4d",
  "8867-4;P00002;2023-11-28 04:00:00.000;;;88.0;1;120.0;67.0;UTC+0700;51f28931-8795-44e8-ba06-8db372ea47d6",
  "8867-4;P00002;2023-11-28 05:00:00.000;;;86.0;1;101.0;63.0;UTC+0700;bdd5f644-720a-48d8-b602-41efa2b87f09",
  "8867-4;P00002;2023-11-28 06:00:00.000;;;92.0;1;125.0;53.0;UTC+0700;d8530ba6-6dce-44db-b007-b7e47a664754",
  "8867-4;P00002;2023-11-28 07:00:00.000;;;81.0;1;104.0;62.0;UTC+0700;c013f59b-3af8-428a-8655-ea7225d3ace6",
  "8867-4;P00002;2023-11-28 08:00:00.000;;;83.0;1;105.0;66.0;UTC+0700;174c0938-7e37-4473-a008-b2cfa1620ce0",
  "8867-4;P00002;2023-11-28 09:00:00.000;;;86.0;1;110.0;67.0;UTC+0700;00fd0e6d-d575-4fb9-b4ef-f74ea0f85e1a",
  "8867-4;P00002;2023-11-28 10:00:00.000;;;90.0;1;115.0;63.0;UTC+0700;270cc893-bc25-419e-86c6-0fcd0374d978",
  "8867-4;P00002;2023-11-28 11:00:00.000;;;94.0;1;133.0;65.0;UTC+0700;fa61b9ba-16cc-421e-910e-3fe27126cc76",
  "8867-4;P00002;2023-11-28 13:00:00.000;;;79.0;1;99.0;54.0;UTC+0700;85661304-7b85-4a88-ac99-424972d56f29",
  "8867-4;P00002;2023-11-28 14:00:00.000;;;77.0;1;96.0;69.0;UTC+0700;4dd575d3-4781-4372-9730-1f230e51ceb6",
  "8867-4;P00002;2023-11-28 15:00:00.000;;;77.0;1;101.0;54.0;UTC+0700;64454f67-6665-4db6-8e94-c8dc761dae58",
  "8867-4;P00002;2023-11-28 16:00:00.000;;;75.0;1;98.0;62.0;UTC+0700;8c17f2b6-30cd-4f7a-bfd7-4f2279c492a2",
  "8867-4;P00002;2023-11-28 17:00:00.000;;;67.0;1;88.0;53.0;UTC+0700;254eded9-df7a-4874-9ce0-31a7c5104c24",
  "8867-4;P00002;2023-11-28 18:00:00.000;;;66.0;1;87.0;54.0;UTC+0700;c6274e6a-f5a4-45cc-bcf7-871d9b29db4f",
  "8867-4;P00002;2023-11-28 19:00:00.000;;;62.0;1;95.0;52.0;UTC+0700;c06e4805-aaaa-4729-9a92-6a9c1999592e",
  "8867-4;P00002;2023-11-28 20:00:00.000;;;61.0;1;82.0;52.0;UTC+0700;d9a47968-6813-41ef-87fa-f81075b1e3ce",
  "8867-4;P00002;2023-11-28 21:00:00.000;;;63.0;1;83.0;53.0;UTC+0700;c29f2ee2-8dbc-4966-84e9-ec7205d678d5",
  "8867-4;P00002;2023-11-28 22:00:00.000;;;63.0;1;93.0;50.0;UTC+0700;a134f817-5510-472f-bb75-5800f98c7483",
  "8867-4;P00002;2023-11-28 23:00:00.000;;;63.0;1;93.0;55.0;UTC+0700;16387c7f-3ad8-409d-8ce7-41bc18421afd",
  "8867-4;P00002;2023-11-28 17:10:32.649;;;55.0;1;95.0;50.0;UTC+0700;b1848388-bc2d-4aee-af47-671be91c9777",
  "8867-4;P00002;2023-11-29 00:00:00.000;;;83.0;1;111.0;56.0;UTC+0700;7a278445-df13-4d68-b2cf-b36a192ab3b4",
  "8867-4;P00002;2023-11-29 01:00:00.000;;;107.0;1;123.0;77.0;UTC+0700;a10d9fa6-135d-4331-b625-232e0a591afc",
  "8867-4;P00002;2023-11-29 02:00:00.000;;;79.0;1;102.0;64.0;UTC+0700;53db38c8-1258-41c7-804b-32255619345b",
  "8867-4;P00002;2023-11-29 03:00:00.000;;;71.0;1;101.0;54.0;UTC+0700;dd2255ec-a5d0-459a-b5ca-a0c4e0afec55",
  "8867-4;P00002;2023-11-29 04:00:00.000;;;74.0;1;99.0;54.0;UTC+0700;f9fbf02e-640e-4cb5-a987-63f6d0aa8fe4",
  "8867-4;P00002;2023-11-29 05:00:00.000;;;67.0;1;97.0;54.0;UTC+0700;74c48baf-8c4d-4361-a9fb-3cbac1f81c0f",
  "8867-4;P00002;2023-11-29 06:00:00.000;;;78.0;1;101.0;57.0;UTC+0700;9ad24947-41c9-4bd2-853f-a4fca2a3512d",
  "8867-4;P00002;2023-11-29 07:00:00.000;;;71.0;1;93.0;60.0;UTC+0700;4a5cb93d-96ed-4ad6-b368-9506366ec4d2",
  "8867-4;P00002;2023-11-29 08:00:00.000;;;85.0;1;115.0;51.0;UTC+0700;67faf4f0-8e5d-4ade-b6a4-25c5aea03746",
  "8867-4;P00002;2023-11-29 09:00:00.000;;;72.0;1;108.0;60.0;UTC+0700;433bbd17-e825-4712-a92e-1665d96f363f",
  "8867-4;P00002;2023-11-29 10:00:00.000;;;80.0;1;103.0;63.0;UTC+0700;26c54180-ad47-4126-9eb5-43e7f195013a",
  "8867-4;P00002;2023-11-29 11:00:00.000;;;89.0;1;116.0;70.0;UTC+0700;99458976-5013-4853-ab14-4f020cc7ecdf",
  "8867-4;P00002;2023-11-29 13:00:00.000;;;68.0;1;86.0;57.0;UTC+0700;a913ff3d-784f-4016-b691-3fd8947f2708",
  "8867-4;P00002;2023-11-29 14:00:00.000;;;66.0;1;85.0;55.0;UTC+0700;c357cb87-8965-443d-aeb0-9f3142a8b49d",
  "8867-4;P00002;2023-11-29 15:00:00.000;;;68.0;1;89.0;58.0;UTC+0700;bc8faca6-c92f-4e90-90dd-2553bf8805af",
  "8867-4;P00002;2023-11-29 16:00:00.000;;;63.0;1;82.0;54.0;UTC+0700;4933a354-ebe6-43e0-a723-8230307a5a50",
  "8867-4;P00002;2023-11-29 17:00:00.000;;;60.0;1;88.0;53.0;UTC+0700;909ec33e-a385-47d4-8092-4baba8394b77",
  "8867-4;P00002;2023-11-29 18:00:00.000;;;60.0;1;84.0;49.0;UTC+0700;1cb1b40f-75c2-4c3d-bc55-4d8082e3a64a",
  "8867-4;P00002;2023-11-29 19:00:00.000;;;60.0;1;88.0;49.0;UTC+0700;03205c38-2fb8-4121-ad2d-3e87c10facde",
  "8867-4;P00002;2023-11-29 20:00:00.000;;;61.0;1;92.0;49.0;UTC+0700;25572033-a79f-4cbb-a054-180697aeeb00",
  "8867-4;P00002;2023-11-29 21:00:00.000;;;63.0;1;83.0;52.0;UTC+0700;5cb8de82-a778-45a9-b80c-26ec681b6de7",
  "8867-4;P00002;2023-11-29 22:00:00.000;;;62.0;1;92.0;52.0;UTC+0700;3d1751aa-bdbd-4fdd-a933-06a41510ef74",
  "8867-4;P00002;2023-11-30 00:00:00.000;;;93.0;1;117.0;59.0;UTC+0700;3700fb58-afe4-4de5-b90c-820bdb317d32",
  "8867-4;P00002;2023-11-30 01:00:00.000;;;91.0;1;108.0;74.0;UTC+0700;3fefaf05-7224-481e-9694-e9c3eb918160",
  "8867-4;P00002;2023-11-30 02:00:00.000;;;81.0;1;110.0;58.0;UTC+0700;c0e1603a-c95b-450f-9166-b5aed459ce8d",
  "8867-4;P00002;2023-11-30 03:00:00.000;;;77.0;1;92.0;59.0;UTC+0700;ad31955d-6862-4c2b-91ba-2075ee42f7b4",
  "8867-4;P00002;2023-11-29 20:40:30.912;;;59.0;1;103.0;62.0;UTC+0700;efdfe39e-d900-46da-9590-3b8dcede56ec",
  "8867-4;P00002;2023-11-30 04:00:00.000;;;79.0;1;106.0;60.0;UTC+0700;55ae5f20-3cdc-41c9-b824-0e03a75364be",
  "8867-4;P00002;2023-11-30 05:00:00.000;;;87.0;1;116.0;68.0;UTC+0700;4d310875-d314-4613-9dc7-70a41fa478b6",
  "8867-4;P00002;2023-11-30 06:00:00.000;;;99.0;1;145.0;72.0;UTC+0700;10809e7a-ac5a-4df9-91a4-4571c4acef90",
  "8867-4;P00002;2023-11-30 07:00:00.000;;;83.0;1;96.0;66.0;UTC+0700;5b38fd27-a432-4fb4-8123-cc4c20d8256d",
  "8867-4;P00002;2023-11-30 08:00:00.000;;;87.0;1;110.0;64.0;UTC+0700;23932c14-41c0-4393-83aa-6ec609b0112a",
  "8867-4;P00002;2023-11-30 09:00:00.000;;;81.0;1;97.0;55.0;UTC+0700;0a9abc7d-ab2c-4022-8b4c-cd1573e82b8b",
  "8867-4;P00002;2023-11-30 10:00:00.000;;;90.0;1;124.0;66.0;UTC+0700;bf61a886-6dc4-499e-87c3-532d64035266",
  "8867-4;P00002;2023-11-30 11:00:00.000;;;92.0;1;128.0;70.0;UTC+0700;e3b88e57-d83d-45ef-bf95-dda5d0105f47",
  "8867-4;P00002;2023-11-30 12:00:00.000;;;100.0;1;129.0;77.0;UTC+0700;2025812e-3155-4c70-ba8f-83594e2a149e",
  "8867-4;P00002;2023-11-30 13:00:00.000;;;93.0;1;106.0;83.0;UTC+0700;2f16d497-38d6-42c5-bdbe-313d75bf117e",
  "8867-4;P00002;2023-11-30 14:00:00.000;;;80.0;1;109.0;58.0;UTC+0700;5b1327c1-f562-4fb1-af3b-cfdd62007df4",
  "8867-4;P00002;2023-11-30 15:00:00.000;;;71.0;1;90.0;59.0;UTC+0700;149887e0-4963-46a1-bc25-88821b839299",
  "8867-4;P00002;2023-11-30 16:00:00.000;;;69.0;1;89.0;54.0;UTC+0700;0a71adfc-1ea9-4ecd-91bb-7c8d8c1d6a47",
  "8867-4;P00002;2023-11-30 18:00:00.000;;;75.0;1;92.0;60.0;UTC+0700;845f19cb-8ce6-4be6-aa25-e6c79af78e99",
  "8867-4;P00002;2023-11-30 19:00:00.000;;;74.0;1;87.0;62.0;UTC+0700;5007cd0d-7b2e-4cea-9c9d-893531b4d323",
  "8867-4;P00002;2023-12-01 00:00:00.000;;;93.0;1;112.0;76.0;UTC+0700;313d985f-aa11-4592-ac34-6ee0986f976c",
  "8867-4;P00002;2023-12-01 01:00:00.000;;;95.0;1;123.0;74.0;UTC+0700;efa20dbf-55d5-4f5f-8bfd-3085606ccbe0",
  "8867-4;P00002;2023-12-01 02:00:00.000;;;88.0;1;117.0;60.0;UTC+0700;17c83b06-c0b2-42b8-8012-0e858f810ffd",
  "8867-4;P00002;2023-12-01 03:00:00.000;;;86.0;1;112.0;59.0;UTC+0700;8071ad25-eda9-40f3-ad81-a7d128540f95",
  "8867-4;P00002;2023-12-01 04:00:00.000;;;78.0;1;98.0;62.0;UTC+0700;cefab574-e623-4444-be14-3a04b39e5447",
  "8867-4;P00002;2023-12-01 05:00:00.000;;;72.0;1;100.0;60.0;UTC+0700;10680f24-ea43-4bf5-8f5b-d5cf240d63d3",
  "8867-4;P00002;2023-12-01 06:00:00.000;;;81.0;1;103.0;61.0;UTC+0700;e296e787-7661-4958-a10f-916352a02293",
  "8867-4;P00002;2023-12-01 07:00:00.000;;;94.0;1;118.0;72.0;UTC+0700;5d139bde-d89d-4467-8984-1ff83cb8ca35",
  "8867-4;P00002;2023-12-01 10:00:00.000;;;97.0;1;118.0;59.0;UTC+0700;331a5b2d-925b-496e-bec5-6c09e5de7fa6",
  "8867-4;P00002;2023-12-01 11:00:00.000;;;91.0;1;137.0;55.0;UTC+0700;395a7427-155b-419e-b314-fce88bdf850e",
  "8867-4;P00002;2023-12-01 12:00:00.000;;;105.0;1;136.0;93.0;UTC+0700;e951bb96-3e81-4fce-b196-26f02f90c918",
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
  { patientId: "P00002" },
  {
    $push: {
      heartRateHistory: {
        $each: [
          {
            date: "2023-11-22",
            time: [
              "07:00:00.000",
              "07:50:58.456",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "13:00:00.000",
              "14:00:00.000",
              "15:45:49.724",
              "15:00:00.000",
              "16:00:00.000",
              "17:00:00.000",
              "17:50:30.501",
              "18:00:00.000",
              "19:00:00.000",
              "20:00:00.000",
              "21:00:00.000",
              "22:00:00.000",
            ],
            heartRate: [
              74, 71, 80, 79, 89, 91, 81, 72, 59, 67, 62, 65, 60, 70, 70, 73,
              65, 60,
            ],
            heartBeatCount: [
              87, 88, 130, 119, 117, 129, 95, 90, 82, 105, 88, 89, 100, 95, 87,
              95, 93, 81,
            ],
          },
          {
            date: "2023-11-23",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "04:00:00.000",
              "05:00:00.000",
              "06:00:00.000",
              "07:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "15:00:00.000",
              "16:00:00.000",
              "17:00:00.000",
              "18:00:00.000",
              "19:00:00.000",
              "20:00:00.000",
              "21:00:00.000",
              "22:22:59.355",
              "22:00:00.000",
              "23:00:00.000",
            ],
            heartRate: [
              91, 91, 68, 69, 73, 84, 83, 74, 70, 67, 81, 88, 61, 61, 65, 60,
              60, 57, 62, 59, 60, 63,
            ],
            heartBeatCount: [
              133, 114, 95, 87, 101, 112, 106, 92, 94, 88, 125, 132, 84, 83, 72,
              78, 69, 82, 103, 101, 83, 87,
            ],
          },
          {
            date: "2023-11-24",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "04:00:00.000",
              "05:00:00.000",
              "06:00:00.000",
              "07:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "13:00:00.000",
              "14:00:00.000",
              "15:00:00.000",
              "16:00:00.000",
              "17:00:00.000",
              "18:00:00.000",
              "19:00:00.000",
              "20:00:00.000",
              "21:00:00.000",
              "22:00:00.000",
              "23:00:00.000",
            ],
            heartRate: [
              80, 96, 77, 73, 69, 66, 68, 79, 81, 79, 78, 79, 67, 72, 66, 77,
              73, 69, 66, 57, 58, 59, 58,
            ],
            heartBeatCount: [
              116, 137, 108, 89, 96, 90, 102, 99, 108, 99, 103, 117, 97, 94, 85,
              96, 94, 98, 75, 89, 85, 80, 91,
            ],
          },
          {
            date: "2023-11-25",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "15:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "04:00:00.000",
              "07:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "12:00:00.000",
              "13:00:00.000",
              "14:00:00.000",
              "15:00:00.000",
              "15:33:35.015",
              "16:00:00.000",
              "17:00:00.000",
              "18:00:00.000",
              "18:44:07.388",
            ],
            heartRate: [
              85, 97, 60, 74, 75, 81, 67, 67, 70, 74, 77, 77, 71, 69, 67, 55,
              62, 65, 66, 60,
            ],
            heartBeatCount: [
              109, 126, 89, 96, 104, 103, 92, 99, 103, 104, 103, 95, 92, 85, 89,
              82, 87, 93, 95, 83,
            ],
          },
          {
            date: "2023-11-26",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "04:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "12:00:00.000",
              "13:00:00.000",
            ],
            heartRate: [93, 105, 80, 69, 65, 72, 71, 95, 72, 76],
            heartBeatCount: [113, 124, 132, 85, 93, 107, 99, 118, 99, 96],
          },
          {
            date: "2023-11-27",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "04:00:00.000",
              "05:00:00.000",
              "06:00:00.000",
              "07:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "12:00:00.000",
              "13:00:00.000",
              "14:00:00.000",
              "15:00:00.000",
              "16:00:00.000",
              "17:00:00.000",
              "17:07:26.461",
              "18:00:00.000",
              "19:00:00.000",
              "20:00:00.000",
              "21:00:00.000",
              "22:00:00.000",
              "23:00:00.000",
            ],
            heartRate: [
              95, 95, 75, 73, 78, 84, 80, 71, 73, 72, 81, 80, 82, 76, 73, 72,
              70, 70, 57, 74, 72, 61, 58, 73, 66,
            ],
            heartBeatCount: [
              125, 127, 92, 90, 100, 103, 104, 90, 91, 94, 104, 125, 98, 94, 88,
              96, 91, 92, 90, 92, 97, 84, 83, 90, 87,
            ],
          },
          {
            date: "2023-11-28",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "04:00:00.000",
              "05:00:00.000",
              "06:00:00.000",
              "07:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "13:00:00.000",
              "14:00:00.000",
              "15:00:00.000",
              "16:00:00.000",
              "17:00:00.000",
              "18:00:00.000",
              "19:00:00.000",
              "20:00:00.000",
              "21:00:00.000",
              "22:00:00.000",
              "23:00:00.000",
              "17:10:32.649",
            ],
            heartRate: [
              99, 100, 80, 79, 88, 86, 92, 81, 83, 86, 90, 94, 79, 77, 77, 75,
              67, 66, 62, 61, 63, 63, 63, 55,
            ],
            heartBeatCount: [
              149, 123, 95, 92, 120, 101, 125, 104, 105, 110, 115, 133, 99, 96,
              101, 98, 88, 87, 95, 82, 83, 93, 93, 95,
            ],
          },
          {
            date: "2023-11-29",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "04:00:00.000",
              "05:00:00.000",
              "06:00:00.000",
              "07:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "13:00:00.000",
              "14:00:00.000",
              "15:00:00.000",
              "16:00:00.000",
              "17:00:00.000",
              "18:00:00.000",
              "19:00:00.000",
              "20:00:00.000",
              "21:00:00.000",
              "22:00:00.000",
            ],
            heartRate: [
              83, 107, 79, 71, 74, 67, 78, 71, 85, 72, 80, 89, 68, 66, 68, 63,
              60, 60, 60, 61, 63, 62,
            ],
            heartBeatCount: [
              111, 123, 102, 101, 99, 97, 101, 93, 115, 108, 103, 116, 86, 85,
              89, 82, 88, 84, 88, 92, 83, 92,
            ],
          },
          {
            date: "2023-11-30",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "05:00:00.000",
              "06:00:00.000",
              "07:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "12:00:00.000",
              "13:00:00.000",
              "14:00:00.000",
              "15:00:00.000",
              "16:00:00.000",
              "18:00:00.000",
              "19:00:00.000",
            ],
            heartRate: [
              93, 91, 81, 77, 87, 99, 83, 87, 81, 90, 92, 100, 93, 80, 71, 69,
              75, 74,
            ],
            heartBeatCount: [
              117, 108, 110, 92, 116, 145, 96, 110, 97, 124, 128, 129, 106, 109,
              90, 89, 92, 87,
            ],
          },
          {
            date: "2023-11-29",
            time: ["20:40:30.912"],
            heartRate: [59],
            heartBeatCount: [103],
          },
          {
            date: "2023-11-30",
            time: [
              "04:00:00.000",
              "05:00:00.000",
              "06:00:00.000",
              "07:00:00.000",
              "08:00:00.000",
              "09:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "12:00:00.000",
              "13:00:00.000",
              "14:00:00.000",
              "15:00:00.000",
              "16:00:00.000",
              "18:00:00.000",
              "19:00:00.000",
            ],
            heartRate: [
              79, 87, 99, 83, 87, 81, 90, 92, 100, 93, 80, 71, 69, 75, 74,
            ],
            heartBeatCount: [
              106, 116, 145, 96, 110, 97, 124, 128, 129, 106, 109, 90, 89, 92,
              87,
            ],
          },
          {
            date: "2023-12-01",
            time: [
              "00:00:00.000",
              "01:00:00.000",
              "02:00:00.000",
              "03:00:00.000",
              "04:00:00.000",
              "05:00:00.000",
              "06:00:00.000",
              "07:00:00.000",
              "10:00:00.000",
              "11:00:00.000",
              "12:00:00.000",
            ],
            heartRate: [93, 95, 88, 86, 78, 72, 81, 94, 97, 91, 105],
            heartBeatCount: [
              112, 123, 117, 112, 98, 100, 103, 118, 118, 137, 136,
            ],
          },
        ],
      },
    },
  }
); */

console.log(resultArray);
