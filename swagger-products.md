Categories
Manajemen kategori produk



GET
/categories
Daftar semua kategori

Mengambil daftar kategori dengan pagination dan filter. Endpoint publik.
Parameters
Cancel
Name	Description
q
string
(query)
Kata kunci pencarian (nama/slug)

kaos
slug
string
(query)
Filter berdasarkan slug

kaos-polos
isActive
boolean
(query)
Filter kategori aktif/non-aktif


true
page
number
(query)
Nomor halaman (dimulai dari 1)

1
limit
number
(query)
Jumlah item per halaman

20
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://sneakerlocal.up.railway.app/categories?q=kaos&slug=kaos-polos&isActive=true&page=1&limit=20' \
  -H 'accept: application/json'
Request URL
https://sneakerlocal.up.railway.app/categories?q=kaos&slug=kaos-polos&isActive=true&page=1&limit=20
Server response
Code	Details
200	
Response body
Download
{
  "page": 1,
  "limit": 20,
  "total": 1,
  "items": [
    {
      "id": "cmpy2jh7u000bpc12z0l3pjp1",
      "name": "Kaos Polos",
      "slug": "kaos-polos",
      "isActive": true,
      "createdAt": "2026-06-03T12:54:46.502Z",
      "updatedAt": "2026-06-03T12:54:46.502Z"
    }
  ]
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 12:54:57 GMT 
 etag: W/"d2-cltOPTT0PFDpYoiPsVxHdsx2Pvg" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: 19TnrFp8Q_GmtJ84acI7Nw 
Responses
Code	Description	Links
200	
Berhasil mengambil daftar kategori

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "page": 1,
  "limit": 20,
  "total": 5,
  "items": [
    {
      "id": "string",
      "name": "",
      "slug": "",
      "isActive": true,
      "createdAt": "2026-06-03T16:15:15.140Z",
      "updatedAt": "2026-06-03T16:15:15.140Z"
    }
  ]
}
No links

POST
/categories
Buat kategori baru (Admin)


Membuat kategori baru. Hanya bisa diakses oleh Admin.

Parameters
Cancel
No parameters

Request body

application/json
Edit Value
Schema
{
  "name": "Kaos Polos",
  "slug": "kaos-polos"
}
Execute
Clear
Responses
Curl

