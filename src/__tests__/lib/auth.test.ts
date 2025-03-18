import { authOptions } from '@/lib/auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { compare } from 'bcrypt';

// Mock dependencies
jest.mock('@auth/prisma-adapter', () => ({
  PrismaAdapter: jest.fn().mockReturnValue({ adapter: 'mocked-adapter' }),
}));

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

jest.mock('@/lib/db', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
  },
}));

describe('Auth Configuration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should use PrismaAdapter', () => {
    expect(authOptions.adapter).toBe('mocked-adapter');
    expect(PrismaAdapter).toHaveBeenCalled();
  });

  it('should have the correct session strategy', () => {
    expect(authOptions.session.strategy).toBe('jwt');
  });

  it('should have the correct pages configuration', () => {
    expect(authOptions.pages).toEqual({
      signIn: '/login',
      signOut: '/login',
      error: '/login',
    });
  });

  describe('Credentials Provider', () => {
    let credentialsProvider: any;

    beforeEach(() => {
      credentialsProvider = authOptions.providers.find(
        (provider) => provider.id === 'credentials'
      );
    });

    it('should have a credentials provider', () => {
      expect(credentialsProvider).toBeDefined();
      expect(credentialsProvider.id).toBe('credentials');
      expect(credentialsProvider.name).toBe('Credentials');
    });

    it('should have email and password credentials', () => {
      expect(credentialsProvider.credentials).toEqual({
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      });
    });

    describe('authorize function', () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        password: 'hashed-password',
      };

      it('should return null if email or password is missing', async () => {
        const result = await credentialsProvider.authorize({
          email: 'test@example.com',
          password: '',
        });
        expect(result).toBeNull();
      });

      it('should return null if user is not found', async () => {
        const prisma = require('@/lib/db').prisma;
        prisma.user.findUnique.mockResolvedValue(null);

        const result = await credentialsProvider.authorize({
          email: 'test@example.com',
          password: 'password123',
        });

        expect(prisma.user.findUnique).toHaveBeenCalledWith({
          where: { email: 'test@example.com' },
        });
        expect(result).toBeNull();
      });

      it('should return null if password does not match', async () => {
        const prisma = require('@/lib/db').prisma;
        prisma.user.findUnique.mockResolvedValue(mockUser);
        (compare as jest.Mock).mockResolvedValue(false);

        const result = await credentialsProvider.authorize({
          email: 'test@example.com',
          password: 'wrong-password',
        });

        expect(prisma.user.findUnique).toHaveBeenCalledWith({
          where: { email: 'test@example.com' },
        });
        expect(compare).toHaveBeenCalledWith('wrong-password', 'hashed-password');
        expect(result).toBeNull();
      });

      it('should return user if credentials are valid', async () => {
        const prisma = require('@/lib/db').prisma;
        prisma.user.findUnique.mockResolvedValue(mockUser);
        (compare as jest.Mock).mockResolvedValue(true);

        const result = await credentialsProvider.authorize({
          email: 'test@example.com',
          password: 'correct-password',
        });

        expect(prisma.user.findUnique).toHaveBeenCalledWith({
          where: { email: 'test@example.com' },
        });
        expect(compare).toHaveBeenCalledWith('correct-password', 'hashed-password');
        expect(result).toEqual({
          id: '1',
          email: 'test@example.com',
          name: 'Test User',
        });
      });
    });
  });
});
