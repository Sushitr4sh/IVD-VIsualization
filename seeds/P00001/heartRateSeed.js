const inputArray = [
  "8867-4;P00001;2021-11-20 02:30:10.469;;;66;70;UTC+0700;2DRZYv-3TKATb-3CJACg",
  "8867-4;P00001;2021-11-20 08:04:18.206;;;87;71;UTC+0700;2HKZDy-4KYSOi-9RGGRv",
  "8867-4;P00001;2021-11-20 08:25:28.956;;;68;96;UTC+0700;7FYDPn-7FIEUq-7NEYHo",
  "8867-4;P00001;2021-11-20 08:35:14.033;;;85;82;UTC+0700;6EHRYi-9KAQUq-8ONLIu",
  "8867-4;P00001;2021-11-20 14:04:23.187;;;83;95;UTC+0700;1VFWMe-4ORXOy-3GOTQb",
  "8867-4;P00001;2021-11-20 16:04:35.117;;;80;94;UTC+0700;5DUTUp-5BVVOi-2AHOMr",
  "8867-4;P00001;2021-11-20 16:55:37.951;;;73;63;UTC+0700;4TKCJj-9VCNVv-2ZSPJq",
  "8867-4;P00001;2021-11-21 09:35:05.153;;;73;97;UTC+0700;3XNXAz-2BRKRg-3SBAAz",
  "8867-4;P00001;2021-11-21 09:45:36.791;;;66;79;UTC+0700;1YPTFa-3ZNARk-0ZWQYl",
  "8867-4;P00001;2021-11-21 09:55:43.889;;;61;96;UTC+0700;8BYYNh-9IZZUd-4WIZMm",
  "8867-4;P00001;2021-11-21 14:03:17.137;;;75;94;UTC+0700;0CKVRb-8HZIRd-1KAXXx",
  "8867-4;P00001;2021-11-22 00:35:01.523;;;90;79;UTC+0700;0YTEEx-5UMRZz-7KNXNe",
  "8867-4;P00001;2021-11-22 00:45:30.742;;;67;100;UTC+0700;6WTPXu-9SHPCx-9SUHXl",
  "8867-4;P00001;2021-11-22 02:40:40.317;;;74;65;UTC+0700;9CCYYc-1NEKIs-8QZDWg",
  "8867-4;P00001;2021-11-22 12:45:09.799;;;78;99;UTC+0700;3QORUr-5HJMZn-3NZQWk",
  "8867-4;P00001;2021-11-22 12:50:51.395;;;72;72;UTC+0700;6TAAYq-6QWZHf-7SIWSt",
  "8867-4;P00001;2021-11-23 01:45:08.653;;;73;93;UTC+0700;9WTQEw-6AMGZp-6NVLZj",
  "8867-4;P00001;2021-11-23 01:50:17.486;;;86;61;UTC+0700;8GAYQu-6VUQAo-8HLMZd",
  "8867-4;P00001;2021-11-23 16:35:32.996;;;89;93;UTC+0700;2WIQYo-9WJVXx-8ILOKg",
  "8867-4;P00001;2021-11-23 16:40:13.184;;;76;92;UTC+0700;0WXNHx-6PWTAg-9TUDPb",
  "8867-4;P00001;2021-11-23 23:40:05.371;;;78;85;UTC+0700;2ZVHGz-7ISSMb-7ZDFSl",
  "8867-4;P00001;2021-11-24 03:07:47.800;;;63;61;UTC+0700;9HJCDe-9FITNm-0GQRJg",
  "8867-4;P00001;2021-11-24 08:59:57.992;;;89;85;UTC+0700;9AFOSz-7YSMBl-6LVXDa",
  "8867-4;P00001;2021-11-25 12:40:40.771;;;89;93;UTC+0700;2HYGMg-8OXVVa-4QWFIa",
  "8867-4;P00001;2021-11-25 12:45:01.165;;;83;77;UTC+0700;2NALRu-8GIGZu-4RZEBp",
  "8867-4;P00001;2021-11-25 12:50:21.941;;;73;69;UTC+0700;6GKQBn-4KQRMe-9SFUYi",
  "8867-4;P00001;2021-11-26 09:50:01.313;;;88;76;UTC+0700;7SECFa-1HJNCz-4YPHAe",
  "8867-4;P00001;2021-11-27 02:50:48.748;;;62;70;UTC+0700;6FAUVa-2DYFBf-5HLAAw",
  "8867-4;P00001;2021-11-27 11:40:24.419;;;83;81;UTC+0700;0BVEJc-6EJUUn-8JOBDs",
  "8867-4;P00001;2021-11-27 12:09:41.025;;;72;61;UTC+0700;7MQJBb-6EHWYy-1JYNNs",
  "8867-4;P00001;2021-11-28 05:46:48.633;;;81;94;UTC+0700;7RDNBc-7OLVXx-0LHPYm",
  "8867-4;P00001;2021-11-28 16:06:30.501;;;87;82;UTC+0700;3TQPOn-3AGRWo-7ZGXRf",
  "8867-4;P00001;2021-11-28 23:04:37.913;;;88;62;UTC+0700;1PMEEv-5URKSb-1DFECu",
  "8867-4;P00001;2021-11-29 00:50:46.210;;;61;79;UTC+0700;3UUMBp-6ZDWPb-1ICPRf",
  "8867-4;P00001;2021-11-29 12:55:56.090;;;68;80;UTC+0700;6UEIWu-3WDFNw-2HMVQu",
  "8867-4;P00001;2021-11-29 12:59:38.536;;;72;91;UTC+0700;5SQSNg-7BKMFe-7UATZr",
  "8867-4;P00001;2021-11-29 13:05:01.473;;;60;93;UTC+0700;3FURHt-9DLZVq-9MVFVz",
  "8867-4;P00001;2021-11-30 06:20:30.774;;;65;100;UTC+0700;1SMPKe-3WHRIv-0WYHEd",
  "8867-4;P00001;2021-11-30 10:22:50.177;;;90;61;UTC+0700;2SKBJt-6YAPXt-4UJRDd",
  "8867-4;P00001;2021-12-01 15:20:01.134;;;75;100;UTC+0700;8GGYDb-2FIYLq-4UUORi",
  "8867-4;P00001;2021-12-01 23:50:02.515;;;64;60;UTC+0700;9KLPAu-9YANIo-9SDNWq",
  "8867-4;P00001;2021-12-03 03:25:55.560;;;70;98;UTC+0700;7CSXJj-3CWGRz-0CQPIu",
  "8867-4;P00001;2021-12-03 06:30:11.114;;;83;90;UTC+0700;5MPYJn-4YNBTx-1IWOOw",
  "8867-4;P00001;2021-12-03 06:35:30.408;;;88;69;UTC+0700;0GHKNi-1ONTJw-7JNDKc",
  "8867-4;P00001;2021-12-04 00:25:28.832;;;78;84;UTC+0700;8WOKHb-3UIGMt-8SOGLu",
  "8867-4;P00001;2021-12-04 07:35:55.926;;;61;96;UTC+0700;3MLUOt-4QZUZr-7POYZu",
  "8867-4;P00001;2021-12-04 07:40:33.729;;;68;96;UTC+0700;3VLQWr-9ZIUGm-6MVOQc",
  "8867-4;P00001;2021-12-04 09:20:23.281;;;65;88;UTC+0700;6DVCRj-7RKCVe-1JJHIi",
  "8867-4;P00001;2021-12-06 11:55:44.570;;;60;63;UTC+0700;9XAZMn-6NTMJt-0WHQGp",
  "8867-4;P00001;2021-12-07 15:12:35.507;;;73;83;UTC+0700;8DNRGd-5OGCCq-8YWIGk",
  "8867-4;P00001;2021-12-07 15:18:24.142;;;87;92;UTC+0700;4QCAIy-4GWPFo-8LTMEb",
  "8867-4;P00001;2021-12-07 19:55:49.988;;;65;82;UTC+0700;4SAGXp-9HOGPm-4MYZZm",
  "8867-4;P00001;2021-12-09 00:40:11.104;;;63;64;UTC+0700;4MDEQc-8KOUXt-4HGEYd",
  "8867-4;P00001;2021-12-12 02:04:17.975;;;60;83;UTC+0700;3DUSRg-4FIZCa-1HWXWh",
  "8867-4;P00001;2021-12-14 01:50:25.782;;;78;100;UTC+0700;7YIMQl-4GLDJm-8ZGUWe",
  "8867-4;P00001;2021-12-17 01:12:46.094;;;73;65;UTC+0700;6WBHNb-1UCLPc-3TZOQk",
  "8867-4;P00001;2021-12-20 23:59:08.154;;;60;88;UTC+0700;6TRMMq-1OPAQs-0FTJZe",
  "8867-4;P00001;2021-12-21 00:22:30.256;;;80;67;UTC+0700;6SBWYx-6ITFHr-8NXXNp",
  "8867-4;P00001;2021-12-21 00:29:23.171;;;84;94;UTC+0700;6TIKIy-0BQOJy-1CUVTq",
  "8867-4;P00001;2021-12-23 08:59:59.707;;;81;96;UTC+0700;4TKHKq-2ZMBSr-4KCHOc",
  "8867-4;P00001;2021-12-24 00:51:02.258;;;90;76;UTC+0700;7GWXSi-9BYDBs-6DARZt",
  "8867-4;P00001;2021-12-25 14:04:03.623;;;70;86;UTC+0700;9HENZc-6XGYEq-2KDFHs",
  "8867-4;P00001;2021-12-30 09:59:41.490;;;79;71;UTC+0700;2INDKu-8ECXLn-9WFERk",
  "8867-4;P00001;2022-01-01 05:22:23.874;;;84;76;UTC+0700;4GBYKb-2JUSQp-2CAFAp",
  "8867-4;P00001;2022-01-03 14:40:20.940;;;61;95;UTC+0700;6AXLLy-2QOJHl-7PGPFq",
  "8867-4;P00001;2022-01-03 14:55:47.445;;;68;100;UTC+0700;3NYAOh-2PVMIi-6ULKFp",
  "8867-4;P00001;2022-01-03 18:23:32.804;;;90;67;UTC+0700;5SELAh-6LSDSi-9TKWZp",
  "8867-4;P00001;2022-01-04 15:20:31.900;;;89;63;UTC+0700;7FZXZe-9RUZOv-1MFGNq",
  "8867-4;P00001;2022-01-04 15:25:27.412;;;66;83;UTC+0700;5UDVIy-4BUAAx-9YKHDs",
  "8867-4;P00001;2022-01-05 04:35:27.756;;;62;68;UTC+0700;9RZKVw-9NOTXq-8GJWGw",
  "8867-4;P00001;2022-01-06 17:15:18.196;;;64;97;UTC+0700;0HNACi-0BVYLe-1LSFYw",
  "8867-4;P00001;2022-01-16 02:59:00.304;;;77;61;UTC+0700;6XHZVd-4WDTKl-3AKYDl",
  "8867-4;P00001;2022-01-16 05:25:31.058;;;78;74;UTC+0700;1BFSJz-7KSCJz-5DEQLq",
  "8867-4;P00001;2022-01-16 09:25:50.310;;;67;66;UTC+0700;6XUTZz-0ILYAt-3ASYRa",
  "8867-4;P00001;2022-01-17 01:09:41.624;;;62;88;UTC+0700;5HHPJk-9KSLHm-7YVGIp",
  "8867-4;P00001;2022-01-19 23:43:58.682;;;83;82;UTC+0700;5FQCTo-8OTQDn-0GIKGt",
  "8867-4;P00001;2022-01-20 00:59:38.884;;;73;71;UTC+0700;5SUWQm-2APEIi-9RHQEp",
  "8867-4;P00001;2022-01-20 10:43:16.740;;;83;60;UTC+0700;3NBTZv-3DFOQq-6OIUHk",
  "8867-4;P00001;2022-01-21 00:47:22.900;;;82;86;UTC+0700;7ESJFm-0ZEJOv-4UBEXw",
  "8867-4;P00001;2022-01-21 00:50:21.555;;;78;96;UTC+0700;7JOOQs-7GLIGt-9RWBNe",
  "8867-4;P00001;2022-01-28 02:59:26.539;;;70;82;UTC+0700;4URMFs-5OMSRz-3XMPRr",
  "8867-4;P00001;2022-01-28 03:04:46.888;;;81;64;UTC+0700;0WYAFe-5CVKKt-4EDYWs",
  "8867-4;P00001;2022-01-28 13:39:38.685;;;80;95;UTC+0700;1TWSGb-4YRALk-7XPEDk",
  "8867-4;P00001;2022-01-29 14:29:25.907;;;80;60;UTC+0700;0GALVe-2NMZUz-8CWDUq",
  "8867-4;P00001;2022-01-29 14:35:20.606;;;82;87;UTC+0700;4BAFUf-8EUVKz-7JAADo",
  "8867-4;P00001;2022-01-29 23:09:48.827;;;67;70;UTC+0700;0IVCCt-5FOVLd-3EDRVt",
  "8867-4;P00001;2022-01-30 07:22:17.119;;;72;78;UTC+0700;5RQQBm-2TVDJa-0KMLBw",
  "8867-4;P00001;2022-01-30 08:19:29.387;;;82;97;UTC+0700;2APPGq-2ANCQy-9MEEEs",
  "8867-4;P00001;2022-01-30 14:35:05.663;;;66;76;UTC+0700;0JPSIf-8MVTQx-9RVQOb",
  "8867-4;P00001;2022-02-01 06:40:13.060;;;74;72;UTC+0700;2TVGDw-8VVZPw-2GCDZc",
  "8867-4;P00001;2022-02-01 10:45:42.397;;;61;76;UTC+0700;0QTUFo-4DXZBy-4FCVIs",
  "8867-4;P00001;2022-02-02 14:50:01.414;;;69;75;UTC+0700;3EEFIu-1VJCFf-6OVTEc",
  "8867-4;P00001;2022-02-02 14:59:41.379;;;64;66;UTC+0700;1CUQEk-8IYWZp-5JLASj",
  "8867-4;P00001;2022-02-03 06:15:29.324;;;64;64;UTC+0700;4GVLWb-8KKKEj-3JSGTw",
  "8867-4;P00001;2022-02-03 06:20:05.102;;;87;80;UTC+0700;2WAJEp-4WFHAu-1FCOKy",
  "8867-4;P00001;2022-02-03 06:44:01.861;;;82;89;UTC+0700;7AXTDn-4STKWh-1GIXAe",
  "8867-4;P00001;2022-02-03 16:09:34.848;;;60;84;UTC+0700;9PFDCn-6JHOMu-0JVFTx",
  "8867-4;P00001;2022-02-04 05:19:51.666;;;80;89;UTC+0700;5DZRBa-3BBUGc-5KXKPb",
  "8867-4;P00001;2022-02-05 11:22:44.260;;;78;91;UTC+0700;0VLMKw-5HULHq-3UYEDc",
  "8867-4;P00001;2022-02-06 14:09:30.278;;;63;62;UTC+0700;9GUZHs-9TTXUb-7IDXWk",
  "8867-4;P00001;2022-02-08 17:09:59.124;;;81;89;UTC+0700;0MHJLe-2BGDXj-6UOEVb",
  "8867-4;P00001;2022-02-08 17:15:41.590;;;77;85;UTC+0700;5JZLIj-0MIUQb-7OAJVo",
  "8867-4;P00001;2022-02-09 01:35:02.232;;;86;99;UTC+0700;2KVONe-0OXFHl-8JNGRl",
  "8867-4;P00001;2022-02-12 12:59:26.273;;;64;74;UTC+0700;5NRNYi-8UIKKm-8DHTFw",
  "8867-4;P00001;2022-02-14 01:30:38.098;;;81;86;UTC+0700;7WIWPl-7JJYPv-3ZRMMk",
  "8867-4;P00001;2022-02-14 14:30:04.917;;;84;92;UTC+0700;5TAPYt-1XSKKz-1GUARl",
  "8867-4;P00001;2022-02-16 03:35:49.618;;;89;83;UTC+0700;2RFSQu-2TPJDa-3EHKZm",
  "8867-4;P00001;2022-02-16 06:45:54.608;;;69;68;UTC+0700;9PXFRh-1AIDFn-2BKQGa",
  "8867-4;P00001;2022-02-17 00:35:40.381;;;69;72;UTC+0700;7TCRLy-1VNXMk-4HCQYd",
  "8867-4;P00001;2022-02-18 05:35:52.612;;;70;72;UTC+0700;9UHCXu-1FXILj-8PUVVn",
  "8867-4;P00001;2022-02-19 08:35:11.203;;;74;67;UTC+0700;2YNOPy-0QTAMx-3YEXAp",
  "8867-4;P00001;2022-02-20 05:35:31.959;;;61;60;UTC+0700;4FTNOg-9JGYBt-4UMIKr",
  "8867-4;P00001;2022-02-20 05:35:44.513;;;77;72;UTC+0700;1KSHPn-7CAKDj-1ELKZu",
  "8867-4;P00001;2022-02-22 00:40:49.585;;;66;96;UTC+0700;7ANCUr-3ASLTf-7OCPPh",
  "8867-4;P00001;2022-02-23 07:25:22.130;;;72;80;UTC+0700;7ORAXn-9EERWy-5ZLXZg",
  "8867-4;P00001;2022-02-26 21:04:45.702;;;81;92;UTC+0700;3UHLVy-6GGZNf-8JCZQz",
  "8867-4;P00001;2022-02-26 21:06:35.723;;;60;90;UTC+0700;3VTRMb-2VMDUw-3BJNJi",
  "8867-4;P00001;2022-03-01 04:35:10.945;;;86;74;UTC+0700;8RTQXf-9GHBUy-6UUHHo",
  "8867-4;P00001;2022-03-05 02:04:19.887;;;80;85;UTC+0700;8ELBNs-2OZGRr-8ACTHe",
  "8867-4;P00001;2022-03-18 01:08:22.209;;;89;71;UTC+0700;7JKAUk-6TAJKb-1DNIQf",
  "8867-4;P00001;2022-03-19 05:50:54.404;;;67;60;UTC+0700;6CGVOi-1ECULs-5DBWEq",
  "8867-4;P00001;2022-03-19 14:25:25.181;;;73;99;UTC+0700;3YZEHa-6DZKZm-1IJMRk",
  "8867-4;P00001;2022-03-20 02:35:06.752;;;61;90;UTC+0700;3UPGYz-2QVNBm-5YKYEs",
  "8867-4;P00001;2022-03-20 02:40:16.308;;;71;70;UTC+0700;8ZXAHe-3ZUQWx-0JGEZp",
  "8867-4;P00001;2022-03-20 13:09:35.918;;;81;75;UTC+0700;7RRGUg-8HXZEk-1PFEHi",
  "8867-4;P00001;2022-03-20 21:43:15.251;;;72;95;UTC+0700;5BGAUv-0SJXZy-4WVFWc",
  "8867-4;P00001;2022-03-20 21:49:10.929;;;86;100;UTC+0700;5EYGCv-0MMIQc-7LVKDj",
  "8867-4;P00001;2022-03-21 13:57:27.720;;;81;98;UTC+0700;0MYZNg-7IQNYo-7JADEa",
  "8867-4;P00001;2022-03-21 22:04:15.732;;;86;66;UTC+0700;9UBWWu-5EIZQh-3ELTQv",
  "8867-4;P00001;2022-03-21 23:46:22.081;;;63;96;UTC+0700;9PZCDk-5GVCIk-2ULKFt",
  "8867-4;P00001;2022-03-22 04:49:14.705;;;72;85;UTC+0700;9SIGEh-2YTZTc-0BHMVj",
  "8867-4;P00001;2022-03-22 20:19:01.613;;;87;81;UTC+0700;7NGKOl-2QVRBo-7QSNKh",
  "8867-4;P00001;2022-03-22 20:45:44.068;;;72;100;UTC+0700;3XPNZe-2TFJTw-2SQZFk",
  "8867-4;P00001;2022-03-26 17:45:43.645;;;73;60;UTC+0700;0CWXLx-9ZVWIk-0RQTDw",
  "8867-4;P00001;2022-03-26 21:45:02.896;;;89;61;UTC+0700;4TPKTl-9VADIj-2NIUTe",
  "8867-4;P00001;2022-03-28 19:59:59.004;;;75;88;UTC+0700;5RDRWi-9QHONa-6IIZCm",
  "8867-4;P00001;2022-03-28 20:05:32.282;;;75;83;UTC+0700;9FVZNd-2GDPQz-2ZBDIi",
  "8867-4;P00001;2022-03-28 23:07:51.439;;;72;93;UTC+0700;3UIDUv-4PVUVq-4QVUSq",
  "8867-4;P00001;2022-03-29 00:40:58.834;;;83;74;UTC+0700;2ONBSx-0OUIDf-8KURYa",
  "8867-4;P00001;2022-03-29 00:43:14.199;;;63;85;UTC+0700;3JLDXc-6KJLHn-4QTKRg",
  "8867-4;P00001;2022-03-29 00:49:06.877;;;70;60;UTC+0700;3KGQJc-3HHTCp-7RQRLj",
  "8867-4;P00001;2022-03-29 01:59:23.643;;;73;62;UTC+0700;5WJXAy-2GPOEp-4VCQKl",
  "8867-4;P00001;2022-03-30 02:10:45.205;;;70;85;UTC+0700;9JMBQm-3ACWXp-3FAHNo",
  "8867-4;P00001;2022-03-31 08:50:39.546;;;75;96;UTC+0700;4MEZSb-4ZNWSw-7RAQFr",
  "8867-4;P00001;2022-03-31 09:10:09.079;;;75;60;UTC+0700;0QIERr-3MJBXh-9TPQPz",
  "8867-4;P00001;2022-04-03 21:30:28.628;;;76;95;UTC+0700;9JCFSc-0QVITt-9FRVWx",
  "8867-4;P00001;2022-04-06 13:50:44.954;;;72;91;UTC+0700;5DRZKs-4VDIKf-3UWOLt",
  "8867-4;P00001;2022-04-07 16:40:35.367;;;71;75;UTC+0700;0RPFLu-2LNUEl-7PGFVi",
  "8867-4;P00001;2022-04-09 00:45:41.700;;;88;91;UTC+0700;6ATREc-1LAULp-1UKSUv",
  "8867-4;P00001;2022-04-09 04:05:41.873;;;75;85;UTC+0700;3PJLJt-4TMEGx-5RNXWy",
  "8867-4;P00001;2022-04-09 04:35:39.249;;;81;84;UTC+0700;7ANVFp-2KTYJu-1QYMQu",
  "8867-4;P00001;2022-04-10 12:35:53.604;;;78;90;UTC+0700;5GYUYa-9OWSVp-4UTRMb",
  "8867-4;P00001;2022-04-12 00:59:15.248;;;76;88;UTC+0700;0MCMYa-9EYAOd-4NUUUj",
  "8867-4;P00001;2022-04-12 01:05:29.779;;;83;91;UTC+0700;9LVTJf-1PPJXm-6ZRIAy",
  "8867-4;P00001;2022-04-12 01:07:51.617;;;61;95;UTC+0700;0GCRDz-0HGLFx-1DIIUa",
  "8867-4;P00001;2022-04-12 01:25:07.675;;;84;66;UTC+0700;0UQARc-8RPLIo-0HHGDz",
  "8867-4;P00001;2022-04-12 01:30:40.953;;;60;71;UTC+0700;6RNIIz-3GPTZh-5GZVRq",
  "8867-4;P00001;2022-04-12 01:45:07.007;;;89;84;UTC+0700;1APYLt-2OBMYx-9TJSHc",
  "8867-4;P00001;2022-04-20 10:45:27.281;;;76;60;UTC+0700;2AHAHb-8XCBMm-6WSKXb",
  "8867-4;P00001;2022-04-21 05:25:48.301;;;62;76;UTC+0700;9UAGPa-1IHVJc-2FZPXm",
  "8867-4;P00001;2022-04-24 15:30:02.335;;;84;82;UTC+0700;7DVUPb-3DIJVb-0QAQXz",
  "8867-4;P00001;2022-04-27 12:45:43.297;;;87;62;UTC+0700;5BIDWh-7ATGVq-5RPREo",
  "8867-4;P00001;2022-04-27 19:40:21.438;;;87;100;UTC+0700;6QRXXu-7JKBQc-1IDKWt",
  "8867-4;P00001;2022-04-28 20:40:07.185;;;60;86;UTC+0700;4OQHIq-0FUZPy-9DTRNo",
  "8867-4;P00001;2022-04-29 10:30:47.023;;;85;77;UTC+0700;1NGDPn-3XPHIr-0PSCSy",
  "8867-4;P00001;2022-05-01 08:35:27.109;;;87;81;UTC+0700;5NMLEo-8XSYSy-7VGCUo",
  "8867-4;P00001;2022-05-02 05:10:30.464;;;86;64;UTC+0700;9ALQBb-2FAYIh-7PVOWk",
  "8867-4;P00001;2022-05-05 02:25:23.955;;;66;80;UTC+0700;7UCMLy-8RWGEm-9RROBt",
  "8867-4;P00001;2022-05-11 19:26:15.335;;;61;76;UTC+0700;1YUDWx-9QGAZz-6VTGZa",
  "8867-4;P00001;2022-05-13 14:26:48.583;;;66;86;UTC+0700;4DQDVx-3KQBQx-5RMSDq",
  "8867-4;P00001;2022-05-16 07:50:55.361;;;76;65;UTC+0700;8HVOYn-2NENEb-9OORVv",
  "8867-4;P00001;2022-05-16 07:56:28.542;;;81;70;UTC+0700;4DGADv-1FKMYo-3AQGTu",
  "8867-4;P00001;2022-05-17 01:10:32.988;;;74;63;UTC+0700;3JGYRv-5REDNb-2TVBXn",
  "8867-4;P00001;2022-05-21 19:10:12.269;;;84;77;UTC+0700;4SNFAj-0EKRQt-9CBSQm",
  "8867-4;P00001;2022-05-21 19:15:05.146;;;82;96;UTC+0700;5CPIZv-1LZKSj-3SGBCy",
  "8867-4;P00001;2022-05-24 01:10:23.096;;;62;78;UTC+0700;1KCGGk-0APJTr-1AQEQc",
  "8867-4;P00001;2022-05-26 17:25:20.205;;;76;94;UTC+0700;7LGXVm-9QLGDj-8BSGSz",
  "8867-4;P00001;2022-05-26 18:15:51.415;;;72;75;UTC+0700;7DJZUv-6NUDRi-1PJFKo",
  "8867-4;P00001;2022-05-27 08:15:53.875;;;75;88;UTC+0700;7BETCa-4UATNa-0GNCUn",
  "8867-4;P00001;2022-05-27 09:35:20.016;;;73;80;UTC+0700;1XQSIv-5DIKXq-6PNHPn",
  "8867-4;P00001;2022-05-28 02:40:42.507;;;81;72;UTC+0700;2BSLLe-7HVULg-3SMTDr",
  "8867-4;P00001;2022-06-03 18:50:39.248;;;81;61;UTC+0700;9RDIZm-8LERLd-0JFYSi",
  "8867-4;P00001;2022-06-07 01:13:00.168;;;79;83;UTC+0700;4ZXVZs-1CHCAs-6IZBGh",
  "8867-4;P00001;2022-07-20 05:45:44.756;;;66;88;UTC+0700;4BTAVe-1LSYOv-3GMPAb",
  "8867-4;P00001;2022-07-27 22:40:18.873;;;85;100;UTC+0700;9IGEUe-0NGVEn-1XTZYz",
  "8867-4;P00001;2022-08-01 01:25:17.252;;;85;75;UTC+0700;3NTAVa-3MJTGx-6IDAQt",
  "8867-4;P00001;2022-08-03 05:45:28.711;;;60;74;UTC+0700;0VCIWl-7RFISz-6QWPIf",
  "8867-4;P00001;2022-08-03 12:20:15.851;;;62;80;UTC+0700;9DFZWl-0IYUBj-7UZKSg",
  "8867-4;P00001;2022-08-05 05:40:04.802;;;76;89;UTC+0700;2WXITj-2OZVLw-8PMLIs",
  "8867-4;P00001;2022-08-05 05:45:48.626;;;87;94;UTC+0700;6JYKZk-1RAONs-7JNILr",
  "8867-4;P00001;2022-08-05 05:50:51.155;;;87;60;UTC+0700;6YUDRc-1CHZNe-2ZSUDt",
  "8867-4;P00001;2022-08-05 05:56:48.899;;;75;60;UTC+0700;5SEJRy-6HUAPw-9JENCi",
  "8867-4;P00001;2022-08-05 06:20:38.088;;;62;98;UTC+0700;8RKTGq-6NAWAp-5NTPVj",
  "8867-4;P00001;2022-08-09 01:23:56.332;;;82;73;UTC+0700;5FOCQd-8CTVGs-5VSFQi",
  "8867-4;P00001;2022-10-26 22:45:44.884;;;86;92;UTC+0700;8DLQGb-6SMIPm-8PUYMt",
  "8867-4;P00001;2022-12-04 09:40:32.895;;;80;71;UTC+0700;2GMSQp-9JSOIc-8TZBTb",
  "8867-4;P00001;2022-12-04 09:55:04.726;;;85;90;UTC+0700;9ZQHQs-3XSEXe-6HUNOv",
  "8867-4;P00001;2022-12-19 13:10:04.865;;;85;78;UTC+0700;1MDHLt-8MXZJf-5KOUHl",
  "8867-4;P00001;2023-04-05 02:50:18.323;;;65;83;UTC+0700;7XPWWh-3JWFRt-9DXYVg",
  "8867-4;P00001;2023-04-05 02:55:43.298;;;80;91;UTC+0700;9LCKOt-0UHDQr-8PXURg",
];

const resultArray = [];

inputArray.forEach((entry) => {
  const [_, __, dateOld, ___, ____, heartRate, heartBeatCount, _____, ______] =
    entry.split(";");

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

console.log(resultArray);
