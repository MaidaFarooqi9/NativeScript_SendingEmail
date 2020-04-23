import {Component} from "@angular/core";
import * as Toast from 'nativescript-toast';
import { EmailValidator } from "@angular/forms";
import * as email from 'nativescript-email';
@Component({
    moduleId: module.id,
    selector: "try",
    templateUrl: 'try.component.html',
    styleUrls:['try.component.css']

})

export class TryComponent{

constructor(){
}

x="";
showtoast(){
const toast=Toast.makeText("hello");
this.x="hi";

}

email(){
    email.available().then((avail:boolean)=>{
        if(avail){
            email.compose({
                to:['maidafarooqi9@gmail,com'],
                subject:'[maida]:Query',
                body: 'Dear Mam: '});}

                else {
                    const t=Toast.makeText("no");
                    t.show();
                }
            })
        }

}

