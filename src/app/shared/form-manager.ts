import { Injectable } from '@angular/core';
import { FormBuilder, ControlGroup, Control, Validators  } from '@angular/common';
import { FormField, FormFieldService } from './form-field';

@Injectable()
export class FormManager {

  public mainForm: ControlGroup;
  public fields;

  constructor(fb: FormBuilder, formFieldService: FormFieldService) {
    this.fields = formFieldService.getFormFields();
    let sections = {};

    for (let section of this.fields) {
      // dynamically generate the control groups
      let controlGroup = {};
      for (let field of section.fields) {
        if (!field.hidden) {
          controlGroup[field.name] = [field.defaultValue].concat(this.getFieldValidators(field));
        } else {
          controlGroup[field.name] = [field.defaultValue];
        }
      }

      sections[section.section] = fb.group(controlGroup);
    }
    this.mainForm = fb.group(sections);
  }

  valueUpdated(field: FormField, value: any) {
    console.log('Form updated', field.name, value);
  }

  getFieldValidators(field) {
    let result = [];

    for (let validation of field.validations) {
      result.push((validation.data ? Validators[validation.type](validation.data) : Validators[validation.type]));
    }

    return (result.length > 0) ? [Validators.compose(result)] : [];
  }

  getField(name: string) {
    let search = [];
    this.fields.forEach(section => {
      section.fields.forEach(field => {
        if (field.name === name) {
          search.push(field);
          let control: ControlGroup = <ControlGroup>this.mainForm.controls[section.section];
          search.push(control.controls[name]);
        }
      })
    })

    if (search.length <= 0)
      throw new Error(`Field with name: ${name} not found`)

    return search;
  }

}
