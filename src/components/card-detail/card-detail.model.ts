export interface BillModel {
    description: string;
    amount: string;
    title: string;
    date: string;
    person: string;
    buttonCancel?: string;
    buttonSave?: string;
    operation: string;
}