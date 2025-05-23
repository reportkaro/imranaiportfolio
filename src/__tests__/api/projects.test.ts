import { validateProjectQuery } from '../../utils/api/validation';

// Mock logging function to prevent console output during tests
jest.mock('../../utils/api/logging', () => ({
  log: jest.fn(),
  LogLevel: {
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    DEBUG: 'debug',
  },
}));

describe('Projects Query Validation', () => {
  it('accepts empty query parameters with defaults', () => {
    const result = validateProjectQuery({});
    
    expect(result.valid).toBe(true);
    expect(result.params).toBeDefined();
    expect(Object.keys(result.params).length).toBe(0);
  });

  it('validates category parameter', () => {
    // Valid category
    const validResult = validateProjectQuery({
      category: 'web-development',
    });
    
    expect(validResult.valid).toBe(true);
    expect(validResult.params.category).toBe('web-development');
    
    // Invalid category (too long)
    const longCategory = 'a'.repeat(51);
    const invalidResult = validateProjectQuery({
      category: longCategory,
    });
    
    expect(invalidResult.valid).toBe(false);
    expect(invalidResult.errors).toHaveProperty('category');
    expect(invalidResult.errors.category).toContain('between 1 and 50');
  });

  it('validates featured flag parameter', () => {
    // Featured true
    const trueResult = validateProjectQuery({
      featured: 'true',
    });
    
    expect(trueResult.valid).toBe(true);
    expect(trueResult.params.featured).toBe(true);
    
    // Featured false
    const falseResult = validateProjectQuery({
      featured: 'false',
    });
    
    expect(falseResult.valid).toBe(true);
    expect(falseResult.params.featured).toBe(false);
  });

  it('validates limit parameter', () => {
    // Valid limit
    const validResult = validateProjectQuery({
      limit: '20',
    });
    
    expect(validResult.valid).toBe(true);
    expect(validResult.params.limit).toBe(20);
    
    // Invalid limit (non-numeric)
    const nonNumericResult = validateProjectQuery({
      limit: 'invalid',
    });
    
    expect(nonNumericResult.valid).toBe(false);
    expect(nonNumericResult.errors).toHaveProperty('limit');
    
    // Invalid limit (negative)
    const negativeResult = validateProjectQuery({
      limit: '-5',
    });
    
    expect(negativeResult.valid).toBe(false);
    expect(negativeResult.errors).toHaveProperty('limit');
    
    // Invalid limit (too large)
    const tooLargeResult = validateProjectQuery({
      limit: '101',
    });
    
    expect(tooLargeResult.valid).toBe(false);
    expect(tooLargeResult.errors).toHaveProperty('limit');
  });

  it('validates page parameter', () => {
    // Valid page
    const validResult = validateProjectQuery({
      page: '2',
    });
    
    expect(validResult.valid).toBe(true);
    expect(validResult.params.page).toBe(2);
    
    // Invalid page (non-numeric)
    const nonNumericResult = validateProjectQuery({
      page: 'invalid',
    });
    
    expect(nonNumericResult.valid).toBe(false);
    expect(nonNumericResult.errors).toHaveProperty('page');
    
    // Invalid page (negative)
    const negativeResult = validateProjectQuery({
      page: '-1',
    });
    
    expect(negativeResult.valid).toBe(false);
    expect(negativeResult.errors).toHaveProperty('page');
    
    // Invalid page (zero)
    const zeroResult = validateProjectQuery({
      page: '0',
    });
    
    expect(zeroResult.valid).toBe(false);
    expect(zeroResult.errors).toHaveProperty('page');
  });

  it('validates multiple parameters together', () => {
    // All valid parameters
    const allValidResult = validateProjectQuery({
      category: 'web-development',
      featured: 'true',
      limit: '20',
      page: '2',
    });
    
    expect(allValidResult.valid).toBe(true);
    expect(allValidResult.params.category).toBe('web-development');
    expect(allValidResult.params.featured).toBe(true);
    expect(allValidResult.params.limit).toBe(20);
    expect(allValidResult.params.page).toBe(2);
    
    // Mix of valid and invalid parameters
    const mixedResult = validateProjectQuery({
      category: 'web-development',
      featured: 'true',
      limit: 'invalid',
      page: '-1',
    });
    
    expect(mixedResult.valid).toBe(false);
    expect(mixedResult.errors).toHaveProperty('limit');
    expect(mixedResult.errors).toHaveProperty('page');
    expect(mixedResult.params.category).toBe('web-development');
    expect(mixedResult.params.featured).toBe(true);
  });
});
