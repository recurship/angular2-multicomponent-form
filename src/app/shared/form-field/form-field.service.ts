import { Injectable } from '@angular/core';
import { RequiredValidator, PatternValidator, MinLengthValidator, MaxLengthValidator } from './validator';
import { FormField, TextFormField, SelectFormField, RadioFormField, NumberFormField } from './form-field';

@Injectable()
export class FormFieldService {
  
  constructor() {}
  
  getFormFields() {
    return [{
      section: 'step1',
      fields: [
        new TextFormField('input_name', 'Your name', '', false, '', [new RequiredValidator('Required..'), new MinLengthValidator(5, 'Minimum length should be 5'), new MaxLengthValidator(15, 'Maximum length should be 15')]),
        new SelectFormField('input_relationship_status', ['Single', 'Couple'], 'Relationship Status', false, 'Couple'),
        new SelectFormField('input_region', [], 'Region', false, 'Greater London'),
        new SelectFormField('input_area', [], 'Area', false),
        new NumberFormField('input_age_user', 'Age', '0', '0', true, [new PatternValidator('^([1-9]|[1-9][0-9]|[1][0-4][0-9]|150)$', 'Age must between (min: 1 and max: 150)')]),
        new SelectFormField('input_number_of_children', ['0','1','2','3','4','5'], 'Number of chlidren', false, '0'),
        new NumberFormField('input_age_partner', 'Partner Age', '0', '0', false),
      ]
    },
    {
      section: 'step2',
      fields: [
        new NumberFormField('input_number_of_disabilities', 'Number of Disabilities', '0', '0', false),
        new TextFormField('input_savings', 'Savings', '', false, 'Total savings you currently have', [new RequiredValidator('Required..'), new PatternValidator('^([1-9][0-9]*)$', 'The savings needs to be a number greater than zero.')]),
        new NumberFormField('input_dependants', 'Number of Dependants', '0', '0', false),
        new RadioFormField('input_carer_single', 'Are you a carer?', ['No', 'Yes'], 'Yes', false),
        new NumberFormField('input_child_age_1', 'Age of Child 1', '0', '0', false),
        new NumberFormField('input_child_age_2', 'Age of Child 2', '0', '0', false),
        new NumberFormField('input_child_age_3', 'Age of Child 3', '0', '0', false),
        new NumberFormField('input_child_age_4', 'Age of Child 4', '0', '0', false),
        new NumberFormField('input_child_age_5', 'Age of Child 5', '0', '0', false),
        new SelectFormField('input_child_disability_1', ['Yes', 'No'], 'Relationship Status', false, 'Single'),
      ]
    }];
  }

}
