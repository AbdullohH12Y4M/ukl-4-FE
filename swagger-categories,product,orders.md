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

q
slug
string
(query)
Filter berdasarkan slug

slug
isActive
boolean
(query)
Filter kategori aktif/non-aktif


true
page
number
(query)
Nomor halaman (dimulai dari 1)

page
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
  'https://sneakerlocal.up.railway.app/categories?isActive=true&limit=20' \
  -H 'accept: application/json'
Request URL
https://sneakerlocal.up.railway.app/categories?isActive=true&limit=20
Server response
Code	Details
200	
Response body
Download
{
  "page": 1,
  "limit": 20,
  "total": 2,
  "items": [
    {
      "id": "cmpxdikcw0001ms12pprcv36b",
      "name": "Sandal",
      "slug": "sandal",
      "isActive": true,
      "createdAt": "2026-06-03T01:14:13.520Z",
      "updatedAt": "2026-06-03T01:14:13.520Z"
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
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:08:59 GMT 
 etag: W/"16f-7Yz7Qyk02rxQ9L5LFwGNWkkpeu4" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: DvsXhjI3Q22ZBPla-8Y8hA 
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
      "name": "Kaos Polos",
      "slug": "kaos-polos",
      "isActive": true,
      "createdAt": "2026-06-03T02:17:57.513Z",
      "updatedAt": "2026-06-03T02:17:57.513Z"
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
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM' \
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
  "id": "cmpxflien0000oc12z4mz8oeo",
  "name": "Kaos Polos",
  "slug": "kaos-polos",
  "isActive": true,
  "createdAt": "2026-06-03T02:12:30.095Z",
  "updatedAt": "2026-06-03T02:12:30.095Z"
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:12:30 GMT 
 etag: W/"a8-/kG9oNIAraSP6NPWCuL9oj35sW0" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: FTFayqEFT4i3HZNVVOLIQQ 
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

1
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://sneakerlocal.up.railway.app/categories/1' \
  -H 'accept: */*'
Request URL
https://sneakerlocal.up.railway.app/categories/1
Server response
Code	Details
404	
Error: response status is 404

Response body
Download
{
  "message": "Category not found",
  "error": "Not Found",
  "statusCode": 404
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:13:03 GMT 
 etag: W/"45-GXqeQ7GjAuXOavS0EfHlAO4052s" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: 8yCqDZ5AQX66DRulAQeqjw 
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

1
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
  'https://sneakerlocal.up.railway.app/categories/1' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Kaos Premium",
  "slug": "kaos-premium",
  "isActive": true
}'
Request URL
https://sneakerlocal.up.railway.app/categories/1
Server response
Code	Details
404	
Error: response status is 404

Response body
Download
{
  "message": "Category not found",
  "error": "Not Found",
  "statusCode": 404
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:13:20 GMT 
 etag: W/"45-GXqeQ7GjAuXOavS0EfHlAO4052s" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: m-MPIoWgQTagvUXrDcO5xA 
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

7
Execute
Clear
Responses
Curl

curl -X 'DELETE' \
  'https://sneakerlocal.up.railway.app/categories/7' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM'
Request URL
https://sneakerlocal.up.railway.app/categories/7
Server response
Code	Details
200	
Response body
Download
{
  "success": false,
  "message": "Category does not exist",
  "data": null
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:13:39 GMT 
 etag: W/"41-YMb9sATJ7KO9RraZ5YhenK3gM70" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: PQiDBoGAQm-A72lYDcO5xA 
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
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:01:44 GMT 
 etag: W/"2a-NZMIsjv0Crmbe8MBFiUez7p2V8s" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: ZEJ_lx2UTp6UcxHm-8Y8hA 
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
      "name": "Kaos Polos Hitam",
      "slug": "kaos-polos-hitam",
      "description": "string",
      "basePrice": 85000,
      "imageUrl": "string",
      "isActive": true,
      "createdAt": "2026-06-03T02:17:57.533Z",
      "updatedAt": "2026-06-03T02:17:57.533Z",
      "category": {
        "id": "string",
        "name": "string",
        "slug": "string"
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
No parameters

Request body

application/json
Edit Value
Schema
{
  "type": "PRODUCT",
  "categoryId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
  "name": "Kaos Polos Hitam",
  "slug": "kaos-polos-hitam",
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
  -H 'Content-Type: application/json' \
  -d '{
  "type": "PRODUCT",
  "categoryId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
  "name": "Kaos Polos Hitam",
  "slug": "kaos-polos-hitam",
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
401	
Error: response status is 401

Response body
Download
{
  "message": "Unauthorized",
  "statusCode": 401
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:01:59 GMT 
 etag: W/"2b-dGnJzt6gv1nJjX6DJ9RztDWptng" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: Vu3IKCzXQ7yhbcb9mrpb1w 
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
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:02:07 GMT 
 etag: W/"44-wTifz+lt5rh8hO6zZnfv4ywflPk" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: lNDAjlZeSoykfTEdmrpb1w 
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
Name	Description
id *
string
(path)
ID produk (CUID)

1
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
Clear
Responses
Curl

curl -X 'PATCH' \
  'https://sneakerlocal.up.railway.app/products/1' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
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
}'
Request URL
https://sneakerlocal.up.railway.app/products/1
Server response
Code	Details
401	
Error: response status is 401

Response body
Download
{
  "message": "Unauthorized",
  "statusCode": 401
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:02:33 GMT 
 etag: W/"2b-dGnJzt6gv1nJjX6DJ9RztDWptng" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: zbVz9po3SEupUZ0F-8Y8hA 
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

4
Execute
Clear
Responses
Curl

curl -X 'DELETE' \
  'https://sneakerlocal.up.railway.app/products/4' \
  -H 'accept: */*'
Request URL
https://sneakerlocal.up.railway.app/products/4
Server response
Code	Details
401	
Error: response status is 401

Response body
Download
{
  "message": "Unauthorized",
  "statusCode": 401
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:02:57 GMT 
 etag: W/"2b-dGnJzt6gv1nJjX6DJ9RztDWptng" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: WhGHQbh5SKKCELZpVOLIQQ 
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

1
Request body

multipart/form-data
File gambar produk

file *
string($binary)
File gambar (JPG/PNG)

Screenshot 2025-11-20 093710.png
Execute
Clear
Responses
Curl

curl -X 'POST' \
  'https://sneakerlocal.up.railway.app/products/1/image' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@Screenshot 2025-11-20 093710.png;type=image/png'
Request URL
https://sneakerlocal.up.railway.app/products/1/image
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
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:16:10 GMT 
 etag: W/"44-wTifz+lt5rh8hO6zZnfv4ywflPk" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: rZLKLgDTR2mHfK-bDcO5xA 
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

1
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
Clear
Responses
Curl

curl -X 'PATCH' \
  'https://sneakerlocal.up.railway.app/skus/1' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM' \
  -H 'Content-Type: application/json' \
  -d '{
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
}'
Request URL
https://sneakerlocal.up.railway.app/skus/1
Server response
Code	Details
400	
Error: response status is 400

Response body
Download
{
  "message": "type must be SKU",
  "error": "Bad Request",
  "statusCode": 400
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:16:23 GMT 
 etag: W/"45-o/KTUimABcrLm7b6/6VdRnLKNUk" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: iIpoEIPRTDuM_z3Ymrpb1w 
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

1
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
Clear
Responses
Curl

curl -X 'PATCH' \
  'https://sneakerlocal.up.railway.app/inventories/1' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM' \
  -H 'Content-Type: application/json' \
  -d '{
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
}'
Request URL
https://sneakerlocal.up.railway.app/inventories/1
Server response
Code	Details
400	
Error: response status is 400

Response body
Download
{
  "message": "type must be STOCK",
  "error": "Bad Request",
  "statusCode": 400
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:16:35 GMT 
 etag: W/"47-V/NPA6qtvBYpPijONDpttVgg0EQ" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: sx55N3sUR6aHo7lC0ubPiw 
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
Orders
Checkout, pembayaran, dan manajemen pesanan



POST
/checkout
Checkout / buat pesanan baru


Membuat pesanan baru. Stok akan berkurang secara atomik. Jika shippingType=DELIVERY, wajib isi district dan shippingAddress. Pesanan yang tidak dibayar dalam 1 jam akan otomatis dibatalkan.

Parameters
Cancel
No parameters

Request body

application/json
Edit Value
Schema
{
  "items": [
    {
      "skuId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
      "quantity": 2
    }
  ],
  "shippingType": "DELIVERY",
  "district": "LOWOKWARU",
  "shippingAddress": "Jl. Soekarno-Hatta No. 9, Lowokwaru, Malang",
  "paymentMethod": "MANUAL_TRANSFER"
}
Execute
Clear
Responses
Curl

curl -X 'POST' \
  'https://sneakerlocal.up.railway.app/checkout' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM' \
  -H 'Content-Type: application/json' \
  -d '{
  "items": [
    {
      "skuId": "clxxxxxxxxxxxxxxxxxxxxxxxxx",
      "quantity": 2
    }
  ],
  "shippingType": "DELIVERY",
  "district": "LOWOKWARU",
  "shippingAddress": "Jl. Soekarno-Hatta No. 9, Lowokwaru, Malang",
  "paymentMethod": "MANUAL_TRANSFER"
}'
Request URL
https://sneakerlocal.up.railway.app/checkout
Server response
Code	Details
400	
Error: response status is 400

Response body
Download
{
  "message": "Some SKU not found",
  "error": "Bad Request",
  "statusCode": 400
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:16:46 GMT 
 etag: W/"47-ZApEWvu6yZsm8UDaFsdlWZL6Gv4" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: 1rR7irW1Q_uUrW3T0ubPiw 
Responses
Code	Description	Links
201	
Pesanan berhasil dibuat

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "id": "string",
  "userId": "string",
  "status": "PENDING",
  "shippingType": "DELIVERY",
  "district": "LOWOKWARU",
  "shippingAddress": "string",
  "shippingFee": 10000,
  "subtotal": 170000,
  "total": 180000,
  "paymentMethod": "MANUAL_TRANSFER",
  "paymentExpiresAt": "2026-06-03T02:17:57.556Z",
  "createdAt": "2026-06-03T02:17:57.556Z",
  "items": [
    {
      "id": "string",
      "skuId": "string",
      "quantity": 2,
      "price": 85000
    }
  ]
}
No links
400	
Validasi gagal, stok tidak cukup, atau SKU tidak ditemukan

No links
401	
Token tidak valid atau tidak ada

No links

GET
/orders
Daftar pesanan saya


Mengambil daftar pesanan milik user yang sedang login, dengan pagination dan filter status.

Parameters
Cancel
Name	Description
status
string
(query)
Filter berdasarkan status pesanan


PENDING
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
  'https://sneakerlocal.up.railway.app/orders?status=PENDING&page=1&limit=20' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM'
Request URL
https://sneakerlocal.up.railway.app/orders?status=PENDING&page=1&limit=20
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
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:17:10 GMT 
 etag: W/"2a-NZMIsjv0Crmbe8MBFiUez7p2V8s" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: Y1m1U4uqRmiw81glmrpb1w 
Responses
Code	Description	Links
200	
Berhasil mengambil daftar pesanan

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "page": 1,
  "limit": 20,
  "total": 3,
  "items": [
    {}
  ]
}
No links
401	
Token tidak valid atau tidak ada

No links

GET
/orders/{id}
Detail pesanan saya


Mengambil detail pesanan berdasarkan ID. Hanya bisa melihat pesanan milik sendiri.

Parameters
Cancel
Name	Description
id *
string
(path)
ID pesanan (CUID)

1
Execute
Clear
Responses
Curl

curl -X 'GET' \
  'https://sneakerlocal.up.railway.app/orders/1' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM'
Request URL
https://sneakerlocal.up.railway.app/orders/1
Server response
Code	Details
404	
Error: response status is 404

Response body
Download
{
  "message": "Order not found",
  "error": "Not Found",
  "statusCode": 404
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:17:30 GMT 
 etag: W/"42-l+2+Ab0WayswWq7rgjnlDZ9zn3I" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: otRxTF7QRuCM1TpZ0ubPiw 
Responses
Code	Description	Links
200	
Berhasil mengambil detail pesanan

No links
401	
Token tidak valid atau tidak ada

No links
403	
Pesanan bukan milik user ini

No links
404	
Pesanan tidak ditemukan

No links

DELETE
/orders/{id}
Hapus pesanan


Menghapus pesanan berdasarkan ID. Bisa diakses oleh Customer dan Admin.

Parameters
Cancel
Name	Description
id *
string
(path)
ID pesanan (CUID)

10
Execute
Clear
Responses
Curl

curl -X 'DELETE' \
  'https://sneakerlocal.up.railway.app/orders/10' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZGg1bnQwMDAwbXMxMmtxYWJyMWt6IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODA0NTI2MjAsImV4cCI6MTc4MTA1NzQyMH0.OdGwFd-tENM_0Xc04BXaSQmptwEGXbQCpJVlqDZ1acM'
Request URL
https://sneakerlocal.up.railway.app/orders/10
Server response
Code	Details
200	
Response body
Download
{
  "success": false,
  "message": "Order does not exist",
  "data": null
}
Response headers
 access-control-allow-origin: * 
 content-encoding: gzip 
 content-type: application/json; charset=utf-8 
 date: Wed,03 Jun 2026 02:17:40 GMT 
 etag: W/"3e-yxE/H34YdFWP9EBFx+sUnFVkNcU" 
 server: railway-hikari 
 vary: accept-encoding 
 x-hikari-trace: sin1.nzn2 
 x-powered-by: Express 
 x-railway-edge: railway/asia-southeast1-eqsg3a 
 x-railway-request-id: lIyjs6r8SlOkBt-5mrpb1w 
Responses
Code	Description	Links
200	
Pesanan berhasil dihapus

No links
401	
Token tidak valid atau tidak ada

No links
403	
Tidak memiliki akses

No links
404	
Pesanan tidak ditemukan

No links

POST
/orders/{id}/payment-proof
Upload bukti pembayaran


Upload bukti transfer untuk pesanan yang masih PENDING. Setelah upload, status pesanan berubah menjadi WAITING_CONFIRMATION. File dikirim sebagai multipart/form-data.

Parameters
Cancel
Reset
Name	Description
id *
string
(path)
ID pesanan (CUID)

id
Request body

multipart/form-data
File bukti pembayaran dan catatan opsional

file *
string($binary)
File bukti transfer (JPG/PNG)

No file chosen
note
string
Catatan opsional

Transfer via BCA a/n Budi
Send empty value
Please correct the following validation errors and try again.
For 'id': Required field is not provided.
Execute
Responses
Code	Description	Links
200	
Bukti pembayaran berhasil diupload

No links
400	
Pesanan bukan PENDING atau bukti sudah diupload

No links
401	
Token tidak valid atau tidak ada

No links
403	
Pesanan bukan milik user ini

No links
404	
Pesanan tidak ditemukan

No links

PATCH
/orders/{id}/status
Update status pesanan (Admin)


Admin mengubah status pesanan. Transisi yang diizinkan:

PENDING → CANCELLED
WAITING_CONFIRMATION → PAID / CANCELLED
PAID → SHIPPED
Jika dibatalkan, stok akan dikembalikan secara otomatis.

Parameters
Cancel
Name	Description
id *
string
(path)
ID pesanan (CUID)

id
Request body

application/json
Edit Value
Schema
{
  "status": "PAID",
  "note": "Transfer via BCA a/n Budi"
}
Execute
Responses
Code	Description	Links
200	
Status pesanan berhasil diupdate

No links
400	
Transisi status tidak valid

No links
401	
Token tidak valid atau tidak ada

No links
403	
Hanya Admin yang bisa mengakses

No links
404	
Pesanan tidak ditemukan