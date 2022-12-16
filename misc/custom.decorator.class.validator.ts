import { registerDecorator, ValidationOptions } from 'class-validator';
import * as moment from 'moment';

export function IsYYYYMMDDFormat(validationOptions?: ValidationOptions) {
  return function(object: unknown, propertyName: string): void {
    registerDecorator({
      name: 'IsYYYYMMDDFormat',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        message: `${propertyName} must be in YYYY-MM-DD format`,
        ...validationOptions
      },
      validator: {
        validate(value: unknown) {
          return typeof value === 'string' && moment(value, 'YYYY-MM-DD', true).isValid()
        }
      }
    });
  };
}