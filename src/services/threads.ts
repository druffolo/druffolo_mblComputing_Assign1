import { Thread } from "../models/thread";
import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';


@Injectable()
export class ThreadsService {

    constructor(public http: Http) {
        console.log('Hello ForumServiceProvider Provider');
      }

    // public threads: Thread[] = [];
    // public uploadlist: Thread [] = [];
    // public threads: Array<Thread> = [];

    addThread(title: string,
             description: string)
            
            {
                console.log(title);
                 const thread = new Thread(title, description);
                 console.log(thread);
               
     
                 
                 
             }

             

            //  loadThreads(){
            //      return this.threads.slice();
            //  }
}
