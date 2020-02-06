import usersReducer from "../users";


describe('users reducers', () => {
  it('should set users for load users success', () => {
    const action = {
      type: 'LOAD_USERS_SUCCESS',
      payload: [
        {a: 'b'},
        {c: 'd'}
      ]
    };
    expect(usersReducer({}, action)).toEqual({
      users: [
        {a: 'b'},
        {c: 'd'}
      ]
    });
  });

  it('should set user for load user success', () => {
    const action = {
      type: 'LOAD_USER_SUCCESS',
      payload: {c: 'd'}
    };
    const state = {users: [{a: 'b'}]};

    expect(usersReducer(state, action)).toEqual({
      user: {c: 'd'},
      users: [{a: 'b'}]
    });
  });

  it('should set error for load users failed', () => {
    const action = {
      type: 'LOAD_USERS_FAILED',
      payload: 'test error 123'
    };

    expect(usersReducer({}, action)).toEqual({error: 'test error 123'});
  });

  it('should set error for load user failed', () => {
    const action = {
      type: 'LOAD_USER_FAILED',
      payload: 'test error 456'
    };
    const state = {user: {b: 'c'}};

    expect(usersReducer(state, action)).toEqual({
      user: {b: 'c'},
      error: 'test error 456'
    });
  });
});
