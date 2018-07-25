
export class PasteText {
  constructor(
    public id: number,
    public hash: string,
    public content: string,
    public language: number,
    public child: string,
    public parent: string,
    public createByGuest: string,
    public createByUser: string,
    public createByTime: string
  ) {  }

}