curl -X 'POST' \
  'https://sneakerlocal.up.railway.app/categories' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0OTA3ODksImV4cCI6MTc4MTA5NTU4OX0.stz0cKUUCsGppi4k5U236_5l4C7XCJTCu-Lfstw2ui4' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Kaos Polos",
  "slug": "kaos-polos"
}'
Request URL
https://sneakerlocal.up.railway.app/categories
Server response
Code	Details
201	
Response body
Download
{
  "id": "cmpy2jh7u000bpc12z0l3pjp1",
  "name": "Kaos Polos",
  "slug": "kaos-polos",
  "isActive": true,
  "createdAt": "2026-06-03T12:54:46.502Z",
  "updatedAt": "2026-06-03T12:54:46.502Z"
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 12:54:46 GMT 
 etag: W/"a8-1hgWhhMmZ1k0kxez9CvAQ9qlYEw" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: aIjYciprQFaqANJvacI7Nw 
Responses
Code	Description	Links
201	
Kategori berhasil dibuat

No links
400	
Slug sudah ada atau validasi gagal

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links

GET
/categories/all
Daftar semua kategori aktif (Publik)

Mengambil semua kategori aktif tanpa filter.

Parameters
Cancel
No parameters

Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://sneakerlocal.up.railway.app/categories/all' \
  -H 'accept: */*'
Request URL
https://sneakerlocal.up.railway.app/categories/all
Server response
Code	Details
200	
Response body
Download
[
  {
    "id": "cmpxto1nf0000pc124v1zkgwx",
    "name": "Formal",
    "slug": "formal",
    "isActive": true,
    "createdAt": "2026-06-03T08:46:22.938Z",
    "updatedAt": "2026-06-03T08:46:59.871Z"
  },
  {
    "id": "cmpwbvprp0002pm12sla3n0jn",
    "name": "Pantofel",
    "slug": "pantofel",
    "isActive": true,
    "createdAt": "2026-06-02T07:40:41.647Z",
    "updatedAt": "2026-06-02T07:40:41.647Z"
  },
  {
    "id": "cmpxdikcw0001ms12pprcv36b",
    "name": "Sandal",
    "slug": "sandal",
    "isActive": true,
    "createdAt": "2026-06-03T01:14:13.520Z",
    "updatedAt": "2026-06-03T01:14:13.520Z"
  }
]
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 12:54:08 GMT 
 etag: W/"1e8-8BPXjyW7j0oILTYpIZKqV9W78hg" 
 server: railway-hikari 
 vary: Origin 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: iArDrfLsQYe0I0HDJH0Vcg 
Responses
Code	Description	Links
200	
Berhasil mengambil semua kategori

No links

GET
/categories/{id}
Detail kategori

Mengambil detail satu kategori berdasarkan ID.

Parameters
Cancel
Name	Description
id *
string
(path)
ID kategori (CUID)

cmpxdikcw0001ms12pprcv36b
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://sneakerlocal.up.railway.app/categories/cmpxdikcw0001ms12pprcv36b' \
  -H 'accept: */*'
Request URL
https://sneakerlocal.up.railway.app/categories/cmpxdikcw0001ms12pprcv36b
Server response
Code	Details
200	
Response body
Download
{
  "id": "cmpxdikcw0001ms12pprcv36b",
  "name": "Sandal",
  "slug": "sandal",
  "isActive": true,
  "createdAt": "2026-06-03T01:14:13.520Z",
  "updatedAt": "2026-06-03T01:14:13.520Z"
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 12:55:40 GMT 
 etag: W/"a0-imJBg4VNsVOOpoGk0UdpOzgSwuI" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: 00cXr3IkRqmTZ5tlVOLIQQ 
Responses
Code	Description	Links
200	
Berhasil mengambil detail kategori

No links
404	
Kategori tidak ditemukan

No links

PATCH
/categories/{id}
Update kategori (Admin)


Mengupdate data kategori. Hanya bisa diakses oleh Admin.

Parameters
Cancel
Name	Description
id *
string
(path)
ID kategori (CUID)

cmpxdikcw0001ms12pprcv36b
Request body

application/json
Edit Value
Schema
{
  "name": "Kaos Premium",
  "slug": "kaos-premium",
  "isActive": true
}
Execute
Clear
Responses
Curl

curl -X 'PATCH' \
  'https://sneakerlocal.up.railway.app/categories/cmpxdikcw0001ms12pprcv36b' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0OTA3ODksImV4cCI6MTc4MTA5NTU4OX0.stz0cKUUCsGppi4k5U236_5l4C7XCJTCu-Lfstw2ui4' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Kaos Premium",
  "slug": "kaos-premium",
  "isActive": true
}'
Request URL
https://sneakerlocal.up.railway.app/categories/cmpxdikcw0001ms12pprcv36b
Server response
Code	Details
200	
Response body
Download
{
  "id": "cmpxdikcw0001ms12pprcv36b",
  "name": "Kaos Premium",
  "slug": "kaos-premium",
  "isActive": true,
  "createdAt": "2026-06-03T01:14:13.520Z",
  "updatedAt": "2026-06-03T12:55:59.040Z"
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 12:55:59 GMT 
 etag: W/"ac-msMhjqAPyGHuklSpXnirXchbC3c" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: P874Oe3oT62G45nvacI7Nw 
Responses
Code	Description	Links
200	
Kategori berhasil diupdate

No links
400	
Slug sudah ada atau validasi gagal

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links
404	
Kategori tidak ditemukan

No links

DELETE
/categories/{id}
Hapus kategori (Admin)


Menghapus kategori berdasarkan ID. Hanya bisa diakses oleh Admin.

Parameters
Cancel
Name	Description
id *
string
(path)
ID kategori (CUID)

cmpxdikcw0001ms12pprcv36b
Execute
Clear
Responses
Curl

curl -X 'DELETE' \
  'https://sneakerlocal.up.railway.app/categories/cmpxdikcw0001ms12pprcv36b' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0OTA3ODksImV4cCI6MTc4MTA5NTU4OX0.stz0cKUUCsGppi4k5U236_5l4C7XCJTCu-Lfstw2ui4'
Request URL
https://sneakerlocal.up.railway.app/categories/cmpxdikcw0001ms12pprcv36b
Server response
Code	Details
500
Undocumented
Error: response status is 500

Response body
Download
{
  "statusCode": 500,
  "message": "Internal server error"
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 12:56:53 GMT 
 etag: W/"34-rlKccw1E+/fV8niQk4oFitDfPro" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: xAM8So8LT-mGMM2GAQeqjw 
Responses
Code	Description	Links
200	
Kategori berhasil dihapus

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links
404	
Kategori tidak ditemukan

No links
Products
Manajemen produk, SKU, dan inventory



GET
/products
Daftar produk (Publik)

Mengambil daftar produk aktif dengan pagination dan filter berdasarkan kategori, warna, ukuran, dan rentang harga.

Parameters
Cancel
Name	Description
q
string
(query)
Kata kunci pencarian (nama/slug/deskripsi)

kaos
categorySlug
string
(query)
Filter berdasarkan slug kategori

kaos-polos
color
string
(query)
Filter berdasarkan warna SKU

Hitam
size
string
(query)
Filter berdasarkan ukuran SKU

L
minPrice
number
(query)
Harga minimum (Rupiah)

50000
maxPrice
number
(query)
Harga maksimum (Rupiah)

200000
page
number
(query)
Nomor halaman

1
limit
number
(query)
Jumlah item per halaman

20
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://sneakerlocal.up.railway.app/products?q=kaos&categorySlug=kaos-polos&color=Hitam&size=L&minPrice=50000&maxPrice=200000&page=1&limit=20' \
  -H 'accept: application/json'
Request URL
https://sneakerlocal.up.railway.app/products?q=kaos&categorySlug=kaos-polos&color=Hitam&size=L&minPrice=50000&maxPrice=200000&page=1&limit=20
Server response
Code	Details
200	
Response body
Download
{
  "page": 1,
  "limit": 20,
  "total": 0,
  "items": []
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 15:40:52 GMT 
 etag: W/"2a-NZMIsjv0Crmbe8MBFiUez7p2V8s" 
 server: railway-hikari 
 vary: Origin 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: CPncPHfxTc-EMyNDV7rehQ 
Responses
Code	Description	Links
200	
Berhasil mengambil daftar produk

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "page": 1,
  "limit": 20,
  "total": 50,
  "items": [
    {
      "id": "string",
      "categoryId": "string",
      "name": "",
      "slug": "",
      "description": "string",
      "basePrice": 0,
      "imageUrl": "string",
      "isActive": true,
      "createdAt": "2026-06-03T16:15:15.168Z",
      "updatedAt": "2026-06-03T16:15:15.168Z",
      "category": {
        "id": "string",
        "name": "",
        "slug": ""
      }
    }
  ]
}
No links

POST
/products
Buat produk atau SKU baru (Admin)


Membuat produk baru (type=PRODUCT) atau menambah varian/SKU ke produk yang sudah ada (type=SKU). Hanya Admin yang bisa mengakses.

Parameters
Cancel
Reset
No parameters

Request body

application/json
Edit Value
Schema
{
  "type": "PRODUCT",
  "categoryId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
  "name": "Kaos Polos-putih",
  "slug": "kaos-polos-putih",
  "description": "Kaos polos bahan cotton combed 30s",
  "basePrice": 85000,
  "imageUrl": "string",
  "isActive": true,
  "productId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
  "color": "Hitam",
  "size": "L",
  "initialStock": 50
}
Execute
Clear
Responses
Curl

curl -X 'POST' \
  'https://sneakerlocal.up.railway.app/products' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0OTA3ODksImV4cCI6MTc4MTA5NTU4OX0.stz0cKUUCsGppi4k5U236_5l4C7XCJTCu-Lfstw2ui4' \
  -H 'Content-Type: application/json' \
  -d '{
  "type": "PRODUCT",
  "categoryId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
  "name": "Kaos Polos-putih",
  "slug": "kaos-polos-putih",
  "description": "Kaos polos bahan cotton combed 30s",
  "basePrice": 85000,
  "imageUrl": "string",
  "isActive": true,
  "productId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
  "color": "Hitam",
  "size": "L",
  "initialStock": 50
}'
Request URL
https://sneakerlocal.up.railway.app/products
Server response
Code	Details
400	
Error: response status is 400

Response body
Download
{
  "message": "Failed to create product. Slug might already exist.",
  "error": "Bad Request",
  "statusCode": 400
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 15:45:51 GMT 
 etag: W/"68-GeTAEitOVPydJs+JkFC5b4xECAg" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: 8h_n1txdSayd-eRdV7rehQ 
Responses
Code	Description	Links
201	
Produk/SKU berhasil dibuat

No links
400	
Validasi gagal atau slug/SKU duplikat

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links

GET
/products/all
Daftar semua produk dan kategori aktif (Publik)

Mengambil semua produk aktif dan kategori aktif tanpa filter.

Parameters
Cancel
No parameters

Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://sneakerlocal.up.railway.app/products/all' \
  -H 'accept: */*'
Request URL
https://sneakerlocal.up.railway.app/products/all
Server response
Code	Details
200	
Response body
Download
{
  "products": [
    {
      "id": "cmpxstgra0003ph12we97eka9",
      "categoryId": "cmpwbvprp0002pm12sla3n0jn",
      "name": "Pantofel Hitam",
      "slug": "pantofel-hitam",
      "description": "sepatu untuk upacara senin",
      "basePrice": 100000,
      "imageUrl": null,
      "isActive": true,
      "createdAt": "2026-06-03T08:22:36.310Z",
      "updatedAt": "2026-06-03T08:22:36.310Z",
      "category": {
        "id": "cmpwbvprp0002pm12sla3n0jn",
        "name": "Pantofel",
        "slug": "pantofel",
        "isActive": true,
        "createdAt": "2026-06-02T07:40:41.647Z",
        "updatedAt": "2026-06-02T07:40:41.647Z"
      }
    },
    {
      "id": "cmpxdkyd20003ms122zw9oabz",
      "categoryId": "cmpxdikcw0001ms12pprcv36b",
      "name": "Sandal Pantai",
      "slug": "sandal-pantai",
      "description": "Sandal untuk santai di pantai",
      "basePrice": 75000,
      "imageUrl": "string",
      "isActive": true,
      "createdAt": "2026-06-03T01:16:04.983Z",
      "updatedAt": "2026-06-03T02:08:08.275Z",
      "category": {
        "id": "cmpxdikcw0001ms12pprcv36b",
        "name": "Kaos Premium",
        "slug": "kaos-premium",
        "isActive": true,
        "createdAt": "2026-06-03T01:14:13.520Z",
        "updatedAt": "2026-06-03T12:55:59.040Z"
      }
    },
    {
      "id": "cmpwc36us0004pm12qiparun2",
      "categoryId": "cmpwbvprp0002pm12sla3n0jn",
      "name": "Sepatu X",
      "slug": "sepatu-x",
      "description": "Sepatu Pantofel untuk hari senin as Mokleters",
      "basePrice": 200000,
      "imageUrl": "string",
      "isActive": true,
      "createdAt": "2026-06-02T07:46:30.382Z",
      "updatedAt": "2026-06-02T07:46:30.382Z",
      "category": {
        "id": "cmpwbvprp0002pm12sla3n0jn",
        "name": "Pantofel",
        "slug": "pantofel",
        "isActive": true,
        "createdAt": "2026-06-02T07:40:41.647Z",
        "updatedAt": "2026-06-02T07:40:41.647Z"
      }
    }
  ],
  "categories": [
    {
      "id": "cmpxto1nf0000pc124v1zkgwx",
      "name": "Formal",
      "slug": "formal",
      "isActive": true,
      "createdAt": "2026-06-03T08:46:22.938Z",
      "updatedAt": "2026-06-03T08:46:59.871Z"
    },
    {
      "id": "cmpy2jh7u000bpc12z0l3pjp1",
      "name": "Kaos Polos",
      "slug": "kaos-polos",
      "isActive": true,
      "createdAt": "2026-06-03T12:54:46.502Z",
      "updatedAt": "2026-06-03T12:54:46.502Z"
    },
    {
      "id": "cmpxdikcw0001ms12pprcv36b",
      "name": "Kaos Premium",
      "slug": "kaos-premium",
      "isActive": true,
      "createdAt": "2026-06-03T01:14:13.520Z",
      "updatedAt": "2026-06-03T12:55:59.040Z"
    },
    {
      "id": "cmpwbvprp0002pm12sla3n0jn",
      "name": "Pantofel",
      "slug": "pantofel",
      "isActive": true,
      "createdAt": "2026-06-02T07:40:41.647Z",
      "updatedAt": "2026-06-02T07:40:41.647Z"
    }
  ]
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 14:23:18 GMT 
 etag: W/"858-t1fzoV5OGEhqpLSQWBP1VnHgVQQ" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.tr00 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: XzHfEncsRgCTivYUipRofQ 
Responses
Code	Description	Links
200	
Berhasil mengambil semua produk dan kategori

No links

GET
/products/{slug}
Detail produk (Publik)

Mengambil detail produk berdasarkan slug, termasuk SKU dan inventory.

Parameters
Cancel
Name	Description
slug *
string
(path)
Slug produk

kaos-polos-hitam
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://sneakerlocal.up.railway.app/products/kaos-polos-hitam' \
  -H 'accept: */*'
Request URL
https://sneakerlocal.up.railway.app/products/kaos-polos-hitam
Server response
Code	Details
404	
Error: response status is 404

Response body
Download
{
  "message": "Product not found",
  "error": "Not Found",
  "statusCode": 404
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 15:44:40 GMT 
 etag: W/"44-wTifz+lt5rh8hO6zZnfv4ywflPk" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: -hjfKeSDRjOtYT2aV7rehQ 
Responses
Code	Description	Links
200	
Berhasil mengambil detail produk

No links
404	
Produk tidak ditemukan atau tidak aktif

No links

PATCH
/products/{id}
Update produk (Admin)


Mengupdate data produk. Gunakan type=PRODUCT atau kosongkan type.

Parameters
Cancel
Reset
Name	Description
id *
string
(path)
ID produk (CUID)

cmpxto1nf0000pc124v1zkgwx
Request body

application/json
Edit Value
Schema
{
  "type": "PRODUCT",
  "categoryId": "cmpxto1nf0000pc124v1zkgwx",
  "name": "Kaos Polos Premium",
  "slug": "kaos-polos-premium",
  "description": "Kaos polos premium bahan cotton combed 24s",
  "basePrice": 95000,
  "imageUrl": "string",
  "color": "Putih",
  "size": "XL",
  "stock": 100
}
Execute
Clear
Responses
Curl

curl -X 'PATCH' \
  'https://sneakerlocal.up.railway.app/products/cmpxto1nf0000pc124v1zkgwx' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0OTA3ODksImV4cCI6MTc4MTA5NTU4OX0.stz0cKUUCsGppi4k5U236_5l4C7XCJTCu-Lfstw2ui4' \
  -H 'Content-Type: application/json' \
  -d '{
  "type": "PRODUCT",
  "categoryId": "cmpxto1nf0000pc124v1zkgwx",
  "name": "Kaos Polos Premium",
  "slug": "kaos-polos-premium",
  "description": "Kaos polos premium bahan cotton combed 24s",
  "basePrice": 95000,
  "imageUrl": "string",
  "color": "Putih",
  "size": "XL",
  "stock": 100
}'
Request URL
https://sneakerlocal.up.railway.app/products/cmpxto1nf0000pc124v1zkgwx
Server response
Code	Details
404	
Error: response status is 404

Response body
Download
{
  "message": "Product not found",
  "error": "Not Found",
  "statusCode": 404
}
Response headers
 access-control-allow-credentials: true 
 access-control-allow-origin: https://ukl-4-fe.vercel.app,http://localhost:3000 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 16:14:16 GMT 
 etag: W/"44-wTifz+lt5rh8hO6zZnfv4ywflPk" 
 server: railway-hikari 
 vary: Origin,accept-encoding 
 x-hikari-trace: sin1.tr00 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: d104LlPTQ-2ZR3-hoB_USg 
Responses
Code	Description	Links
200	
Produk berhasil diupdate

No links
400	
Validasi gagal atau slug duplikat

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links
404	
Produk tidak ditemukan

No links

DELETE
/products/{id}
Hapus produk (Admin)


Menghapus produk beserta semua SKU dan inventory terkait.

Parameters
Cancel
Name	Description
id *
string
(path)
ID produk (CUID)

id
Execute
Responses
Code	Description	Links
200	
Produk berhasil dihapus

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links
404	
Produk tidak ditemukan

No links

POST
/products/{id}/image
Upload gambar produk (Admin)


Upload gambar produk ke Cloudinary. File dikirim sebagai multipart/form-data.

Parameters
Cancel
Reset
Name	Description
id *
string
(path)
ID produk (CUID)

id
Request body

multipart/form-data
File gambar produk

file *
string($binary)
File gambar (JPG/PNG)

No file chosen
Execute
Responses
Code	Description	Links
200	
Gambar berhasil diupload

No links
400	
File tidak ditemukan

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links
404	
Produk tidak ditemukan

No links

PATCH
/skus/{id}
Update SKU/varian (Admin)


Mengupdate warna dan/atau ukuran SKU. Gunakan type=SKU di body.

Parameters
Cancel
Name	Description
id *
string
(path)
ID SKU (CUID)

id
Request body

application/json
Edit Value
Schema
{
  "type": "PRODUCT",
  "categoryId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
  "name": "Kaos Polos Premium",
  "slug": "kaos-polos-premium",
  "description": "Kaos polos premium bahan cotton combed 24s",
  "basePrice": 95000,
  "imageUrl": "string",
  "color": "Putih",
  "size": "XL",
  "stock": 100
}
Execute
Responses
Code	Description	Links
200	
SKU berhasil diupdate

No links
400	
Validasi gagal atau SKU duplikat

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links
404	
SKU tidak ditemukan

No links

PATCH
/inventories/{skuId}
Update stok inventory (Admin)


Mengupdate jumlah stok untuk SKU tertentu. Gunakan type=STOCK di body.

Parameters
Cancel
Name	Description
skuId *
string
(path)
ID SKU (CUID)

skuId
Request body

application/json
Edit Value
Schema
{
  "type": "PRODUCT",
  "categoryId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
  "name": "Kaos Polos Premium",
  "slug": "kaos-polos-premium",
  "description": "Kaos polos premium bahan cotton combed 24s",
  "basePrice": 95000,
  "imageUrl": "string",
  "color": "Putih",
  "size": "XL",
  "stock": 100
}
Execute
Responses
Code	Description	Links
200	
Stok berhasil diupdate

No links
400	
type harus STOCK dan stock wajib diisi

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links
404	
SKU tidak ditemukan

No links