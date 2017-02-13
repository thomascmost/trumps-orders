import * as moment from 'moment';

export class ExecAction{
   name: string;
   description: string;
   fullTextUrl:string;
   date: moment.Moment;
   constructor (name:string, description:string, fullTextUrl?:string, dateString?: string)
   {
      this.name =name;
      this.description=description;
      this.fullTextUrl = fullTextUrl
      this.date = moment(dateString)
   }
}
