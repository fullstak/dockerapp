import * as hapi from "hapi";

let PORT = 9001;
const server: hapi.Server = new hapi.Server()
server.connection({ port: PORT });

server.route({
    method: "GET",
    path: "/",
    handler: (request: hapi.Request, reply: hapi.IReply) => {
        reply("Hello World12")
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("server running at "+PORT);
})