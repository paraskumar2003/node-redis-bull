import Redis from "ioredis";

export const redis = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: 6379
});


redis.on("connect", () => {
    console.log("Redis connected");
})

redis.on("error", (err) => {
    console.log("Error while connecting redis", err);
})

export const checkStatus = () => {
    try {
        console.log("Redis status", redis.status);
    } catch (err) {
        console.log(err);
    }
}
