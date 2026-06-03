{
  "api_info": {
    "title": "Auth API - SneakerLocal",
    "base_url": "https://sneakerlocal.up.railway.app",
    "version": "1.0.0"
  },
  "endpoints": {
    "/auth/register/admin": {
      "POST": {
        "summary": "Registrasi Admin Baru",
        "description": "Membuat akun admin baru dengan email dan password.",
        "request_body": {
          "content_type": "application/json",
          "example": {
            "email": "user@example.com",
            "password": "password123"
          }
        },
        "responses": {
          "201": {
            "description": "Registrasi admin berhasil"
          },
          "400": {
            "description": "Email sudah terdaftar atau validasi gagal",
            "example": {
              "message": "Email already registered",
              "error": "Bad Request",
              "statusCode": 400
            }
          }
        }
      }
    },
    "/auth/register/customer": {
      "POST": {
        "summary": "Registrasi Pelanggan Baru",
        "description": "Membuat akun pelanggan baru dengan email dan password. Email harus unik.",
        "request_body": {
          "content_type": "application/json",
          "example": {
            "email": "user@example.com",
            "password": "password123"
          }
        },
        "responses": {
          "201": {
            "description": "Registrasi berhasil",
            "content_type": "application/json",
            "example": {
              "user": {
                "id": "cmpxehn7q0009ms125hb6o3wt",
                "email": "user@example.com",
                "role": "CUSTOMER"
              }
            }
          },
          "400": {
            "description": "Email sudah terdaftar atau validasi gagal",
            "example": {
              "message": "Email already registered",
              "error": "Bad Request",
              "statusCode": 400
            }
          }
        }
      }
    },
    "/auth/login": {
      "POST": {
        "summary": "Login Pengguna",
        "description": "Autentikasi dengan email dan password. Mengembalikan JWT access token.",
        "request_body": {
          "content_type": "application/json",
          "example": {
            "email": "user@example.com",
            "password": "password123"
          }
        },
        "responses": {
          "200": {
            "description": "Login berhasil",
            "content_type": "application/json",
            "example": {
              "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbXB4ZWhuN3EwMDA5bXMxMjVoYjZvM3d0IiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwicm9sZSI6IkNVU1RPTUVSIiwiaWF0IjoxNzgwNDUyMDMyLCJleHAiOjE3ODEwNTY4MzJ9.I3o5vBQYFniZyWoYay2phFMcJAvaJwNlHX5ZgfJKeek",
              "user": {
                "id": "cmpxehn7q0009ms125hb6o3wt",
                "email": "user@example.com",
                "role": "CUSTOMER"
              }
            }
          },
          "401": {
            "description": "Email atau password salah"
          }
        }
      }
    }
  }
}