# The hidden power of Jest matchers

refs
* https://medium.com/@boriscoder/the-hidden-power-of-jest-matchers-f3d86d8101b0

Not very many people know, that Jasmine provides you an ability to customize the result of equality check, which is internally used in `toEqual`, `toHaveBeenCalledWith`, and other matchers.

Basically, it means that if the right-side object has an `asymmetricMatch` method, the result if its call will be used instead of an actual deep-equality check.

```js
const fooOrBar = {
  asymmetricMatch: actual => actual === 'foo' || actual === 'bar'
};
expect('foo').toEqual(fooOrBar); // passes
expect('bar').toEqual(fooOrBar); // passes
expect('baz').toEqual(fooOrBar); // fails, not either 'foo' or 'bar'
expect(fooOrBar).toEqual('foo'); // fails, works only at right side
```

This feature is available in Jasmine and described pretty well in the official documentation. Also Jest, which uses Jasmine underneath also officially supports it as it is described in the documentation.

Today I will try to highlight some examples, where asymmetric matches will be surprisingly powerful and allow you to write much simpler code than before. All code examples bellow will be based on Jest, however, the difference with Jasmine will not be very big, the general approach will be the same.

## Match calls with function in arguments

Imagine, that you need to test that some API method was called properly. When all method parameters are plain objects or primitives, it is easy:

```js
fakeApi.method({options: true});
expect(fakeApi.method).toHaveBeenCalledWith({options:true});
```

But if method accepts also a callback, it will be not quite simple

```js
fakeApi.asyncOperation(result => {
  console.log(result)
});
expect(fakeApi.method).toHaveBeenCalledWith(result => {
  console.log(result));
});
```

This will not work because functions are not equal to each other. To make this work, you need to store a reference to the callback and use it later in assertion

```js
const callback = (result) => console.log(result);
fakeApi.asyncOperation(callback);
expect(fakeApi.method).toHaveBeenCalledWith(callback);
```

But this is not always possible. In some cases, this callback will be provided by somebody else and you will not get the direct access to it. Therefore, will not be able to use `toHaveBeenCalledWith`, for this kind of tests.

This is the case, where asymmetric matches may come and help you. We can write an assertion, that method was called with some function, but doesn’t matter what exactly. Jest (actually, Jasmine) gives us a set of predefined asymmetric matches, for example, `expect.any(<type>)` that returns true for any value with specified type

```js
fakeApi.doAsync((result) => console.log(result));
expect(fakeApi.doAsync).toHaveBeenCalledWith(expect.any(Function));
```

Great! Now we are may do assertions, but skip some values, that not possible to check strictly. In addition to this we may use `expect.anything` to tell that here any value is allowed, except undefined or null. This may be useful, when only some method arguments make sense for you

```js
circle.show({x: 10, y: 15}, {color: 'blue'});
expect(circle.show).toHaveBeenCalledWith({x: 10, y: 15}, expect.anything());
```

Also we can use those matches at any level, not only on top, so we can check types of provided arguments, without mentioning values

```js
circle.show({x: 10, y: 15}, {color: 'blue'});
expect(circle.show).toHaveBeenCalledWith({
  x: expect.any(Number),
  y: expect.any(Number)
}, {
  color: expect.any(String)
});
```

Using asymmetric matches as a placeholder for some spy arguments helps you to focus on the most important stuff in your tests.

## Ignoring values, relative to current time

We can use the same technique to suppress checks for some values that are based on your testing environment, for example, data that is produced from the current date.

Every time, when you writing an assertion on the object, that contains generated timestamp, you need to find a way to mock system time. You can use any time-mocking library to stub value of `Date.now()` and `new Date()`, but also you can use asymmetric matchers magic. For example, we have a function, that generates an object representing comment entity, that will be saved. It has a field `createdAt`, which is taken from the current time. When we are writing a test on it, we can put an asymmetric placeholder instead of timestamp:

```js
const comment = createComment('test content', 'author@me.com');
expect(post).toEqual({
  createdAt: expect.any(Date),
  content: 'test content',
  author: 'author@me.com'
});
```

So, now we have got everything tested, but didn’t look very much into minor details. Basically, the pattern is the following: if you have some value, that should exist in tested data, but you don’t what exactly it is, replace it with `expect.any` or `expect.anything`.

## Partial match for complex objects

Here is a lot of use-cases when you are receiving a big object, but only few fields make sense for you. When you are testing this code, you also would like to mention only important fields, but not others, that may be changed, without any effect for your code. Asymmetric matchers like `expect.objectContaining` and `expect.arrayContaining` may help you there:

```js
const user = prepareUserInfo('test-user'); 
// user object is something like ... 
// {
//   id: 123,
//   name: 'test-user',
//   profile: {...},
//   passwordHash: '*****',
//   whatever: {...}
// }
// ... but for the test we are interested only in name and id
expect(user).toEqual(expect.objectContaining({
  id: 123,
  name: 'test-user'
}));
```

You can make your test code cleaner, when you explicitly mention the only limited set of values, that it important for the test. Remember the crucial test pattern: one test — one feature.

Same for arrays. If you are getting the array of TODOs, but you need to find only recently added, use `expect.arrayContaning`

```js
const newTodo = {text: 'increase test coverage'};
addTodo(newTodo);
expect(todos).toEqual(expect.arrayContaning([newTodo]));
```

Here you don’t need to care about items order. The goal of the test was to check, that recently added todo appears in the list, and we did it just fine.

## Putting everything together

Here I tried to highlight some use cases, where asymmetric matches may be useful. But this is not the full list. Just remember, that every time you may replace any complex value with a simple placeholder to make your test code shorter and more expressive. So, I’d like to finish the post with this little code snippet, where you can see all asymmetric matches together.

```js
expect(store.getState()).toEqual({
  todosById: expect.any(Object),
  filters: expect.arrayContaining(['completed']),
  user: expect.objectContaining({
    name: 'test-user',
    profile: expect.objectContaining({
      email: 'test-user@example.com'
    })
  })
});
```

Let’s assume, that `store.getState()` produces you a very big object. Usually, you have to write several assertions to check such data. But with asymmetric matchers you can do this with a simple check. Mark everything, that is important for you and ignore the rest. I hope you also have found this feature useful will give it a try in your projects as well as me.