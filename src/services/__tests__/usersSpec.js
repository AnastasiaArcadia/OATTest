jest.mock('axios');
import axios from 'axios';
jest.mock('../../auth');
import {getUser, getUsers} from "../../services/users";


describe('users services', () => {
  it('should return users and pass limit, offset parama', () => {
    const action = {
      type: 'LOAD_USERS_SUCCESS',
      payload: {c: 'd'}
    };
    expect(getUsers('http://test.com', 5, 30)).toEqual(action);
  });

  it('should return data for load use success', () => {
    const action = {
      type: 'LOAD_USER_SUCCESS',
      payload: {a: {b: 42}}
    };
    expect(loadUserSuccess({
      data: {a: {b: 42}}
    })).toEqual(action);
  });

  it('should set error for load users failed', () => {
    const action = {
      type: 'LOAD_USERS_FAILED',
      payload: 'test error 123'
    };
    expect(loadUsersFailed('test error 123')).toEqual(action);
  });

  it('should set error for load user failed', () => {
    const action = {
      type: 'LOAD_USER_FAILED',
      payload: 'test error 456'
    };
    expect(loadUserFailed('test error 456')).toEqual(action);
  });
});