import { Validator } from './validator';

export class FormField {
    constructor(
       public name: string,      
       public label: string, 
       public defaultValue: string = '',
       public hidden: boolean,
       public validations: Validator[] = []) {}  
}

export class TextFormField extends FormField {
    
    public type: string = 'text';
    
    constructor(
       public name: string,      
       public label: string, 
       public defaultValue: string = '',
       public hidden: boolean,
       public placeholder: string = '',
       public validations: Validator[] = []) {
        super(name, label, defaultValue, hidden, validations);
    }
    
}

export class SelectFormField extends FormField {
    
    public type: string = 'select';
    
    constructor(
       public name: string,
       public options: Array<string>,      
       public label: string, 
       public hidden: boolean,
       public defaultValue: string = '',
       public validations: Validator[] = []) {
        super(name, label, defaultValue, hidden, validations);
    }
    
}

export class NumberFormField extends FormField {
    
    public type: string = 'number';
    
    constructor(
       public name: string,
       public label: string,
       public min: string = '', 
       public defaultValue: string = '0',
       public hidden: boolean,
       public validations: Validator[] = []) {
      super(name, label, defaultValue, hidden, validations);
    }

}

export class RadioFormField extends FormField {
    
    public type: string = 'radio';
    
    constructor(
       public name: string,
       public label: string,
       public options: Array<string>,
       public defaultValue: string = '',
       public hidden: boolean,
       public validations: Validator[] = []) {
      super(name, label, defaultValue, hidden, validations);
    }

}
