jest.mock('axios');
import axios from 'axios';
import {getUser, getUsers} from "../../services/users";


describe('users services', () => {
  describe('get users', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return users and pass limit, offset, name params', async () => {
      axios.mockResolvedValue({data: 'result'});
      const result = await getUsers('http://test.com', 30, 5, 'test');
      expect(result).toEqual({data: 'result'});

      expect(axios).toHaveBeenCalled();
      expect(axios.mock.calls[0]).toEqual([
        'http://test.com/users',
        {
          method: 'GET',
          params: {limit: 30, offset: 5, name: 'test'}
        }
      ]);
    });

    it('should return users and pass correct default params when they are not set', async () => {
      axios.mockResolvedValue({data: [{foo: 0, bar: true}]});
      const result = await getUsers('http://test456.com');
      expect(result).toEqual({data: [{foo: 0, bar: true}]});

      expect(axios).toHaveBeenCalled();
      expect(axios.mock.calls[0]).toEqual([
        'http://test456.com/users',
        {
          method: 'GET',
          params: {limit: 20, offset: 0, name: ''}
        }
      ]);
    });
  });

  describe('get user', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return user and pass user id', async () => {
      axios.mockResolvedValue({data: {user: 'test1'}});
      const result = await getUser('http://test123.com', 24);
      expect(result).toEqual({data: {user: 'test1'}});

      expect(axios).toHaveBeenCalled();
      expect(axios.mock.calls[0]).toEqual([
        'http://test123.com/user/24',
        {method: 'GET'}
      ]);
    });

    it('should return error if id is not passed', async () => {
      axios.mockResolvedValue({data: {user: 'test1'}});
      try {
        await getUser('http://test.com');
        throw new Error('Error should occur');
      } catch (e) {
        expect(e.message).toBe('User id is not defined');
      }
      expect(axios).not.toHaveBeenCalled();
    });
  });
});