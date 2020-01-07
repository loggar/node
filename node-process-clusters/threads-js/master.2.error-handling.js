import { spawn, Thread, Worker } from "threads";

async function main() {
  let auth, hashed;

  try {
    auth = await spawn(new Worker("./auth"));
  } catch (error) {
    // Cannot spawn the worker or crashed immediately before doing anything
  }

  try {
    hashed = await auth.hashPassword("Super secret password", "1234");
  } catch (error) {
    // Hashing this password failed
  }

  console.log("Hashed password:", hashed);

  await Thread.terminate(auth);
}

main().catch(console.error);
