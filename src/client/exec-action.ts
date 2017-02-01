export class ExecAction{
   name: string;
   description: string;
   fullTextUrl:string;
   constructor (name:string, description:string, fullTextUrl?:string)
   {
      this.name =name;
      this.description=description;
      this.fullTextUrl = fullTextUrl
   }
}
