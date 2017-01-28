export class Order{
   name: string;
   description: string;
   constructor (name:string, description:string, fullTextUrl?:string)
   {
      this.name =name;
      this.description=description;
      this.fullTextUrl = fullTextUrl
   }
}
