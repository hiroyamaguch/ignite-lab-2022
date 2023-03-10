import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a content', () => {
    expect(() => new Content('content')).toBeTruthy();
  });

  it('should not be able to create a notification with less than 5 characters', () => {
    expect(() => new Content('')).toThrow();
  });

  it('should not be able to create a notification with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
