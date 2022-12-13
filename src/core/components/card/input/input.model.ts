
export interface InputModel {
    type: string;
    value: string;
    id: string;
    placeholder: string;
    setValue: () => void,
    required?: boolean
    disabled?: boolean

};