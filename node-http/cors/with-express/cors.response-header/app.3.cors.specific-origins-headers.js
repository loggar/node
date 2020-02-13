app.use(
  cors({
    origin: "http://localhost:3000", // restrict calls to those this address
    methods: "GET" // only allow GET requests
  })
);