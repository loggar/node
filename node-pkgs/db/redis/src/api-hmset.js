client.HMSET(key2, {
    "0123456789": "abcdefghij", // NOTE: key and value will be coerced to strings 
    "some manner of key": "a type of value"
});

client.HMSET(key1, "0123456789", "abcdefghij", "some manner of key", "a type of value");