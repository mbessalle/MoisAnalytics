import { cn } from '@/lib/utils';

describe('Utils', () => {
  describe('cn function', () => {
    it('should merge class names correctly', () => {
      const result = cn('class1', 'class2');
      expect(result).toBe('class1 class2');
    });

    it('should handle conditional classes', () => {
      const result = cn('class1', true && 'class2', false && 'class3');
      expect(result).toBe('class1 class2');
    });

    it('should handle undefined and null values', () => {
      const result = cn('class1', undefined, null, 'class2');
      expect(result).toBe('class1 class2');
    });

    it('should handle empty strings', () => {
      const result = cn('class1', '', 'class2');
      expect(result).toBe('class1 class2');
    });

    it('should handle objects with boolean values', () => {
      const result = cn('class1', { class2: true, class3: false });
      expect(result).toBe('class1 class2');
    });

    it('should handle arrays of class names', () => {
      const result = cn('class1', ['class2', 'class3']);
      expect(result).toContain('class1');
      expect(result).toContain('class2');
      expect(result).toContain('class3');
    });

    it('should handle complex combinations', () => {
      const result = cn(
        'class1',
        { class2: true, class3: false },
        undefined,
        ['class4', null],
        ''
      );
      expect(result).toContain('class1');
      expect(result).toContain('class2');
      expect(result).toContain('class4');
      expect(result).not.toContain('class3');
    });
  });
});
