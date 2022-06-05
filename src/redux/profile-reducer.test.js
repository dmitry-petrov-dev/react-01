import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator,
} from "./profile-reducer";

// 1. Prepare test data
const state = {
  posts: [
    { id: 1, message: "Hello, World!", likesCount: 12 },
    { id: 2, message: "second post", likesCount: 10 },
    { id: 3, message: "third post", likesCount: 5 },
  ],
};
const testMessage = "Test message";

test("Length of post should be incremented", () => {
  const action = addPostActionCreator(testMessage);
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expaction
  expect(newState.posts.length).toBe(4);
});

test("Text message should be correct", () => {
  const action = addPostActionCreator(testMessage);
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expaction
  expect(newState.posts[3].message).toBe(testMessage);
});

test("After deleting length of messages should be decrement", () => {
  const action = deletePostActionCreator(1);
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expaction
  expect(newState.posts.length).toBe(2);
});

test("After deleting length shouldn't be decrement if id is incorrect", () => {
  const action = deletePostActionCreator(10);
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expaction
  expect(newState.posts.length).toBe(3);
});
