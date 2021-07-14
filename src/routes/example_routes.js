
module.exports = [
    {
        method: "GET",
        path: "/api",
        handler: (request, h) =>{
            return h.response({"status":"running"}).code(200)
        }
    }
]