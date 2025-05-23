import { validateContactForm } from '../../utils/api/validation';

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

describe('Contact Form Validation', () => {
  it('validates required fields', () => {
    // Test with missing fields
    const emptyResult = validateContactForm({});
    
    expect(emptyResult.valid).toBe(false);
    expect(emptyResult.errors).toHaveProperty('name');
    expect(emptyResult.errors).toHaveProperty('email');
    expect(emptyResult.errors).toHaveProperty('message');
    
    // Test with only name
    const nameOnlyResult = validateContactForm({
      name: 'Test User',
    });
    
    expect(nameOnlyResult.valid).toBe(false);
    expect(nameOnlyResult.errors).not.toHaveProperty('name');
    expect(nameOnlyResult.errors).toHaveProperty('email');
    expect(nameOnlyResult.errors).toHaveProperty('message');
  });

  it('validates email format', () => {
    // Test with invalid email
    const invalidEmailResult = validateContactForm({
      name: 'Test User',
      email: 'not-an-email',
      message: 'This is a test message that is more than 10 characters.',
    });
    
    expect(invalidEmailResult.valid).toBe(false);
    expect(invalidEmailResult.errors).toHaveProperty('email');
    
    // Test with valid email
    const validEmailResult = validateContactForm({
      name: 'Test User',
      email: 'valid@example.com',
      message: 'This is a test message that is more than 10 characters.',
    });
    
    expect(validEmailResult.valid).toBe(true);
    expect(validEmailResult.errors).not.toHaveProperty('email');
  });

  it('validates message length', () => {
    // Test with too short message
    const shortMessageResult = validateContactForm({
      name: 'Test User',
      email: 'valid@example.com',
      message: 'Too short',
    });
    
    expect(shortMessageResult.valid).toBe(false);
    expect(shortMessageResult.errors).toHaveProperty('message');
    expect(shortMessageResult.errors.message).toContain('between 10 and 2000');
    
    // Create a very long message (over 2000 characters)
    const longMessage = 'a'.repeat(2001);
    
    // Test with too long message
    const longMessageResult = validateContactForm({
      name: 'Test User',
      email: 'valid@example.com',
      message: longMessage,
    });
    
    expect(longMessageResult.valid).toBe(false);
    expect(longMessageResult.errors).toHaveProperty('message');
    expect(longMessageResult.errors.message).toContain('between 10 and 2000');
  });

  it('validates name length', () => {
    // Test with too short name
    const shortNameResult = validateContactForm({
      name: 'A', // Only 1 character
      email: 'valid@example.com',
      message: 'This is a test message that is more than 10 characters.',
    });
    
    expect(shortNameResult.valid).toBe(false);
    expect(shortNameResult.errors).toHaveProperty('name');
    expect(shortNameResult.errors.name).toContain('between 2 and 100');
    
    // Create a very long name (over 100 characters)
    const longName = 'a'.repeat(101);
    
    // Test with too long name
    const longNameResult = validateContactForm({
      name: longName,
      email: 'valid@example.com',
      message: 'This is a test message that is more than 10 characters.',
    });
    
    expect(longNameResult.valid).toBe(false);
    expect(longNameResult.errors).toHaveProperty('name');
    expect(longNameResult.errors.name).toContain('between 2 and 100');
  });

  it('validates optional subject length', () => {
    // Test with valid subject
    const validSubjectResult = validateContactForm({
      name: 'Test User',
      email: 'valid@example.com',
      message: 'This is a test message that is more than 10 characters.',
      subject: 'Test Subject',
    });
    
    expect(validSubjectResult.valid).toBe(true);
    expect(validSubjectResult.errors).not.toHaveProperty('subject');
    
    // Create a very long subject (over 200 characters)
    const longSubject = 'a'.repeat(201);
    
    // Test with too long subject
    const longSubjectResult = validateContactForm({
      name: 'Test User',
      email: 'valid@example.com',
      message: 'This is a test message that is more than 10 characters.',
      subject: longSubject,
    });
    
    expect(longSubjectResult.valid).toBe(false);
    expect(longSubjectResult.errors).toHaveProperty('subject');
    expect(longSubjectResult.errors.subject).toContain('less than 200');
  });

  it('accepts valid form data', () => {
    // Test with all required fields and valid data
    const validResult = validateContactForm({
      name: 'Test User',
      email: 'valid@example.com',
      message: 'This is a test message that is more than 10 characters.',
      subject: 'Test Subject',
    });
    
    expect(validResult.valid).toBe(true);
    expect(Object.keys(validResult.errors).length).toBe(0);
  });
});
