export type ImitatorAction = {
    prob: number;
    action: string
}
export const imitatorActions: ImitatorAction[] = [
    {prob: 80, action: 'nothing'},
    {prob: 90, action: 'add'},
    {prob: 95, action: 'update'},
    {prob: 100, action: 'remove'}
  ]