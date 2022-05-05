/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';

import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
})
export class VoicePage implements OnInit {


  bgcolor: string ='white';
  constructor(private speechRecognition: SpeechRecognition) {
  }

  ngOnInit() {
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean)=>{
      if(!hasPermission){
        this.speechRecognition.requestPermission()
        .then(
        () => console.log('Granted'),
        () => console.log ('Denied')
        )
      }
    });
  }

  start(){
    this.speechRecognition.startListening().subscribe(
      (matches: Array<string>)=> {
        this.bgcolor = matches[0];
      }
    )
  }

}
