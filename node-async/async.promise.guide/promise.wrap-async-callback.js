async function getUser(id) {
  await null;
  if (!id) throw Error("with all frames present");
  return { id };
}

const userIds = [1, 2, 0, 3];

// 👍 now the line below is in the stacktrace
Promise.all(userIds.map(async (id) => await getUser(id))).catch(console.log);
