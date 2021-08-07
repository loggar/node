const http = require("http");
const redis = require("redis");
const { RateLimiterRedis } = require("rate-limiter-flexible");

const redisClient = redis.createClient({
  enable_offline_queue: false,
});

// Maximum 20 requests per second
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 20,
  duration: 1,
  blockDuration: 2, // block for 2 seconds if consumed more than 20 points per second
});

http
  .createServer(async (req, res) => {
    try {
      const rateLimiterRes = await rateLimiter.consume(
        req.socket.remoteAddress
      );
      // Some app logic here

      res.writeHead(200);
      res.end();
    } catch {
      res.writeHead(429);
      res.end("Too Many Requests");
    }
  })
  .listen(3000);
